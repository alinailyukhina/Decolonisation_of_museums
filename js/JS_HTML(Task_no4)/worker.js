onmessage = function(event) {
    const arrayLength = event.data;
    const numbers = [];
    let sum = 0;
  
    for (let i = 0; i < arrayLength; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1);
      sum += numbers[i];
    }
  
    const average = sum / arrayLength;
  
    postMessage(average);
  };
  