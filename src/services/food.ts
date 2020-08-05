import { Food } from "../models";

const PER_PAGE = 20;

class FoodService {
  async find(page = 0) {
    const foods = await Food.find()
      .skip(page * PER_PAGE)
      .limit(20)
      .lean();
    return {
      perPage: 20,
      page,
      foods,
    };
  }

  search(query: string) {
    return new Promise<any>((resolve, reject) => {
      Food.search(
        {
          query_string: {
            query,
          },
        },
        {
          hydrate: true,
          hydrateOptions: {
            lean: true,
            select: "-factor -incrementF -multiplier -createdAt -updatedAt",
          },
        },
        (err, results) => {
          if (err) return reject(err);

          resolve(results.hits.hits);
        }
      );
    });
  }
}

export const foodService = new FoodService();
