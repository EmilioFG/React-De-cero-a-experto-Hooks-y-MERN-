import { useEffect } from 'react';

import { Message } from './Message';

import { useForm } from '../hooks';


export const SimpleFormWithCustomHook = () => {

  const initialForm = {
    username: '',
    email: '',
    password: ''
  }

  const { formState, handleChange, username, email, password, handleReset } = useForm(initialForm);

  // const { username, email, password } = formState;

  useEffect(() => {
    // console.log('super-zombie ---')
  }, [])

  useEffect(() => {
    console.log('form actualizado', formState)
  }, [formState]);

  useEffect(() => {
    // console.log('email actualizado ----')
  }, [email])


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="userName"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="hi@emiliogonzalez.dev"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="********"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button className='btn btn-success mt-3' onClick={handleReset}>Borrar</button>
    </>
  )
}
