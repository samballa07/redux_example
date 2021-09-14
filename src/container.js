import React from "react"
import { useSelector } from "react-redux"

function Container() {
  const data = useSelector((state) => state.data)
  console.log(data)
  return (
    <div>
      <h1>Another component with the data</h1>
      <ul>
        {data === "LOADING"
          ? "Loading.."
          : data.map((ele) => <li key={ele.id}>{ele.brand}</li>)}
      </ul>
    </div>
  )
}

export default Container
