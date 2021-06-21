import { useEffect, useState, useCallback } from "react";
import { useRouteMatch } from "react-router-dom";
import { Service } from "./Service";

export default function Photos() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);
  const [toggleImage, setToggleImage] = useState(false);
  const [imageData, setImageData] = useState({});

  const { url } = useRouteMatch();

  const decCount = useCallback(() => {
    counter >= 2 && setCounter(counter - 1);
  }, [counter]);
  const incCount = useCallback(() => {
    counter < 3 && setCounter(counter + 1);
  }, [counter]);

  useEffect(async () => {
    const response = await Service.getPhotos(counter);
    setData(response);
  }, [counter]);

  const displayInfo = useCallback(
    (p) => {
      setImageData(p);
      console.log(p);
      setToggleImage(true);
    },
    [setToggleImage, setImageData]
  );

  const closeModal = useCallback(() => {
    setToggleImage(false);
  }, [setToggleImage]);

  return (
    <div className="photos-container">
      <h3>{url.split("/")[3]}</h3>
      <div className="photos">
        {data.length > 0 &&
          data.map((photo) => {
            return (
              <div
                className="photo-card"
                key={photo.id}
                onClick={() => displayInfo(photo)}
              >
                <img src={photo.thumbnail} alt={photo.filename} />
                <h3>{photo.filename}</h3>
              </div>
            );
          })}
      </div>
      <div>
        <button onClick={decCount}>Prev</button>
        <button onClick={incCount}>Next</button>
      </div>
      <div id="myModal" className={!toggleImage ? "hide" : "modal"}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img src={imageData.thumbnail} alt={imageData.filename} />
          <p>{imageData.filename}</p>
          <p>{`${new Date(imageData.dateTaken).getDate()} / ${new Date(
            imageData.dateTaken
          ).getMonth()} / ${new Date(imageData.dateTaken).getFullYear()}`}</p>
        </div>
      </div>
    </div>
  );
}
