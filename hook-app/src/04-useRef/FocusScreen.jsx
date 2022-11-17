import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const handle = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />

      <button className="btn btn-success mt-2" onClick={handle}>
        set Focus
      </button>

    </>
  )
}