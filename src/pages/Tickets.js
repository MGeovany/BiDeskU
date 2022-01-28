import React from 'react'
import {Form, Button, Col, Input, FormText, Label, FormGroup} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './tickets.scss'



const Tickets = () =>{
    return(

<div className="tcon">

  <div className='tcontainer'>
    <Form>
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
          name="nombre"
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
          id="nombre"
          name="nombre"
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
          id="exampleSelect"
          name="select"
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
          id="exampleText"
          name="text"
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


  
  <div className='tcontainer seccard'>

  </div>



</div>

);
}

export default Tickets