import { useState } from 'react';

const Counter = (props) => {
  console.log('Counter is rendering props:', props);

  const [count, setCount] = useState(0);
  const [name, setName] = useState(props.defaultName);

  console.log('the counter is rendering:', count);

  const inputFieldChangeHelper = (event) => {
    console.log('monkeyfuzz');
    setName( event.target.value );
  };

  return (
    <>
    <h4>Count: { count } </h4>
    <h5>{ props.defaultName }</h5>
    <button onClick={ e => setCount( count + 1 ) } >{ name }: Click Here</button>
    <input 
      value={ name }
      onChange={ inputFieldChangeHelper }
    />
    </>
  );
};

export default Counter;