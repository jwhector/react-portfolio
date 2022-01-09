(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{144:function(e,c,t){},145:function(e,c,t){},146:function(e,c,t){},147:function(e,c,t){},452:function(e,c,t){},453:function(e,c,t){},454:function(e,c,t){},455:function(e,c,t){},456:function(e,c,t){"use strict";t.r(c);var s=t(2),i=t.n(s),a=t(23),n=t.n(a),o=t(10),r=(t(144),t(145),t(146),t(147),t(0));function l(e){return Object(r.jsxs)("div",{id:"".concat(e.page,"-btn"),onClick:e.onClick,className:"circle-container ".concat(e.converge?e.convergeClass:""," ").concat(e.inFocus===e.page?"in-focus":""," ").concat(e.className),children:[Object(r.jsx)("div",{className:"menu-circle",onClick:e.onClick}),Object(r.jsx)("h2",{className:"menu-label",children:e.name})]})}var j=t(92),b=t(3);t(149),t(452);function d(e){var c=function(c){console.log(c.target.innerText),e.setCurPage(c.target.innerText)};return Object(r.jsxs)("div",{className:"nav-bar",children:[Object(r.jsx)("h1",{id:"name-title",children:"JARED HECTOR"}),Object(r.jsxs)("ul",{className:"nav-links ".concat(e.hideLinks?"no-display":""),children:[Object(r.jsx)("li",{onClick:c,className:"".concat("ABOUT"===e.curPage?"active-link":""),children:"ABOUT"}),Object(r.jsx)("li",{onClick:c,className:"".concat("PORTFOLIO"===e.curPage?"active-link":""),children:"PORTFOLIO"}),Object(r.jsx)("li",{onClick:c,className:"".concat("CONTACT"===e.curPage?"active-link":""),children:"CONTACT"}),Object(r.jsx)("li",{onClick:function(){window.open("./resume.pdf","_blank")},children:"RESUME"})]})]})}function m(e){var c=Object(s.useState)(!1),t=Object(o.a)(c,2),i=t[0],a=t[1],n=Object(s.useState)(""),m=Object(o.a)(n,2),h=m[0],u=m[1],O=Object(b.f)(),g=function(c){var t=c.currentTarget.id.split("-")[0],s=c.currentTarget;u(t),a(!i),Object(j.a)(c.currentTarget).then((function(){s.addEventListener("animationend",(function(){console.log("Animation ended"),O("/".concat(t))})),s.classList.add("centered"),"about-btn"===s.id?s.classList.add("shrink-circle"):s.classList.add("shrink-all"),e.setCurPage(t.toUpperCase()),Object(j.a)(s).then((function(){}))}))};return Object(r.jsxs)("div",{id:"home",children:[Object(r.jsx)(d,{hideLinks:!0}),Object(r.jsxs)("div",{className:"body-container menu-circle-container",children:[Object(r.jsx)(l,{name:"About",page:"about",convergeClass:"center-from-left",converge:i,onClick:g,inFocus:h}),Object(r.jsx)(l,{name:"Portfolio",page:"portfolio",convergeClass:"fade-center",converge:i,onClick:g,inFocus:h}),Object(r.jsx)(l,{name:"Contact",page:"contact",convergeClass:"center-from-right",converge:i,onClick:g,inFocus:h})]})]})}t(453);var h=t.p+"static/media/stanford.853430ad.png",u=t.p+"static/media/uw.23e5d986.png";function O(e){var c=Object(s.useState)(!1),t=Object(o.a)(c,2),i=t[0],a=t[1],n=Object(s.useState)(!1),j=Object(o.a)(n,2),m=(j[0],j[1]),O=Object(s.useRef)(null),g=Object(b.f)(),x=!1;Object(s.useEffect)((function(){e.setCurPage("ABOUT")}),[]),Object(s.useEffect)((function(){m(e.isMobile)}),[e.isMobile]),Object(s.useEffect)((function(){if(O.current||"ABOUT"===e.curPage){if("ABOUT"!==e.curPage){var c=O.current;return a(!0),c.addEventListener("animationend",f),function(){c.removeEventListener("animationend",f)}}a(!1)}else a(!0),setTimeout(f,1e3)}),[e.curPage]);var f=function(){x||(g("/".concat(e.curPage.toLowerCase())),x=!0)};return Object(r.jsxs)("div",{id:"about",className:"page-container",children:[Object(r.jsx)(d,{curPage:e.curPage,setCurPage:e.setCurPage}),Object(r.jsxs)("div",{className:"body-container",children:[e.isMobile?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(l,{name:"About",page:"about",className:"centered in-focus shrinked"}),Object(r.jsx)("h2",{id:"me-title",className:"about-title ".concat(i?"fade-out":""),children:"ME"}),Object(r.jsx)("p",{id:"about-me-txt",className:"".concat(i?"fade-out":""),children:"Hi, I'm Jared. I'm a full stack developer from Seattle, Washington. Recently, I came to realize web development would be a great opportunity to exercise my creativity and drive to reach wide audiences. In short: I love music, I love coding, and every day I strive to be the solution to a problem."}),e.isMobile?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("svg",{ref:O,id:"about-me-svg",className:"small-stroke ".concat(i?"stroke-out-small":""),viewBox:"0 0 351 177",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M350 176L228.981 1H0",stroke:"black"})}),Object(r.jsx)("h2",{id:"education-title",className:"about-title ".concat(i?"fade-out":""),children:"EDUCATION"}),e.isMobile?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("svg",{id:"education-svg",className:"lg-stroke ".concat(i?"stroke-out-lg":""),viewBox:"0 0 446 177",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M1 176L122.019 1H445.5",stroke:"black"})}),Object(r.jsxs)("div",{id:"education-container",className:"".concat(i?"fade-out":""),children:[Object(r.jsxs)("div",{className:"school-container",children:[Object(r.jsx)("img",{className:"school-logo",src:h}),Object(r.jsxs)("div",{className:"school-info",children:[Object(r.jsx)("h2",{className:"school-title",children:"Stanford University"}),Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{className:"school-degree",children:"B.S., Symbolic Systems"})]})]}),Object(r.jsxs)("div",{className:"school-container",style:{marginTop:"5rem"},children:[Object(r.jsx)("img",{className:"school-logo",src:u,style:{transform:"scale(1.3)"}}),Object(r.jsxs)("div",{className:"school-info",children:[Object(r.jsx)("h2",{className:"school-title",children:"University of Washington"}),Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{className:"school-degree",children:"Full Stack Certification"})]})]})]}),Object(r.jsx)("h2",{id:"skills-title",className:"about-title ".concat(i?"fade-out":""),children:"SKILLS"}),e.isMobile?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("svg",{id:"skills-svg",className:"small-stroke ".concat(i?"stroke-out-small":""),viewBox:"0 0 351 102",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M350 1L228.981 101H0",stroke:"black"})}),Object(r.jsxs)("div",{id:"skills-container",className:"".concat(i?"fade-out":""),children:[Object(r.jsx)("h2",{className:"skill-item",children:"React"}),Object(r.jsx)("h2",{className:"skill-item",children:"Node.js"}),Object(r.jsx)("h2",{className:"skill-item",children:"HTML, CSS, and JS Front End Stack"}),Object(r.jsx)("h2",{className:"skill-item",children:"MySQL, Postgres, MongoDB"}),Object(r.jsx)("h2",{className:"skill-item",children:"Python"})]})]})]})}t(454);var g=t.p+"static/media/glassanimals.0ce159dc.png",x=t.p+"static/media/metameme.8298deef.png",f=t.p+"static/media/mindgro.b14db59e.jpg",v=t.p+"static/media/viewnify.1b0487dd.png",p=t.p+"static/media/github.95f11107.png";function N(e){return Object(r.jsxs)("div",{ref:e.container,className:"bubble-container ".concat("PORTFOLIO"===e.curPage?"":"retreat"),children:[Object(r.jsxs)("div",{className:"bubble top-left ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(r.jsx)("img",{className:"bubble-img",src:v}),Object(r.jsx)("a",{href:"https://viewnify.herokuapp.com/",children:Object(r.jsxs)("div",{className:"bubble-info",children:[Object(r.jsx)("h2",{children:"Viewnify"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/viewnify",children:Object(r.jsx)("img",{className:"ico",src:p})})]})})]}),Object(r.jsxs)("div",{className:"bubble top-right ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(r.jsx)("img",{className:"bubble-img",src:x}),Object(r.jsx)("a",{href:"https://meta-meme-market.herokuapp.com/",children:Object(r.jsxs)("div",{className:"bubble-info",children:[Object(r.jsx)("h2",{children:"MetaMeme"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/meta-meme-market",children:Object(r.jsx)("img",{className:"ico",src:p})})]})})]}),Object(r.jsxs)("div",{className:"bubble bot-left ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(r.jsx)("img",{className:"bubble-img",src:f}),Object(r.jsx)("a",{href:"https://jwhector.github.io/mind-gro/",children:Object(r.jsxs)("div",{className:"bubble-info",children:[Object(r.jsx)("h2",{children:"MindGro"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/mind-gro",children:Object(r.jsx)("img",{className:"ico",src:p})})]})})]}),Object(r.jsxs)("div",{className:"bubble bot-right ".concat("PORTFOLIO"===e.curPage?"":"exit"),children:[Object(r.jsx)("img",{className:"bubble-img",src:g}),Object(r.jsx)("a",{href:"https://jwhector.github.io/code-quiz/",children:Object(r.jsxs)("div",{className:"bubble-info",children:[Object(r.jsx)("h2",{children:"Glass Animals Quiz"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/code-quiz",children:Object(r.jsx)("img",{className:"ico",src:p})})]})})]})]})}function P(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{ref:e.container,className:"mobile-portfolio",children:[Object(r.jsx)("img",{className:"mobile-portfolio-img",src:v}),Object(r.jsxs)("div",{className:"mobile-portfolio-info",children:[Object(r.jsx)("h2",{className:"mobile-portfolio-title",children:"Viewnify"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/viewnify",children:Object(r.jsx)("img",{className:"ico",src:p})})]})]}),Object(r.jsxs)("div",{className:"mobile-portfolio",children:[Object(r.jsx)("img",{className:"mobile-portfolio-img",src:x}),Object(r.jsxs)("div",{className:"mobile-portfolio-info",children:[Object(r.jsx)("h2",{className:"mobile-portfolio-title",children:"MetaMeme"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/meta-meme-market",children:Object(r.jsx)("img",{className:"ico",src:p})})]})]}),Object(r.jsxs)("div",{className:"mobile-portfolio",children:[Object(r.jsx)("img",{className:"mobile-portfolio-img",src:f}),Object(r.jsxs)("div",{className:"mobile-portfolio-info",children:[Object(r.jsx)("h2",{className:"mobile-portfolio-title",children:"Mind-Gro"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/mind-gro",children:Object(r.jsx)("img",{className:"ico",src:p})})]})]}),Object(r.jsxs)("div",{className:"mobile-portfolio",children:[Object(r.jsx)("img",{className:"mobile-portfolio-img",src:g}),Object(r.jsxs)("div",{className:"mobile-portfolio-info",children:[Object(r.jsx)("h2",{className:"mobile-portfolio-title",children:"Glass Animals Quiz"}),Object(r.jsx)("a",{href:"https://github.com/jwhector/code-quiz",children:Object(r.jsx)("img",{className:"ico",src:p})})]})]})]})}function k(e){var c=Object(s.useRef)(null),t=Object(b.f)(),i=!1;Object(s.useEffect)((function(){e.setCurPage("PORTFOLIO")}),[]),Object(s.useEffect)((function(){var t=c.current;if("PORTFOLIO"!==e.curPage)return t.addEventListener("animationend",a),function(){t.removeEventListener("animationend",a)}}),[e.curPage]);var a=function(){i||(t("/".concat(e.curPage.toLowerCase())),i=!0)};return Object(r.jsxs)("div",{id:"portfolio",className:"page-container",children:[Object(r.jsx)(d,{curPage:e.curPage,setCurPage:e.setCurPage}),Object(r.jsxs)("div",{className:"body-container",children:[e.isMobile?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(l,{name:"Portfolio",page:"portfolio",className:"centered shrinked shrinked-text in-focus"}),e.isMobile?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(N,{container:c,curPage:e.curPage}),e.isMobile?Object(r.jsx)(P,{container:c,curPage:e.curPage}):Object(r.jsx)(r.Fragment,{})]})]})}var C=t(91),w=(t(455),t.p+"static/media/github.6cdbb793.png"),T=t.p+"static/media/linkedin.7be0d03c.png",L=t.p+"static/media/email.2936ace5.png";function M(e){var c=Object(s.useRef)(null),t=Object(b.f)(),i=!1;Object(s.useEffect)((function(){e.setCurPage("CONTACT")}),[]),Object(s.useEffect)((function(){var t=c.current;if("CONTACT"!==e.curPage)return t.addEventListener("animationend",a),function(){t.removeEventListener("animationend",a)}}),[e.curPage]);var a=function(){i||(t("/".concat(e.curPage.toLowerCase())),i=!0)};return Object(r.jsxs)("div",{id:"contact",className:"page-container",children:[Object(r.jsx)(d,{curPage:e.curPage,setCurPage:e.setCurPage}),Object(r.jsxs)("div",{className:"body-container",children:[Object(r.jsx)(l,{name:"Contact",page:"contact",className:"centered shrinked shrinked-text in-focus ".concat("CONTACT"===e.curPage?"lift-circle":"lower-circle")}),Object(r.jsxs)("div",{ref:c,className:"contact-container ".concat("CONTACT"===e.curPage?"":"retract-contact"),children:[Object(r.jsx)("div",{className:"".concat("CONTACT"===e.curPage?"":"retract-contact-left"," contact-elem github"),children:Object(r.jsx)("a",{href:"https://github.com/jwhector",children:Object(r.jsx)("img",{src:w})})}),Object(r.jsx)("div",{className:"contact-elem email",children:Object(r.jsx)("a",{href:"mailto:jared.hector@gmail.com",children:Object(r.jsx)("img",{src:L})})}),Object(r.jsx)("div",{className:"".concat("CONTACT"===e.curPage?"":"retract-contact-right"," contact-elem linkedin"),children:Object(r.jsx)("a",{href:"https://linkedin.com/in/jared-hector",children:Object(r.jsx)("img",{src:T})})})]})]})]})}var y=function(){var e=Object(s.useState)("home"),c=Object(o.a)(e,2),t=c[0],i=c[1],a=Object(s.useState)(window.innerWidth<=768),n=Object(o.a)(a,2),l=n[0],j=n[1],d=function(){j(window.innerWidth<=768)};return Object(s.useState)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]),Object(r.jsx)(C.a,{children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",element:Object(r.jsx)(m,{curPage:t,setCurPage:i,isMobile:l})}),Object(r.jsx)(b.a,{path:"/about",element:Object(r.jsx)(O,{curPage:t,setCurPage:i,isMobile:l})}),Object(r.jsx)(b.a,{path:"/portfolio",element:Object(r.jsx)(k,{curPage:t,setCurPage:i,isMobile:l})}),Object(r.jsx)(b.a,{path:"/contact",element:Object(r.jsx)(M,{curPage:t,setCurPage:i,isMobile:l})})]})})};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[456,1,2]]]);
//# sourceMappingURL=main.ae7b2a63.chunk.js.map