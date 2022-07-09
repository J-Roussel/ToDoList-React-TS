import React, {FC, useState} from 'react';
import { ITask } from './interfaces/interfaces';
import Card from './card/card';

import './App.css';
import './formulaire/formulaire.css'

const App:FC<{}> = ():JSX.Element => {

  //Default values of the the inputs of the form
  let initialValue: string[] = ["Name of the task...", "Description of the task..."];
  const [valueName, setValueName] = useState<string>("");
  const [valueDescri, setValueDescri] = useState<string>("");


  //useState for the ToDoList
  const [toDoList, setToDo] = useState<ITask[]>([]);

  //onChange function
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
      (e.target.name==='inputName')? setValueName(e.currentTarget.value) : setValueDescri(e.currentTarget.value);
  };   

  //function that allows to add the task given by user in the ToDo card
  const addTask = ():void => {
    const newTask = {name:valueName, description:valueDescri};
    setToDo([...toDoList, newTask]);
    setValueName("");
    setValueDescri("");
  }







  return (
    <div className='all'>
      <h1>ToDo List Typescript</h1>


      {/*Formulaire*/}
      <div className='containerAllForm'>
        <div className="containerForm">
            <div className="containerInfo">
                <div className="name" >
                    <label className="labelName" htmlFor="name">&nbsp; &nbsp; &nbsp;Name</label>
                    <input className="inputName" type="text" value={valueName}  onChange={handleChange} name='inputName' placeholder={initialValue[0]}/>
                </div>
                <div className="description">
                    <label className="labelDescription" htmlFor="description">&nbsp; &nbsp; &nbsp;Description</label>
                    <input className="inputDescription" type="textarea" value={valueDescri} onChange={handleChange} name='inputDescri' placeholder={initialValue[1]}/>
                </div>
            </div>
            <input type="button" className="valider" value="ADD ToDo" onClick={addTask}/>
        </div>        
      </div>
      {/*Fin Formulaire*/}


      {/*Card */}
      <div className="containerAllCard">

        {/*Start LeftCard : ToDo card */}
        <div className="containerLeftCard">
          <Card titre="ToDo" id="leftTitle">
            <>
              {toDoList.map((task:ITask) => {
                if(task.name !== "" || task.description !== ""){
                  return (
                    <div className="card" id='idContainerCardLeft'>
                      <div className="task" id="idTaskLeft">
                        <h4>{task.name}</h4>
                        <div className="buttonAction">
                            <input className="buttonCompleted" id="idInputTaskLeft" type="button" value="completed"/>
                            <input className="buttonRemove"  type="button" value="remove"/>
                        </div>
                      </div>
                      <p className="taskDescription">{task.description}</p>
                    </div>                
                  );
                }
              })}
            </>
          </Card>
        </div>
        {/*End LeftCard : ToDo card */}


        {/*Start CenterCard : Doing card */}
        <div className='containerCenterCard'>
            <Card titre='Doing' id='centerTitle' /*idContainerCard='idContainerCardCenter' idTask = 'idTaskCenter' idInputTask='idInputTaskCenter'*//>
          </div>
        {/*End CenterCard : Doing card */}



      {/*Start RightCard : Done card */}
        <div className='containerRightCard'>
          <Card titre='Done' id='rightTitle' /*idContainerCard='idContainerCardRight' idTask = 'idTaskRight' idInputTask='idInputTaskRight'*//>
        </div>
      {/*End RightCard : Done card */}



      </div>
      {/*End Card */}

    </div>  
  );
}

export default App;
