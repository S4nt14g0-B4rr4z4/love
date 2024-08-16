import Carta from '../components/Carta';

const cartasTexto = [
  "Te quiero mucho, demasiado, no puedo explicar cuanto.",
  "Eres lo mejor que me ha pasado y cada día agradezco el hecho de que estés en mi vida.",
  "Cada día te amo más que el anterior y menos que el día siguiente mi amorr.",
  "Nuestro amor es eterno, eterno como el universo mismo.",
  "Nos tardó 13.8 mil millones de años encontrarnos de nuevo, somos muy pacientes :)",
  "Eres muy hermosa, inteligente, luchadora, linda y fuerte, nunca dudes de tí.",
  "Me has hecho sentir la persona más amada del mundo, te lo agradezco mucho amor.",
  "Tu vas a llegar muy lejos amor, y te apoyaré en cada paso que quieras tomar en tu vida :)"
];

function Cartas() {
  return (
    <div className="container my-5">
      <div className="row">
        {cartasTexto.map((texto, index) => (
          <Carta key={index} numero={index + 1} texto={texto} />
        ))}
      </div>
    </div>
  );
}

export default Cartas;