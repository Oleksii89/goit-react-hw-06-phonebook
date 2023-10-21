const INITIAL_STATE = {
  filterData: '',
};

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return {
        filterData: action.payload,
      };

    default:
      return state;
  }
};
