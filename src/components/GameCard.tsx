import * as React from "react";
import {Colors, List} from 'react-native-paper';
import {Game} from "../redux/reducers/GamesListReducer";
import {ServerStatus} from "../models/models";

interface Props {
    game: Game;
    handleGamePress(game: Game): void;
}

function statusIcon(status: ServerStatus): [string, string] {
    switch (status) {
        case ServerStatus.Up:
            return ["web", Colors.green600];
        case ServerStatus.Complete:
            return ["lock", Colors.cyan600];
        case ServerStatus.Down:
            return ["power", Colors.red600]
        default:
            return ["help-circle", Colors.amber600];
    }
}

class GameCard extends React.Component<Props> {

    isEnabled() {
        return this.props.game.HasRequestingPlayer &&
            (this.props.game.ServerStatus === ServerStatus.Up)
    }

    handleGamePress = () => {
        this.props.handleGamePress(this.props.game);
    };

    render() {
        const [icon, color] = statusIcon(this.props.game.ServerStatus);
        return <List.Item
            title={this.props.game.Name}
            description={`${this.props.game.PlayersJoined} / ${this.props.game.PlayersMaximum} players`}
            onPress={this.handleGamePress}
            disabled={!this.isEnabled()}
            left={props => <List.Icon {...props} color={color} icon={icon} />}
            right={props => this.props.game.HasRequestingPlayer ?
                <List.Icon {...props} icon="play-circle" /> : null
            }
        />
    }
}

export default GameCard;
