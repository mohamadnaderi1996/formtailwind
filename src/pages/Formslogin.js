import ImgTag from "../component/forms/Inptform/Imgtag";
import UserInpt from "../component/forms/Inptform/Userinpt";
import PasswordInpt from "../component/forms/Inptform/Passwordinpt";
import SubmitInpt from "../component/forms/Inptform/Submitinpt";



export default function formslogin(props) {

  return (

    <div className=" mt-16 w-1/2 h-64 m-auto border rounded-md">

      <form className="lg:flex bg-white rounded-md">

        <div className="w-full lg:w-1/2 h-64">    
        <ImgTag />
        </div>
      
      <div className="w-full lg:w-1/2 h-64 backdrop-blur-[1000px] ">
      <div className=" p-8 grid border m-3 h-56">
            <UserInpt  setUserChange={props.setUserChange}/>
            <PasswordInpt setPassChange={props.setPassChange}/>
            <SubmitInpt validate={props.validate} validation={props.validation}  navigate={props.navigate} />  
          </div>  
      </div>
       
      </form>
    </div>
  );
}
