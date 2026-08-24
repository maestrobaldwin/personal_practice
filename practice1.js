let names = ['Tony', 'Sam', 'John', 'Taylor', 'Olivia',];
let i = 0;
let largeName = [];
while (i < names.length) {
  let newName = names[i].toUpperCase();
  largeName.push(newName);
  i += 1;
}

console.log(names);
console.log(largeName);

