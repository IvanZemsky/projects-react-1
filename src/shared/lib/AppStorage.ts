export class AppStorage {
   public static get = <T>(key: string): T | null => {
      const response = localStorage.getItem(key) || null 
      if (response) {
         return JSON.parse(response) as T
      } else {
         return null
      }
   }

   public static set = <T>(key: string, value: T): T | null | void => {
      try {
         localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
         return null
      }
   }
}