// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract MappingStorage {
    
    // State
    mapping(address => uint) internal data;
        
    // Call
    function get(address _key) external view returns (uint) {
        return data[_key];
    }

    // Transaction
    function set(address _key, uint _x) public {
        data[_key] = _x;
    }
    function swap(address _x, address _y) public {
        uint temp = data[_x];
        data[_x] = data[_y];
        data[_y] = temp;
    }
    function remove(address _key) public {
        delete data[_key];
    }
}