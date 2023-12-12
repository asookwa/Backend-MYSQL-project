import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getSingleProductsData = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
    };
    getSingleProductsData();
  }, [id]);

  ///handling Delete

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    navigate("/");
  };

  return (
    <>
      <Card className="shadow-lg m-2 p-3 rounded" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
        </Card.Body>
        <Link to={`/product/edit/${id}`}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </Card>
    </>
  );
};

export default ProductDetail;
