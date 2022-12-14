import React from "react";


const Output = React.forwardRef((props, ref) => {
    return(
        <div className="data__output">
            <h2 ref={ref} className={props.output}>{props.title}</h2>
        </div>
    );
})

export default Output;
/*Termina*/