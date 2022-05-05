import EventService from "./events";
import ExecutiveService from "./executives";
import InitiativeService from "./initiatives";

class HiglightService {
  constructor(axios) {
    this.axios = axios;
  }

  async fetchHighlights() {
    const query = `/api/highlights?populate=Event,Executive,Initiative,Image&sort[0]=Rank:asc`;
    const response = await this.axios(query);
    const data = response.data.data;
    const processed = [];

    for await (const datum of data) {
      const attributes = datum.attributes;

      // Event Highlight
      if (attributes.Event.data !== null) {
        const eventService = new EventService(this.axios);
        const Slug = attributes.Event.data.attributes.Slug;
        const event = await eventService.showEvent(Slug);
        processed.push({ ...event, Link: `/events/${Slug}` });

        // Initiative Highlight
      } else if (attributes.Initiative.data !== null) {
        const intiativeService = new InitiativeService(this.axios);
        const Slug = attributes.Initiative.data.attributes.Slug;
        const initiative = await intiativeService.showInitiative(Slug);
        processed.push({ ...initiative, Link: `/initiatives/${Slug}` });

        // Executive Highlight
      } else if (attributes.Executive.data !== null) {
        const executiveService = new ExecutiveService(this.axios, this.md);
        const { Slug, Year } = attributes.Executive.data.attributes;
        const executive = await executiveService.showExecutive(Year, Slug);
        processed.push({
          ...executive,
          Title: executive.Name,
          Subtitle: executive.Role,
          Image: executive.Profile,
          Link: `/executives/${Year}/${Slug}`,
        });
      }
    }

    return processed;
  }
}

export default HiglightService;
