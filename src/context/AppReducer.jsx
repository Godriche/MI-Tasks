export default (state, action) => {
  switch(action.type){
    case 'ADD_NEW_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
      case 'CLEAR_TASK':
        return {
          ...state,
          tasks: []
        }
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload)
      }
  
    default:
      return state
  }
}