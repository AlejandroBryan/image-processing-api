import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
       <Header/>
     <div className="uk-container">
    <Route path="/" exact component={Home}/>
	  <Route path="/gallery" component={Gallery}/>
		<Route path="/upload" component={Upload}/>
      </div>
    </Router>
  );
}

export default App;
