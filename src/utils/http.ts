import ReactApi from 'use-react-api'

const reactApi = ReactApi()

export default reactApi
export const { useApi, useApiOnce, createSuspenseApi } = reactApi
