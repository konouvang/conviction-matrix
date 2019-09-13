const decisionItemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DECISION_MATRIX':
        return action.payload;
      default:
        return state;
    }
  };

  export default decisionItemReducer;