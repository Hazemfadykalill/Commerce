

export interface Categories {
    results: number
    metadata: Metadata
    data: categoryList[]
  }
  
  export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
  }
  
  export interface categoryList {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
  }
  