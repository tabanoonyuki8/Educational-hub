
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Name from './Components/Name/Name'

function App() {

const [name1,setName]=useState([]);

const [creditTime,setCreditTime]=useState(20)//set time


const HandleBtn=(course,time)=>{

 const newName=[...name1,course];
 setName(newName);



 const newTime=creditTime-time;

 if(newTime<=20 && newTime>=0){
  setCreditTime(newTime);
 }
 else{
  alert("Only 20 credits allow")
 }

}

  return (
    <>
      
      <Header></Header>
      <div className='md:flex m-20'>
      <Courses HandleBtn={HandleBtn}
      ></Courses>
      <Name creditTime={creditTime} name1 ={name1}></Name>
      </div>
     
      

      
    </>
  )
}

export default App
