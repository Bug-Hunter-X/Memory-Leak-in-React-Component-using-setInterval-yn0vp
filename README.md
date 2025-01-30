# React setInterval Memory Leak Bug
This repository demonstrates a common bug in React applications involving the improper use of `setInterval` within the `useEffect` hook, leading to memory leaks.

## Bug Description
The `MyComponent` component uses `setInterval` to update a counter every second. However, it fails to include a cleanup function within the `useEffect` hook's return statement to clear the interval when the component unmounts. This results in multiple intervals running concurrently, leading to a memory leak.

## Solution
The solution involves adding a cleanup function to the `useEffect` hook that clears the interval using `clearInterval` when the component unmounts.