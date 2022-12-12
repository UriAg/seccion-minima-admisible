import './App.css';
import Input from './componentes/Input';
import Selector from './componentes/Selector';
import Button from './componentes/Button';
import { useRef, useState } from 'react';

function App() {
  //Se crean las referencias para tensiones
  const triphasic = useRef();
  const monophase = useRef();

  //Acciones para tensiones
  const changeStyleMono = (e) =>{
  e.target.classList.toggle('btn--active');
  triphasic.current.classList.remove('btn--active');
 }

 const changeStyleTri = (e) =>{
  e.target.classList.toggle('btn--active');
  monophase.current.classList.remove('btn--active');
 }

 //Se crean referencias para cableados
 const buried = useRef();
 const exterior = useRef();
 const air = useRef();

 //Acciones para cableados
 const changeStyleBur = (e) =>{
  e.target.classList.toggle('btn--active');
  exterior.current.classList.remove('btn--active');
  air.current.classList.remove('btn--active');
 }

 const changeStyleExt = (e) =>{
  e.target.classList.toggle('btn--active');
  buried.current.classList.remove('btn--active');
  air.current.classList.remove('btn--active');
 }

 const changeStyleAir = (e) =>{
  e.target.classList.toggle('btn--active');
  exterior.current.classList.remove('btn--active');
  buried.current.classList.remove('btn--active');
 }

 //Renderizado
  return (
    <div className="App">
      <div className='data-input-container'>
      <h1 className='tension-title'>Seleccionar tipo de electrificación</h1>
        <div className='tension-selector-container'>
          <Selector ref={monophase} action={changeStyleMono} id={'tension monophase '}>Monofásico</Selector>
          <Selector ref={triphasic} action={changeStyleTri} id={'tension triphasic'}>Trifásico</Selector>
        </div>
        <Input>Potencia nominal</Input>
        <Input>Valor Fc</Input>
        <Input>Valor Fs</Input>
        <Input>Rendimiento</Input>
        <Input>Coseno de fí</Input>
        <h1 className='conduit-title'>Seleccionar tipo de Cañería</h1>
        <div className='conduit-selector-container'>
          <Selector ref={buried} action={changeStyleBur} id={'conduit buried'}>Enterrado</Selector>
          <Selector ref={exterior} action={changeStyleExt} id={'conduit exterior'}>Exterior</Selector>
          <Selector ref={air} action={changeStyleAir} id={'conduit air'}>Aire</Selector>
        </div>
        <Input>Longitud del segmento en metros</Input>
        <Input>Máximo porcentaje de caída</Input>
        <Input>Valor Zt</Input>
        <Input>Valor K</Input>
        <div className='button-container'>
          <Button identifier={'submit'}>Calcular</Button>
          <Button identifier={'clear'}>Limpiar</Button>
        </div>
      </div>
    </div>
  );
}

export default App;


/*Termina*/