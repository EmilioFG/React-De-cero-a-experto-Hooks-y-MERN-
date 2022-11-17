

export const TodoAdd = ({ handleNewTodo }) => {


  const handleSubmit = (e) => {
    console.log('inputValue',e.prevent.default())
    if (!inputValue)
      return alert("Para agregar un nuevo todo, debe de agregar una descripción")

    const todo = {
      id: new Date().getTime * 7,
      description: inputValue,
      done: false,
    };
    handleNewTodo(todo);
  }


  return (
    <form onSubmit={handleSubmit}>
      {/* todo add, onNewTodo emitir todo un todo, como el initialState */}
      {/* { id, description, done } */}
      <input
        type="text"
        placeholder="Que hay que hacer ?"
        className="form-control"
      />
      <button
        type="submit"
        className="btn btn-outline-success mt-2"
      >
        Agregar
      </button>
    </form>
  )
}