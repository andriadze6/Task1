import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import BodyConteiner from './Js/BodyConteiner';
import FootTest from './Js/footer'

const root = ReactDOM.createRoot(document.getElementById('Header'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
const bodyConteiner = ReactDOM.createRoot(document.getElementById("bodyConteiner"))
bodyConteiner.render(
  <React.StrictMode>
    <BodyConteiner/>
  </React.StrictMode>
);
const footerConteiner = ReactDOM.createRoot(document.getElementById("test"))
footerConteiner.render(
  <React.StrictMode>
    <FootTest/>
  </React.StrictMode>
)

