import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';
import CloudinaryWidget from './Cloudinary Widget/CloudinaryWidget'
export default function App() {
  return (
    <>
    <div className="App">
      <CssBaseline />
      <NavBar />
    </div>
    <div>
      <CloudinaryWidget />
    </div>
    </>
  )
};