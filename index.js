const fibonacciLoop = (length) => {
  if (length === 0) {
    return [0];
  } else if (length === 1){ 
    return [0,1];
  }
  const result = [0];
  result.push(1);
  for (let i = 2; i <= length; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
};
  
  console.log(fibonacciLoop(0));
  console.log(fibonacciLoop(1));
  console.log(fibonacciLoop(2));
  console.log(fibonacciLoop(3));
  console.log(fibonacciLoop(7));
  console.log(fibonacciLoop(20));
  console.log(fibonacciLoop(50));
  console.log(fibonacciLoop(100));

  