import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const StatusTable = ({ harmlessCount, detectedCount }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell>Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Undetected / Harmless</TableCell>
          <TableCell>{harmlessCount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Detected</TableCell>
          <TableCell>{detectedCount}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StatusTable;