
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App"> 
          {
            !user ? (<Login />) :
              (
                <Main />
              )
          }
    </div>
  );
}

export default App;
