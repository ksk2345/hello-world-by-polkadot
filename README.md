# [ECOSYSTEM CHALLENGE Acala] Enable Multi-Currency Support

Submission details for this hackathon task is given below.
The git repo has necessary code changes, and also pre-built binary of node-template runtime.

### Development Environment Setup

Pre-requisites and Development Environmet Setup instructions can be found at the
[Substrate Developer Hub](https://substrate.dev/docs/en/knowledgebase/getting-started).

### Clone modified Node Template repo and Build

```bash
# Clone only the branch (substrate-multi-currency) from the repository into a local directory named 'node-template'
git clone --single-branch --branch   substrate-multi-currency https://github.com/ksk2345/hello-world-by-polkadot.git node-template
cd ./node
cargo build --release
```

### Run

Start a dev chain (use '--rpc-external --ws-external' flags if required):

```bash
./target/release/node-template --dev --tmp
```

## Connecting to the local node-template with Polkadot JS Apps UI 

Use the Settings > Developer app and add below necessary types to the UI.
```bash
{
    "CurrencyId": {
        "_enum": [
            "Native",
            "DOT",
            "KSM",
            "BTC",
            "CUSTOMTOKEN"
        ]
    },
    "CurrencyIdOf": "CurrencyId",
    "Amount": "i128",
    "AmountOf": "Amount"
}
```
## Reference screenshot 
![screenshot](https://github.com/ksk2345/hello-world-by-polkadot/blob/substrate-multi-currency/screenshot-acala-multi-currency.jpeg)

