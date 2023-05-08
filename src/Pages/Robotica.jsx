import React from "react";
import { Link } from "react-router-dom";

const robotica = {
  id: "1",
  title: "Tópico de la especialidad: Robótica",
  description:
    "Curso dirigido a los estudiantes de Ingeniería Ejecución en Mecánica de la Usach",
  img: "https://www.bbva.ch/wp-content/uploads/2021/10/22.-recurso_avances-en-robotica-scaled-e1634282937466-1024x686.jpg",
  clases: [
    {
      id: "1",
      nombre: "Clase 1: Presentación del curso",
      link: "https://drive.google.com/file/d/1vqB7XD3FH6l-_pCHVXY_XNpbMP-jn0OD/view",
    },
    {
      id: "2",
      nombre: "Clase 2: Arduino y programación 1",
      link: "https://drive.google.com/file/d/1jh8vJDvnhewng1QdaFcQOK1wNndbgVEN/view",
    },
    {
      id: "3",
      nombre: "Tarea 1: Simulación Semáforo",
      link: "https://drive.google.com/file/d/1U9H-YefUm6Sk6oVWnHcTp7XiwzlLaK7F/view",
    },
  ],
};

export default function Robotica() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 text-3xl pb-4 justify-start">
          <h1 className="pb--3">{robotica.title} <p className="text-base justify-start pt-4">{robotica.description}</p></h1>
        </div>

        <div className="text-3xl pb-4 flex justify-start">
          <img
            className="mx-auto justify-center h-50 w-90 pb-4"
            src={robotica.img}
            alt="Sunset in the mountains"
          />
        </div>
      </div>

      <p className="text-3xl font-bold flex justify-start pb-4">Recursos</p>
      {robotica.clases.map((clase) => (
        <ul className="pb-1 flex justify-start" key={clase.id}>
          <Link
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            to={clase.link}
            target="_blank"
          >
            {clase.nombre}
          </Link>
        </ul>
      ))}
    </>
  );
}
