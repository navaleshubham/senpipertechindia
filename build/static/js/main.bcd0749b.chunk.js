(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{23:function(e,a,t){e.exports=t(37)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(15),s=t.n(r),i=(t(28),t(29),t(19)),o=t(1),c=t(16),m=t(17),h=t(18),d=t(8),g=t(22),p=t(21),E=(t(30),function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={email:"",phone:"",servicerating:"",beveragerating:"",cleanrating:"",overallrating:"",name:"",errorsphone:"",erroremail:"",errorsname:"",errorsservicerating:"",errorsbeveragerating:"",errorscleanrating:"",errorsoverallrating:""},e.onChange=e.onChange.bind(Object(d.a)(e)),e.onSubmit=e.onSubmit.bind(Object(d.a)(e)),e}return Object(h.a)(t,[{key:"onChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value)),-1!==this.state.email.indexOf("@")&&""!==this.state.email&&-1!==this.state.email.indexOf(".")?this.setState({erroremail:""}):this.setState({erroremail:"Error: Please check the email"}),""!==this.state.name&&this.setState({errorsname:""}),""!==this.state.phone&&this.setState({errorsphone:""}),""!==this.state.overallrating&&this.setState({errorsoverallrating:""}),""!==this.state.servicerating&&this.setState({errorsservicerating:""}),""!==this.state.beveragerating&&this.setState({errorsbeveragerating:""}),""!==this.state.cleanrating&&this.setState({errorscleanrating:""})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),-1!==this.state.email.indexOf("@")&&""!==this.state.email&&-1!==this.state.email.indexOf(".")||this.setState({erroremail:"Error: Please check the email"}),""===this.state.name||""===this.state.phone||""===this.state.servicerating||""===this.state.cleanrating||""===this.state.beveragerating||""===this.state.overallrating)""===this.state.name&&this.setState({errorsname:"Error: This is a mandatory field"}),""===this.state.phone&&this.setState({errorsphone:"Error: This is a mandatory field"}),""===this.state.overallrating&&this.setState({errorsoverallrating:"Error: This is a mandatory field"}),""===this.state.servicerating&&this.setState({errorsservicerating:"Error: This is a mandatory field"}),""===this.state.beveragerating&&this.setState({errorsbeveragerating:"Error: This is a mandatory field"}),""===this.state.cleanrating&&this.setState({errorscleanrating:"Error: This is a mandatory field"}),console.log(this.state);else{var a={},t=[];null===(t=JSON.parse(localStorage.getItem("feedbacks")))&&(t=[]),a.email=this.state.email,a.phone=this.state.phone,a.servicerating=this.state.servicerating,a.beveragerating=this.state.beveragerating,a.cleanrating=this.state.cleanrating,a.overallrating=this.state.overallrating,a.name=this.state.name,console.log(a),t.push(a),localStorage.setItem("feedbacks",JSON.stringify(t)),alert("Thanks for the Feedback!"),this.data=t,window.history.go(0)}}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("div",{className:"nav nav-tabs bg-white",id:"nav-tab",role:"tablist"},n.a.createElement("a",{className:"nav-item nav-link active",id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"Feedback Form"),n.a.createElement("a",{className:"nav-item nav-link",id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"All Feedbacks"))),n.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},n.a.createElement("div",{className:"tab-pane fade show active pb-4",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},n.a.createElement("div",null,n.a.createElement("h3",{className:"h4 mt-3 ml-lg-4",style:{color:"teal"}},"Aromatic Bar"),n.a.createElement("p",{className:"ml-lg-4",style:{color:"grey"}},"We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you")),n.a.createElement("div",{className:"container bg-white mt-3 form-height"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("q",{style:{color:"grey"}},"We don't share your information with anyone.")),n.a.createElement("div",{className:"col-sm-12 "},n.a.createElement("label",null,"Name"),n.a.createElement("br",null),n.a.createElement("div",{className:"input-group namewidth"},n.a.createElement("input",{type:"text",className:"form-control",name:"name",onChange:this.onChange})),n.a.createElement("br",null),""!==this.state.errorsname?n.a.createElement("span",{style:{color:"red"}},this.state.errorsname):null)),n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6"},n.a.createElement("label",null,"Email"),n.a.createElement("br",null),n.a.createElement("div",{className:"input-group",style:{width:"95%"}},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"@")),n.a.createElement("input",{className:"form-control",name:"email",type:"email",onChange:this.onChange})),""!==this.state.erroremail?n.a.createElement("span",{style:{color:"red"}},this.state.erroremail):null),n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6"},n.a.createElement("label",null,"Phone"),n.a.createElement("br",null),n.a.createElement("div",{className:"input-group",style:{width:"95%"}},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"basic-addon1",style:{maxWidth:"50px",maxHeight:"33px",padding:"0px"}},n.a.createElement("img",{style:{maxWidth:"50px",maxHeight:"33px",padding:"0px"},src:"https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",alt:"    +91"}))),n.a.createElement("input",{type:"number",className:"form-control",name:"phone",onChange:this.onChange,"aria-describedby":"basic-addon1"})),""!==this.state.errorsphone?n.a.createElement("span",{style:{color:"red"}},this.state.errorsphone):null)),n.a.createElement("div",{className:"row pt-3"},n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6"},n.a.createElement("label",null,"Please rate the quality of the service you received from your host."),n.a.createElement("br",null),n.a.createElement("div",{className:"row ml-1"},n.a.createElement("input",{name:"servicerating",type:"radio",value:"Excellent",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5  pl-md-3 text-center"},"Excellent"),n.a.createElement("input",{name:"servicerating",type:"radio",value:"Good",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Good"),n.a.createElement("input",{name:"servicerating",type:"radio",value:"Fair",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Fair"),n.a.createElement("input",{name:"servicerating",type:"radio",value:"Bad",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Bad")),""!==this.state.errorsservicerating?n.a.createElement("span",{style:{color:"red"},className:"ml-2"},this.state.errorsservicerating):null),n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6"},n.a.createElement("label",null,"Please rate the quality of your beverage."),n.a.createElement("br",null),n.a.createElement("div",{className:"row ml-1"},n.a.createElement("input",{name:"beveragerating",type:"radio",value:"Excellent",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5  pl-md-3 text-center"},"Excellent"),n.a.createElement("input",{name:"beveragerating",type:"radio",value:"Good",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Good"),n.a.createElement("input",{name:"beveragerating",type:"radio",value:"Fair",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Fair"),n.a.createElement("input",{name:"beveragerating",type:"radio",value:"Bad",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Bad")),""!==this.state.errorsbeveragerating?n.a.createElement("span",{style:{color:"red"},className:"ml-2"},this.state.errorsbeveragerating):null)),n.a.createElement("div",{className:"row pt-3"},n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6"},n.a.createElement("label",null,"Was our restaurant clean?"),n.a.createElement("br",null),n.a.createElement("div",{className:"row ml-1"},n.a.createElement("input",{name:"cleanrating",type:"radio",value:"Excellent",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5  pl-md-3 text-center"},"Excellent"),n.a.createElement("input",{name:"cleanrating",type:"radio",value:"Good",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Good"),n.a.createElement("input",{name:"cleanrating",type:"radio",value:"Fair",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Fair"),n.a.createElement("input",{name:"cleanrating",type:"radio",value:"Bad",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Bad")),""!==this.state.errorscleanrating?n.a.createElement("span",{style:{color:"red"},className:"ml-2"},this.state.errorscleanrating):null),n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6"},n.a.createElement("label",null,"Please rate your overall dining experience."),n.a.createElement("br",null),n.a.createElement("div",{className:"row ml-1"},n.a.createElement("input",{name:"overallrating",type:"radio",value:"Excellent",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5  pl-md-3 text-center"},"Excellent"),n.a.createElement("input",{name:"overallrating",type:"radio",value:"Good",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Good"),n.a.createElement("input",{name:"overallrating",type:"radio",value:"Fair",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Fair"),n.a.createElement("input",{name:"overallrating",type:"radio",value:"Bad",onChange:this.onChange}),n.a.createElement("label",{className:"px-2 pr-md-5 pl-md-3"},"Bad")),""!==this.state.errorsoverallrating?n.a.createElement("span",{style:{color:"red"},className:"ml-2"},this.state.errorsoverallrating):null)),n.a.createElement("div",{className:"d-flex justify-content-between align-bottom submitbtn"},n.a.createElement("div",null),n.a.createElement("button",{className:"btn btn-success border-3 mb-5",onClick:this.onSubmit},"Submit")))),n.a.createElement("div",{className:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},n.a.createElement("div",null,n.a.createElement("h2",{className:"h2 mt-3"},"All Feedbacks"),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table container mt-5"},n.a.createElement("thead",{style:{backgroundColor:"#C4AFEE"}},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Name"),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},"Phone"),n.a.createElement("th",{scope:"col"},"Service Rating"),n.a.createElement("th",{scope:"col"},"Beverage Rating"),n.a.createElement("th",{scope:"col"},"Clean Rating"),n.a.createElement("th",{scope:"col"},"Overall Rating"))),n.a.createElement("tbody",{className:"bg-white"},localStorage.getItem("feedbacks")?n.a.createElement(n.a.Fragment,null,JSON.parse(localStorage.getItem("feedbacks")).map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null," ",a+1),n.a.createElement("td",null," ",e.name),n.a.createElement("td",null," ",e.email),n.a.createElement("td",null," ",e.phone),n.a.createElement("td",null," ",e.servicerating),n.a.createElement("td",null," ",e.beveragerating),n.a.createElement("td",null," ",e.cleanrating),n.a.createElement("td",null," ",e.overallrating))}))):null)))))))}}]),t}(l.Component));t(13);var u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",exact:!0,component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(36);s.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bcd0749b.chunk.js.map