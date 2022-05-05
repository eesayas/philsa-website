class PerkService {
  constructor(axios) {
    this.axios = axios;
  }

  async fetchPerks() {
    const query = `/api/perks?populate=Logo`;

    const response = await this.axios.get(query);
    return response.data.data.map((datum) => {
      const images = datum.attributes.Logo.data.attributes.formats;

      return {
        ...datum.attributes,
        Profile: Object.values(images)[0],
      };
    });
  }
}

export default PerkService;
