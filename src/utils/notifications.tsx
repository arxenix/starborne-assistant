import {PersistentNotification, PersistentNotificationCategory} from "../models/notifications";
import {PersistentNotificationType} from "../models/PersistentNotificationType";


export function sortNotificationsByMostRecent(notifications: PersistentNotification[]) {
    notifications.sort((a, b) =>
    {
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
    })
}

export function cleanNotificationCategory(category: PersistentNotificationCategory) {
    let categoryStr = PersistentNotificationCategory[category];
    categoryStr = categoryStr?.replace(/([A-Z])/g, " $1")?.trim();
    return categoryStr ? categoryStr : "Unknown";
}

export function cleanNotificationType(typeStr: string) {
    typeStr = typeStr.split(",")[0].split(".").slice(-1)[0];
    typeStr = typeStr.replace("Notification", "");
    typeStr = typeStr.replace(/([A-Z])/g, " $1").trim();
    return typeStr ? typeStr : "Unknown";
}

function notifIconFromCategory(category: PersistentNotificationCategory) {
    switch(category) {
        case PersistentNotificationCategory.Attacks:
            return "rocket";
        case PersistentNotificationCategory.AllianceAndCoalition:
            return "account-group";
        case PersistentNotificationCategory.Reports:
            return "message-bulleted";
        case PersistentNotificationCategory.PolicyResearch:
            return "test-tube";
        case PersistentNotificationCategory.DailyRewards:
        case PersistentNotificationCategory.ProgressRewards:
        case PersistentNotificationCategory.Achievements:
            return "treasure-chest";
        case PersistentNotificationCategory.DailyChallenges:
        case PersistentNotificationCategory.TutorialSequence:
        case PersistentNotificationCategory.Tutorial:
        case PersistentNotificationCategory.Miscellaneous:
        case PersistentNotificationCategory.None:
        case PersistentNotificationCategory.EmpireEvents:
        case PersistentNotificationCategory.Status:
        case PersistentNotificationCategory.GlobalEvents:
        case PersistentNotificationCategory.Missions:
        default:
            return "alert-circle";
    }
}

export function notifIcon(notif: PersistentNotification) {
    let icon = notifIconFromCategory(notif.category);
    // special overrides
    switch (notif.$type) {
        case PersistentNotificationType.SolarFlareDiscoveredNotification:
        case PersistentNotificationType.SolarFlareExpiredNotification:
        case PersistentNotificationType.SolarFlareFinishedBySomeoneNotification:
            icon = "star";
            break;
        case PersistentNotificationType.OneOfYourStationsHasBeenSpiedNotification:
            icon = "sunglasses";
            break;
        default:
            break;
    }
    return icon;
}

export function notifAttrs(notification: PersistentNotification): [string, string][] {
    const attrs: [string, string][] = [];
    const blackList = ["$type", "id", "empireId", "dateCreated"];
    for(const [key, valUnk] of Object.entries(notification as any)) {
        const val = valUnk as any;
        if (key==="category") {
            attrs.push([key, cleanNotificationCategory(notification.category)]);
        }
        else if (val.hasOwnProperty("$type")){
            if (val["$type"] === "HexIndex") {
                attrs.push([key, `[${val.q}, ${val.r}]`])
            }
            else {
                attrs.push([key, JSON.stringify(val)])
            }
        }
        else if (blackList.indexOf(key) === -1) {
            attrs.push([key, JSON.stringify(val)])
        }
    }
    return attrs
}
