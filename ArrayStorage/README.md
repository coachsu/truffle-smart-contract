# ArrayStorage
An example of smart contract which stores a dynamic unsigned integer array.

## Interface
### State
- uint[] **internal** data;

### Call
- function length() **external view** returns (uint)
- function get(uint _index) **external view** returns (uint)
- function getArray() **external view** returns (uint[] memory)

### Transaction
- function set(uint _index, uint _x) **public**
- function swap(uint _x, uint _y) **public**
- function remove(uint _index) **public**