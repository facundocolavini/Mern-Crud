/*Traducir React a JS con Webpack
npm instal react react-dom -D

Tambien para que pueda leer JSX usamos babel para traducirlo con el preset de react y env
npm install babel-core babel-loader babel-preset-react babel-preset-env -D

core de babel:
npm install --save-dev @babel/core 
preset de babel:
npm i @babel/preset-react -D 
npm i @babel/preset-env -D
 
*/ 

import React from 'react';
import {render} from 'react-dom';
import App from './App';
 
 
render(<App/>,document.getElementById('app'));
