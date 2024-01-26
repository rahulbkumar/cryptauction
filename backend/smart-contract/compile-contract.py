from web3 import Web3
from solcx import compile_files


SOL_PATH = 'store.sol'
CONTRACT_PATH = '/home/choijemi/learning/store-contract/store.sol'
CONTRACT_NAME = 'Storage'

compile_config = {
    'language' : 'Solidity',
    'sources' : {'Storage.sol' : {
        'urls' : [CONTRACT_PATH]}
    },
}

# web3.py instance
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

def compile_contract():
    # compile all contract files
    sol_contracts = compile_files([SOL_PATH])
    # print(sol_contracts)
    contract = sol_contracts[SOL_PATH + ':' + CONTRACT_NAME]
    # separate main file and link file
    Storage =  w3.eth.contract(
        abi=contract['abi'], bytecode=contract['bin'])

    # print(contract)
    # print(w3.eth.accounts[1])
    
    # Get transaction hash from deployed contract
    w3.eth.default_account = w3.eth.accounts[0]
    tx_hash = Storage.constructor().transact({'from':w3.eth.accounts[0]})
    # Get tx receipt to get contract address
    tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    print("hash ", tx_hash)
    print("rec ", tx_receipt)
    return tx_receipt['contractAddress']

compile_contract()
