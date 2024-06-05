import useApi from '@/utils/api'

class ApiServices {
  __baseUrl = import.meta.env.VITE_BASE_URL
  __recipesRoute = '/app/api/recipes'

  async getAll(): Promise<any> {
    try {
      const response = await useApi.get(this.__baseUrl + this.__recipesRoute)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getById(id: string): Promise<any> {
    try {
      const response = await useApi.get(`/api/${id}`)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async create(data: any): Promise<any> {
    try {
      const response = await useApi.post('/api', data)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async update(id: string, data: any): Promise<any> {
    try {
      const response = await useApi.put(`/api/${id}`, data)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const response = await useApi.delete(`/api/${id}`)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async get_all_categories(): Promise<any> {
    try {
      const response = await useApi.get(this.__baseUrl + '/admin/api/all/categories')
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }
}

export default new ApiServices()
