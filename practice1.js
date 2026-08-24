/*

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

*/

let myNames = ['Taylor', 'Tim', 'Olivia', 'Melissa', 'Owen', 'Tina', 'Tonya', 'Mark', 'Fran', 'Courtney', 'Titus'];

let tNames = (array => {
  return array.reduce((filteredNames, orgName) => {
    if (orgName[0] === 'T') {
      filteredNames.push(orgName);
    } [];
    return filteredNames;
});
})

console.log(tNames(myNames));