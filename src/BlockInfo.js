import React, { useEffect, useState } from 'react';
import { Table, Grid } from 'semantic-ui-react';
import { useSubstrate } from './substrate-lib';

function Main (props) {
  const { api } = useSubstrate();
  const [[hash, parentHash], setBlock] = useState([]);
  const [[number, stateRoot, extRoot], setBlockInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const lastHdr = await api.rpc.chain.getHeader();
        setBlock([lastHdr.hash.toHex(), lastHdr.parentHash.toHex()]);
      } catch (e) {
        console.error(e);
      }
    };
    getInfo();
  }, [api.rpc.chain]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const bhdr = await api.rpc.chain.getBlock(hash);
        setBlockInfo([bhdr.block.header.number.toNumber(), bhdr.block.header.stateRoot.toHex(), bhdr.block.header.extrinsicsRoot.toHex()]);
      } catch (e) {
        console.error(e);
      }
    };
    getInfo();
  }, [hash, api.rpc.chain]);

  return (
    <Grid.Column>
      <Table celled striped size='small' color="teal">
        <Table.Body>
          <Table.Row>
            <Table.Cell width={3} textAlign='right'><b>Block Number</b></Table.Cell>
            <Table.Cell width={10}> {number} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={3} textAlign='right'><b>Hash</b></Table.Cell>
            <Table.Cell width={10}> {hash} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={3} textAlign='right'><b>parentHash</b></Table.Cell>
            <Table.Cell width={10}> {parentHash} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={3} textAlign='right'><b>stateRoot</b></Table.Cell>
            <Table.Cell width={10}> {stateRoot} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={3} textAlign='right'><b>extrinsicsRoot</b></Table.Cell>
            <Table.Cell width={10}> {extRoot} </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Grid.Column>
  );
}

export default function BlockInfo (props) {
  const { api } = useSubstrate();
  return api.derive &&
    api.derive.chain &&
    api.derive.chain.bestNumber ? (
      <Main {...props} />
    ) : null;
}
