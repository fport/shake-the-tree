import data from '../data'
import CONSTANTS from '../actions/index'

// ------------------------------------------------------------------------------------
// ADD_APPLE  => Adds apples to the basket
// DROP_APPLE => Drops apples to on the tree
// ERROR => Provides error catching
// ------------------------------------------------------------------------------------

const initialState = {
  appleOnTree: data,
  basket: [],
  hasError: false
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_APPLE: {
      const appleOnBasket = [...state.basket]
      let i = action.payload
      while (i > 0) {
        appleOnBasket.push(state.appleOnTree[i])
        i--
      }
      return { ...state, basket: appleOnBasket }
    }
    case CONSTANTS.DROP_APPLE: {
      const appleOnTree = [...state.appleOnTree]
      appleOnTree.splice(0, action.payload)
      return { ...state, appleOnTree }
    }
    case CONSTANTS.ERROR:
      return {
        ...state,
        hasError: true
      }

    default:
      return state
  }
}
export default projectReducer
