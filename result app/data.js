const StudentData  = [
    {
    name :"kawsar Ahmed",
    roll : 100,
    reg  : 1010,
    age : 28,
    Ismarried : false,
    gender : "male",
    subjctMark : {
      bangla : 75,
      english : 97,
      math : 89,
      Ss   :76,
      science : 78,
      religion : 98
    }

   },
  {
  name :"Musfiq hasn",
  roll : 200,
  reg  : 2020,
  age : 40,
  Ismarried : true,
  gender : "male",
  subjctMark : {
    bangla : 55,
    english : 47,
    math : 79,
    Ss   :73,
    science : 88,
    religion : 88
  }

 },
   {
  name :"Popy akter",
  roll : 300,
  reg  : 3030,
  age : 33,
  Ismarried : "true",
  gender : "female",
  subjctMark : {
    bangla : 75,
    english : 97,
    math : 79,
    Ss   :76,
    science : 38,
    religion : 78
  }

 },
   {
  name :"Ashraful haq",
  roll : 400,
  reg  : 4040,
  age : 30,
  Ismarried : false,
  gender : "male",
  subjctMark : {
    bangla : 85,
    english : 57,
    math : 89,
    Ss   :72,
    science : 75,
    religion : 66
  }

 },
   {
  name :"Jibon khan",
  roll : 500,
  reg  : 5050,
  age : 46,
  Ismarried : true,
  gender : "male",
  subjctMark : {
    bangla : 95,
    english : 46,
    math : 86,
    Ss   :76,
    science : 58,
    religion : 97
  }

 },
   {
  name :"Mursheda khatun",
  roll : 600,
  reg  : 6060,
  age : 32,
  Ismarried : true,
  gender : "female",
  subjctMark : {
    bangla : 77,
    english : 67,
    math : 83,
    Ss   :46,
    science : 88,
    religion : 58
  }

 }
 ,
   {
  name :"Fazlu haq",
  roll : 700,
  reg  : 7070,
  age : 30,
  Ismarried : true,
  gender : "male",
  subjctMark : {
    bangla : 55,
    english : 57,
    math : 80,
    Ss   :70,
    science : 48,
    religion : 92
  }

 },
   {
  name :"Rahima begum",
  roll : 800,
  reg  : 8080,
  age : 55,
  Ismarried : false,
  gender : "male",
  subjctMark : {
    bangla : 65,
    english : 87,
    math : 89,
    Ss   :23,
    science : 72,
    religion : 88
  }

 },
   {
  name :"Fahmida khan",
  roll : 900,
  reg  : 9090,
  age : 45,
  Ismarried : false,
  gender : "female",
  subjctMark : {
    bangla : 55,
    english : 87,
    math : 79,
    Ss   :38,
    science : 55,
    religion : 92
  }

 },
   {
  name :"Karim",
  roll : 1000,
  reg  : 10000,
  age : 33,
  Ismarried : true,
  gender : "male",
  subjctMark : {
    bangla : 54,
    english : 47,
    math : 85,
    Ss   :32,
    science : 47,
    religion : 44
  }

 }

]   



const user ={
    name:'marufa',
    age:30,
    
    job:[
    {
        title:'laravel',
        bio:{
            address:'dhaka',
            isMarried:true,

        }
    },
    {
        title:'python',
        bio:{
            address:'khulna',
            isMarried:false,

        }
    }
]

};

const newArr = {
  ...user,
  name:"kawsar ahmed",
  age : 45,



}
console.log(newArr);