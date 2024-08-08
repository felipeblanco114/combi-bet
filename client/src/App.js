
import './App.css';
import Home from './components/Home/Home.jsx';
import Logo from "./components/Logo/Logo.jsx";
import Ganadora from "./components/Combinadas/Ganadora.jsx";
import Segura from "./components/Combinadas/Segura.jsx";
import ModeradaFacil from "./components/Combinadas/ModeradaFacil.jsx";
import Moderada from "./components/Combinadas/Moderada.jsx";
import ModeradaDificil from "./components/Combinadas/ModeradaDificil.jsx";
import Jugosa from "./components/Combinadas/Jugosa.jsx";
import Soñadora from "./components/Combinadas/Soñadora.jsx";
import SoñadoraSuprema from "./components/Combinadas/SoñadoraSuprema.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Logo/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/la-ganadora" element={<Ganadora />} />
      </Routes>
      <Routes>
        <Route exact path="/la-segura" element={<Segura />} />
      </Routes>
      <Routes>
        <Route exact path="/moderada-facil" element={<ModeradaFacil />} />
      </Routes>
      <Routes>
        <Route exact path="/moderada" element={<Moderada />} />
      </Routes>
      <Routes>
        <Route exact path="/moderada-dificil" element={<ModeradaDificil />} />
      </Routes>
      <Routes>
        <Route exact path="/la-jugosa" element={<Jugosa />} />
      </Routes>
      <Routes>
        <Route exact path="/la-sonadora" element={<Soñadora />} />
      </Routes>
      <Routes>
        <Route exact path="/sonadora-suprema" element={<SoñadoraSuprema />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
