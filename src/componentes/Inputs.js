import React from 'react';
import '../stylesheets/Inputs.css'

function Entrada(props){


    return(
        <div className='data-input'>
            <input className='number-input' type='number' placeholder={props.children}/>
        </div>
    );
}

export default Entrada;

/*Termina*/