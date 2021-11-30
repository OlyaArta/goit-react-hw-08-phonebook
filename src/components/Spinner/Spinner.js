import React from "react";
import Loader from "react-loader-spinner";

export default function Spinner() {
  //other logic

  return (
    <Loader
      type="Circles"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
      style={{ textAlign: "center" }}
    />
  );
}
