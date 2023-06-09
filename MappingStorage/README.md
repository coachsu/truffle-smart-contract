# MappingStorage
An example of smart contract which stores a dynamic unsigned integer array indexed by account address.

## Interface
### State
- mapping(address => uint) **internal** data;

### Call
- function length() **external view** returns (uint)
- function get(address _key) **external view** returns (uint)

### Transaction
- function set(address _key, uint _x) **public**
- function swap(address _x, address _y) **public**
- function remove(address _key) **public**