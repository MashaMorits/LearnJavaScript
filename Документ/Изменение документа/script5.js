function createTree(parent, obj) {

    let keys = Object.keys(obj)
    let values = Object.values(obj)    
    let parentEl = parent

    if (keys.length) {

        let ul = document.createElement('ul')
        parentEl.append(ul)

        keys.forEach(key => {
           
            let li = document.createElement('li')
            li.textContent = key
            ul.append(li)


            values.forEach(value => {

                if (typeof (value) == 'object' && obj[key] === value && value != {}) {
                    parentEl = li
                    createTree(parentEl, value)
                }
                
            });

        });
    }

}



let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};


let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере