import HeroImage from '../components/HeroImage';

function Home() {
  return (
    <div className="container text-center my-5">
      <h1>Luisa & Santiago</h1>
      <HeroImage image = "/img/nosotros.jpg"/>
      <p className="mt-3">Juntos por siempre ❤️</p>
      
    </div>
  );
}

export default Home;