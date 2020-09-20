import React from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import IPtrackr from "./IPtrackr";
import InputForm from "./InputForm";
export default function App() {
  return (
    <div className="App">
      <InputForm />
      <IPtrackr />
    </div>
  );
}
