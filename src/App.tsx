import React,{useEffect, useState} from 'react';
import './App.css';
import QuestionCards from './Components/QuestionCards';
import  getquizdata  from './service/fetchapi';
import {Quiestiontype} from './types/quiz_types'
import pic from './questionmark.png';


function App() {
  let [quiz,setquiz] = useState<Quiestiontype[]>([])
  let [currentstep,setcurrentstep] = useState(0)
  let [score,setscore] = useState(0)
  let [showResult,setshowResult] = useState(false)

  useEffect(()=>{
    async function fetchdata(){
    const questions:Quiestiontype[] = await getquizdata(5,'medium')
      setquiz(questions)
    }
    fetchdata();
  },[])

  const handlesubmit = (e:React.FormEvent<EventTarget>,userAns:string) =>{
    console.log(userAns)
    e.preventDefault();
    const currentquestion:Quiestiontype = quiz[currentstep]
    console.log('correct answer is :' + currentquestion.answer +"-- but User Selection is : "+userAns)
    if (currentquestion.answer === userAns)
    setscore(++score)
    if (currentstep !== quiz.length -1)
    setcurrentstep(++currentstep);
    else{
      return(
        setshowResult(true)
      
      )
    }
    
  }
  const tryagain = () =>{
    window.location.reload()
  }
  if(showResult)
  return(
    <div className='App'>
      <br />
      <br />
      <h1 style={{color:'white'}}>Quiz Completed </h1>
    <div className='Card' style={{marginTop:80}}>
      <h1>Result</h1>
      <h2> your score : {score} </h2>
      <h2>Total Score : {quiz.length}</h2>
      <input type='button'className='btn'name='tryagain'value='tryagain'onClick={tryagain}/>
    </div>
    <br /><br /><br /><br /><br /><br /><br /></div>
  )
  if (!quiz.length)
   return <h2>Loading</h2>
  return (
    <div className="App">
      <div data-aos="fade-right">
      <br />
    <h1  style={{color:'white'}}> Quiz App <br /><img src={pic} height={200}/> </h1></div>
    <div className="App"style={{color:'black'}}>
    
      <QuestionCards 
      score = {score}
      currentstep = {currentstep}
      totalquestions = {quiz.length}
        options = {quiz[currentstep].options}
        question = {quiz[currentstep].question}
        callback={handlesubmit}/>
      <br /><br /><br /><br /><br /><br /><br />
      

      </div>
      </div>
  );
}

export default App;