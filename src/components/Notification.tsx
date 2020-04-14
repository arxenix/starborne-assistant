import * as React from "react";
import {PersistentNotification, PersistentNotificationCategory} from "../models/notifications";
import {Avatar, Button, Card, DataTable} from "react-native-paper";
import moment from "moment";
import {cleanNotificationCategory, cleanNotificationType, notifAttrs, notifIcon} from "../utils/notifications";

interface Props {
    notification: PersistentNotification;
}



const NotifData = ({notification}: Props) => {
    const attrs = notifAttrs(notification);
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
                left={(props: any) => <Avatar.Icon {...props} icon={notifIcon(notification)} />} />
            <Card.Content>
                <NotifData notification={notification}/>
            </Card.Content>
            <Card.Actions>
                <Button>Dismiss</Button>
            </Card.Actions>
        </Card>
    );
};