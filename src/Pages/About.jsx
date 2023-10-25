import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

import EmbeddedMap from "./EmbeddedMap"; 

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              


<p>Welcome to Car Rental, your trusted partner for all your car rental needs. We are passionate about providing a seamless and enjoyable travel experience for our customers, and we believe that the right vehicle can make all the difference.
</p>

<h3>Our Story</h3>

<p>Founded in 1999, Car Rental has quickly become a leading name in the car rental industry. Our journey began with a simple yet ambitious idea: to offer high-quality, affordable, and convenient car rental services to travelers around the world. Over the years, our commitment to excellence has driven our growth and success, and today, we serve customers in [Number of Countries] countries, helping them get to their destinations with comfort and style.
</p>

<h3>Our Mission</h3>

<p>At Car Rental, our mission is to empower travelers by providing them with the freedom to explore their world on their terms. We understand that every journey is unique, and our goal is to match you with the perfect vehicle that suits your needs, whether you're embarking on a business trip, a family vacation, or just need a reliable set of wheels for your daily commute.
</p>
<h3>Why Choose Us?</h3>

<p><b>Wide Selection:</b> We offer a diverse fleet of well-maintained vehicles, from compact cars to spacious SUVs, ensuring you find the perfect vehicle for your trip.
</p>
<p><b>Affordability:</b> We believe that quality car rentals should be accessible to all. Our competitive prices and various rental options cater to every budget.
</p>
<p><b>Convenience:</b> Booking with us is easy, with user-friendly online tools and a dedicated customer support team ready to assist you.
</p>
<p><b>Quality Assurance:</b> Every vehicle in our fleet undergoes rigorous maintenance, safety checks, and cleaning to ensure your peace of mind.
</p>
<p><b>Local Expertise:</b> With our local knowledge and global reach, we can provide you with valuable travel tips and support to make your trip memorable.
</p>

              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
