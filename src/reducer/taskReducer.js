// definimos unos valores iniciales
const initialData = {
  allItems: [
    {
      id: 1,
      text: 'Comer Asado el finde',
      complete: true,
      date: 1633469084828,
    },
    {
      id: 2,
      text: 'Aprender Golang',
      complete: false,
      date: 1633469084824,
    },
    {
      id: 3,
      text: 'Ir al Gym',
      complete: true,
      date: 1633469084822,
    },
  ],
  filter: 'SHOW_COMPLETED',
};

function taskReducer(state = initialData, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        allItems: [...state.allItems, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        allItems: state.allItems.filter((task) => task.id != action.payload),
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        allItems: state.allItems.map((item) => {
          if (item.id === action.payload.id) {
            item.text = action.payload.text;
          }
          return item;
        }),
      };
    case 'COMPLETED':
      return {
        ...state,
        allItems: state.allItems.map((item) => {
          if (item.id === action.payload.id) {
            item.complete = action.payload.complete;
          }
          return item;
        }),
      };
  }
  return state;
}
export default taskReducer;
