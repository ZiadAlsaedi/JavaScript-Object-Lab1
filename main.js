let User={
    name:"ziad",
    email:"ziad12399@gmail.com",
    Id:"12399",
    available:false,
    func1:function check(){
        if (this.available==true) {
            console.log("true");
 
        }
        else console.log("false")
    },
    addres:{
        city:{
            city:"madinah",
            street:"king abdullah"
        },
        city2:"Riyadh",
        city3:"makkah",
    },
    skills:["leadership","work with groub","ambitious"]
}
User.func1()
User.available=true
User.func1()

console.log(User)
console.log(User.name)
User.Id=1111
console.log(User.Id)
delete User.email
console.log(User.email)
console.log(User.addres)
console.log(User.addres.city.street)
console.log(User.skills)


//lab2//
characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

//1-Get first name that has blue eyes.
  let eye = characters.filter(e => e.eye_color === "blue");
  let names = eye.map(e => e.name);
  console.log(names);

  //2-Get first gender that is his mass is over 50//
  let mass = characters.filter(e => e.mass> 50);
  let massGender = eye.map(e => e.gender);
  console.log(massGender);

  //3-Get characters with height less than 200
  let heights = characters.filter(e => e.height< 200);
  console.log(heights);
  //4-Get all male characters
  let male = characters.filter(e => e.gender === "male");
  console.log(male);

  //5-Get array of all names only
  let allNames = characters.map(character => character.name);
  console.log(allNames);
  //6-Get array of all heights only
  let allHeights = characters.map(character => character.height);
  console.log(allHeights);
  //7-Sort by mass (low to high)

  let sorting =characters.sort((a, b) => a.mass - b.mass);
console.log(sorting)


//8-Sort by height (high to low)
let sortingHeight =characters.sort((a, b) => b.height - a.height);
console.log(sortingHeight)

//9-Does every character have mass more than 40?
let massmore = characters.every( e=> e.mass>40);
console.log(massmore)

//10-Is every character shorter than 200?
let shorter=characters.every( e=> e.height<200);
console.log(shorter)
//11-Is there at least one character with blue eyes?
let eyes=characters.some( e=> e.eye_color===  "blue");
console.log(eyes)
//12-Is there at least one character taller than 210?
let tall=characters.some( e=> e.height>210);
console.log(tall)







