const factorWeightReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FACTOR_WEIGHT_MATRIX':
        return action.payload;
      default:
        return state;
    }
  };

  export default factorWeightReducer;