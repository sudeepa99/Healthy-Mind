import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import TypesofDepression from './pages/TypesofDepression';
import HandlingDepression from './pages/HandlingDepression';
import Homepage from './pages/Homepage';
import TreatmentMethods from './pages/TreatmentMethods';
import SignsandSymptoms from './pages/SignsandSymptoms';
import CausesofDepression from './pages/CausesofDepression';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/types' element={<TypesofDepression/>}></Route>
        <Route path='/handling' element={<HandlingDepression/>}></Route>
        <Route path='/treatment' element={<TreatmentMethods/>}></Route>
        <Route path='/signs' element={<SignsandSymptoms/>}></Route>
        <Route path='causes' element={<CausesofDepression/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
