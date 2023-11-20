const { ethers } = require('hardhat');

// Deployed contract Address.
const contractAddress = '0x31D3A7711a74b4Ec970F50c3eaf1ee47ba803A95'

let TaikoContractDeploy = {
    deploy: async function deployTaikoContract() {
        let deployer, taikoContract
        [deployer] = await ethers.getSigners()

        let TaikoContract = await ethers.getContractFactory(
            'LasborneTaiko', deployer
        )
        
        taikoContract = await TaikoContract.deploy()
        await taikoContract.deployed()
        console.log(taikoContract.address)
        return taikoContract
    }
}

let TaikoTransfer = {
    transfer: async function transferTokens(
        userAddress, TaikoContractAddress
    ) {
        let deployer_, taikoContract
        [deployer_] = await ethers.getSigners()
        let amount = ethers.utils.parseUnits('0.001', 'gwei')

        let TaikoContract = await ethers.getContractFactory(
            'LasborneTaiko'
        )

        taikoContract = TaikoContract.attach(TaikoContractAddress)
        await taikoContract.connect(deployer_).functions.transfer(
            userAddress, amount
        )

    }
}

Main = async() => {
    // Deploy Taiko Contract.
    //await TaikoContractDeploy.deploy()
    await TaikoTransfer.transfer('0x93217B098780af020693a177B1Ccc1c0C24E4fB8', '0xCe46d26307ac929BC4Be0D1E46e704AD6A41F6ff')
}

Main()