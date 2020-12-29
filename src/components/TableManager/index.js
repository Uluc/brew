import React, { Component } from "react";
import {
  Heading,
  TableContainer,
  Table,
  DeleteIcon,
  AddIconContainer,
  AddIcon,
  DeleteContainer,
  TableHeader,
  QRContainer,
  QRCode
} from "./StyledTableManager";

import qr from "../../images/qr_exampel.png"

export default class TableManager extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Heading>Tables</Heading>
        <TableContainer>
          <Table>
            <DeleteContainer>
              <DeleteIcon />
            </DeleteContainer>
            <TableHeader>
                Table 1
            </TableHeader>
            <QRContainer>
                <QRCode src={qr} />
            </QRContainer>
          </Table>
        </TableContainer>
        <AddIconContainer>
            
          <AddIcon />
          <p>Add Table</p> 
        </AddIconContainer>
      </>
    );
  }
}
