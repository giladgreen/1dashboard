import React from 'react';
import './style/app.css';
import Dashboards from './components/Dashboards';
import layout from "./layout";
import data from "./data";

function calcWidgetsData(widgets){
    widgets.sort((a,b)=> a.order < b.order ? -1 : 1);
    widgets.forEach((w,index)=> w.order = index+1);
    const widgetsData = [];
    widgets.forEach((widget, index) => {
        const { width, height, widget_id } = widget;
        const widgetData = data.find(d => d.widget_id === widget_id);
        widget.layout.elements.forEach(element =>{
            element.data = widgetData ? widgetData.elements.find(e => e.element_id === element.element_id) : null;
        })
        widget.elements = widget.layout.elements.filter(element => Boolean(element.data));
        const firstInLine = index === 0 || width + widgetsData[index -1].totalWidth > 100;
        const row = index === 0  ? 0 : (firstInLine ?  widgetsData[index -1].row+1 : widgetsData[index -1].row);
        const totalWidth = firstInLine ? width : width + widgetsData[index-1].totalWidth;
        widget.row = row;
        widget.firstInLine = firstInLine;
        widgetsData.push(
            {
                row,
                width,
                height,
                firstInLine,
                totalWidth,
            }
        );
    });
    widgets.forEach((widget) => {
        widget.height = Math.max(...widgetsData.filter(w=>w.row === widget.row).map(w=>w.height));
    });

    const totalHeight = widgets.filter(w=>w.firstInLine).map(w=>w.height).reduce((a, b) => a + b, 0);
    if (totalHeight > 100){
        const ratio = 100 / totalHeight;
        widgets.forEach(w => w.height = w.height * ratio);
    }

    return widgets.filter(w => w.elements.length);
}

export default class App extends React.Component {
    state = {
        connected: false,
    };
    tryToConnect(){
        console.log('tryToConnect')
        setTimeout(()=>{
            const widgets = calcWidgetsData(layout.widgets);

            this.setState({
                connected: true,
                widgets,
            })
        },900)
    }
    render() {
        console.log('render')
        const { connected, widgets } = this.state;

        if (!connected){
            //make call to get data
            this.tryToConnect();  // TODO
        }

        const loader = <div id="welcome-page">
                <img id="pie-image-full"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie-full.png" />
                <img id="pie-image-1"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_1.png" />
                <img id="pie-image-2"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_2.png" />
                <img id="pie-image-3"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_3.png" />
                <img id="pie-image-4"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_4.png" />
            </div>;

      const dashboardScreen = connected ? <Dashboards widgets={widgets} /> : <div></div>;
        return (
            <div id="app" className="noselect">
                <div id="connected-state">
                    {connected ? 'Connected' : 'Connecting..'}
                </div>
                { !connected ? loader : dashboardScreen }

            </div>
        );
    }
}
