import React from 'react'
import TokenListItem from './TokenListItem'
import styled from 'styled-components'

const Table = styled.table`
  background-color: white
  padding: 10px;
  border-radius: 5px;
`

const TokenList = ({tokens}) => (
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th colSpan="2">Token</th>
        <th css="text-align: right;">Last Price</th>
        <th css="text-align: right;">
          Fill Count (24H)
        </th>
        <th css="text-align: right;">
          Fill Volume (24H)
        </th>
      </tr>
    </thead>
    <tbody>
      {tokens.map((token, index) => (
        <TokenListItem
          key={token.address}
          period
          position={index}
          token={token}
        />
      ))}
    </tbody>
  </Table>
)

export default TokenList