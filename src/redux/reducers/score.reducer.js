const scoreReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SCORE_MATRIX':
        return action.payload;
      default:
        return state;
    }
  };

  export default scoreReducer;