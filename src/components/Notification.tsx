import * as React from "react";
import {PersistentNotification} from "../models/notifications";
import {Avatar, Button, Card, DataTable, Text} from "react-native-paper";
import moment from "moment";
import {cleanNotificationType, notifAttrs, notifIconColor} from "../utils/notifications";
import {PersistentNotificationType} from "../models/PersistentNotificationType";
import {HexIndex} from "../models/models";
import {Station} from "../models/Station";
import {hexDistance} from "../utils/hex";

interface Props {
    notification: PersistentNotification;
    myStations?: Station[];
    onDismiss(notificationIds: number[]): Promise<void>;
}


interface NotifDataProps {
    notification: PersistentNotification;
    myStations?: Station[];
}

const NotifData = (props: NotifDataProps) => {
    if (props.notification.$type === PersistentNotificationType.SolarFlaresDiscoveredNotification) {
        if (props.myStations) {
            props.notification.coordinates.sort((n1: HexIndex, n2: HexIndex) => {
                const d1 = Math.min(...props.myStations!.map(s => hexDistance(s.Position, n1)));
                const d2 = Math.min(...props.myStations!.map(s => hexDistance(s.Position, n2)));
                return d1 - d2;
            });
        }

        return (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Position</DataTable.Title>
                    <DataTable.Title>Distance to Nearest Station</DataTable.Title>
                </DataTable.Header>

                {props.notification.coordinates.map((hex: HexIndex, idx: number) => (
                <DataTable.Row key={idx}>
                    <DataTable.Cell>[{hex.Q}, {hex.R}]</DataTable.Cell>
                    <DataTable.Cell>
                        {(props.myStations)
                        ? Math.min(...props.myStations.map(s => hexDistance(s.Position, hex)))
                        : "unknown (stations not loaded)"
                        }
                    </DataTable.Cell>
                </DataTable.Row>
                ))}
            </DataTable>
        )
    }
    else {
        const attrs = notifAttrs(props.notification);
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
        let title = cleanNotificationType(this.props.notification.$type);
        if (this.props.notification.$type === PersistentNotificationType.SolarFlaresDiscoveredNotification) {
            const amount = this.props.notification.coordinates.length;
            title = `${amount} Solar Flare${amount > 1 ? "s" : ""} Discovered`;
        }

        return (
            <Card style={{margin: 10}}>
                <Card.Title
                    title={title}
                    subtitle={`${date.toLocaleString()} (~${moment(date).fromNow()})`}
                    left={(props: any) => <Avatar.Icon {...props} icon={icon} color={color}/>}/>
                <Card.Content>
                    <NotifData notification={this.props.notification} myStations={this.props.myStations}/>
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