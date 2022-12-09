import './App.css';
import Input from './componentes/Input';
import Selector from './componentes/Selector';
import Button from './componentes/Button';

/*no son Buttones en si, son labels a los que quiero darles la función*/
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
        <Input>Potencia nominal</Input>
        <Input>Valor Fc</Input>
        <Input>Valor Fs</Input>
        <Input>Rendimiento</Input>
        <Input>Coseno de fí</Input>
        <h1 className='conduit-title'>Seleccionar tipo de Cañería</h1>
        <div className='conduit-selector-container'>
          <Selector id={'conduit buried'}>Enterrado</Selector>
          <Selector id={'conduit exterior'}>Exterior</Selector>
          <Selector id={'conduit air'}>Aire</Selector>
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