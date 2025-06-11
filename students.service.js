const { createContext } = require("react")

 //Funcion normal
 const animalService=()=>{}



//factory function
const animalService2=()=>({
   name: "dogi",
   age:"3 años",
   color:"blanco y negro",

   create : (name)=> {
      return`${name}`
   },
   

     update   : ()=> {
      return"updating animal"
   },
   delete : ()=>{
      return"Deleting animal"
   },
   getAll :()=>{
      return"getting animals"
   }
   



})
const animalS=animalService()
   
console.log(animalS.create);
console.log(animalS.update);
console.log(animalS.delete);
console.log(animalS.getAll);

 class Animal{
   name
   contructor(name){
      this.name=name

   }
   eat(){
      return"El animal esta comiendo"
   }
 }

 const animal= new Animal("tom")

 console.log(animal.eat());