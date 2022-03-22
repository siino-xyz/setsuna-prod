export default interface Articles {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title:string
  date: string
  body: string
  categories: string
  eye_catch: {
      url:string
      height: number
      width: number
  },
  
}

