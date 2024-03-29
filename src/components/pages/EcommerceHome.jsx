import React, { useState, useEffect } from "react";
import { Button, Container, Row, Stack, Carousel } from "react-bootstrap";
import "../ecommerce/ecommerce.css";
import CarruselEcommerceHome from "../ecommerce/CarruselEcommerceHome";
import CardsEcommerce from "../ecommerce/CardsEcommerce";
import { GetProducts } from "../../api/GetProducts";
import { Link } from "react-router-dom";
import Navegador from "../navegador/Navegador";
import Footer from "../footer/Footer";

const EcommerceHome = () => {
  const [allProducts, setAllProducts] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("productos carrito");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await GetProducts();
      setProductos(response.products);
    };

    getProducts();
  }, []);

  return (
    <>
      <Navegador allProducts={allProducts} setAllProducts={setAllProducts} />

      <CarruselEcommerceHome />

      <Container className="cards-container ">
        <h3 className="text-center mb-4 p-2">Productos mas vendidos</h3>

        <Container className="mb-4">
          <Row className="justify-content-center">
            {productos

              .filter((producto) => producto.portada === true)
              .map((producto) => {
                return (
                  <CardsEcommerce producto={producto} key={producto._id} />
                );
              })}
            <Link to={"/ecommerce-categoria/all"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Row className="justify-content-center">
                <Button variant="dark" style={{ width: "32%" }} className="m-4">
                  Ver mas
                </Button>
              </Row>
            </Link>
          </Row>
        </Container>

        <Stack direction="horizontal" gap={3} className="m-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/OCT-homepage-container-02_3000x.png?v=1634247031"
                alt="First slide"
              />
              <Carousel.Caption>
                <Link to={`/ecommerce-categoria/equipos`}>
                  <Button className="bg-dark border-dark">
                    COMPRA EQUIPOS
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/accessories_container_8a8e35be-7b10-4bce-b849-8884d9498b41_2000x.jpg?v=1642255854"
                alt="First slide"
              />
              <Carousel.Caption>
                <Link to={`/ecommerce-categoria/accesorios`}>
                  <Button className="bg-dark border-dark">
                    COMPRA ACCESORIOS
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Stack>
      </Container>

      <Footer />
    </>
  );
};

export default EcommerceHome;
