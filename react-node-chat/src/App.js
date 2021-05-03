import './App.css';
import {Route} from 'react-router-dom';
import {Auth, Home} from './pages';

function App() {
  return (
    <div className="App">
		<Route exaxt path={['/', '/login', '/register']} component={Auth}/>
		<Route exaxt path='/home' component={Home}/>
    </div>
  );
}

export default App;

