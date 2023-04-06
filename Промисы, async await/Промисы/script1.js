let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  


  alert('  promise.then(alert); = 1, т.к. обрабатывается только первый вызов resolve или reject')