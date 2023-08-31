import Header from './Components/Header/Header'
import { Routes, Route } from "react-router-dom";
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
