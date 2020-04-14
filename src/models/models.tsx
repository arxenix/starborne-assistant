export enum RoleType
{
    // Token: 0x04000E07 RID: 3591
    None,
    // Token: 0x04000E08 RID: 3592
    User,
    // Token: 0x04000E09 RID: 3593
    Tester,
    // Token: 0x04000E0A RID: 3594
    Developer,
    // Token: 0x04000E0B RID: 3595
    GameMaster,
    // Token: 0x04000E0C RID: 3596
    Administrator,
    // Token: 0x04000E0D RID: 3597
    Server,
    // Token: 0x04000E0E RID: 3598
    LoadTester,
    // Token: 0x04000E0F RID: 3599
    Website,
    // Token: 0x04000E10 RID: 3600
    Moderator
}

export enum EmpireStatus
{
    // Token: 0x0400160F RID: 5647
    Unknown,
    // Token: 0x04001610 RID: 5648
    Other,
    // Token: 0x04001611 RID: 5649
    Active = 10,
    // Token: 0x04001612 RID: 5650
    Destroyed = 20,
    // Token: 0x04001613 RID: 5651
    Culled = 30,
    // Token: 0x04001614 RID: 5652
    RemovedByAdmin = 40
}

export enum ServerStatus
{
    // Token: 0x04001668 RID: 5736
    Unknown,
    // Token: 0x04001669 RID: 5737
    Initializing,
    // Token: 0x0400166A RID: 5738
    Up,
    // Token: 0x0400166B RID: 5739
    Down,
    // Token: 0x0400166C RID: 5740
    UnderMaintenance,
    // Token: 0x0400166D RID: 5741
    Complete,
    // Token: 0x0400166E RID: 5742
    Upcoming
}

export enum ServerType
{
    // Token: 0x04001822 RID: 6178
    Standard,
    // Token: 0x04001823 RID: 6179
    Tournament,
    // Token: 0x04001824 RID: 6180
    Practice
}


export enum ClientType {
    // Token: 0x040016B4 RID: 5812
    Unknown,
    // Token: 0x040016B5 RID: 5813
    Interface,
    // Token: 0x040016B6 RID: 5814
    Server,
    // Token: 0x040016B7 RID: 5815
    Game,
    // Token: 0x040016B8 RID: 5816
    CompanionApp,
    // Token: 0x040016B9 RID: 5817
    Launcher
}

export interface HexIndex {
    Q: number;
    R: number;
}

export interface EnterGameModel {
    PlayerIdGlobal: string;
    PlayerJoinToken: string;
    IsBot: boolean;
    VersionValue: string;
    PlayerJoinRole: RoleType;
    ClientType: ClientType;
}

export interface GameActionResult {
    Message: string;
    IsSuccess: boolean;
}