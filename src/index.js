import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const loadScript = () => {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + apiKey;
    script.defer = true;
    document.head.appendChild(script);
}
loadScript();

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <App/>
);