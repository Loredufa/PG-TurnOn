import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
/* import { Link, useHistory } from 'react-router-dom'; */
import { useDispatch } from "react-redux";


export default function Contact(){

const [ FormularioEnvidado, cambiarFormularioEnvidado] = useState(false)

const dispatch = useDispatch()

return (

    <div className="back-ground-contact">
       
    <Formik 
        initialValues={{
            name: '',
            mail: '',
            phone: '',
            message: '',
            
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
            
            dispatch(Contact(valores))
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
        <div className="label-nombre">
            <label htmlFor="name"></label>
            <Field 
                 type="text" 
                 id="name" 
                 name="name" 
                 placeholder="Nombre y Apellido"
                 className="in-nombre"
                 />
        </div>
        <ErrorMessage name="name" component={()=> 
        <div className="error-nombre">{errors.name}</div>}/>

        <div className="label-phone">
            <label htmlFor="phone"></label>
            <Field 
                 type="text" 
                 id="phone" 
                 name="phone" 
                 placeholder="Número de Teléfono"
                 className="in-phone"
                 />
        </div>
        <ErrorMessage name="phone" component={()=> 
        <div className="error-phone">{errors.phone}</div>}/>

        <div className="label-email">
            <label htmlFor="mail"></label>
            <Field 
                 type="email" 
                 id="mail" 
                 name="mail" 
                 placeholder="E-mail"
                 className="in-email"
                 />
        </div>

        <ErrorMessage name="mail" component={()=> 
        <div className="error-email">{errors.mail}</div>}/>

        <div className="label-message">
            <label htmlFor="message"></label>
            <Field
                 type="textarea" 
                 id="message" 
                 name="message" 
                 placeholder="Mensaje"
                 className="in-message"
                 />
        </div>
        <ErrorMessage name="message" component={()=> 
        <div className="error-message">{errors.message}</div>}/>

        <button type="submit" className="buttonSubmitReg">Enviar</button>
        {FormularioEnvidado && <p>Mensaje enviado con exito</p> }


    </Form>
    )}
    </Formik>
     </div>

)

} 