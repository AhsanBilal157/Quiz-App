import React from 'react';

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiestiontype = {
    question :string
    answer :string
    options :string[]
}
export type propsquiestiontype ={
    question:string;
    options : string[]
    currentstep:number
    totalquestions:number
    score:number
    callback : (e:React.FormEvent<EventTarget>,ans:string)=>void
}
