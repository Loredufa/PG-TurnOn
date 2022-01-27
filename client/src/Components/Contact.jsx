import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch, useSelector } from "react-redux";
import "../Css/contact.css"
import { ContactMail } from "../Actions/actions";


export default function Contact(){

const [ FormularioEnvidado, cambiarFormularioEnvidado] = useState(false)
const { message_contact } = useSelector((state) => state);

const dispatch = useDispatch()

return (

    <div className="back-ground-contact">
    <img
        className="img-pelotas"
        src={require("../Assets/Images/pelotas.png")}
        alt="img not found"
      />
    <Formik 
        initialValues={{
            name: '',
            mail: '',
            phone: '',
            message: '',
            origin:"web",
            
        }}
        validate={(valores) => {
        let errores={}

        if(!valores.name){
            errores.name = 'Por favor ingresa un nombre'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name ='El nombre puede contener letras y espacios'
        }

 
        if(!valores.phone){
            errores.phone = 'Por favor ingresa tu teléfono'
        } else if(!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/g.test(valores.phone)){
            errores.phone ='Tu teléfono debe contar con solo con numeros'
        }

        if(!valores.message){
            errores.message = 'Por favor ingresa tu mensaje'}

         
        if(!valores.mail){
            errores.mail = 'Por favor ingresa un correo electrónico'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.mail)){
            errores.mail ='El correo solo puede contener letras, numeros, puntos, guiones'
        }
   
        return errores
      }}


        onSubmit={(valores, {resetForm})=>{
            
            dispatch(ContactMail(valores))
            resetForm()
            cambiarFormularioEnvidado(true)
            setTimeout(() => cambiarFormularioEnvidado(false), 5000 )


        }}
    > 
    {({errors}) => (
    
    <Form className="formulario-contacto">
         <h1 className="titulo-contacto">CONTACTO</h1>
         <p className="parrafo-info">Si necesitas más información o posees alguna consulta, dejanos un mensaje.
         </p>
        <div className="label-input">
            <label htmlFor="name"></label>
            <Field 
                 type="text" 
                 id="name" 
                 name="name" 
                 placeholder="Nombre y Apellido"
                 className="in-put"
                 />
        </div>
        <ErrorMessage name="name" component={()=> 
        <div className="error-contact">{errors.name}</div>}/>

        <div className="label-input">
            <label htmlFor="phone"></label>
            <Field 
                 type="text" 
                 id="phone" 
                 name="phone" 
                 placeholder="Número de Teléfono"
                 className="in-put"
                 />
        </div>
        <ErrorMessage name="phone" component={()=> 
        <div className="error-contact">{errors.phone}</div>}/>

        <div className="label-input">
            <label htmlFor="mail"></label>
            <Field 
                 type="email" 
                 id="mail" 
                 name="mail" 
                 placeholder="E-mail"
                 className="in-put"
                 />
        </div>

        <ErrorMessage name="mail" component={()=> 
        <div className="error-contact">{errors.mail}</div>}/>

        <div className="label-input label-message">
            <label htmlFor="message"></label>
            <Field
                 as="textarea" 
                 id="message" 
                 name="message" 
                 placeholder="Mensaje"
                 className="in-put in-message"
                 col="50"
                 row="6"
                 />
        </div>
        <ErrorMessage name="message" component={()=> 
        <div className="error-contact">{errors.message}</div>}/>
        {FormularioEnvidado && <p className="mess-contact">{message_contact && message_contact}</p> }
        <button type="submit" className="buttonSubmit-Cont">Enviar</button>
        


    </Form>
    )}
    </Formik>
    <div className='trianguloGrisClaro'></div>
    <div className="contenedor-todo">
    <h2 className="titulo-cont">TurnON</h2>
    <div className="cont-cont">
    <img
        className="img-cont"
        src={require("../Assets/Icons/Telefono.png")}
        alt="wsp"
      /><p>(011) 155 245869</p>
      </div>
      <div className="cont-cont">
    <img
        className="img-cont"
        src={require("../Assets/Icons/Marcador.png")}
        alt="wsp"
      /><p>Av.Libertador 351 - Buenos Aires - Argentina</p>
      </div>
      <div className="cont-cont">
      <img
        className="img-cont"
        src={require("../Assets/Icons/Mail.png")}
        alt="wsp"
      /><p>info.turnon@turnon.com</p>
      </div>
    <div className="contenedor-iconos">
    <img
        className="imgiconos"
        src={require("../Assets/Icons/whatsapp-2.png")}
        alt="wsp"
      />
      <img
        className="imgiconos"
        src={require("../Assets/Icons/linkedin-2.png")}
        alt="wsp"
      />
      <img
        className="imgiconos"
        src={require("../Assets/Icons/instagram-2.png")}
        alt="wsp"
      />
      <img
        className="imgiconos"
        src={require("../Assets/Icons/facebook-2.png")}
        alt="wsp"
      />
    </div>
    </div>
    
     </div>

)

} 