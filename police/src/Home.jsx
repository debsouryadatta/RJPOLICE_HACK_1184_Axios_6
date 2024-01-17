/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import './home.css'
import Logo from './assets/Logo.png'
import Hero_Logo from './assets/Hero_Logo .png'
import cctv from './assets/cctv.png'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p6 from './assets/p6.jpeg'
import p3 from './assets/p3.jpg'
import pol6 from './assets/pol6.jpg'
import pol7 from './assets/pol7.webp'
import police from './assets/police.jpeg'
import policepng from './assets/police.png'
import twitter from './assets/twitter.png'
import website from './assets/website.png'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'


import { useState, useEffect } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(1);

const reload = () => {
  window.location.href = '/login'
}
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.getElementById(`radio${counter}`).checked = true;
      setCounter((prevCounter) => (prevCounter % 4) + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  const faqClickHandler = (e) => {
    const accordian = e.target.closest('.accordian');
    if (accordian) {
      accordian.classList.toggle('active');
      accordian.parentElement.classList.toggle('active');
      const panel = accordian.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwi_xvE9-6_qJWElzcEGchxvU1g-OFsX0qNVp4jQcxZxovUSQZWzU9-2d14lBdtzksJpg/exec';

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      if (response.ok) {
        // Handle success
        console.log('Response received successfully');
        form.reset();
      } else {
        // Handle error
        console.error('Error!', response.statusText);
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  

  

  return (
    <>
      <nav>
      <div className="main-nav container flex" style={{display: 'flex', justifyContent: 'space-between'}} id="sidemenu">
        <a href="#" onClick={reload} className="police-logo">
          <img src={Logo} />
        </a>


        <div className="nav-links">
          <ul className="flex">
            <li className="hover-link nav-item" id="home">
              <a href="#page1">Home</a>
            </li>
            <li className="hover-link nav-item" id="about">
              <a href="#page2">About Us</a>
            </li>
            <li className="hover-link nav-item" id="faqs">
              <a href="#page3">FAQs</a>
            </li>
            <li className="hover-link nav-item" id="contact">
              <a href="#page4">Contact Us</a>
            </li>

            <div >
            <button className="login flex open-button" onClick={reload}><Link style={{color: 'white'}} to={'/login'}>Login/Register</Link></button>
            </div>
            <div className="box">
              
              <dialog className="modal" id="modal">
                <button className="close-button">
                  <ion-icon name="close-circle"></ion-icon>
                </button>
                <div className="options">
                  <div className="police">
                    <img src={policepng} alt="" />
                    <h3>Police Department</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Harum repellendus quasi cupiditate. Necessitatibus,
                      voluptatem possimus.
                    </p>
                    <button className="login pol">Click Here</button>
                  </div>
                  <div className="civilian">
                    <img src={Hero_Logo} alt="" />
                    <h3>Register your Camera</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis eligendi illo autem porro doloribus dicta maxime
                      temporibus optio debitis vero? Ad.
                    </p>
                    <button className="login civil">Click Here</button>
                  </div>
                </div>
              </dialog>
            </div>
          </ul>
        </div>
        <div className="box2">
          <dialog className="modal2" id="modal2">
            <button className="close-button2">
              <ion-icon name="close-circle"></ion-icon>
            </button>
            <ul className="flex">
              <li className="hover-link nav-item" id="home2">
                <a href="#page1">Home</a>
              </li>
              <li className="hover-link nav-item" id="about2">
                <a href="#page2">About Us</a>
              </li>
              <li className="hover-link nav-item" id="faqs2">
                <a href="#page3">FAQs</a>
              </li>
              <li className="hover-link nav-item" id="contact2">
                <a href="#page4">Contact Us</a>
              </li>
              <button className="login flex open-button" id="login2">
                Login/Register
              </button>
              <div className="box">
                <dialog className="modal3" id="modal3">
                  <button className="close-button3">
                    <ion-icon name="close-circle"></ion-icon>
                  </button>
                  <div className="options3">
                    <div className="police3">
                      <img src={policepng} alt="" />
                      <h3>Police Department</h3>
                      <button className="login pol3">Click Here</button>
                    </div>
                    <div className="civilian3">
                      <img src={cctv} alt="" />
                      <h3>Register your Camera</h3>
                      <button className="login civil3">Click Here</button>
                    </div>
                  </div>
                </dialog>
              </div>
            </ul>
          </dialog>
        </div>
        
      </div>
      <div className="next">Total Number of Cameras Registered: 300</div>
        
      </nav>
      <main>
      <div id="google_translate_element"></div>
      <div id="page1">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <div className="slide first">
              <img src={p2} alt="" />
            </div>
            <div className="slide">
              <img src={p1} alt="" />
            </div>
            <div className="slide">
              <img src={p3} alt="" />
            </div>
            <div className="slide">
              <img src={p6} alt="" />
            </div>
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
        <div className="logo">
          <img src={Hero_Logo} alt="image not found" />
        </div>
      </div>
      <div id='page2'>
        <div className="overlay">
          <h1>About Us</h1>
          <div className="row">
            <div className="col1">
              <img src={pol7} alt="" />
            </div>
            <div className="col2">
              <div className='soumargha'>

              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, placeat aut expedita nemo mollitia, quod doloribus
                minima nihil repellendus ratione dolor reprehenderit ipsa illum
                voluptatum, non deserunt magnam ea dicta explicabo suscipit quo
                cumque voluptate esse. Sint, esse! Dolores, delectus alias.
                Tenetur, accusantium alias? Dolore inventore omnis laudantium
                blanditiis hic cumque libero recusandae cupiditate? Mollitia
                incidunt facere consequuntur voluptatibus culpa eaque maxime, et
                natus itaque quae necessitatibus explicabo est nemo error illo
                tempore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                iusto atque quas hic soluta deserunt inventore quidem natus
                reiciendis perspiciatis! Consectetur eaque, asperiores quo
                magnam ullam ipsam animi perferendis beatae odio. Consequuntur
                rem nesciunt unde, libero iusto soluta reiciendis similique
                assumenda sint obcaecati maxime dicta quaerat qui officia ipsum
                laborum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                similique rerum illum excepturi, suscipit nulla, culpa vero
                inventore doloremque quasi rem, natus non quisquam quis quidem
                eos perspiciatis atque libero asperiores quas vel sequi
                molestiae reiciendis voluptatibus. In, nisi quis?
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vdo">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-Ay3-K8vEE0?si=vifBVd00G_Vzk3Tz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div id="page3">
        <h1>Frequently Asked Questions</h1>
        <div className="faq">
          <button className="accordian">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              atque?
            </p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugit corrupti repellendus sapiente vitae dolorem earum quidem
              doloremque fugiat consequuntur.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className="accordian">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              atque?
            </p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugit corrupti repellendus sapiente vitae dolorem earum quidem
              doloremque fugiat consequuntur.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className="accordian">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              atque?
            </p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugit corrupti repellendus sapiente vitae dolorem earum quidem
              doloremque fugiat consequuntur.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className="accordian">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              atque?
            </p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugit corrupti repellendus sapiente vitae dolorem earum quidem
              doloremque fugiat consequuntur.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className="accordian">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              atque?
            </p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugit corrupti repellendus sapiente vitae dolorem earum quidem
              doloremque fugiat consequuntur.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className="accordian">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              atque?
            </p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugit corrupti repellendus sapiente vitae dolorem earum quidem
              doloremque fugiat consequuntur.
            </p>
          </div>
        </div>
      </div>
      <div id="page4">
        <div className="container4">
          <h1>Contact US</h1>
          <div className="contact-right">
            <h2>Any Questions?</h2>
            <h3>You can ask anything you want to know</h3>
            <form name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="r">
                <span id="msg"></span>
                <button type="submit" onClick={reload} className="btn2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="copyright">
          <div className="rw">
            <div className="c1">
              <p>
                <ion-icon name="mail"></ion-icon
                >police.hackathon@rajpolice.gov.in
              </p>
              <p><ion-icon name="call"></ion-icon>0141-2712263</p>
            </div>
            <div className="c2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              odio provident molestias voluptate ipsam labore sit quae iusto,
              odit esse dolorem est illo reprehenderit, id, deserunt a molestiae
              repellat? Voluptas!
            </div>
            <div className="c3">
              <a
                href="https://www.linkedin.com/company/rajasthan-police?originalSubdomain=in"
                target="_blank" rel="noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a
                href="https://www.facebook.com/PoliceRajasthan"
                target="_blank" rel="noreferrer"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a
                href="https://www.instagram.com/policerajasthan/?igsh=ZG1sMzFqYjl0cnpq"
                target="_blank" rel="noreferrer"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="https://police.rajasthan.gov.in/" target="_blank" rel="noreferrer">
                <img src={website} alt="" />
              </a>
              <a href="https://twitter.com/PoliceRajasthan" target="_blank" rel="noreferrer">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
        
      </main>
    </>
  );
};

export default Home;
