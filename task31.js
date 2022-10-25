var data = [{
  fname: "Priyanka",
  lname: "Meganathan",
  age: 25
}];

// for loop

for (var i = 0; i < data.length; i++) {
  let obj = data[i]
  console.log(obj.fname);
  console.log(obj.lname);
  console.log(obj.age);
}

//for in

for (var i in data) {
  let obj = data[i]
  console.log(obj.fname);
  console.log(obj.lname);
  console.log(obj.age);
}

//for of

for ( const object of data){
    let object = data[i]
    console.log(object.fname);
    console.log(object.lname);
    console.log(object.age);
  }

//  for each

 data.forEach(myfunc);
 function myfunc(item){
  let obj = data[i]
  console.log(obj.fname);
  console.log(obj.lname);
  console.log(obj.age);
}