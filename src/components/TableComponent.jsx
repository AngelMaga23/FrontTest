import { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { useFetchOrders } from "../hooks/useFetchOrders";

export const TableComponent = ({ onAddItems, onAddOrders }) => {
  const { orders } = useFetchOrders();

  const handleButtom = (itemSelect, numOrder) =>{
    onAddItems(itemSelect);
    onAddOrders(numOrder);
  }
  
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Orders</h4>
        <p className="text-muted font-14 mb-4"></p>

        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead>
              <tr>
                <th># Orden</th>
                <th>City</th>
                <th>First Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(orders || []).map((order, index) => {
                return (
                  <tr key={index.toString()}>
                    <th scope="row">{order.number}</th>
                    <td>{order.billingAddress.city}</td>
                    <td>{order.billingAddress.firstName}</td>
                    <td>
                      <Button className="btn btn-primary" onClick={ () => handleButtom(order.items, order.number) }>Info</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
