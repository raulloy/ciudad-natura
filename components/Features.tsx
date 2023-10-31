import React from 'react';
import Button from './Button';

const Features = () => {
  return (
    <section className="px-2">
      <div className="flexBetween max-container py-5 px-2 lg:px-10">
        <div className="px-2">
          <p className="py-5 regular-20 lg:bold-32 text-yellow-90">
            Desde <span className="bold-20">$750,000 MXN*</span>
          </p>
          <p className="py-2 bold-18 lg:bold-20 text-gray-30">
            Casas 2 y 3 recámaras entre 65 y 73 m²
          </p>
        </div>

        <Button
          type="button"
          title="Agendar Visita"
          icon="/calendar.svg"
          round="rounded-md"
          textSize="medium-14"
          variant="btn_blue"
        />
        <Button
          type="button"
          title="Enviar Whatsapp"
          icon="/whatsapp.svg"
          round="rounded-md"
          textSize="medium-14"
          variant="btn_blue"
        />
        <Button
          type="button"
          title="Agendar Visita"
          icon="/call.svg"
          round="rounded-md"
          textSize="medium-14"
          variant="btn_blue"
        />
      </div>
      <div className="bg-gray-10 max-container py-5 px-4 lg:px-12">
        <h2 className="py-4 bold-28 lg:bold-32">Tu nueva casa en Tizayuca</h2>
        <div className="text-gray-30 regular-16">
          <p className="py-2">
            Si estás buscando independizarte, vivir con tu pareja, iniciar
            familia o simplemente tener tu propio espacio para vivir, Ciudad
            Natura en Tizayuca, de Hogares Unión, es el lugar ideal para ti.
          </p>
          <p className="py-2">
            En este hermoso desarrollo, que cuenta con casas, ubicado en
            Tizayuca, Hidalgo encontrarás: juegos infantiles, gimnasio al aire
            libre y pet park a sólo unos pasos de tu casa o departamento.
          </p>
          <p className="py-2 pb-10">
            Utiliza tu crédito Infonavit, FOVISSSTE o bancario, y compra tu
            propio casa en Tizayuca. Elige entre nuestros dos modelos de casas:
            Esmeralda y Esmeralda 3R. ¡Contamos con rápida escrituración y
            entrega inmediata!
          </p>
        </div>
        <div className="max-container relative">
          <div style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/Ep2UgglqE6Q"
              title="YouTube Video"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
