export function getUsersDemoData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
}

export function getPostsDemoData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}