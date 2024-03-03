import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import AntivirusResultRow from './status-table';

const Antivirus = ({ results }) => {
  const resultsArray = Object.entries(results);

  return (
    <div className="antivirus-table">
      <TableContainer component={Paper} style={{ border: '1px solid #ddd' }}>
        <Table style={{ borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ border: '1px solid #ddd' }}>Antivirus</TableCell>
              <TableCell style={{ border: '1px solid #ddd' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsArray.map(([antivirus, data], index) => (
              <AntivirusResultRow key={antivirus} antivirus={antivirus} category={data.category} lastRow={index === resultsArray.length - 1} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Antivirus;