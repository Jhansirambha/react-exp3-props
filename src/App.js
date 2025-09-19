function Child({ message }) {
  return <h3>{message}</h3>;
}

export default function App() {
  return <Child message="Hello from Parent!" />;
}
