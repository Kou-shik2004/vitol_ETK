// src/components/Quiz.tsx
'use client';

import { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';

export default function Quiz() {
  // Move all state initialization into useEffect to prevent hydration mismatches
  const [state, setState] = useState({
    isClient: false,
    selectedWeek: 1,
    answers: {} as Record<number, number>,
    showResults: false
  });

  useEffect(() => {
    // Initialize state after component mounts on client
    setState(prev => ({
      ...prev,
      isClient: true,
      // Set any initial values that need to be computed here
      selectedWeek: 1,
      answers: {},
      showResults: false
    }));
  }, []);

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    if (state.showResults) return;
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIndex]: optionIndex
      }
    }));
  };

  const handleSubmit = () => {
    setState(prev => ({ ...prev, showResults: true }));
  };

  const getOptionClassName = (questionIndex: number, optionIndex: number) => {
    const baseStyle = "p-4 rounded-md cursor-pointer mb-2 text-white transition-colors";
    
    if (!state.showResults) {
      return `${baseStyle} ${
        state.answers[questionIndex] === optionIndex 
          ? 'bg-blue-900 border border-blue-500' 
          : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
      }`;
    }
    
    if (optionIndex === quizData[state.selectedWeek][questionIndex].correct) {
      return `${baseStyle} bg-green-900 border border-green-500`;
    }
    
    if (state.answers[questionIndex] === optionIndex) {
      return `${baseStyle} bg-red-900 border border-red-500`;
    }
    
    return `${baseStyle} bg-gray-800 opacity-50 border border-gray-700`;
  };

  // Show a loading state until client-side hydration is complete
  if (!state.isClient) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded w-3/4 mx-auto mb-8"></div>
          <div className="h-12 bg-gray-800 rounded mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 bg-gray-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const calculateScore = () => {
    if (!state.showResults) return null;
    const correctAnswers = Object.entries(state.answers).filter(
      ([qIndex, answer]) => answer === quizData[state.selectedWeek][Number(qIndex)].correct
    ).length;
    return {
      correct: correctAnswers,
      total: quizData[state.selectedWeek].length
    };
  };

  const score = calculateScore();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Traditional Knowledge Quiz
      </h1>
      
      <div className="mb-8">
        <select 
          value={state.selectedWeek} 
          onChange={(e) => {
            setState(prev => ({
              ...prev,
              selectedWeek: Number(e.target.value),
              answers: {},
              showResults: false
            }));
          }}
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
        >
          {Object.keys(quizData).map(week => (
            <option key={week} value={week}>Week {week}</option>
          ))}
        </select>
      </div>

      {score && (
        <div className="mb-6 p-4 bg-blue-900 rounded-lg text-center border border-blue-500">
          Score: {score.correct} out of {score.total} 
          ({Math.round(score.correct / score.total * 100)}%)
        </div>
      )}

      <div className="space-y-8">
        {quizData[state.selectedWeek].map((question, qIndex) => (
          <div key={qIndex} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <p className="font-medium text-lg mb-4 text-white">
              {qIndex + 1}. {question.question}
            </p>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <div
                  key={oIndex}
                  onClick={() => handleOptionSelect(qIndex, oIndex)}
                  className={getOptionClassName(qIndex, oIndex)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {!state.showResults ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full transition-colors"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={() => {
              setState(prev => ({
                ...prev,
                answers: {},
                showResults: false
              }));
            }}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md w-full transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}