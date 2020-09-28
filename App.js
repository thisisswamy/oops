import React from 'react';
import Movie from './Movie/Movie.jsx';
import './style2.css';
function App() {
  const abc=<h3>oyyyyy...!!</h3>
  return (
    <div className="App">
      <h1>Lapakies to Select</h1>
      <div class="body">
        <div class="section">
          <Movie 
          name="Dani Danials" 
          Country="US" banner="https://i1.sndcdn.com/avatars-000686231439-ne57rc-t500x500.jpg"/>
          <Movie 
          name="Alura Jenson" 
          Country="US" banner="https://lh3.googleusercontent.com/proxy/kwEcYJSX6K4vm9fMsVG_cdoVmIE1_4_cP4M-sI3uguMEVK0K6LISVQvJGWJWq1Mk0Al3ALIGwokraXCPDwlRxJIIe5dYKpfR87FRoO2xOzbrvovN"/>
          <Movie 
          name="Nicolatte Shea" 
          Country="US" banner="https://3eangl2gs4wd30amb53sjf9d-wpengine.netdna-ssl.com/wp-content/uploads/nicolettesheahighres24-570.jpg"/> 
        </div>
       <div class="section-2">
        <Movie 
          name="Mia Malkova" 
          Country="US" banner="https://www.tollywood.net/wp-content/uploads/2019/07/Mia-Malkova.jpg"/> 
          <Movie 
          name="Lana" 
          Country="US" banner="https://sportzwiki.com/wp-content/uploads/2020/05/wwe-lana.jpg"/> 
          <Movie 
          name="Nikki Bella" 
          Country="US" banner="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pro-wrestler-tv-personality-nikki-bella-attends-the-20th-news-photo-1131569341-1561136621.jpg"/> 
          

        </div>
      </div>
      <hr></hr>
      <h2>Enjoy the Day Champ</h2>
    </div>

  );
}

export default App;
