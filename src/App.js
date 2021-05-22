import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
