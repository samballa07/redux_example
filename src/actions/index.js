const fetchData = () => (dispatch) => {
  dispatch({ type: "LOADING" })

  fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=20")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("HERE", responseJson)
      dispatch({
        type: "RECEIVED",
        payload: responseJson,
      })
    })
}

export default fetchData
