(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"Cuy+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),s=t("7oih"),c=t("7vrA"),i=t("k1TG"),n=t("8o2o"),o=t("TSYQ"),m=t.n(o),d=(t("K9S6"),t("17x9")),b=t.n(d),u={type:b.a.string.isRequired,as:b.a.elementType},f=r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,s=e.className,c=e.type,o=Object(n.a)(e,["as","className","type"]);return r.a.createElement(l,Object(i.a)({},o,{ref:a,className:m()(s,c&&c+"-feedback")}))}));f.displayName="Feedback",f.propTypes=u,f.defaultProps={type:"valid"};var p=f,v=r.a.createContext({controlId:void 0}),x=t("vUet"),y=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,d=e.isValid,b=e.isInvalid,u=e.isStatic,f=e.as,p=void 0===f?"input":f,y=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(l.useContext)(v),N=O.controlId;return s=O.custom?Object(x.b)(c,"custom-control-input"):Object(x.b)(s,"form-check-input"),r.a.createElement(p,Object(i.a)({},y,{ref:a,id:t||N,className:m()(o,s,d&&"is-valid",b&&"is-invalid",u&&"position-static")}))}));y.displayName="FormCheckInput",y.defaultProps={type:"checkbox"};var O=y,N=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,o=e.htmlFor,d=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(l.useContext)(v),u=b.controlId;return t=b.custom?Object(x.b)(s,"custom-control-label"):Object(x.b)(t,"form-check-label"),r.a.createElement("label",Object(i.a)({},d,{ref:a,htmlFor:o||u,className:m()(c,t)}))}));N.displayName="FormCheckLabel";var h=N,j=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,o=e.inline,d=e.disabled,b=e.isValid,u=e.isInvalid,f=e.feedback,y=e.className,N=e.style,j=e.title,E=e.type,w=e.label,P=e.children,I=e.custom,C=e.as,F=void 0===C?"input":C,k=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),R="switch"===E||I;s=R?Object(x.b)(c,"custom-control"):Object(x.b)(s,"form-check");var L=Object(l.useContext)(v).controlId,S=Object(l.useMemo)((function(){return{controlId:t||L,custom:R}}),[L,R,t]),V=null!=w&&!1!==w&&!P,g=r.a.createElement(O,Object(i.a)({},k,{type:"switch"===E?"checkbox":E,ref:a,isValid:b,isInvalid:u,isStatic:!V,disabled:d,as:F}));return r.a.createElement(v.Provider,{value:S},r.a.createElement("div",{style:N,className:m()(y,s,R&&"custom-"+E,o&&s+"-inline")},P||r.a.createElement(r.a.Fragment,null,g,V&&r.a.createElement(h,{title:j},w),(b||u)&&r.a.createElement(p,{type:b?"valid":"invalid"},f))))}));j.displayName="FormCheck",j.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},j.Input=O,j.Label=h;var E=j,w=(t("hFyo"),r.a.forwardRef((function(e,a){var t,s,c=e.bsPrefix,o=e.type,d=e.size,b=e.id,u=e.className,f=e.isValid,p=e.isInvalid,y=e.plaintext,O=e.readOnly,N=e.as,h=void 0===N?"input":N,j=Object(n.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(l.useContext)(v).controlId;if(c=Object(x.b)(c,"form-control"),y)(s={})[c+"-plaintext"]=!0,t=s;else if("file"===o){var w;(w={})[c+"-file"]=!0,t=w}else{var P;(P={})[c]=!0,P[c+"-"+d]=d,t=P}return r.a.createElement(h,Object(i.a)({},j,{type:o,ref:a,readOnly:O,id:b||E,className:m()(u,t,f&&"is-valid",p&&"is-invalid")}))})));w.displayName="FormControl",w.Feedback=p;var P=w,I=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.children,o=e.controlId,d=e.as,b=void 0===d?"div":d,u=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(x.b)(t,"form-group");var f=Object(l.useMemo)((function(){return{controlId:o}}),[o]);return r.a.createElement(v.Provider,{value:f},r.a.createElement(b,Object(i.a)({},u,{ref:a,className:m()(s,t)}),c))}));I.displayName="FormGroup";var C=I,F=t("JI6e"),k=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.column,c=e.srOnly,o=e.className,d=e.htmlFor,b=Object(n.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),u=Object(l.useContext)(v).controlId;t=Object(x.b)(t,"form-label");var f=m()(o,t,c&&"sr-only",s&&"col-form-label");return d=d||u,s?r.a.createElement(F.a,Object(i.a)({as:"label",className:f,htmlFor:d},b)):r.a.createElement("label",Object(i.a)({ref:a,className:f,htmlFor:d},b))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var R=k,L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,c=void 0===s?"small":s,o=e.muted,d=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(x.b)(t,"form-text"),r.a.createElement(c,Object(i.a)({},d,{ref:a,className:m()(l,t,o&&"text-muted")}))}));L.displayName="FormText";var S=L,V=r.a.forwardRef((function(e,a){return r.a.createElement(E,Object(i.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=E.Input,V.Label=E.Label;var g=V,G=t("YdCC"),T=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,s=e.className,c=e.validated,o=e.as,d=void 0===o?"form":o,b=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(x.b)(t,"form"),r.a.createElement(d,Object(i.a)({},b,{ref:a,className:m()(s,c&&"was-validated",l&&t+"-inline")}))}));T.displayName="Form",T.defaultProps={inline:!1},T.Row=Object(G.a)("form-row"),T.Group=C,T.Control=P,T.Check=E,T.Switch=g,T.Label=R,T.Text=S;var q=T,A=t("cWnB"),B=t("BA+U"),J=t.n(B);a.default=function(){return r.a.createElement(s.a,null,r.a.createElement(c.a,{className:J.a.content},r.a.createElement("h1",null,"Contact"),r.a.createElement(q,{method:"post",action:"https://formspree.io/lauravhaecke@gmail.com"},r.a.createElement(q.Row,null,r.a.createElement(q.Group,{className:"col-xs-12 col-md-6"},r.a.createElement(q.Label,null,"Name"),r.a.createElement(q.Control,{type:"text",name:"name",placeholder:"What's your name?",required:!0})),r.a.createElement(q.Group,{className:"col-xs-12 col-md-6",controlId:"formBasicEmail"},r.a.createElement(q.Label,null,"Email"),r.a.createElement(q.Control,{type:"email",name:"_replyto",placeholder:"What's your email address?",required:!0}))),r.a.createElement(q.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(q.Label,null,"Message"),r.a.createElement(q.Control,{name:"message",as:"textarea",rows:"3",placeholder:"So what do you want to know?",required:!0})),r.a.createElement(q.Group,{style:{textAlign:"center"}},r.a.createElement(A.a,{className:J.a.button,type:"submit"},"send")))))}},hFyo:function(e,a,t){"use strict";t("pIFo");var l=function(){};e.exports=l}}]);
//# sourceMappingURL=component---src-pages-contact-js-8f88c5d9b6ac2fc18f78.js.map