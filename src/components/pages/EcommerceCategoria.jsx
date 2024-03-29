import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetProducts } from "../../api/GetProducts";
import CardsEcommerce from "../ecommerce/CardsEcommerce";
import { Row, Container, Col, Offcanvas, Button } from "react-bootstrap";
import {
  FiltrosColor,
  FiltrosPrecio,
  FiltrosTalle,
} from "../ecommerce/FiltrosEcommerce";
import { MdFilterAlt } from "react-icons/md";
import "../ecommerce/ecommerce.css"
import Navegador from "../navegador/Navegador";
import Footer from "../footer/Footer";

const EcommerceCategoria = () => {
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

  const { categoria } = useParams();
  const cat = categoria;

  const [talle, setTalle] = useState("all");
  console.log(talle);
  const [color, setColor] = useState("all");
  console.log(color);
  const [precio, setPrecio] = useState("all");
  const precioNum = parseInt(precio);
  console.log(precioNum);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Navegador allProducts={allProducts} setAllProducts={setAllProducts} />
<hr/>
      <Container className="container-filtro">
        <Button
          variant="dark"
          onClick={toggleShow}
          className="boton-filtros"
          size="md"
        >
          Filtros <MdFilterAlt />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          scroll="true"
          className="offcanvasFiltros"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtros</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Col sm={1} className="">
              <FiltrosTalle talle={talle} setTalle={setTalle} />
              <FiltrosPrecio precio={precio} setPrecio={setPrecio} />
              <FiltrosColor color={color} setColor={setColor} />
            </Col>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <hr/>
      <Row className="p-2 m-2">
        <Col className="p-0 m-0">
          <Container className="conteinerCategorias">
            <Row className="justify-content-center cardProductosCategoria">
              <>
                {productos
                  .filter(
                    (producto) =>
                      producto.categoria.includes(cat) &&
                      (talle.includes("all")
                        ? producto.categoria.includes(cat)
                        : producto.talle.includes(talle)) &&
                      (color.includes("all")
                        ? producto.categoria.includes(cat)
                        : producto.color.includes(color)) &&
                      (precio.includes("all")
                        ? producto.categoria.includes(cat)
                        : precioNum < 6000
                        ? producto.precio > precioNum &&
                          producto.precio <= precioNum + 1500
                        : producto.precio > 6000)
                  )
                  .map((producto) => {
                    return (
                      <CardsEcommerce producto={producto} key={producto._id} />
                    );
                  })}
              </>
            </Row>
          </Container>

        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default EcommerceCategoria;
