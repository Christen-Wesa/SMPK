import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return <>
  <div className='footer bg-dark pt-5 pb-3 text-center text-light'>
      <h4>Follow Us On</h4>
      <div className='icons my-3'>
        <a href='https://www.facebook.com/people/St-Mina-Pope-Kyrillous-Coptic-Orthodox-Church-Chesterfield-VA/100064838014658/' target='_blank'>
            <i className="fa-brands fa-facebook-f fa-2x mx-2"></i>
        </a>

        <a href='https://www.youtube.com/@saintminapopekyrillouschur6859' target='_blank'>
          <i className="fa-brands fa-youtube fa-2x mx-2"></i>
        </a>

        <a href='mailto:stminaandpopekyrillous@gmail.com' target='_blank'>
          <i className="fa-solid fa-envelope fa-2x mx-2"></i>
        </a>

        <a href='https://www.instagram.com/smpk.va/' target='_blank'>
          <i class="fa-brands fa-instagram fa-2x mx-2"></i>
        </a>
      </div>

    <Link to={'ContactUs'} className='contactUs-link fs-5'>Contact Us</Link>

    <p className='my-3 pt-4'>&copy; 2025, St. Mina and Pope Kyrillous Coptic Orthodox Church. All rights reserved.</p>
    
    <p>9515 Winterpock Road, Chesterfield, VA 23832 |  951-275-1347</p>
    
  </div>
  
  </>
}
