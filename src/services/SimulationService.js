import { api } from '../boot/libs'

export default {
  getSimulations() {
    return api.get('/simulation', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    })
  }
}
