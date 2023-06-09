const arrayStorage = artifacts.require("ArrayStorage");

module.exports = async (deployer)=>{
    // Deployment steps
    deployer.deploy(arrayStorage, 5);
}