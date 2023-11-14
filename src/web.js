import React from "react";
import myImage from "./images1.jpg/logo1.jpg";
import Laptops from "./images1.jpg/Laptops.jpg";
import electronics from "./images1.jpg/ele.jpg";
import camera from "./images1.jpg/camera.jpg";
import MySite from "./login.js";
import "boxicons";
import mobiles from "./images1.jpg/mobiles2.jpg";
import myImage1 from "./images1.jpg/team-1.jpg";
import myImage2 from "./images1.jpg/team-2.jpg";
import myImage3 from "./images1.jpg/team-3.jpg";
import myImage4 from "./images1.jpg/team-4.jpg";
import myVideo from "./video1.mp4";
// Import Link if you intend to use it
 import { Link, Route } from "react-router-dom";
 <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>;
function BOBO() {
  return (
    <div>
      <div className="div-background">
        <header>
          <div className="div-left">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="#conreact">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#abreact">About</a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.com/" target="_blank">
                  search
                </a>
              </li>
              {/* Uncomment the following lines if you intend to use Link */}
              <li>
                <li>login</li>
              </li>
            </ul>
          </div>
        </header>
        {/* <img src={myImage} alt="Logo" />  */}
        <section id="hero">
          <div className="hero-container">
            <h6>
              Welcome to <strong>BoBo</strong>
            </h6>
            <h1 className="h1-style">Quikr: Shop & Sell</h1>
            <h2>Online App</h2>
            <h2>
              We are a team of talented designers making websites with React
            </h2>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </section>
      </div>
      <h1>ALL IN ONE BOBO SHOP YEARLY MEMBERSHIP SUBSCRIPTION</h1>
      <p>
        Bobo Shop - Selling Software And Cloud Services At Best Market Prices.
        With Bobo Shop, pay a yearly subscription of only 19.50 € per year for
        up to 15 users, as a subscriber selects one of each of the following
        software.
      </p>
      {/* <img src="/your-image-path.jpg" alt="electronics" />{" "} */}
      {/* Replace with your image path */}
      <h3>Embedded Video Example</h3>
      <div className="video-divAbsolute">
        <div className="video-left">
          <video width="640" height="360" controls>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-right">
          If you compare how product pages take shape across different
          companies, it's clear they run the gamut. Some go for the direct
          approach, displaying an image of a product and explaining why someone
          should buy it. Other companies create elaborate pages with moving
          parts and fancy, interactive elements. customers enjoying the best
          product page designs while online shopping
        </div>
      </div>
      {/* product */}

      <h1>Product</h1>
      <h2>Cute Product Business</h2>
      <h2>
        Product sales is an act of selling a product or service in return of
        money or compensation or service. Product sales is when a customer buys
        a product / service which will fulfill a need of theirs.
      </h2>
      <div className="grid-containerProduct">
        <div className="grid-itemProduct">
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Laptops} alt="Logo" />
            Choose a laptop screen size for your needs. ... Do you need a 2-in-1
            laptop? ... Choose the right operating system to power your tasks.
            ... Look for a laptop with a graphic card for gaming.
          </a>
        </div>
        <div className="grid-itemProduct">
          <a
            href="https://www.amazon.com/s?k=mobile+phones&crid=3OGIRTO3FYNIU&sprefix=mobile%2Caps%2C446&ref=nb_sb_ss_ts-doa-p_2_6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mobiles} alt="Logo" />
            Mobile phones offering only basic capabilities are known as feature
            phones; mobile phones which offer greatly advanced computing
            capabilities are referred to as smartphones
          </a>
        </div>
        <div className="grid-itemProduct">
          <a
            href="https://www.amazon.com/Hamilton-Beach-Professional-Commercial-Grade-58770/dp/B08464QHGD/ref=sr_1_16?crid=38107TIMATU9A&keywords=electronics+product+mixer+grinder&qid=1699933747&sprefix=electronics+product+mixi+grainder%2Caps%2C403&sr=8-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={electronics} alt="Logo" />
            It is compact in size and plays an important role in preparation of
            food. This appliance has made our task easy when it comes to trying
            our culinary skills. In the fast-moving world , it is always best to
            possess equipment that makes our work easy and saves time
          </a>
        </div>
        <div className="grid-itemProduct">
          <a
            href="https://www.amazon.com/Photography-Vlogging-Rechargeable-Wide-Angle-Batteries/dp/B0BZ3FLQJN/ref=sr_1_4?crid=1XJFVJ859MP8Z&keywords=camera&qid=1699933498&sprefix=camera%2Caps%2C704&sr=8-4&th=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={camera} alt="Logo" />
            There are many manufacturers that lead in the production of digital
            cameras (commonly DSLRs). Each brand embodies different mission
            statements that differ them from each other outside of the physical
            technology that they produce.
          </a>
        </div>
        {/* <div className="grid-itemProduct">
          <img src={myImage1} alt="Logo" />
        </div> */}
      </div>
      {/* product */}
      <title>TEAM</title>
      <h1>Team</h1>
      <h2>Our Hardworking Team</h2>
      <h2>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={myImage1} alt="Logo" />
          Walter White <br></br>Chief Executive Officer
        </div>
        <div className="grid-item">
          <img src={myImage2} alt="Logo" />
          Sara Jhonson<br></br> Product Manager
        </div>
        <div className="grid-item">
          <img src={myImage3} alt="Logo" />
          William Anderson<br></br> CTO
        </div>
        <div className="grid-item">
          <img src={myImage4} alt="Logo" />
          Natasa christopher<br></br> Accountant
        </div>
        {/* <div className="grid-item">
          <img src={myImage1} alt="Logo" />
        </div> */}
      </div>
      <section id="pricing" class="pricing">
        <div class="container">
          <div class="section-title">
            <h2>Pricing</h2>
            <h3>
              Our Competing <span>Prices</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          {/* <div class="row"> */}
          <div className="grid-container">
            <div class="col-lg-4 col-md-6">
              <div class="box">
                <h3>Free</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>earphones bluetooth</li>
                  <li>micro sd 32GB</li>
                  <li>backcase color</li>
                  <li class="na">branded watch</li>
                  <li class="na"></li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div class="box recommended">
                <span class="recommended-badge">Recommended</span>
                <h3>Discount</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>led tv</li>
                  <li>camera lens</li>
                  <li>laptop</li>
                  <li>phone case</li>
                  <li class="na">electeonics item above 10000</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div class="box">
                <h3>best offer</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>sonny tv</li>
                  <li>Panasonic LumixDC-FZ10002</li>
                  <li>amazonprime subscription</li>
                  <li>above 99000</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="search">
        <h2>Featured Rentals</h2>
        <h2>Search for Your Dream products</h2>
        <form id="search-form" action="#" method="GET">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter a city or area"
          />
          <label htmlFor="EMI">EMI:</label>
          <select id="EMI" name="EMI">
            <option value="1">
              Offer 1 10% Instant Discount up to INR 500 on J and K Bank Card
              Non-EMI Trxn. Minimum purchase value INR 3000
            </option>
            <option value="2">
              Offer 2 10% Instant Discount up to INR 1250 on Yes Bank Credit
              Card EMI Trxn. Minimum purchase value INR 5000
            </option>
          </select>
          <label htmlFor="price-range">Price Range:</label>
          <input
            type="range"
            id="price-range"
            name="price-range"
            min="500"
            max="50000"
            step="100"
            defaultValue="2500"
          />
          <p>$500 - $50000</p>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </section>
      <section className="about" id="abreact">
        <h2>About Us</h2>
        <p>Learn more about our house rental services...</p>
        <a href="about1.html" className="learn-more-link">
          Learn More
        </a>
      </section>
      <div className="contact" id="conreact">
        <h1>contact us</h1>
        <p>Have questions? Get in touch with us...</p>
        <a href="contact1.html" className="contact-link">
          Contact Us
        </a>
      </div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            {/* <h3>
              Contact <span>Us</span>
            </h3> */}
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:A108 Adam Street, New York, NY 535022:</h4>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:info@example.com</h4>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:+1 5589 55488 55s</h4>

                  <div className="form-container">
                    <form>
                      <label>
                        Username:
                        <input
                          type="text"
                          name="username"
                          // value={formData.username}
                          // onChange={handleInputChange}
                        />
                      </label>
                      <br />
                      <label>
                        Email:
                        <input
                          type="email"
                          name="email"
                          // value={formData.email}
                          // onChange={handleInputChange}
                        />
                      </label>
                      <br />
                      <label>
                        commend:
                        <input
                          type="commend"
                          name="commend"
                          // value={formData.password}
                          // onChange={handleInputChange}
                        />
                      </label>
                      <br />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              ></form>
            </div>
          </div>
        </div>
      </section>
      <div>
       
        <div className="icon-container">
          <a href="https://www.facebook.com/login/">
            
            <i class="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://www.youtube.com/results?search_query=house+rental+portal+">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <footer>
          <p>&copy; 2023 Quikr: Shop & Sell. and thankyou.</p>
        </footer>
      </div>
    </div>
  );
}

export default BOBO;
