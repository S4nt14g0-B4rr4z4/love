import { useState, useEffect } from 'react';

function Carta({ numero, texto }) {
  const [showText, setShowText] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!showText) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500); // 500ms es la duración de la animación
      return () => clearTimeout(timer);
    }
  }, [showText]);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="carta" onClick={handleClick} style={{cursor: 'pointer'}}>
        <img src="/img/sobre.png" className="img-fluid" alt={`Sobre ${numero}`} />
        <div className={`carta-texto ${showText ? 'show' : isAnimating ? 'hide' : ''}`}>
          {texto}
        </div>
      </div>
    </div>
  );
}

export default Carta;