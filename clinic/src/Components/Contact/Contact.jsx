import React,  {useState } from 'react';
import './Contact.css';
import axios from 'axios';



  function  Contact(){
    const [value,setValue]=useState({
      name:"",
      email:"",
      address:"",
      city:"",
      state:"",
      message:"",
    });
  

    console.log(value);
    const handleChange=(e)=>{
      setValue({
        ...value,
        [e.target.name] :e.target.value
      });

    };


    const handleSubmit = async(e)=>{
      e.preventDefault();
      const submit =await axios.post("http://localhost:5000/submit",value);
   console.log(submit.data);
    }

  return (
   
   <>
    <div id='contact' className='main d-flex justify-content-center align-items-center'>
    <div  className='card-contact px-3 py-2'>
    <h1>Contact Form</h1>
     <hr />
     <form onSubmit={handleSubmit} >
     <div className='cont-form d-flex flex-column justify-content-between'>
    
      <div>
      <h5>Enter your name</h5>
        <input type='text' placeholder='Enter your name' name='name' onChange={handleChange} value={value.name} />
      </div>
      <div>
        <h5>Enter your e-mail</h5>
        <input type='text' placeholder='Enter your phone e-mail'name='email' onChange={handleChange} value={value.email}  />
      </div>
      <div>
        <h5>Address</h5>
        <input type='text' placeholder='Enter your address' name='address' onChange={handleChange} value={value.address} />
      </div>
      
      <div className='imp-data d-flex flex-column justify-content-between'>
      <div>
      <h5>City</h5>
        <input id='imp' type='text'placeholder='Enter your city' name='city' onChange={handleChange} value={value.city}/></div>
        <div> 
        <h5>State</h5>
        <input id='imp' type='text'placeholder='Enter your state' name='state' onChange={handleChange} value={value.state}/></div>
       

      </div>
      <div>
        <h5>Message</h5>
       <textarea type='text' placeholder='Enter your message' name='message' onChange={handleChange} value={value.message} />
      </div>
      <div>
        <button  type="submit" className='btn btn-danger' onSubmit={handleSubmit} >Submit</button>
       
      </div>

     </div>
     </form>
     

    </div>
    </div>
  
  </>
  );
  }


export default Contact

