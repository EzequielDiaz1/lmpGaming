import Home from './Components/Home/Home'
import About from './Components/About/About'
import NavBar from './Components/NavBar/NavBar'
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
    </Router>
  );
}

export default App;
