const quize = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [
        ...state,
        {
          name: action.text,
        },
      ];
    default:
      return state;
  }
};

export default quize;
