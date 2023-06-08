import img from '../../../assets/imges/cover/2.jpg';

const Cover = () => {
  return (
    <div
      className="hero h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">Our Classes</h1>
          <p className="mb-5">
          Dancing makes me feel happy and relaxed, thus I love to dance. I always participate in dance competitions at my school and have even won a few. Dance became my passion from an early age. Listening to the beats of a dance number, I started to tap my feet and my parents recognized my talent for dance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;