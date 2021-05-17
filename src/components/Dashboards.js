import React from "react";
import Chart from "react-google-charts";


export default class Dashboards extends React.Component {
    getContent(element){

        switch(element.type) {
            case 'number':
                return <div className="content-type-number all-content-type" style={{...element.style, color: element.data.color }}>
                    {element.data.number}
                </div>
                break;
            case 'line-graph':
                const chartData=[
                        [ element.data["x-title"],  element.data["y-title"]],
                    ...(Object.keys(element.data["line-graph"]).map(date => [date, element.data["line-graph"][date]]))
                ];
                return <div className="all-content-type" style={element.style}>
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={chartData}
                        options={{
                            hAxis: {
                                title: element.data["x-title"],
                            },
                            vAxis: {
                                title: element.data["y-title"],
                            },
                        }}
                    />
                </div>
                break;
            case 'pie-chart':
                return <div className="all-content-type" style={element.style}>
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={element.data["pie-chart"]}
                        options={{

                        }}
                    />
                </div>
                break;
            case 'bar-graph':
                return <div className="all-content-type" style={element.style}>
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={element.data["bar-graph"]}
                        options={{
                            chartArea: { width: '80%', height: "60%" },
                            colors: ['#b0120a', '#ffab91'],//TODO
                            hAxis: {
                                title:  element.data["x-title"],
                                minValue: 0,
                            },
                            vAxis: {
                                title:  element.data["y-title"],
                            },
                        }}
                    />
                </div>
                break;
            default:
                return <span> {element.element_id} = {element.type}</span>
        }

    }
    render() {
        const { widgetsData, widgets } = this.props;

        const Widgets = widgets.map((widget,index) => {

                const style = {
                    width: `${widgetsData[index].width}%`,
                    height: `${widgetsData[index].newHeight}%`,

                    order: index+1
                };
                const { elements } = widget.layout;

                const widgetElements  = elements.map((element,elementIndex) =>{
                    const elementStyle = {
                        width: `${element.width}%`,
                        height: `${element.height}%`,
                        top: `${element.y}%`,
                        left: `${element.x}%`,
                    };
                    const content = this.getContent(element);
                    return <div className="widget-element" style={elementStyle} key={`${style.order}.${widget.title}-${elementIndex}`}>
                        {content}


                    </div>
                })

                return <div className="widget" style={style} key={`${style.order}.${widget.title}`}>
                    <div className="widget-header">
                        <span className="hidden-text"> {style.order}.</span>{widget.title} <span className="hidden-text">({widgetElements.length} elements)</span>
                    </div>
                    <div className="widget-content">
                        {widgetElements}

                    </div>

                </div>
            });


        return (
            <div id="dashboards">
                <div id="dashboards-header">
                    1Dashboard  <span className="hidden-text">({widgetsData.length} widgets)</span>
                </div>
                <div id="dashboards-main-section">
                    {Widgets}
                </div>
            </div>
        );
    }
}
