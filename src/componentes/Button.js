import React from 'react';
import '../stylesheets/Button.css';

/*Objetos*/


const Boton = React.forwardRef((props, ref) => {
    return(
        <div className='control-button'>
            <button type='submit' id={props.identifier} onClick={props.action}>{props.children}</button>
        </div>
    );
})







export default Boton;
/*Termina*/