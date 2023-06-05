import './App.css';
import Formslogin from './component/forms/Formslogin';
import Anotherpage from './component/forms/Anotherpage';
import {Routes ,Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
 const navi=useNavigate();
 const navigate =()=>{
  navi('/Anotherpage')
 }
  return (
    <>
     <Routes >
      <Route path='/' element={<Formslogin navi={navigate}/>}/>
      <Route path='/Anotherpage' element={<Anotherpage />} />
      <Route path='*' element={<div>Not fount</div>} />
    </Routes>
    </>
   

  );
}

export default App;
