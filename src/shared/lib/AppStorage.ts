export class AppStorage {
   public static getItems = <T, P = T>(
      key: string,
      callback?: (allItems: T[]) => P | null | undefined
   ): P | null | undefined => {
      const data = localStorage.getItem(key) || null
      if (!data) return null
      
      const parsedData = JSON.parse(data)

         if (callback) {
            return callback(parsedData)
         } else {
            return parsedData
         }
   };

   public static setItems = <T, P = T>(
      key: string,
      value: T,
      callback?: (previousItems: T[]) => {newItems: T[], returnValue: P}
   ): P | null | void | undefined => {
      try {
         let response: P | null | undefined

         if (callback) {
            const previousItems = AppStorage.getItems<T[]>(key);

            if (!previousItems) {
               throw new Error(`There is no data on key '${key}' or error occured`)
            }

            const {newItems, returnValue} = callback(previousItems)
            localStorage.setItem(key, JSON.stringify(newItems));
            response = returnValue
         } else {
            localStorage.setItem(key, JSON.stringify(value));
            response = AppStorage.getItems<P>(key);
         }

         return response
      } catch (error) {
         return null;
      }
   };
}
