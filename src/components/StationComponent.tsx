import * as React from "react";
import {Avatar, Card, DataTable, Chip, Title} from "react-native-paper";
import {Station} from "../models/Station";
import {View} from "react-native";

interface Props {
    station: Station;
}

interface State {
}

export class StationComponent extends React.Component<Props, State> {
    readonly state = {
    }

    render() {
        const resources = this.props.station.ResourceHandler.r;
        const production = this.props.station.ResourceHandler.p;
        return (
            <Card style={{margin: 10}}>
                <Card.Title
                    title={this.props.station.Name}
                    left={(props: any) => <Avatar.Icon {...props} icon={`numeric-${this.props.station.Level + 1}-circle`}/>}/>
                <Card.Content>
                    <Title>Resources</Title>
                    <View style={{flexDirection: "row"}}>
                        <Chip icon="square">{resources.Metals}</Chip>
                        <Chip icon="cloud">{resources.Gases}</Chip>
                        <Chip icon="diamond-stone">{resources.Crystals}</Chip>
                        <Chip icon="account-group">{resources.Deuterium}</Chip>
                    </View>
                    <Title>Production</Title>
                    <View style={{flexDirection: "row"}}>
                        <Chip icon="square">{production.Metals}/hr</Chip>
                        <Chip icon="cloud">{production.Gases}/hr</Chip>
                        <Chip icon="diamond-stone">{production.Crystals}/hr</Chip>
                    </View>
                   <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>Position</DataTable.Cell>
                            <DataTable.Cell>[{this.props.station.Position.Q}, {this.props.station.Position.R}]</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Influence Yield</DataTable.Cell>
                            <DataTable.Cell>{this.props.station.InfluenceYield}</DataTable.Cell>
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