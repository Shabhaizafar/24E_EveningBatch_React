import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Step into Style</h1>
        <p>Discover our latest collection of premium shoes for every occasion.</p>
        <a href="/product" className="shop-now-btn">Shop Now</a>
      </section>

      <section className="image-banner">
        <img
          src="https://images.unsplash.com/photo-1517389274750-a758d503b69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN0eWxpc2glMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Stylish Shoes"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww"
          alt="Running Shoes"
        />
        <img
          src="https://images.unsplash.com/photo-1668069226492-508742b03147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9ybWFsJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D"
          alt="Formal Shoes"
        />
      </section>

      <section className="features-section">
        <div className="feature-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1669655126440-88ddfc7a4180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJlbmRpbmclMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Trending Shoes"
          />
          <h3>Trending</h3>
          <p>Stay ahead with our newest arrivals and styles.</p>
        </div>
        <div className="feature-card">
          <img
            src="https://media.istockphoto.com/id/1249496770/photo/running-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=K-loh1H8KFPVKetmY9YAwEFDJBedjes3wgQTlaRBfIQ="
            alt="Comfort Shoes"
          />
          <h3>Comfort</h3>
          <p>Designed for all-day wear with premium materials.</p>
        </div>
        <div className="feature-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1658527158664-560225dc9aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hvZXMlMjBmb3IlMjBFdmVyeW9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Shoes for Everyone"
          />
          <h3>For Everyone</h3>
          <p>Men, Women, Kids – we’ve got the perfect fit for all.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
