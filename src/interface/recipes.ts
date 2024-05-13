export interface Recipe {
  name: string
  thumbnail: File[]
  category: string
  popular: boolean
  description: string
}

export interface Recipes {
  tr: Recipe
  en: Recipe
}
