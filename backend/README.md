# aftr mrkt.

## Pre requisites
You must be running some sort of Ethereum client on a test net (or main net). For this project, we used Ganache/Parity. You should also be running a redis server.

## Sample backend api calls:
```
curl --header "Content-Type: application/json"  --request POST  --data '{"item":"truffle","owner":"chocolatier","bid":10,"bid_time":2,"reveal_time":2}'  http://localhost:5000/auctor

curl --header "Content-Type: application/json"  --request POST  --data '{"item":"truffle","buyer":"achoo","bid":100}'  http://localhost:5000/bidding

curl --header "Content-Type: application/json"  --request POST  --data '{"account":"0xD7d9757075B9340E99fd736E96cf8f3cbD937E5e"}'  http://localhost:5000/balance
```

### Running eth netstats
Make sure eth netstats (both front end and back end!) is installed
We will assume an Ethereum client (Ganache or Parity is fine) is running on port 8454

Back end: 
```
cd ~/bin
pm2 start processes.json
# Stopping backend
# pm2 stop all
```

Front end:
```
WS_SECRET=aSecret npm start
# Dashboard will be visible on localhost:3000
```

### Links
* ETH Backend dashboard: https://github.com/cubedro/eth-net-intelligence-api
* ETH Frontend dashboard: https://github.com/cubedro/eth-netstats

### Open source 
We used a lot of open sourced software in our project 💖
* Solidity blind auction contract
* Truffle
* Ganache
* Eth netstats
* Redis
* Flask

Note: We do not claim these open-sourced software as our own. 