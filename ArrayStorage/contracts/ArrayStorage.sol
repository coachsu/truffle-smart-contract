// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArrayStorage {

    // State
    uint[] internal data;
    
    // Constructor
    constructor(uint _size) {
        data = new uint[](_size);
    }
    
    // Call
    function length() external view returns (uint) {
        return data.length;
    }
    function get(uint _index) external view returns (uint) {
        return data[_index];
    }
    function getArray() external view returns (uint[] memory) {
        return data;
    }

    // Transaction
    function set(uint _index, uint _x) public {
        data[_index] = _x;
    }
    function swap(uint _x, uint _y) public {
        uint temp = data[_x];
        data[_x] = data[_y];
        data[_y] = temp;
    }
    function remove(uint _index) public {
        for(uint i = _index ; i < data.length-1 ; i++) {
            data[i] = data[i+1];
        }
        data.pop();
    }
}