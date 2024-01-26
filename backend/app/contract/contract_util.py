import web3
from web3 import Web3
from solcx import compile_files

import time
import os

SOL_PATH = os.getcwd() + '/contract/auction.sol'
CONTRACT_PATH = 'auction.sol'
CONTRACT_NAME = 'BlindAuction'

# web3.py instance
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

SELLER_ADDRESS = w3.eth.accounts[5]
BUYER1 = w3.eth.accounts[1]
BUYER2 = w3.eth.accounts[2]
Auction = None # Auction contract

def compile_contract(bidding_time=10, reveal_time=15):
    global Auction
    # compile all contract files
    sol_contracts = compile_files([SOL_PATH])
    contract = sol_contracts[SOL_PATH + ':' + CONTRACT_NAME]
    # separate main file and link file
    Auction =  w3.eth.contract(
        abi=contract['abi'], bytecode=contract['bin'])

    # Get transaction hash from deployed contract
    w3.eth.default_account = w3.eth.accounts[0]
    tx_hash = Auction.constructor(bidding_time, reveal_time, SELLER_ADDRESS).transact({'from':w3.eth.accounts[0]})
    # Get tx receipt to get contract address
    tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    # print("hash ", tx_hash)
    # print("rec ", tx_receipt)
    print("contract ", tx_receipt['contractAddress'])
    return (Auction, tx_receipt['contractAddress'])

def place_bid(contract, val=1, addr=w3.eth.accounts[5]):
    # Demoing...
    if addr == "SELLER":
        addr = SELLER_ADDRESS
    if addr == "BUYER1":
        addr = BUYER1
    elif addr == "BUYER2":
        addr = BUYER2
    # Params
    # val = 100
    fake = False
    secret = bytes("secrets", 'utf-8')
    bid_hash = Web3.solidityKeccak(['uint8', 'bool', 'bytes32'],[val, fake, secret])
    # print("BID HASH ", (bid_hash.hex()))

    tx_hash = Auction.functions.bid(bid_hash).transact({'from':addr, 'value':val, 'to':contract})
    tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    # print("hash ", tx_hash)
    # print("rec ", tx_receipt)
    return tx_hash

def reveal_bids(contract, val, addr):
    # val = 1
    fake = False
    secret = bytes("secrets", 'utf-8')

    tx_hash = Auction.functions.reveal([val], [fake], [secret]).transact({'from':addr, 'to':contract})
    tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    # print("hash ", tx_hash)
    # print("rec ", tx_receipt)

def withdraw_funds(contract, addr):
    tx_hash = Auction.functions.withdraw().transact({'from':addr, 'to':contract})

def end_auction(contract):
    tx_hash = Auction.functions.auctionEnd().transact({'from':SELLER_ADDRESS, 'to':contract})
    tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    # print("hash ", tx_hash)
    # print("rec ", tx_receipt)

def get_bal():
    bal1 = w3.eth.getBalance(SELLER_ADDRESS)
    buy_bal = w3.eth.getBalance(BUYER1)
    buy2 = w3.eth.getBalance(BUYER2)

    print("SELLER_ADDRESS ", bal1)
    print("buy_bal ", buy_bal)
    print("buy2 ", buy2)

def get_bal_account(acct):
    bal = w3.eth.getBalance(acct)
    print("bal ", bal)
    return {'acct':acct, 'bal': bal}
    # return "Account {} : {}".format(acct, bal)

def get_orig_account():
    return {'acct': w3.eth.accounts[0]}

# Some testing commands
# auc, contract_addr = compile_contract()
# get_bal()
# place_bid(contract_addr, 1000, BUYER1)
# place_bid(contract_addr, 4000, BUYER2)
# get_bal()
# time.sleep(3)
# reveal_bids(contract_addr, 1000, BUYER1)
# withdraw_funds(contract_addr, BUYER1)
# time.sleep(5)
# end_auction(contract_addr)
# time.sleep(1)
# get_bal()