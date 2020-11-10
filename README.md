# [ECOSYSTEM CHALLENGE] Enable NFT Support

Submission details for this hackathon task is given below.
The git repo has necessary code changes.

### Development Environment Setup

Pre-requisites and Development Environmet Setup instructions can be found at the
[Substrate Developer Hub](https://substrate.dev/docs/en/knowledgebase/getting-started).

### Clone modified Node Template repo and Build

```bash
# Clone only the branch (substrate-nft) from the repository into a local directory named 'node-template'
git clone --single-branch --branch substrate-nft https://github.com/ksk2345/hello-world-by-polkadot.git node-template
cd ./node-template
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
    "AmountOf": "Amount",
    "ClassInfo": {
	"metadata": "Vec<u8>",
	"total_issuance": "TokenId",
	"owner": "AccountId",
	"data": "Data"
    },
    "TokenInfo": {
	"metadata": "Vec<u8>",
	"owner": "AccountId",
	"data": "Data"
    },
    "ClassId": "u64",
    "TokenId": "u64",
    "ClassInfoOf": "ClassInfo",
    "TokenInfoOf": "TokenInfo"
}
```
## Reference screenshot 
![screenshot](https://github.com/ksk2345/hello-world-by-polkadot/blob/substrate-nft/screenshot-acala-nft.jpeg)

