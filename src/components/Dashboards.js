import React from "react";
import Widget from "./Widget";


export default class Dashboards extends React.Component {

    render() {
        return (
            <div id="dashboards">
                <div id="dashboards-header" >
                    1Dashboard  <span className="hidden-text">({this.props.widgets.length} widgets)</span>
                </div>
                <div id="dashboards-main-section">
                    { this.props.widgets.map((widget) => <Widget widget={widget} />)}
                </div>
            </div>
        );
    }
}
