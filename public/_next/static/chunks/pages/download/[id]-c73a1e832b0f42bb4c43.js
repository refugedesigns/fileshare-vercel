(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{5823:function(e){e.exports=function(e,t,n,r){var a=new Blob("undefined"!==typeof r?[r,e]:[e],{type:n||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,t);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(a):window.webkitURL.createObjectURL(a),i=document.createElement("a");i.style.display="none",i.href=s,i.setAttribute("download",t),"undefined"===typeof i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),setTimeout((function(){document.body.removeChild(i),window.URL.revokeObjectURL(s)}),200)}}},2707:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),a=n(5675),s=function(e){var t,n=e.file,s=(t=+n.sizeInBytes,"".concat((+t/1048576).toFixed(2)," MB"));return(0,r.jsxs)("div",{className:"flex items-center justify-center w-full p-4  space-x-4",children:[(0,r.jsx)(a.default,{src:"../assets/".concat(n.format,".png"),alt:"",height:60,width:60}),(0,r.jsx)("span",{className:"text-gray-600 text-md",children:n.filename}),(0,r.jsx)("span",{className:"text-gray-600 text-md",children:s})]})}},131:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),a=n(7757),s=n.n(a),i=n(2137),c=n(7294),o=n(4651),d=n(2707),u=n(5675),l=n(5823),f=n.n(l),w=n(9008);function x(){var e=(0,o.useRouter)(),t=(0,c.useState)(),n=t[0],a=t[1],l=e.query.id;(0,c.useEffect)((function(){(function(){var t=(0,i.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.query.id){t.next=8;break}return t.next=3,fetch("/api/files/".concat(l));case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,a(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.query.id]);var x=function(){var e=(0,i.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/files/download/".concat(l));case 2:return t=e.sent,e.next=5,t.blob();case 5:r=e.sent,console.log(n),f()(r,n.filename);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(w.default,{children:(0,r.jsx)("title",{children:"Fire Share 2.0.0"})}),(0,r.jsx)("main",{className:"flex flex-col items-center justify-center py-4 space-y-4 bg-gray-200 rounded-md shadow-xl w-96",children:l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(u.default,{src:"../assets/folder.png",alt:"",height:60,width:60})}),(0,r.jsx)("h1",{className:"text-xl text-gray-600",children:"Your file is ready to be downloaded"}),n&&(0,r.jsx)(d.Z,{file:{format:n.format,filename:n.filename,sizeInBytes:n.sizeInBytes}}),(0,r.jsx)("button",{className:"button",onClick:x,children:"Download"})]}):(0,r.jsx)("span",{children:"Oops! File does not exist! check the URL"})})]})}},3373:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download/[id]",function(){return n(131)}])}},function(e){e.O(0,[478,774,888,179],(function(){return t=3373,e(e.s=t);var t}));var t=e.O();_N_E=t}]);