from flask import Flask, request, jsonify
from flask_cors import CORS
import redis
from twilio.rest import Client
import time
import contract.contract_util

# Twilio apis
account_sid = ''
auth_token = ''

app = Flask(__name__)
CORS(app, resources=r'/*')
app.config['CORS_HEADERS'] = 'Content-Type'

redis_db = redis.Redis()
client = Client(account_sid, auth_token) # Twilio client

# Auction contract object
Auction = None
contract_addr = "0x0"
past_req = None
past_bid = None


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/redistest')
def redistest():
    redis_db.mset({"ipad21" : "turbo"})

    assert(redis_db.exists("ipad21"))
    assert(not redis_db.exists("331turbo"))
    print(redis_db.get("ipad21"))

    response = jsonify(message="turbo")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/auctor', methods=['POST'])
def auctor():
    global Auction
    global contract_addr
    global past_req
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    try:
        request_data = request.get_json()
    except Exception as e:
        print(e)
        return{"response" : "fail"}
    print("REQ ", request_data)
    if not past_req:
        past_req = request_data
    elif past_req == request_data:
        return {}
    past_req = request_data

    item = request_data['item']
    owner = request_data['owner']
    lowest_bid = request_data['bid']
    bidding_time = request_data['bid_time']
    reveal_time = request_data['reveal_time']

    if not redis_db.exists(item):
        redis_db.mset({item : owner})
    elif redis_db.get(item).decode() != owner:
        return {"response" : "fail", "owner" : redis_db.get(item).decode()}

    # Create auction
    try:
        Auction, contract_addr = contract.contract_util.compile_contract()
    except Exception as e:
        print(e)
        return {"response" : "fail", "owner" : redis_db.get(item).decode(), "reason" : "contract creation failed... Insuffient funds?"}

    # Create a bid with the seller (sets the minimum bid)
    try:
        lowest_bid = int(lowest_bid)
        assert(lowest_bid > 0)
        contract.contract_util.place_bid(contract_addr, lowest_bid, "SELLER")
    except Exception as e:
        print(e)
        return {"response" : "fail", "owner" : redis_db.get(item).decode(), "reason" : "bidding failed... Insuffient funds?"}

    time.sleep(2)
    client.api.account.messages.create(
        to="623",
        from_="2065",
        body="aftr markt: Your auction for {} has been placed 🙏. Bids will show here 🎉".format(item)
    )

    print("item-owner ", item, owner, redis_db.exists(item), redis_db.get(item).decode())
    return {"response" : "success", "contract" : contract_addr}

@app.route('/bidding', methods=['POST'])
def bidding():
    global Auction
    global past_req
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    request_data = request.get_json()
    item = request_data['item']
    buyer = request_data['buyer']
    bid = request_data['bid']
    tx_hash = "0x0"
    print("REQ ", request_data)

    if not past_req:
        past_req = request_data
    elif past_req == request_data:
        return {}
    past_req = request_data

    if not redis_db.exists(item):
        return {"response" : "fail", "reason" : "item does not exist!"}

    try:
        bid = int(bid)
        assert(bid > 0)
        tx_hash = contract.contract_util.place_bid(contract_addr, bid, "SELLER")
    except Exception as e:
        print(e)
        return {"response" : "fail", "owner" : redis_db.get(item).decode(), "reason" : "bidding failed... Insuffient funds?"}

    time.sleep(3)
    client.api.account.messages.create(
        to="6474",
        from_="5065",
        body="aftr markt: Your bid for {} has been placed 🙏. Bids will show here 🎉".format(item)
    )
    return {"response" : "success", "tx_hash": (tx_hash).hex()}


@app.route('/balance', methods=['GET', 'POST'])
def get_balance():
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    request_data = request.get_json()

    acct = request_data['account']
    return contract.contract_util.get_bal_account(acct)

@app.route('/orig', methods=['GET'])
def get_orig():
    return(contract.contract_util.get_orig_account())

if __name__ == '__main__':
    app.run(host='0.0.0.0')

'''
curl --header "Content-Type: application/json"  --request POST  --data '{"item":"truffle","owner":"chocolatier","bid":10,"bid_time":2,"reveal_time":2}'  http://localhost:5000/auctor

curl --header "Content-Type: application/json"  --request POST  --data '{"item":"truffle","buyer":"achoo","bid":100}'  http://localhost:5000/bidding

curl --header "Content-Type: application/json"  --request GET http://localhost:50
00/orig

curl --header "Content-Type: application/json"  --request POST  --data '{"account":"0xD7d9757075B9340E99fd736E96cf8f3cbD937E5e"}'  http://localhost:5000/balance
'''
