import { useState } from 'react';

function HeroImage({image}) {

  const [showHearts, setShowHearts] = useState(false);

  const handleClick = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 3000);
  };

  return (
    <div className="hero-image">
      <img src= {image} className="img-fluid hero-img" alt="Nosotros" onClick={handleClick} />
      {showHearts && <div className="hearts">❤️❤️❤️</div>}
    </div>
  );
}

export default HeroImage;