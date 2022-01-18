import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch } from "react-redux";
import "../Css/contact.css"


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

        <button type="submit" className="buttonSubmit-Cont">Enviar</button>
        {FormularioEnvidado && <p className="mess-contact">Mensaje enviado con exito</p> }


    </Form>
    )}
    </Formik>
     </div>

)

} 