import {Form, Button, Col, Input, Label, FormGroup} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './tickets.scss'
import React, {useState} from 'react'
import TicketsCreados from './TicketsCreados'



const Tickets = (props) =>{

  const initialU ={
    nom: '',
    email: '',
    camp: '',
    msj: '',

  }

  const [values, setvalues] = useState(initialU);

  const handleinputchange = (e) =>{

    const {name, value} = e.target;
    setvalues({...values, [name]: value})
  };

  const handlesub = (e) =>{
    e.preventDefault();

    props.addOrEdit(values);

    setvalues({...initialU})

  }
    
return(


    <div className='tcontainer'>
      <Form onSubmit={handlesub}>
      <h2>Crear Nuevo Ticket</h2>
      <br />
      <FormGroup row>
        <Label
          for="exampleEmail"
          sm={2}
        >
          Nombre

        </Label>
        <Col sm={10}>
          <Input
            id="nombre"
            name="nom"
            value={values.nom}
            onChange={handleinputchange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label
          for="exampleEmail"
          sm={2}
        >
          E-mail
        </Label>
        <Col sm={10}>
          <Input
             id="email"
             name="email"
             value={values.email}
             onChange={handleinputchange}
            />
        </Col>
      </FormGroup>


    
      <FormGroup row>
        <Label
          for="exampleSelect"
          sm={2}
        >
          Campus
        </Label>
        <Col sm={10}>
          <Input
            
            id="campus"
            name="camp"
            value={values.camp}
            onChange={handleinputchange}

            type="select"
          >
            <option>
              --
            </option>
            <option>
              Sede La Ceiba
            </option>
            <option>
              Sede San Pedro Sula
            </option>
            <option>
              Sede Tegucigalpa
            </option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleText"
          sm={2}
        >
          Mensaje
        </Label>
        <Col sm={10}>
          <Input
            id="decripcion"
            name="msj"
            value={values.msj}
            onChange={handleinputchange}
            
            type="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleFile"
          sm={2}
        >
          Adjuntos
        </Label>
        <Col sm={10}>
          <Input
            id="exampleFile"
            name="file"
            type="file"
          />
        
        </Col>
      </FormGroup>
        <div className='btn1'>
        <Button color="primary">Enviar Informacion</Button>
        <Button color="danger">Cancelar</Button>
        </div> 
        
      </Form>
  </div>

);
}

export default Tickets