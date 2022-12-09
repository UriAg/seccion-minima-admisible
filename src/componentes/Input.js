import React from 'react';
import '../stylesheets/Input.css'

function Input(props){


    return(
        <div className='data-input'>
            <input className='number-input' type='number' placeholder={props.children}/>
        </div>
    );
}

export default Input;

/*Termina*/