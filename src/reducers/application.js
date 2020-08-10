const ADD_CANVAS_ITEMS = "SET_CANVAS_ITEMS";
const SET_TEXTBOX = "SET_TEXTBOX";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CANVAS_ITEMS:
      return ({ ...state, canvasItems: [...state.canvasItems, action.canvasItem ]});
    
    case SET_TEXTBOX:
      return ({ ...state, textbox: action.textbox });
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export { ADD_CANVAS_ITEMS, SET_TEXTBOX };