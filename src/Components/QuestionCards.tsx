import React,{ useState } from 'react';
import {
    propsquiestiontype
} from '../types/quiz_types'
const QuestionCards: React.FC<propsquiestiontype> = ({
    question,
    options,
    currentstep,
    totalquestions,
    score,
    callback
    
}) => {
    let [selectedAns,setselectedAns] = useState('');
    const handleSelection = ((ev:any)=>{
        setselectedAns(ev.target.value)
    })
    return (
        <div className="Card" style={{marginRight:400}}>
            <br />
            <br />
            <div className='Card2'>
              <h2 >  Question # : {currentstep} / {totalquestions}</h2>
              <h2 >Score : {score} / {totalquestions}</h2>
            </div>
            <div >
                <h2>{question}</h2>
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}className='radio'>
                                <label>
                                    <input 
                                    type="radio" 
                                    name="opt"
                                    required 
                                    value={opt} 
                                    checked={selectedAns===opt}
                                    onChange={handleSelection}
                                    />
                                    
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <br /> 
                <input type='Submit'className='btn'/>
            </form>
        </div>


    )
}
export default QuestionCards