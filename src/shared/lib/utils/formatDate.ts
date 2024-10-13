export const formatDate = (dateCode: string | number): string => {
   const date = new Date(dateCode)
   const year = date.getFullYear()
   const month = date.getMonth() + 1
   const day = date.getDate()

   return `${day}.${month}.${year}`
}