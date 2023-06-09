const mappingStorage = artifacts.require('MappingStorage');

contract('MappingStorage', async (accounts)=>{

    it("TC1: Set Data Test", async ()=>{
        const app = await mappingStorage.deployed();
        await app.set(accounts[0], 100);
        await app.set(accounts[1], 500);
        const d0 = await app.get(accounts[0]);
        const d1 = await app.get(accounts[1]);
        assert.equal(d0, 100, "Set data for accounts[0] incorrectly.");
        assert.equal(d1, 500, "Set data for accounts[1] incorrectly.");
    })

});