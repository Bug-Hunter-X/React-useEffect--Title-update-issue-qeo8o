```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleTitleUpdate = () => {
      document.title = `Count: ${count}`;
    };
    // Use a cleanup function to prevent memory leaks
    const unsubscribe = () => {
        // Clean-up actions if needed
    }
    handleTitleUpdate();
    return unsubscribe; // add the cleanup
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```