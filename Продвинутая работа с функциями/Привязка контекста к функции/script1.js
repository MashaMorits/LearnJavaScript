function f() {
    alert( this ); // ?
  }
  
  let user = {
    g: f.bind(null)
  };
  
  

  alert('user.g() = null')