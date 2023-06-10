import "./App.css";
import Formslogin from "./pages/Formslogin";
import Anotherpage from "./pages/Anotherpage";
import Validate from './pages/Validate'
import { Routes, Route ,useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Datauser } from "./component/Data";
function App() {


  const [userChange, setUserChange] = useState("");
  const [passChange, setPassChange] = useState("");
  const [dataUsers, setDataUser] = useState(Datauser);

  let validation=dataUsers.some(data =>data.name===userChange && data.pass===passChange)
  const navi = useNavigate();
  const navigate = () => {
    navi("/Anotherpage");
  };
  const validate=()=>{
    navi("/Validate");
  }
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Formslogin
             setUserChange={setUserChange} 
             setPassChange={setPassChange} 
             validate={validate}
             navigate={navigate}
             validation={validation} 
              />
          }
        />
        <Route
          path="/Anotherpage"
          element={<Anotherpage />}
        />
        <Route path="/validate"
        element={<Validate/>}
        />
        <Route path="*" element={<div>Not fount</div>} />
      </Routes>
    </>
  );
}

export default App;
