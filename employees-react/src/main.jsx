import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {

  let count = 0;

  function handleIncrement() {
    console.log("handleIncrement FIRED");
    count += 1;
    console.log("count", count);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
