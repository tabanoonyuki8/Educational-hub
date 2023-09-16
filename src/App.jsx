
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Name from './Components/Name/Name'

function App() {
//Courses name state
const [name1,setName]=useState([]);

const [creditTime,setCreditTime]=useState(20)//set time state
const [creditTime1,setCreditTime1]=useState(0)
//button handle for select courses
const HandleBtn=(course,time,id)=>{
//card handle
 const newName=[...name1,course];
const exitName=name1.map(db =>db.id)
if(exitName.includes(id)){
alert('You can select one time')
}
else{
  setName(newName);
}

 const newTime=creditTime-time;
//Course remaing hours condition
 if(newTime<=20 && newTime>=0){
  setCreditTime(newTime);
 }
 //show toast
 else{
  alert("0 credit remaining")
 }
 //Credit select condition
const newTime1=creditTime1+time;


  if(newTime1<=20){
    setCreditTime1(newTime1);
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
      <Name  creditTime1={creditTime1}  creditTime={creditTime} name1 ={name1}></Name>
      </div>
     
      

      
    </>
  )
}

export default App
