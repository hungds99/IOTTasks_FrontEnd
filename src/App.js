// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Material
import Container from '@material-ui/core/Container';

// Pages
import Home from './Pages/Home';
import Model from './Pages/Models';
import Object from './Pages/Objects';
import Place from './Pages/Places';

// Components
import Navbar from "./Components/Layout/Navbar";


function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Navbar/>
			<Container>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/models" component={Model}/>
					<Route path="/objects" component={Object}/>
					<Route path="/places" component={Place}/>
				</Switch>
			</Container>		
		</BrowserRouter>
    </div>
  );
}

export default App;
