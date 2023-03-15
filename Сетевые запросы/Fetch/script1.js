function getUsers(names) {

    let usersInfo = []

    names.forEach( async name => {
        let url = `https://api.github.com/users/${name}`
        let response = await fetch(url)
        let result = await response.json()

        if ( response.status != 200 ) {
            usersInfo.push(null)
        } else {
            usersInfo.push(result)
        }

    })
    
    return usersInfo
}


console.log(getUsers(['iliakan', 'remy', 'no.such.users']))