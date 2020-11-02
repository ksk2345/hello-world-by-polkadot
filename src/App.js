import React, { useState, createRef } from 'react';
import { Button, Container, Dimmer, Loader, Grid, Sticky, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { SubstrateContextProvider, useSubstrate } from './substrate-lib';
import { DeveloperConsole } from './substrate-lib/components';

import AccountSelector from './AccountSelector';
import BlockNumber from './BlockNumber';
import BlockInfo from './BlockInfo';
import Metadata from './Metadata';
import NodeInfo from './NodeInfo';

function Main () {
  const [accountAddress, setAccountAddress] = useState(null);
  const [tglVal, toggleVal] = useState(0);
  const { apiState, keyring, keyringState, apiError } = useSubstrate();
  // eslint-disable-next-line
  const accountPair =
    accountAddress &&
    keyringState === 'READY' &&
    keyring.getPair(accountAddress);

  const loader = text =>
    <Dimmer active>
      <Loader size='small'>{text}</Loader>
    </Dimmer>;

  const message = err =>
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message negative compact floating
          header='Error Connecting to Substrate'
          content={`${err}`}
        />
      </Grid.Column>
    </Grid>;

  if (apiState === 'ERROR') return message(apiError);
  else if (apiState !== 'READY') return loader('Connecting to Substrate');

  if (keyringState !== 'READY') {
    return loader('Loading accounts (please review any extension\'s authorization)');
  }

  const contextRef = createRef();

  function refreshBlockInfo () {
    if (tglVal === 0) {
      toggleVal(1);
    } else {
      toggleVal(0);
    }
  }

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <AccountSelector setAccountAddress={setAccountAddress} />
      </Sticky>
      <Container>
        <Grid stackable columns='equal'>
          <Grid.Row stretched>
            <NodeInfo />
            <Metadata />
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column>
              <h1>Block Info</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={6}>
              <Button color='teal' onClick={refreshBlockInfo}>Click here to get latest Block Info on Polkadot</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <BlockInfo key={tglVal}/>
          </Grid.Row>
        </Grid>
      </Container>
      <DeveloperConsole />
    </div>
  );
}

export default function App () {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  );
}