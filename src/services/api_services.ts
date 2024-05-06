import useApi from '@/utils/api'

class ApiServices {
  async getAll(): Promise<any> {
    try {
      const response = await useApi.get('/api')
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
}

export default new ApiServices()
