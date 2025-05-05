import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import img1 from "../../Images/LifeAt1.jpg";
import img2 from "../../Images/LifeAt2.jpg";
import img3 from "../../Images/LifeAt3.jpg";
import img4 from "../../Images/LifeAt4.jpg";
import img5 from "../../Images/LifeAt5.jpg";
import img6 from "../../Images/LifeAt6.jpg";
import img7 from "../../Images/LifeAt7.jpg";
import img8 from "../../Images/LifeAt8.jpg";
import img9 from "../../Images/LifeAt9.jpg";

export default function Home() {
  return <>
<Navbar/>

<div className="home">
  <div className="layer-black">
    <div className="content pt-5 d-flex flex-column justify-content-center">
      <h1 className='text-white text-center pb-4'>Welcome to St. Mina & Pope Kyrillous VA</h1>
      <p className='pb-3 align-self-center'>“Come to me, all you who are weary and burdened, and I will give you rest.”<br/> (Matthew 11:28)</p>
      <div className="links">
        <Link to='/Giving'><button className='btn text-white me-4'>Make a Donation</button></Link>
        <Link to='/Schedule'><button className='btn text-white'>Full Schedule</button></Link>
      </div>
    </div>
  </div>
</div>

<div className="schedule">
  <div className="layer-white">
    <div className="content h-100 p-4 text-center d-flex flex-column justify-content-center">
      <h1 className='py-4 main-color fw-bold'>Join Us</h1>
      <h5 className='text-dark'>the weekly liturgies</h5>
      <table className='align-self-center fs-5 my-3'>
        <tr>
          <td>Tuesday:</td>
          <td>5:00 - 7:00 AM</td>
        </tr>
        <tr>
          <td>Wednesday:</td>
          <td>3:30 - 6:00 PM</td>
        </tr>
        <tr>
          <td>Saturday:</td>
          <td>8:00 - 10:30 AM</td>
        </tr>
        <tr>
          <td>Sunday:</td>
          <td>8:30 - 11:30 AM</td>
        </tr>
      </table>
      <p className='text-dark fs-5 my-4 fst-italic'>Check Out The Full Calendar For Liturgies and Upcoming Events!</p>
      <Link to='/Schedule'><button className='btn btn-success my-4'>Full Calender</button></Link>        
    </div>
  </div>
</div>

<div className="lifeAt py-5 text-center">
  <div className="content py-4">
    <h2 className='pb-4'>Life At SMPK</h2>
    <p className='w-75 mx-auto text-dark'>Life at SMPK Church is filled with faith, fellowship, and service. We come together as a family to worship, grow in God’s Word, and support one another. Through heartfelt worship, inspiring messages, and community outreach, we strive to reflect Christ’s love in all we do. Whether in prayer gatherings, small groups, or serving the community, there is always a place for everyone to connect and belong.</p>
    
    <div className="images">
      <div className="row mx-5 my-4">
        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img1} alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text text-dark py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img2} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark  py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img3} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-5 my-4">
        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img4} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark  py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img5} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark  py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img6} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="row mx-5 my-4">
        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img7} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img8} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card border-0 bg-transparent">
            <img className="card-img-top" src={img9} alt="Card image cap"/>
            <div className="card-body text-white">
              <p className="card-text text-dark py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="giving text-center">
  <div className="layer-black">
    <div className="row m-0">
      <div className="col-md-6 col-sm-12 px-5">
        <h2 className='pt-5 pb-3 text-white'>Giving</h2>
        <p className='pb-5 text-white'>"Bring all the tithes into the storehouse, That there may be food in My house, And try Me now in this,” Says the Lord of hosts, “If I will not open for you the windows of heaven And pour out for you such blessing That there will not be room enough to receive it." Malachi 3:10</p>
      </div>
      <div className="col-md-4 col-sm-12 pb-5">
        <Link to={'/Giving'}><button className='btn btn-outline-warning text-white my-5'>Give Now</button></Link>
      </div>
    </div>
  </div>
</div>

<Footer/>
  </>
}
