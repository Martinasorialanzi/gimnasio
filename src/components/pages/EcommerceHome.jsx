import React from 'react'
import { Nav,Card,Button, Container, Row, Col,Pagination,Carousel } from 'react-bootstrap'
import CarritoCompras from '../carritoCompras/CarritoCompras'
import { Productos } from '../helpers/Productos'

const EcommerceHome = () => {
  return (
    <>
    <h1>Ecommerce</h1>
    <CarritoCompras/>
    
    <Nav justify variant="tabs" defaultActiveKey="/ecommerce">
    <Nav.Item>
        <Nav.Link href="/ecommerce-all">Todo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-indumentaria">Indumentaria</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-accesorios">Accesorios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home/suplementos">Sumplementos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-equipos">Equipos</Nav.Link>
      </Nav.Item>
      
    </Nav>
{/* Carrusel */}

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/November_Desktop_Mens_1800x.jpg?v=1668528184"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/November_Desktop_Womens_1800x.jpg?v=1668528183"
          alt="Second slide"
        />

        <Carousel.Caption>
        <Button>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/November_Desktop_New_Arrivals_1800x.jpg?v=1668528183"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <br></br>
    <h1>Productos mas vendidos</h1>


{/*empieza las cards */}
<Container>
      <Row>
{Productos.map((producto)=>{
  return(

    <Col xs={12} md={6} xl={4}>
    <Card key={producto.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          ${producto.precio}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </Col>
  )
})}

  </Row>
  </Container>
   
 <Button>Ver mas</Button>
    </>
   
  )
}

export default EcommerceHome