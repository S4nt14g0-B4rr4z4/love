import { useState } from 'react';

function TimelineEvent({ img, date, description }) {
  return (
    <div className="timeline-event">
      <img 
        src={img && img} 
        className="timeline-img" 
        //alt={description} 
      />
      <div className="timeline-date">{date}</div>
      <div className="timeline-description">{description}</div>
    </div>
  );
}

function Timeline() {
  const events = [
    { img: '', date: '13/10/2023', description: 'Salimos a cine y vimos Saw X, fue nuestra primera salida juntos, tremenda besuqueda en jardin plaza ;) hasta con morado quedé' },
    { img: '/img/event1.jpg', date: '14/10/2023', description: 'Nuestra segunda salida juntos, salimos al river y la pasamos bien, sí tuve mis fallas ese día, ups' },
    { img: '/img/event2.jpg', date: '27/10/2023', description: 'Primera rumbitaaaa (ese vestido diosmioooo :0)' },
    { img: '/img/event3.jpg', date: '04/11/2023', description: 'Este día, pasaron cositass por primera vez ;) que rico' },
    { img: '/img/event4.jpg', date: '01/12/2023', description: '¿Otra rumba? increible. Cumplí años mientras te veía a los ojos y te besaba.' },
    { img: '/img/event5.jpg', date: '02/12/2023', description: 'Celebrando mi cumpleaños SIII, que rica la comida de esta vez ;) y también el sushi estaba muy rico (graciaaas)' },
    { img: '/img/event6.jpg', date: '04/12/2023', description: 'Nuestros deditos juntos (como nosotros :D). Ya nos estabamos practicamente despidiendo porque me iba a Barranquilla. Este día dije "te amo" por primera vez.' },
    { img: '/img/event7.jpg', date: '11/12/2023', description: 'Recuerdo verte tan feliz ese día, vimos otra película, nosotros caminando, comimos Subway, jugamos en la zona de juegos, luego viendo las decoraciones de navidad, todo muy bonito. Esta si fue la despedida (me dijiste que me amabas :0).' },
    { img: '/img/event8.jpg', date: '25/01/2024', description: 'Nos reencontramos despues de taaaanto tiempo, ese viaje se hizo eterno, y luego 8 horas :0 hubo un accidente, pero bueno, cosas que pasan jsajsjs' },
    { img: '/img/event9.jpg', date: '04/02/2024', description: 'Nos reencontramos después del viaje a Argentina y pintamos nuestro astronauta :) muy bonito nos quedó.' },
    { img: '/img/event10.jpg', date: '09/02/2024', description: '¡¡¡NOS HICIMOS NOVIOOOS!!! Celebramos tu cumpleaños comiendo rico, los regalos, la carta de cumpleaños, comiendo rico x2 y luego firmando contrato :D' },
    { img: '/img/event11.jpg', date: '01/03/2024', description: 'Día largo, pero muy chevere, comimos rico dos veces de nuevo jsjsj, hubo concierto y luego rumba :00' },
    { img: '/img/event12.jpg', date: '03/03/2024', description: 'Mi primera vez en tu casa, sentí el terror conociendo a tus papás, pero todo fue bien al final, les caí bien jsajsajsj' },
    { img: '/img/event13.jpg', date: '26/03/2024', description: 'Celebrando nuestro PRIMER MESSS, fue un día bastante lindo y me encantaron un montón tus regalos.' },
    { img: '/img/event14.jpg', date: '14/04/2024', description: 'Tuvimos una experiencia muy chevere y muy linda, esuvimos desconectando un día en la naturaleza mientras plantabamos árboles y nos teníamos el uno al otro :)' },
    { img: '/img/event15.jpg', date: '19/04/2024', description: 'Visita a Celsia :0 muy chevere.' },
    { img: '/img/event16.jpg', date: '19/04/2024', description: 'Tu primera vez en mi casaaaa, conociste a mis papás, mis hermanos a Nieve y a Dulce, fue un lindo día, después salimos a comer salchipapa en unicentro' },
    { img: '/img/event17.jpg', date: '09/05/2024', description: 'Cumplimos tres meses!!! :)))' },
    { img: '/img/event18.jpg', date: '16/05/2024', description: '¡¡TE VES MUY LINDAAA!!' },
    { img: '/img/event19.jpg', date: '30/05/2024', description: 'Felices en boreal :)) que rico dormir entrepiernados' },
    { img: '/img/event20.jpg', date: '17/06/2024', description: 'En el parque felices caminando junticos :)' },
    { img: '/img/event21.jpg', date: '17/06/2024', description: 'Comiendo perritos en chihuahua y hablando de la vida (te ves hermosa por cierto)' },
    { img: '/img/event22.jpg', date: '23/06/2024', description: '¡¡¡¿¿¿POR QUÉ ERES TAN LINDAAAA???!!!' },
    { img: '/img/event23.jpg', date: '30/06/2024', description: 'En mi casa con la linda de dulce y con la lindota, bella, hermosa, divina, bonita, perfecta de mi novia ;)' },
    { img: '/img/event24.jpg', date: '07/07/2024', description: 'Comimos ;) (rico), cocinamos, comimos, vimos series, sacamos a los perros al parque, comimos obleas, jugamos switch, bastantes cosas :0' },
    { img: '/img/event25.jpg', date: '13/07/2024', description: 'La última vez que viniste a mi casa :)' },
    { img: '/img/event26.jpg', date: '21/07/2024', description: 'Y aquí yo en tu casita'},
    { img: '/img/event27.jpg', date: '24/07/2024', description: 'Yo en tu casa otra vez jsajsjs (POR QUÉ ERES TAAAAAAAAAAAAAAAAAN LINDAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)'},
    { img: '/img/event28.jpg', date: '09/08/2024', description: 'En serio que sí te ves bien HERMOSA. Por cierto, que cómodas que son tus piernas :)'},
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  );
}

export default Timeline;