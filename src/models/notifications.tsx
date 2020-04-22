import {PersistentNotificationType} from "./PersistentNotificationType";

export interface MarkNotificationAsReadBindingModel {
    NotificationIds: number[];
}

export interface PersistentNotification {
    "$type": PersistentNotificationType;
    category: PersistentNotificationCategory;
    id: number; //unique id
    empireId: number;
    dateCreated: string;
    [attr: string]: any;
}

export enum PersistentNotificationCategory
{
    // Token: 0x04000536 RID: 1334
    None,
    // Token: 0x04000537 RID: 1335
    Tutorial,
    // Token: 0x04000538 RID: 1336
    Attacks,
    // Token: 0x04000539 RID: 1337
    Achievements,
    // Token: 0x0400053A RID: 1338
    DailyChallenges,
    // Token: 0x0400053B RID: 1339
    EmpireEvents,
    // Token: 0x0400053C RID: 1340
    DailyRewards,
    // Token: 0x0400053D RID: 1341
    ProgressRewards,
    // Token: 0x0400053E RID: 1342
    PolicyResearch,
    // Token: 0x0400053F RID: 1343
    Status,
    // Token: 0x04000540 RID: 1344
    GlobalEvents,
    // Token: 0x04000541 RID: 1345
    Missions,
    // Token: 0x04000542 RID: 1346
    AllianceAndCoalition,
    // Token: 0x04000543 RID: 1347
    Reports,
    // Token: 0x04000544 RID: 1348
    Miscellaneous,
    // Token: 0x04000545 RID: 1349
    TutorialSequence
}
