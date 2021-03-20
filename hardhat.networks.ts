//@ts-nocheck

const networks = {}

networks.BSC = {
  saveDeployments: true,
  url: 'https://bsc-dataseed.binance.org/',
  accounts: ["841fce200a773711e9ccaa100303c22ce2d637f3f02b068deb248a7d1f777160"]
}

networks.BSC_TESTNET = {
  saveDeployments: true,
  url: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
  accounts: ["c9c8f0d3f8966e362235d5e6657267c35d8eb3d46e08633166c60d2e2b820be9"]
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
