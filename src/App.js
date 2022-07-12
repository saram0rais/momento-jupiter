import './App.css';
import React, { useState } from 'react';
import Post from './componentes/posts/Post';
import Menu from './componentes/header/Menuheader';
import Footer from './componentes/footer/footer';

function App() {
  return (
   <> 
    <Menu />
    <Post />
    <Footer />
   </>
  );
}

export default App;
