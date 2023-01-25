const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error');
    }
})

const promise2 = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error');
    }
})

Promise.all([promise, promise2]) // listens to all promises listed

promise
    .then(result => result + '!')
    .then(result2 => {
        throw Error;
        console.log(result2)
    })
    .catch(() => console.log('error!')) // catches errors that may occur BEFORE
    .then(result3 => console.log(result3 + '?'))


// ASYNC
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data)
}

// with multiple inputs / requests
// error need to be catch using `try {} catch{}`
const urls = ['https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts', 
'https://jsonplaceholder.typicode.com/albums']

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
        ))
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch (err) {
        console.error('oops', err);
    }
    
}