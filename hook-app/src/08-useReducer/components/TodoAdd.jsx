import { useForm } from "../../hooks";


export const TodoAdd = ({ handleNewTodo }) => {

  const { description, handleChange, handleReset } = useForm({
    description: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description)
      return alert("Para agregar un nuevo todo, debe de agregar una descripción")

    const newTodo = {
      id: new Date().getTime() * 7,
      description: description,
      done: false,
    };
    handleNewTodo(newTodo);
  }


  return (
    <form onSubmit={handleSubmit}>
      {/* todo add, onNewTodo emitir todo un todo, como el initialState */}
      {/* { id, description, done } */}
      <input
        type="text"
        name="description"
        placeholder="Que hay que hacer ?"
        className="form-control"
        onChange={handleChange}
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