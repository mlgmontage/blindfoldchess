import {
  incrementError,
  incrementSuccess,
  pointsSelector,
} from "entities/colors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkColor, getSquare, showSquare } from "shared/functions";

const Home = () => {
  const dispatch = useDispatch();
  const points = useSelector(pointsSelector);
  const [square, setSquare] = useState<number[]>([0, 0]);

  useEffect(() => {
    const press = (ev: KeyboardEvent) => {
      const color = checkColor(square);
      console.warn(showSquare(square), square, color ? "dark" : "light");

      if (ev.key === "a") {
        // dark
        if (color === true) {
          dispatch(incrementSuccess());
        } else {
          dispatch(incrementError());
        }
      }
      if (ev.key === "o") {
        // light
        if (color === false) {
          dispatch(incrementSuccess());
        } else {
          dispatch(incrementError());
        }
      }

      setSquare(getSquare());
    };

    document.addEventListener("keypress", press);
    return () => document.removeEventListener("keypress", press);
  }, [square]);

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
