(this.webpackJsonp1dashbaord=this.webpackJsonp1dashbaord||[]).push([[0],{11:function(e,t,i){},14:function(e){e.exports=JSON.parse('{"dashboard_id":"dsh_111111","widgets":[{"widget_id":"wgt_111111","order":1,"width":50,"height":100,"service_category":"Customer Support","service_name":"Zendesk","service_id":"srv_111111","title":"Ticket Queue (max/day)","layout":{"layout_id":"lyt_111111","elements":[{"element_id":"elm_111111","x":0,"y":0,"width":100,"height":100,"type":"line-graph"},{"element_id":"elm_222222","x":0,"y":0,"width":100,"height":100,"type":"number","style":{}}]}},{"widget_id":"wgt_222222","order":2,"width":50,"height":100,"service_category":"Customer Support","service_name":"Zendesk","service_id":"srv_111111","title":"DDQs (max/day)","layout":{"layout_id":"lyt_222222","elements":[{"element_id":"elm_333333","x":0,"y":0,"width":100,"height":100,"type":"pie-chart"}]}},{"widget_id":"wgt_333333","order":3,"width":100,"height":100,"service_category":"Customer Support","service_name":"Zendesk","service_id":"srv_111111","title":"bla bla (max/day)","layout":{"layout_id":"lyt_333333","elements":[{"element_id":"elm_444444","x":0,"y":0,"width":100,"height":100,"type":"bar-graph"},{"element_id":"elm_555555","x":0,"y":0,"width":100,"height":100,"type":"number","style":{}}]}}]}')},23:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(12),c=i.n(r),d=(i(11),i(3)),s=i(4),o=i(6),l=i(5),h=i(2),g=i(10),u=i(7),p=i(1),m=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"getContent",value:function(e){switch(e.type){case"number":return Object(p.jsx)("div",{className:"content-type-number all-content-type",style:Object(g.a)(Object(g.a)({},e.style),{},{color:e.data.color}),children:e.data.number});case"line-graph":var t=[[e.data["x-title"],e.data["y-title"]]].concat(Object(h.a)(Object.keys(e.data["line-graph"]).map((function(t){return[t,e.data["line-graph"][t]]}))));return Object(p.jsx)("div",{className:"all-content-type",style:e.style,children:Object(p.jsx)(u.a,{width:"100%",height:"100%",chartType:"LineChart",loader:Object(p.jsx)("div",{children:"Loading Chart"}),data:t,options:{hAxis:{title:e.data["x-title"]},vAxis:{title:e.data["y-title"]}}})});case"pie-chart":return Object(p.jsx)("div",{className:"all-content-type",style:e.style,children:Object(p.jsx)(u.a,{width:"100%",height:"100%",chartType:"PieChart",loader:Object(p.jsx)("div",{children:"Loading Chart"}),data:e.data["pie-chart"],options:{}})});case"bar-graph":return Object(p.jsx)("div",{className:"all-content-type",style:e.style,children:Object(p.jsx)(u.a,{width:"100%",height:"100%",chartType:"BarChart",loader:Object(p.jsx)("div",{children:"Loading Chart"}),data:e.data["bar-graph"],options:{chartArea:{width:"80%",height:"60%"},colors:["#b0120a","#ffab91"],hAxis:{title:e.data["x-title"],minValue:0},vAxis:{title:e.data["y-title"]}}})});default:return Object(p.jsxs)("span",{children:[" ",e.element_id," = ",e.type]})}}},{key:"render",value:function(){var e=this,t=this.props,i=t.widgetsData,a=t.widgets.map((function(t,a){var n={width:"".concat(i[a].width,"%"),height:"".concat(i[a].newHeight,"%"),order:a+1},r=t.layout.elements.map((function(i,a){var r={width:"".concat(i.width,"%"),height:"".concat(i.height,"%"),top:"".concat(i.y,"%"),left:"".concat(i.x,"%")},c=e.getContent(i);return Object(p.jsx)("div",{className:"widget-element",style:r,children:c},"".concat(n.order,".").concat(t.title,"-").concat(a))}));return Object(p.jsxs)("div",{className:"widget",style:n,children:[Object(p.jsxs)("div",{className:"widget-header",children:[Object(p.jsxs)("span",{className:"hidden-text",children:[" ",n.order,"."]}),t.title," ",Object(p.jsxs)("span",{className:"hidden-text",children:["(",r.length," elements)"]})]}),Object(p.jsx)("div",{className:"widget-content",children:r})]},"".concat(n.order,".").concat(t.title))}));return Object(p.jsxs)("div",{id:"dashboards",children:[Object(p.jsxs)("div",{id:"dashboards-header",children:["1Dashboard  ",Object(p.jsxs)("span",{className:"hidden-text",children:["(",i.length," widgets)"]})]}),Object(p.jsx)("div",{id:"dashboards-main-section",children:a})]})}}]),i}(n.a.Component),b=i(14),j=i(9);function y(e){console.log("calcWidgetsData");var t=[];e.forEach((function(e,i){var a=e.width,n=e.height,r=e.layout.elements,c=e.widget_id,d=j.find((function(e){return e.widget_id===c}));r.forEach((function(e){e.data=d.elements.find((function(t){return t.element_id===e.element_id}))}));var s=0===i||a+t[i-1].totalWidth>100,o=0===i?0:s?t[i-1].row+1:t[i-1].row,l=s?a:a+t[i-1].totalWidth;t.push({row:o,width:a,height:n,newLine:s,totalWidth:l})})),t.forEach((function(e){var i=t.filter((function(t){return t.row===e.row})).map((function(e){return e.height}));e.newHeight=Math.max.apply(Math,Object(h.a)(i))})),t.forEach((function(e){var i=t.filter((function(t){return t.row===e.row})).map((function(e){return e.height}));e.newHeight=Math.max.apply(Math,Object(h.a)(i))}));var i=t.filter((function(e){return e.newLine})).map((function(e){return e.newHeight})).reduce((function(e,t){return e+t}),0);if(i>100){var a=100/i;t.forEach((function(e){return e.newHeight=e.newHeight*a}))}return t}var w=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(d.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={connected:!1},e}return Object(s.a)(i,[{key:"tryToConnect",value:function(){var e=this;console.log("tryToConnect"),setTimeout((function(){var t=b.widgets.sort((function(e,t){return e.order<t.order?-1:1}));console.log("setTimeout cb",t),e.setState({connected:!0,widgets:t,widgetsData:y(t)})}),4e3)}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.connected,i=e.widgets,a=e.widgetsData;t||this.tryToConnect();var n=Object(p.jsxs)("div",{id:"welcome-page",children:[Object(p.jsx)("img",{id:"pie-image-full",className:"pie-image",src:"https://giladgreen.github.io/1dashboard/pie-full.png"}),Object(p.jsx)("img",{id:"pie-image-1",className:"pie-image",src:"https://giladgreen.github.io/1dashboard/pie_1.png"}),Object(p.jsx)("img",{id:"pie-image-2",className:"pie-image",src:"https://giladgreen.github.io/1dashboard/pie_2.png"}),Object(p.jsx)("img",{id:"pie-image-3",className:"pie-image",src:"https://giladgreen.github.io/1dashboard/pie_3.png"}),Object(p.jsx)("img",{id:"pie-image-4",className:"pie-image",src:"https://giladgreen.github.io/1dashboard/pie_4.png"})]}),r=t?Object(p.jsx)(m,{widgets:i,widgetsData:a,data:j}):Object(p.jsx)("div",{});return Object(p.jsxs)("div",{id:"app",children:[Object(p.jsx)("div",{id:"connected-state",children:t?"Connected":"Connecting.."}),t?r:n]})}}]),i}(n.a.Component),_=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),_()},9:function(e){e.exports=JSON.parse('[{"widget_id":"wgt_111111","updated":"2021-05-12T17:31:00Z","elements":[{"element_id":"elm_111111","x-title":"Date","y-title":"Points","line-graph":{"1990":10,"1995":20,"1999":30,"2005":40,"2006":60,"2010":90,"2020":160,"2030":60}},{"element_id":"elm_222222","number":"+25%","color":"green"}]},{"widget_id":"wgt_222222","updated":"2021-05-12T17:31:00Z","elements":[{"element_id":"elm_333333","pie-chart":[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}]},{"widget_id":"wgt_333333","updated":"2021-05-12T17:31:00Z","elements":[{"element_id":"elm_444444","x-title":"Date","y-title":"Points","bar-graph":[["City","2010 Population","2000 Population"],["New York City, NY",8175000,8008000],["Los Angeles, CA",3792000,3694000],["Chicago, IL",2695000,2896000],["Houston, TX",2099000,1953000],["Philadelphia, PA",1526000,1517000]]},{"element_id":"elm_555555","number":"-55K","color":"red"}]}]')}},[[23,1,2]]]);
//# sourceMappingURL=main.9d037ddb.chunk.js.map