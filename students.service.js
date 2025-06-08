 const makeStudentsService=(name,lastname,age)=>{
    
    try {
     return `your name :${name}\n your lastname :${lastname}\n your age :${age}`
   
    } catch (error) {
       return error 
    }
 }

 const makeStudents=makeStudentsService("Ladis", "Fuentes","18")

 console.log(makeStudents);