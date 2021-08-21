import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

export default ({ app }) => {
  dayjs.extend(customParseFormat)
  app.config.globalProperties.$dayjs = dayjs
}
