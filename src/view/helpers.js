
const parseResponseAsJson = () => {
    return res => res.json()
}

export const getDemoData = (url) => {
    return fetch(url)
        .then(parseResponseAsJson())
        .catch(error => console.log('Some error occured: ', error))
}