/*
 * action types
 */

export const ADD_NAME = 'ADD_NAME'

/*
 * action creators
 */

export const addName = (text) => {
  return ({   
    type: ADD_NAME, 
    text
  })
};