/**
 * @file Tests for the kebab case helper.
 */
const { test, expect } = require('@playwright/test')

const { kebab } = require('../index.js')

test('from pascal case', () => {
  expect(kebab('pascal case')).toEqual('pascal-case')
})

test('from title case', () => {
  expect(kebab('Title Case')).toEqual('title-case')
})

test('from sentence case', () => {
  expect(kebab('Sentence case')).toEqual('sentence-case')
})

test('from lower case', () => {
  expect(kebab('lower case')).toEqual('lower-case')
})

test('from first letter lower case', () => {
  expect(kebab('first Lower')).toEqual('first-lower')
})

test('from sentence case with random uppercase letter', () => {
  expect(kebab('Sentence cAse')).toEqual('sentence-case')
})

test('from sentence case with special character inside a word', () => {
  expect(kebab('Sentence ca!se')).toEqual('sentence-case')
})

test('from sentence case with special character at end', () => {
  expect(kebab('Sentence case!')).toEqual('sentence-case')
})
