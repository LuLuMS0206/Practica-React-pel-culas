/* eslint-disable no-undef */
import { NavbarComponent } from './components/navbarComponent/navbarComponent.jsx';
import { CardsComponent } from './components/cardsComponent/cardsComponent.jsx';
import { ButtonComponent } from './components/buttonComponent/buttonComponent.jsx';
import { useState } from 'react';

function App() {
  const [genre, setGenre] = useState('');

    const clickHandlerTodos = () => {
        setGenre('')
    }

    const clickHandlerInfantil = () => {
        setGenre('Infantil')
    }

    const clickHandlerComedia = () => {
        setGenre('Comedia')
    }


  return (
    <>
      <NavbarComponent/>
      <ButtonComponent clickHandlerTodos={clickHandlerTodos} clickHandlerInfantil={clickHandlerInfantil} clickHandlerComedia={clickHandlerComedia}/>
      <CardsComponent genre={genre}/>
    </>
  )
}

export default App;
