import axios from 'axios'

import { apiPrefix } from '../app/App.jsx'
import { apiPrefixSchemas } from '../app/App.jsx'

export default {
    async getFindings(data) {
        return {'data':
            [
                {
                    "_id": "5939a787c05735d3dc12378d",
                    "Lokalita": "Branišovská, České Budějovice",
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
                    "dynam": {
                        "Vzorek": "vz1",
                        "BotanickyDruh": "1",
                        "Botanik": "Milos Novak",
                        "Objem": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc12378e",
                    "Lokalita": "Praha",
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
                    "dynam": {
                        "Cislo": "001",
                        "ZoologickyDruh": "2",
                        "Archezoolog": "Milos Jarda",
                        "NISP": "45"
                    }
                },
                {
                    "_id": "5939a787c05735d3dc12378f",
                    "Lokalita": "Světlá nad Sázavou, Sázavská",
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

    async createFinding(finding) {
        return
    },

    async deleteFinding(id) {
      return
    },

    async updateFinding(id, finding) {
        return
    },

    async getFindingSchemas() {
        return
    },

    async createFindingSchema(schema) {
        return
    }
}