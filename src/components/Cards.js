import React from "react";
import Card from "./Card";

import image1 from "../images/image1.jpg";
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Traer Lost Ark a occidente",
    image: image1,
    text: "Estamos trabajando con los desarrolladores de Smilegate RPG para traeros una versión fiel del juego y preservar su visión original para este MMORPG tan único",
    url: "https://www.playlostark.com/es-es/news/articles/bringing-lost-ark-to-the-west",
  },
  {
    id: 2,
    title: "Te damos la bienvenida a Lost Ark",
    image: image2,
    text: "Embárcate en una odisea por el gigantesco y vibrante mundo de Lost Ark. Explora lugares desconocidos, busca tesoros, y mucho más en un mundo lleno de peligros.",
    url: "https://www.playlostark.com/es-es/news/articles/welcome-to-lost-ark",
  },
  {
    id: 3,
    title: "Celebramos la alfa técnica con /twitchgaming",
    image: image3,
    text: "Para celebrar el comienzo de la alfa técnica cerrada con un breve segmento en el que mostraremos jugabilidad y homenajearemos a algunos de los creadores de contenido de Lost Ark.",
    url: "https://www.playlostark.com/es-es/news/articles/celebrate-the-technical-alpha-with-twitchgaming",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-5">
      <div className="row">
        {cards.map(({ title, image, text, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
