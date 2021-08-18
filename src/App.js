import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main.js';
import Footer from './components/Footer';
import { Posts } from './components/Posts';
import { client } from './apis/recipeapi';




function App() {

  //get recipes
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client
    .getEntries()
    .then((response) => {
    console.log(response.items)
    setArticles(response.items);
    })
    .catch((err)=>console.log(err))
    
   
  }, []);

  return (
    <div className="App">

      <Header />
      
      <Main />
      <Footer />
      <div><Posts posts={articles} /></div>
    </div>
  );
}

export default App;
