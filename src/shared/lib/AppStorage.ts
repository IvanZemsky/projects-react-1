export class AppStorage {

   public static get = <T, P = T>(
      key: string,
      callback?: (items: T) => P | null | undefined
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

   public static set = <T, P = T>(
      key: string,
      value: P,
      callback?: (previousItems: T) => {newItems: T, returnValue: P}
   ): P | null | undefined => {
      try {
         let response: P | null | undefined

         if (callback) {
            const previousItems = localStorage.getItem(key) || null
            console.log('as', previousItems)

            if (!previousItems) {
               return null
            }

            const {newItems, returnValue} = callback(JSON.parse(previousItems))
            localStorage.setItem(key, JSON.stringify(newItems));
            response = returnValue
         } else {
            localStorage.setItem(key, JSON.stringify(value));
            response = AppStorage.get<P>(key);
         }

         return response
      } catch (error) {
         return null;
      }
   };
}
