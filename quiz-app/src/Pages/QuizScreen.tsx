import React, { useState } from 'react';
import ScoreBoard from '../Components/ScoreBoard';
import './Quizscreen.css';

export default function QuizScreen(props: any) {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    // const questions = [
    //     {
    //         question: "If Sally has 8 apples and gives 3 to her friend, how many apples does she have left?",
    //         options: [
    //             "2", 
    //             "5", 
    //             "3", 
    //             "8"],
    //         correctAnswer: "5"
    //     },
    //     {
    //         question: "What is the sum of 9 and 6?",
    //         options: [
    //             "11", 
    //             "14", 
    //             "12", 
    //             "15"],
    //         correctAnswer: "15"
    //     },
    //     {
    //         question:"If a box has 5 red balls, 3 blue balls, and 2 green balls, how many balls are there in total?",
    //         options:["7","8","10","12"],
    //         correctAnswer:"10"
    //     },
    //     {
    //         question:"If a pencil costs 4 rupees, how much will 5 pencils cost?",
    //         options:["10 rupees","15rupees","20 rupees","25 rupees"],
    //         correctAnswer:"20 rupees",
    //     },
    //     {
    //         question:"If a rectangle has a length of 7 units and a width of 4 units, what is its area?",
    //         options:["28 square units","18 square units","11 square units","14 square units"],
    //         correctAnswer:"28 square units",
    //     }
        
    // ];
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

    const handleAnswerOptionClick = (e:any,isCorrect:boolean) => {
        // e.target.className="";
		if (isCorrect) {
			setScore(score + 1);
            // e.target.className="correct";
		}

		const nextQuestion = currentIndex + 1;
		if (nextQuestion < questions.length) 
        {
			setCurrentIndex(nextQuestion);
		} 
        else 
        {
			setShowScore(true);
		}

        var a = questions[currentIndex].answerOptions;
        console.log(a[1].isCorrect);
	};
    
    return (
        <div className="app">
            {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
                <>
            <div className="question-section">
                <div className="question-count">
                    <p>Question {currentIndex + 1}/{questions.length}</p>
                    <div className='question-text'>
                    <h4>{questions[currentIndex].questionText}</h4>
                    </div>     
                </div>
                <div className="answer-section">
                    {questions[currentIndex].answerOptions.map((answerOption,i) => (
                        <div className="col-md-4" key={i}>
                          <button onClick={(e) => handleAnswerOptionClick(e,answerOption.isCorrect)}>{answerOption.answerText}</button>
                        </div>
                    ))}

                </div>
            </div>
            </>
            )}
        </div>               
    )
}