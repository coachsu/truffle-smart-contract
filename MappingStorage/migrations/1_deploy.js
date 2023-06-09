const mappingStorage = artifacts.require("MappingStorage");

module.exports = async (deployer)=>{
    // Deployment steps
    deployer.deploy(mappingStorage);
}