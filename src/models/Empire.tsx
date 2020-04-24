import {HexIndex} from "./models";

export interface Empire {
    Id: number;
    EmpireName: string;
    AllianceId?: number;

    HexesDropped: HexIndex[];
    InfrastructurePointsBase: number;
    InfrastructurePointsReserved: number;
    InfrastructurePointsReservedReleaseTime: string;
    OperativeRandomFactor: number;
    InfrastructurePointsSpent: number;
}