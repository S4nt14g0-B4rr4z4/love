import { useState } from 'react';

function BookPage({ img, description, isActive }) {
  return (
    <div className={`book-page ${isActive ? 'active' : ''}`}>
      <img src={img} alt={description} />
      <div className="book-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    { img: '/img/detalle1.jpg', description: 'El astronauta que pintamos juntos :D fue una experiencia muy linda porque fue la primera vez que compartíamos de esa manera, aunque he de decir que te llevas tú el mérito de que haya quedado bonito :D' },
    { img: '/img/detalle2.jpg', description: 'Esto es lo más grande que pude encontrar para representar el amor que siento por tí, y aun así, se queda pequeño, ya que el amor que siento por tí es más grande que un millón de galaxias juntas :)' },
    { img: '/img/detalle3.jpg', description: 'Las rosas que te dí por San Valentín, y que a día de hoy conservas sus pétalos, gracias por apreciarlo tanto.' },
    { img: '/img/detalle5.jpg', description: 'MIKASAAAAAAA!!!'},
    { img: '/img/detalle6.jpg', description: 'Tan lindoooo!! y tú tienes a a la esposa, muchas gracias por ser tan linda mi amorrr.'},
    { img: '/img/detalle7.jpg', description: 'El peluchitoooo'},
    { img: '/img/detalle8.jpg', description: 'La cajita con todo el cariño mi amorr (no encontré mejor foto jsjsjsaj)'},
    { img: '/img/detalle9.jpg', description: 'Uy amor eso estaba muy rico, muchas gracias'},
    { img: '/img/detalle10.jpg', description: 'Tony Stark (muchas gracias mi amorrr :))) me gusta mucho muchooooooooooo)'},
    { img: '/img/detalle11.jpg', description: 'Awww está demasiado lindooooooo'},
    { img: '/img/detalle12.jpg', description: 'Todo es posible si estoy a tu lado amor hermosa'},
    { img: '/img/detalle13.jpg', description: 'Y TU ERES EL MIOOOO'},
    { img: '/img/detalle14.jpg', description: 'Amor esto fue muy lindoooooo, demasiado'},
    { img: '/img/detalle15.jpg', description: 'TU ERES MI CORAZON'},
    { img: '/img/detalle16.jpg', description: 'Y todos los míos son para tí, linda que eres, te amo muchisimo'},
    { img: '/img/detalle17.jpg', description: 'Todos esos dulces me encantaron mi amor, estaban muy ricos y más porque me los regalaste tú :)'},
    { img: '/img/detalle18.jpg', description: 'Amor casi lloro es que todos tus regalos son demasiado pero en serio demasiado lindos.'},
    { img: '/img/detalle20.jpg', description: 'Sigo sin entender como hiciste esto amor, pero me encantó, es perfecto'},
    { img: '/img/detalle21.jpg', description: 'Tú eres mi sol :D porque iluminas mis días y aunque por las noches no estés conmigo (por ahora) la luz que reflejas es todo lo que veo :)'},
    { img: '/img/detalle22.jpg', description: 'Yo te llevaría hasta las estrellas amor, pero no lo hago porque ya eres una de ellas.'},
    { img: '/img/detalle23.jpg', description: 'Y por los tuyos, ya que no tiene sentido ver un universo en el que tú no estés a mi lado'},
    { img: '/img/detalle24.jpg', description: 'Es muy bonitooo, y gracias por el cubo amorrr'},
    { img: '/img/detalle26.jpg', description: 'Todo el cariño mío es para tí mi amor'},
    { img: '/img/detalle27.jpg', description: 'En serio veo esto y pienso ¿Cómo pudiste hacerlo? ¿Qué hice para merecer que fueras así de linda conmigo?'},
    { img: '/img/detalle28.jpg', description: 'Me escribiste en hexadecimal y después en binario, me enamoraste (siempre lo haces con cualquier cosa que haces, hasta respirar).'},
    { img: '/img/detalle32.jpg', description: 'La Dino aventura, muchas gracias por escribirla amor, eres muy linda, demasiado.'},
    { img: '/img/detalle33.jpg', description: 'Pintaste esto demasiado pero demasiado hermoso, tienes talento para esto amor, gracias por el regalo :)'},
    { img: '/img/detalle34.jpg', description: 'Amor que talentoooo, y pensar que está hecho de papel, increible (eres increible).'},
    { img: '/img/detalle35.jpg', description: 'Las manillas, la flor, el corazón, el anillo, muchas gracias por todo amorrr, te amo mucho en serioooo.'},
    { img: '/img/detalle36.jpeg', description: 'Nuestros llaveritos mi amor <3 para las llaves de nuestros corazones :)'}
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="book">
      <div className="book-content">
        <BookPage 
          {...pages[currentPage]} 
          isActive={true}
        />
      </div>
      <div className="book-controls">
        <button 
          onClick={prevPage} 
          className="btn-book" 
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <button 
          onClick={nextPage} 
          className="btn-book" 
          disabled={currentPage === pages.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Book;