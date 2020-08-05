import { Food } from "../models";

class FoodService {
  findAll() {
    return Food.findOne().lean();
  }

  search(query: string) {
    return new Promise<any>((resolve, reject) => {
      Food.search(
        {
          query_string: {
            query,
          },
        },
        { hydrate: true },
        (err, results) => {
          if (err) return reject(err);

          resolve(results);
        }
      );
    });
  }
}

export const foodService = new FoodService();
