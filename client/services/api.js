import axios from 'axios'

import { apiPrefix } from '../app/App.jsx'
import { apiPrefixSchemas } from '../app/App.jsx'

export default {
    async getFindings(data) {
        return await axios.get(apiPrefix, {data: data})
    },

    async createFinding(finding) {
        return await axios.post(apiPrefix, finding)
    },

    async deleteFinding(id) {
      return await axios.delete(apiPrefix + id)
    },

    async updateFinding(id, finding) {
        return await axios.put(apiPrefix + id, finding)
    },

    async getFindingSchemas() {
        return await axios.get(apiPrefixSchemas)
    },

    async createFindingSchema(schema) {
        return await axios.post(apiPrefixSchemas, schema)
    }
}