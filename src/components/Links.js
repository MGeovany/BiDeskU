import React, {useEffect, useState} from 'react'
import { LinkForm } from './LinkForm'
import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";

import {db} from './Firebase'


export const Links = () => {


  const userCollectioRef = collection(db, "Ticket");

  const [links, setLinks] = useState([]);

  const addOrEdit = async (linkObject) =>{
    
    //await db.collection('links').doc().set(linkObject);
    
    await addDoc(userCollectioRef, linkObject);
    console.log('Nueva tarea agregada');

    
    getLinks();
  }


  const getLinks = async () =>{
    const querySnapshot = await getDocs(userCollectioRef);

    const docs = [];

    querySnapshot.forEach(doc => {
/*
      console.log('IMA HERE');
      console.log(doc.data('Ga8BRfm9qLJRvXZXEEXo'));
      console.log('IM OUT');
*/
      docs.push({...doc.data(), id:doc.id});

    });

    setLinks(docs);
    
  }

  useEffect(() => {

    
  
    getLinks();

    console.log("Obteniendo datos");



  },[]);

  const onDelete = async (id) => {

    await deleteDoc(doc(db, "Ticket", id));

    getLinks();

  }

  const onEdit = async (id) =>{
    
  }


  return (
    <div className='links'>
      
      <LinkForm addOrEdit={addOrEdit} getLinks={getLinks}/>
      <div className='card-r'>


      <div className='col'>
        {
          links.map((link, index) =>(

            <div className='card-mb' key={index}>
              <div className='cardb'>
                <h4>{link.nom}</h4>
                <h5>{link.desc}</h5>
                <a href={link.web} target="_blank" rel="noreferrer">
                  Go to Website
                </a>
                <br></br>
                <p></p>
                <button  className='btn-danger' onClick={() => onDelete(link.id)}>Eliminar</button> 
                
                <button style={{margin: "10px"}}  className='btn-primary' onClick={() => onEdit(link.id)}>Editar</button> 

                <hr></hr>
              
              </div>

            </div>
          ))
        }
      </div>
      </div>

    </div>
  )
}
