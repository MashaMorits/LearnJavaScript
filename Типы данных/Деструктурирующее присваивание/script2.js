let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) { 

  let maxSalarie = 0
  let name = ''

  for (let [key, value] of Object.entries(salaries)) {

    if ( value > maxSalarie ) {
      maxSalarie = value
      name = key
    }

  }

  return name

}

alert(topSalary(salaries))