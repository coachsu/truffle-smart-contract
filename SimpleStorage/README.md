# SimpleStorage
The simplest example of smart contract which stores an unsigned integer.

## Interface
### State
- uint **public** storedData
### Call
- function get() **external view** returns (uint) 
### Transaction
- function set(uint _x) **public**

## Node.js
**Step.1.** deploy SimpleStorage to target blockchain

**Step.2.** change directory to *SimpleStorage\app\nodejs*

**Step.3.** install required packages via YARN
```
$ yarn install
```

**Step.4.** replace blockchain node URI as required in *exmaple.js*. Truffle node is used by default.
```
const web3 = new Web3('http://localhost:9545'); 
```

**Step.5.** replace address and abi in *exmaple.js* by the values that can be found in *build/SimpleStorage.json*
```
const address = '';
const abi = ;
```

**Step.6.** run *example.js*
```
$ node example.js
```