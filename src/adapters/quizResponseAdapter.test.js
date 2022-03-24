import { describe, expect, test } from 'vitest';
import mockResponse from './../services/mockResponse.json'
import quizResponseAdapter from './quizResponseAdapter';

describe('Adapter quiz', () => {
  test('every question has the property *isCorrect*', () => {
    const adaptedQuiz = quizResponseAdapter(mockResponse.results)
    const isCorrectPresented = adaptedQuiz.questions.every(question => question.hasOwnProperty("isCorrect"))
    expect(isCorrectPresented).toBeTruthy()
  });
});