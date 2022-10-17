import { render, screen } from '@testing-library/react';
import App from './App';
import CheckPalindrome from './Palindrome'

test('Test string for palindrome \'Abba\'', () => {
  const result = CheckPalindrome('Abba')
  expect(result).toBe(true);
});
