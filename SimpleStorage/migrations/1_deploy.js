const simpleStorage = artifacts.require("SimpleStorage");

module.exports = async (deployer)=>{
    // Deployment steps
    deployer.deploy(simpleStorage, 168);
}