import {PersistentNotification, PersistentNotificationCategory} from "../models/notifications";
import {PersistentNotificationType} from "../models/PersistentNotificationType";
import {Colors} from "react-native-paper";
import {datesInRange} from "./utils";
import {HexIndex} from "../models/models";


export function sortNotificationsByMostRecent(notifications: PersistentNotification[]) {
    notifications.sort((a, b) => {
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
    })
}

export function batchSolarFlareNotifications(notifications: PersistentNotification[]) {
    const newNotifications: PersistentNotification[] = [];
    let solarFlareNotifications: PersistentNotification[] = [];

    const batch = () => {
        newNotifications.push({
            $type: PersistentNotificationType.SolarFlaresDiscoveredNotification,
            dateCreated: solarFlareNotifications[0].dateCreated,
            empireId: solarFlareNotifications[0].empireId,
            category: solarFlareNotifications[0].category,
            id: solarFlareNotifications[0].id,
            coordinates: solarFlareNotifications.map(n => ({
                Q: n.position.q,
                R: n.position.r
            })) as HexIndex[]
        })
        solarFlareNotifications = [];
    }

    for (const notif of notifications) {
        if (notif.$type === PersistentNotificationType.SolarFlareDiscoveredNotification) {
            if (solarFlareNotifications.length > 0) {
                if (!datesInRange(new Date(solarFlareNotifications[0].dateCreated), new Date(notif.dateCreated), 1000*60)) {
                    batch();
                }
            }
            solarFlareNotifications.push(notif);
        }
        else {
            if (solarFlareNotifications.length > 0)
                batch();
            newNotifications.push(notif);
        }
    }
    if (solarFlareNotifications.length > 0)
        batch();
    return newNotifications;
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

function notifIconColorFromCategory(category: PersistentNotificationCategory): [string, string?] {
    let icon: string = "alert-circle";
    let color: string | undefined = undefined;
    switch(category) {
        case PersistentNotificationCategory.Attacks:
            icon = "rocket";
            color = Colors.red500;
            break;
        case PersistentNotificationCategory.AllianceAndCoalition:
            icon = "account-group";
            break;
        case PersistentNotificationCategory.Reports:
            icon = "message-bulleted";
            break;
        case PersistentNotificationCategory.PolicyResearch:
            icon = "test-tube";
            break;
        case PersistentNotificationCategory.DailyRewards:
        case PersistentNotificationCategory.ProgressRewards:
        case PersistentNotificationCategory.Achievements:
            icon = "treasure-chest";
            color = Colors.amber500;
            break;
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
            icon = "alert-circle";
            color = undefined;
            break;
    }
    return [icon, color];
}

export function notifIconColor(notif: PersistentNotification): [string, string?] {
    let [icon, color] = notifIconColorFromCategory(notif.category);
    // special overrides
    switch (notif.$type) {
        case PersistentNotificationType.SolarFlareDiscoveredNotification:
        case PersistentNotificationType.SolarFlaresDiscoveredNotification:
        case PersistentNotificationType.SolarFlareExpiredNotification:
        case PersistentNotificationType.SolarFlareFinishedBySomeoneNotification:
            icon = "star";
            color = Colors.yellow500;
            break;
        case PersistentNotificationType.OneOfYourStationsHasBeenSpiedNotification:
            icon = "sunglasses";
            break;
        default:
            break;
    }
    return [icon, color];
}

export function notifAttrs(notification: PersistentNotification): [string, string][] {
    const attrs: [string, string][] = [];
    const blackList = ["$type", "id", "empireId", "dateCreated", "category"];
    for(const [key, valUnk] of Object.entries(notification as any)) {
        const val = valUnk as any;
        /*if (key==="category") {
            attrs.push([key, cleanNotificationCategory(notification.category)]);
        }
        else */
        if (val.hasOwnProperty("$type")){
            if (val["$type"] === "HexIndex") {
                attrs.push([key, `[${val.q}, ${val.r}]`]);
            }
            else {
                attrs.push([key, JSON.stringify(val)]);
            }
        }
        else if (blackList.indexOf(key) === -1) {
            attrs.push([key, JSON.stringify(val)]);
        }
    }
    return attrs;
}
