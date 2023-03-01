"use strict"


function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert(' user.ref.name - результатом будет ошибка, т.к. ref не является методом объекта '); 
