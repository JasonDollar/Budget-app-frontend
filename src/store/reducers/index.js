const initialState = {
  expenses: [{id: 1, title: "test", amount: 123}]
};

function rootReducer(state = initialState, action) {
  return state;
};

export default rootReducer