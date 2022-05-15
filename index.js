// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'

// response Q1
const denzel = "please denzel, help me";

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';

// response Q2
const inspirational = "Is " + actor + " an inspirational actor?";

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)

// response Q3
const family = {
  "married": 1983,
  "presidentOfTheUnitedStates": false,
  "children": ["Katia", "John David", "Olivia", "Malcolm"]
}

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  "name": "Fences",
  "year": "2010"
};

// response Q4
stage.year = "2014";
stage.name = "A Raisin in the Sun";

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};

// response Q5
awards["movie"] = "Training Day";

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

// response Q6
const earlywork = {
  "Carbon Copy": "1981",
  "A Soldier Story": "1984",
  "Power": "1986",
  "Cry Freedom": "1987",
  "For Queen and Countryy": "1988"
}


// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];

// response Q7
const newDebaters = []
for (var i = 0; i < debaters.length; i++) {
  newDebaters[i] = debaters[i].toLocaleUpperCase()
}
// newDebaters is new array returned

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array

// response Q8 - 1
directors.push("tonyscott");

// 2. remove "spikelee" value and store it in a variable called firstDirector

// response Q8 - 2
const firstDirector = directors.shift();

// 3. add "himself" value to the start of `directors` array

// response Q8 - 3
directors.unshift("himself");

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector

// response Q8 - 4
directors.splice(1, 1);
const secondDirector = "ridleyscott";

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector

// response Q8 - 5
const thirdDirector = directors[1];

// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']

// response Q9
const duplicate = function (list) {
  let duplicatedList = [];
  for (var i = 0; i < list.length; i++) {
    duplicatedList.push(list[i]);
  }
  duplicatedList = list.concat(duplicatedList)
  return duplicatedList
}

// Q10. Refactor the current ES5-style function `police` in ES6-style.

// response Q10
const police = (names) => {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

// chorus is undefined so we change chorus to quotes
console.log(police(quotes));
// ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

// response Q11
// the query selector is document.getElementsByClassName so the code is :
const Credits = document.getElementsByClassName("right small-12 columns");

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

// response Q12
// we have 39 http requests , the result is detected from the devtools network .

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// response Q13
// the result is  { "id": 6616, "url": "https://www.tvmaze.com/people/6616/zach-shirey", "name": "Zach Shirey", "country": null, 
// "birthday": null, "deathday": null, "gender": "Male", "image":
// { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/62/156083.jpg",
// "original": "https://static.tvmaze.com/uploads/images/original_untouched/62/156083.jpg" }, 
// "updated": 1466068216, "_links": { "self": { "href": "https://api.tvmaze.com/people/6616" } } }
// ==> the response contains all data of the Cast Credit with id = 6616;


// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function (err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// response Q14
const promiseNotation = new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
})

// Q15. Refactor the following codebase with async/await notation
fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const { person } = data[0];
    const { id } = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);

// response Q15
const asyncFunction = async () => {
  const response1 = await fetch('http://api.tvmaze.com/search/people?q=denzel+washington');
  const response2 = await response1.json();
  const { person } = response2[0];
  const { id } = person;
  const response3 = fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  const response = await response3.json();
  return response
}

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)

// response Q16
// 1 ==> https://www.github.fr/
// 2 ==> www.shein.com
// 3 ==> https://info.openclassrooms.com/
// 4 ==> www.nike.com

// Q17. Describe an ESILV project that you worked on that you’re proud of?

// response Q17
// I worked in the past year on the project PI2. In association with a startup called social clean I helped automate their data cleaning and run a few models including NLP on the data. It was very rewarding to develop code with real life applications and to work with experience developers.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

// response Q18
// I worked on a project in R that I didn’t find very interesting because we had to use machine learning models that we already learned in python, and I don’t really like to code in R.

// Q19. What are some things you like about the developer tools you use?

// response Q19
// inspecting HTML, JavaScript, and CSS...
// count the http requests ;
// debuging code ;
// UX/IU help dimentions ...

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?

// response Q20
// There are always different architectures possible for a web application.