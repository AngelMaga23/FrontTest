import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Button } from "react-bootstrap";

export const Form = ({ AddProductStatu, addProductData }) => {
  const [error, setError] = useState(false);

  const { formState, onInputChange, onResetForm, sku, name, quantity, price } =
    useForm({
      sku: "",
      name: "",
      quantity: "",
      price: "",
    });

  const guardarProducto = () => {
    const { sku, name, quantity, price } = formState;

    if (sku == "" || name == "" || quantity == "" || price == "") {
      setError(true);
    } else {
      addProductData(formState);
      onResetForm();
      AddProductStatu();
    }
  };

  return (
    <>
      <h1>Crear Producto</h1>
      <hr />
      {error && (
        <div className="mb-5" style={{ color: "#ff5b5b" }}>
          Todos los campos son requeridos
        </div>
      )}
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <input
              type="text"
              // className="form-control"
              className={`form-control ${
                sku === "" && error ? "is-invalid" : ""
              }`}
              placeholder="Sku..."
              name="sku"
              value={sku}
              onChange={onInputChange}
            />
            <br />
            <input
              type="text"
              className={`form-control ${
                name === "" && error ? "is-invalid" : ""
              }`}
              placeholder="Name..."
              name="name"
              value={name}
              onChange={onInputChange}
            />
            <br />
            <input
              type="number"
              className={`form-control ${
                quantity === "" && error ? "is-invalid" : ""
              }`}
              placeholder="Quantity..."
              name="quantity"
              value={quantity}
              onChange={onInputChange}
            />
            <br />
            <input
              type="number"
              className={`form-control ${
                price === "" && error ? "is-invalid" : ""
              }`}
              placeholder="Price..."
              name="price"
              value={price}
              onChange={onInputChange}
            />
            <br />
            <Button className="btn-danger" onClick={() => AddProductStatu()}>
              Cancelar
            </Button>{" "}
            <Button onClick={() => guardarProducto()}>Guardar</Button>
            <br />
            <br />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
