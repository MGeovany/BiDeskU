import {Table, Button, Col, Input, Label, FormGroup} from 'reactstrap'
import {db} from './../components/Firebase'

import React, {useEffect, useState} from 'react'
import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import Tickets from './Tickets';
import TablaT from './TablaT';
import FootMove from './FootMove';





const TicketsCreados = () => {
    const [links, setLinks] = useState([]);
    const userCollectioRef = collection(db, "Ticket");


    const addOrEdit = async (linkObject) =>{

    
        await addDoc(userCollectioRef, linkObject);
        console.log('Nueva tarea agregada');
    
        
        getLinks();
      }

      const getLinks = async () =>{
        const querySnapshot = await getDocs(userCollectioRef);
    
        const docs = [];
    
        querySnapshot.forEach(doc => {

          docs.push({...doc.data(), id:doc.id});
    
        });
    
        setLinks(docs);
        
      }

      useEffect(() => {

    
  
        getLinks();
    
        console.log("Obteniendo datos");
    
    
    
      },[]);
    
   



  return (
      
  <div className="cien">
    
      <Tickets addOrEdit={addOrEdit}/>

    <div className='tcontainer '>
      <div className='h'>
        <h3>Tickets Pendientes</h3>

      </div>
       <TablaT/>
       <div className='end'>
     
          <FootMove/>
       </div>
    </div>
    </div>
  )
}

export default TicketsCreados