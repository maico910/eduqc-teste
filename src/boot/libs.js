import axios from 'axios'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const api = axios.create({ baseURL: 'https://public-dev-teste.dev.eduqc.com.br/' })

export default ({ app }) => {
  dayjs.extend(customParseFormat)
  app.config.globalProperties.$dayjs = dayjs
  app.config.globalProperties.$api = axios
}

export { api }
