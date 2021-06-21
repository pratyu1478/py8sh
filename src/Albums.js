import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Service } from "./Service";

const Months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];

export default function Albums() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);

  const decCount = useCallback(() => {
    counter >= 2 && setCounter(counter - 1);
  }, [counter]);
  const incCount = useCallback(() => {
    counter < 3 && setCounter(counter + 1);
  }, [counter]);

  useEffect(async () => {
    const response = await Service.getAlbums(counter);
    console.log(response);
    setData(response);
  }, [counter]);

  return (
    <div className="albums-container">
      <div className="albums">
        {data.length > 0 &&
          data.map((album) => {
            return (
              <Link
                className="link"
                to={`/photos/albums/${album.name}/${album.id}`}
              >
                <div className="card" key={album.id}>
                  <img src={album.thumbnail} alt={album.name} />
                  <h3>{album.name}</h3>
                  <h4>{`${
                    Months[new Date(album.createdAt).getMonth()]
                  } - ${new Date(album.createdAt).getFullYear()}`}</h4>
                </div>
              </Link>
            );
          })}
      </div>
      <div>
        <button onClick={decCount}>Prev</button>
        <button onClick={incCount}>Next</button>
      </div>
    </div>
  );
}
