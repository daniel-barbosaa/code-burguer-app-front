/* eslint-disable import/no-named-as-default */
/* eslint-disable no-underscore-dangle */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import StatusOrder from './order-status';
import Row from './row';
import { Container, Menu, LinkMenu } from './style';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((ord) => createData(ord));
    setRows(newRows);
  }, [filteredOrders]);

  useEffect(() => {
    const statusIndex = StatusOrder.findIndex(
      (status) => status.id === activeStatus,
    );
    const newFilteredOrder = orders.filter(
      (order) => order.status === StatusOrder[statusIndex].value,
    );
    setFilteredOrders(newFilteredOrder);
  }, [orders]);

  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOrders(orders);
    } else {
      const newOrder = orders.filter((order) => order.status === status.value);

      setFilteredOrders(newOrder);
    }
    setActiveStatus(status.id);
  }
  return (
    <Container>
      <Menu>
        {StatusOrder &&
          StatusOrder.map((status) => (
            <LinkMenu
              onClick={() => handleStatus(status)}
              isactivestatus={activeStatus === status.id ? 'true' : ''}
              key={status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status do pedido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Orders;
