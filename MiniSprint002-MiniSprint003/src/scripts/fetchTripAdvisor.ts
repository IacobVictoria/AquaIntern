import { ApifyClient } from "apify-client";
import { TripAdvisorScrapService } from "services/TripAdvisorScrapService";

const client = new ApifyClient({
  token: process.env.APIFY_API_TOKEN || "",
});

const service = new TripAdvisorScrapService();

const hotelUrls = [
  "https://www.tripadvisor.com/Hotel_Review-g294458-d324571-Reviews-Caro_Hotel-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d300789-Reviews-Pullman_Bucharest_World_Trade_Center-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d621040-Reviews-MOXA_Bucharest_Boutique_Hotel-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d300679-Reviews-Intercontinental_Athenee_Palace_Bucharest_By_IHG-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d1638746-Reviews-Hotel_Christina-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d12786273-Reviews-Hilton_Garden_Inn_Bucharest_Old_Town-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d3605123-Reviews-Premier_Palace_Spa_Hotel-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d27974206-Reviews-Old_Town_Snail_Design_Apartments-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d23521327-Reviews-The_Marmorosch_Bucharest_Autograph_Collection-Bucharest.html",
  "https://www.tripadvisor.com/Hotel_Review-g294458-d23632831-Reviews-Holt_Old_Town-Bucharest.html",
];

async function runTripadvisorReviewsForEachHotel() {
  for (const url of hotelUrls) {
    try {
      const run = await client.actor("maxcopell~tripadvisor-reviews").call(
        {
          startUrls: [{ url }],
          maxItems: 10,
          reviewsLanguages: ["en"],
          reviewRatings: ["ALL_REVIEW_RATINGS"],
        },
      );
      //console.log(run);

      const datasetId = run.defaultDatasetId;
      const resultDataset = await client.dataset(datasetId).listItems();
      //console.log(resultDataset.items);
      const items = resultDataset.items;
      
      for (const item of items) {
        const place = item.placeInfo;
        const hotelRecord = await service.saveToHotels(place);

        const user = item.user;
        const userRecord = await service.saveToUsers(user);

        const review = item;
        const reviewRecord = service.saveToHotelReviews(review);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }
}

runTripadvisorReviewsForEachHotel();
