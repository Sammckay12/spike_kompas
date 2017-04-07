
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
      console.log(response);
      return response.json()
    })
    .then((responseJson) => {
      resolve({
        shortenedUrl: responseJson.shortUrl,
      })
      console.log(responseJson);
    })
    .catch((error) => {
      reject(error)
      console.error(error);
    });
  })
}
