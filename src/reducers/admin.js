export const admin = (state = { loading: false, data: {}, chooseType: null, chooseStatus: null, chooseStep: null, page: 1 }, action) => {
  switch (action.type) {
    case 'ADMIN_DATA_LOADING':
      return { ...state, loading: action.payload };
    case 'ADMIN_DATA_CHANGE':
      return { ...state, data: action.payload };
    case 'ADMIN_SELECT_CHANGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
