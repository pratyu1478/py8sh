export const Service = {
  getAlbums: function (pageNo) {
    return fetch(`/dv/api/albums/page-${pageNo}.json`)
      .then((r) => r.json())
      .then((d) => d)
      .catch((e) => console.log(e));
  },
  getPhotos: function (pageNo) {
    return fetch(`/dv/api/albums/1/page-${pageNo}.json`)
      .then((r) => r.json())
      .then((d) => d)
      .catch((e) => console.log(e));
  }
};
