# [INTERMEDIATE CHALLENGE] FRAME Development Storing Custom Struct : Substrate Node Template

This fulfils the partial requirement of task7 of the hello-world-by-polkadot hackathon : [INTERMEDIATE CHALLENGE] FRAME Development (https://github.com/Polkadot-Network/hello-world-by-polkadot/issues/7)

### Development Environment Setup

Pre-requisites and Development Environmet Setup instructions can be found at the
[Substrate Developer Hub](https://substrate.dev/docs/en/knowledgebase/getting-started).

### Clone modified Node Template repo and Build

```bash
# Clone only the branch (node-task7) from the repository into a local directory named 'node'
git clone --single-branch --branch  node-task7 https://github.com/ksk2345/hello-world-by-polkadot.git node
cd ./node
cargo build --release
```

### Run

Start a dev chain (use '--rpc-external --ws-external' flags if required):

```bash
./target/release/node-template --dev --tmp
```

## Changes wrt to Substrate Node Template base code

* `pallets/template/src/lib.rs` major changes for storing custom structure and dispatchable function


These changes allows for a front-end application with corresponding code changes (https://github.com/ksk2345/hello-world-by-polkadot/tree/front-end-task7) to connect to this node back-end.

