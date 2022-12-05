import React from 'react';
import '../stylesheets/Button.css';

/*Objetos*/
const d = document;


function Boton(props){
    return(
        <div className='control-button'>
            <button type='submit' id={props.identifier}>{props.children}</button>
        </div>
    );
}







export default Boton;
/*Termina*/