import React, { useRef } from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import emailjs from '@emailjs/browser';

export default function AboutUs() {

  const form = useRef('');

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_k659qck', 'template_bv0suhl', form.current, 'Fb07EoPHOAk7pwaZ9')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return <>
  <Navbar/>
        
      <div className="contactUs">
        <div className="layer-black">
          <div className="content pt-5 d-flex flex-column justify-content-center">
            <h1 className='text-white text-center py-4'>Contact Us</h1>
            <p className='fs-4 align-self-center'>All questions, comments, and prayer requests welcome!</p>
          </div>
        </div>
      </div>
  
      <div className="row mx-0">
        <div className="col-md-6">
          <div className="py-5 text-center">
            <h2 className='pt-4'>We Want to hear from you!</h2>
            <p className='text-black pt-3'>Use the form to get in touch with us.</p>
          </div>
        </div>
              
        <div className="col-md-6">
          <div className="py-5">
          <form ref={form} onSubmit={sendEmail}>
                    
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" name="user_name" id="exampleInputName" aria-describedby="emailHelp"></input>
          <br/>
  
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" name="user_email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <br/>
  
          <label for="exampleInputTitle" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" id="exampleInputTitle" aria-describedby="emailHelp"></input>
          <br/>
  
          <label className='form-label' for="floatingTextarea">Message</label>
          <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <br/>
  
          <input className="btn btn-primary" type="submit" value="Send" />
          </form>
          </div>
        </div>
      </div>
  </>
}

