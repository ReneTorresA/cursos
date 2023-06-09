import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { GraphQLClient, gql } from "graphql-request";
import { request } from "graphql-request";
import { useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

// Aquí se escriben los cursos que van en la página :)

// const cursos = [
//   {
//     id: "1",
//     title: "Tópico de la especialidad: Robótica",
//     description:
//       "Curso dirigido a los estudiantes de Ingeniería Ejecución en Mecánica de la Usach",
//     img: "https://www.bbva.ch/wp-content/uploads/2021/10/22.-recurso_avances-en-robotica-scaled-e1634282937466-1024x686.jpg",
//     acceso: "True",
//     ruta: "/robotica",
//   },
//   {
//     id: "2",
//     title: "Métodos Numéricos",
//     description:
//       "Material creado por el ayudante de la asignatura Métodos Numéricos de Ingeniería Mecánica (DIMEC-USACH)",
//     img: "https://1.bp.blogspot.com/-w6qKoNevHNA/X5r-0hOG_8I/AAAAAAAAQbg/3J-0Oj89KP4k158Z2DMAzmf2TlR6xPVrwCLcBGAsYHQ/s700/que-son-metodos-numericos-ecuaciones-de-calculo.png",
//     acceso: "False",
//     ruta: "/metodosnumericos",
//   },
//   {
//     id: "3",
//     title: "Cálculo III",
//     description:
//       "Material creado por uno de los ayudantes de la asignatura que se imparte en el módulo básico para Ingeniería (MBI-USACH)",
//     img: "https://1.bp.blogspot.com/-SeTDWlvi_GQ/X5sAJxQPjqI/AAAAAAAAQbs/kSfvp9wSpfkiVjIi6xYYpLq0g_fDQ0kRQCLcBGAsYHQ/s700/que-son-metodos-numericos-integrales-complejas.png",
//     acceso: "False",
//     ruta: "/calculo3",
//   },
// ];

export default function Homepage() {
  const [cursos, setCursos] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const { cursos } = await request(
        "https://api-sa-east-1.hygraph.com/v2/clhfpz2k10p1s01ugcuxqaiym/master",
        `{
        cursos {
          title
          acceso
          id
          img
          ruta
        }
      }`
      );
      setCursos(cursos);
    };

    fetchAPI();
  }, []);

  return (
    <>
      {cursos ? (
        <div className="container h-screen flex grid-cols-3 justify-center gap-x-8 gap-y-4">
          {cursos.map((cursos, index) => (
            <Card key={`${cursos.label}${index}`} cursos={cursos} />
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
      {/* <Card cursos={cursos} /> */}
    </>
  );
}
