import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* COLORFUL PREMIUM HERO HEADER */}
<header className="hero">
  <div className="hero-overlay"></div>

  <div className="hero-text">
    <h1 className="hero-title">VIGNESH BUILDER</h1>
    <h2 className="hero-name">Er. B. Gopal Radjy, A.M.I.E</h2>

    <p className="hero-line">
      Senior Civil Engineer • Govt. Licensed Contractor
    </p>

    <p className="hero-experience">
      30+ Years of Excellence in Building Construction, Interiors & Planning
    </p>

    <div className="hero-contact">
      <p><b>📞 Phone:</b> 9442892285 / 8825982215</p>
      <p><b>📍 Puducherry</b></p>
    </div>
  </div>
</header>

      {/* ABOUT */}
      <section className="section">
        <h2 className="title">About Us</h2>
        <p className="text">
          <b>Er. B. Gopal Radjy</b> is a highly experienced Civil Engineer and Contractor
          with more than <b>30 years</b> of expertise in residential construction,
          interior design, structural planning and complete building solutions.
        </p>

        <div className="card">
          <p><b>📍 Office:</b> #30, Goubert Street, Thenman Salai Road, Puducherry – 605011</p>
          <p><b>🏠 Residence:</b> #39, Otrai Vadai Street, Orleanpet, Puducherry – 605005</p>
          <p><b>📞 Mobile:</b> 9442892285 / 8825982215</p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="section">
        <h2 className="title">What We Build</h2>

        <div className="build-grid">

          <div className="build-card">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea" alt="" />
            <p>Modular Kitchen</p>
          </div>

          <div className="build-card">
            <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353" alt="" />
            <p>Hall & Living Room</p>
          </div>

          <div className="build-card">
            <img src="https://images.unsplash.com/photo-1586105251261-72a756497a11" alt="" />
            <p>Interior Design</p>
          </div>

          <div className="build-card">
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="" />
            <p>Exterior Elevation</p>
          </div>

          <div className="build-card">
             <img src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" alt="" />


            <p>Windows & Doors</p>
          </div>

          <div className="build-card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
            <p>Dining Rooms</p>
          </div>

        </div>
      </section>

      {/* RECENT WORKS */}
      <section className="section">
        <h2 className="title">Recent Works</h2>

        <div className="recent-grid">
          <img className="recent-img" src={process.env.PUBLIC_URL + "/images/work1.jpeg"} alt="" />
          <img className="recent-img" src={process.env.PUBLIC_URL + "/images/work2.jpeg"} alt="" />
          <img className="recent-img" src={process.env.PUBLIC_URL + "/images/work3.jpeg"} alt="" />
          <img className="recent-img" src={process.env.PUBLIC_URL + "/images/work4.jpeg"} alt="" />
          <img className="recent-img" src={process.env.PUBLIC_URL + "/images/work5.jpeg"} alt="" />
          <img className="recent-img" src={process.env.PUBLIC_URL + "/images/work6.jpeg"} alt="" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2 className="title">Contact Us</h2>

        <div className="card">
          <p><b>Name:</b> Er. B. Gopal Radjy</p>
          <p><b>Phone:</b> 9442892285 / 8825982215</p>
          <p><b>Office:</b> #30, Goubert Street, Thenman Salai Road, Puducherry</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Vignesh Builder — All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;
