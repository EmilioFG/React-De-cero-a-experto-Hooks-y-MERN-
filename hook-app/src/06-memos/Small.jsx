import React from "react"

export const Small = React.memo(({ value }) => {

  console.log('ME VOLVI A DIBUJAR !!!! ')

  return <small>{value}</small>
})