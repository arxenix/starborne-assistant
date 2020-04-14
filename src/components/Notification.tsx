import * as React from "react";
import {PersistentNotification, PersistentNotificationCategory} from "../models/notifications";
import {Card, Button, Avatar, DataTable} from "react-native-paper";
import {PersistentNotificationType} from "../models/PersistentNotificationType";
import moment from "moment";

interface Props {
    notification: PersistentNotification;
}

function cleanNotificationType(typeStr: string) {
    typeStr = typeStr.split(",")[0].split(".").slice(-1)[0];
    typeStr = typeStr.replace("Notification", "");
    typeStr = typeStr.replace(/([A-Z]+)/g, ' $1').trim()
    return typeStr ? typeStr : "Unknown";
}

function iconFromType(type: PersistentNotificationType) {
    switch (type) {
        case PersistentNotificationType.SolarFlareDiscoveredNotification:
            return "white-balance-sunny"
        default:
            return "alert-circle"
    }
}


const NotifData = ({notification}: Props) => {
    const attrs: [string, string][] = [];

    for(const [key, valUnk] of Object.entries(notification as any)) {
        const val = valUnk as any;
        if (key==="category") {
            attrs.push([key, PersistentNotificationCategory[val]]);
        }
        /*
        else if (key==="dateCreated") {
            attrs.push([key, moment(new Date(val)).fromNow()])
        }
        */
        else if (val.hasOwnProperty("$type")){
            if (val["$type"] === "HexIndex") {
                attrs.push([key, `[${val.q}, ${val.r}]`])
            }
            else {
                attrs.push([key, JSON.stringify(val)])
            }
        }
        else if (["$type", "id", "empireId", "dateCreated"].indexOf(key) === -1) {
            attrs.push([key, JSON.stringify(val)])
        }
    }

    return (
        <DataTable>
            {attrs.map((kvPair, idx) =>
                <DataTable.Row key={idx}>
                    <DataTable.Cell>{kvPair[0]}</DataTable.Cell>
                    <DataTable.Cell>{kvPair[1]}</DataTable.Cell>
                </DataTable.Row>
            )}
        </DataTable>
    );
}


export const Notification = ({notification}: Props) => {
    const date = new Date(notification.dateCreated);
    return (
        <Card style={{margin: 10}}>
            <Card.Title
                title={cleanNotificationType(notification.$type)}
                subtitle={`${date.toLocaleString()} (~${moment(date).fromNow()})`}
                left={(props: any) => <Avatar.Icon {...props} icon={iconFromType(notification.$type)} />} />
            <Card.Content>
                <NotifData notification={notification}/>
            </Card.Content>
            <Card.Actions>
                <Button>Dismiss</Button>
            </Card.Actions>
        </Card>
    );
};