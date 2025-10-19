import React from 'react';
import Navbar from "../Navbar/Navbar.jsx"

export default function WatchLive() {
  return <>
  <Navbar/>
      
    <div className="WatchLivePage">
      <div className="content pt-5 d-flex flex-column justify-content-center">
        <h1 className='text-white text-center py-5'>Live-Streaming</h1>
        <p className='fs-4 align-self-center'>"Their sound has gone out to all the earth, and their words to the ends of the world."<br/><i> (Romans 10:18)</i></p>
      </div>
    </div>
  
    <div className="LiveVideo my-5 py-5 mx-5">
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <iframe className='w-100' height={450} src='youtube.com/live/OJQzBBL-kUQ?reload=9&si=5m0Wp3kSQsfSwZoj' allowFullScreen></iframe>
        </div>
  
        <div className="col-lg-4 col-sm-12">
          <h4 className='fs-3 px-4 py-5 text-black'>Sanctuary / Chapel</h4>
        </div>
      </div>
    </div>
  </>
}

