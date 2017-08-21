import people from './people.json';


const initialState = {
  people
};

// add more reducers to the switch statement
export default (state = initialState, action) => {
  switch (action.type) {
      default:
        return state;
  }
}
