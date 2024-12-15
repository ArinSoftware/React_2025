import { createRoot } from "react-dom/client";

const rootElement = document.querySelector('#root');

function App() {
    return <h1>Hello React</h1>;
}

createRoot(rootElement).render(
    <App />
);