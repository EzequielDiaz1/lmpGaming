import Home from './Components/Home/Home'
import About from './Components/About/About'
import NavBar from './Components/NavBar/NavBar'
import Teams from './Components/Teams/Teams'
import Titles from './Components/Titles/Titles'
import Form from './Components/Contact/Form'
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' render={() => <NavBar/>} />
      <Route exact path='/' render={() => <Home/>} /> 
      <Route exact path='/about' render={() => <About/>} /> 
      <Route exact path='/teams' render={() => <Teams/>} /> 
      <Route exact path='/titles' render={() => <Titles/>} /> 
      <Route exact path='/contact' render={() => <Form/>} /> 
    </Router>
  );
}

export default App;
