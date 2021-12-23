const { ethers } = require('ethers')
const abiJson  = require('./abi.json')

const provider = new ethers.providers.FallbackProvider([
  {
    priority: 1,
    weight: 1,
    provider: new ethers.providers.StaticJsonRpcProvider('https://brokenLink.com', 100),
  },
  {
    priority: 2,
    weight: 1,
    provider: new ethers.providers.StaticJsonRpcProvider('https://rpc.xdaichain.com', 100),
  },
], 1)

const tokenContract = new ethers.Contract('0x4ECaBa5870353805a9F068101A40E0f32ed605C6', abiJson, provider)

const getDecimals = async () => {
  try {
    const res = await tokenContract.callStatic.decimals()
    console.log('getDecimals res', res.toString())
  } catch (err) {
    console.log('getDecimals error:', `${err.message}\n`)
  }
}

const getEstimate = async () => {
  try {
    const res = await tokenContract.estimateGas.decimals()
    console.log('getEstimate res', res.toString())
  } catch (err) {
    console.log('getEstimate error:', `${err.message}\n`)
  }
}

const main = async () => {
  getDecimals()
  getEstimate()
}

main()
