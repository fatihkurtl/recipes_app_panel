export interface Recipe {
  title: string
  thumbnail: File[]
  category: string
  popular: boolean
  description: string
}

export interface Recipes {
  tr: Recipe
  en: Recipe
}
