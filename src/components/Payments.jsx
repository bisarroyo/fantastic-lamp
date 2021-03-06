import * as React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PaymentsStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .payment__container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function createData(direction, ammount, date) {
  return { direction, ammount, date };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
];

const BasicTable = (props) => {
  const { title } = props;
  return (
    <PaymentsStyle>
      <div className="payment__container">
        <h2>{title}</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Direction (btc)</TableCell>
                <TableCell align="right">Ammount</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.direction}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.direction}
                  </TableCell>
                  <TableCell align="right">{row.ammount}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </PaymentsStyle>
  );
};

export default BasicTable;
