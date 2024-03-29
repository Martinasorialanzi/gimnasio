import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import NavegadorAdmin from '../navegador/NavegadorAdmin';

import { useEffect, useState } from 'react';
import axios from 'axios';
import"../admin/Listado.css"
const Turnos = () => {
    const [dataUsuarios, setDataUsuarios] = useState([])
    const baseUrl = "https://gimansio-backend.vercel.app"


    const nombres = ["Gabriel Londero", "Diego Olmi", "Lionel Messi"];
    const aleatoriosprofesor = () => {
        const aleatorio = nombres[Math.floor(Math.random() * nombres.length)]; 
        return aleatorio
    }

    const turnos = ["Mañana", "Tarde", "Noche"];
    const aleatoriosTurnos = () => {
        const aleatoriosTurno = turnos[Math.floor(Math.random() * turnos.length)];
        return aleatoriosTurno
    }
    

    useEffect(() => {
        axios.get(`${baseUrl}/v1/obtenerlistadeusuarios`).then(res => {
            console.log(res.data)
            setDataUsuarios(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const listaTurnos = dataUsuarios.map(turno => {
        return (
            <tbody>
            <tr>
                    <th>{aleatoriosTurnos()}</th>
                <th>{turno.nombre}</th>
                    <th>{aleatoriosprofesor()} </th>

                </tr>
                </tbody>

        )
    })
  return (
      <>
          <NavegadorAdmin />
          <h1 className='text-center m-4'>Turnos</h1>
          <Container className='text-center'>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th className='back-tabla-listado text-light'>Turno</th>
                      <th className='back-tabla-listado text-light'>Usuario</th>
                      <th className='back-tabla-listado text-light'>Entrenador</th>
                      
                  </tr>
              </thead>
                  {listaTurnos}
              </Table>
          </Container>
      </>
  )
}

export default Turnos