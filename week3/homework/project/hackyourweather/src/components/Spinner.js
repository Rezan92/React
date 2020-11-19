import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Spinner extends React.Component {
  render() {
    return <div className="spinner" ><Loader type="Oval" color="#00BFFF" height={80} width={80} /></div>;
  }
}
