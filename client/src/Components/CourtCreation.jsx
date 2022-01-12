import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


export default function courtCreation(){

/* const [ FormularioCargado, cambiarFormularioCargado] = useState(false) */
/* const { message_reg, success } = useSelector(state =>state) */
/* const history = useHistory()
 */
/* if(success){
    alert('Usuario Creado con Exito')
    history.push('/login')
} */



const dispatch = useDispatch()

return (

    <div className="back-ground">
       
    <Formik 
        initialValues={{
            name: '',
            address: '',
            sport: '',
            phone: '',
            price: '',
            image: '',
            description: '',


        }}
/*         validate={(valores) => {
        let errores={}
        dispatch({type:"SET_MESSAGE_REG", payload:''})

        if(!valores.name){
            errores.name = 'Por favor ingresa un nombre'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name ='El nombre puede contener letras y espacios'
        }

        if(!valores.lastname){
            errores.lastname = 'Por favor ingresa un apellido'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastname)){
            errores.lastname ='El apellido puede contener letras y espacios'
        }
 
        if(!valores.cuit){
            errores.cuit = 'Por favor ingresa tu CUIT'
        } else if(!/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(valores.cuit)){
            errores.cuit ='Tu cuit debe contar con solo con numeros'
        }

        if(!valores.businessname){
            errores.businessname = 'Por favor ingresa tu razon social'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.businessname)){
            errores.businessname ='La Razon Social puede contener letras y espacios'
        }

         
        if(!valores.mail){
            errores.mail = 'Por favor ingresa un correo electrónico'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.mail)){
            errores.mail ='El correo solo puede contener letras, numeros, puntos, guiones'
        }

        if(!valores.password){
            errores.password = 'Por favor ingresa una contraseña'
        } else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)){
            errores.password ='La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.'
        } 

        if(!valores.password2){
            errores.password2 = 'Por favor ingresa una contraseña'
        } else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password2)){
            errores.password2 ='La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.'
        } else if(valores.password !== valores.password2){ errores.password2 = 'Las contraseñas no coinciden' }


        return errores
      }}
 */

        onSubmit={(valores, {resetForm})=>{
            
            dispatch(Register(valores))
            /* resetForm() */
            /* cambiarFormularioEnvidado(true)
            setTimeout(() => cambiarFormularioEnvidado(false), 5000 ) */


        }}
    > 
    {({errors}) => (
    
    <Form className="formulario-registro">
         <h1 className="titulo-registro">GESTION DE TURNO</h1>
         <p className="parrafo-reg">A continuación crea tu turno correspondiente a una cancha, si deseas agregar.
         </p>
        <div className="label-name">
            <label htmlFor="name"></label>
            <Field 
                 type="text" 
                 id="name" 
                 name="name" 
                 placeholder="Nombre de la Cancha "
                 className="in-name"
                 />
        </div>
        <ErrorMessage name="name" component={()=> 
        <div className="error-nombre">{errors.name}</div>}/>

        <div className="label-direccion">
            <label htmlFor="lastname"></label>
            <Field 
                 type="text" 
                 id="address" 
                 name="address" 
                 placeholder="Dirección"
                 className="in-address"
                 />
        </div>
        <ErrorMessage name="lastname" component={()=> 
        <div className="error-apellido">{errors.lastname}</div>}/>

        <div>
            <Selection>
                
            </Selection>
        </div>

        <div className="labelcuit">
            <label htmlFor="cuit"></label>
            <Field 
                 type="text" 
                 id="cuit" 
                 name="cuit" 
                 placeholder="CUIT"
                 className="in-cuit"
                 />
        </div>
        <ErrorMessage name="cuit" component={()=> 
        <div className="error-cuit">{errors.cuit}</div>}/>

        <div className="labelrazonsoc">
            <label htmlFor="businessname"></label>
            <Field
                 type="text" 
                 id="businessname" 
                 name="businessname" 
                 placeholder="Razón Social"
                 className="in-razon-social"
                 />
        </div>
        <ErrorMessage name="businessname" component={()=> 
        <div className="error-razon-social">{errors.businessname}</div>}/>

        <div className="labelemail">
            <label htmlFor="mail"></label>
            <Field 
                 type="email" 
                 id="mail" 
                 name="mail" 
                 placeholder="E-mail"
                 className="in-e-mail"
                 />
        </div>

        <ErrorMessage name="mail" component={()=> 
        <div className="error-email">{errors.mail}</div>}/>

        <div className="labelcontraseña">
            <label htmlFor="password"></label>
            <Field 
                 type="password" 
                 id="password" 
                 name="password"
                 placeholder="Contraseña"
                 className="in-contraseña" 
                 />
        </div>
        <ErrorMessage  name="password" component={()=> 
        <div className="error-contraseña">{errors.password}</div>}/>

        <div className="labelcontraseña2">
            <label htmlFor="contraseña2"></label>
            <Field 
                 type="password" 
                 id="password2" 
                 name="password2"
                 placeholder="Confirmar Contraseña" 
                 className="in-contraseña-2"
                 />
        </div>
        
        <ErrorMessage name="password2" component={()=> 
        <div className="error-contraseña-2">{errors.password2}</div>}/>

        <button type="submit" className="buttonSubmitReg">Registrar</button>
        {FormularioEnvidado && <p>{ message_reg }</p> }


    </Form>
    )}
    </Formik>

    <h4 className="estas-registrado">¿Ya estas Registrado?</h4>
    <Link to='/login'>
        <h4 className="inciar-sesion">Iniciar Sesión</h4>
    </Link>

     </div>

)

} 