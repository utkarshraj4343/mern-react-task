import './App.css';
import AgeCalculator from './Pages/AgeCalculator/AgeCalculator';
import DummyData from './Pages/DummyData/DummyData';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WordCounter from './Pages/WordCount';
import Calculator from './Pages/Calculator/Calculator';
import ColorPicker from './Pages/ColorPicker'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dummydata' element={<DummyData/>}/>
          <Route path='/agecalc' element={<AgeCalculator/>}/>
          <Route path='/wrdcntr' element={<WordCounter/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/clrpicker' element={<ColorPicker/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
