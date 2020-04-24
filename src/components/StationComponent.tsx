import * as React from "react";
import {Avatar, Card, DataTable, Chip, Title, Text, Caption} from "react-native-paper";
import {DynamicResource, Station} from "../models/Station";
import {Image, ImageSourcePropType, View} from "react-native";
import {extrapolateResources, formatResourceAmount} from "../utils/utils";
import gasIcon from "../../assets/starborne/icons/Colored_Icons_Resources_Gas_01.png";
import metalIcon from "../../assets/starborne/icons/Colored_Icons_Resources_Metal_01.png";
import crystalIcon from "../../assets/starborne/icons/Colored_Icons_Resources_Crystal_01.png";
import laborIcon from "../../assets/starborne/icons/Colored_Icons_Resources_Manpower_01.png";

interface Props {
    station: Station;
}

interface State {
    resources: DynamicResource;
}

interface ResourceComponentProps {
    image: ImageSourcePropType;
    children: JSX.Element[];
}

const ResourceComponent = (props: ResourceComponentProps) => {
    return (
        <View style={{flex: 1, flexDirection: "row"}}>
            <Image style={{flex: 1, width: undefined, height: undefined, margin: 5, resizeMode: "contain"}} source={props.image}/>
            <View style={{flexDirection: "column"}}>
                <Text>{props.children[0]}</Text>
                <Caption>{props.children[1]}</Caption>
            </View>
        </View>
    );
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
                        <ResourceComponent image={metalIcon}>
                            <>{formatResourceAmount(resources.Metals)}</>
                            <>{formatResourceAmount(production.Metals)}/h</>
                        </ResourceComponent>
                        <ResourceComponent image={gasIcon}>
                            <>{formatResourceAmount(resources.Gases)}</>
                            <>{formatResourceAmount(production.Gases)}/h</>
                        </ResourceComponent>
                        <ResourceComponent image={crystalIcon}>
                            <>{formatResourceAmount(resources.Crystals)}</>
                            <>{formatResourceAmount(production.Crystals)}/h</>
                        </ResourceComponent>
                        <ResourceComponent image={laborIcon}>
                            <>{formatResourceAmount(resources.Deuterium)}</>
                            <>{formatResourceAmount(production.Deuterium)}</>
                        </ResourceComponent>
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