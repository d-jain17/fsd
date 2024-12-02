import "./App.css";
import Student from "./components/Student/Student";
import logo from "./assets/logo.jpg"
import StudentState from "./components/Student/studentState/StudentState";
import Imagemanipulation from "./Imagemanipulation";

function App() {
  const data = { name: "yaya", rollno: "15", branch: "CSE" };
  return (
    // {/*
    // <>
    //   pic={<img src={logo} height={100} width={100}/>}
    //   <div className="college-header">
    //     ABES Engineering College
    //   </div>
    //   <Student name={data.name} rollno={data.rollno} branch={data.branch} />
      
    // </>
    // */}
    <div>
      <StudentState/>
      <Imagemanipulation/>
    </div>

  );
}

export default App;
