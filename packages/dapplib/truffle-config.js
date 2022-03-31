require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong rival soap modify idea praise army gauge'; 
let testAccounts = [
"0xa90bf843aa0724204e6d471aa99cda697c73feffa7bc3704206b23081d76782d",
"0x6ab2d1bde71f3adcdeeb50de8c14eb5238e57a138c42097909c122ebfa43f83d",
"0x8969a30177624d69a3665584f93b8f863df6d73298a09af4231741f202850daf",
"0x4f424129b1be6128cce8479c1d62d3dc02c25f5f955d6777589ac1e6cf19a231",
"0xb3b5ce98e0c07d49a56c24e5258ed35fea4c24913661c27609f0b510a32e7b2f",
"0x097ab16e37eab3ece7ac0a88a4571e745eaec98d70ccfe5b867679956acae3b5",
"0xebbf97787fb5a5f8ae3453e4c448eff4ec444e1d70216fa368caf7a2d02ae91e",
"0x4c946076e4c32a757813f80ca79e846ff5790157c9fcd0853f7fb40b43cf57ea",
"0x277d9a652cd3b32fa984d8cf3c812dcec5f95b40b82e5c68c20ad0dc6f600a23",
"0xa1410ec2233d5dd28d8148023078b6fbe24f6aab8e7d8addf8b72d9eeb0f308a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


