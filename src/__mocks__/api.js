// @flow

export const shortenUrl = (url: string) => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      resolve({
        shortenedUrl: 'test.url'
      })
    );
  });
}
module.export = shortenUrl
