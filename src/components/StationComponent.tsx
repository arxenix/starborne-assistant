import * as React from "react";
import {Avatar, Card, DataTable} from "react-native-paper";
import {Station} from "../models/Station";

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
        const resourcesStr = `${resources.Metals} Metal, ${resources.Gases} Gas, ${resources.Crystals} Crystal, ${resources.Deuterium} Labor`;
        const production = this.props.station.ResourceHandler.p;
        const productionStr = `${production.Metals} Metal, ${production.Gases} Gas, ${production.Crystals} Crystal`;

        return (
            <Card style={{margin: 10}}>
                <Card.Title
                    title={this.props.station.Name}
                    left={(props: any) => <Avatar.Icon {...props} icon={`numeric-${this.props.station.Level}-circle`}/>}/>
                <Card.Content>
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
                        <DataTable.Row>
                            <DataTable.Cell>Resources</DataTable.Cell>
                            <DataTable.Cell>{resourcesStr}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Production</DataTable.Cell>
                            <DataTable.Cell>{productionStr}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Card.Content>
            </Card>
        );
    }
}