// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {

    // State
    uint public storedData;
    
    // Constructor
    constructor(uint _x) {
        storedData = _x;
    }

    // Transaction
    function set(uint _x) public {
        storedData = _x;
    }
    
    // Call
    function get() external view returns (uint) {
        return storedData;
    }
}