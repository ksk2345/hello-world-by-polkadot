# [BEGINNER CHALLENGES] Back-End Javascript :  hello-world-by-polkadot hackathon

This repo has a command line utility that displays information about the latest block on Polkadot chain

### Installation

The codebase is installed using [git](https://git-scm.com/) and [yarn](https://yarnpkg.com/). For pre-requisites, please refer to [https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/setup](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/setup). 

```bash
# Clone only the branch (backend-javascript) from the repository
git clone --single-branch --branch  backend-javascript https://github.com/ksk2345/hello-world-by-polkadot.git backend-javascript
cd ./backend-javascript
yarn add @polkadot/api
```

## Usage

You can run the utility by below command

```bash
node getblockinfo.js
```

Sample output of the utility,

```bash
root@9a3453e9d44a:~/backend-javascript# node getblockinfo.js 
  
Chain = Polkadot
Block number = 2434577  with below information
 
  Hash           : 0x41b2ff0ff60679e02ef0ac360b47417208b5bbbe802607e77d45330a45929c57
  ParentHash     : 0x903f7c6ed320b65fe30ded7f82475200cc81e75d84dcfb23fc12ee34dc4d8fa1
  stateRoot      : 0xb80104c7e9a155f6c6e176ca8d30d5072a87f4a5cecc3943c614b880e7ec1006
  extrinsicsRoot : 0x4366f05a2e7e2ba513abb0614da1672cf6a1a245b3ca793dfe979a7cddc0c569
  extrinsics     : [{"signature":{"signer":"111111111111111111111111111111111HC1","signature":{"Ed25519":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"era":{"ImmortalEra":"0x00"},"nonce":0,"tip":0},"method":{"callIndex":"0x0300","args":{"now":1605180024000}}}, {"signature":{"signer":"15tcHBgQ28uX2kDBHVRnpYgtugQA5vnhHAG6US85XadAr92X","signature":{"Sr25519":"0xe8db3b6ffd42d2923a37d77cee1980bf8cf425c951f719377e6655ea0b17625293ecec2b5120903c89a267d9968637d7a539f4c9c2e600679c4463283353948a"},"era":{"MortalEra":"0xc500"},"nonce":156,"tip":0},"method":{"callIndex":"0x0712","args":{"validator_stash":"12gkhA8JEz8ywmVj1tsVafSp9C4saKzSofgMwBJcmFJAGUVX","era":162}}}]
  
root@9a3453e9d44a:~/backend-javascript# 

```
