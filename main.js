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










