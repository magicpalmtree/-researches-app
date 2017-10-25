/**
 * Mock api for idenpendet development of Map view
 *
 * TODO: remove when changes are incorporate into the real api
 *
 */

export default {

    /**
     * Returns a set of predefined findings to test the map view functionality.
     *
     * @param data
     * @returns {Promise.<{data: [*,*,*,*,*]}>}
     */
    async getFindings(data) {
        return {
            'data': [
                {
                    "_id": "5939a787c05735d3dc12378d",
                    "Lokalita": "Stromovka, České Budějovice",
                    "type": "AB",
                    "Kraj": "12345",
                    "Okres": "CB",
                    "Katastr": "Katastr2",
                    "NadmorskaVyska": "1134",
                    "ZkoumanaPlocha": "Plocha1",
                    "Archeolog": "Jan Novak",
                    "RokVyzkumu": "2017-05-04T00:00:00.000Z",
                    "Instituce": "Instituce1",
                    "KoordinatyXyz": "56-45-53-21",
                    "Mapa": "Mapa1",
                    "Sonda": "Sonda2",
                    "Sektor": "Sektor1",
                    "Objekt": "Objekt1",
                    "TypObjektu": "Typ objektu1",
                    "Vrstva": "Vrstva1",
                    "Hloubka": "98-345",
                    "DataceObdobi": "Datobd14",
                    "DataceKultura": "Datkultr2",
                    "TypNaleziste": "Typ naleziste",
                    "Reference": "Reference1",
                    "TypOdberu": "Odber",
                    "InventarizacniCislo": "1234567",
                    "Poznamka": "Lorem ipsum",
                    "gps" : {
                        "lat": 48.971727,
                        "lng": 14.457506,
                    },
                    "dynam": {
                        "Vzorek": "vz1",
                        "BotanickyDruh": "1",
                        "Botanik": "Milos Novak",
                        "Objem": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc12378e",
                    "Lokalita": "Stromovka, České Budějovice",
                    "type": "AZ",
                    "Kraj": "12345",
                    "Okres": "CB",
                    "Katastr": "Katastr2",
                    "NadmorskaVyska": "1134",
                    "ZkoumanaPlocha": "Plocha1",
                    "Archeolog": "Jan Novak",
                    "RokVyzkumu": "2017-05-04T00:00:00.000Z",
                    "Instituce": "Instituce1",
                    "KoordinatyXyz": "56-45-53-21",
                    "Mapa": "Mapa1",
                    "Sonda": "Sonda2",
                    "Sektor": "Sektor1",
                    "Objekt": "Objekt1",
                    "TypObjektu": "Typ objektu1",
                    "Vrstva": "Vrstva1",
                    "Hloubka": "98-345",
                    "DataceObdobi": "Datobd14",
                    "DataceKultura": "Datkultr2",
                    "TypNaleziste": "Typ naleziste",
                    "Reference": "Reference1",
                    "TypOdberu": "Odber",
                    "InventarizacniCislo": "1234567",
                    "Poznamka": "Lorem ipsum",
                    "gps" : {
                        "lat": 48.970487,
                        "lng": 14.454953,
                    },
                    "dynam": {
                        "Cislo": "001",
                        "ZoologickyDruh": "2",
                        "Archezoolog": "Milos Jarda",
                        "NISP": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc12378f",
                    "Lokalita": "Světlá nad Sázavou, Pod mostem přes Sázavu",
                    "type": "AB",
                    "Kraj": "12345",
                    "Okres": "CB",
                    "Katastr": "Katastr2",
                    "NadmorskaVyska": "1134",
                    "ZkoumanaPlocha": "Plocha1",
                    "Archeolog": "Jan Novak",
                    "RokVyzkumu": "2017-05-04T00:00:00.000Z",
                    "Instituce": "Instituce1",
                    "KoordinatyXyz": "56-45-53-21",
                    "Mapa": "Mapa1",
                    "Sonda": "Sonda2",
                    "Sektor": "Sektor1",
                    "Objekt": "Objekt1",
                    "TypObjektu": "Typ objektu1",
                    "Vrstva": "Vrstva1",
                    "Hloubka": "98-345",
                    "DataceObdobi": "Datobd14",
                    "DataceKultura": "Datkultr2",
                    "TypNaleziste": "Typ naleziste",
                    "Reference": "Reference1",
                    "TypOdberu": "Odber",
                    "InventarizacniCislo": "1234567",
                    "Poznamka": "Lorem ipsum",
                    "gps" : {
                        "lat": 49.665961,
                        "lng": 15.405384,
                    },
                    "dynam": {
                        "Vzorek": "vz1",
                        "BotanickyDruh": "1",
                        "Botanik": "Milos Novak",
                        "Objem": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc123790",
                    "Lokalita": "49.911501, 15.045100",
                    "type": "AZ",
                    "Kraj": "12345",
                    "Okres": "CB",
                    "Katastr": "Katastr2",
                    "NadmorskaVyska": "1134",
                    "ZkoumanaPlocha": "Plocha1",
                    "Archeolog": "Jan Novak",
                    "RokVyzkumu": "2017-05-04T00:00:00.000Z",
                    "Instituce": "Instituce1",
                    "KoordinatyXyz": "56-45-53-21",
                    "Mapa": "Mapa1",
                    "Sonda": "Sonda2",
                    "Sektor": "Sektor1",
                    "Objekt": "Objekt1",
                    "TypObjektu": "Typ objektu1",
                    "Vrstva": "Vrstva1",
                    "Hloubka": "98-345",
                    "DataceObdobi": "Datobd14",
                    "DataceKultura": "Datkultr2",
                    "TypNaleziste": "Typ naleziste",
                    "Reference": "Reference1",
                    "TypOdberu": "Odber",
                    "InventarizacniCislo": "1234567",
                    "Poznamka": "Lorem ipsum",
                    "gps" : {
                        "lat": 49.911501,
                        "lng": 15.045100,
                    },
                    "dynam": {
                        "NISP": "45",
                        "Archezoolog": "Milos Jarda",
                        "ZoologickyDruh": "2",
                        "Cislo": "001"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc123791",
                    "Lokalita": "49.912587, 15.034720",
                    "type": "AB",
                    "Kraj": "12345",
                    "Okres": "CB",
                    "Katastr": "Katastr2",
                    "NadmorskaVyska": "1134",
                    "ZkoumanaPlocha": "Plocha1",
                    "Archeolog": "Jan Novak",
                    "RokVyzkumu": "2017-05-04T00:00:00.000Z",
                    "Instituce": "Instituce1",
                    "KoordinatyXyz": "56-45-53-21",
                    "Mapa": "Mapa1",
                    "Sonda": "Sonda2",
                    "Sektor": "Sektor1",
                    "Objekt": "Objekt1",
                    "TypObjektu": "Typ objektu1",
                    "Vrstva": "Vrstva1",
                    "Hloubka": "98-345",
                    "DataceObdobi": "Datobd14",
                    "DataceKultura": "Datkultr2",
                    "TypNaleziste": "Typ naleziste",
                    "Reference": "Reference1",
                    "TypOdberu": "Odber",
                    "InventarizacniCislo": "1234567",
                    "Poznamka": "Lorem ipsum",
                    "gps" : {
                        "lat": 49.912587,
                        "lng": 15.034720,
                    },
                    "dynam": {
                        "Objem": "45",
                        "Botanik": "Milos Novak",
                        "BotanickyDruh": "1",
                        "Vzorek": "vz1"
                    }
                }
            ]
        };
    },

    /**
     * Returns a dictionary of used findings' types, keyed by its unique identifier.
     * Format:
     *
     *  {
     *      <string, unique identifier> : {
     *          name: <string, Type name>,
     *          color: <string, Hex color value with leading hash>,
     *          mapIcon: <string, Map icon URL>,
     *      },
     *      ...
     *  }
     *
     *
     * @returns {Promise.<{data: {AZ: {name: string}, AB: {name: string}}}>}
     */
    async getFindingTypes() {

        // TODO: Recomanded to use Material Design color pallete future in editation of finding types
        // see https://material.io/guidelines/style/color.html#color-color-palette

        return {
            'data': {
                "AZ": {
                    "name": "Archeozoologie",
                    "color": "#9C27B0",
                    "mapIcon": "http://maps.google.com/mapfiles/kml/paddle/purple-blank_maps.png"   // TODO: possibly load locally? Copyright issues?
                },
                "AB": {
                    "name": "Archeobotanika",
                    "color": "#8BC34A",
                    "mapIcon": "http://maps.google.com/mapfiles/kml/paddle/grn-blank_maps.png"
                },
            }
        }
    },


    // unimplemented interface stubs

    async createFinding(finding) {
        console.error("Not implemented in this mock");
        return
    },

    async deleteFinding(id) {
        console.error("Not implemented in this mock");
        return
    },

    async updateFinding(id, finding) {
        console.error("Not implemented in this mock");
        return
    },

    async getFindingSchemas() {
        console.error("Not implemented in this mock");
        return
    },

    async createFindingSchema(schema) {
        console.error("Not implemented in this mock");
        return
    }
}
