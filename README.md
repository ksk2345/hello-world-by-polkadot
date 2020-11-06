# [INTERMEDIATE CHALLENGE] FRAME Development Storing Custom Struct : Substrate Front End Template

This fulfils the requirement of task7 of the hello-world-by-polkadot hackathon : [INTERMEDIATE CHALLENGE] FRAME Development (https://github.com/Polkadot-Network/hello-world-by-polkadot/issues/7)

## Using The Template

### Installation

The codebase is installed using [git](https://git-scm.com/) and [yarn](https://yarnpkg.com/). For pre-requisites, please refer to [https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/setup](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/setup). 

```bash
# Clone only the branch (front-end-task7) from the repository into a local directory named 'frontend'
git clone --single-branch --branch  front-end-task7 https://github.com/ksk2345/hello-world-by-polkadot.git frontend
cd ./frontend
yarn install
```

## Usage

You can start the template in development mode to connect to a locally running node having supporting code, (see link below).

```bash
yarn start
```


## Changes wrt to substrate front-end base template

* `src/TemplateModule.js` major changes in UI for storing custom structure
* `src/App.js` minor change adding additional parameter
* `src/config/common.json` changes for adding custom_type

These changes allows the front-end application to connect to node back-end with supporting code changes (https://github.com/ksk2345/hello-world-by-polkadot/tree/node-task7).

