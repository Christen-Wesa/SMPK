import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import img1 from '../../Images/Ministries-Worship.jpg';
import img2 from '../../Images/Ministries-Prayer.jpg';
import img3 from '../../Images/Ministries-Deacons.jpg';
import img4 from '../../Images/Ministries-Children.jpg';
import img5 from '../../Images/Ministries-ChildrenBibleStudy.jpg';
import img6 from '../../Images/Ministries-Ecclesia.jpg';
import img7 from '../../Images/Ministries-Youth.jpg';
import img8 from '../../Images/Ministries-ServantsPreparation.jpg';
import img9 from '../../Images/Ministries-BibleStudy.jpg';
import img10 from '../../Images/Ministries-Family.jpg';
import img11 from '../../Images/Ministries-Scout.jpg';
import img12 from '../../Images/Ministries-Mission.jpg';
import img13 from '../../Images/Ministries-Care.jpg';
import img14 from '../../Images/Ministries-Media.jpg';
import img15 from '../../Images/Ministries-MiniMarket.jpg';

export default function Ministries() {
  return <>
   <Navbar/>
  
      <div className="MinistriesPage">
        <div className="layer-black">
          <div className="content d-flex flex-column justify-content-center">
            <h1 className='text-white text-center pb-3'>MINISTRIES</h1>
            <p className='fs-4 w-75 align-self-center'>"Each of you should use whatever gift you have recieved to serve others, as faithful stewards of God's grace in its various forms"<br/>(1 Peter 4:10)</p>
          </div>
        </div>
      </div>
  
      <div className="MinistriesCards my-5">
        <h6 className='text-center mx-5'>At SMPK, we offer a diverse range of ministries designed to serve everyone, from the youngest to the young at heart. Below, you'll find more details to some of our key ministries, though there are many more opportunities to get involved. We are always seeking volunteers with various talents and skills to join our efforts and strengthen our community.</h6>
        
        <div className="row my-5 mx-0">
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img1} class="card-img-top mx-auto rounded-circle" alt="Worship Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Worship Ministry</h4>
                <p class="card-text text-muted my-4">The Worship Ministry lifts the faithful into God’s presence through the sacred hymns of the Divine Liturgy and Vespers. Each chant and prayer opens the heart to heavenly worship and the beauty of Orthodox tradition.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img2} class="card-img-top mx-auto rounded-circle" alt="Prayer Meeting"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Prayer Meeting</h4>
                <p class="card-text text-muted my-4">Our Prayer Meeting is a time when believers gather to lift up prayers for the church, community, and personal needs, trusting in God’s power to move.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img3} class="card-img-top mx-auto rounded-circle" alt="Deacons Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Deacons Ministry</h4>
                <p class="card-text text-muted my-4">A cherished part of our church’s rich heritage is the hymnology and liturgical roles beautifully brought to life by our ordained deacons in every service.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img4} class="card-img-top mx-auto rounded-circle" alt="Children Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Children Ministry</h4>
                <p class="card-text text-muted my-4">Sunday School and other Children’s Ministry provide a fun, loving environment where kids learn about Jesus and grow in faith through Bible stories, songs, and activities.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img5} class="card-img-top mx-auto rounded-circle" alt="Children Bible Study"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Children Bible Study</h4>
                <p class="card-text text-muted my-4">Children’s Bible Study helps young ones dive deeper into Scripture, encouraging them to understand God’s Word and apply it in their daily lives.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img6} class="card-img-top mx-auto rounded-circle" alt="Ecclesia Coptic Academy"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Ecclesia Coptic Academy</h4>
                <p class="card-text text-muted my-4">Coptic Ecclesia Academy offers a structured Christian education, teaching children and youth the basics of the Orthodox faith, the Bible, and Coptic hymns and the Orthodox Rites.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img7} class="card-img-top mx-auto rounded-circle" alt="Youth Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Youth Ministry</h4>
                <p class="card-text text-muted my-4">The Youth Ministry connects teens through fellowship, worship, and Bible study, helping them build strong faith and lasting friendships in Christ.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img8} class="card-img-top mx-auto rounded-circle" alt="Servants Preparation Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Servants Preparation Ministry</h4>
                <p class="card-text text-muted my-4">This ministry equips future church servants with the spiritual knowledge, training, and guidance needed to lead and serve with love and responsibility.</p>
              </div>
            </div>
          </div>
  
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img9} class="card-img-top mx-auto rounded-circle" alt="Bible Study Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Bible Study Ministry</h4>
                <p class="card-text text-muted my-4">Our Adult Bible Study offers a space for spiritual growth through the deep study of Scripture. Together, we explore God’s Word, reflect on its meaning, and learn how to live out our faith in daily life, drawing closer to Christ and one another.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img10} class="card-img-top mx-auto rounded-circle" alt="Family Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Family Ministry</h4>
                <p class="card-text text-muted my-4">The Family Ministry supports and strengthens marriages and parenting through workshops, gatherings, and biblical teaching for all family members.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img11} class="card-img-top mx-auto rounded-circle" alt="Scout Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Scout Ministry</h4>
                <p class="card-text text-muted my-4">The Scout Ministry teaches children and youth discipline, teamwork, and Christian values through fun activities, service, and outdoor experiences.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img12} class="card-img-top mx-auto rounded-circle" alt="Mission Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Mission Ministry</h4>
                <p class="card-text text-muted my-4">Mission Ministry reaches out to those in need—locally and globally—through acts of service, mission trips, and spreading hope and kindness in Christ’s name.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img13} class="card-img-top mx-auto rounded-circle" alt="Care Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Care Ministry</h4>
                <p class="card-text text-muted my-4">The Care Ministry provides spiritual and emotional support to the sick, elderly, and anyone going through hard times, reminding them they’re not alone.</p>
              </div>
            </div>
          </div>
  
          <div className="col-4">
            <div class="card border-0">
              <img src={img14} class="card-img-top mx-auto rounded-circle" alt="Media Ministry"/>
              <div class="card-body text-center">
                <h4 className='my-3'>Media Ministry</h4>
                <p class="card-text text-muted my-4">This ministry uses technology to support worship services, livestream events, and share the church’s message through video, social media, and design.</p>
              </div>
            </div>
          </div>
          
          <div className="col-4">
            <div class="card border-0">
              <img src={img15} class="card-img-top mx-auto rounded-circle" alt="Mini Market."/>
              <div class="card-body text-center">
                <h3 className='my-3'>Mini Market</h3>
                <p class="card-text text-muted my-4">The Ministry Market is a special event that celebrates church ministries by showcasing their work, inviting others to get involved, and building community.</p>
              </div>
            </div>
          </div>
          
        </div>
  
      </div>
  </>
}
