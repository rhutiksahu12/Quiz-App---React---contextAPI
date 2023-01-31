import React from 'react'
import { useState, useContext } from 'react'

import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context'

const Quiz = () => {
    const [currQuestion, setCurrQuestion] = useState(0)
    const { setGame, setGameState, score, setScore } = useContext(QuizContext)
    // const { score, setScore } = useContext(QuizContext)
    const [optionChosen, setOptionChosen] = useState("")


    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1)
            
        }else(
            setScore(score+0)
        )
        setCurrQuestion(currQuestion+1)
        
        console.log(currQuestion)
        console.log(score)
    }

    const finishQuiz = () =>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1)
        }else{
            setScore(score+0)
        }
        setGameState("menu")
    }

    return (
        <>
            <div className='flex justify-center bg-gray-100'>
                <div className=' grid justify-items-center bg-gray-300  rounded-md p-4'>
                    <h1 className=' text-4xl py-2'>Quiz</h1>
                    <div className='mb-5'>
                        <h1>{Questions[currQuestion].promt}</h1>
                        <div className='flex p-2'>
                            <button className='border-2 m-2 p-1 border-black' onClick={() => setOptionChosen("optionA")}>
                                {Questions[currQuestion].optionA}
                            </button>
                            <button className='border-2 m-2 p-1 border-black' onClick={() => setOptionChosen("optionB")}>
                                {Questions[currQuestion].optionB}
                            </button>
                            <button className='border-2 m-2 p-1 border-black' onClick={() => setOptionChosen("optionC")}>
                                {Questions[currQuestion].optionC}
                            </button>
                            <button className='border-2 m-2 p-1 border-black' onClick={() => setOptionChosen("optionD")}>
                                {Questions[currQuestion].optionD}
                            </button>
                        </div>
                        <div>
                            <span>{optionChosen}</span>
                        </div>
                    </div>


                    <div className=' bg-gray-700 rounded-md m-2 absolute bottom-0 right-1'>
                        {currQuestion == Questions.length - 1 ?
                            (<button onClick={() =>  finishQuiz() } type="button" className=" m-2 p-2 border-2 text-white justify-self-center">Finish Quiz</button>) : (

                                <button onClick={() => nextQuestion()} className=" m-2 p-2 border-2 text-white justify-self-center">Next Question</button>
                            )}
                    </div>

                </div>
            </div>
        </>
    )
}
// setGameState("menu")
export default Quiz