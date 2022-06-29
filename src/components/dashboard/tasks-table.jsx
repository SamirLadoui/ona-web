import React from 'react';
// import { format } from 'date-fns';
// import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Button, Card, CardHeader, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

export const TasksTable = (props) => (
  <Card {...props}>
    <CardHeader title={props.title} />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ height: '100%' }}>
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow key={row.id}>
                {Object.keys(row)
                  .splice(1)
                  .map((key) => (
                    <React.Fragment key={key}>
                      {key !== 'state' ? (
                        <TableCell>{row[key]}</TableCell>
                      ) : (
                        <TableCell>
                          <SeverityPill
                            color={
                              (row.state === 'confirm' && 'success') || (row.state === 'cancel' && 'error') || 'default'
                            }
                          >
                            {row.state}
                          </SeverityPill>
                        </TableCell>
                      )}
                    </React.Fragment>
                  ))}
              </TableRow>
            ))}
            {/* {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{format(order.createdAt, 'dd/MM/yyyy')}</TableCell>
                <TableCell>
                  <SeverityPill
                    color={
                      (order.status === 'delivered' && 'success') ||
                      (order.status === 'refunded' && 'error') ||
                      'warning'
                    }
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small" variant="text">
        View all
      </Button>
    </Box>
  </Card>
);
