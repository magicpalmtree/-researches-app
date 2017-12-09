import axios from 'axios'

import { apiPrefix } from '../app/App.jsx'
import { apiPrefixSchemas } from '../app/App.jsx'

export default {
    /**
     * Retrieve findings from db
     * @param data
     * @returns {Promise.<*>}
     */
    async getFindings(data) {
        return await axios.get(apiPrefix, {data: data})
    },

    /**
     * Retrieve a single finding
     * @param id
     * @returns {Promise.<*>}
     */
    async getFinding(id) {
        return await axios.get(apiPrefix + id)
    },

    /**
     * Create a finding
     * @param finding
     * @returns {Promise.<*>}
     */
    async createFinding(finding) {
        return await axios.post(apiPrefix, finding)
    },

    /**
     * Delete a finding
     * @param id
     * @returns {Promise.<*>}
     */
    async deleteFinding(id) {
      return await axios.delete(apiPrefix + id)
    },

    /**
     * Update a finding
     * @param id
     * @param finding
     * @returns {Promise.<*>}
     */
    async updateFinding(id, finding) {
        return await axios.put(apiPrefix + id, finding)
    },

    /**
     * Retrieve finding schemas from db
     * @returns {Promise.<*>}
     */
    async getFindingSchemas() {
        return await axios.get(apiPrefixSchemas)
    },

    /**
     * Create finding schema
     * @param schema
     * @returns {Promise.<*>}
     */
    async createFindingSchema(schema) {
        return await axios.post(apiPrefixSchemas, schema)
    }
}