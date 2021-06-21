import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Albums from "./Albums";
import Photos from "./Photos";
import SlideShow from "./SlideShow";
import PageNotFound from "./PageNotFound";

export default function Nav() {
  const [toggleClass, setToggleClass] = useState("hide");

  return (
    <>
      <div className="nav">
        <ul className="side-nav">
          <li>
            <span
              onClick={() =>
                toggleClass === "hide"
                  ? setToggleClass("show")
                  : setToggleClass("hide")
              }
            >
              Photos
            </span>
            <p className={toggleClass}>
              <Link className="link" to="/photos/albums">
                Albums
              </Link>
            </p>
            <p className={toggleClass}>
              <Link className="link" to="/photos/slideshows">
                Slideshow
              </Link>
            </p>
          </li>

          <li>
            <Link className="link" to="/music">
              Music
            </Link>
          </li>
          <li>
            <Link className="link" to="/music">
              Documents
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/photos/albums" component={Albums} />
        <Route
          exact
          path="/photos/albums/:albumName/:albumId"
          component={Photos}
        />
        <Route path="/photos/slideshows" component={SlideShow} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}
