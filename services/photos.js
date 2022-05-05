class PhotoService {
  constructor(axios) {
    this.axios = axios;
  }

  async getPhotos() {
    const query = "/api/gallery?populate=Photos";
    const response = await this.axios.get(query);
    const photos = response.data.data.attributes.Photos.data.map(
      (datum) => datum.attributes.url
    );
    return photos;
  }
}

export default PhotoService;
