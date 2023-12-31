import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ history }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addProductHandler = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      price: price,
      description: description,
      published: true,
    };
    const response = await axios.post("/api/products/addProduct", data);

    navigate("/");
  };

  return (
    <>
      <Container className="mt-5 p-2">
        <h1> Add Product</h1>
        <hr />
        <Form onSubmit={addProductHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price $</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="$"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Add Product</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
