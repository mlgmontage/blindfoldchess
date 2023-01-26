import { pointsSelector } from "entities/colors/model/colorsModel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSquare, showSquare } from "shared/functions";

const Home = () => {
  const points = useSelector(pointsSelector);
  const [square, setSquare] = useState<number[]>([]);

  useEffect(() => {
    setSquare(getSquare());
    const press = (ev: KeyboardEvent) => {
      if (ev.key === "a") {
        // dark
        setSquare(getSquare());
      }
      if (ev.key === "o") {
        // light
        setSquare(getSquare());
      }
    };

    document.addEventListener("keypress", press);
    return () => document.removeEventListener("keypress", press);
  }, []);

  return (
    <div>
      <center>
        <h1>{showSquare(square)}</h1>
      </center>
      <div className="squares">
        <div className="square square-dark"></div>
        <div className="square square-light"></div>
      </div>
      <center>
        <h2>
          {points.success}/{points.error}
        </h2>
      </center>
    </div>
  );
};

export default Home;
