import React from "react";
import Element from "./Element";


export default class Widget extends React.Component {

    render() {
        const { widget } = this.props;
        widget.style = {
            width: `${ widget.width}%`,
            height: `${ widget.height}%`,
            order: widget.order
        };

        const widgetKey= `w_${widget.order}.${widget.title}`;

        return <div className="widget" style={widget.style} key={widgetKey}>
            <div className="widget-header">
                <span className="hidden-text"> {widget.order}.</span><span>{widget.title}</span> <span className="hidden-text">({widget.layout.elements.length} elements)</span>
            </div>
            <div className="widget-content">
                {widget.elements.map((element,elementIndex) =>
                    <Element element={element} elementIndex={elementIndex} widgetKey={widgetKey} widgetHeight={ widget.height}/>
                )}
            </div>
        </div>
    }
}

