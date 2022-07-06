import React from 'react';
import './App.css';
import Formulaire from "./formulaire/formulaire.tsx";
import Card from './card/card.tsx';

function App() {

  let message: string;
  message = "ToDo List";
  
  return (
    <div className='all'>
      <h1>{message}</h1>
      <div className='containerAllForm'>
        <Formulaire />
      </div>
      <div className='containerAllCard'>
        {/*don't forget to add div to each card to change their border top color*/}
        
        <div className='containerLeftCard'>
          <Card titre='ToDO' id='leftTitle' idContainerCard='idContainerCardLeft' idTask = 'idTaskLeft' idInputTask='idInputTaskLeft'/>
        </div>
        <div className='containerCenterCard'>
          <Card titre='Doing' id='centerTitle' idContainerCard='idContainerCardCenter' idTask = 'idTaskCenter' idInputTask='idInputTaskCenter'/>
        </div>
        <div className='containerRightCard'>
          <Card titre='Done' id='rightTitle' idContainerCard='idContainerCardRight' idTask = 'idTaskRight' idInputTask='idInputTaskRight'/>
        </div>
      </div>
    </div>

  );
}

export default App;
