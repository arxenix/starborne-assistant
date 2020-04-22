import * as React from "react";
import {Avatar, Card, DataTable, Chip, Title} from "react-native-paper";
import {DynamicResource, Station} from "../models/Station";
import {View} from "react-native";
import {extrapolateResources} from "../utils/utils";

interface Props {
    station: Station;
}

interface State {
    resources: DynamicResource;
}

export class StationComponent extends React.Component<Props, State> {
    readonly state = {
        resources: this.props.station.ResourceHandler.r
    }
    //TODO - extrapolate resources and update every minute?

    handle?: NodeJS.Timeout;
    componentDidMount(): void {
        this.handle = setInterval(() => {
            this.setState({resources: extrapolateResources(this.props.station.ResourceHandler)});
        }, 60000);
    }

    componentWillUnmount(): void {
        if (this.handle)
            clearInterval(this.handle)
    }

    render() {
        const resources = this.state.resources;
        const production = this.props.station.ResourceHandler.p;
        return (
            <Card style={{margin: 10}}>
                <Card.Title
                    title={this.props.station.Name}
                    left={(props: any) => <Avatar.Icon {...props} icon={`numeric-${this.props.station.Level + 1}-circle`}/>}/>
                <Card.Content>
                    <Title>Resources</Title>
                    <View style={{flexDirection: "row"}}>
                        <Chip icon="square">{resources.Metals.toFixed(3)}</Chip>
                        <Chip icon="cloud">{resources.Gases.toFixed(3)}</Chip>
                        <Chip icon="diamond-stone">{resources.Crystals.toFixed(3)}</Chip>
                        <Chip icon="account-group">{resources.Deuterium.toFixed(3)}</Chip>
                    </View>
                    <Title>Production</Title>
                    <View style={{flexDirection: "row"}}>
                        <Chip icon="square">{production.Metals.toFixed(3)}/hr</Chip>
                        <Chip icon="cloud">{production.Gases.toFixed(3)}/hr</Chip>
                        <Chip icon="diamond-stone">{production.Crystals.toFixed(3)}/hr</Chip>
                    </View>
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>Position</DataTable.Cell>
                            <DataTable.Cell>[{this.props.station.Position.Q}, {this.props.station.Position.R}]</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Influence Yield</DataTable.Cell>
                            <DataTable.Cell>{this.props.station.InfluenceYield.toFixed(3)}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Fleets Serviced</DataTable.Cell>
                            <DataTable.Cell>{this.props.station.TotalFleetsServiced}/{this.props.station.StackingLimit}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Claim Radius</DataTable.Cell>
                            <DataTable.Cell>{this.props.station.ClaimRadius}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Claim Strength</DataTable.Cell>
                            <DataTable.Cell>{this.props.station.ClaimStrength}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Resource capacity</DataTable.Cell>
                            <DataTable.Cell>{this.props.station.ResourceHandler.c}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Card.Content>
            </Card>
        );
    }
}