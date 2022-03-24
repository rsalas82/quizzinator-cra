import { describe, expect, test, vi } from 'vitest';
import mockResponse from './../services/mockResponse.json'

vi.mock('axios')

describe('getQuiz', () => {
  test('quiz fetched successfully', async() => {
    const data = mockResponse
    const mockFn = vi.fn().mockImplementationOnce(() => Promise.resolve(data))
    const quiz = mockFn()
    await expect(quiz).resolves.toEqual(data);
  });

  test('fetches erroneously data from an API', async() => {
    const errorMessage = 'Network Error';

    const mockFn = vi.fn().mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    const quiz = mockFn()

    await expect(quiz).rejects.toThrow(errorMessage);
  })
});