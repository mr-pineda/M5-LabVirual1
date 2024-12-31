import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Home Page</h1>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button
          variant='primary'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default Home;
