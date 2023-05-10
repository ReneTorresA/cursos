import { Link } from "react-router-dom";

export const Card = ( {cursos} ) => {
  return (
    <>
      <Link to={cursos.ruta}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-zinc-600 hover:cursor-pointer ">
          <img
            className="mx-auto justify-center h-50 w-90 pb-4"
            src={cursos.img}
            alt="Sunset in the mountains"
          />

          {cursos.acceso === "True" ? (
            <p className="text-sm text-slate-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Acceso habilitado
            </p>
          ) : (
            <p className="text-sm text-slate-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Sin acceso
            </p>
          )}

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cursos.title}</div>
            <p className="text-stone-200 text-base">{cursos.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
