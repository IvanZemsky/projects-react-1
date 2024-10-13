export class AppStorage {
   public static get = <T>(
      key: string,
      callback?: (response: T) => T | null
   ): T | null => {
      const response = localStorage.getItem(key) || null;

      if (response) {
         const parsedResponse = JSON.parse(response) as T;
         return callback ? callback(parsedResponse) : parsedResponse;
      } else {
         return null;
      }
   };

   public static setItems = <T, P = T>(
      key: string,
      value: T,
      callback?: (previousItem: T[]) => {newItems: T[], returnValue: P}
   ): T | P | null | void => {
      try {
         let response: T | P | null

         if (callback) {
            const previousItem = AppStorage.get<T[]>(key);

            if (!previousItem) {
               throw new Error(`There is no data on key '${key}' or error occured`)
            }

            const {newItems, returnValue} = callback(previousItem)
            localStorage.setItem(key, JSON.stringify(newItems));
            response = returnValue
         } else {
            localStorage.setItem(key, JSON.stringify(value));
            response = AppStorage.get<T>(key);
         }

         return response
      } catch (error) {
         return null;
      }
   };
}
