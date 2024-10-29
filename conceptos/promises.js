const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const calif = Math.ceil(Math.random() * 10);
        if(calif >= 8)
            return resolve('si Pasa!');
        else
            return reject('No Pasa!');
    }, 3000);
});

miPromesa
    .then(result => console.log(result))
    .catch(error => console.log(error));