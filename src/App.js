import React from 'react';
import './style/app.css';
import Dashboards from './components/Dashboards';
import layout from "./layout";
import data from "./data";

function calcWidgetsData(widgets){
    console.log('calcWidgetsData')
    const widgetsData = [];
    widgets.forEach((widget, index) => {
        const { width, height, layout: {elements}, widget_id } = widget;
        const widgetData = data.find(d => d.widget_id === widget_id);
        elements.forEach(element =>{
            element.data = widgetData.elements.find(e => e.element_id === element.element_id)
        })
        const newLine = index === 0 || width +  widgetsData[index -1].totalWidth > 100;
        let row = index === 0  ? 0 : (newLine ?  widgetsData[index -1].row+1 : widgetsData[index -1].row);
        const totalWidth = newLine ? width :  width + widgetsData[index -1].totalWidth;
        widgetsData.push(
            {
                row,
                width,
                height,
                newLine,
                totalWidth,
            }
        );
    });
    widgetsData.forEach((widget) => {
        const sameRowsHeight = widgetsData.filter(w=>w.row === widget.row).map(w=>w.height);
        widget.newHeight = Math.max(...sameRowsHeight);
    });
    widgetsData.forEach((widget) => {
        const sameRowsHeight = widgetsData.filter(w=>w.row === widget.row).map(w=>w.height);
        widget.newHeight = Math.max(...sameRowsHeight);
    });
    const totalHeight =  widgetsData.filter(w=>w.newLine).map(w=>w.newHeight).reduce((a, b) => a + b, 0);
    if (totalHeight > 100){
        const ratio = 100 / totalHeight;
        widgetsData.forEach(w => w.newHeight = w.newHeight * ratio);
    }

    return widgetsData
}

export default class App extends React.Component {
    state = {
        connected: false,
    };
    tryToConnect(){
        console.log('tryToConnect')
        setTimeout(()=>{

            const widgets = layout.widgets.sort((a,b)=> a.order < b.order ? -1 : 1);
            console.log('setTimeout cb', widgets)
            this.setState({
                connected: true,
                widgets,
                widgetsData: calcWidgetsData(widgets)
            })
        },4000)
    }
    render() {
        console.log('render')
        const { connected, widgets, widgetsData } = this.state;

        if (!connected){
            //make call to get data
            this.tryToConnect();
        }

        const welcomeScreen = <div id="welcome-page">
                <img id="pie-image-full"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie-full.png" />
                <img id="pie-image-1"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_1.png" />
                <img id="pie-image-2"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_2.png" />
                <img id="pie-image-3"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_3.png" />
                <img id="pie-image-4"  className="pie-image" src="https://giladgreen.github.io/1dashboard/pie_4.png" />
            </div>;

      const dashoboardsScreen = connected ? <Dashboards widgets={widgets} widgetsData={widgetsData} data={data}/> : <div></div>;
        return (
            <div id="app">
                <div id="connected-state">
                    {connected ? 'Connected' : 'Connecting..'}
                </div>
                { !connected ? welcomeScreen : dashoboardsScreen }

            </div>
        );
    }
}
