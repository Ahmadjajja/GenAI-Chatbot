import './App.css';
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <ContactPage/>
      <About/>
      <HomePage/>
    </div>
  );
}

export default App;
