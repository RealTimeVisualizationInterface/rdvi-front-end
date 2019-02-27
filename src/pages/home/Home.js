import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//import Plot from 'react-plotly.js';
import RdviChart from "RdviChart"

class Home extends Component {

   constructor(props){
      super(props);
      this.state = {

      };

   }

   getConfig(){

   }









  render() {
    return (
      <div className="Home">
         home
      </div>
    );
  }
}

export default Home;
// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React 
//           </a>
//         </header>



   // <head>
   //      <meta charset="utf-8">

   //      <title>RDVI</title>
   //      <meta name="description" content="">
   //      <meta name="author" content="">
   //      <meta name="viewport" content="width=device-width, initial-scale=1.0">

   //      <link rel="stylesheet" href="css/rdvi.css">
   //  </head>

   //  <body>

   //      <div id="wrapper">
   //          <header>
   //          </header>

   //          <nav>
   //              <ul>
   //                  <li><a href="#home">Home</a></li>
   //                  <li><a href="#logs">Logs</a></li>
   //                  <li class="right"><a href="#login">Login</a></li>
   //              </ul>
   //          </nav>

   //          <main class="rdvi-chart-container">
   //              <div id="chart1" class="rdvi-chart" height="400"></div>
   //              <div id="chart2" class="rdvi-chart" height="400"></div>
   //              <div id="chart3" class="rdvi-chart" height="400"></div>
   //              <div id="chart4" class="rdvi-chart" height="400"></div>
   //          </main>

   //          <footer>
   //              <p>Footer</p>
   //          </footer>
   //      </div>

   //      <script src="js/jquery-3.3.1.min.js"></script>
   //      <script src="js/plotly-latest.min.js"></script>
   //      <script src="js/rdvi-graphs.js"></script>
   //  </body> 