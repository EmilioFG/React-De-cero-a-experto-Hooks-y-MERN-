import { useState, useEffect } from 'react';

import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'zombie',
    email: 'zombie@emiliogonzalez.dev',
  });

  useEffect(() => {
    // console.log('super-zombie ---')
  }, [])

  useEffect(() => {
    // console.log('form actualizado')
  }, [formState]);

  useEffect(() => {
    // console.log('email actualizado ----')
  }, [formState.email])


  const { username, email } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }


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
      {username === 'milo' && <Message />}
    </>
  )
}
