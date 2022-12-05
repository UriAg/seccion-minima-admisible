import React from 'react';
import '../stylesheets/Selector.css';



/*asigna un id al input y le pone el mismo id en forma de clase al label*/

function Selector(props){
    return(
        <div className='data-selector'>
            <input type='checkbox' value={props.value} id={props.id}></input>
            <label name='choiseBtn' className={props.id} htmlFor={props.id}>{props.children}</label>
        </div>
    )
}






export default Selector;
/*Termina*/