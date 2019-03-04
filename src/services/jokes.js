import axios from 'axios'

const urlRandom = 'http://api.icndb.com/jokes/random'


const getRandom = () => {
    const request = axios.get(urlRandom + '?escape=javascript')
    return request.then(response => response.data)
}

const getRandomWithName = (first, last) => {
    const url = urlRandom + '?lastName=' + last + '&firstName=' + first + '&escape=javascript'
   
    
    const request = axios.get(url)

    return request.then(response => response.data)
}

export default { getRandom, getRandomWithName }
