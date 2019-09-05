export function getDemoData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
}