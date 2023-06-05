import React from "react";
import ImgTag from "./Inptform/Imgtag";
import UserInpt from "./Inptform/Userinpt";
import PasswordInpt from "./Inptform/Passwordinpt";
import SubmitInpt from "./Inptform/Submitinpt";



export default function formslogin({navigate}) {

  return (

    <div className=" mt-16 w-1/2 h-64 m-auto border rounded-md">

      <form className="flex bg-white rounded-md">

        <div className="w-1/2 h-64">
        <ImgTag />
        </div>
      
      <div className="w-1/2 h-64 ">
      <div className=" p-8  grid border m-3 h-56">
            <UserInpt />
            <PasswordInpt />
            <SubmitInpt onClick={()=>{navigate("/Anotherpage")}} />
          </div>
      </div>
       
      </form>
    </div>
  );
}
