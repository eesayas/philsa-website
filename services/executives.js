class ExecutiveService {
  constructor(axios, md = null) {
    this.axios = axios;
    this.md = md;
  }

  async fetchExecutives(filter) {
    const keys = Object.keys(filter);
    let query = `/api/executives?populate=Profile`;

    // filter query
    if (keys.length) query += "&filters";
    for (const key of keys) {
      query += `[${key}]=${filter[key]}`;
    }

    // sort query
    query += "&sort[0]=Rank:asc";

    const response = await this.axios.get(query);
    return response.data.data.map((datum) => {
      const Profile = datum.attributes.Profile.data.attributes.url;

      return {
        ...datum.attributes,
        Profile,
      };
    });
  }

  async showExecutive(year, slug) {
    const query = `/api/executives?populate=Profile&filters[Slug]=${slug}&filters[Year]=${year}`;
    const response = await this.axios.get(query);

    const attributes = response.data.data[0].attributes;
    const Profile = attributes.Profile.data.attributes.url;

    return {
      ...attributes,
      Bio: this.md ? this.md.render(attributes.Bio) : attributes.Bio,
      Profile,
    };
  }

  async getCurrentYear() {
    const query = "/api/executive-year";
    const response = await this.axios.get(query);

    return response.data.data.attributes.Current;
  }

  async getOldestYear() {
    const query = "/api/executive-year";
    const response = await this.axios.get(query);
    return response.data.data.attributes.Oldest;
  }
}

export default ExecutiveService;
