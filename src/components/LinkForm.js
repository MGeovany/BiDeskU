import React, {useState} from 'react'



export const LinkForm = (props, getLinks) => {

  const initialv = {
    nom: '',
    web: '',
    desc: ''
  
  }
  
  const [values, setvalues] = useState(initialv);
  

  
  const handleinputchange = (e) => {
    
    const{name, value} = e.target;
    setvalues({...values, [name]: value}) 
    
    
  
  };

  const handleSub = (e) =>{
    e.preventDefault();
//    console.log(values);

    
    props.addOrEdit(values);

    setvalues({...initialv})


  };



  return (
    <div className='contt'>
    
    <div className='card'>
        <form className=' card-body' onSubmit={handleSub}>

            <div className='form-group'>
                <em>Nombre:</em>
                <input 
                type="text"
                className='form-control'
                placeholder='Ingrese el nombre de la web'
                name='nom'
                value={values.nom}
                onChange={handleinputchange}
                
                >

                </input>
            </div>

            <div className='form-group'></div>
            <p></p>
            <em>Sitio Web:</em>
            <input
            className='form-control'
            type='text'
            placeholder='Website name'
            name='web'
            value={values.web}
            onChange={handleinputchange}
            >

            </input>

            <div className='form-group'></div>
            <p></p>
            <em>Descripcion:</em>
            <textarea 
            value={values.desc} 
            onChange={handleinputchange} 
            placeholder='write a desc' 
            name='desc' 
            rows="3" 
            className='form-control'>

            </textarea>

            <button className='send'>Enviar informacion</button> 
        </form>

    </div>

   
    </div>
  )
}
