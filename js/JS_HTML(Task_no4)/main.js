const worker = new Worker('worker.js');

worker.postMessage(10000000);

worker.onmessage = function(event) {
  const average = event.data;
  alert('Average: ' + average);
};
