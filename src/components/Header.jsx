import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="flex justify-center py-3">
      <Link to="/">
        <h1 className="font-bold uppercase text-3xl mb-4">Asignaturas</h1>
      </Link>
    </div>
    </>
  );
}
