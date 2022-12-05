import './App.css';
import Entrada from './componentes/Inputs';
import Selector from './componentes/Selector';
import Boton from './componentes/Button';

/*no son botones en si, son labels a los que quiero darles la función*/
/*Asi al clickear el label queda seleccionada la opcion con un cambio de estilo*/

function App() {
  return (
    <div className="App">
      <div className='data-input-container'>
      <h1 className='tension-title'>Seleccionar tipo de electrificación</h1>
      23
        <div className='tension-selector-container'>
          <Selector id={'tension monophase'}>Monofásico</Selector>
          <Selector id={'tension triphasic'}>Trifásico</Selector>
        </div>
        <Entrada>Potencia nominal</Entrada>
        <Entrada>Valor Fc</Entrada>
        <Entrada>Valor Fs</Entrada>
        <Entrada>Rendimiento</Entrada>
        <Entrada>Coseno de fí</Entrada>
        <h1 className='conduit-title'>Seleccionar tipo de Cañería</h1>
        <div className='conduit-selector-container'>
          <Selector id={'conduit buried'}>Enterrado</Selector>
          <Selector id={'conduit exterior'}>Exterior</Selector>
          <Selector id={'conduit air'}>Aire</Selector>
        </div>
        <Entrada>Longitud del segmento en metros</Entrada>
        <Entrada>Máximo porcentaje de caída</Entrada>
        <Entrada>Valor Zt</Entrada>
        <Entrada>Valor K</Entrada>
        <div className='button-container'>
          <Boton identifier={'submit'}>Calcular</Boton>
          <Boton identifier={'clear'}>Limpiar</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;


/*Termina*/