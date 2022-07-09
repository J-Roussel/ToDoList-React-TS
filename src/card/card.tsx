import React, {  } from "react";
import  './card.css';

type CardProps = {
    titre: string;  
    id:string;
    /*idContainerCard:string;
    idTask:string;
    idInputTask:string;*/
    children?:JSX.Element;
}

function Card({ titre, id,  /* idContainerCard,idTask, idInputTask*/children  }: CardProps) {


    return (
        <div className="containerCard" >
            <h3 className="titreCard" id={id}>{titre}</h3>
                {children}
            <p className="addDescription">Add <span>+</span></p>
        </div>
    );


}



export default Card;




