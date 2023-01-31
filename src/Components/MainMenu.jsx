import React from 'react'
import { useState, useContext } from 'react'

import { QuizContext } from '../Helpers/Context';


const MainMenu = () => {
    const { gameState, setGameState, score, setScore } = useContext(QuizContext)
    // const {  } = useContext(QuizContext)
    return (
        <>
            <div className='flex justify-center bg-gray-100'>
                <div className='grid justify-items-center bg-gray-300 w-1/2 rounded-md p-4 '>
                    <h1 className='  text-4xl py-2'>Main Menu</h1>
                    <div className=' bg-gray-700 rounded-md m-2 '>
                        <button className='p-2 text-white justify-self-center ' onClick={() => {
                            setGameState('quiz')
                            setScore(0)
                            console.log(score)
                        }}>Start Quiz</button>
                    </div>
                    <div>
                        <span>Previous Game Score {score}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainMenu