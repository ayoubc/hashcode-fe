(this["webpackJsonphashcode-fe"]=this["webpackJsonphashcode-fe"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),l=n(10),c=n.n(l),i=n(19),r=n(33),o=n(9),u=n(20),d=n.n(u),b=n(30),j=n(15),f=n(21),A=n(75),h=n(76),x=n(74),O=n.p+"static/media/icon-trash.7a6bde0b.svg",p=(n(40),function(e){var t,n=e.file,s=e.reset;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:O,className:"trash-icon",onClick:s,alt:"Trash Icon"}),Object(a.jsxs)("p",{className:"file-name",children:[" ",n.name," - ",(t=n.size,(t/1e3).toFixed(2)),"KB"]})]})}),m=function(e){var t=e.onChangeFile,n=e.id,l=Object(s.useState)(null),c=Object(o.a)(l,2),i=c[0],r=c[1];return Object(a.jsxs)("div",{className:"file-input",children:[Object(a.jsx)("input",{type:"file",id:n,className:"file",onClick:function(e){e.target.value=null},onChange:function(e){var a=e.target.files;r(a[0]),t(n,a[0])},accept:".txt"}),i?Object(a.jsx)(p,{file:i,reset:function(){r(null),t(n,null)}}):Object(a.jsx)("label",{htmlFor:n,children:"Choose file"})]})},g=(n(41),function(e){var t=e.onChangeFile,n=e.info;return Object(a.jsxs)("div",{className:"input-file-group",children:[Object(a.jsx)("div",{className:"file-label",children:n.label}),Object(a.jsx)(m,{onChangeFile:t,id:n.inputId})]})}),v=n(31),N=n.n(v).a.create({baseURL:"https://hashcodejudge.herokuapp.com"}),C=(n(60),[{label:"A - Example",inputId:"a"},{label:"B - Lovely landscapes",inputId:"b"},{label:"C - Memorable moments",inputId:"c"},{label:"D - Pet pictures",inputId:"d"},{label:"E - Shiny selfies",inputId:"e"}]),F={a:null,b:null,c:null,d:null,e:null},S=function(e){for(var t in e)if(e[t])return!1;return!0},H=function(e){var t=e.show,n=e.handleClose,l=e.onNewSubmission,c=Object(s.useState)(!1),i=Object(o.a)(c,2),r=i[0],u=i[1],O=Object(s.useState)(F),p=Object(o.a)(O,2),m=p[0],v=p[1];if(!t)return null;var H=function(e,t){v(Object(f.a)(Object(f.a)({},m),{},Object(j.a)({},e,t)))},E=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in t=new FormData,m)(s=m[a])&&t.append(a,s,s.name);return e.prev=2,u(!0),e.next=6,N.post("/files-upload",t);case 6:c=e.sent,500===c.data.status?("You uploaded wrong files for some inputs.",l(c.data,"You uploaded wrong files for some inputs."),u(!1)):(l(c.data,""),v(F),u(!1),n()),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),u(!1),l({},"Network Error. Please try again."),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(A.a,{show:t,onHide:n,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(A.a.Header,{closeButton:!0,children:Object(a.jsx)(A.a.Title,{children:"Create submission"})}),Object(a.jsxs)(A.a.Body,{children:[Object(a.jsxs)("div",{className:"subheader",children:[Object(a.jsx)("b",{children:"Output files for data sets."})," Upload the output file for at least one data set."]}),C.map((function(e,t){return Object(a.jsx)(g,{onChangeFile:H,info:e},t)}))]}),Object(a.jsxs)(A.a.Footer,{children:[Object(a.jsx)(h.a,{variant:"outline-secondary",onClick:n,children:"Cancel"}),Object(a.jsxs)(h.a,{variant:"outline-success",onClick:E,disabled:S(m),children:[!r&&"Submit",r&&Object(a.jsxs)(a.Fragment,{children:[" ",Object(a.jsx)(x.a,{as:"span",animation:"border",size:"sm",role:"status"})," Uploading files... "]})]})]})]})},E=(n(64),function(e){var t=e.onNewSubmission,n=Object(s.useState)(!1),l=Object(o.a)(n,2),c=l[0],i=l[1];return Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("h4",{className:"headline",children:"Qualification Round 2019"}),Object(a.jsx)("h4",{children:"Photo slideshow"}),Object(a.jsxs)("div",{className:"box-actions",children:[Object(a.jsx)("button",{className:"new-sub",onClick:function(){return i(!0)},children:"New Submission"}),c&&Object(a.jsx)(H,{show:c,handleClose:function(){return i(!1)},onNewSubmission:t})]})]})}),w=n(14),y=(n(65),function(e){var t=e.result;return Object(a.jsxs)("div",{className:"result-item",children:[Object(a.jsxs)("span",{children:[" ",t.label]}),Object(a.jsxs)("span",{children:[" ",Object(a.jsx)("b",{children:t.value})," points"]})]})}),k=(n(66),function(e){var t=e.results,n=t.fileResults,s=t.total;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(w.a,{className:"results",children:[Object(a.jsx)(w.a.Header,{children:"Score"}),Object(a.jsx)(w.a.Body,{children:n.map((function(e,t){return Object(a.jsx)(y,{result:e},t)}))}),Object(a.jsx)(w.a.Footer,{children:Object(a.jsx)(y,{result:s})})]})})}),B=(n(67),{200:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAABK1JREFUWAntl19oW3UUx0+atkSna0iYThCaKWw4H5bBEHxaN5zoW8SHMRG3Ij5K6x98EJQJfVFfKgp7ELsUh1MEG4XhgxMqDhTG3IYgDBWyoRutbLlu2mr+Xb/fm5zTX25v2qTNfNEDZ+fP7/zO+eTk3myLSZfi+34SV3ZDc9AMlHEWSjkH9aBFaAH6VSwWY3xzBDBZ6Ay0W+GdbE+p0DADPQpdrxxFg8y64dAkBy1BeyXsNbJmMFwe6xVJRJ+xrsHQZDyiUa9T4x2DYTK/sn9LIr/KmEsLkgzis9Ckm7+JPn8uduJno+jO6HMD+IehPQHCB5SVtDmXszizRWxTaJDFCbe0LiGIiutrDltRVxx/i7std1OHrXqNjkLQuvrK/IzsLb4pv1RKlucIrYc76Y4MsHHINZbcg259HeDCsMfL85/IsevfBO22Dm6WL4dftA3ppmihtkLd1Ehwa41/RAEx5wKx9cMb7m/ZlDsO9TmNFcoSeuBa99NH+azVfL1eF+prv31mG+L5gY0PyAvJfVan9TxrijH0NxMZPXEtL64mWkNLGNrXr30uU9dP2dXchp0ykcoZkPNNWQ2cjAa6qSFNqHWH0b9c9aQqjaGMXdXt0E5e+0KOeLPaRvbdsl3eSD8ufr3xAfWeFSw5xqBQ2aWzpbdCG5z84wd58OcJeezi27JYLwcbURDWqP+e97VMeiet1e7EVnkrvV+kCaQHbTZlDAql9cEGGCgQ7fNzHwZb+u6vizL665T8XcfOms9OrVYLfAJNlE5Yn12Dw/JO6oDEfXupgrM2QHaPjkKdb8k6AaFeSj1qmVOLP8ozV/JS9RswhDt249sWoB0Dd8u76SdloNmeICtps7kxKJRnU+G4W6K//7ZdMpZ8yEpmFy/I2NxxqdVr8tGN0/Lq1U/tbNvAnTKVfkoSQGoHYsWtjjHo21fEOf/d3SIEotA+u3GPXMYv8sd/nglyJxa+l5+uzMuFylwQ8497+jfJdHpUbo0NGlBfX5/5YUi72HCKGuumCpoIW3drfK33JrZZiQs0HE/J++lDMhRLLIMgWBiOTQjpiDEEWQxO4jD4a8aF0IfZtXzIR6/m5Uz5kvW7Kz4kx1NPyx3x2224gqglAH2KbswaNHJGGFShyEPeHgz9BHpZYzbhw3sk+YTc17+ZoWwCyHTqYACk9QqiVvOsd3sxborNZmx02FAW8VluikLLDanVV1+3VqovyAcLp+WRxHa5F88ShymEaxVILXtHgG1BrsgzikExAEAe5iBBXFUQ1/JcRQeGYRjrGS1Frd6FnUbukBMvg8rg8BwGBj/5ChaGYbwSFAd3CPQ75mVRX4Q1adkUsxiWg5nRobQKEfa1CyFUwzDMU9Tqnabdg/xsKGe/6JZHUQHBc24T/VqYUz8ejwe+Ws2zxlU2dnvZoMaMWSde3cVWxrEhXxUPul+tVv1KpeKXy+VlyjzPWUfVe+gTJeOrE7SpQDf+H9DTATqQw8OqZ1pLGyEeciNtxnWeRpMMNO8OUwDXuucRMEzloZnOJ3dQyYbQgjs87OM8SgpIdgWz7O3rgE/fUL6lHJaE7oBSzkM9aBFawANegP1f/lsb+AebDc086jr1pgAAAABJRU5ErkJggg==",500:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAjcAAAI3AGf6F88AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFRQTFRF////20lJ32BA1VVK1lxH11tK2VtJ1ltJ1lpK11tK11pK11tK11pK11pK11pK11pL11pK11pK2WJT4IB04YF155qQ55uR55uS55yS552U//39//7+aq9YLgAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAAA0klEQVQ4y4VTSRaFIAyLs+IYFVC5/z3/wgH86mtW2MRS0ha4EOWVavq+UVUe4Ym07HihK9M/Oi4G3jAUccgnNR+oE89nLV/QZtf/rzzZHjnimh+o9zoKfqIAgHT4FgwpgPL4GCdPzONxKIHo9Gd268mv7hR3EXL68LIfFi9ljsonXpwlSXsKSbKCCmqymyHNZoOQQhNWbTatNxNGGvS3d2nn9C3QywLxCrFI8ZmiUZfVU2j17K32zZp94iloltxucWDkkROHVh57eXHk1ZOX93v9f+YwNrm9YwJPAAAAAElFTkSuQmCC"}),V=function(e){var t=e.message,n=e.status,s=e.onClose;return Object(a.jsx)("div",{className:"toaster",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:B[n],alt:""}),Object(a.jsxs)("span",{children:[" ",t," "]}),Object(a.jsx)("button",{onClick:s,children:Object(a.jsx)("span",{children:"x"})})]})})},K=(n(68),{fileResults:[{id:"a",label:"A - Example",value:0},{id:"b",label:"B - Lovely landscapes",value:0},{id:"c",label:"C - Memorable moments",value:0},{id:"d",label:"D - Pet pictures",value:0},{id:"e",label:"E - Shiny selfies",value:0}],total:{label:"Total score",value:0}}),L=function(){var e=Object(s.useState)(K),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(s.useState)(""),u=Object(o.a)(c,2),d=u[0],b=u[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("h2",{children:[" Google HashCode judge system ",Object(a.jsx)("em",{children:"(mocked)"})]}),Object(a.jsx)(E,{onNewSubmission:function(e,t){if(t)return b(t),void setTimeout((function(){return b("")}),3e4);b("");var a=Object(r.a)(n.fileResults),s=n.total;for(var c in s.value=0,e){var o,u=Object(i.a)(a);try{for(u.s();!(o=u.n()).done;){var d=o.value;d.id===c&&(d.value=e[c])}}catch(h){u.e(h)}finally{u.f()}}var j,f=Object(i.a)(a);try{for(f.s();!(j=f.n()).done;){var A=j.value;s.value+=A.value}}catch(h){f.e(h)}finally{f.f()}l({fileResults:a,total:s})}}),Object(a.jsx)(k,{results:n}),d&&Object(a.jsx)(V,{status:"500",message:d,onClose:function(){return b("")}})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),l(e),c(e)}))};n(69),n(70);c.a.render(Object(a.jsx)(L,{}),document.getElementById("root")),U()}},[[71,1,2]]]);
//# sourceMappingURL=main.569bedaf.chunk.js.map