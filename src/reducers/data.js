const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "LOADING":
      return "LOADING"
    case "RECEIVED":
      return action.payload
    default:
      return state
  }
}

export default dataReducer
