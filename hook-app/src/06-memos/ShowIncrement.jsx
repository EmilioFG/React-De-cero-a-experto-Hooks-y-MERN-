import React from "react"

export const ShowIncrement = React.memo(({increment}) => {
  console.log('ShowIncrement -> me volvi a generar :(((')
  return (
    <button
      className="btn btn-success"
      onClick={() => increment(5)}
    >
      Show Increment
    </button>
  )
})