import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';
import Dropzone from './Dropzone/Dropzone';
export default function App() {
  return (
    <>
    <div className="App">
      <CssBaseline />
      <NavBar />
    </div>
    <div>
    <Dropzone />
    </div>
    </>
  )
};