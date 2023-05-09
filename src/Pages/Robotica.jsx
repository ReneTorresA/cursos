import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { request } from "graphql-request";
import { FidgetSpinner } from "react-loader-spinner";
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
    {
      id: "4",
      nombre: "Clase 3: Arduino y programación 2",
      link: "https://drive.google.com/file/d/1beYmRf4oIwi00Rc5taO0rQjzSiLZifqR/view",
    },
    {
      id: "5",
      nombre: "Clase 4: Misceláneos de arduino",
      link: "https://drive.google.com/file/d/1LmN5m33kdn4pmK--tHZH6kDihZkgz2SD/view",
    },
    {
      id: "6",
      nombre: "Tarea 2: Máquinas de estados finitos ",
      link: "https://drive.google.com/file/d/1U7n_WdJMrA95Q5TtIGniXSp5xlU-GIW6/view",
    },
    {
      id: "6",
      nombre: "Clase 5: Cinemática del robot",
      link: "https://drive.google.com/file/d/1UVxpznU9vwBPhOzR1epZOSXtFUNACo0H/view",
    },
  ],
};

export default function Robotica() {
  const [contenidoCursos, setCursos] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const { contenidoCursos } = await request(
        "https://api-sa-east-1.hygraph.com/v2/clhfpz2k10p1s01ugcuxqaiym/master",
        `{
        contenidoCursos {
          id
          img
          title
          clases
        }
      }`
      );

      setCursos(contenidoCursos);
      console.log(contenidoCursos[0]);
    };

    fetchAPI();
  }, []);

  return (
    <>
      {contenidoCursos ? (
        <div>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-1 text-3xl pb-4 justify-start">
              <h1 className="pb--3">
                {contenidoCursos[0].title}{" "}
                <p className="text-base justify-start pt-4">
                  {robotica.description}
                </p>
              </h1>
            </div>

            <div className="text-3xl pb-4 flex justify-start">
              <img
                className="mx-auto justify-center h-50 w-90 pb-4"
                src={contenidoCursos[0].img}
                alt="Sunset in the mountains"
              />
            </div>
          </div>
          <p className="text-3xl font-bold flex justify-start pb-4">Recursos</p>

          {contenidoCursos[0].clases.map((clase, index) => (
            <ul className="pb-1 flex justify-start" key={`${clase.label}${index}`}>
              <Link
                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                to={clase.link}
                target="_blank"
              >
                {clase.nombre}
              </Link>
            </ul>
          ))}



        </div>
      ) : (
        <div className="container flex justify-center">
          <h1>Cargando ...</h1>
          <div>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={["#ff0000", "#00ff00", "#0000ff"]}
              backgroundColor="#F4442E"
            />
          </div>
        </div>
      )}
    </>
  );
}
