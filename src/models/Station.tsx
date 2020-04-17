import {HexIndex} from "./models";

export interface Station {
    Id: number;
    EmpireId: number;
    Name: string;
    Position: HexIndex;
    Level: number; //1 through 4?
    ActiveDeceptionType: FleetDeceptionType; //?
    Tactic: CombatTactic;
    TacticLastChangedDate: string;
    ClaimStrength: number;
    ClaimRadius: number;
    StackingLimit: number;
    TotalFleetsServiced: number;
    ResourceHandler: ResourceHandler;
    //UnitProductionQueueMaxLength: Timespan;
    //BuildingProductionQueueMaxLength: Timespan;
    /*
    public Dictionary<UnitType, int> Units { get; set; }
    public Dictionary<int, BuildingSlot> Buildings { get; set; }
    public Dictionary<CardSlotIndex, AttachedCardDataModel> AttachedCardsBySlot { get; set; }
    public List<BuildingProductionDataModel> BuildingConstructionQueue { get; set; }
    public List<UnitProductionDataModel> UnitProductionQueue { get; set; }
    */
    ScanRadius: number;
    ScanStrength: number;
    InfluenceYield: number;
    /*
    public int NPC_TemplateId { get; set; }
    public int NPC_ConquestPointValue { get; set; }
    public string NPC_TooltipTitleKey { get; set; }
    public string NPC_TooltipBodyKey { get; set; }
    public ForwardBaseJumpRequest FOB_ActiveJumpRequest { get; set; }
    */
    StationType: StationDataModelType;
    /*
    public int ZoneId { get; set; }
     */

}

export interface ResourceHandler {
    r: DynamicResource; //resources last updated
    c: number; //Capacity
    p: DynamicResource; //Production
    t: string; //time last updated

    //extrapolate current resources:
    //(this.ResourcesLastUpdated + this.Production * (StarTime.Now - this.TimeLastUpdated).TotalHours).LessThanOrEqualTo(this.Capacity);
}

export interface DynamicResource {
    Deuterium: number; //Labor ...
    Metals: number;
    Gases: number;
    Crystals: number;
}

export enum StationDataModelType {
    // Token: 0x0400138F RID: 5007
    Station,
    // Token: 0x04001390 RID: 5008
    NPCStation,
    // Token: 0x04001391 RID: 5009
    FOBStation,
    // Token: 0x04001392 RID: 5010
    AllianceStation,
    // Token: 0x04001393 RID: 5011
    SuperStructureStation
}

export interface BuildingSlot {
    Id: number;
    BuildingTypeId: number;
    Level: number;
}

export enum FleetDeceptionType {
    // Token: 0x04001229 RID: 4649
    None,
    // Token: 0x0400122A RID: 4650
    Increase,
    // Token: 0x0400122B RID: 4651
    Decrease
}

// Token: 0x0200066B RID: 1643
export enum CombatTactic {
    // Token: 0x0400152B RID: 5419
    None,
    // Token: 0x0400152C RID: 5420
    Pincer,
    // Token: 0x0400152D RID: 5421
    Turtling,
    // Token: 0x0400152E RID: 5422
    Flanking,
    // Token: 0x0400152F RID: 5423
    Unknown
}

export enum UnitType {
    // Token: 0x040001AB RID: 427
    Unknown,
    // Token: 0x040001AC RID: 428
    LightAssault,
    // Token: 0x040001AD RID: 429
    LightDefense,
    // Token: 0x040001AE RID: 430
    HeavyAssault,
    // Token: 0x040001AF RID: 431
    HeavyDefense,
    // Token: 0x040001B0 RID: 432
    Dreadnought,
    // Token: 0x040001B1 RID: 433
    Carrier,
    // Token: 0x040001B2 RID: 434
    Bomber,
    // Token: 0x040001B3 RID: 435
    TroopCarrier,
    // Token: 0x040001B4 RID: 436
    Industrial,
    // Token: 0x040001B5 RID: 437
    Scout,
    // Token: 0x040001B6 RID: 438
    HeavyScout = 12,
    // Token: 0x040001B7 RID: 439
    Commander,
    // Token: 0x040001B8 RID: 440
    Freighter,
    // Token: 0x040001B9 RID: 441
    Harvester
}