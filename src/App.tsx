import React, { useRef, useState } from 'react';

const App: React.FC = () => {
  const [inputTxt, setInputTxt] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if(inputEl && inputEl.current) {
      setInputTxt(inputEl.current.value);
    }
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>click me!</button>
      <div>{inputTxt}</div>
    </>
  );
}

export default App;
