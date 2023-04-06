new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

alert('try..catch работает синхронно, поэтому catch не будет выполнен')