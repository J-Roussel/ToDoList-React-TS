import React from "react";
import  './card.css';

type cardProps = {
    titre: string;  
    id:string;
    idContainerCard:string;
    idTask:string;
    idInputTask:string;
}

function Card({ titre, id, idContainerCard, idTask, idInputTask }: cardProps) {


    return (
        <div className="containerCard" >
            <h3 className="titreCard" id={id}>{titre}</h3>
            <div className="card" id={idContainerCard}>
                <div className="task" id={idTask}>
                    <h4>Task</h4>
                    <div className="buttonAction">
                        <input className="buttonCompleted" id={idInputTask} type="button" value="completed"/>
                        <input className="buttonRemove"  type="button" value="remove"/>
                    </div>
                </div>
                <p className="taskDescription">Description</p>
            </div>
            <p className="addDescription">Add <span>+</span></p>
        </div>
    );


}




export default Card;




