import React from 'react';
import Performance from './Performance';
import Features from './Features';
import '../Css/home.css'

function Home(){

return(
    <div>
        <div className='container-title'>
            <h1 className='h1-home'>REVOLUCIONA TUS RESERVAS</h1>
            <h3 className='h3-home'>No más filas. No más llamadas. No más espera.</h3>
            
        </div>
        {/* Aca se termina el bloque */}
        <div>
        <Performance/>
        </div>
        {/* Aca se termina el bloque */}
 
        <div>
        <Features/>
        </div>     
    </div>
)
}

export default Home;