import City from "@models/City";
import User from "@models/User";
import Hotel from "@models/Hotel";
import HotelReview from "@models/HotelReview";

export class TripAdvisorScrapService {
  async saveToHotels(placeInfo: any) {
    if (!placeInfo?.id) {
      return null;
    }

    const city = (await City.findOne({
      where: { CityName: "Bucharest" },
    })) as any;

    if (!city) {
      return null;
    }

    const hotel = await Hotel.create({
      SourcePropertyID: placeInfo.id,
      GlobalPropertyName: placeInfo.name,
      PropertyAddress1: placeInfo.address || null,
      PropertyLatitude: placeInfo.latitude || null,
      PropertyLongitude: placeInfo.longitude || null,
      SabrePropertyRating: placeInfo.rating || null,
      CityID: city.CityID,
    });

    return hotel;
  }

  async saveToUsers(user: any) {
    if (!user?.userId) return null;

    const [firstName, ...lastNameParts] = user.name?.trim().split(" ");
    const lastName = lastNameParts.join(" ");

    const email = `${user.username}@gmail.com`;

    const userRecord = await User.create({
      FirstName: firstName,
      LastName: lastName,
      Email: email,
    });

    return userRecord;
  }

  async saveToHotelReviews(review: any) {
    try {
      const userEmail = `${review.user.username}@gmail.com`;

      const user = (await User.findOne({ where: { Email: userEmail } })) as any;
      if (!user) {
        return null;
      }

      const hotelId = review.placeInfo?.id;

      const hotel = (await Hotel.findOne({
        where: { SourcePropertyID: hotelId },
      })) as any;

      if (!hotel) {
        return null;
      }

      const mediaUrls = review.photos?.map((p: any) => p.link) || [];

      const savedReview = await HotelReview.create({
        content: review.text,
        rating_value: review.rating,
        review_date: review.publishedDate,
        media_urls: mediaUrls,
        type_travel: review.tripType,
        travel_date: review.travelDate,
        title: review.title,
        user_id: user.Id,
        hotel_id: hotel.GlobalPropertyID,
      });

      return savedReview;
    } catch (error: any) {
      return null;
    }
  }
}
