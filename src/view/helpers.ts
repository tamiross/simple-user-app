
const parseResponseAsJson = () => {
    return (res: any) => res.json()
}

export const getDemoData = (url: string) => {
    return fetch(url)
        .then(parseResponseAsJson())
        .catch(error => console.log('Some error occured: ', error))
}