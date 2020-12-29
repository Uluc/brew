
import React, { Component } from "react";
import { Heading, TableContainer, Table, DeleteIcon,AddIconContainer, AddIcon } from "./StyledTableManager";

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
                <DeleteIcon/>
                <h2> Table 1</h2>
            </Table>
            <Table>
                <h2> Table 1</h2>
            </Table>
            <Table>
                <h2> Table 1</h2>
            </Table>
            <Table>
                <h2> Table 1</h2>
            </Table>
            <Table>
                <h2> Table 1</h2>
            </Table>
        </TableContainer>
        <AddIconContainer>
            <AddIcon/>
        </AddIconContainer>

      </>
    );
  }
}
