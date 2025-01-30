```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to set the interval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```