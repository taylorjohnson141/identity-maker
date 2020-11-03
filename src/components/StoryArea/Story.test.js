import React from 'react';
import '@testing-library/jest-dom';
import StoryArea from './StoryArea.js';
import { render, screen } from '@testing-library/react';


describe('StoryArea', () => {
  it('should render the Story Area correctly', () => {
    let currentIdentity = {
    'color-name': "Orange",
    'company-name': "Sears",
    country: "Aruba",
    'first-name1': "Glinda",
    'first-name2': "Gertrude",
    'first-name3': "Grenedine",
    'game-name': "Catan",
    genre1: "Punk",
    genre2: "Pop",
    id: 1604355735506,
    'last-name': "Hamilton",
    numbers1: "3",
    numbers2: "4",
   'occupation-name': "Accountant",
   'plural-animal-name': "Dogs",
  'restaurant-name': "Romanos",
   'singular-animal-name': "Cat",
    'sport-name': "Football",
    'zoo-animal': "Monkey"}

    render(<StoryArea currentIdentity = {currentIdentity}/>)
    let IdArticle = screen.getByText('Your name is Glinda Hamilton. You work for Sears as a/an Accountant. You have 3 children and your spouse’s name is Gertrude. The two of you met at Romanos. You have a Cat and two Dogs In your free time, you like to coach a youth Football team and play Catan on weekends with your social club. You enjoy Punk novels and watching Pop movies. You have 4 close friends who often call you by your nickname, the Orange Monkey.')
      expect(IdArticle).toBeInTheDocument()
  })
})