import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";

export default function Schedule() {
  return <>
  <Navbar/>
      <div className="schedulePage">
        <div className="layer-black">
          <div className="content pt-5 d-flex flex-column justify-content-center">
            <h1 className='text-white text-center pt-5 pb-3'>JOIN US</h1>
            <p className='fs-2 align-self-center'>Our Full Schedule of Services</p>
          </div>
        </div>
      </div>
  
      <div className="container ps-5 ms-0 pb-4">
        <h2 className='py-4'>Upcoming Events</h2>
        <div className="row">
          <div className="col-md-6 col-sm-10">
          <iframe className='w-100' src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=0&showCalendars=0&showTz=0&showTabs=0&mode=AGENDA&src=ZnIuc2FtdWVsdEBnbWFpbC5jb20&color=%23C0CA33" height={800} frameborder="0" scrolling="no"></iframe>          
          </div>
        </div>
      </div>
  
      <hr className='border-3 border-dark'/>
     
      <div className='calender my-4 ms-4 px-5 '>
        <h2 className='text-center py-3'>Full Calender</h2>
        <div className="row">
          <div className="col-12">
            <iframe className='mt-4 w-100' src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showTitle=0&showTz=0&src=ZnIuc2FtdWVsdEBnbWFpbC5jb20&color=%23C0CA33" height={600} frameborder="0" scrolling="no"></iframe>    
          </div>
        </div>
      </div>
  </>
}
