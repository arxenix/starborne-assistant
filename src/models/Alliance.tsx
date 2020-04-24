import {HexIndex} from "./models";

export interface Alliance {
    Id: number;
    DateCreated: string;
    Name: string;
    Tag: string;
    LongDescription: string;
    CoalitionId?: number;
    IsOpen: boolean;
    DefaultRoleId: number;
    EmpireId: number;
    FlaggedHexes: HexIndex[];
    HasAppliedOverride: boolean;
    LeaderRoleId: number;
    Members: AllianceMember[];
    MessageOfTheDay: string;
    Relations: {[relationId: number]: AllianceRelationType};
    Roles: {[roleId: number]: AllianceRole};
    SectorId: number;
    Applications: {[applicationId: number]: AllianceApplication};
    AllianceColors: {[x: number]: number};
}

export interface AllianceMember {
    tj: string; // time joined
    eid: number; //empireId
    rid: number; //roleId
}

export enum AllianceRelationType {
    // Token: 0x04000520 RID: 1312
    Neutral,
    // Token: 0x04000521 RID: 1313
    Confederacy,
    // Token: 0x04000522 RID: 1314
    NonAggressionPact,
    // Token: 0x04000523 RID: 1315
    AtWar,
    // Token: 0x04000524 RID: 1316
    Alliance
}

export interface AllianceApplication {
    EmpireId: number;
    Sent: string; //datetime
}

export interface AllianceRole {
    id: number;
    n: string; //name
    d: string; //description
    perms: {[permission: number]: boolean}; //AllianceMemberPermission -> bool
    rdOnly: boolean;
}

export enum AllianceMemberPermission
{
    // Token: 0x040004FF RID: 1279
    None,
    // Token: 0x04000500 RID: 1280
    Chat,
    // Token: 0x04000501 RID: 1281
    EditMotd,
    // Token: 0x04000502 RID: 1282
    ManageProfile,
    // Token: 0x04000503 RID: 1283
    SetRivalry,
    // Token: 0x04000504 RID: 1284
    ColorAlliances,
    // Token: 0x04000505 RID: 1285
    RecruitMembers,
    // Token: 0x04000506 RID: 1286
    ExpelMembers,
    // Token: 0x04000507 RID: 1287
    ManageRoles,
    // Token: 0x04000508 RID: 1288
    FlagPlacement,
    // Token: 0x04000509 RID: 1289
    HangarManagement,
    // Token: 0x0400050A RID: 1290
    BuildStations,
    // Token: 0x0400050B RID: 1291
    ConstructBuildings,
    // Token: 0x0400050C RID: 1292
    ProduceUnits,
    // Token: 0x0400050D RID: 1293
    DockingRestrictions,
    // Token: 0x0400050E RID: 1294
    TransferResources,
    // Token: 0x0400050F RID: 1295
    BuildOutposts,
    // Token: 0x04000510 RID: 1296
    ManageCards,
    // Token: 0x04000511 RID: 1297
    RenameStations,
    // Token: 0x04000512 RID: 1298
    ManageFleets,
    // Token: 0x04000513 RID: 1299
    SeeMovements,
    // Token: 0x04000514 RID: 1300
    ManageAllianceOperations,
    // Token: 0x04000515 RID: 1301
    ManageMapPins,
    // Token: 0x04000516 RID: 1302
    ManageFOBs = 1003
}

