import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Mailer.css';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';



const Mailer = () => {
    
    const inputform = useRef(null); 

    useEffect(() => {
        inputform.current.focus()
      
      })
    
    

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o1bi7xw', 'template_5llduc9', e.target, 'ZeW1Ssurf-xesG-Ui').then(res => console.log(res))
        e.target.reset()
        Swal.fire('Enhorabuena', 'Tu mensaje ha sido enviado', 'success')
            .catch(error => console.log(error))
        Swal.fire('Ups', 'Tu mensaje no podido enviarse', 'error')
        
    }
    


    return (
      <Container>
      <div className='form-mail mt-4 '>
          <h1 className='title-form text-center '>Enviar mensaje a un usuario</h1>
          <form onSubmit={sendEmail} className="text-center mt-3">
              <label className='mt-1'>Nombre</label><br/>
              <input type="text" name="user_name" ref={inputform} className='mt-1'/><br />
           
              <label className='mt-1'>Email</label><br />
              <input type="email" name="user_email" className='mt-1' /><br />
            
              <label className='mt-1'>Mensaje</label><br />
              <textarea name="user_message" className='mt-1' /><br />
             
              <button className='mailer-color-boton mt-3' >Enviar</button>
          </form>
            </div>
        </Container>
  )
}

export default Mailer