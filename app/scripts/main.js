const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  { first: 'Galileo', last: 'Galileo', year: 1564, passed: 1642},
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947}
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert',
'Blair, Tony', 'Blake, William'];

//filter by inventors born in 1500s
//const yearBorn = inventors.filter((inventor) => {
//   if(inventor.year >= 1500 && inventor.year <= 1600) {
//     return true;
//   }
// });
const yearBorn = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1600))
console.log(yearBorn);

//array of inventors with first and last names
const inventorName = inventors.map(inventor => (inventor.first + ' ' + inventor.last))
console.log(inventorName);

//sort the inventors by birthdate
// const sort = inventors.sort((a,b) => {
//   if(a.year < b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sort = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(sort);

//how many years did all the inventors live? accumulated total
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//sort by years lived
const yearLived = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
console.log(yearLived);

//sort people alphabetically by last name
const sortPeople = people.sort((lastOne,nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(sortPeople);