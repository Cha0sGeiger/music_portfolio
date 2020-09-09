import React from "react";

import abelton from "../../../media/photo/abelton.png";
import djHand from "../../../media/photo/dj-hand.jpg";

// const staticUrl = process.env.REACT_APP_CDN_URL;

const Photo = (props) => (
  <img {...props} src={props.src} alt="" className={props.className} />
);

export const Abelton = (props) => <Photo {...props} src={abelton} />;
export const deeJay = (props) => <Photo {...props} src={djHand} />;
