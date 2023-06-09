const simpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', async (accounts)=>{

    it("TC1: Initial State Test", async ()=>{
        const app = await simpleStorage.deployed();
        const initState = await app.storedData();
        assert.equal(initState, 168, "Initial storedData MUST be 168.");
    });
    
    it("TC2: Set storedData Test", async ()=>{
        const app = await simpleStorage.deployed();
        await app.set(888);
        const newState = await app.get();
        assert.equal(newState, 888, "StoredData was not correctly set to 888.")
    });
});