import {DynamicResource, ResourceHandler, Station} from "../models/Station";
import {HexIndex} from "../models/models";

function deserializeDatetime(data: any): Date {
    const mask = 0x4000000000000060;
    //const mask = 0x4000000000000000;
    const ticks = data - mask;

    const base = 621355968000000000;
    const newTicks = ticks - base;
    if (newTicks < 0) {
        return new Date(0);
    }
    else {
        return new Date(Math.floor(newTicks/10000000));
    }
}

function deserializeHexIndex(data: any): HexIndex {
    return {
        Q: data[0],
        R: data[1]
    }
}

function deserializeDynamicResource(data: any): DynamicResource {
    return {
        Deuterium: data[0],
        Metals: data[1],
        Gases: data[2],
        Crystals: data[3]
    }
}

function deserializeResourceHandler(data: any): ResourceHandler {
    return {
        r: deserializeDynamicResource(data[0]),
        c: data[1],
        p: deserializeDynamicResource(data[2]),
        t: deserializeDatetime(data[3]).toString()
    }
}

function deserializeStation(data: any): Station {
    return {
        Id: data[0],
        EmpireId: data[1],
        Name: data[2],
        Position: deserializeHexIndex(data[3]),
        Level: data[4],
        //...
        ActiveDeceptionType: data[9],
        Tactic: data[10],
        TacticLastChangedDate: deserializeDatetime(data[11]).toString(), //TODO int time to str
        ClaimStrength: data[12],
        ClaimRadius: data[13],
        StackingLimit: data[14],
        TotalFleetsServiced: data[15],
        ResourceHandler: deserializeResourceHandler(data[16]),
        // ...
        ScanRadius: data[24],
        ScanStrength: data[25],
        InfluenceYield: data[26],
        //...
        StationType: data[32],
        // ...
    }
}

export function deserializeStations(data: any[]): Station[] {
    return data.map(d => deserializeStation(d))
}

