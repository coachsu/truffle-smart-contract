const { Web3 } = require('web3');

// Blockchain node URI.
const web3 = new Web3('http://localhost:9545'); 

// Address and ABI of smart contract
const address = '';
const abi = ;

// Get accounts in blockchain node
web3.eth.getAccounts().then((accounts)=>{
    sender = accounts[0];

    // Create smart contract instance
    contract = new web3.eth.Contract(abi, address);

    // Access smart contract via call
    contract.methods.get().call().then((res)=>{
      console.log(res)
    });

    // Access smart contract via transaction
    contract.methods.set(666).send({'from': sender}).then((receipt)=>{
      contract.methods.get().call().then((res)=>{
        console.log(res)
      });
    });
});