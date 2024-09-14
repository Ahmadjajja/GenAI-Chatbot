import './App.css';

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import NoPage from "./pages/NoPage";

function App() {
  return (<>
  

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>

    </Routes>

    <h1>Footer ...</h1>
  </>




  );
}

export default App;
