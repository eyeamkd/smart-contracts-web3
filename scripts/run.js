const main = async () => {  
    const [owner,randomPerson] = await hre.ethers.getSigners(); //hre object comes in a HardHat executable environment
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //we get the hre object on the fly from the hardhat execution environment
    const waveContract = await waveContractFactory.deploy(); 
    await waveContract.deployed(); 
    console.log("Contract deployed to: ", waveContract.address);  
    console.log("Contract deployed by:", owner.address); 
    
    let hoiCount = await waveContract.getTotalHois(); 
    let waveTransaction = await waveContract.hoi();  
    await waveTransaction.wait(); 

    hoiCount = await waveContract.getTotalHois(); 

    waveTransaction = await waveContract.connect(randomPerson).hoi();
    await waveTransaction.wait();
    
    hoiCount = await waveContract.getTotalHois();

}; 


const runMain = async () => {
    try {
        await main(); 
        process.exit(0); 
    } catch (error) {
        console.log(error); 
        process.exit(1); 
    }
} 

runMain(); 

