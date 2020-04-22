import * as React from "react";
import {PersistentNotification} from "../models/notifications";
import {Avatar, Button, Card, DataTable, Text} from "react-native-paper";
import moment from "moment";
import {cleanNotificationType, notifAttrs, notifIconColor} from "../utils/notifications";
import {PersistentNotificationType} from "../models/PersistentNotificationType";
import {HexIndex} from "../models/models";

interface Props {
    notification: PersistentNotification;
    onDismiss(notificationIds: number[]): Promise<void>;
}



const NotifData = ({notification}: {notification: PersistentNotification}) => {
    if (notification.$type === PersistentNotificationType.SolarFlaresDiscoveredNotification) {
        return (
            <DataTable>
                {notification.coordinates.map((hex: HexIndex, idx: number) => (
                <DataTable.Row key={idx}>
                    <DataTable.Cell>position</DataTable.Cell>
                    <DataTable.Cell>[{hex.Q}, {hex.R}]</DataTable.Cell>
                </DataTable.Row>
                ))}
            </DataTable>
        )
    }
    else {
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
}

interface State {
    dismissing: boolean;
}

export class Notification extends React.Component<Props, State> {
    readonly state = {
        dismissing: false
    }

    handlePressDismiss = async () => {
        this.setState({dismissing: true});
        await this.props.onDismiss([this.props.notification.id]);
        this.setState({dismissing: false});
    }

    render() {
        const date = new Date(this.props.notification.dateCreated);
        const [icon, color] = notifIconColor(this.props.notification);
        return (
            <Card style={{margin: 10}}>
                <Card.Title
                    title={cleanNotificationType(this.props.notification.$type)}
                    subtitle={`${date.toLocaleString()} (~${moment(date).fromNow()})`}
                    left={(props: any) => <Avatar.Icon {...props} icon={icon} color={color}/>}/>
                <Card.Content>
                    <NotifData notification={this.props.notification}/>
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={this.handlePressDismiss}
                        loading={this.state.dismissing}
                    >
                        Dismiss
                    </Button>
                </Card.Actions>
            </Card>
        );
    }
};