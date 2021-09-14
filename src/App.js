import React from "react"
import { useSelector, useDispatch } from "react-redux"
import fetchData from "./actions"
import Container from "./container"

function App() {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()
  console.log(data)
  return (
    <div>
      <button
        style={{ width: "100px", height: "50px" }}
        onClick={() => dispatch(fetchData())}
      >
        Fetch Data
      </button>
      <h1>Data</h1>
      <ul>
        {data === "LOADING"
          ? "Loading.."
          : data.map((ele) => <li key={ele.id}>{ele.brand}</li>)}
      </ul>
      <Container />
    </div>
  )
}

export default App
