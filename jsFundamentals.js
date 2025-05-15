// ES6+ examples
const arrowFunc = () => 'Hello';
const { name, age } = { name: 'John', age: 30 };

// Promises & async/await example
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Webpack config placeholder
// webpack.config.js should be added here