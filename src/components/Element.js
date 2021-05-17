import React from "react";
import Chart from "react-google-charts";

const SUPPORTED_CHART_TYPES = ['Text', 'LineChart','PieChart', 'BarChart'];

export default class Element extends React.Component {
    getChartOptions(element){
        const baseOptions = {
            chartArea: { width: '66%', height: "70%" },
        }
        switch(element.type) {
            case 'LineChart':
                return {
                    ...baseOptions,
                    hAxis: {
                        title: element.data[element.type][0][0],
                    },
                    vAxis: {
                        title: element.data[element.type][0][1],
                    },
                };
            case 'BarChart':
                return {
                    ...baseOptions,
                    hAxis: {
                        title: '',
                    },
                    vAxis: {
                        title: element.data[element.type][0][0],
                    },
                }
            default:
                return {};
        }
    }

    getContent(element){
        if (!SUPPORTED_CHART_TYPES.includes(element.type)){
            return <div className="all-content-type not-supported-type" style={{...element.style, color: element.data.color }}>
                {element.element_id} = {element.type} (not supported type)
            </div>
        }

        if (element.type === 'Text'){
            const fontSize = `${this.props.widgetHeight * 3}px`
            return <div className="all-content-type content-type-text resize-on-hover" style={{...element.style, color: element.data.color, fontSize }}>
                {element.data.number}
            </div>
        }
        const chartOptions = this.getChartOptions(element);
        return <div className="all-content-type" style={element.style}>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType={element.type}
                loader={<div>Loading Chart..</div>}
                data={element.data[element.type]}
                options={chartOptions}
            />
        </div>
    }

    render() {
        const { element, widgetKey, elementIndex } = this.props;
        const elementStyle = {
            width: `${element.width}%`,
            height: `${element.height}%`,
            top: `${element.y}%`,
            left: `${element.x}%`,
        };
        const content = this.getContent(element);
        return <div className="widget-element" style={elementStyle} key={`e_${widgetKey}-${elementIndex}`}>
            {content}
        </div>
    }
}
