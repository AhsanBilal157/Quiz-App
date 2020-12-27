import { Quiz,Quiestiontype } from '../types/quiz_types';

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)
const getquizdata = async (totalQuestions: number, level: string): Promise<Quiestiontype[]> => {
    const result = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let { results } = await result.json();


    const quiz:Quiestiontype[] = results.map((questionObj: Quiz) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    }
    )

    return quiz;
}
export default getquizdata;

