console.log(localStorage);

localStorage.setItem('key', JSON.stringify({ name: 'mango', egt: 2 }));

const savedData = localStorage.getItem('key');
console.log('savedData', savedData);

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);
