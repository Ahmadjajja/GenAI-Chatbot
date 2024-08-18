import './App.css';
import Greetings from './components/Greetings';
function App() {

  return (
    <div className='App'>
      <Greetings name="Ahmad" color="red"/>
      <Greetings name="Ali" color="white"/>
      <Greetings name="Rehman" color="blue"/>
    </div>
  );
  
}

export default App;
