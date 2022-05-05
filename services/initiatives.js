class InitiativeService {
  constructor(axios, md = null) {
    this.axios = axios;
    this.md = md;
  }

  async fetchInitiatives() {
    const query = "/api/initiatives?populate=Image";
    const response = await this.axios.get(query);

    return response.data.data.map((datum) => {
      const Image = datum.attributes.Image.data.attributes.url;

      return {
        ...datum.attributes,
        Image,
      };
    });
  }

  async showInitiative(slug) {
    const query = `/api/initiatives?populate=Image&filters[Slug]=${slug}`;
    const response = await this.axios.get(query);

    const attributes = response.data.data[0].attributes;
    const Image = attributes.Image.data.attributes.url;

    return {
      ...attributes,
      Details: this.md
        ? this.md.render(attributes.Details)
        : attributes.Details,
      Image,
    };
  }
}

export default InitiativeService;
