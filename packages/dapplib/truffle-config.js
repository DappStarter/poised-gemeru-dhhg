require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift recipe noble protect include praise army gift'; 
let testAccounts = [
"0xa31f5e1fa95bd7f30639ed0bd0bcc3ccbc83321888a88fb487eb27f3f01115d0",
"0x1561acbb118204b5822a56aa0a851bf12ba0798c5b61ca3d0f027c749b5d58a3",
"0xdfa8e9eadc89f1e6a31a29593546749fda5fa7a3dd95b2bd1618de1ab2cf12f4",
"0xe1fe9d808935e2de193d2a8173565a00fcb1a35914ed0e284372592155c54684",
"0xb3eb1532cf5b842cd29ea8fde8c8cb59df5a547b6c61ed6fcb92e485227925b4",
"0x47db185fd047b658b7f5b87c38b05c3a0450f9612943772c3c3e60cac7d8f794",
"0x4a296ea46ea8cd4af1400d6987a37cb16838bbed7661b14a17009ad6a9e11753",
"0x75a83fadbd0a2a30934c884dc1dd40c526af8044a69eeef647fe6e906ca078a3",
"0xf3df3e6082a07f416094b22d5ddb39cfe7e063d6187a6623066dd3d8b774fdbe",
"0x22610f52646bffcf8499295c821c6f99629c6558d9ea5fef8f9c72b326c2f631"
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


