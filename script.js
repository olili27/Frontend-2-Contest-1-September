const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(
    (element) => element.profession == "developer"
  );
  console.log(developers);
}

// 2. Add Data
function addData() {
  const newData = {
    name: "timothy",
    age: 24,
    profession: "developer",
  };

  data.push(newData);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  const admins = data.filter((element) => element.profession == "admin");

  admins.forEach((admin) => {
    let index = data.indexOf(admin);
    data.splice(index, 1);
  });

  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const arr = [
    {name: "tom", age: 18, profession: "developer" },
    {name: "tony", age: 20, profession: "designer" },
    {name: "kane", age: 19, profession: "admin" },
  ];

  arr.push(...data);
  console.log(arr);
}

// 5. Average Age
function averageAge() {
  let sum = 0;

  data.forEach(element => {
    sum += element.age;
  });

  let averageAge = sum / data.length;
  console.log(averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  let value = data.find(element => element.age > 25)

  if(value != undefined) console.log("yes");
  else console.log("no");
}

// 7. Unique Professions
function uniqueProfessions() {
  let counter = {};

  data.forEach(element => {
    if(counter[element.profession] == undefined) {
      counter[element.profession] = 1;
    } 
    else counter[element.profession]++;
  });

   let distinct = [];
   for (const key in counter) {
    
     if (counter[key] == 1) {
      distinct.push(key);
    }
   }

   console.log(distinct);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b)=> a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    const john = data.find(el => el.name == "john");
    john.profession = "manager";

    console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  const arr = data.filter(el => el.profession == "admin" || el.profession == "developer");
  console.log(arr.length);
}
