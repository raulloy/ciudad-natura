import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/Portada-Ciudad-Natura-scaled.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      {/* <div className="hero-map" /> */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 justify-center items-center">
        <Image
          src="/logo-ciudad-natura-blanco.svg"
          alt="ciudad-natura"
          width={200}
          height={200}
        />

        <h1 className="py-10 bold-32 lg:bold-40 text-gray-10">
          Ahora tu sueño es posible
        </h1>
      </div>
    </section>
  );
};

export default Hero;
