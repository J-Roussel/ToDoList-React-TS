import React, { useState } from "react";
import './formulaire.css';
import { ITask } from "../interfaces/interfaces";


const Formulaire: React.FC<{}> = (props) =>{

    //don't forget to make to form reactive : add select option todo doing and done


    let initialValue: string[] = ["Name of the task...", "Description of the task..."];
    const [valueName, setValueName] = useState<string>(initialValue[0]);
    const [valueDescri, setValueDescri] = useState<string>(initialValue[1]);
    const [toDoList, setToDo] = useState<ITask[]>([]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        (e.target.name==='inputName')? setValueName(e.currentTarget.value) : setValueDescri(e.currentTarget.value);
    };   

    const addTask = ():void => {
        const newTask = {name:valueName, description:valueDescri};
        setToDo([...toDoList, newTask]);
        setValueName(initialValue[0]);
        setValueDescri(initialValue[1]);
    }

    return (
        <div className="containerForm">
            <div className="containerInfo">
                <div className="name" >
                    <label className="labelName" htmlFor="name">&nbsp; &nbsp; &nbsp;Name</label>
                    <input className="inputName" type="text" value={valueName}  onChange={handleChange} name='inputName'/>
                </div>
                <div className="description">
                    <label className="labelDescription" htmlFor="description">&nbsp; &nbsp; &nbsp;Description</label>
                    <input className="inputDescription" type="textarea" value={valueDescri} onChange={handleChange} name='inputDescri'/>
                </div>
            </div>
            <input type="button" className="valider" value="ADD ToDo" onClick={addTask}/>
        </div>
    );
}

export default Formulaire;