import React from 'react';
import '../stylesheets/Button.css';

/*Objetos*/


function Boton(props) {
    return(
        <div className='control-button'>
            <button type='submit' id={props.identifier} onClick={props.action}>{props.children}</button>
        </div>
    );
}







export default Boton;
/*Termina*/