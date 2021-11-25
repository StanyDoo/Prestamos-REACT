import React, {Fragment, useState} from 'react';
import Header from "./componentes/Header.js";
import Formulario from "./componentes/Formulario.js";
import Mensaje from './componentes/Mensaje.js';
import Resultado from './componentes/Resultado.js';
import Spinner from './componentes/Spinner.js';

function App() {

  //Definimos el state con useState que nos retorna dos valores
    //La primer variable que contiene el valor
    //Cantidad va a tener la cantidad que tenga useState() y guardarCantidad es la funcion
    //Para guardar o modificar el useState
    //Ponemos en useState(0) para arrancar en cero si fuera string seria '', tambien puede ser boolean como false
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    let componente;

    if(cargando){
      componente = <Spinner/>
    }
    else if(total === 0){
      componente = <Mensaje/>
    }else{
      componente = <Resultado
                      total={total}
                      plazo={plazo}
                      cantidad={cantidad}

      />

    }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de prestamos"
            
      />

      <div className="container">
        <Formulario
        //Igualamos el prop y la variable
        //Aqui estamos pasando los valores a los componentes
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        
        plazo={plazo}
        guardarPlazo={guardarPlazo}

        guardarTotal={guardarTotal}

        guardarCargando={guardarCargando}
        />
        <div className="mensajes">

          {componente}

        </div>
        

      </div>
     
    </Fragment>
  );
}

export default App;
