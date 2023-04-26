import { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { Form } from "./Form";
import Swal from 'sweetalert2';

export const TableProducts = ({ items, orderNum, onAddItems, onAddOrders }) => {

    const [addItem, setAddItem] = useState(false);
    const [addProduct, setAddProduct] = useState(items);

    const backComponent = () => {
        onAddItems([]);
        onAddOrders('');
    }

    const AddProductStatu = () => {
        setAddItem(!addItem);
    }

    const addProductData = (product) => {
        setAddProduct([...addProduct, product]);
        Swal.fire({
            title: '',
            text: 'Producto Agregado',
            icon: 'success',
        })
    }

  return (
    <Card>
      <Card.Body>
        <Button className="btn btn-success mt-2" onClick={ () =>  AddProductStatu() }>Agregar</Button>
        {' '}
        <Button className="btn btn-danger mt-2" onClick={ () => backComponent() }>Regresar</Button>
        <h4 className="header-title mt-5">Order #{orderNum}</h4>
        <p className="text-muted font-14 mb-4"></p>


        {
            addItem && <Form 
                            AddProductStatu={AddProductStatu}
                            addProductData={ (value) => addProductData(value) }
                        />
        }


        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead>
              <tr>
                <th>Sku</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {(addProduct || []).map((i, index) => {
                return (
                  <tr key={index.toString()}>
                    <th scope="row">{i.sku}</th>
                    <td>{i.name}</td>
                    <td>{i.quantity}</td>
                    <td>{i.price}</td>

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
