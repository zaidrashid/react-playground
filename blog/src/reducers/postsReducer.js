export default (state = [], action) => {
  if (action.type !== 'FETCH_POST') {
    return state;
  }

  return action.payload;
};
