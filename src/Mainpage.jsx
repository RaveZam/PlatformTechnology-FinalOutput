import Quizhub from "./quizhub/Quizhub";
import Header from "./header/Header";
import { useEffect, useState } from "react";

export default function Mainpage({
  setDatabase,
  database,
  quizzes,
  fastmode,
  setfastmode,
}) {
  useEffect(() => {
    const handlePopState = () => {
      setfastmode(false);
    };

    window.addEventListener("popstate", handlePopState());

    return () => {
      window.removeEventListener("popstate", null);
    };
  }, []);
  return (
    <>
      <Header />
      <Quizhub
        quizzes={quizzes}
        fastmode={fastmode}
        setfastmode={setfastmode}
        setDatabase={setDatabase}
        database={database}
      />
    </>
  );
}
