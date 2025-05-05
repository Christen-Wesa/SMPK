import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import popeTawadros from '../../Images/PopeTawadros.jpg';
import Worship from '../../Images/Pillars-Church.jpg';
import PrayingHands from '../../Images/Pillars-Praying Hands.jpg';
import Bible from '../../Images/Pillars-Bible.jpg';
import People from '../../Images/Pillars-people.jpg';
import ShoePrint from '../../Images/Pillars-Foot Print.jpeg';
import Globe from '../../Images/Pillars-Globe.jpg';

export default function AboutUs() {
  return <>
   <Navbar/>
  
      <div className="AboutUsPage">
        <div className="layer-black">
          <div className="content pt-5 d-flex flex-column justify-content-center">
            <h1 className='text-white text-center py-5'>Live-Streaming</h1>
            <p className='fs-4 align-self-center'>"Their sound has gone out to all the earth, and their words to the ends of the world."<br/><i> (Romans 10:18)</i></p>            
          </div>  
        </div>    
      </div>
  
      <div className="Pillars p-5">
        <h2 className='text-center fs-1 pb-3'>Our Pillars</h2>
        <div className="row">
          <div className="col-md-4 my-3">
            <div className="card p-3 d-flex justify-content-center">
              <img className='align-self-center' src={Worship} height={100} width={100} alt="Worship"/>
              <div className="card-body">
                <h3 className='text-center'>Worship</h3>
                <p className="text-muted pt-2 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4 my-3">
            <div className="card p-3 d-flex justify-content-center">
              <img className='align-self-center' src={PrayingHands} height={100} width={100} alt="Worship"/>
              <div className="card-body">
                <h3 className='text-center'>Prayer</h3>
                <p className="text-muted pt-2 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4 my-3">
            <div className="card p-3 d-flex justify-content-center">
              <img className='align-self-center' src={Bible} height={100} width={100} alt="Worship"/>
              <div className="card-body">
                <h3 className='text-center'>Word Of God</h3>
                <p className="text-muted pt-2 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4 my-3">
            <div className="card p-3 d-flex justify-content-center">
              <img className='align-self-center'  src={People} height={100} width={100} alt="Worship"/>
              <div className="card-body">
                <h3 className='text-center'>Fellowship</h3>
               <p className="text-muted pt-2 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4 my-3">
            <div className="card p-3 d-flex justify-content-center">
            <img className='align-self-center'  src={ShoePrint} height={100} width={100} alt="Worship"/>
            <div className="card-body">
              <h3 className='text-center'>Discipleship</h3>
              <p className="text-muted pt-2 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
           </div>
          </div>
  
          <div className="col-md-4 my-3">
            <div className="card p-3 d-flex justify-content-center">
            <img className='align-self-center' src={Globe} height={100} width={100} alt="Worship"/>
            <div className="card-body">
              <h3 className='text-center'>Evangelism</h3>
              <p className="text-muted pt-2 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
  
        </div>
      </div>
  
      <div className="meetOurFathers">
        <div className="layer-black">
          <div className="content h-100 d-flex flex-column justify-content-center">
            <h2 className='text-white pt-5 align-self-center'>MEET OUR PRIESTS</h2>
            <p className='fst-italic text-center w-75 align-self-center pt-4'>“Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.”<br/> (Matthew 28:19-20)</p>
          </div>
        </div>
      </div>
  
      <div className="ourFather px-5 mx-5">
        <div className="row">
          <div className="col-lg-1 col-xs-0"></div>
  
          <div className="col-lg-4 col-md-5 col-xs-12">
            <div className="card p-3 my-5">
              <img src={popeTawadros} height={600} className="mx-auto card-img-top" alt="FR.Botros"/>
              <div className="card-body text-center">
                <h3>Fr. Botros</h3>
                <hr/>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-lg-2 col-md-2 col-xs-0"></div>
  
          <div className="col-lg-4 col-md-5 col-xs-12">
            <div className="card p-3 my-5">
              <img src={popeTawadros} height={600} className="mx-auto card-img-top" alt="FR.Botros"/>
              <div className="card-body text-center">
                <h3>Fr. Samuel</h3>
                <hr/>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-lg-1 col-xs-0"></div>
        </div>
      </div>
  
      <div className="popeTawadros border-top border-3 border-success p-4">
        <div className="row">
          <div className="col-md-8">
            <div className="content text-center d-flex flex-column justify-content-center h-100">
              <h2 className='aign-self-center'>His Holiness Pope Tawadros II</h2>
              <p className='aign-self-center text-muted'>His Holiness Pope Tawadros II is the 118th and current Pope of Alexandria and Patriarch of the See of St. Mark. He was enthroned on November 18, 2012 as the successor of the late Pope Shenouda III. The Coptic Orthodox Church operates under the guidance of the Holy Synod which is lead by HH Pope Tawadros III. May the Lord keep him and confirm him on his throne.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <img className='ms-5' src={popeTawadros} height={400} width={300} alt="Pope Tawadros" />
          </div>
        </div>
      </div>
  
      <div className="locationMap p-3">
        <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.6088193882983!2d-77.67720292533389!3d37.37543193506531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1768a93e795b5%3A0xfa47cb31258d80b6!2s9515%20Winterpock%20Rd%2C%20Chesterfield%2C%20VA%2023832!5e0!3m2!1sen!2sus!4v1744303219428!5m2!1sen!2sus" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  </>
}
