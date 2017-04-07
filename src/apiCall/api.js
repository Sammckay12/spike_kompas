
export const shortenUrl = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch('https://node-spikely.herokuapp.com/api/shorten/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      resolve({
        shortenedUrl: responseJson.shortUrl,
      })
    })
    .catch((error) => {
      reject(error)
      console.error(error);
    });
  })
}
