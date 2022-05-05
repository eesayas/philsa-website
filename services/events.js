class EventService {
  constructor(axios, md = null) {
    this.axios = axios;
    this.md = md;
  }

  async fetchEvents(page) {
    const size = 3;
    const query = `/api/events?pagination[page]=${page}&pagination[pageSize]=${size}&populate=Image&sort[0]=Start:desc`;

    const response = await this.axios.get(query);
    const events = response.data.data.map((datum) => {
      const Image = datum.attributes.Image.data.attributes.url;

      return {
        ...datum.attributes,
        Image,
      };
    });
    const pagination = response.data.meta.pagination;

    return { events, pagination };
  }

  async showEvent(slug) {
    const query = `/api/events?populate=Image&filters[Slug]=${slug}`;
    const response = await this.axios.get(query);

    const attributes = response.data.data[0].attributes;
    const Image = attributes.Image.data.attributes.url;

    return {
      ...attributes,
      Description: this.md
        ? this.md.render(attributes.Description)
        : attributes.Description,
      Image,
    };
  }
}

export default EventService;
