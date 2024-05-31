




// প্রত্যেক স্টুডেন্টদের মার্কশিট ওইথ ফুল রেজাস্ট সিসটেম


let percentageOfPass  =(StudentData)=>{

  let totalStudent = StudentData.length

  return pass =((totalStudent-2)*100)/totalStudent
  
}




let subWiseGpaAnd_Grade = (mark)=>{

  let gpa
  let grade

      
      if(mark >= 80 && mark <= 100){
        gpa = 5.00
        grade = "A+"
      }else if(mark >= 70 && mark <= 79){
        gpa = 4.00
        grade = "A"
      }else if(mark >= 60 && mark <= 69){
        gpa = 3.50
        grade = "A-"
      }else if(mark >= 50 && mark <= 59){
        gpa = 3.00
        grade = "B"
      }else if(mark >= 40 && mark <= 49){
        gpa = 2.00
        grade = "C"
      }else if(mark >= 33 && mark <= 39){
        gpa = 2.00
        grade = "D"
      }else if(mark < 33 && mark > 0){
        gpa = 0.00
        grade = "F"
      }
      else{
        gpa = "Invalid gpa"
        grade = "Invalid grade"
      }
  
  return {
    gpa : gpa,
    grade : grade
  }
}



let getStudentData = (data)=>{
 data.map((item)=>{

  
  const {bangla,english,math,Ss,science,religion} = item.subjctMark

  if(item.roll==200 && item.reg==2020 && item.gender=="male"){
    

  isPassed=(data)=>{
 
  
   if(bangla >=33 && english >=33 && math >=33 && Ss >=33 && science >=33 && religion >=33){
      
        return true
      }else{
          return false
         
      }

  }

// ----------------------------------------------//
    let Final_gpa=(bangla,english,math,Ss,science,religion)=>{

      let gpa;

      if(bangla >=33 && english >=33 && math >=33 && Ss >=33 && science >=33 && religion >=33){
      
        return  gpa = (subWiseGpaAnd_Grade(bangla).gpa+
          subWiseGpaAnd_Grade(english).gpa+
          subWiseGpaAnd_Grade(math).gpa+
          subWiseGpaAnd_Grade(Ss).gpa+
          subWiseGpaAnd_Grade(science).gpa+
          subWiseGpaAnd_Grade(religion).gpa)/6
          
      }else{
          return gpa = 0
         
      }
    }

  let result = Final_gpa(bangla,english,math,Ss,science,religion)



//--------------------------------------------//

  let Final_grade = (result)=>{
    let grade

       if(result == 5){
      
          grade = "A+"
        }else if(result < 5 && result >= 4){
        
          grade = "A"
        }else if(result < 4 && result >= 3.50){
        
          grade = "A-"
        }else if(result < 3.50 && result >= 3){
          
          grade = "B"
        }else if(result < 3 && result >= 2){
        
          grade = "C"
        }else if(result < 2 && result >= 1){
        
          grade = "D"
        }
        else if(result < 1 && result >= 0){
        
          grade = "F"
        }
        else{
        
          grade = "Invalid grade"
        }
        return grade
    } 

  // -----------------------------------------------//

 
    console.log(`
    name    : ${item.name}
    roll    : ${item.roll}
    reg     : ${item.reg}

    bangla  : ${subWiseGpaAnd_Grade(bangla).gpa} = ${subWiseGpaAnd_Grade(bangla).grade}
    english : ${subWiseGpaAnd_Grade(english).gpa} = ${subWiseGpaAnd_Grade(english).grade}
    math    : ${subWiseGpaAnd_Grade(math).gpa} = ${subWiseGpaAnd_Grade(math).grade}
    Ss      : ${subWiseGpaAnd_Grade(Ss).gpa} = ${subWiseGpaAnd_Grade(Ss).grade}
    science : ${subWiseGpaAnd_Grade(science).gpa} = ${subWiseGpaAnd_Grade(science).grade}
    religion: ${subWiseGpaAnd_Grade(religion).gpa} = ${subWiseGpaAnd_Grade(religion).grade}
  -----------------------------------------------------
    Final Result  : ${isPassed(StudentData) ? "Passed": "Fail"}

    Final Gpa     : ${result.toFixed(2)}
    Final Grade   : ${Final_grade(result)}
    
    `);
  console.log(`
    Pass Percent  : ${percentageOfPass(data)}%
  `);
    }

 })

}

getStudentData(StudentData)






