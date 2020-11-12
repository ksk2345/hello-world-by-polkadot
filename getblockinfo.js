// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  // Here we don't pass the (optional) provider, connecting directly to the default
  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure
  // the API has connected to the node and completed the initialisation process
  // const api = await ApiPromise.create();
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  // const wsProvider = new WsProvider();
  const api = await ApiPromise.create({ provider: wsProvider });
  const chain = await api.rpc.system.chain();

  const { hash, parentHash } = await api.rpc.chain.getHeader();

  const blockNum = await api.rpc.chain.getBlock(hash);
  console.log(`  `);
  console.log(`Chain = ${chain}`);
  console.log(`Block number = ${blockNum.block.header.number}  with below information`);
  // console.log(`Full Block data ${blockNum}`);
  console.log(` `);
  console.log(`  Hash           : ${hash.toHex()}`);
  console.log(`  ParentHash     : ${parentHash.toHex()}`);
  console.log(`  stateRoot      : ${blockNum.block.header.stateRoot}`);
  console.log(`  extrinsicsRoot : ${blockNum.block.header.extrinsicsRoot}`);
  console.log(`  extrinsics     : ${blockNum.block.extrinsics}`);
  console.log(`  `);

}

main().catch(console.error).finally(() => process.exit());
