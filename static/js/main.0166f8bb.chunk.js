(this["webpackJsonpweek-19"]=this["webpackJsonpweek-19"]||[]).push([[0],{1060:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),c=a(5),i=a(6),m=a(8),s=a(7);function u(){return l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," "),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Title"),l.a.createElement("th",{scope:"col"},"ID"),l.a.createElement("th",{scope:"col"},"eMail"))))}function d(e){return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("img",{src:e.image,alt:e.name})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.email)))))}for(var p=a(1),h=a.n(p),v=[],E=0;E<50;E++){var f={id:h.a.random.uuid(),name:h.a.name.findName(),image:h.a.image.avatar(),title:h.a.name.jobTitle(),email:h.a.internet.email()};v.push(f)}var b={people:v},g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={people:[],display:"normal",sort:"",sorted:[],filtered:[]},e.renderPeople=function(){var t="normal";return"normal"===e.state.display?t=e.state.people:"sorted"===e.state.display?t=e.state.sorted:"filtered"===e.state.display&&(t=e.state.filtered),t.map((function(e){return l.a.createElement("div",null,l.a.createElement(d,{name:e.name,image:e.image,title:e.title,id:e.id,email:e.email}))}))},e.handleSortChange=function(t){t.preventDefault();var a=t.target.value;e.setState({sort:a});var n=t.target.value.toString();e.state.people.sort((function(e,t){return e[n]<t[n]?-1:e[n]>t[n]?1:0}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({people:b.people})}},{key:"handleSearchChange",value:function(e){e.preventDefault(),this.setState({filter:e.target.value}),""===e.target.value?this.state.display="normal":this.state.display="filtered",this.state.filtered=this.state.people.filter((function(t){return t.name.toLowerCase().includes(e.target.value)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Employee Directory"),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l.a.createElement("button",{className:"dropdown-item",value:"name",onClick:function(t){return e.handleSortChange(t)}},"Name"),l.a.createElement("button",{className:"dropdown-item",value:"title",onClick:function(t){return e.handleSortChange(t)}},"Title"),l.a.createElement("button",{className:"dropdown-item",value:"email",onClick:function(t){return e.handleSortChange(t)}},"eMail"))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"})),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}))),l.a.createElement(u,null),this.renderPeople())}}]),a}(n.Component);var y=function(){return l.a.createElement(g,null)};o.a.render(l.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(1060)}},[[9,1,2]]]);
//# sourceMappingURL=main.0166f8bb.chunk.js.map