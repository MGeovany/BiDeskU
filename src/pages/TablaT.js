import {Table, Button, Col, Input, Label, FormGroup} from 'reactstrap'
import {db} from './../components/Firebase'

import React, {useEffect, useState} from 'react'
import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import Tickets from './Tickets';



const TablaT = () => {

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
  
    const onDelete = async (id) => {

      await deleteDoc(doc(db, "Ticket", id));
  
      getLinks();
  
    }

  return (
    <div className='tabla'>

    <Table
   dark
   responsive  
   striped
   >

       <thead><tr><th>ID</th>
       <th>NOMBRE</th>
       <th>EMAIL</th>
       <th>CAMPUS</th>
       <th></th>
       <th></th>
       </tr></thead>
       <tbody>
           {links.map((elemento, index) =>(
               <tr key={index}>
                   <td>{index}</td>
                   <td>{elemento.nom}</td>
                   <td>{elemento.email}</td>
                   <td>{elemento.camp}</td>
                   <td><Button className='lilb' color="success" size='sm'>Revisar</Button></td>
                   <td><Button className='lilb' color="secondary" size='sm' onClick={() => onDelete(elemento.id)}>Resolver</Button></td>
               </tr>
           ))}
       </tbody>
   </Table>

                       </div>
  )
  
}

export default TablaT