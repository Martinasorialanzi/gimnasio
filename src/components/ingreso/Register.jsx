import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";


import { funcionRegistro } from "../../api/Register.api";


const Registro = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contraseña, setContraseña] = useState(false);

  const validacion = () => {
    if(password !== confirmPassword){
      setContraseña(true)
    }else {
      setContraseña(false)
    }
  }
  useEffect(() => {
  validacion()
  }, [password,confirmPassword])


  const handleSubmit = (e) => {
    e.preventDefault();
    const regexName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexPassword =
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas deben coincidir",
        confirmButtonColor: '#E95821',
      });
    } else if (
      name === "" ||
      lastname === "" ||
      email === "" ||
      password === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los campos son obligatorios",
        confirmButtonColor: '#E95821',
      });
    } else if (!regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes escribir un email valido",
        confirmButtonColor: '#E95821',
      });
    } else if (!regexName.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El nombre no debe contener numeros o caracteres especiales",
        confirmButtonColor: '#E95821',
      });
    } else if (!regexName.test(lastname)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El apellido no debe contener numeros o caracteres especiales",
        confirmButtonColor: '#E95821',
      });
    } 
    else if (!regexPassword.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La contraseña debe tener por lo menos un caracter en mayuscula, uno en minuscula, y 8 caracteres minimos",
        confirmButtonColor: '#E95821',
      });
    } 
    else {
      const formData = {
        name,
        lastname,
        email,
        password,
        
      };
  
      console.log(formData);
     funcionRegistro(formData);
    
      
       
      setName("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <Form controlid="form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Text className="text-muted">
        {!name && <p>El campo nombre es requerido</p>}
      </Form.Text>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        
        />
        <Form.Text className="text-muted">
          {contraseña && <p>Las contraseñas no coinciden</p>}
        </Form.Text>
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Enviar
      </Button>
    </Form>
  );
};
export default Registro;
