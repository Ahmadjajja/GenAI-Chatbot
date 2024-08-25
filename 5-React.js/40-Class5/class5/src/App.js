import "./App.css";
import styles from './App.module.css';
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className={styles.App}>
      <p className={styles.heading}>App.js</p>
      <HomePage/>
    </div>
  );
}

export default App;
