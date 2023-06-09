const arrayStorage = artifacts.require("ArrayStorage");

contract('ArrayStorage', async (accounts)=>{

    it("TC1: Initial Array Length Test", async ()=>{
        const app = await arrayStorage.deployed();
        const len = await app.length();
        assert.equal(len, 5, "Initial array length MUST be 5.");
    });
    
    it("TC2: Set Array Data Test", async ()=>{
        const app = await arrayStorage.deployed();
        var len = await app.length();
        for(i=0 ; i<len ; i++) {
            await app.set(i, i);
            const data = await app.get(i);
            assert.equal(Number(data), i, "Set data with index " + i + " incorrectly.")
        }
    });

    it("TC3: Swap Array Data Test", async ()=>{
        const app = await arrayStorage.deployed();
        var len = await app.length();
        for(i=0 ; i<len ; i++) {
            await app.set(i, i);
        }
        await app.swap(1,4);
        const d1 = await app.get(1);
        const d4 = await app.get(4);
        assert.equal(Number(d1), 4, "Swap data incorrectly");
        assert.equal(Number(d4), 1, "Swap data incorrectly");
    });
});