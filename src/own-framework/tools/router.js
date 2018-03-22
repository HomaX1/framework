//Delete first symbol in hash. This symbol is '#'

export const router = {
  getUrl() {
      return window.location.hash.slice(1);
  }
};