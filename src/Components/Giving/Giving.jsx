import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";
import img1 from "../../Images/givingCard1.jpg";
import img2 from "../../Images/givingCard2.jpg";
import img3 from "../../Images/givingCard3.jpg";
import img4 from "../../Images/givingCard4.jpg";
import img5 from "../../Images/givingCard5.jpg";
import img6 from "../../Images/givingCard6.jpg";
import img7 from "../../Images/givingCard7.jpg";

export default function Giving() {
  return <>
  <Navbar/>

<div className="givingPage">
  <div className="layer-black">
    <div className="content px-5 h-100 d-flex flex-column justify-content-center">
      <h1 className='text-white text-center pb-5 align-self-center'>Giving</h1>
      <p className='text-white text-center fs-5 fst-italic align-self-center'>“Bring all the tithes into the storehouse, That there may be food in My house, and try Me now in this,” says the Lord of hosts, “If I will not open for you the windows of heaven and pour out for you such blessing that there will not be room enough to receive it.“ <br/> (Malachi 3:10) </p>
    </div>
  </div>
</div>

<div className="whyGive p-4 my-3 text-center">
  <h2 className='pb-4 position-relative'>Why Give?</h2>
  <p className='text-black fs-5 lh-lg'>We believe that giving is an act of worship. People aren’t giving to a church or a building, but to our Lord Jesus Christ Himself.</p>
  <p className='text-black fs-5 lh-lg'>Giving is an act of worship and a way to express gratitude for God's blessings. Your donation helps support the church’s mission, outreach programs, and community services, ensuring that we can continue to spread God’s love through worship, discipleship, and acts of kindness. Every contribution, no matter the size, makes a meaningful impact—helping those in need, maintaining our place of worship, and funding ministries that bring hope and transformation.<br/> As 2 Corinthians 9:7 reminds us, "God loves a cheerful giver." Thank you for being a part of this mission and for your generosity in advancing God's kingdom.</p>
</div>

<div className="waysToGive text-center py-5 bg-success text-white">
  <h2 className='fs-1'>Ways to Give</h2>
  <p className='py-4 fs-5'>We encourage regular automatic giving to help us better forecast and distribute income to the various ministries we support.</p>
  <div className="row mx-0">
    <div className="col-4">
      <h3>Give Online</h3>
      <hr style={{width: 50}} className='my-1 mx-auto'/>
      <hr style={{width: 100}} className='my-0 mx-auto'/>
      <p className='text-white pt-4 pb-3'>Make a one time donation or set up your recurring gift.</p>

      <button type="button" className="btn btn-warning rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        GIVE NOW
      </button>
      <div className="modal fade" id="exampleModal1" tabindex="-1" bs-role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black fs-2 mx-auto" id="exampleModalLongTitle">GIVE ONLINE</h5>
            </div>
            <div className="modal-body text-black text-center">
               You can Donate through Paybal or with Debit/Credit Card. 
            </div>
            <div className="modal-footer">
              <Link target='blank' to={"https://smpkva.chmeetings.com/Giving/85DF1B1CC54114E7"} className="btn btn-success mx-auto" >GIVE NOW</Link>                
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-4">
      <h3>Give By Zelle</h3>
      <hr style={{width: 50}} className='my-1 mx-auto'/>
      <hr style={{width: 100}} className='my-0 mx-auto'/>
      <p className='text-white pt-4 pb-3'>You can Donate Now Via Zelle.</p>
      <button type="button" className="btn btn-warning rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        GIVE NOW
      </button>
      <div className="modal fade" id="exampleModal2" tabindex="-1" bs-role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black fs-2 mx-auto" id="exampleModalLongTitle">GIVE BY ZELLE</h5>
            </div>
            <div className="modal-body text-black text-center">
               Zelle to : (804) 247 9045.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success mx-auto" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="col-4">
      <h3>Give By Mail</h3>
      <hr style={{width: 50}} className='my-1 mx-auto'/>
      <hr style={{width: 100}} className='my-0 mx-auto'/>
      <p className='text-white pt-3 pb-4'> Mail your donation to our office in Chesterfield.</p>
      <button type="button" className="btn btn-warning rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal3">
        ADDRESS
      </button>
      <div className="modal fade" id="exampleModal3" tabindex="-1" bs-role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black fs-2 mx-auto" id="exampleModalLongTitle">GIVE BY MAIL</h5>
            </div>
            <div className="modal-body text-black text-center">
            St.Mina and Pope Kyrillous Coptic Orthodox Church of Chesterfield VA
            <br/>Attn: Finance
            <br/>9515 Winterpock Road
            <br/>Chesterfield, VA 23832

            <br/><i>Please include your contact information and any other relevant information.</i>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success mx-auto" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='py-5'>
    <h3 className='py-2'>Tax Deductable</h3>
    <hr style={{width: 50}} className='my-1 mx-auto'/>
    <hr style={{width: 100}} className='my-0 mx-auto'/>
    <p className='text-white pt-3'>Please contact us for any tax related questions at finance@SMPKVA.net.</p>
    <p className='pt-3'><i>The church reserves the right to allocate all donations as it sees fit to satisfy any of the needs of its members or its needs as an organization.</i></p>
  </div>
</div>

<div className="givingFromHeart text-center py-3 my-4 px-5">
  <h2 className='py-4'>Giving from the Heart</h2>
  <p className='main-color py-3'>Giving isn’t just about money—it’s also about sharing your time, talents, and prayers. While financial support helps sustain the church’s mission, incorporeal giving—acts of service, encouragement, and spiritual support—is just as valuable. Whether it’s volunteering for church activities, mentoring others in faith, or simply offering a kind word to someone in need, your generosity in these ways helps strengthen our church family and community. Every act of giving, whether material or immaterial, is a reflection of God’s love at work.</p>
  <div className="givingCards my-5">
    <div className="row my-5">

      <div className="col-md-3">
        <div className="card">
          <img className='mx-auto' src={img1} alt="Church Cleaning" width={150} height={150}/>
          <h5 className='py-3'>Church Cleaning</h5>
          <p className='main-color px-3'>The Church Cleaning Ministry is a humble yet vital service that ensures the house of God remains clean, welcoming, and reverent for worship. Volunteers in this ministry work behind the scenes to maintain the beauty and sanctity of the church, preparing a peaceful environment where the congregation can gather in prayer and fellowship. Their dedication reflects love for God’s house and a spirit of service to the community.</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img className='mx-auto' src={img2} alt="Baking the Qurban" width={170} height={150}/>
          <h5 className='py-3'>Baking the Qurban</h5>
          <p className='main-color px-3'>The Qorban Baking Ministry is a sacred service dedicated to preparing the holy bread used in the Divine Liturgy. With prayerful hands and reverence, volunteers bake the Qorban early in the morning, offering their time and hearts to God. This ministry is more than baking—it is an act of worship, rooted in love, humility, and a deep sense of spiritual responsibility.</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img className='mx-auto' src={img3} alt="Van Transportation" width={170} height={150}/>
          <h5 className='py-3'>Van Transportation</h5> 
          <p className='main-color px-3'>he Van Transportation Ministry provides a valuable service by helping members of the church community, especially the elderly and those without transportation, attend services and events. Volunteers in this ministry offer their time and vehicles to ensure that no one is left behind, reflecting Christ’s love through acts of kindness and support. It’s a ministry of connection, care, and compassion.</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img className='mx-auto' src={img4} alt="Youth Ministry" width={150} height={150}/>
          <h5 className='py-3'>Youth Ministry</h5>
          <p className='main-color px-3'>The Youth Services Ministry is dedicated to guiding and nurturing the spiritual growth of young people in the church. Through fellowship, teaching, and engaging activities, this ministry helps youth build a strong foundation in faith, develop Christian values, and form lasting friendships. It’s a space where young hearts are inspired to know Christ, serve others, and grow in their walk with God.</p>
        </div>
      </div>
    </div>

    <div className="row my-5">
      <div className="col-md-4">
        <div className="card">
          <img className='mx-auto' src={img5} alt="Church Maintanence" width={150} height={150} />
          <h5 className='py-3'>Church Maintanence</h5>
          <p className='main-color px-3'>The Church Maintenance Ministry is responsible for the care and upkeep of the church building and grounds. Through regular repairs, inspections, and improvements, this ministry ensures that the church remains a safe, functional, and beautiful place for worship and community gatherings. Their behind-the-scenes work is a quiet but essential offering of service to God and His people.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img className='mx-auto' src={img6} alt="Food Ministry" width={150} height={150}/>
          <h5 className='py-3'>Food Ministry</h5>
          <p className='main-color px-3'>The Food Services Ministry provides nourishment and hospitality to the church community during events, gatherings, and special occasions. With love and care, volunteers prepare and serve meals that bring people together in fellowship and joy. This ministry reflects Christ’s spirit of generosity, turning simple acts of serving food into meaningful moments of connection and care.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img className='mx-auto' src={img7} alt="Gardening Ministry" width={150} height={150}/>
          <h5 className='py-3'>Gardening Ministry</h5>
          <p className='main-color px-3'>The Gardening Ministry beautifies the church grounds through the care of plants, flowers, and landscaping. Volunteers in this ministry use their hands to cultivate God’s creation, creating a peaceful and welcoming environment for worship and reflection. Their work is a quiet expression of love, bringing life and beauty to the house of the Lord.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  
  </>
}
