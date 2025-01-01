"use client";

import { useState, useEffect, } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Load the initial counter value from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("counter");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  // Save the counter value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("counter", count.toString()); 
  }, [count]);;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black ">
      <div className="bg-white p-6 rounded-lg shadow-md text-center  shadow-white  shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">Counter App</h1>
        <p className="text-xl font-medium mb-6 text-black">Current Count: {count}</p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
    
  );
}
