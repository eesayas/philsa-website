class AboutService {
  constructor(axios, md = null) {
    this.axios = axios;
    this.md = md;
  }

  async getAboutUs() {
    const query = "/api/about-us?populate=Main";

    const response = await this.axios.get(query);

    const attributes = response.data.data.attributes;
    const images = attributes.Main.data.attributes.formats;

    return {
      ...attributes,
      About: this.md ? this.md.render(attributes.About) : attributes.About,
      Main: Object.values(images)[0],
    };
  }
}

export default AboutService;
