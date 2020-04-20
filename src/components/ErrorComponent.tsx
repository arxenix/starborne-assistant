import * as React from "react";
import {Text, Colors} from "react-native-paper";

interface Props {
    error: any;
}

interface State {
}

export class ErrorComponent extends React.Component<Props, State> {

    render() {
        if (this.props.error) {
            return (<Text style={{color: Colors.red500}}>{this.props.error}</Text>);
        }
        else {
            return null;
        }
    }
}