
import {useState, useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [articles, setArticles] = useState([])

useEffect(() => {
  
  client.getEntries()
  .then(response=> {
  console.log(response.items)
  setArticles(response.items)
  })
  .catch((err)=>console.log(err))
  
}, [])





/*
  return (
    <div className="App">
     <div className="container">
       
     <header>
     <div className="wraper">
       <span>React and contentful</span>
     </div>
     </header>
     <main>
       <div className="wraper">
         <Posts posts={articles} />
       </div>
       </main> 
         </div>
      
*/

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
