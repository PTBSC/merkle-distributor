//@ts-nocheck

const networks = {}

networks.BSC = {
  saveDeployments: true,
  url: 'https://bsc-dataseed.binance.org/',
  accounts: [""]
}

networks.BSC_TESTNET = {
  saveDeployments: true,
  url: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
  accounts: [""]
}

networks.fork = {
  url: 'http://127.0.0.1:8545'
}

if (process.env.INFURA_API_KEY) {
  networks.kovan = {
    saveDeployments: true,
    url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts: {
      mnemonic: process.env.HDWALLET_MNEMONIC,
    },
  }

  networks.ropsten = {
    saveDeployments: true,
    url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts: {
      mnemonic: process.env.HDWALLET_MNEMONIC,
    },
  }
  
  networks.rinkeby = {
    saveDeployments: true,
    url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts: {
      mnemonic: process.env.HDWALLET_MNEMONIC,
    },
  }

  networks.mainnet = {
    saveDeployments: true,
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts: {
      mnemonic: process.env.HDWALLET_MNEMONIC,
    },
  }
} else {
  console.warn('No infura or hdwallet available for testnets')
}

export { networks }
