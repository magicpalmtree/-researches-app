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
                    "DOC_TYPE": "AB",
                    "VLASTNIK": "Doktor",
                    "PRISTUP":[],
                    "Sample_ID":"Přeslyčka No.5",
                    "Sada":"Výjezd botaniků 2",
                    "Taxonomie": "Tax1",
                    "Mnozstvi": 3,
                    "DatumNalezu": "2017-05-04T00:00:00.000Z",
                    "Nalezce": "Milos Novak",
                    "Lokalita": "Stromovka, České Budějovice",
                    "gps" : [{
                        "lat": 48.971727,
                        "lng": 14.457506,
                    }],
                    "Poznamka": "Lorem ipsum",
                    "tag":[],
                    "dynam": {
                        "Reference": "Reference1",
                        "Kraj": "12345",
                        "Okres": "CB",
                        "Katastr": "Katastr2",
                        "NadmorskaVyska": "1134",
                        "ZkoumanaPlocha": "Plocha1",
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
                        "TypOdberu": "Odber",
                        "Vzorek": "vz1",
                        "StavZachovani": "1",
                        "Objem": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc12378e",
                    "DOC_TYPE": "AZ",
                    "VLASTNIK": "Doktor",
                    "PRISTUP":[],
                    "Sample_ID":"Žabák 234",
                    "Sada":"Výjezd zoologů 2",
                    "Taxonomie": "Tax2",
                    "Mnozstvi": 1,
                    "DatumNalezu": "2017-05-04T00:00:00.000Z",
                    "Nalezce": "Jarda Novak",
                    "Lokalita": "Stromovka, České Budějovice",
                    "gps" : [{
                        "lat": 48.970487,
                        "lng": 14.454953,
                    }],
                    "Poznamka": "Lorem ipsum",
                    "tag":[
                        {"text":"Taxonomy missing","color":"danger"}     // bootstrap standard colors
                    ],
                    "dynam": {
                        "Reference": "Reference1",
                        "Kraj": "12345",
                        "Okres": "CB",
                        "Katastr": "Katastr2",
                        "NadmorskaVyska": "1134",
                        "ZkoumanaPlocha": "Plocha1",
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
                        "TypOdberu": "Odber",
                    }
                },
                {
                    "_id": "5939a787c05735d3dc12378f",
                    "DOC_TYPE": "AB",
                    "VLASTNIK": "Doktor",
                    "PRISTUP":[],
                    "Sample_ID":"Lopuch 22",
                    "Sada":"Výjezd botaniků 2",
                    "Taxonomie": "Tax3",
                    "Mnozstvi": 10,
                    "DatumNalezu": "2017-05-04T00:00:00.000Z",
                    "Nalezce": "Milos Novak",
                    "Lokalita": "Světlá nad Sázavou, Pod mostem přes Sázavu",
                    "gps" : [{
                        "lat": 49.665961,
                        "lng": 15.405384,
                    }],
                    "Poznamka": "Lorem ipsum",
                    "tag":[
                        {"text":"Coarse location","color":"warning"}     // bootstrap standard colors
                    ],
                    "dynam": {
                        "Reference": "Reference1",
                        "Kraj": "12345",
                        "Okres": "CB",
                        "Katastr": "Katastr2",
                        "NadmorskaVyska": "1134",
                        "ZkoumanaPlocha": "Plocha1",
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
                        "TypOdberu": "Odber",
                        "Vzorek": "vz1",
                        "StavZachovani": "1",
                        "Objem": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc123790",
                    "DOC_TYPE": "AZ",
                    "VLASTNIK": "Doktor",
                    "PRISTUP":[],
                    "Sample_ID":"Archeopterix kost",
                    "Sada":"Paleontologické praktikum 2017",
                    "Taxonomie": "Tax4",
                    "Mnozstvi": 1,
                    "DatumNalezu": "2017-05-04T00:00:00.000Z",
                    "Nalezce": "Ales Novak",
                    "Lokalita": "49.911501, 15.045100",
                    "gps" : [{
                        "lat": 49.911501,
                        "lng": 15.045100,
                    }],
                    "Poznamka": "Lorem ipsum",
                    "tag":[
                        {"text":"Coarse location","color":"warning"},     // bootstrap standard colors
                        {"text":"Verified taxonomy","color":"success"},     // bootstrap standard colors
                    ],
                    "dynam": {
                        "Reference": "Reference1",
                        "Kraj": "12345",
                        "Okres": "CB",
                        "Katastr": "Katastr2",
                        "NadmorskaVyska": "1134",
                        "ZkoumanaPlocha": "Plocha1",
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
                        "TypOdberu": "Odber",
                    }
                },
                {
                    "_id": "5939a787c05735d3dc123791",
                    "DOC_TYPE": "AB",
                    "VLASTNIK": "Doktor",
                    "PRISTUP":[],
                    "Sample_ID":"Sinice 445",
                    "Sada":"Algologický seminář - Skupina 1",
                    "Taxonomie": "Tax5",
                    "Mnozstvi": 15,
                    "DatumNalezu": "2017-05-04T00:00:00.000Z",
                    "Nalezce": "Milos Novak",
                    "Lokalita": "49.912587, 15.034720",
                    "gps" : [
                        {"lat": 49.910907,"lng": 15.036145},
                        {"lat": 49.912587,"lng": 15.034720},
                        {"lat": 49.914627,"lng": 15.035994},
                        {"lat": 49.914747,"lng": 15.039031},
                        {"lat": 49.911543,"lng": 15.041123},
                    ],
                    "Poznamka": "Lorem ipsum",
                    "tag":[],
                    "dynam": {
                        "Reference": "Reference1",
                        "Kraj": "12345",
                        "Okres": "CB",
                        "Katastr": "Katastr2",
                        "NadmorskaVyska": "1134",
                        "ZkoumanaPlocha": "Plocha1",
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
                        "TypOdberu": "Odber",
                        "Vzorek": "vz1",
                        "StavZachovani": "1",
                        "Objem": "45",
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
                    "mapIcon": "http://maps.google.com/mapfiles/kml/paddle/orange-blank_maps.png",   // TODO: possibly load locally? Copyright issues?
                    "mapPolygonIcon": "http://maps.google.com/mapfiles/kml/paddle/orange-diamond_maps.png"
                },
                "AB": {
                    "name": "Archeobotanika",
                    "color": "#8BC34A",
                    "mapIcon": "http://maps.google.com/mapfiles/kml/paddle/grn-blank_maps.png",
                    "mapPolygonIcon": "http://maps.google.com/mapfiles/kml/paddle/grn-diamond_maps.png"
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
