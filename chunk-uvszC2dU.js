import{A as ze,B as ri$1,C as pi,D as wr$1,E as we,F as $,G as Ks$1,H as ti,I as B,J as Qt,K as On$1,L as R,M as B$1,O as yi$1,P as z,R as Z,T as vr$1,U as Is$1,V as si,W as J,X as ve,Y as Ws$1,_ as fi,a as Ft,f as Tt$1,h as bi$1,i as Dr$1,l as Oi,m as _i,n as Ci,o as Kr$1,p as Vt,q as Qs$1,s as Le,t as At,u as Ri,v as gi,w as vi$1,x as mi,z as ni}from"./main-5L4GMCOS.js";import{d as vi$2,f as wi,n as Ne,p as ze$1,r as Qe,s as be$1,t as Ci$1,u as ti$1}from"./chunk-Q9hSnEzv.js";import{n as U,t as P}from"./chunk-CUMJU09s.js";import{a as Ue$1,c as pi$1,i as Oe,l as qe,o as We$1,s as me,t as $e$1,u as ze$2}from"./chunk-DyRSh2x5.js";import{_ as wi$1,a as Pe$1,b as xi$1,c as Tt$2,f as fi$1,g as ui,h as pi$2,i as Oi$1,l as X,n as Mn$1,r as Ni}from"./chunk-EQIuFzLr.js";import{a as P$1,i as L,l as w,n as E,o as R$1,r as F,s as b,t as A}from"./chunk-B2gCDUTZ.js";import{a as K,c as bi$2,l as ci,o as U$1,p as ri$2,r as Ii,s as ai,t as Di,u as li}from"./chunk-fkCr07Hl.js";import{$ as T,$n as vC,Bn as sl$1,Bt as dC,C as Jh$1,D as KD,Dt as Zh$1,En as ow,Gn as tg,Gt as eg,H as Pd$1,Hn as sw,J as RC,Kn as to$1,Ln as sV,Lt as bt,M as Kh$1,O as Kc$1,On as pC,Ot as Zi,Pn as rC,R as OI,Rn as sg$1,Rt as co,S as Ie,Sn as nw,Tt as Ze,U as Pe$2,W as Pg$1,Wn as tC,Xn as uo$1,Xt as gC,Yn as uS,Yt as g,Zn as ur$1,Zt as gg,_ as Gh$1,_r as zh$1,an as jh$1,b as HE,br as zw,c as Cn,cn as kC,ct as Vh,d as Dg,dn as mC,en as he$1,g as G,gn as mn,gr as zC,gt as XI,hr as yn,in as jd$1,l as D,lt as Vu,mr as yl$1,mt as Ww,n as $y,nn as iC,o as Bu,ot as VE,p as EC,rn as is$1,rr as vs$1,rt as Uh$1,s as Ce,sn as jp$1,sr as x,st as Ve,tn as ho$1,tr as vg,u as DC,un as ly,v as Gu$1,vt as Xs$1,wn as oC,wt as ZC,x as Hu$1,xn as nt$1,y as Gw,yn as nC,yt as Y,zn as si$1}from"./chunk-8go5I85o.js";import{i as x$1,n as B$2,r as w$1}from"./chunk-B03JrT7s.js";var Mn=`<sui-embed
    suiSource="youtube"
    suiId="O6Xo21L0ybE"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var In=`<sui-embed
    suiSource="vimeo"
    suiId="125292332"
    suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>
`;var Pn=`<sui-embed
    suiIcon="right circle arrow"
    suiSourceUrl="http://www.myfav.es/jack"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var kn=`<sui-embed
    suiAspectRatio="4:3"
    suiSource="youtube"
    suiId="HTZudKi36bo"
    suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>
`;var _m=(()=>{class n{constructor(){this.sanitizer=g(yl$1)}transform(o,...a){return this.sanitizer.bypassSecurityTrustResourceUrl(o)}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵpipe=co({name:`safeUrl`,type:n,pure:!0})}}return n})();var Rt=(()=>{class n{constructor(){this.cdr=g(Pg$1),this.suiSource=null,this.suiAspectRatio=null,this.suiIcon=`video play`,this.suiId=null,this.suiPlaceHolder=null,this.suiSourceUrl=null,this.suiAutoplay=!1,this.isPLaying=!1,this.videoUrl=``}ngAfterViewInit(){this.suiAutoplay&&this.playVideo()}get classes(){return[`ui`,this.suiAspectRatio,`embed`,J.getPropClass(this.isPLaying,`active`)].join(` `)}playVideo(){this.suiSourceUrl&&(this.videoUrl=this.suiSourceUrl),this.suiSource===`vimeo`&&(this.videoUrl=`//player.vimeo.com/video/${this.suiId}?api=false&autoplay=true&byline=false&color=%23444444&portrait=false&title=false`),this.suiSource===`youtube`&&(this.videoUrl=`//www.youtube.com/embed/${this.suiId}?autohide=true&autoplay=true&color=%23444444&hq=true&jsapi=false&modestbranding=true`),this.isPLaying=!0,this.cdr.detectChanges()}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){function o(s,p){if(s&1&&zh$1(0,`img`,2),s&2){let m=pC();Gh$1(`src`,m.suiPlaceHolder)}}function a(s,p){if(s&1&&(is$1(0,`div`,3),zh$1(1,`iframe`,4),nw(2,`safeUrl`),Vu()),s&2){let m=pC();KD(),Gh$1(`src`,ow(2,1,m.videoUrl),jp$1)}}return OI({type:n,selectors:[[`sui-embed`]],inputs:{suiSource:`suiSource`,suiAspectRatio:`suiAspectRatio`,suiIcon:`suiIcon`,suiId:`suiId`,suiPlaceHolder:`suiPlaceHolder`,suiSourceUrl:`suiSourceUrl`,suiAutoplay:`suiAutoplay`},decls:4,vars:4,consts:[[3,`ngClass`],[`sui-icon`,``,3,`click`,`suiIconType`],[1,`placeholder`,3,`src`],[1,`embed`],[`scrolling`,`no`,`webkitallowfullscreen`,``,`mozallowfullscreen`,``,`allowfullscreen`,``,`width`,`100%`,`height`,`100%`,`frameborder`,`0`,3,`src`]],template:function(p,m){p&1&&(is$1(0,`div`,0)(1,`i`,1),Kh$1(`click`,function(){return m.playVideo()}),Vu(),XI(2,o,1,1,`img`,2),XI(3,a,3,3,`div`,3),Vu()),p&2&&(Gh$1(`ngClass`,m.classes),KD(),Gh$1(`suiIconType`,m.suiIcon),KD(),tC(m.suiPlaceHolder?2:-1),KD(),tC(m.isPLaying?3:-1))},dependencies:[sl$1,Gw,we,_m],encapsulation:2})})()}}return uS([ve()],n.prototype,`suiAutoplay`,void 0),n})();var Fn=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Rt]})}}return n})();var zt=class{constructor(){this.isDefinitionsActive=!0}};var An=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-embed-youtube-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiSource`,`youtube`,`suiId`,`O6Xo21L0ybE`,`suiPlaceHolder`,`https://semantic-ui.com/images/image-16by9.png`]],template:function(a,s){a&1&&zh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();var Vn=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-embed-vimeo-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiSource`,`vimeo`,`suiId`,`125292332`,`suiPlaceHolder`,`https://semantic-ui.com/images/vimeo-example.jpg`]],template:function(a,s){a&1&&zh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();var Bn=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-embed-custom-content-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiIcon`,`right circle arrow`,`suiSourceUrl`,`http://www.myfav.es/jack`,`suiPlaceHolder`,`https://semantic-ui.com/images/image-16by9.png`]],template:function(a,s){a&1&&zh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();var On=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-embed-aspect-ratio-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiAspectRatio`,`4:3`,`suiSource`,`youtube`,`suiId`,`HTZudKi36bo`,`suiPlaceHolder`,`https://semantic-ui.com/images/4by3.jpg`]],template:function(a,s){a&1&&zh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();function Im(n,u){n&1&&zh$1(0,`doc-embed-youtube-example`)}function Pm(n,u){n&1&&zh$1(0,`doc-embed-vimeo-example`)}function km(n,u){n&1&&zh$1(0,`doc-embed-custom-content-example`)}function Fm(n,u){n&1&&zh$1(0,`doc-embed-aspect-ratio-example`)}function Am(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`States`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`YouTube`),Vu(),is$1(6,`p`),zC(7,`An embed can be used to display YouTube Content`),Vu(),jh$1(8,Im,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Vimeo`),Vu(),is$1(12,`p`),zC(13,`An embed can be used to display Vimeo content.`),Vu(),jh$1(14,Pm,1,0,`ng-template`,5),Vu(),is$1(15,`doc-code-sample`,3)(16,`h3`,4),zC(17,`Custom Content`),Vu(),is$1(18,`p`),zC(19,`An embed can display any web content`),Vu(),jh$1(20,km,1,0,`ng-template`,5),Vu(),is$1(21,`h2`,2),zC(22,`Variations`),Vu(),is$1(23,`doc-code-sample`,3)(24,`h3`,4),zC(25,`Aspect Ratio`),Vu(),is$1(26,`p`),zC(27,`An embed can specify an alternative aspect ratio`),Vu(),jh$1(28,Fm,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetYoutube),KD(6),Gh$1(`templateCode`,o.snippetVimeo),KD(6),Gh$1(`templateCode`,o.snippetCustomContent),KD(8),Gh$1(`templateCode`,o.snippetAspectRatio)}}function Vm(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-embed`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiSource`),Vu(),is$1(20,`td`),zC(21,`Specifies a source to use. Cannot be used together with url. Allowed values could be `),is$1(22,`span`,7),zC(23,`'youtube'`),Vu(),zC(24,` | `),is$1(25,`span`,7),zC(26,`'vimeo'`),Vu(),zC(27,` | `),is$1(28,`span`,7),zC(29,`null`),Vu()(),is$1(30,`td`)(31,`div`,8),zC(32,` string`),Vu()(),is$1(33,`td`)(34,`div`,9),zC(35,` null`),Vu()()(),is$1(36,`tr`)(37,`td`),zC(38,`suiAspectRatio`),Vu(),is$1(39,`td`),zC(40,` An embed can specify an alternative aspect ratio. Allowed values could be `),is$1(41,`span`,7),zC(42,`'4:3'`),Vu(),zC(43,` | `),is$1(44,`span`,7),zC(45,`'16:9'`),Vu(),zC(46,` | `),is$1(47,`span`,7),zC(48,`'21:9'`),Vu(),zC(49,` | `),is$1(50,`span`,7),zC(51,`null`),Vu()(),is$1(52,`td`)(53,`div`,8),zC(54,`string`),Vu()(),is$1(55,`td`)(56,`div`,9),zC(57,`null`),Vu()()(),is$1(58,`tr`)(59,`td`),zC(60,`suiIcon `),Vu(),is$1(61,`td`),zC(62,` Specifies an icon to use with placeholder content. `),Vu(),is$1(63,`td`)(64,`div`,8),zC(65,`string`),Vu()(),is$1(66,`td`)(67,`div`,9),zC(68,`video play`),Vu()()(),is$1(69,`tr`)(70,`td`),zC(71,`suiId`),Vu(),is$1(72,`td`),zC(73,` Specifies an id for source. `),Vu(),is$1(74,`td`)(75,`div`,8),zC(76,`string`),Vu(),zC(77,` | `),is$1(78,`div`,8),zC(79,`number`),Vu()(),is$1(80,`td`)(81,`div`,9),zC(82,`null`),Vu()()(),is$1(83,`tr`)(84,`td`),zC(85,`suiPlaceHolder`),Vu(),is$1(86,`td`),zC(87,` A placeholder image for embed `),Vu(),is$1(88,`td`)(89,`div`,8),zC(90,`string`),Vu()(),is$1(91,`td`)(92,`div`,9),zC(93,`null`),Vu()()(),is$1(94,`tr`)(95,`td`),zC(96,`suiSourceUrl`),Vu(),is$1(97,`td`),zC(98,` Specifies a url to use for embed. Cannot be used together with source `),Vu(),is$1(99,`td`)(100,`div`,8),zC(101,`string`),Vu()(),is$1(102,`td`)(103,`div`,9),zC(104,`null`),Vu()()(),is$1(105,`tr`)(106,`td`),zC(107,`suiAutoplay`),Vu(),is$1(108,`td`),zC(109,` Setting to true or false will force autoplay `),Vu(),is$1(110,`td`)(111,`div`,8),zC(112,` boolean `),Vu()(),is$1(113,`td`)(114,`div`,9),zC(115,` false `),Vu()()()()()())}var Ln=(()=>{class n{constructor(o){this.snippetYoutube=Mn,this.snippetVimeo=In,this.snippetCustomContent=Pn,this.snippetAspectRatio=kn,this.isDefinitionsActive=!0,o.setTitle(`Embed | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-embed`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Embed`,`subHeader`,`An embed displays content from other websites like YouTube videos or Google Maps`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,Am,29,4,`div`,1)(2,Vm,116,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,An,Vn,Bn,On],encapsulation:2,changeDetection:1})}}return n})();var Hn=`<button sui-button
        (click)="simpleDimmerVisible = !simpleDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="simpleDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Wn=`dimmerVisible: boolean = false;
`;var Rn=`<button sui-button
        (click)="contentDimmerVisible = !contentDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="contentDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>

  <ng-template suiDimmerContent>
    <h2 sui-header
        suiIcon
        suiInverted>
      <i sui-icon
         suiIconType="heart"></i>
      Dimmed Message!
    </h2>
  </ng-template>
</div>
`;var zn=`<button sui-button
        (click)="pageDimmerVisible = !pageDimmerVisible">
  Toggle Dimmer
</button>

<div sui-dimmer
     suiDimmerFullPage
     [(dimmed)]="pageDimmerVisible">
  <ng-template suiDimmerContent>
    <h2 sui-header
        suiIcon
        suiInverted>
      <i sui-icon
         suiIconType="mail"></i>
      Dimmed Message
    </h2>
    <div suiSubHeader>Dimmer sub-header</div>
  </ng-template>
</div>
`;var jn=`<div sui-segment
     sui-dimmer
     dimmed="true">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Nn=`<div sui-segment
     sui-dimmer
     disabled>
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Un=`<button sui-button
        (click)="blurringDimmerVisible = !blurringDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     [(dimmed)]="blurringDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var $n=`<button sui-button
        (click)="blurringDInvertedDimmerVisible = !blurringDInvertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     suiDimmerInverted
     [(dimmed)]="blurringDInvertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Yn=`<button sui-button
        (click)="topAlignmentDimmerVisible = !topAlignmentDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerAlignment="top"
     [(dimmed)]="topAlignmentDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>

  <ng-template suiDimmerContent>
    <h2 sui-header
        suiInverted>
      Title
    </h2>
    <div sui-button
         suiEmphasis="primary">Add
    </div>
    <div sui-button>View</div>
  </ng-template>
</div>
`;var Gn=`<button sui-button
        (click)="bottomAlignmentDimmerVisible = !bottomAlignmentDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerAlignment="bottom"
     [(dimmed)]="bottomAlignmentDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>

  <ng-template suiDimmerContent>
    <h2 sui-header
        suiInverted>
      Title
    </h2>
    <div sui-button
         suiEmphasis="primary">Add
    </div>
    <div sui-button>View</div>
  </ng-template>
</div>
`;var Xn=`<button sui-button
        (click)="invertedDimmerVisible = !invertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerInverted
     [(dimmed)]="invertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;function Ym(n,u){n&1&&(is$1(0,`h2`,4),zh$1(1,`i`,5),zC(2,` Dimmed Message! `),Vu())}function Gm(n,u){n&1&&(is$1(0,`h2`,3),zh$1(1,`i`,4),zC(2,` Dimmed Message `),Vu(),is$1(3,`div`,5),zC(4,`Dimmer sub-header`),Vu())}function Xm(n,u){n&1&&(is$1(0,`h2`,4),zC(1,` Title `),Vu(),is$1(2,`div`,5),zC(3,`Add `),Vu(),is$1(4,`div`,6),zC(5,`View`),Vu())}function Jm(n,u){n&1&&(is$1(0,`h2`,4),zC(1,` Title `),Vu(),is$1(2,`div`,5),zC(3,`Add `),Vu(),is$1(4,`div`,6),zC(5,`View`),Vu())}var We=class{constructor(){this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1}};var qn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-simple-example`]],standalone:!1,features:[uo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.simpleDimmerVisible=!s.simpleDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.simpleDimmerVisible,m)||(s.simpleDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),Vu()),a&2&&(KD(2),vg(`dimmed`,s.simpleDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var Zn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-content-example`]],standalone:!1,features:[uo$1],decls:5,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`],[`suiDimmerContent`,``],[`sui-header`,``,`suiIcon`,``,`suiInverted`,``],[`sui-icon`,``,`suiIconType`,`heart`]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.contentDimmerVisible=!s.contentDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.contentDimmerVisible,m)||(s.contentDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),jh$1(4,Ym,3,0,`ng-template`,3),Vu()),a&2&&(KD(2),vg(`dimmed`,s.contentDimmerVisible))},dependencies:[Dr$1,Ws$1,Ii,Ci$1,be$1,we,ze],encapsulation:2,changeDetection:1})}}return n})();var Kn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-page-example`]],standalone:!1,features:[uo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-dimmer`,``,`suiDimmerFullPage`,``,3,`dimmedChange`,`dimmed`],[`suiDimmerContent`,``],[`sui-header`,``,`suiIcon`,``,`suiInverted`,``],[`sui-icon`,``,`suiIconType`,`mail`],[`suiSubHeader`,``]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.pageDimmerVisible=!s.pageDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.pageDimmerVisible,m)||(s.pageDimmerVisible=m),m}),jh$1(3,Gm,5,0,`ng-template`,2),Vu()),a&2&&(KD(2),vg(`dimmed`,s.pageDimmerVisible))},dependencies:[Ws$1,Qs$1,Ii,Ci$1,be$1,we],encapsulation:2,changeDetection:1})}}return n})();var Qn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-active-example`]],standalone:!1,features:[uo$1],decls:2,vars:0,consts:[[`sui-segment`,``,`sui-dimmer`,``,`dimmed`,`true`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0),zh$1(1,`doc-wireframe`,1),Vu())},dependencies:[Dr$1,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var eo=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-disabled-example`]],standalone:!1,features:[uo$1],decls:2,vars:0,consts:[[`sui-segment`,``,`sui-dimmer`,``,`disabled`,``],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0),zh$1(1,`doc-wireframe`,1),Vu())},dependencies:[Dr$1,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var to=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-blurring-example`]],standalone:!1,features:[uo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerBlurring`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.blurringDimmerVisible=!s.blurringDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.blurringDimmerVisible,m)||(s.blurringDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),Vu()),a&2&&(KD(2),vg(`dimmed`,s.blurringDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var io=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-blurring-inverted-example`]],standalone:!1,features:[uo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerBlurring`,``,`suiDimmerInverted`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.blurringDInvertedDimmerVisible=!s.blurringDInvertedDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.blurringDInvertedDimmerVisible,m)||(s.blurringDInvertedDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),Vu()),a&2&&(KD(2),vg(`dimmed`,s.blurringDInvertedDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var no=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-top-alignment-example`]],standalone:!1,features:[uo$1],decls:5,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerAlignment`,`top`,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`],[`suiDimmerContent`,``],[`sui-header`,``,`suiInverted`,``],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-button`,``]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.topAlignmentDimmerVisible=!s.topAlignmentDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.topAlignmentDimmerVisible,m)||(s.topAlignmentDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),jh$1(4,Xm,6,0,`ng-template`,3),Vu()),a&2&&(KD(2),vg(`dimmed`,s.topAlignmentDimmerVisible))},dependencies:[Dr$1,Ws$1,Ii,Ci$1,be$1,ze],encapsulation:2,changeDetection:1})}}return n})();var oo=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-bottom-alignment-example`]],standalone:!1,features:[uo$1],decls:5,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerAlignment`,`bottom`,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`],[`suiDimmerContent`,``],[`sui-header`,``,`suiInverted`,``],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-button`,``]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.bottomAlignmentDimmerVisible=!s.bottomAlignmentDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.bottomAlignmentDimmerVisible,m)||(s.bottomAlignmentDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),jh$1(4,Jm,6,0,`ng-template`,3),Vu()),a&2&&(KD(2),vg(`dimmed`,s.bottomAlignmentDimmerVisible))},dependencies:[Dr$1,Ws$1,Ii,Ci$1,be$1,ze],encapsulation:2,changeDetection:1})}}return n})();var ao=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer-inverted-example`]],standalone:!1,features:[uo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerInverted`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.invertedDimmerVisible=!s.invertedDimmerVisible}),zC(1,` Toggle Dimmer
`),Vu(),is$1(2,`div`,1),Dg(`dimmedChange`,function(m){return ZC(s.invertedDimmerVisible,m)||(s.invertedDimmerVisible=m),m}),zh$1(3,`doc-wireframe`,2),Vu()),a&2&&(KD(2),vg(`dimmed`,s.invertedDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();function Zm(n,u){n&1&&zh$1(0,`doc-dimmer-simple-example`)}function Km(n,u){n&1&&zh$1(0,`doc-dimmer-content-example`)}function Qm(n,u){n&1&&zh$1(0,`doc-dimmer-page-example`)}function ep(n,u){n&1&&zh$1(0,`doc-dimmer-active-example`)}function tp(n,u){n&1&&zh$1(0,`doc-dimmer-disabled-example`)}function ip(n,u){n&1&&zh$1(0,`doc-dimmer-blurring-example`)}function np(n,u){n&1&&zh$1(0,`doc-dimmer-blurring-inverted-example`)}function op(n,u){n&1&&zh$1(0,`doc-dimmer-top-alignment-example`)}function ap(n,u){n&1&&zh$1(0,`doc-dimmer-bottom-alignment-example`)}function sp(n,u){n&1&&zh$1(0,`doc-dimmer-inverted-example`)}function rp(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Dimmer`),Vu(),is$1(6,`p`),zC(7,`A simple dimmer displays no content`),Vu(),jh$1(8,Zm,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Content Dimmer`),Vu(),is$1(12,`p`),zC(13,`A dimmer can display content`),Vu(),jh$1(14,Km,1,0,`ng-template`,5),Vu(),is$1(15,`doc-code-sample`,3)(16,`h3`,4),zC(17,`Page Dimmer`),Vu(),is$1(18,`p`),zC(19,`A dimmer can be formatted to be fixed to the page`),Vu(),jh$1(20,Qm,1,0,`ng-template`,5),Vu(),is$1(21,`h2`,2),zC(22,`States`),Vu(),is$1(23,`doc-code-sample`,6)(24,`h3`,4),zC(25,`Active`),Vu(),is$1(26,`p`),zC(27,`An active dimmer will dim its parent container`),Vu(),jh$1(28,ep,1,0,`ng-template`,5),Vu(),is$1(29,`doc-code-sample`,6)(30,`h3`,4),zC(31,`Disabled`),Vu(),is$1(32,`p`),zC(33,`A disabled dimmer cannot be activated`),Vu(),jh$1(34,tp,1,0,`ng-template`,5),Vu(),is$1(35,`h2`,2),zC(36,`Variations`),Vu(),is$1(37,`doc-code-sample`,3)(38,`h3`,4),zC(39,`Blurring`),Vu(),is$1(40,`p`),zC(41,`A dimmable element can blur its contents`),Vu(),jh$1(42,ip,1,0,`ng-template`,5),Vu(),is$1(43,`doc-code-sample`,3),jh$1(44,np,1,0,`ng-template`,5),Vu(),is$1(45,`doc-code-sample`,3)(46,`h3`,4),zC(47,`Vertical Alignment`),Vu(),is$1(48,`p`),zC(49,`A dimmer can have its content top or bottom aligned.`),Vu(),jh$1(50,op,1,0,`ng-template`,5),Vu(),is$1(51,`doc-code-sample`,3),jh$1(52,ap,1,0,`ng-template`,5),Vu(),is$1(53,`doc-code-sample`,3)(54,`h3`,4),zC(55,`Inverted`),Vu(),is$1(56,`p`),zC(57,`A dimmer can be formatted to have its colours inverted`),Vu(),jh$1(58,sp,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetSimple)(`componentCode`,o.snippetSharedTs),KD(6),Gh$1(`templateCode`,o.snippetContent)(`componentCode`,o.snippetSharedTs),KD(6),Gh$1(`templateCode`,o.snippetPage)(`componentCode`,o.snippetSharedTs),KD(8),Gh$1(`templateCode`,o.snippetActive),KD(6),Gh$1(`templateCode`,o.snippetDisabled),KD(8),Gh$1(`templateCode`,o.snippetBlurring)(`componentCode`,o.snippetSharedTs),KD(6),Gh$1(`templateCode`,o.snippetBlurringInverted)(`componentCode`,o.snippetSharedTs),KD(2),Gh$1(`templateCode`,o.snippetTopAligned)(`componentCode`,o.snippetSharedTs),KD(6),Gh$1(`templateCode`,o.snippetBottomAligned)(`componentCode`,o.snippetSharedTs),KD(2),Gh$1(`templateCode`,o.snippetInverted)(`componentCode`,o.snippetSharedTs)}}function lp(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-dimmer`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiDimmerAlignment`),Vu(),is$1(20,`td`),zC(21,`Specifies the dimmer content position. Allowed values could be `),is$1(22,`span`,8),zC(23,`'top'`),Vu(),zC(24,` | `),is$1(25,`span`,8),zC(26,`'bottom'`),Vu(),zC(27,` | `),is$1(28,`span`,8),zC(29,`null`),Vu()(),is$1(30,`td`)(31,`div`,9),zC(32,`string`),Vu()(),is$1(33,`td`)(34,`div`,10),zC(35,`top`),Vu()()(),is$1(36,`tr`)(37,`td`),zC(38,`suiDimmerBlurring`),Vu(),is$1(39,`td`),zC(40,`Determine if the dimmer should blur the background`),Vu(),is$1(41,`td`)(42,`div`,9),zC(43,`boolean `),Vu()(),is$1(44,`td`)(45,`div`,10),zC(46,`false `),Vu()()(),is$1(47,`tr`)(48,`td`),zC(49,`suiDimmerInverted`),Vu(),is$1(50,`td`),zC(51,`Determine if the dimmer should invert its colours`),Vu(),is$1(52,`td`)(53,`div`,9),zC(54,`boolean `),Vu()(),is$1(55,`td`)(56,`div`,10),zC(57,`false `),Vu()()(),is$1(58,`tr`)(59,`td`),zC(60,`suiDimmerSimple`),Vu(),is$1(61,`td`),zC(62,`Show a simple dimmer`),Vu(),is$1(63,`td`)(64,`div`,9),zC(65,`boolean `),Vu()(),is$1(66,`td`)(67,`div`,10),zC(68,`false `),Vu()()(),is$1(69,`tr`)(70,`td`),zC(71,`suiDimmerFullPage`),Vu(),is$1(72,`td`),zC(73,`Determine if the dimmer should cover the entire page`),Vu(),is$1(74,`td`)(75,`div`,9),zC(76,`boolean `),Vu()(),is$1(77,`td`)(78,`div`,10),zC(79,`false `),Vu()()(),is$1(80,`tr`)(81,`td`),zC(82,`suiCloseOnClick`),Vu(),is$1(83,`td`),zC(84,`Determine if the dimmer should be closed when the mask or any other location is clicked`),Vu(),is$1(85,`td`)(86,`div`,9),zC(87,`boolean `),Vu()(),is$1(88,`td`)(89,`div`,10),zC(90,`true `),Vu()()(),is$1(91,`tr`)(92,`td`),zC(93,`disabled`),Vu(),is$1(94,`td`),zC(95,`Stop the dimmer from responding to actions`),Vu(),is$1(96,`td`)(97,`div`,9),zC(98,`boolean `),Vu()(),is$1(99,`td`)(100,`div`,10),zC(101,`false `),Vu()()(),is$1(102,`tr`)(103,`td`),zC(104,`dimmed`),Vu(),is$1(105,`td`),zC(106,`Determines if the dimmer is shown or not. This field supports two way binding following the `),is$1(107,`code`),zC(108,`[(dimmed)]`),Vu(),zC(109,` syntax. `),Vu(),is$1(110,`td`)(111,`div`,9),zC(112,`boolean `),Vu()(),is$1(113,`td`)(114,`div`,10),zC(115,`false `),Vu()()()()(),is$1(116,`h2`,2),zC(117,`suiDimmerContent`),Vu(),is$1(118,`h4`,4),zC(119,`Properties`),Vu(),is$1(120,`table`,7)(121,`thead`)(122,`tr`)(123,`th`),zC(124,`Property`),Vu(),is$1(125,`th`),zC(126,`Description`),Vu(),is$1(127,`th`),zC(128,`Type`),Vu(),is$1(129,`th`),zC(130,`Default`),Vu()()(),zh$1(131,`tbody`),is$1(132,`tfoot`,11)(133,`tr`)(134,`th`,12)(135,`div`,13),zC(136,`No properties for this directive`),Vu()()()()()())}var so=(()=>{class n{constructor(o){this.snippetSimple=Hn,this.snippetSharedTs=Wn,this.snippetContent=Rn,this.snippetPage=zn,this.snippetActive=jn,this.snippetDisabled=Nn,this.snippetBlurring=Un,this.snippetBlurringInverted=$n,this.snippetTopAligned=Yn,this.snippetBottomAligned=Gn,this.snippetInverted=Xn,this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1,o.setTitle(`Dimmer | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dimmer`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Dimmer`,`subHeader`,`A dimmer hides distractions to focus attention on particular content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,rp,59,18,`div`,1)(2,lp,137,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,qn,Zn,Kn,Qn,eo,to,io,no,oo,ao],styles:[`button[_ngcontent-%COMP%]{margin-bottom:1.2rem!important}`],changeDetection:1})}}return n})();var ro=`<sui-rating suiMaxValue="1"></sui-rating>
`;var lo=`<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var mo=`<sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>
`;var po=`<sui-rating
    suiSize="mini"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="tiny"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="small"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="large"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="huge"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="huge"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="massive"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var wt=(()=>{class n extends On$1{set suiValue(o){this.value!==o&&(this.value=+o)}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.generateRatingsArray()}get suiMaxValue(){return this.maxValue}get classes(){return[`ui`,this.suiSize,this.suiType,J.getPropClass(this.suiReadOnly,`read-only`),`rating`,J.getPropClass(this.hoverValue>0,`selected`)].join(` `)}constructor(){super(),this.changeDetectorRef=g(Pg$1),this.valueChanged=new nt$1,this.suiSize=null,this.suiType=null,this.suiReadOnly=!1,this.suiClearable=!1,this.ratingsArray=[],this.hoverValue=0,this.value=0,this.maxValue=5,this.controlValueChangeFn=()=>{},this.generateRatingsArray()}onClick(o){this.suiReadOnly||(this.suiClearable&&this.suiValue===o&&(o=0),this.suiValue!==o&&(this.controlValueChangeFn(o),this.valueChanged.emit(o)),this.suiValue=o)}onHover(o){this.suiReadOnly?this.hoverValue=0:this.hoverValue=o}onUnhover(){this.suiReadOnly||(this.hoverValue=0)}writeValue(o){this.suiValue=o,this.changeDetectorRef.markForCheck()}registerOnChange(o){this.controlValueChangeFn=o}registerOnTouched(o){}setDisabledState(o){}generateRatingsArray(){this.ratingsArray=Array(this.maxValue).fill(0).map((o,a)=>a+1)}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){function o(a,s){if(a&1){let p=dC();Bu(0,`i`,1),Jh$1(`click`,function(){let v=Pd$1(p).$implicit,O=pC();return jd$1(O.onClick(v))})(`mouseover`,function(){let v=Pd$1(p).$implicit,O=pC();return jd$1(O.onHover(v))})(`mouseout`,function(){Pd$1(p);let v=pC();return jd$1(v.onUnhover())}),Hu$1()}if(a&2){let p=s.$implicit,m=pC();ho$1(`active`,p<=m.suiValue)(`selected`,p<=m.hoverValue)}}return OI({type:n,selectors:[[`sui-rating`]],inputs:{suiSize:`suiSize`,suiType:`suiType`,suiReadOnly:`suiReadOnly`,suiClearable:`suiClearable`,suiValue:`suiValue`,suiMaxValue:`suiMaxValue`},outputs:{valueChanged:`valueChanged`},features:[vs$1([{provide:X,useExisting:si$1(()=>n),multi:!0}]),uo$1],decls:2,vars:0,consts:[[1,`icon`,3,`active`,`selected`],[1,`icon`,3,`click`,`mouseover`,`mouseout`]],template:function(s,p){s&1&&oC(0,o,1,4,`i`,0,rC),s&2&&iC(p.ratingsArray)},styles:[`:host.read-only .icon{cursor:auto}
`],encapsulation:2,changeDetection:1})})()}}return uS([ve()],n.prototype,`suiReadOnly`,void 0),uS([ve()],n.prototype,`suiClearable`,void 0),n})();var uo=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({})}}return n})();var jt=class{constructor(){this.isDefinitionsActive=!0}};var ho=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-rating-basic-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiMaxValue`,`1`]],template:function(a,s){a&1&&zh$1(0,`sui-rating`,0)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();var go=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-rating-star-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`]],template:function(a,s){a&1&&zh$1(0,`sui-rating`,0)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();var fo=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-rating-heart-example`]],standalone:!1,features:[uo$1],decls:1,vars:0,consts:[[`suiType`,`heart`,`suiValue`,`1`,`suiMaxValue`,`3`]],template:function(a,s){a&1&&zh$1(0,`sui-rating`,0)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();var So=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-rating-sizes-example`]],standalone:!1,features:[uo$1],decls:22,vars:0,consts:[[`suiSize`,`mini`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`tiny`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`small`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`large`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`huge`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`massive`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`]],template:function(a,s){a&1&&zh$1(0,`sui-rating`,0)(1,`br`)(2,`br`)(3,`sui-rating`,1)(4,`br`)(5,`br`)(6,`sui-rating`,2)(7,`br`)(8,`br`)(9,`sui-rating`,3)(10,`br`)(11,`br`)(12,`sui-rating`,4)(13,`br`)(14,`br`)(15,`sui-rating`,5)(16,`br`)(17,`br`)(18,`sui-rating`,5)(19,`br`)(20,`br`)(21,`sui-rating`,6)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();function hp(n,u){n&1&&zh$1(0,`doc-rating-basic-example`)}function gp(n,u){n&1&&zh$1(0,`doc-rating-star-example`)}function fp(n,u){n&1&&zh$1(0,`doc-rating-heart-example`)}function Sp(n,u){n&1&&zh$1(0,`doc-rating-sizes-example`)}function vp(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`States`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Rating `),is$1(6,`span`,5),zC(7,`Flexbox`),Vu()(),is$1(8,`p`),zC(9,`A basic rating`),Vu(),jh$1(10,hp,1,0,`ng-template`,6),Vu(),is$1(11,`doc-code-sample`,3)(12,`h3`,4),zC(13,`Star`),Vu(),is$1(14,`p`),zC(15,`A rating can use a set of star icons`),Vu(),jh$1(16,gp,1,0,`ng-template`,6),Vu(),is$1(17,`doc-code-sample`,3)(18,`h3`,4),zC(19,`Heart`),Vu(),is$1(20,`p`),zC(21,`A rating can use a set of heart icons`),Vu(),jh$1(22,fp,1,0,`ng-template`,6),Vu(),is$1(23,`h2`,2),zC(24,`Variations`),Vu(),is$1(25,`doc-code-sample`,3)(26,`h3`,4),zC(27,`Size`),Vu(),is$1(28,`p`),zC(29,`A rating can vary in size`),Vu(),jh$1(30,Sp,1,0,`ng-template`,6),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetBasic),KD(8),Gh$1(`templateCode`,o.snippetStar),KD(6),Gh$1(`templateCode`,o.snippetHeart),KD(8),Gh$1(`templateCode`,o.snippetSizes)}}function xp(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-rating`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiSize`),Vu(),is$1(20,`td`),zC(21,`Set the rating size. Allowed values could be `),is$1(22,`span`,8),zC(23,`mini`),Vu(),zC(24,` | `),is$1(25,`span`,8),zC(26,`tiny`),Vu(),zC(27,` | `),is$1(28,`span`,8),zC(29,`small`),Vu(),zC(30,` | `),is$1(31,`span`,8),zC(32,`medium`),Vu(),zC(33,` | `),is$1(34,`span`,8),zC(35,`big`),Vu(),zC(36,` | `),is$1(37,`span`,8),zC(38,`huge`),Vu(),zC(39,` | `),is$1(40,`span`,8),zC(41,`massive`),Vu(),zC(42,` | `),is$1(43,`span`,8),zC(44,`null`),Vu()(),is$1(45,`td`)(46,`div`,5),zC(47,` string `),Vu()(),is$1(48,`td`)(49,`div`,9),zC(50,` null `),Vu()()(),is$1(51,`tr`)(52,`td`),zC(53,`suiType`),Vu(),is$1(54,`td`),zC(55,`Specifies a icon to use. Cannot be used together with url. Allowed values could be `),is$1(56,`span`,8),zC(57,`star`),Vu(),zC(58,` | `),is$1(59,`span`,8),zC(60,`heart`),Vu(),zC(61,` | `),is$1(62,`span`,8),zC(63,`null`),Vu()(),is$1(64,`td`)(65,`div`,5),zC(66,` string`),Vu()(),is$1(67,`td`)(68,`div`,9),zC(69,` null`),Vu()()(),is$1(70,`tr`)(71,`td`),zC(72,`suiReadOnly `),Vu(),is$1(73,`td`),zC(74,` Setting to true or false will determine if users can change the rating value `),Vu(),is$1(75,`td`)(76,`div`,5),zC(77,` boolean `),Vu()(),is$1(78,`td`)(79,`div`,9),zC(80,` false `),Vu()()(),is$1(81,`tr`)(82,`td`),zC(83,`suiClearable`),Vu(),is$1(84,`td`),zC(85,` Setting to true or false will determine if clicking on the value would reset it `),Vu(),is$1(86,`td`)(87,`div`,5),zC(88,` boolean `),Vu()(),is$1(89,`td`)(90,`div`,9),zC(91,` false `),Vu()()()()(),is$1(92,`h4`,4),zC(93,`Events`),Vu(),is$1(94,`table`,7)(95,`thead`)(96,`tr`)(97,`th`),zC(98,`Event`),Vu(),is$1(99,`th`),zC(100,`Description`),Vu(),is$1(101,`th`),zC(102,`Type`),Vu()()(),is$1(103,`tbody`)(104,`tr`)(105,`td`),zC(106,`valueChanged `),Vu(),is$1(107,`td`),zC(108,`Fired when the rating value is changed. Also supports `),is$1(109,`code`),zC(110,`[(ngModel)]`),Vu(),zC(111,` syntax`),Vu(),is$1(112,`td`)(113,`div`,5),zC(114,` number `),Vu()()()()()())}var vo=(()=>{class n{constructor(o){this.snippetBasic=ro,this.snippetStar=lo,this.snippetHeart=mo,this.snippetSizes=po,this.isDefinitionsActive=!0,o.setTitle(`Rating | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-rating`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Rating`,`subHeader`,`A rating indicates user interest in content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-label`,``,`suiColour`,`teal`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,vp,31,4,`div`,1)(2,xp,115,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,ho,go,fo,So],encapsulation:2,changeDetection:1})}}return n})();var xo=`<sui-search
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var bo=`<sui-search
    suiShowIcon
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var yo=`<sui-search
    suiShowIcon
    suiPlaceholder="Common animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Eo=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="countries">
</sui-search>
`;var Co=`countries = [
  { title: 'Andorra' },
  { title: 'United Arab Emirates' },
  { title: 'Afghanistan' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
];
`;var Do=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="categoryContent">
</sui-search>
`;var wo=`categoryContent = [
  { category: 'South America', title: 'Brazil' },
  { category: 'South America', title: 'Peru' },
  { category: 'North America', title: 'Canada' },
  { category: 'Asia', title: 'South Korea' },
  { category: 'Asia', title: 'Japan' },
  { category: 'Asia', title: 'China' },
  { category: 'Europe', title: 'Denmark' },
  { category: 'Europe', title: 'England' },
  { category: 'Europe', title: 'France' },
  { category: 'Europe', title: 'Germany' },
  { category: 'Africa', title: 'Ethiopia' },
  { category: 'Africa', title: 'Nigeria' },
  { category: 'Africa', title: 'Zimbabwe' }
];
`;var _o=`<sui-search
    suiLoading
    suiPlaceholder="Search..."
    [suiOptions]="blankOptions">
</sui-search>
`;var To=`<sui-search
    disabled
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptions]="blankOptions">
</sui-search>
`;var Mo=`<sui-search
    suiFluid
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Io=`<sui-search
    suiShowIcon
    suiAlignment="right"
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Ue=class n{constructor(){this.blankOptions=[],this.countries=[{title:`Andorra`},{title:`United Arab Emirates`},{title:`Afghanistan`},{title:`Antigua`},{title:`Anguilla`},{title:`Albania`},{title:`Armenia`},{title:`Netherlands Antilles`},{title:`Angola`},{title:`Argentina`},{title:`American Samoa`},{title:`Austria`},{title:`Australia`},{title:`Aruba`},{title:`Aland Islands`},{title:`Azerbaijan`},{title:`Bosnia`},{title:`Barbados`},{title:`Bangladesh`},{title:`Belgium`},{title:`Burkina Faso`},{title:`Bulgaria`},{title:`Bahrain`},{title:`Burundi`}],this.categoryContent=[{category:`South America`,title:`Brazil`},{category:`South America`,title:`Peru`},{category:`North America`,title:`Canada`},{category:`Asia`,title:`South Korea`},{category:`Asia`,title:`Japan`},{category:`Asia`,title:`China`},{category:`Europe`,title:`Denmark`},{category:`Europe`,title:`England`},{category:`Europe`,title:`France`},{category:`Europe`,title:`Germany`},{category:`Africa`,title:`Ethiopia`},{category:`Africa`,title:`Nigeria`},{category:`Africa`,title:`Zimbabwe`}]}searchText(u){return B$2(this,null,function*(){let o=`https://api.semantic-ui.com/search/${u}`;return n.callUrl(o)})}searchCategories(u){return B$2(this,null,function*(){let o=`https://api.semantic-ui.com/search/category/${u}`;return n.callUrl(o)})}static callUrl(u){return B$2(this,null,function*(){try{return(yield(yield fetch(u)).json()).results}catch(o){return[]}})}};var Po=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-basic-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiPlaceholder`,`Common passwords...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptionsLookup`,s.searchText)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var ko=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-basic-alt-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Common passwords...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptionsLookup`,s.searchText)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Fo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-category-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Common animals...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptionsLookup`,s.searchCategories)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Ao=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-local-search-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Search countries...`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptions`,s.countries)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Vo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-local-category-search-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Search countries...`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptions`,s.categoryContent)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Bo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-loading-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiLoading`,``,`suiPlaceholder`,`Search...`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptions`,s.blankOptions)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Oo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-disabled-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`disabled`,``,`suiShowIcon`,``,`suiPlaceholder`,`Search animals...`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptions`,s.blankOptions)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Lo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-fluid-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiFluid`,``,`suiShowIcon`,``,`suiPlaceholder`,`Search animals...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptionsLookup`,s.searchCategories)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Ho=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search-aligned-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiAlignment`,`right`,`suiPlaceholder`,`Search animals...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&zh$1(0,`sui-search`,0),a&2&&Gh$1(`suiOptionsLookup`,s.searchCategories)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();function Fp(n,u){n&1&&zh$1(0,`doc-search-basic-example`)}function Ap(n,u){n&1&&zh$1(0,`doc-search-basic-alt-example`)}function Vp(n,u){n&1&&zh$1(0,`doc-search-category-example`)}function Bp(n,u){n&1&&zh$1(0,`doc-search-local-search-example`)}function Op(n,u){n&1&&zh$1(0,`doc-search-local-category-search-example`)}function Lp(n,u){n&1&&zh$1(0,`doc-search-loading-example`)}function Hp(n,u){n&1&&zh$1(0,`doc-search-disabled-example`)}function Wp(n,u){n&1&&zh$1(0,`doc-search-fluid-example`)}function Rp(n,u){n&1&&zh$1(0,`doc-search-aligned-example`)}function zp(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Type`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Search`),Vu(),is$1(6,`p`),zC(7,`A basic search element`),Vu(),jh$1(8,Fp,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3),jh$1(10,Ap,1,0,`ng-template`,5),Vu(),is$1(11,`doc-code-sample`,3)(12,`h3`,4),zC(13,`Category`),Vu(),is$1(14,`p`),zC(15,`A search can display results from remote content ordered by categories`),Vu(),jh$1(16,Vp,1,0,`ng-template`,5),Vu(),is$1(17,`doc-code-sample`,6)(18,`h3`,4),zC(19,`Local Search`),Vu(),is$1(20,`p`),zC(21,`A search can look for results inside a static local source.`),Vu(),jh$1(22,Bp,1,0,`ng-template`,5),Vu(),is$1(23,`doc-code-sample`,6)(24,`h3`,4),zC(25,`Local Category Search`),Vu(),is$1(26,`p`),zC(27,`A search can look for category results inside a static local source.`),Vu(),jh$1(28,Op,1,0,`ng-template`,5),Vu(),zh$1(29,`br`),is$1(30,`h2`,2),zC(31,`States`),Vu(),is$1(32,`doc-code-sample`,3)(33,`h3`,4),zC(34,`Loading`),Vu(),is$1(35,`p`),zC(36,`A search can show a loading indicator.`),Vu(),jh$1(37,Lp,1,0,`ng-template`,5),Vu(),zh$1(38,`br`),is$1(39,`h2`,2),zC(40,`Variations`),Vu(),is$1(41,`doc-code-sample`,3)(42,`h3`,4),zC(43,`Disabled`),Vu(),is$1(44,`p`),zC(45,`A search can show it is currently unable to be interacted with.`),Vu(),jh$1(46,Hp,1,0,`ng-template`,5),Vu(),is$1(47,`doc-code-sample`,3)(48,`h3`,4),zC(49,`Fluid`),Vu(),is$1(50,`p`),zC(51,`A search can have its results take up the width of its container.`),Vu(),jh$1(52,Wp,1,0,`ng-template`,5),Vu(),is$1(53,`doc-code-sample`,3)(54,`h3`,4),zC(55,`Aligned`),Vu(),is$1(56,`p`),zC(57,`A search can have its results aligned to its left or right container edge.`),Vu(),jh$1(58,Rp,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetBasic),KD(6),Gh$1(`templateCode`,o.snippetBasicAlt),KD(2),Gh$1(`templateCode`,o.snippetCategory),KD(6),Gh$1(`templateCode`,o.snippetLocalSearch)(`componentCode`,o.snippetLocalSearchTs),KD(6),Gh$1(`templateCode`,o.snippetLocalCategorySearch)(`componentCode`,o.snippetLocalCategorySearchTs),KD(9),Gh$1(`templateCode`,o.snippetLoading),KD(9),Gh$1(`templateCode`,o.snippetDisabled),KD(6),Gh$1(`templateCode`,o.snippetFluid),KD(6),Gh$1(`templateCode`,o.snippetAligned)}}function jp(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-search`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiAlignment`),Vu(),is$1(20,`td`),zC(21,`Set the search result alignment. Allowed values could be `),is$1(22,`span`,8),zC(23,`right`),Vu(),zC(24,` | `),is$1(25,`span`,8),zC(26,`null`),Vu()(),is$1(27,`td`)(28,`div`,9),zC(29,` string `),Vu()(),is$1(30,`td`)(31,`div`,10),zC(32,` null `),Vu()()(),is$1(33,`tr`)(34,`td`),zC(35,`suiPlaceholder`),Vu(),is$1(36,`td`),zC(37,`Set the search input placeholder text. `),Vu(),is$1(38,`td`)(39,`div`,9),zC(40,` string `),Vu()(),is$1(41,`td`)(42,`div`,10),zC(43,` null `),Vu()()(),is$1(44,`tr`)(45,`td`),zC(46,`suiSearchDelay`),Vu(),is$1(47,`td`),zC(48,`Set the delay (in milliseconds) before a search is started. `),Vu(),is$1(49,`td`)(50,`div`,9),zC(51,` number `),Vu()(),is$1(52,`td`)(53,`div`,10),zC(54,` 200 `),Vu()()(),is$1(55,`tr`)(56,`td`),zC(57,`suiShowIcon`),Vu(),is$1(58,`td`),zC(59,`Determine whether or not to show the search icon `),Vu(),is$1(60,`td`)(61,`div`,9),zC(62,` boolean `),Vu()(),is$1(63,`td`)(64,`div`,10),zC(65,` false `),Vu()()(),is$1(66,`tr`)(67,`td`),zC(68,`disabled`),Vu(),is$1(69,`td`),zC(70,`Determine whether or not to disable the search functionality `),Vu(),is$1(71,`td`)(72,`div`,9),zC(73,` boolean `),Vu()(),is$1(74,`td`)(75,`div`,10),zC(76,` false `),Vu()()(),is$1(77,`tr`)(78,`td`),zC(79,`suiFluid`),Vu(),is$1(80,`td`),zC(81,`Determine whether or not the search results fill the width of their container `),Vu(),is$1(82,`td`)(83,`div`,9),zC(84,` boolean `),Vu()(),is$1(85,`td`)(86,`div`,10),zC(87,` false `),Vu()()(),is$1(88,`tr`)(89,`td`),zC(90,`suiLoading`),Vu(),is$1(91,`td`),zC(92,`Determine whether or not to manually override the loading icon display `),Vu(),is$1(93,`td`)(94,`div`,9),zC(95,` boolean `),Vu()(),is$1(96,`td`)(97,`div`,10),zC(98,` false `),Vu()()(),is$1(99,`tr`)(100,`td`),zC(101,`suiOptions`),Vu(),is$1(102,`td`),zC(103,`The options available to search. Cannot be used in conjunction with `),is$1(104,`code`),zC(105,`suiOptionsLookup`),Vu()(),is$1(106,`td`)(107,`div`,9),zC(108,` Array<{title: string, category: string (optional), description: string (optional)}> `),Vu()(),is$1(109,`td`)(110,`div`,10),zC(111,` null `),Vu()()(),is$1(112,`tr`)(113,`td`),zC(114,`suiOptionsLookup`),Vu(),is$1(115,`td`),zC(116,`A function to asynchronously search a remote resource with the provided query. Cannot be used in conjunction with `),is$1(117,`code`),zC(118,`suiOptions`),Vu()(),is$1(119,`td`)(120,`div`,9),zC(121,` (query: string) => Promise<Array<{title: string, category: string (optional), description: string (optional)}>> `),Vu()(),is$1(122,`td`)(123,`div`,10),zC(124,` null `),Vu()()()()(),is$1(125,`h4`,4),zC(126,`Events`),Vu(),is$1(127,`table`,7)(128,`thead`)(129,`tr`)(130,`th`),zC(131,`Property`),Vu(),is$1(132,`th`),zC(133,`Description`),Vu(),is$1(134,`th`),zC(135,`Type`),Vu()()(),is$1(136,`tbody`)(137,`tr`)(138,`td`),zC(139,`suiResultSelected`),Vu(),is$1(140,`td`),zC(141,`Fired when a result is selected. `),Vu(),is$1(142,`td`)(143,`div`,9),zC(144,` {title: string, category: string, description: string} `),Vu()()()()()())}var Wo=(()=>{class n{constructor(o){this.snippetBasic=xo,this.snippetBasicAlt=bo,this.snippetCategory=yo,this.snippetLocalSearch=Eo,this.snippetLocalSearchTs=Co,this.snippetLocalCategorySearch=Do,this.snippetLocalCategorySearchTs=wo,this.snippetLoading=_o,this.snippetDisabled=To,this.snippetFluid=Mo,this.snippetAligned=Io,this.blankOptions=[],this.countries=[{title:`Andorra`},{title:`United Arab Emirates`},{title:`Afghanistan`},{title:`Antigua`},{title:`Anguilla`},{title:`Albania`},{title:`Armenia`},{title:`Netherlands Antilles`},{title:`Angola`},{title:`Argentina`},{title:`American Samoa`},{title:`Austria`},{title:`Australia`},{title:`Aruba`},{title:`Aland Islands`},{title:`Azerbaijan`},{title:`Bosnia`},{title:`Barbados`},{title:`Bangladesh`},{title:`Belgium`},{title:`Burkina Faso`},{title:`Bulgaria`},{title:`Bahrain`},{title:`Burundi`}],this.categoryContent=[{category:`South America`,title:`Brazil`},{category:`South America`,title:`Peru`},{category:`North America`,title:`Canada`},{category:`Asia`,title:`South Korea`},{category:`Asia`,title:`Japan`},{category:`Asia`,title:`China`},{category:`Europe`,title:`Denmark`},{category:`Europe`,title:`England`},{category:`Europe`,title:`France`},{category:`Europe`,title:`Germany`},{category:`Africa`,title:`Ethiopia`},{category:`Africa`,title:`Nigeria`},{category:`Africa`,title:`Zimbabwe`}],o.setTitle(`Search | Ngx Semantic`)}searchText(o){return B$2(this,null,function*(){let a=`https://api.semantic-ui.com/search/${o}`;return n.callUrl(a)})}searchCategories(o){return B$2(this,null,function*(){let a=`https://api.semantic-ui.com/search/category/${o}`;return n.callUrl(a)})}static callUrl(o){return B$2(this,null,function*(){try{return(yield(yield fetch(o)).json()).results}catch(a){return[]}})}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-search`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Search`,`subHeader`,`A search module allows a user to query for results from a selection of data`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,zp,59,11,`div`,1)(2,jp,145,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Po,ko,Fo,Ao,Vo,Bo,Oo,Lo,Ho],encapsulation:2,changeDetection:1})}}return n})();var Ro=`<sui-tabs>
  <sui-tab
    suiTitle="HTML">
    <h3>HTML</h3>
    <p>
      HTML (HyperText Markup Language) is the most basic building block of
      the Web. It describes and defines the content of a webpage along with
      the basic layout of the webpage. Other technologies besides HTML are
      generally used to describe a web page's appearance/presentation (CSS)
      or functionality/ behavior (JavaScript).
    </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">developer.mozilla.org</a>
  </sui-tab>
  <sui-tab
    suiTitle="CSS">
    <h3>CSS</h3>
    <p>
      Cascading Style Sheets (CSS) is a stylesheet language used to describe
      the presentation of a document written in HTML or XML (including XML
      dialects such as SVG or XHTML). CSS describes how elements should be
      rendered on screen, on paper, in speech, or on other media.
    </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">developer.mozilla.org</a>
  </sui-tab>
  <sui-tab
    suiTitle="JavaScript">
    <h3>JavaScript</h3>
    <p>
      JavaScript (JS) is a lightweight interpreted or JIT-compiled
      programming language with first-class functions. While it is most
      well-known as the scripting language for Web pages, many non-browser
      environments also use it, such as Node.js, Apache CouchDB and Adobe
      Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic
      language, supporting object-oriented, imperative, and declarative
      (e.g. functional programming) styles.
    </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">developer.mozilla.org</a>
  </sui-tab>
</sui-tabs>
`;var zo=`<sui-tabs
  suiTabType="pointing">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var jo=`<sui-tabs
  suiTabType="text">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var No=`<sui-tabs>
  <sui-tab
    suiLoading
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var Uo=`<sui-tabs>
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    disabled
    suiTitle="Secret Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var $o=`<sui-tabs
  suiTabType="secondary"
  suiTabMenuPosition="bottom">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var Yo=`<select name="tab-colour"
  [(ngModel)]="tabColour">
  @for (colour of colours; track colour) {
    <option
    [value]="colour">{{colour}}</option>
  }
</select>

<sui-tabs
  suiTabType="pointing"
  [suiColour]="tabColour">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var nt=(()=>{class n extends On$1{constructor(){super(...arguments),this.suiTitle=null,this.suiIcon=null,this.suiLabel=null,this.suiLoading=!1,this.disabled=!1,this.suiLabelColour=null,this.suiLabelCircular=!1}get classes(){return[J.getPropClass(this.suiLoading,`loading`),J.getPropClass(this.disabled,`disabled`)].join(` `)}static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=(function(){let o=[`contentTemplate`],a=[`*`];function s(p,m){p&1&&mC(0)}return OI({type:n,selectors:[[`sui-tab`]],viewQuery:function(m,v){if(m&1&&tg(o,7),m&2){let O;vC(O=DC())&&(v.contentTemplate=O.first)}},inputs:{suiContent:`suiContent`,suiTitle:`suiTitle`,suiIcon:`suiIcon`,suiLabel:`suiLabel`,suiLoading:`suiLoading`,disabled:`disabled`,suiLabelColour:`suiLabelColour`,suiLabelCircular:`suiLabelCircular`},exportAs:[`suiTab`],features:[uo$1],ngContentSelectors:a,decls:2,vars:0,consts:[[`contentTemplate`,``]],template:function(m,v){m&1&&(gC(),Vh(0,s,1,0,`ng-template`,null,0,sw))},encapsulation:2,changeDetection:1})})()}}return uS([ve()],n.prototype,`suiLoading`,void 0),uS([ve()],n.prototype,`disabled`,void 0),uS([ve()],n.prototype,`suiLabelCircular`,void 0),n})();var ot=(()=>{class n{constructor(){this.tabs=new Zi,this.suiTabMenuPosition=`top`,this.suiTabType=`basic`,this.suiColour=null,this.suiInverted=!1,this.suiSelectedIndexChanged=new nt$1,this.selectedTabIndex=0,this.hasTabs=!1,this.currentTab=null}get isSecondary(){return this.suiTabType===`secondary`}get isBasic(){return this.suiTabType===`basic`}get isPointing(){return this.suiTabType===`pointing`}get isText(){return this.suiTabType===`text`}get isBorderless(){return this.suiTabType===`borderless`}get isTop(){return this.suiTabMenuPosition===`top`}get menuAttachment(){return this.suiTabType===`basic`?this.isTop?`top`:`bottom`:null}get segmentAttachment(){return this.suiTabType===`basic`?this.isTop?`bottom attached`:`top attached`:null}changeTab(o,a){if(o.disabled)return;let s=this.selectedTabIndex!==a;this.selectedTabIndex=a,this.setCurrentTab(),s&&this.suiSelectedIndexChanged.emit(this.selectedTabIndex)}isTabSelected(o){return this.selectedTabIndex===o}ngAfterContentChecked(){this.setCurrentTab()}setCurrentTab(){let o=this.tabs.toArray();this.hasTabs=o.length>0,this.currentTab=o[this.selectedTabIndex]}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){function o(W,re){W&1&&Zh$1(0)}function a(W,re){if(W&1&&jh$1(0,o,1,0,`ng-container`,2),W&2){pC(2);let F=EC(2);Gh$1(`ngTemplateOutlet`,F)}}function s(W,re){W&1&&Zh$1(0)}function p(W,re){if(W&1&&jh$1(0,s,1,0,`ng-container`,2),W&2){let F=pC(2);Gh$1(`ngTemplateOutlet`,F.currentTab.contentTemplate)}}function m(W,re){W&1&&Zh$1(0)}function v(W,re){if(W&1&&jh$1(0,m,1,0,`ng-container`,2),W&2){pC(2);let F=EC(2);Gh$1(`ngTemplateOutlet`,F)}}function O(W,re){if(W&1&&(XI(0,a,1,1,`ng-container`),is$1(1,`div`,1),XI(2,p,1,1,`ng-container`),Vu(),XI(3,v,1,1,`ng-container`)),W&2){let F=pC();tC(F.isTop?0:-1),KD(),ho$1(`loading`,F.currentTab==null?null:F.currentTab.suiLoading),Gh$1(`suiAttached`,F.segmentAttachment),KD(),tC(F.currentTab?2:-1),KD(),tC(F.isTop?-1:3)}}function ie(W,re){if(W&1&&zh$1(0,`i`,6),W&2){let F=pC().$implicit;Gh$1(`suiIconType`,F.suiIcon)}}function ke(W,re){if(W&1&&(is$1(0,`div`,7),zC(1),Vu()),W&2){let F=pC().$implicit;Gh$1(`suiColour`,F.suiLabelColour)(`suiCircular`,F.suiLabelCircular),KD(),Gu$1(` `,F.suiLabel,` `)}}function ne(W,re){if(W&1){let F=dC();is$1(0,`div`,5),Kh$1(`click`,function(){let Le=Pd$1(F),Yt=Le.$implicit,li=Le.$index,di=pC(2);return jd$1(di.changeTab(Yt,li))}),XI(1,ie,1,1,`i`,6),zC(2),XI(3,ke,2,3,`div`,7),Vu()}if(W&2){let F=re.$implicit,It=re.$index,Le=pC(2);Gh$1(`disabled`,F.disabled)(`suiActive`,Le.isTabSelected(It)),KD(),tC(F.suiIcon?1:-1),KD(),Gu$1(` `,F.suiTitle,` `),KD(),tC(F.suiLabel?3:-1)}}function dt(W,re){if(W&1&&(is$1(0,`div`,3),oC(1,ne,4,5,`div`,4,rC),Vu()),W&2){let F=pC();Gh$1(`suiInverted`,F.suiInverted)(`suiColour`,F.suiColour)(`suiAttached`,F.menuAttachment)(`suiTabular`,F.isBasic)(`suiSecondary`,F.isSecondary)(`suiPointing`,F.isPointing)(`suiText`,F.isText)(`suiBorderless`,F.isBorderless),KD(),iC(F.tabs)}}return OI({type:n,selectors:[[`sui-tabs`]],contentQueries:function(re,F,It){if(re&1&&eg(It,nt,4),re&2){let Le;vC(Le=DC())&&(F.tabs=Le)}},inputs:{suiTabMenuPosition:`suiTabMenuPosition`,suiTabType:`suiTabType`,suiColour:`suiColour`,suiInverted:`suiInverted`},outputs:{suiSelectedIndexChanged:`suiSelectedIndexChanged`},decls:3,vars:1,consts:[[`tabMenu`,``],[`sui-segment`,``,1,`active`,`tab`,3,`suiAttached`],[4,`ngTemplateOutlet`],[`sui-menu`,``,3,`suiInverted`,`suiColour`,`suiAttached`,`suiTabular`,`suiSecondary`,`suiPointing`,`suiText`,`suiBorderless`],[`suiMenuItem`,``,3,`disabled`,`suiActive`],[`suiMenuItem`,``,3,`click`,`disabled`,`suiActive`],[`sui-icon`,``,3,`suiIconType`],[`sui-label`,``,3,`suiColour`,`suiCircular`]],template:function(re,F){re&1&&(XI(0,O,4,6),jh$1(1,dt,3,8,`ng-template`,null,0,sw)),re&2&&tC(F.hasTabs?0:-1)},dependencies:[sl$1,Ww,ze,Ft,Tt$1,we,fi],encapsulation:2})})()}}return uS([ve()],n.prototype,`suiInverted`,void 0),n})();var Go=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,ot]})}}return n})();function Zp(n,u){if(n&1&&(is$1(0,`option`,1),zC(1),Vu()),n&2){let o=u.$implicit;Gh$1(`value`,o),KD(),gg(o)}}var at=class{constructor(){this.isDefinitionsActive=!0,this.colours=[`red`,`orange`,`green`,`blue`,`violet`],this.tabColour=`blue`,this.isTabDisabled=!1}};var Jo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-basic-example`]],standalone:!1,features:[uo$1],decls:22,vars:0,consts:[[`suiTitle`,`HTML`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML`],[`suiTitle`,`CSS`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/CSS`],[`suiTitle`,`JavaScript`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/javascript`]],template:function(a,s){a&1&&(is$1(0,`sui-tabs`)(1,`sui-tab`,0)(2,`h3`),zC(3,`HTML`),Vu(),is$1(4,`p`),zC(5,` HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript). `),Vu(),is$1(6,`a`,1),zC(7,`developer.mozilla.org`),Vu()(),is$1(8,`sui-tab`,2)(9,`h3`),zC(10,`CSS`),Vu(),is$1(11,`p`),zC(12,` Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. `),Vu(),is$1(13,`a`,3),zC(14,`developer.mozilla.org`),Vu()(),is$1(15,`sui-tab`,4)(16,`h3`),zC(17,`JavaScript`),Vu(),is$1(18,`p`),zC(19,` JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. `),Vu(),is$1(20,`a`,5),zC(21,`developer.mozilla.org`),Vu()()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var qo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-pointing-menu-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`suiTabType`,`pointing`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(is$1(0,`sui-tabs`,0)(1,`sui-tab`,1),zC(2,` Circle `),Vu(),is$1(3,`sui-tab`,2),zC(4,` Box `),Vu(),is$1(5,`sui-tab`,3),zC(6,` Triangle `),Vu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var Zo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-text-menu-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`suiTabType`,`text`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(is$1(0,`sui-tabs`,0)(1,`sui-tab`,1),zC(2,` Circle `),Vu(),is$1(3,`sui-tab`,2),zC(4,` Box `),Vu(),is$1(5,`sui-tab`,3),zC(6,` Triangle `),Vu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var Ko=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-loading-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`suiLoading`,``,`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(is$1(0,`sui-tabs`)(1,`sui-tab`,0),zC(2,` Circle `),Vu(),is$1(3,`sui-tab`,1),zC(4,` Box `),Vu(),is$1(5,`sui-tab`,2),zC(6,` Triangle `),Vu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var Qo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-disabled-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`disabled`,``,`suiTitle`,`Secret Triangle`]],template:function(a,s){a&1&&(is$1(0,`sui-tabs`)(1,`sui-tab`,0),zC(2,` Circle `),Vu(),is$1(3,`sui-tab`,1),zC(4,` Box `),Vu(),is$1(5,`sui-tab`,2),zC(6,` Triangle `),Vu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var ea=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-positioned-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`suiTabType`,`secondary`,`suiTabMenuPosition`,`bottom`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(is$1(0,`sui-tabs`,0)(1,`sui-tab`,1),zC(2,` Circle `),Vu(),is$1(3,`sui-tab`,2),zC(4,` Box `),Vu(),is$1(5,`sui-tab`,3),zC(6,` Triangle `),Vu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var ta=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab-coloured-example`]],standalone:!1,features:[uo$1],decls:10,vars:2,consts:[[`name`,`tab-colour`,3,`ngModelChange`,`ngModel`],[3,`value`],[`suiTabType`,`pointing`,3,`suiColour`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(is$1(0,`select`,0),VE(),Dg(`ngModelChange`,function(m){return ZC(s.tabColour,m)||(s.tabColour=m),m}),oC(1,Zp,2,2,`option`,1,rC),Vu(),is$1(3,`sui-tabs`,2)(4,`sui-tab`,3),zC(5,` Circle `),Vu(),is$1(6,`sui-tab`,4),zC(7,` Box `),Vu(),is$1(8,`sui-tab`,5),zC(9,` Triangle `),Vu()()),a&2&&(vg(`ngModel`,s.tabColour),HE(),KD(),iC(s.colours),KD(2),Gh$1(`suiColour`,s.tabColour))},dependencies:[fi$1,pi$2,Tt$2,ui,Mn$1,nt,ot],encapsulation:2,changeDetection:1})}}return n})();function Qp(n,u){n&1&&zh$1(0,`doc-tab-basic-example`)}function eu(n,u){n&1&&zh$1(0,`doc-tab-pointing-menu-example`)}function tu(n,u){n&1&&zh$1(0,`doc-tab-text-menu-example`)}function iu(n,u){n&1&&zh$1(0,`doc-tab-loading-example`)}function nu(n,u){n&1&&zh$1(0,`doc-tab-disabled-example`)}function ou(n,u){n&1&&zh$1(0,`doc-tab-positioned-example`)}function au(n,u){n&1&&zh$1(0,`doc-tab-coloured-example`)}function su(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Type`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Tab`),Vu(),is$1(6,`p`),zC(7,`A basic tab`),Vu(),jh$1(8,Qp,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Pointing Menu`),Vu(),is$1(12,`p`),zC(13,`A tab menu can point to its tab panes`),Vu(),jh$1(14,eu,1,0,`ng-template`,5),Vu(),is$1(15,`doc-code-sample`,3)(16,`h3`,4),zC(17,`Text Menu`),Vu(),is$1(18,`p`),zC(19,`A tab menu can be formatted for text content`),Vu(),jh$1(20,tu,1,0,`ng-template`,5),Vu(),zh$1(21,`br`),is$1(22,`h2`,2),zC(23,`States`),Vu(),is$1(24,`doc-code-sample`,3)(25,`h3`,4),zC(26,`Loading`),Vu(),is$1(27,`p`),zC(28,`A tab can display a loading indicator.`),Vu(),jh$1(29,iu,1,0,`ng-template`,5),Vu(),is$1(30,`doc-code-sample`,3)(31,`h3`,4),zC(32,`Disabled`),Vu(),is$1(33,`p`),zC(34,`A tab can be disabled`),Vu(),jh$1(35,nu,1,0,`ng-template`,5),Vu(),zh$1(36,`br`),is$1(37,`h2`,2),zC(38,`Menu Variations`),Vu(),is$1(39,`doc-code-sample`,3)(40,`h3`,4),zC(41,`Position`),Vu(),is$1(42,`p`),zC(43,`A tab can be positioned.`),Vu(),jh$1(44,ou,1,0,`ng-template`,5),Vu(),is$1(45,`doc-code-sample`,3)(46,`h3`,4),zC(47,`Coloured`),Vu(),is$1(48,`p`),zC(49,`A tab can be coloured.`),Vu(),jh$1(50,au,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetBasic),KD(6),Gh$1(`templateCode`,o.snippetPointing),KD(6),Gh$1(`templateCode`,o.snippetText),KD(9),Gh$1(`templateCode`,o.snippetLoading),KD(6),Gh$1(`templateCode`,o.snippetDisabled),KD(9),Gh$1(`templateCode`,o.snippetPositioned),KD(6),Gh$1(`templateCode`,o.snippetColoured)}}function ru(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-tabs`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiTabMenuPosition`),Vu(),is$1(20,`td`),zC(21,`Specifies the menu position. Allowed values could be `),is$1(22,`span`,7),zC(23,`'top'`),Vu(),zC(24,` | `),is$1(25,`span`,7),zC(26,`'bottom'`),Vu()(),is$1(27,`td`)(28,`div`,8),zC(29,`string`),Vu()(),is$1(30,`td`)(31,`div`,9),zC(32,`top`),Vu()()(),is$1(33,`tr`)(34,`td`),zC(35,`suiTabType`),Vu(),is$1(36,`td`),zC(37,` Determine the styling for the tab menu. Allowed values could be `),is$1(38,`span`,7),zC(39,`'basic'`),Vu(),zC(40,` | `),is$1(41,`span`,7),zC(42,`'pointing'`),Vu(),zC(43,` | `),is$1(44,`span`,7),zC(45,`'secondary'`),Vu(),zC(46,` | `),is$1(47,`span`,7),zC(48,`'text'`),Vu(),zC(49,` | `),is$1(50,`span`,7),zC(51,`null`),Vu()(),is$1(52,`td`)(53,`div`,8),zC(54,`string`),Vu()(),is$1(55,`td`)(56,`div`,9),zC(57,`basic`),Vu()()(),is$1(58,`tr`)(59,`td`),zC(60,`suiColour`),Vu(),is$1(61,`td`),zC(62,`Set the menu colour. Allowed values could be `),is$1(63,`span`,7),zC(64,`'red'`),Vu(),zC(65,` | `),is$1(66,`span`,7),zC(67,`'orange'`),Vu(),zC(68,` | `),is$1(69,`span`,7),zC(70,`'yellow'`),Vu(),zC(71,` | `),is$1(72,`span`,7),zC(73,`'olive'`),Vu(),zC(74,` | `),is$1(75,`span`,7),zC(76,`'green'`),Vu(),zC(77,` | `),is$1(78,`span`,7),zC(79,`'teal'`),Vu(),zC(80,` | `),is$1(81,`span`,7),zC(82,`'blue'`),Vu(),zC(83,` | `),is$1(84,`span`,7),zC(85,`'violet'`),Vu(),zC(86,` | `),is$1(87,`span`,7),zC(88,`'purple'`),Vu(),zC(89,` | `),is$1(90,`span`,7),zC(91,`'pink'`),Vu(),zC(92,` | `),is$1(93,`span`,7),zC(94,`'brown'`),Vu(),zC(95,` | `),is$1(96,`span`,7),zC(97,`'grey'`),Vu(),zC(98,` | `),is$1(99,`span`,7),zC(100,`'black'`),Vu(),zC(101,` | `),is$1(102,`span`,7),zC(103,`null`),Vu()(),is$1(104,`td`)(105,`div`,8),zC(106,` string `),Vu()(),is$1(107,`td`)(108,`div`,9),zC(109,` null `),Vu()()()()(),is$1(110,`h4`,4),zC(111,`Events`),Vu(),is$1(112,`table`,6)(113,`thead`)(114,`tr`)(115,`th`),zC(116,`Event`),Vu(),is$1(117,`th`),zC(118,`Description`),Vu(),is$1(119,`th`),zC(120,`Type`),Vu()()(),is$1(121,`tbody`)(122,`tr`)(123,`td`),zC(124,`suiSelectedIndexChanged`),Vu(),is$1(125,`td`),zC(126,`Fires when the selected tab is changed. Index starts from 0.`),Vu(),is$1(127,`td`)(128,`div`,8),zC(129,`number`),Vu()()()()(),is$1(130,`h2`,2),zC(131,`sui-tab`),Vu(),is$1(132,`h4`,4),zC(133,`Properties`),Vu(),is$1(134,`table`,6)(135,`thead`)(136,`tr`)(137,`th`),zC(138,`Property`),Vu(),is$1(139,`th`),zC(140,`Description`),Vu(),is$1(141,`th`),zC(142,`Type`),Vu(),is$1(143,`th`),zC(144,`Default`),Vu()()(),is$1(145,`tbody`)(146,`tr`)(147,`td`),zC(148,`suiTitle`),Vu(),is$1(149,`td`),zC(150,`Set the tab title`),Vu(),is$1(151,`td`)(152,`div`,8),zC(153,`string`),Vu()(),is$1(154,`td`)(155,`div`,9),zC(156,`null`),Vu()()(),is$1(157,`tr`)(158,`td`),zC(159,`suiIcon`),Vu(),is$1(160,`td`),zC(161,`Set the tab icon`),Vu(),is$1(162,`td`)(163,`div`,8),zC(164,`string`),Vu()(),is$1(165,`td`)(166,`div`,9),zC(167,`null`),Vu()()(),is$1(168,`tr`)(169,`td`),zC(170,`suiLoading`),Vu(),is$1(171,`td`),zC(172,`Show the loading icon`),Vu(),is$1(173,`td`)(174,`div`,8),zC(175,` boolean `),Vu()(),is$1(176,`td`)(177,`div`,9),zC(178,` false `),Vu()()(),is$1(179,`tr`)(180,`td`),zC(181,`disabled`),Vu(),is$1(182,`td`),zC(183,`Prevent the tab from being activated`),Vu(),is$1(184,`td`)(185,`div`,8),zC(186,` boolean `),Vu()(),is$1(187,`td`)(188,`div`,9),zC(189,` false `),Vu()()()()()())}var ia=(()=>{class n{constructor(o){this.snippetBasic=Ro,this.snippetPointing=zo,this.snippetText=jo,this.snippetLoading=No,this.snippetDisabled=Uo,this.snippetPositioned=$o,this.snippetColoured=Yo,this.isDefinitionsActive=!0,this.colours=[`red`,`orange`,`green`,`blue`,`violet`],this.tabColour=`blue`,this.isTabDisabled=!1,o.setTitle(`Tab | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-tab`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Tab`,`subHeader`,`A tab is a hidden section of content activated by a menu`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,su,51,7,`div`,1)(2,ru,190,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Jo,qo,Zo,Ko,Qo,ea,ta],styles:[`select[_ngcontent-%COMP%]{margin-bottom:1rem}`],changeDetection:1})}}return n})();var na=`<sui-accordion>
  <sui-accordion-panel
      isOpen
      suiTitle="What is a dog?">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
      welcome guest in many households across the world.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
      dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
      shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
      assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
      from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </sui-accordion-panel>
</sui-accordion>
`;var oa=`<sui-accordion suiStyled>
  <sui-accordion-panel
      suiTitle="What is a dog?">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
      welcome guest in many households across the world.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
      dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
      shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
      assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
      from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </sui-accordion-panel>
</sui-accordion>
`;var aa=`<sui-accordion suiStyled suiFluid>
  <sui-accordion-panel
      suiTitle="What is a dog?">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
      welcome guest in many households across the world.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
      dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
      shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
      assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
      from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </sui-accordion-panel>
</sui-accordion>
`;var sa=`<div sui-segment suiInverted>
  <sui-accordion suiInverted=>
    <sui-accordion-panel
        suiTitle="What is a dog?">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
        welcome guest in many households across the world.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
        suiTitle="What kinds of dogs are there?">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed
        of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
        suiTitle="How do you acquire a dog?">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
        shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
        assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
        from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </sui-accordion-panel>
  </sui-accordion>
</div>
`;var Nt=(()=>{class n{constructor(){this.suiTitle=``,this.disabled=!1,this.isOpenChange=new nt$1,this._isOpen=!1}get isOpen(){return this._isOpen}set isOpen(o){this.disabled||(this._isOpen=o,this.isOpenChange.emit(o))}toggle(){this.isOpen=!this.isOpen}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){return OI({type:n,selectors:[[`sui-accordion-panel`]],inputs:{suiTitle:`suiTitle`,disabled:`disabled`,isOpen:`isOpen`},outputs:{isOpenChange:`isOpenChange`},ngContentSelectors:[`*`],decls:5,vars:5,consts:[[1,`title`,3,`click`],[`sui-icon`,``,`suiIconType`,`dropdown`],[1,`content`]],template:function(s,p){s&1&&(gC(),is$1(0,`div`,0),Kh$1(`click`,function(){return p.toggle()}),zh$1(1,`i`,1),zC(2),Vu(),is$1(3,`div`,2),mC(4),Vu()),s&2&&(ho$1(`active`,p.isOpen),KD(2),Gu$1(` `,p.suiTitle,` `),KD(),ho$1(`active`,p.isOpen))},dependencies:[we],encapsulation:2,changeDetection:1})})()}}return uS([ve()],n.prototype,`disabled`,void 0),uS([ve()],n.prototype,`isOpen`,null),n})();var Ut=(()=>{class n{constructor(){this.suiStyled=!1,this.suiFluid=!1,this.suiInverted=!1,this.suiCloseOthers=!0}get classes(){return[`ui`,J.getPropClass(this.suiFluid,`fluid`),J.getPropClass(this.suiStyled,`styled`),J.getPropClass(this.suiInverted,`inverted`),`accordion`].join(` `)}ngAfterContentInit(){this.suiCloseOthers&&this.panels.forEach((o,a)=>o.isOpenChange.subscribe(s=>{s&&this.panels.forEach((p,m)=>{a!==m&&(p.isOpen=!1)})}))}ngOnDestroy(){this.panels.forEach(o=>o.isOpenChange.unsubscribe())}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){return OI({type:n,selectors:[[`sui-accordion`]],contentQueries:function(s,p,m){if(s&1&&eg(m,Nt,4),s&2){let v;vC(v=DC())&&(p.panels=v)}},inputs:{suiStyled:`suiStyled`,suiFluid:`suiFluid`,suiInverted:`suiInverted`,suiCloseOthers:`suiCloseOthers`},ngContentSelectors:[`*`],decls:2,vars:1,consts:[[3,`ngClass`]],template:function(s,p){s&1&&(gC(),is$1(0,`div`,0),mC(1),Vu()),s&2&&Gh$1(`ngClass`,p.classes)},dependencies:[sl$1,Gw],encapsulation:2,changeDetection:1})})()}}return uS([ve()],n.prototype,`suiStyled`,void 0),uS([ve()],n.prototype,`suiFluid`,void 0),uS([ve()],n.prototype,`suiInverted`,void 0),uS([ve()],n.prototype,`suiCloseOthers`,void 0),n})();var ra=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Ut]})}}return n})();var la=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-accordion-standard-example`]],standalone:!1,decls:12,vars:0,consts:[[`isOpen`,``,`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(is$1(0,`sui-accordion`)(1,`sui-accordion-panel`,0)(2,`p`),zC(3,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Vu()(),is$1(4,`sui-accordion-panel`,1)(5,`p`),zC(6,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Vu()(),is$1(7,`sui-accordion-panel`,2)(8,`p`),zC(9,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Vu(),is$1(10,`p`),zC(11,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Vu()()())},dependencies:[Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();var da=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-accordion-styled-example`]],standalone:!1,decls:12,vars:0,consts:[[`suiStyled`,``],[`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(is$1(0,`sui-accordion`,0)(1,`sui-accordion-panel`,1)(2,`p`),zC(3,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Vu()(),is$1(4,`sui-accordion-panel`,2)(5,`p`),zC(6,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Vu()(),is$1(7,`sui-accordion-panel`,3)(8,`p`),zC(9,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Vu(),is$1(10,`p`),zC(11,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Vu()()())},dependencies:[Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();var ma=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-accordion-styled-fluid-example`]],standalone:!1,decls:12,vars:0,consts:[[`suiStyled`,``,`suiFluid`,``],[`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(is$1(0,`sui-accordion`,0)(1,`sui-accordion-panel`,1)(2,`p`),zC(3,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Vu()(),is$1(4,`sui-accordion-panel`,2)(5,`p`),zC(6,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Vu()(),is$1(7,`sui-accordion-panel`,3)(8,`p`),zC(9,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Vu(),is$1(10,`p`),zC(11,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Vu()()())},dependencies:[Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();var pa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-accordion-inverted-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-segment`,``,`suiInverted`,``],[`suiInverted`,``],[`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`sui-accordion`,1)(2,`sui-accordion-panel`,2)(3,`p`),zC(4,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Vu()(),is$1(5,`sui-accordion-panel`,3)(6,`p`),zC(7,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Vu()(),is$1(8,`sui-accordion-panel`,4)(9,`p`),zC(10,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Vu(),is$1(11,`p`),zC(12,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Vu()()()())},dependencies:[ze,Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();function hu(n,u){n&1&&zh$1(0,`doc-accordion-standard-example`)}function gu(n,u){n&1&&zh$1(0,`doc-accordion-styled-example`)}function fu(n,u){n&1&&zh$1(0,`doc-accordion-styled-fluid-example`)}function Su(n,u){n&1&&zh$1(0,`doc-accordion-inverted-example`)}function vu(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Accordion`),Vu(),is$1(6,`p`),zC(7,`A standard accordion`),Vu(),jh$1(8,hu,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Styled`),Vu(),is$1(12,`p`),zC(13,`A styled accordion adds basic formatting`),Vu(),jh$1(14,gu,1,0,`ng-template`,5),Vu(),is$1(15,`h2`,2),zC(16,`Variations`),Vu(),is$1(17,`doc-code-sample`,3)(18,`h3`,4),zC(19,`Fluid`),Vu(),is$1(20,`p`),zC(21,`An accordion can take up the width of its container`),Vu(),jh$1(22,fu,1,0,`ng-template`,5),Vu(),is$1(23,`doc-code-sample`,3)(24,`h3`,4),zC(25,`Inverted`),Vu(),is$1(26,`p`),zC(27,`An accordion can be formatted to appear on dark backgrounds`),Vu(),jh$1(28,Su,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetStandard),KD(6),Gh$1(`templateCode`,o.snippetStyled),KD(8),Gh$1(`templateCode`,o.snippetStyledFluid),KD(6),Gh$1(`templateCode`,o.snippetInverted)}}function xu(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-accordion`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiStyled`),Vu(),is$1(20,`td`),zC(21,` Determines if the styled variation of the accordion is rendered `),Vu(),is$1(22,`td`)(23,`div`,7),zC(24,`boolean`),Vu()(),is$1(25,`td`)(26,`div`,8),zC(27,`false`),Vu()()(),is$1(28,`tr`)(29,`td`),zC(30,`suiFluid`),Vu(),is$1(31,`td`),zC(32,` Determines if the styled variation of the accordion is rendered `),Vu(),is$1(33,`td`)(34,`div`,7),zC(35,`boolean`),Vu()(),is$1(36,`td`)(37,`div`,8),zC(38,`false`),Vu()()(),is$1(39,`tr`)(40,`td`),zC(41,`suiFluid`),Vu(),is$1(42,`td`),zC(43,` Determines if the styled variation of the accordion is rendered `),Vu(),is$1(44,`td`)(45,`div`,7),zC(46,`boolean`),Vu()(),is$1(47,`td`)(48,`div`,8),zC(49,`false`),Vu()()(),is$1(50,`tr`)(51,`td`),zC(52,`suiInverted`),Vu(),is$1(53,`td`),zC(54,`Determine if the accordion should invert it's colours`),Vu(),is$1(55,`td`)(56,`div`,7),zC(57,`boolean `),Vu()(),is$1(58,`td`)(59,`div`,8),zC(60,`false `),Vu()()(),is$1(61,`tr`)(62,`td`),zC(63,`suiCloseOthers`),Vu(),is$1(64,`td`),zC(65,`Determines if the accordion should close other open panels when a panel is open`),Vu(),is$1(66,`td`)(67,`div`,7),zC(68,`boolean `),Vu()(),is$1(69,`td`)(70,`div`,8),zC(71,`true `),Vu()()()()(),is$1(72,`h2`,2),zC(73,`sui-accordion-panel`),Vu(),is$1(74,`h4`,4),zC(75,`Properties`),Vu(),is$1(76,`table`,6)(77,`thead`)(78,`tr`)(79,`th`),zC(80,`Property`),Vu(),is$1(81,`th`),zC(82,`Description`),Vu(),is$1(83,`th`),zC(84,`Type`),Vu(),is$1(85,`th`),zC(86,`Default`),Vu()()(),is$1(87,`tbody`)(88,`tr`)(89,`td`),zC(90,`suiTitle`),Vu(),is$1(91,`td`),zC(92,` What title the accordion panel should gave `),Vu(),is$1(93,`td`)(94,`div`,7),zC(95,`string`),Vu()(),zh$1(96,`td`),Vu(),is$1(97,`tr`)(98,`td`),zC(99,`disabled`),Vu(),is$1(100,`td`),zC(101,` Determines if a panel should be disabled meaning it cannot be interacted with `),Vu(),is$1(102,`td`)(103,`div`,7),zC(104,`boolean`),Vu()(),is$1(105,`td`)(106,`div`,8),zC(107,`false`),Vu()()(),is$1(108,`tr`)(109,`td`),zC(110,`isOpen`),Vu(),is$1(111,`td`),zC(112,`A bindable field to determine and notify whether a panel is open or not`),Vu(),is$1(113,`td`)(114,`div`,7),zC(115,`boolean`),Vu()(),zh$1(116,`td`),Vu()()()())}var ua=(()=>{class n{constructor(o){this.snippetStandard=na,this.snippetStyled=oa,this.snippetStyledFluid=aa,this.snippetInverted=sa,o.setTitle(`Accordion | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-accordion`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Accordion`,`subHeader`,`An accordion allows users to toggle the display of sections of content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,vu,29,4,`div`,1)(2,xu,117,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,la,da,ma,pa],encapsulation:2,changeDetection:1})}}return n})();var ca=`<sui-checkbox>
  Make my profile visible
</sui-checkbox>
`;var ha=`<sui-checkbox
    suiType="radio">
  Radio choice
</sui-checkbox>
`;var ga=`<div sui-form>
  <div suiFormFields suiInline>
    <label>How often do you use checkboxes?</label>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-week"
          [(ngModel)]="inlineRadioValue">
        Once a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="2-3-a-week"
          [(ngModel)]="inlineRadioValue">
        2-3 times a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-day"
          [(ngModel)]="inlineRadioValue">
        Once a day
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="twice-a-day"
          [(ngModel)]="inlineRadioValue">
        Twice a day
      </sui-checkbox>
    </div>
  </div>
</div>
`;var fa=`inlineRadioValue: string = null;
`;var Sa=`<div sui-form>
  <div suiFormFields suiGrouped>
    <label>How often do you use checkboxes?</label>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-week"
          [(ngModel)]="groupedRadioValue">
        Once a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="2-3-a-week"
          [(ngModel)]="groupedRadioValue">
        2-3 times a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-day"
          [(ngModel)]="groupedRadioValue">
        Once a day
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="twice-a-day"
          [(ngModel)]="groupedRadioValue">
        Twice a day
      </sui-checkbox>
    </div>
  </div>
</div>
`;var va=`groupedRadioValue: string = null;
`;var xa=`<sui-checkbox
    suiType="slider">
  Accept terms and conditions
</sui-checkbox>
`;var ba=`<div sui-form>
  <div suiFormFields suiGrouped>
    <label>Outbound Throughput</label>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="20mb"
          [(ngModel)]="groupedSliderValue">
        20 mbps max
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="10mb"
          [(ngModel)]="groupedSliderValue">
        10 mbps max
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="5mb"
          [(ngModel)]="groupedSliderValue">
        5 mbps max
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="~mb"
          [(ngModel)]="groupedSliderValue">
        Unmetered
      </sui-checkbox>
    </div>
  </div>
</div>
`;var ya=`groupedSliderValue: string = null;
`;var Ea=`<sui-checkbox
    suiType="toggle">
  Subscribe to weekly newsletter
</sui-checkbox>
`;var Ca=`<sui-checkbox
    suiReadOnly>
  Read Only
</sui-checkbox>
`;var Da=`<sui-checkbox
    [checked]="true">
  Active
</sui-checkbox>
`;var wa=`<sui-checkbox>
  Indeterminate
</sui-checkbox>
`;var _a=`<div>
  <sui-checkbox disabled>
    Disabled
  </sui-checkbox>
</div>
<div>
  <sui-checkbox disabled suiType="toggle">
    Disabled
  </sui-checkbox>
</div>
`;var Ta=`<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
</div>
`;var Ma=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-standard-example`]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(is$1(0,`sui-checkbox`),zC(1,` Make my profile visible
`),Vu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Ia=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-basic-radio-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiType`,`radio`]],template:function(a,s){a&1&&(is$1(0,`sui-checkbox`,0),zC(1,` Radio choice
`),Vu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Pa=(()=>{class n{constructor(){this.inlineRadioValue=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-inline-radio-example`]],standalone:!1,decls:16,vars:4,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``],[`suiType`,`radio`,`suiValue`,`once-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`2-3-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`once-a-day`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`twice-a-day`,3,`ngModelChange`,`ngModel`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`How often do you use checkboxes?`),Vu(),is$1(4,`div`,2)(5,`sui-checkbox`,3),VE(),Dg(`ngModelChange`,function(m){return ZC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),zC(6,` Once a week `),Vu()(),is$1(7,`div`,2)(8,`sui-checkbox`,4),VE(),Dg(`ngModelChange`,function(m){return ZC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),zC(9,` 2-3 times a week `),Vu()(),is$1(10,`div`,2)(11,`sui-checkbox`,5),VE(),Dg(`ngModelChange`,function(m){return ZC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),zC(12,` Once a day `),Vu()(),is$1(13,`div`,2)(14,`sui-checkbox`,6),VE(),Dg(`ngModelChange`,function(m){return ZC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),zC(15,` Twice a day `),Vu()()()()),a&2&&(KD(5),vg(`ngModel`,s.inlineRadioValue),HE(),KD(3),vg(`ngModel`,s.inlineRadioValue),HE(),KD(3),vg(`ngModel`,s.inlineRadioValue),HE(),KD(3),vg(`ngModel`,s.inlineRadioValue),HE())},dependencies:[ui,Mn$1,Ni,wi$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var ka=(()=>{class n{constructor(){this.groupedRadioValue=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-grouped-radio-example`]],standalone:!1,decls:16,vars:4,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiGrouped`,``],[`suiFormField`,``],[`suiType`,`radio`,`suiValue`,`once-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`2-3-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`once-a-day`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`twice-a-day`,3,`ngModelChange`,`ngModel`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`How often do you use checkboxes?`),Vu(),is$1(4,`div`,2)(5,`sui-checkbox`,3),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),zC(6,` Once a week `),Vu()(),is$1(7,`div`,2)(8,`sui-checkbox`,4),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),zC(9,` 2-3 times a week `),Vu()(),is$1(10,`div`,2)(11,`sui-checkbox`,5),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),zC(12,` Once a day `),Vu()(),is$1(13,`div`,2)(14,`sui-checkbox`,6),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),zC(15,` Twice a day `),Vu()()()()),a&2&&(KD(5),vg(`ngModel`,s.groupedRadioValue),HE(),KD(3),vg(`ngModel`,s.groupedRadioValue),HE(),KD(3),vg(`ngModel`,s.groupedRadioValue),HE(),KD(3),vg(`ngModel`,s.groupedRadioValue),HE())},dependencies:[ui,Mn$1,Ni,wi$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Fa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-basic-slider-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiType`,`slider`]],template:function(a,s){a&1&&(is$1(0,`sui-checkbox`,0),zC(1,` Accept terms and conditions
`),Vu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Aa=(()=>{class n{constructor(){this.groupedSliderValue=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-grouped-slider-example`]],standalone:!1,decls:16,vars:4,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiGrouped`,``],[`suiFormField`,``],[`suiType`,`slider`,`suiValue`,`20mb`,3,`ngModelChange`,`ngModel`],[`suiType`,`slider`,`suiValue`,`10mb`,3,`ngModelChange`,`ngModel`],[`suiType`,`slider`,`suiValue`,`5mb`,3,`ngModelChange`,`ngModel`],[`suiType`,`slider`,`suiValue`,`~mb`,3,`ngModelChange`,`ngModel`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Outbound Throughput`),Vu(),is$1(4,`div`,2)(5,`sui-checkbox`,3),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),zC(6,` 20 mbps max `),Vu()(),is$1(7,`div`,2)(8,`sui-checkbox`,4),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),zC(9,` 10 mbps max `),Vu()(),is$1(10,`div`,2)(11,`sui-checkbox`,5),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),zC(12,` 5 mbps max `),Vu()(),is$1(13,`div`,2)(14,`sui-checkbox`,6),VE(),Dg(`ngModelChange`,function(m){return ZC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),zC(15,` Unmetered `),Vu()()()()),a&2&&(KD(5),vg(`ngModel`,s.groupedSliderValue),HE(),KD(3),vg(`ngModel`,s.groupedSliderValue),HE(),KD(3),vg(`ngModel`,s.groupedSliderValue),HE(),KD(3),vg(`ngModel`,s.groupedSliderValue),HE())},dependencies:[ui,Mn$1,Ni,wi$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Va=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-toggle-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiType`,`toggle`]],template:function(a,s){a&1&&(is$1(0,`sui-checkbox`,0),zC(1,` Subscribe to weekly newsletter
`),Vu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Ba=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-read-only-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiReadOnly`,``]],template:function(a,s){a&1&&(is$1(0,`sui-checkbox`,0),zC(1,` Read Only
`),Vu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Oa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-checked-example`]],standalone:!1,decls:2,vars:1,consts:[[3,`checked`]],template:function(a,s){a&1&&(is$1(0,`sui-checkbox`,0),zC(1,` Active
`),Vu()),a&2&&Gh$1(`checked`,!0)},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var La=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-indeterminate-example`]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(is$1(0,`sui-checkbox`),zC(1,` Indeterminate
`),Vu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Ha=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-disabled-example`]],standalone:!1,decls:6,vars:0,consts:[[`disabled`,``],[`disabled`,``,`suiType`,`toggle`]],template:function(a,s){a&1&&(is$1(0,`div`)(1,`sui-checkbox`,0),zC(2,` Disabled `),Vu()(),is$1(3,`div`)(4,`sui-checkbox`,1),zC(5,` Disabled `),Vu()())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Wa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox-fitted-example`]],standalone:!1,decls:6,vars:0,consts:[[`sui-segment`,``,`suiCompact`,``,`suiFloated`,`left floated`],[`suiFitted`,``],[`suiFitted`,``,`suiType`,`slider`],[`suiFitted`,``,`suiType`,`toggle`]],template:function(a,s){a&1&&(is$1(0,`div`,0),zh$1(1,`sui-checkbox`,1),Vu(),is$1(2,`div`,0),zh$1(3,`sui-checkbox`,2),Vu(),is$1(4,`div`,0),zh$1(5,`sui-checkbox`,3),Vu())},dependencies:[ze,P],encapsulation:2,changeDetection:1})}}return n})();function Hu(n,u){n&1&&zh$1(0,`doc-checkbox-standard-example`)}function Wu(n,u){n&1&&zh$1(0,`doc-checkbox-basic-radio-example`)}function Ru(n,u){n&1&&zh$1(0,`doc-checkbox-inline-radio-example`)}function zu(n,u){n&1&&zh$1(0,`doc-checkbox-grouped-radio-example`)}function ju(n,u){n&1&&zh$1(0,`doc-checkbox-basic-slider-example`)}function Nu(n,u){n&1&&zh$1(0,`doc-checkbox-grouped-slider-example`)}function Uu(n,u){n&1&&zh$1(0,`doc-checkbox-toggle-example`)}function $u(n,u){n&1&&zh$1(0,`doc-checkbox-read-only-example`)}function Yu(n,u){n&1&&zh$1(0,`doc-checkbox-checked-example`)}function Gu(n,u){n&1&&zh$1(0,`doc-checkbox-indeterminate-example`)}function Xu(n,u){n&1&&zh$1(0,`doc-checkbox-disabled-example`)}function Ju(n,u){n&1&&zh$1(0,`doc-checkbox-fitted-example`)}function qu(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Checkbox`),Vu(),is$1(6,`p`),zC(7,`A standard checkbox`),Vu(),jh$1(8,Hu,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Radio`),Vu(),is$1(12,`p`),zC(13,`A checkbox can be formatted as a radio element. This means it is an exclusive option`),Vu(),jh$1(14,Wu,1,0,`ng-template`,5),Vu(),is$1(15,`doc-code-sample`,6),jh$1(16,Ru,1,0,`ng-template`,5),Vu(),is$1(17,`doc-code-sample`,6),jh$1(18,zu,1,0,`ng-template`,5),Vu(),is$1(19,`doc-code-sample`,3)(20,`h3`,4),zC(21,`Slider`),Vu(),is$1(22,`p`),zC(23,`A checkbox can be formatted to emphasize the current selection state`),Vu(),jh$1(24,ju,1,0,`ng-template`,5),Vu(),is$1(25,`doc-code-sample`,6),jh$1(26,Nu,1,0,`ng-template`,5),Vu(),is$1(27,`doc-code-sample`,3)(28,`h3`,4),zC(29,`Toggle`),Vu(),is$1(30,`p`),zC(31,`A checkbox can be formatted to show an on or off choice`),Vu(),jh$1(32,Uu,1,0,`ng-template`,5),Vu(),is$1(33,`h2`,2),zC(34,`States`),Vu(),is$1(35,`doc-code-sample`,3)(36,`h3`,4),zC(37,`Read-only`),Vu(),is$1(38,`p`),zC(39,`A checkbox can be read-only and unable to change states`),Vu(),jh$1(40,$u,1,0,`ng-template`,5),Vu(),is$1(41,`doc-code-sample`,3)(42,`h3`,4),zC(43,`Checked`),Vu(),is$1(44,`p`),zC(45,`A checkbox can be checked`),Vu(),jh$1(46,Yu,1,0,`ng-template`,5),Vu(),is$1(47,`doc-code-sample`,3)(48,`h3`,4),zC(49,`Indeterminate`),Vu(),is$1(50,`p`),zC(51,`A checkbox can be indeterminate`),Vu(),jh$1(52,Gu,1,0,`ng-template`,5),Vu(),is$1(53,`doc-code-sample`,3)(54,`h3`,4),zC(55,`Disabled`),Vu(),is$1(56,`p`),zC(57,`A checkbox can be read-only and unable to change states`),Vu(),jh$1(58,Xu,1,0,`ng-template`,5),Vu(),is$1(59,`h2`,2),zC(60,`Variations`),Vu(),is$1(61,`doc-code-sample`,3)(62,`h3`,4),zC(63,`Fitted`),Vu(),is$1(64,`p`),zC(65,`A fitted checkbox does not leave padding for a label`),Vu(),jh$1(66,Ju,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetStandard),KD(6),Gh$1(`templateCode`,o.snippetBasicRadio),KD(6),Gh$1(`templateCode`,o.snippetInlineRadio)(`componentCode`,o.snippetInlineRadioTs),KD(2),Gh$1(`templateCode`,o.snippetGroupedRadio)(`componentCode`,o.snippetGroupedRadioTs),KD(2),Gh$1(`templateCode`,o.snippetBasicSlider),KD(6),Gh$1(`templateCode`,o.snippetGroupedSlider)(`componentCode`,o.snippetGroupedSliderTs),KD(2),Gh$1(`templateCode`,o.snippetToggle),KD(8),Gh$1(`templateCode`,o.snippetReadOnly),KD(6),Gh$1(`templateCode`,o.snippetChecked),KD(6),Gh$1(`templateCode`,o.snippetIndeterminate),KD(6),Gh$1(`templateCode`,o.snippetDisabled),KD(8),Gh$1(`templateCode`,o.snippetFitted)}}function Zu(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-checkbox`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiReadOnly`),Vu(),is$1(20,`td`),zC(21,` Determines if the checkbox's state can be modified `),Vu(),is$1(22,`td`)(23,`div`,8),zC(24,`boolean`),Vu()(),is$1(25,`td`)(26,`div`,9),zC(27,`false`),Vu()()(),is$1(28,`tr`)(29,`td`),zC(30,`suiFitted`),Vu(),is$1(31,`td`),zC(32,` Determines if the fitted variation of the checkbox is rendered `),Vu(),is$1(33,`td`)(34,`div`,8),zC(35,`boolean`),Vu()(),is$1(36,`td`)(37,`div`,9),zC(38,`false`),Vu()()(),is$1(39,`tr`)(40,`td`),zC(41,`disabled`),Vu(),is$1(42,`td`),zC(43,` Determines if the checkbox is disabled `),Vu(),is$1(44,`td`)(45,`div`,8),zC(46,`boolean`),Vu()(),is$1(47,`td`)(48,`div`,9),zC(49,`false`),Vu()()(),is$1(50,`tr`)(51,`td`),zC(52,`name`),Vu(),is$1(53,`td`),zC(54,`Sets the name attribute of the checkbox. Required for form usage`),Vu(),is$1(55,`td`)(56,`div`,8),zC(57,`string`),Vu()(),is$1(58,`td`)(59,`div`,9),zC(60,`null`),Vu()()(),is$1(61,`tr`)(62,`td`),zC(63,`suiValue`),Vu(),is$1(64,`td`),zC(65,`Sets the value of the checkbox`),Vu(),is$1(66,`td`)(67,`div`,8),zC(68,`any`),Vu()(),is$1(69,`td`)(70,`div`,9),zC(71,`null`),Vu()()(),is$1(72,`tr`)(73,`td`),zC(74,`[(value)]`),Vu(),is$1(75,`td`),zC(76,`Sets and notifies you of changes to the checkbox's value`),Vu(),is$1(77,`td`)(78,`div`,8),zC(79,`any`),Vu()(),is$1(80,`td`)(81,`div`,9),zC(82,`null`),Vu()()(),is$1(83,`tr`)(84,`td`),zC(85,`[(checked)]`),Vu(),is$1(86,`td`),zC(87,`Sets and notifies you of changes to the checkbox's check state`),Vu(),is$1(88,`td`)(89,`div`,8),zC(90,`boolean`),Vu()(),is$1(91,`td`)(92,`div`,9),zC(93,`null`),Vu()()()()()())}var Ra=(()=>{class n{constructor(o){this.snippetStandard=ca,this.snippetBasicRadio=ha,this.snippetInlineRadio=ga,this.snippetInlineRadioTs=fa,this.snippetGroupedRadio=Sa,this.snippetGroupedRadioTs=va,this.snippetBasicSlider=xa,this.snippetGroupedSlider=ba,this.snippetGroupedSliderTs=ya,this.snippetToggle=Ea,this.snippetReadOnly=Ca,this.snippetChecked=Da,this.snippetIndeterminate=wa,this.snippetDisabled=_a,this.snippetFitted=Ta,o.setTitle(`Checkbox | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-checkbox`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Checkbox`,`subHeader`,`A checkbox allows a user to select a value from a small set of options, often binary`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,qu,67,15,`div`,1)(2,Zu,94,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Ma,Ia,Pa,ka,Fa,Aa,Va,Ba,Oa,La,Ha,Wa],encapsulation:2,changeDetection:1})}}return n})();var za=`<sui-progress
    suiShowProgress
    [suiValue]="standardValue">
  Uploading Files
</sui-progress>
`;var ja=`<sui-progress
    suiIndicating
    suiState="active"
    [suiValue]="indicatingValue">
  {{ indicatingValue }}% Funded
</sui-progress>
`;var Na=`indicatingValue = 40;
`;var Ua=`<sui-progress
    [suiValue]="28">
</sui-progress>
`;var $a=`<sui-progress
    suiShowProgress
    [suiValue]="35">
</sui-progress>
`;var Ya=`<sui-progress
    suiState="active"
    [suiValue]="51">
  Uploading Files
</sui-progress>
`;var Ga=`<sui-progress
    suiState="success"
    [suiValue]="100">
  Everything worked, your file is all ready.
</sui-progress>
`;var Xa=`<sui-progress
    suiState="warning"
    [suiValue]="100">
  Your file didn't meet the minimum resolution requirements.
</sui-progress>
`;var Ja=`<sui-progress
    suiState="error"
    [suiValue]="100">
  There was an error.
</sui-progress>
`;var qa=`<sui-progress
    disabled
    [suiValue]="38">
</sui-progress>
`;var Za=`<div sui-segment suiInverted>
  <sui-progress
      suiInverted
      suiShowProgress
      [suiValue]="15">
    Uploading Files
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="success"
      [suiValue]="100">
    Success
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="warning"
      [suiValue]="100">
    Warning
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="error"
      [suiValue]="100">
    Error
  </sui-progress>
</div>
`;var Ka=`<div sui-segment>
  <sui-progress
      suiAttached="top"
      [suiValue]="21">
  </sui-progress>
  <p style="margin: 20px">La la la la</p>
  <sui-progress
      suiAttached="bottom"
      [suiValue]="31">
  </sui-progress>
</div>
`;var Qa=`<div sui-card>
  <div suiCardImage>
    <img src="/assets/images/wireframes/image.png"/>
  </div>
  <div suiCardContent>
    <a suiCardHeader>Project</a>
    <div suiCardMeta>
      <span class="date">Started in 2014</span>
    </div>
  </div>
  <div suiCardExtra>
    <a>
      <i sui-icon suiIconType="user"></i>
      22 Friends
    </a>
  </div>
  <sui-progress
      suiAttached="bottom"
      [suiValue]="31">
  </sui-progress>
</div>
`;var es=`<sui-progress
    suiSize="tiny"
    [suiValue]="61">
  Tiny
</sui-progress>
<sui-progress
    suiSize="small"
    [suiValue]="21">
  Small
</sui-progress>
<sui-progress
    [suiValue]="41">
  Standard
</sui-progress>
<sui-progress
    suiSize="large"
    [suiValue]="5">
  Large
</sui-progress>
<sui-progress
    suiSize="big"
    [suiValue]="14">
  Big
</sui-progress>
`;var ts=`<sui-progress
    suiColour="red"
    [suiValue]="59">
</sui-progress>
<sui-progress
    suiColour="orange"
    [suiValue]="31">
</sui-progress>
<sui-progress
    suiColour="yellow"
    [suiValue]="48">
</sui-progress>
<sui-progress
    suiColour="olive"
    [suiValue]="35">
</sui-progress>
<sui-progress
    suiColour="green"
    [suiValue]="35">
</sui-progress>
<sui-progress
    suiColour="teal"
    [suiValue]="31">
</sui-progress>
<sui-progress
    suiColour="blue"
    [suiValue]="35">
</sui-progress>
<sui-progress
    suiColour="violet"
    [suiValue]="18">
</sui-progress>
<sui-progress
    suiColour="purple"
    [suiValue]="22">
</sui-progress>
<sui-progress
    suiColour="pink"
    [suiValue]="50">
</sui-progress>
<sui-progress
    suiColour="brown"
    [suiValue]="18">
</sui-progress>
<sui-progress
    suiColour="grey"
    [suiValue]="56">
</sui-progress>
<sui-progress
    suiColour="black"
    [suiValue]="45">
</sui-progress>
`;var is=`<div sui-segment suiInverted>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="red"
      [suiValue]="59">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="orange"
      [suiValue]="31">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="yellow"
      [suiValue]="48">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="olive"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="green"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="teal"
      [suiValue]="31">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="blue"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="violet"
      [suiValue]="18">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="purple"
      [suiValue]="22">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="pink"
      [suiValue]="50">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="brown"
      [suiValue]="18">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="grey"
      [suiValue]="56">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="black"
      [suiValue]="45">
  </sui-progress>
</div>
`;var ue=(()=>{class n{constructor(){this.suiAttached=null,this.suiSize=null,this.suiColour=null,this.suiState=null,this.suiIndicating=!1,this.disabled=!1,this.suiInverted=!1,this.suiShowProgress=!1,this.value=0,this.maxValue=100,this.progressPercentage=0}set suiValue(o){this.value=+o,this.calculatePercentage()}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.calculatePercentage()}get suiMaxValue(){return this.maxValue}get classes(){return J.combineToClass([`ui`,this.suiSize??``,this.suiColour??``,this.suiAttached?`${this.suiAttached} attached`:``,J.getPropClass(this.suiIndicating,`indicating`),J.getPropClass(this.disabled,`disabled`),J.getPropClass(this.suiInverted,`inverted`),`progress`,this.suiState??``])}calculatePercentage(){this.value>this.maxValue||(this.progressPercentage=Math.ceil(this.value*100/this.maxValue))}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){let o=[`*`];function a(s,p){if(s&1&&(is$1(0,`div`,2),zC(1),Vu()),s&2){let m=pC();KD(),Gu$1(``,m.progressPercentage,`%`)}}return OI({type:n,selectors:[[`sui-progress`]],inputs:{suiAttached:`suiAttached`,suiSize:`suiSize`,suiColour:`suiColour`,suiState:`suiState`,suiIndicating:`suiIndicating`,disabled:`disabled`,suiInverted:`suiInverted`,suiShowProgress:`suiShowProgress`,suiValue:`suiValue`,suiMaxValue:`suiMaxValue`},ngContentSelectors:o,decls:5,vars:5,consts:[[3,`ngClass`],[1,`bar`],[1,`progress`],[1,`label`]],template:function(p,m){p&1&&(gC(),is$1(0,`div`,0)(1,`div`,1),XI(2,a,2,1,`div`,2),Vu(),is$1(3,`div`,3),mC(4),Vu()()),p&2&&(Gh$1(`ngClass`,m.classes),Uh$1(`data-percent`,m.progressPercentage),KD(),sg$1(`width`,m.progressPercentage,`%`),KD(),tC(m.suiShowProgress?2:-1))},dependencies:[sl$1,Gw],styles:[`[_nghost-%COMP%]{width:100%}`],changeDetection:1})})()}}return uS([ve()],n.prototype,`suiIndicating`,void 0),uS([ve()],n.prototype,`disabled`,void 0),uS([ve()],n.prototype,`suiInverted`,void 0),uS([ve()],n.prototype,`suiShowProgress`,void 0),n})();var ns=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[ue]})}}return n})();var ce=class{constructor(){this.standardValue=31,this.indicatingValue=40}addToStandard(u){let o=this.standardValue+u;o>100?o=100:o<0&&(o=0),this.standardValue=o}addToIndicating(u){let o=this.indicatingValue+u;o>100?o=100:o<0&&(o=0),this.indicatingValue=o}};var as=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-standard-example`]],standalone:!1,features:[uo$1],decls:2,vars:1,consts:[[`suiShowProgress`,``,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` Uploading Files
`),Vu()),a&2&&Gh$1(`suiValue`,s.standardValue)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ss=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-indicating-example`]],standalone:!1,features:[uo$1],decls:2,vars:2,consts:[[`suiIndicating`,``,`suiState`,`active`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1),Vu()),a&2&&(Gh$1(`suiValue`,s.indicatingValue),KD(),Gu$1(` `,s.indicatingValue,`% Funded
`))},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var rs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-bar-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[3,`suiValue`]],template:function(a,s){a&1&&zh$1(0,`sui-progress`,0),a&2&&Gh$1(`suiValue`,28)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ls=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-progress-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiShowProgress`,``,3,`suiValue`]],template:function(a,s){a&1&&zh$1(0,`sui-progress`,0),a&2&&Gh$1(`suiValue`,35)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ds=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-label-example`]],standalone:!1,features:[uo$1],decls:2,vars:1,consts:[[`suiShowProgress`,``,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` Uploading Files
`),Vu()),a&2&&Gh$1(`suiValue`,45)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ms=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-active-example`]],standalone:!1,features:[uo$1],decls:2,vars:1,consts:[[`suiState`,`active`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` Uploading Files
`),Vu()),a&2&&Gh$1(`suiValue`,51)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ps=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-success-example`]],standalone:!1,features:[uo$1],decls:2,vars:1,consts:[[`suiState`,`success`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` Everything worked, your file is all ready.
`),Vu()),a&2&&Gh$1(`suiValue`,100)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var us=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-warning-example`]],standalone:!1,features:[uo$1],decls:2,vars:1,consts:[[`suiState`,`warning`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` Your file didn't meet the minimum resolution requirements.
`),Vu()),a&2&&Gh$1(`suiValue`,100)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var cs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-error-example`]],standalone:!1,features:[uo$1],decls:2,vars:1,consts:[[`suiState`,`error`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` There was an error.
`),Vu()),a&2&&Gh$1(`suiValue`,100)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var hs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-disabled-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`disabled`,``,3,`suiValue`]],template:function(a,s){a&1&&zh$1(0,`sui-progress`,0),a&2&&Gh$1(`suiValue`,38)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var gs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-inverted-example`]],standalone:!1,features:[uo$1],decls:9,vars:4,consts:[[`sui-segment`,``,`suiInverted`,``],[`suiInverted`,``,`suiShowProgress`,``,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiState`,`success`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiState`,`warning`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiState`,`error`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`sui-progress`,1),zC(2,` Uploading Files `),Vu(),is$1(3,`sui-progress`,2),zC(4,` Success `),Vu(),is$1(5,`sui-progress`,3),zC(6,` Warning `),Vu(),is$1(7,`sui-progress`,4),zC(8,` Error `),Vu()()),a&2&&(KD(),Gh$1(`suiValue`,15),KD(2),Gh$1(`suiValue`,100),KD(2),Gh$1(`suiValue`,100),KD(2),Gh$1(`suiValue`,100))},dependencies:[ze,ue],encapsulation:2,changeDetection:1})}}return n})();var fs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-attached-example`]],standalone:!1,features:[uo$1],decls:5,vars:2,consts:[[`sui-segment`,``],[`suiAttached`,`top`,3,`suiValue`],[2,`margin`,`20px`],[`suiAttached`,`bottom`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`div`,0),zh$1(1,`sui-progress`,1),is$1(2,`p`,2),zC(3,`La la la la`),Vu(),zh$1(4,`sui-progress`,3),Vu()),a&2&&(KD(),Gh$1(`suiValue`,21),KD(3),Gh$1(`suiValue`,31))},dependencies:[ze,ue],encapsulation:2,changeDetection:1})}}return n})();var Ss=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-card-attached-example`]],standalone:!1,features:[uo$1],decls:14,vars:1,consts:[[`sui-card`,``],[`suiCardImage`,``],[`src`,`/assets/images/wireframes/image.png`],[`suiCardContent`,``],[`suiCardHeader`,``],[`suiCardMeta`,``],[1,`date`],[`suiCardExtra`,``],[`sui-icon`,``,`suiIconType`,`user`],[`suiAttached`,`bottom`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`div`,1),zh$1(2,`img`,2),Vu(),is$1(3,`div`,3)(4,`a`,4),zC(5,`Project`),Vu(),is$1(6,`div`,5)(7,`span`,6),zC(8,`Started in 2014`),Vu()()(),is$1(9,`div`,7)(10,`a`),zh$1(11,`i`,8),zC(12,` 22 Friends `),Vu()(),zh$1(13,`sui-progress`,9),Vu()),a&2&&(KD(13),Gh$1(`suiValue`,31))},dependencies:[P$1,w,b,A,E,L,we,ue],encapsulation:2,changeDetection:1})}}return n})();var vs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-size-example`]],standalone:!1,features:[uo$1],decls:10,vars:5,consts:[[`suiSize`,`tiny`,3,`suiValue`],[`suiSize`,`small`,3,`suiValue`],[3,`suiValue`],[`suiSize`,`large`,3,`suiValue`],[`suiSize`,`big`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`sui-progress`,0),zC(1,` Tiny
`),Vu(),is$1(2,`sui-progress`,1),zC(3,` Small
`),Vu(),is$1(4,`sui-progress`,2),zC(5,` Standard
`),Vu(),is$1(6,`sui-progress`,3),zC(7,` Large
`),Vu(),is$1(8,`sui-progress`,4),zC(9,` Big
`),Vu()),a&2&&(Gh$1(`suiValue`,61),KD(2),Gh$1(`suiValue`,21),KD(2),Gh$1(`suiValue`,41),KD(2),Gh$1(`suiValue`,5),KD(2),Gh$1(`suiValue`,14))},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var xs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-colour-example`]],standalone:!1,features:[uo$1],decls:13,vars:13,consts:[[`suiColour`,`red`,3,`suiValue`],[`suiColour`,`orange`,3,`suiValue`],[`suiColour`,`yellow`,3,`suiValue`],[`suiColour`,`olive`,3,`suiValue`],[`suiColour`,`green`,3,`suiValue`],[`suiColour`,`teal`,3,`suiValue`],[`suiColour`,`blue`,3,`suiValue`],[`suiColour`,`violet`,3,`suiValue`],[`suiColour`,`purple`,3,`suiValue`],[`suiColour`,`pink`,3,`suiValue`],[`suiColour`,`brown`,3,`suiValue`],[`suiColour`,`grey`,3,`suiValue`],[`suiColour`,`black`,3,`suiValue`]],template:function(a,s){a&1&&zh$1(0,`sui-progress`,0)(1,`sui-progress`,1)(2,`sui-progress`,2)(3,`sui-progress`,3)(4,`sui-progress`,4)(5,`sui-progress`,5)(6,`sui-progress`,6)(7,`sui-progress`,7)(8,`sui-progress`,8)(9,`sui-progress`,9)(10,`sui-progress`,10)(11,`sui-progress`,11)(12,`sui-progress`,12),a&2&&(Gh$1(`suiValue`,59),KD(),Gh$1(`suiValue`,31),KD(),Gh$1(`suiValue`,48),KD(),Gh$1(`suiValue`,35),KD(),Gh$1(`suiValue`,35),KD(),Gh$1(`suiValue`,31),KD(),Gh$1(`suiValue`,35),KD(),Gh$1(`suiValue`,18),KD(),Gh$1(`suiValue`,22),KD(),Gh$1(`suiValue`,50),KD(),Gh$1(`suiValue`,18),KD(),Gh$1(`suiValue`,56),KD(),Gh$1(`suiValue`,45))},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var bs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress-inverted-colour-example`]],standalone:!1,features:[uo$1],decls:14,vars:13,consts:[[`sui-segment`,``,`suiInverted`,``],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`red`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`orange`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`yellow`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`olive`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`green`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`teal`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`blue`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`violet`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`purple`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`pink`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`brown`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`grey`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`black`,3,`suiValue`]],template:function(a,s){a&1&&(is$1(0,`div`,0),zh$1(1,`sui-progress`,1)(2,`sui-progress`,2)(3,`sui-progress`,3)(4,`sui-progress`,4)(5,`sui-progress`,5)(6,`sui-progress`,6)(7,`sui-progress`,7)(8,`sui-progress`,8)(9,`sui-progress`,9)(10,`sui-progress`,10)(11,`sui-progress`,11)(12,`sui-progress`,12)(13,`sui-progress`,13),Vu()),a&2&&(KD(),Gh$1(`suiValue`,59),KD(),Gh$1(`suiValue`,31),KD(),Gh$1(`suiValue`,48),KD(),Gh$1(`suiValue`,35),KD(),Gh$1(`suiValue`,35),KD(),Gh$1(`suiValue`,31),KD(),Gh$1(`suiValue`,35),KD(),Gh$1(`suiValue`,18),KD(),Gh$1(`suiValue`,22),KD(),Gh$1(`suiValue`,50),KD(),Gh$1(`suiValue`,18),KD(),Gh$1(`suiValue`,56),KD(),Gh$1(`suiValue`,45))},dependencies:[ze,ue],encapsulation:2,changeDetection:1})}}return n})();function fc(n,u){n&1&&zh$1(0,`doc-progress-standard-example`)}function Sc(n,u){n&1&&zh$1(0,`doc-progress-indicating-example`)}function vc(n,u){n&1&&zh$1(0,`doc-progress-bar-example`)}function xc(n,u){n&1&&zh$1(0,`doc-progress-progress-example`)}function bc(n,u){n&1&&zh$1(0,`doc-progress-label-example`)}function yc(n,u){n&1&&zh$1(0,`doc-progress-active-example`)}function Ec(n,u){n&1&&zh$1(0,`doc-progress-success-example`)}function Cc(n,u){n&1&&zh$1(0,`doc-progress-warning-example`)}function Dc(n,u){n&1&&zh$1(0,`doc-progress-error-example`)}function wc(n,u){n&1&&zh$1(0,`doc-progress-disabled-example`)}function _c(n,u){n&1&&zh$1(0,`doc-progress-inverted-example`)}function Tc(n,u){n&1&&zh$1(0,`doc-progress-attached-example`)}function Mc(n,u){n&1&&zh$1(0,`doc-progress-card-attached-example`)}function Ic(n,u){n&1&&zh$1(0,`doc-progress-size-example`)}function Pc(n,u){n&1&&zh$1(0,`doc-progress-colour-example`)}function kc(n,u){n&1&&zh$1(0,`doc-progress-inverted-colour-example`)}function Fc(n,u){if(n&1){let o=dC();is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Standard`),Vu(),is$1(6,`p`),zC(7,`A standard progress bar`),Vu(),jh$1(8,fc,1,0,`ng-template`,5),Vu(),is$1(9,`div`)(10,`div`,6)(11,`button`,7),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.addToStandard(-11))}),zh$1(12,`i`,8),Vu(),is$1(13,`button`,9),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.addToStandard(11))}),zh$1(14,`i`,10),Vu()()(),is$1(15,`doc-code-sample`,11)(16,`h3`,4),zC(17,`Indicating`),Vu(),is$1(18,`p`),zC(19,`An indicating progress bar visually indicates the current level of progress of a task`),Vu(),jh$1(20,Sc,1,0,`ng-template`,5),Vu(),is$1(21,`div`)(22,`div`,6)(23,`button`,7),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.addToIndicating(-13))}),zh$1(24,`i`,8),Vu(),is$1(25,`button`,9),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.addToIndicating(13))}),zh$1(26,`i`,10),Vu()()(),is$1(27,`h2`,2),zC(28,`Content`),Vu(),is$1(29,`doc-code-sample`,3)(30,`h3`,4),zC(31,`Bar`),Vu(),is$1(32,`p`),zC(33,`A progress element can contain a bar visually indicating progress`),Vu(),jh$1(34,vc,1,0,`ng-template`,5),Vu(),is$1(35,`doc-code-sample`,3)(36,`h3`,4),zC(37,`Progress`),Vu(),is$1(38,`p`),zC(39,`A progress bar can contain a text value indicating current progress`),Vu(),jh$1(40,xc,1,0,`ng-template`,5),Vu(),is$1(41,`doc-code-sample`,3)(42,`h3`,4),zC(43,`Label`),Vu(),is$1(44,`p`),zC(45,`A progress element can contain a label`),Vu(),jh$1(46,bc,1,0,`ng-template`,5),Vu(),is$1(47,`h2`,2),zC(48,`States`),Vu(),is$1(49,`doc-code-sample`,3)(50,`h3`,4),zC(51,`Active`),Vu(),is$1(52,`p`),zC(53,`A progress bar can show activity`),Vu(),jh$1(54,yc,1,0,`ng-template`,5),Vu(),is$1(55,`doc-code-sample`,3)(56,`h3`,4),zC(57,`Success`),Vu(),is$1(58,`p`),zC(59,`A progress bar can show a success state`),Vu(),jh$1(60,Ec,1,0,`ng-template`,5),Vu(),is$1(61,`doc-code-sample`,3)(62,`h3`,4),zC(63,`Warning`),Vu(),is$1(64,`p`),zC(65,`A progress bar can show a warning state`),Vu(),jh$1(66,Cc,1,0,`ng-template`,5),Vu(),is$1(67,`doc-code-sample`,3)(68,`h3`,4),zC(69,`Error`),Vu(),is$1(70,`p`),zC(71,`A progress bar can show an error state`),Vu(),jh$1(72,Dc,1,0,`ng-template`,5),Vu(),is$1(73,`doc-code-sample`,3)(74,`h3`,4),zC(75,`Disabled`),Vu(),is$1(76,`p`),zC(77,`A progress bar can show an error state`),Vu(),jh$1(78,wc,1,0,`ng-template`,5),Vu(),is$1(79,`h2`,2),zC(80,`Variations`),Vu(),is$1(81,`doc-code-sample`,3)(82,`h3`,4),zC(83,`Inverted`),Vu(),is$1(84,`p`),zC(85,`A progress bar can have its colors inverted`),Vu(),jh$1(86,_c,1,0,`ng-template`,5),Vu(),is$1(87,`doc-code-sample`,3)(88,`h3`,4),zC(89,`Attached`),Vu(),is$1(90,`p`),zC(91,`AA progress bar can show progress of an element`),Vu(),jh$1(92,Tc,1,0,`ng-template`,5),Vu(),is$1(93,`doc-code-sample`,3),jh$1(94,Mc,1,0,`ng-template`,5),Vu(),is$1(95,`doc-code-sample`,3)(96,`h3`,4),zC(97,`Size`),Vu(),is$1(98,`p`),zC(99,`A progress bar can vary in size`),Vu(),is$1(100,`div`,12),zC(101,` Some small sizes may not be able to fit an inlined label `),Vu(),jh$1(102,Ic,1,0,`ng-template`,5),Vu(),is$1(103,`doc-code-sample`,3)(104,`h3`,4),zC(105,`Colours`),Vu(),is$1(106,`p`),zC(107,`Can have different colours`),Vu(),jh$1(108,Pc,1,0,`ng-template`,5),Vu(),is$1(109,`doc-code-sample`,3)(110,`h3`,4),zC(111,`Inverted Colours`),Vu(),is$1(112,`p`),zC(113,`These colors can also be inverted for improved contrast on dark backgrounds`),Vu(),jh$1(114,kc,1,0,`ng-template`,5),Vu()()}if(n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetStandard),KD(12),Gh$1(`templateCode`,o.snippetIndicating)(`componentCode`,o.snippetIndicatingTs),KD(14),Gh$1(`templateCode`,o.snippetBar),KD(6),Gh$1(`templateCode`,o.snippetProgress),KD(6),Gh$1(`templateCode`,o.snippetStandard),KD(8),Gh$1(`templateCode`,o.snippetActive),KD(6),Gh$1(`templateCode`,o.snippetSuccess),KD(6),Gh$1(`templateCode`,o.snippetWarning),KD(6),Gh$1(`templateCode`,o.snippetError),KD(6),Gh$1(`templateCode`,o.snippetDisabled),KD(8),Gh$1(`templateCode`,o.snippetInverted),KD(6),Gh$1(`templateCode`,o.snippetAttached),KD(6),Gh$1(`templateCode`,o.snippetCardAttached),KD(2),Gh$1(`templateCode`,o.snippetSize),KD(8),Gh$1(`templateCode`,o.snippetColour),KD(6),Gh$1(`templateCode`,o.snippetInvertedColour)}}function Ac(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-progress`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,13)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiColour`),Vu(),is$1(20,`td`),zC(21,`Set the progress colour. Allowed values could be `),is$1(22,`span`,14),zC(23,`'red'`),Vu(),zC(24,` | `),is$1(25,`span`,14),zC(26,`'orange'`),Vu(),zC(27,` | `),is$1(28,`span`,14),zC(29,`'yellow'`),Vu(),zC(30,` | `),is$1(31,`span`,14),zC(32,`'olive'`),Vu(),zC(33,` | `),is$1(34,`span`,14),zC(35,`'green'`),Vu(),zC(36,` | `),is$1(37,`span`,14),zC(38,`'teal'`),Vu(),zC(39,` | `),is$1(40,`span`,14),zC(41,`'blue'`),Vu(),zC(42,` | `),is$1(43,`span`,14),zC(44,`'violet'`),Vu(),zC(45,` | `),is$1(46,`span`,14),zC(47,`'purple'`),Vu(),zC(48,` | `),is$1(49,`span`,14),zC(50,`'pink'`),Vu(),zC(51,` | `),is$1(52,`span`,14),zC(53,`'brown'`),Vu(),zC(54,` | `),is$1(55,`span`,14),zC(56,`'grey'`),Vu(),zC(57,` | `),is$1(58,`span`,14),zC(59,`'black'`),Vu(),zC(60,` | `),is$1(61,`span`,14),zC(62,`null`),Vu()(),is$1(63,`td`)(64,`div`,15),zC(65,` string `),Vu()(),is$1(66,`td`)(67,`div`,16),zC(68,` null `),Vu()()(),is$1(69,`tr`)(70,`td`),zC(71,`suiSize`),Vu(),is$1(72,`td`),zC(73,`Set the progress size. Allowed values could be `),is$1(74,`span`,14),zC(75,`'mini'`),Vu(),zC(76,` | `),is$1(77,`span`,14),zC(78,`'tiny'`),Vu(),zC(79,` | `),is$1(80,`span`,14),zC(81,`'small'`),Vu(),zC(82,` | `),is$1(83,`span`,14),zC(84,`'medium'`),Vu(),zC(85,` | `),is$1(86,`span`,14),zC(87,`'big'`),Vu(),zC(88,` | `),is$1(89,`span`,14),zC(90,`'huge'`),Vu(),zC(91,` | `),is$1(92,`span`,14),zC(93,`'massive'`),Vu(),zC(94,` | `),is$1(95,`span`,14),zC(96,`null`),Vu()(),is$1(97,`td`)(98,`div`,15),zC(99,` string `),Vu()(),is$1(100,`td`)(101,`div`,16),zC(102,` null `),Vu()()(),is$1(103,`tr`)(104,`td`),zC(105,`suiState`),Vu(),is$1(106,`td`),zC(107,` Determines the progress' state. Allowed values could be `),is$1(108,`span`,14),zC(109,`'active'`),Vu(),zC(110,` | `),is$1(111,`span`,14),zC(112,`'success'`),Vu(),zC(113,` | `),is$1(114,`span`,14),zC(115,`'warning'`),Vu(),zC(116,` | `),is$1(117,`span`,14),zC(118,`'error'`),Vu(),zC(119,` | `),is$1(120,`span`,14),zC(121,`null`),Vu()(),is$1(122,`td`)(123,`div`,15),zC(124,`string`),Vu()(),is$1(125,`td`)(126,`div`,16),zC(127,`null`),Vu()()(),is$1(128,`tr`)(129,`td`),zC(130,`suiAttached`),Vu(),is$1(131,`td`),zC(132,` Determines the progress' attachment position. Allowed values could be `),is$1(133,`span`,14),zC(134,`'bottom'`),Vu(),zC(135,` | `),is$1(136,`span`,14),zC(137,`'top'`),Vu(),zC(138,` | `),is$1(139,`span`,14),zC(140,`null`),Vu()(),is$1(141,`td`)(142,`div`,15),zC(143,`string`),Vu()(),is$1(144,`td`)(145,`div`,16),zC(146,`null`),Vu()()(),is$1(147,`tr`)(148,`td`),zC(149,`suiIndicating`),Vu(),is$1(150,`td`),zC(151,` Determines if the progress is indicating `),Vu(),is$1(152,`td`)(153,`div`,15),zC(154,`boolean`),Vu()(),is$1(155,`td`)(156,`div`,16),zC(157,`false`),Vu()()(),is$1(158,`tr`)(159,`td`),zC(160,`disabled`),Vu(),is$1(161,`td`),zC(162,` Determines if the progress is disabled `),Vu(),is$1(163,`td`)(164,`div`,15),zC(165,`boolean`),Vu()(),is$1(166,`td`)(167,`div`,16),zC(168,`false`),Vu()()(),is$1(169,`tr`)(170,`td`),zC(171,`suiInverted`),Vu(),is$1(172,`td`),zC(173,`Determines whether the progress bar uses inverted colours`),Vu(),is$1(174,`td`)(175,`div`,15),zC(176,`boolean`),Vu()(),is$1(177,`td`)(178,`div`,16),zC(179,`false`),Vu()()(),is$1(180,`tr`)(181,`td`),zC(182,`suiShowProgress`),Vu(),is$1(183,`td`),zC(184,`Determines whether the progress percentage is displayed`),Vu(),is$1(185,`td`)(186,`div`,15),zC(187,`boolean`),Vu()(),is$1(188,`td`)(189,`div`,16),zC(190,`false`),Vu()()()()()())}var ys=(()=>{class n{constructor(o){this.snippetStandard=za,this.snippetIndicating=ja,this.snippetIndicatingTs=Na,this.snippetBar=Ua,this.snippetProgress=$a,this.snippetActive=Ya,this.snippetSuccess=Ga,this.snippetWarning=Xa,this.snippetError=Ja,this.snippetDisabled=qa,this.snippetInverted=Za,this.snippetAttached=Ka,this.snippetCardAttached=Qa,this.snippetSize=es,this.snippetColour=ts,this.snippetInvertedColour=is,this.standardValue=31,this.indicatingValue=40,o.setTitle(`Progress | Ngx Semantic`)}addToStandard(o){let a=this.standardValue+o;a>100?a=100:a<0&&(a=0),this.standardValue=a}addToIndicating(o){let a=this.indicatingValue+o;a>100?a=100:a<0&&(a=0),this.indicatingValue=a}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-progress`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Progress`,`subHeader`,`A progress bar shows the progression of a task`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-buttons`,``],[`sui-button`,``,`suiIcon`,``,`suiBasic`,``,`suiColour`,`red`,3,`click`],[`sui-icon`,``,`suiIconType`,`minus`],[`sui-button`,``,`suiIcon`,``,`suiBasic`,``,`suiColour`,`green`,3,`click`],[`sui-icon`,``,`suiIconType`,`plus`],[3,`templateCode`,`componentCode`],[`sui-message`,``,`suiState`,`info`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,Fc,115,17,`div`,1)(2,Ac,191,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Ii,Di,we,li,as,ss,rs,ls,ds,ms,ps,us,cs,hs,gs,fs,Ss,vs,xs,bs],encapsulation:2,changeDetection:1})}}return n})();var Es=`<button sui-button suiIcon
        sui-popup suiPopupContent="Add users to your feed">
  <i sui-icon suiIconType="add"></i>
</button>
`;var Cs=`<img sui-image suiAvatar
     sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
     src="/assets/images/elliot.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
     src="/assets/images/stevie.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
     src="/assets/images/matt.jpg"/>
`;var Ds=`<div sui-card
     sui-popup suiPopupTitle="User Rating" [suiPopupContent]="popupContent">
  <div suiCardImage>
    <img src="https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"/>
  </div>
  <div suiCardContent>
    <div suiCardHeader>Watchmen</div>
    <div suiCardDescription>
      In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a
      government crackdown, but after one of the masked veterans is brutally murdered an investigation into the
      killer is initiated.
    </div>
  </div>
  <div sui-buttons suiAttached suiWidth="two" suiAttachedPosition="bottom">
    <div sui-button>
      <i sui-icon suiIconType="add"></i>
      Queue
    </div>
    <div sui-button suiEmphasis="primary">
      <i sui-icon suiIconType="play"></i>
      Watch
    </div>
  </div>
</div>

<ng-template #popupContent>
  <sui-rating suiValue="3" suiMaxValue="5"></sui-rating>
</ng-template>
`;var ws=`<button sui-button suiIcon
        sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
  <i sui-icon suiIconType="add"></i>
</button>
`;var _s=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="wide"
   suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="very wide"
   suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
`;var Ts=`<div sui-button
     sui-popup [suiPopupContent]="fluidPopup">
  Show fluid popup
</div>
<ng-template #fluidPopup>
  <div sui-grid suiDivided="divided" suiAlignment="center aligned" suiWidth="four">
    <div suiGridColumn>1</div>
    <div suiGridColumn>2</div>
    <div suiGridColumn>3</div>
    <div suiGridColumn>4</div>
  </div>
</ng-template>
`;var Ms=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="mini"
   suiPopupContent="Hello. This is a mini popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="tiny"
   suiPopupContent="Hello. This is a tiny popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="small"
   suiPopupContent="Hello. This is a small popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="large"
   suiPopupContent="Hello. This is a large popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="huge"
   suiPopupContent="Hello. This is a huge popup"></i>
`;var Is=`<div sui-button
     sui-popup suiPopupFlowing [suiPopupContent]="flowingTemplate">
  Show flowing popup
</div>
<ng-template #flowingTemplate>
  <div sui-grid suiDivided="divided" suiAlignment="center aligned" suiWidth="three">
    <div suiGridColumn>
      <div sui-header>Basic Plan</div>
      <p><b>2</b> projects, $10 a month</p>
      <div sui-button>Choose</div>
    </div>
    <div suiGridColumn>
      <div sui-header>Business Plan</div>
      <p><b>5</b> projects, $20 a month</p>
      <div sui-button>Choose</div>
    </div>
    <div suiGridColumn>
      <div sui-header>Premium Plan</div>
      <p><b>8</b> projects, $25 a month</p>
      <div sui-button>Choose</div>
    </div>
  </div>
</ng-template>
`;var Ps=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup"></i>
<button sui-button suiIcon
        sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup">
  <i sui-icon suiIconType="add"></i>
</button>
`;var ks=`<i sui-icon suiCircular suiColour="red" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="bottom left" suiPopupContent="This is a bottom left popup"></i>
<i sui-icon suiCircular suiColour="teal" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="top right" suiPopupContent="This is a top right popup"></i>
`;function Uc(n,u){n&1&&zh$1(0,`sui-rating`,12)}function $c(n,u){n&1&&(is$1(0,`div`,2)(1,`div`,3),zC(2,`1`),Vu(),is$1(3,`div`,3),zC(4,`2`),Vu(),is$1(5,`div`,3),zC(6,`3`),Vu(),is$1(7,`div`,3),zC(8,`4`),Vu()())}function Yc(n,u){n&1&&(is$1(0,`div`,2)(1,`div`,3)(2,`div`,4),zC(3,`Basic Plan`),Vu(),is$1(4,`p`)(5,`b`),zC(6,`2`),Vu(),zC(7,` projects, $10 a month`),Vu(),is$1(8,`div`,5),zC(9,`Choose`),Vu()(),is$1(10,`div`,3)(11,`div`,4),zC(12,`Business Plan`),Vu(),is$1(13,`p`)(14,`b`),zC(15,`5`),Vu(),zC(16,` projects, $20 a month`),Vu(),is$1(17,`div`,5),zC(18,`Choose`),Vu()(),is$1(19,`div`,3)(20,`div`,4),zC(21,`Premium Plan`),Vu(),is$1(22,`p`)(23,`b`),zC(24,`8`),Vu(),zC(25,` projects, $25 a month`),Vu(),is$1(26,`div`,5),zC(27,`Choose`),Vu()()())}var Fs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-standard-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-button`,``,`suiIcon`,``,`sui-popup`,``,`suiPopupContent`,`Add users to your feed`],[`sui-icon`,``,`suiIconType`,`add`]],template:function(a,s){a&1&&(is$1(0,`button`,0),zh$1(1,`i`,1),Vu())},dependencies:[Ii,we,Le],encapsulation:2,changeDetection:1})}}return n})();var As=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-titled-example`]],standalone:!1,decls:3,vars:0,consts:[[`sui-image`,``,`suiAvatar`,``,`sui-popup`,``,`suiPopupTitle`,`Elliot Fu`,`suiPopupContent`,`Elliot has been a member since July 2012`,`src`,`/assets/images/elliot.jpg`],[`sui-image`,``,`suiAvatar`,``,`sui-popup`,``,`suiPopupTitle`,`Stevie Feliciano`,`suiPopupContent`,`Stevie has been a member since August 2013`,`src`,`/assets/images/stevie.jpg`],[`sui-image`,``,`suiAvatar`,``,`sui-popup`,``,`suiPopupTitle`,`Matt`,`suiPopupContent`,`Matt has been a member since July 2014`,`src`,`/assets/images/matt.jpg`]],template:function(a,s){a&1&&zh$1(0,`img`,0)(1,`img`,1)(2,`img`,2)},dependencies:[z,Le],encapsulation:2,changeDetection:1})}}return n})();var Vs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-html-example`]],standalone:!1,decls:17,vars:1,consts:[[`popupContent`,``],[`sui-card`,``,`sui-popup`,``,`suiPopupTitle`,`User Rating`,3,`suiPopupContent`],[`suiCardImage`,``],[`src`,`https://semantic-ui.com/images/movies/watchmen-horizontal.jpg`],[`suiCardContent`,``],[`suiCardHeader`,``],[`suiCardDescription`,``],[`sui-buttons`,``,`suiAttached`,``,`suiWidth`,`two`,`suiAttachedPosition`,`bottom`],[`sui-button`,``],[`sui-icon`,``,`suiIconType`,`add`],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-icon`,``,`suiIconType`,`play`],[`suiValue`,`3`,`suiMaxValue`,`5`]],template:function(a,s){if(a&1&&(is$1(0,`div`,1)(1,`div`,2),zh$1(2,`img`,3),Vu(),is$1(3,`div`,4)(4,`div`,5),zC(5,`Watchmen`),Vu(),is$1(6,`div`,6),zC(7,` In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. `),Vu()(),is$1(8,`div`,7)(9,`div`,8),zh$1(10,`i`,9),zC(11,` Queue `),Vu(),is$1(12,`div`,10),zh$1(13,`i`,11),zC(14,` Watch `),Vu()()(),jh$1(15,Uc,1,0,`ng-template`,null,0,sw)),a&2){let p=EC(16);Gh$1(`suiPopupContent`,p)}},dependencies:[P$1,b,A,F,L,wt,Ii,Di,we,Le],encapsulation:2,changeDetection:1})}}return n})();var Bs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-basic-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-button`,``,`suiIcon`,``,`sui-popup`,``,`suiPopupBasic`,``,`suiPopupContent`,`The default theme's basic popup removes the pointing arrow.`],[`sui-icon`,``,`suiIconType`,`add`]],template:function(a,s){a&1&&(is$1(0,`button`,0),zh$1(1,`i`,1),Vu())},dependencies:[Ii,we,Le],encapsulation:2,changeDetection:1})}}return n})();var Os=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-width-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupWidth`,`wide`,`suiPopupContent`,`Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide.`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupWidth`,`very wide`,`suiPopupContent`,`Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide.`]],template:function(a,s){a&1&&zh$1(0,`i`,0)(1,`i`,1)},dependencies:[we,Le],encapsulation:2,changeDetection:1})}}return n})();var Ls=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-fluid-example`]],standalone:!1,decls:4,vars:1,consts:[[`fluidPopup`,``],[`sui-button`,``,`sui-popup`,``,3,`suiPopupContent`],[`sui-grid`,``,`suiDivided`,`divided`,`suiAlignment`,`center aligned`,`suiWidth`,`four`],[`suiGridColumn`,``]],template:function(a,s){if(a&1&&(is$1(0,`div`,1),zC(1,` Show fluid popup
`),Vu(),jh$1(2,$c,9,0,`ng-template`,null,0,sw)),a&2){let p=EC(3);Gh$1(`suiPopupContent`,p)}},dependencies:[Ii,mi,vi$1,Le],encapsulation:2,changeDetection:1})}}return n})();var Hs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-size-example`]],standalone:!1,decls:5,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`mini`,`suiPopupContent`,`Hello. This is a mini popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`tiny`,`suiPopupContent`,`Hello. This is a tiny popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`small`,`suiPopupContent`,`Hello. This is a small popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`large`,`suiPopupContent`,`Hello. This is a large popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`huge`,`suiPopupContent`,`Hello. This is a huge popup`]],template:function(a,s){a&1&&zh$1(0,`i`,0)(1,`i`,1)(2,`i`,2)(3,`i`,3)(4,`i`,4)},dependencies:[we,Le],encapsulation:2,changeDetection:1})}}return n})();var Ws=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-flowing-example`]],standalone:!1,decls:4,vars:1,consts:[[`flowingTemplate`,``],[`sui-button`,``,`sui-popup`,``,`suiPopupFlowing`,``,3,`suiPopupContent`],[`sui-grid`,``,`suiDivided`,`divided`,`suiAlignment`,`center aligned`,`suiWidth`,`three`],[`suiGridColumn`,``],[`sui-header`,``],[`sui-button`,``]],template:function(a,s){if(a&1&&(is$1(0,`div`,1),zC(1,` Show flowing popup
`),Vu(),jh$1(2,Yc,28,0,`ng-template`,null,0,sw)),a&2){let p=EC(3);Gh$1(`suiPopupContent`,p)}},dependencies:[Ws$1,Ii,mi,vi$1,Le],encapsulation:2,changeDetection:1})}}return n})();var Rs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-inverted-example`]],standalone:!1,decls:3,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupInverted`,``,`suiPopupContent`,`Hello. This is an inverted popup`],[`sui-button`,``,`suiIcon`,``,`sui-popup`,``,`suiPopupInverted`,``,`suiPopupContent`,`Hello. This is an inverted popup`],[`sui-icon`,``,`suiIconType`,`add`]],template:function(a,s){a&1&&(zh$1(0,`i`,0),is$1(1,`button`,1),zh$1(2,`i`,2),Vu())},dependencies:[Ii,we,Le],encapsulation:2,changeDetection:1})}}return n})();var zs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup-position-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiColour`,`red`,`suiSize`,`big`,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupPlacement`,`bottom left`,`suiPopupContent`,`This is a bottom left popup`],[`sui-icon`,``,`suiCircular`,``,`suiColour`,`teal`,`suiSize`,`big`,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupPlacement`,`top right`,`suiPopupContent`,`This is a top right popup`]],template:function(a,s){a&1&&zh$1(0,`i`,0)(1,`i`,1)},dependencies:[we,Le],encapsulation:2,changeDetection:1})}}return n})();function Xc(n,u){n&1&&zh$1(0,`doc-popup-standard-example`)}function Jc(n,u){n&1&&zh$1(0,`doc-popup-titled-example`)}function qc(n,u){n&1&&zh$1(0,`doc-popup-html-example`)}function Zc(n,u){n&1&&zh$1(0,`doc-popup-basic-example`)}function Kc(n,u){n&1&&zh$1(0,`doc-popup-width-example`)}function Qc(n,u){n&1&&zh$1(0,`doc-popup-fluid-example`)}function e0(n,u){n&1&&zh$1(0,`doc-popup-size-example`)}function t0(n,u){n&1&&zh$1(0,`doc-popup-flowing-example`)}function i0(n,u){n&1&&zh$1(0,`doc-popup-inverted-example`)}function n0(n,u){n&1&&zh$1(0,`doc-popup-position-example`)}function o0(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Popup`),Vu(),is$1(6,`p`),zC(7,`An element can specify popup content to appear`),Vu(),is$1(8,`div`,5),zC(9,` Popup relies on `),is$1(10,`a`,6),zC(11,`Angular CDK`),Vu(),zC(12,`. Ensure that you have the latest version compatible with your Angular version `),Vu(),jh$1(13,Xc,1,0,`ng-template`,7),Vu(),is$1(14,`doc-code-sample`,3)(15,`h3`,4),zC(16,`Titled`),Vu(),is$1(17,`p`),zC(18,`An element can specify popup content with a title`),Vu(),jh$1(19,Jc,1,0,`ng-template`,7),Vu(),is$1(20,`doc-code-sample`,3)(21,`h3`,4),zC(22,`HTML`),Vu(),is$1(23,`p`),zC(24,`An element can specify template HTML for a popup`),Vu(),jh$1(25,qc,1,0,`ng-template`,7),Vu(),is$1(26,`h2`,2),zC(27,`Variations`),Vu(),is$1(28,`doc-code-sample`,3)(29,`h3`,4),zC(30,`Basic`),Vu(),is$1(31,`p`),zC(32,`A popup can provide more basic formatting`),Vu(),jh$1(33,Zc,1,0,`ng-template`,7),Vu(),is$1(34,`doc-code-sample`,3)(35,`h3`,4),zC(36,`Width`),Vu(),is$1(37,`p`),zC(38,`A popup can be extra wide to allow for longer content`),Vu(),jh$1(39,Kc,1,0,`ng-template`,7),Vu(),is$1(40,`doc-code-sample`,3)(41,`h3`,4),zC(42,`Fluid`),Vu(),is$1(43,`p`),zC(44,`A fluid popup will take up the entire width of its offset container`),Vu(),jh$1(45,Qc,1,0,`ng-template`,7),Vu(),is$1(46,`doc-code-sample`,3)(47,`h3`,4),zC(48,`Size`),Vu(),is$1(49,`p`),zC(50,`A popup can vary in size`),Vu(),jh$1(51,e0,1,0,`ng-template`,7),Vu(),is$1(52,`doc-code-sample`,3)(53,`h3`,4),zC(54,`Flowing`),Vu(),is$1(55,`p`),zC(56,`A popup can have no maximum width and continue to flow to fit its content`),Vu(),jh$1(57,t0,1,0,`ng-template`,7),Vu(),is$1(58,`doc-code-sample`,3)(59,`h3`,4),zC(60,`Inverted`),Vu(),is$1(61,`p`),zC(62,`A popup can have its colors inverted`),Vu(),jh$1(63,i0,1,0,`ng-template`,7),Vu(),is$1(64,`doc-code-sample`,3)(65,`h3`,4),zC(66,`Position`),Vu(),is$1(67,`p`),zC(68,`A popup can be position around its trigger`),Vu(),jh$1(69,n0,1,0,`ng-template`,7),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetStandard),KD(11),Gh$1(`templateCode`,o.snippetTitled),KD(6),Gh$1(`templateCode`,o.snippetHtml),KD(8),Gh$1(`templateCode`,o.snippetBasic),KD(6),Gh$1(`templateCode`,o.snippetWidth),KD(6),Gh$1(`templateCode`,o.snippetFluid),KD(6),Gh$1(`templateCode`,o.snippetSize),KD(6),Gh$1(`templateCode`,o.snippetFlowing),KD(6),Gh$1(`templateCode`,o.snippetInverted),KD(6),Gh$1(`templateCode`,o.snippetPosition)}}function a0(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-popup`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiPopupPlacement`),Vu(),is$1(20,`td`),zC(21,`Set the popup's position. Allowed values could be `),is$1(22,`span`,9),zC(23,`'top left'`),Vu(),zC(24,` | `),is$1(25,`span`,9),zC(26,`'top center'`),Vu(),zC(27,` | `),is$1(28,`span`,9),zC(29,`'top right'`),Vu(),zC(30,` | `),is$1(31,`span`,9),zC(32,`'bottom left'`),Vu(),zC(33,` | `),is$1(34,`span`,9),zC(35,`'bottom center'`),Vu(),zC(36,` | `),is$1(37,`span`,9),zC(38,`'bottom right'`),Vu(),zC(39,` | `),is$1(40,`span`,9),zC(41,`'right center'`),Vu(),zC(42,` | `),is$1(43,`span`,9),zC(44,`'left center'`),Vu()(),is$1(45,`td`)(46,`div`,10),zC(47,` string `),Vu()(),is$1(48,`td`)(49,`div`,11),zC(50,` top left `),Vu()()(),is$1(51,`tr`)(52,`td`),zC(53,`suiPopupSize`),Vu(),is$1(54,`td`),zC(55,`Set the popup size. Allowed values could be `),is$1(56,`span`,9),zC(57,`'mini'`),Vu(),zC(58,` | `),is$1(59,`span`,9),zC(60,`'tiny'`),Vu(),zC(61,` | `),is$1(62,`span`,9),zC(63,`'small'`),Vu(),zC(64,` | `),is$1(65,`span`,9),zC(66,`'medium'`),Vu(),zC(67,` | `),is$1(68,`span`,9),zC(69,`'big'`),Vu(),zC(70,` | `),is$1(71,`span`,9),zC(72,`'huge'`),Vu(),zC(73,` | `),is$1(74,`span`,9),zC(75,`'massive'`),Vu(),zC(76,` | `),is$1(77,`span`,9),zC(78,`null`),Vu()(),is$1(79,`td`)(80,`div`,10),zC(81,` string `),Vu()(),is$1(82,`td`)(83,`div`,11),zC(84,` null `),Vu()()(),is$1(85,`tr`)(86,`td`),zC(87,`suiPopupWidth`),Vu(),is$1(88,`td`),zC(89,` Determines the popup's width. Allowed values could be `),is$1(90,`span`,9),zC(91,`'wide'`),Vu(),zC(92,` | `),is$1(93,`span`,9),zC(94,`'very wide'`),Vu(),zC(95,` | `),is$1(96,`span`,9),zC(97,`null`),Vu()(),is$1(98,`td`)(99,`div`,10),zC(100,`string`),Vu()(),is$1(101,`td`)(102,`div`,11),zC(103,`null`),Vu()()(),is$1(104,`tr`)(105,`td`),zC(106,`suiPopupTrigger`),Vu(),is$1(107,`td`),zC(108,` Determines the popup's trigger. Allowed values could be `),is$1(109,`span`,9),zC(110,`'hover'`),Vu(),zC(111,` | `),is$1(112,`span`,9),zC(113,`'click'`),Vu()(),is$1(114,`td`)(115,`div`,10),zC(116,`string`),Vu()(),is$1(117,`td`)(118,`div`,11),zC(119,`hover`),Vu()()(),is$1(120,`tr`)(121,`td`),zC(122,`suiPopupTitle`),Vu(),is$1(123,`td`),zC(124,` What should get rendered as the popup's title/header `),Vu(),is$1(125,`td`)(126,`div`,10),zC(127,`string`),Vu()(),is$1(128,`td`)(129,`div`,11),zC(130,`null`),Vu()()(),is$1(131,`tr`)(132,`td`),zC(133,`suiPopupContent`),Vu(),is$1(134,`td`),zC(135,` What should get rendered as the popup's content. Could be a string or a template reference `),Vu(),is$1(136,`td`)(137,`div`,10),zC(138,`string`),Vu(),zC(139,` | `),is$1(140,`div`,10),zC(141,`TemplateRef<any>`),Vu()(),is$1(142,`td`)(143,`div`,11),zC(144,`null`),Vu()()(),is$1(145,`tr`)(146,`td`),zC(147,`suiPopupInverted`),Vu(),is$1(148,`td`),zC(149,` Determines if the popup uses inverted colours `),Vu(),is$1(150,`td`)(151,`div`,10),zC(152,`boolean`),Vu()(),is$1(153,`td`)(154,`div`,11),zC(155,`false`),Vu()()(),is$1(156,`tr`)(157,`td`),zC(158,`suiPopupFluid`),Vu(),is$1(159,`td`),zC(160,` Determines if the popup uses fluid styling `),Vu(),is$1(161,`td`)(162,`div`,10),zC(163,`boolean`),Vu()(),is$1(164,`td`)(165,`div`,11),zC(166,`false`),Vu()()(),is$1(167,`tr`)(168,`td`),zC(169,`suiPopupFlowing`),Vu(),is$1(170,`td`),zC(171,` Determines if the popup uses flowing styling `),Vu(),is$1(172,`td`)(173,`div`,10),zC(174,`boolean`),Vu()(),is$1(175,`td`)(176,`div`,11),zC(177,`false`),Vu()()(),is$1(178,`tr`)(179,`td`),zC(180,`suiPopupBasic`),Vu(),is$1(181,`td`),zC(182,`Determines whether the popup uses basic styling and renders without the arrow`),Vu(),is$1(183,`td`)(184,`div`,10),zC(185,`boolean`),Vu()(),is$1(186,`td`)(187,`div`,11),zC(188,`false`),Vu()()()()()())}var js=(()=>{class n{constructor(o){this.snippetStandard=Es,this.snippetTitled=Cs,this.snippetHtml=Ds,this.snippetBasic=ws,this.snippetWidth=_s,this.snippetFluid=Ts,this.snippetSize=Ms,this.snippetFlowing=Is,this.snippetInverted=Ps,this.snippetPosition=ks,o.setTitle(`Popup | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-popup`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Popup`,`subHeader`,`A popup displays additional information on top of a page`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`href`,`https://www.npmjs.com/package/@angular/cdk`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,o0,70,10,`div`,1)(2,a0,189,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li,Fs,As,Vs,Bs,Os,Ls,Hs,Ws,Rs,zs],encapsulation:2,changeDetection:1})}}return n})();var Ns=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Us=`<sui-select
    suiFluid
    name="fluid"
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var $s=`<sui-select
    suiSearch
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var Ys=`<sui-select
    suiMultiple
    name="multiple"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Gs=`<sui-select
    suiSearch
    suiMultiple
    name="multiple-search"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Xs=`<sui-select
    name="flag"
    suiPlaceholder="Select Country"
    [suiOptions]="countries">
</sui-select>
`;var Js=`<sui-select
    name="images"
    suiPlaceholder="Select User"
    [suiOptions]="persons">
</sui-select>
`;var qs=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions"
    [(ngModel)]="selectedGender"
    (suiSelectionChanged)="onSelectionChanged($event)">
</sui-select>

<p>
  Selected value: <strong>{{ selectedGender }}</strong><br>
  Last change event: <strong>{{ lastChange }}</strong>
</p>
`;var Zs=`<sui-select
    suiFluid
    suiMultiple
    suiLoading
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Ks=`<sui-select
    suiError
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Qs=`<sui-select
    disabled
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var er=`<sui-select
    suiScrolling
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var tr=`<sui-select
    suiCompact
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var ir=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var nr=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var or=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var ar=`countries: ISelectOption[] = [
  { text: 'Albania', value: 'al', flag: 'al' },
  { text: 'Angola', value: 'ao', flag: 'ao' },
  { text: 'Azerbaijan', value: 'az', flag: 'az' },
  { text: 'Botswana', value: 'bw', flag: 'bw' },
  { text: 'Nigeria', value: 'ng', flag: 'ng' },
];
`;var sr=`persons: ISelectOption[] = [
  { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
  { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
  { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
  { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
  { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
  { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
  { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
  { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
];
`;var rr=`selectedGender: number | null = 1;
lastChange: number | null = null;

genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];

onSelectionChanged(value: number): void {
  this.lastChange = value;
}
`;var lr=`options: ISelectOption[] = [
  { text: 'Option 1', value: 'one' },
  { text: 'Option 2', value: 'two' },
  { text: 'Option 3', value: 'three' },
];
`;var dr=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var mr=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var Pe=class{constructor(){this.selectedGender=1,this.lastChange=null,this.genderOptions=[{text:`Male`,value:0},{text:`Female`,value:1}],this.countries=[{text:`Albania`,value:`al`,flag:`al`},{text:`Angola`,value:`ao`,flag:`ao`},{text:`Azerbaijan`,value:`az`,flag:`az`},{text:`Botswana`,value:`bw`,flag:`bw`},{text:`Nigeria`,value:`ng`,flag:`ng`}],this.states=[{text:`Alabama`,value:`AL`},{text:`Arizona`,value:`AZ`},{text:`California`,value:`CA`},{text:`District Of Columbia`,value:`DC`},{text:`Idaho`,value:`ID`},{text:`Indiana`,value:`IN`},{text:`Kansas`,value:`KS`},{text:`Louisiana`,value:`LA`},{text:`Maryland`,value:`MD`},{text:`Utah`,value:`UT`}],this.persons=[{text:`Elliot`,value:null,image:{avatar:!0,src:`/assets/images/elliot.jpg`}},{text:`Helen`,value:null,image:{avatar:!0,src:`/assets/images/helen.jpg`}},{text:`Jenny`,value:null,image:{avatar:!0,src:`/assets/images/jenny.jpg`}},{text:`Joe`,value:null,image:{avatar:!0,src:`/assets/images/joe.jpg`}},{text:`Justen`,value:null,image:{avatar:!0,src:`/assets/images/justen.jpg`}},{text:`Laura`,value:null,image:{avatar:!0,src:`/assets/images/laura.jpg`}},{text:`Matt`,value:null,image:{avatar:!0,src:`/assets/images/matt.jpg`}},{text:`Stevie`,value:null,image:{avatar:!0,src:`/assets/images/stevie.jpg`}}],this.options=[{text:`Option 1`,value:`one`},{text:`Option 2`,value:`two`},{text:`Option 3`,value:`three`}]}onSelectionChanged(u){this.lastChange=u}};var pr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-standard-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.genderOptions)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var ur=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-fluid-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiFluid`,``,`name`,`fluid`,`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.genderOptions)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var cr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-multiple-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiMultiple`,``,`name`,`multiple`,`suiPlaceholder`,`State`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var hr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-multiple-search-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiSearch`,``,`suiMultiple`,``,`name`,`multiple-search`,`suiPlaceholder`,`State`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var gr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-flag-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`name`,`flag`,`suiPlaceholder`,`Select Country`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.countries)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var fr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-images-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`name`,`images`,`suiPlaceholder`,`Select User`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.persons)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var Sr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-loading-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiFluid`,``,`suiMultiple`,``,`suiLoading`,``,`suiPlaceholder`,`Dropdown`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.options)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var vr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-error-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiError`,``,`suiPlaceholder`,`Dropdown`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.options)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var xr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-disabled-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`disabled`,``,`suiPlaceholder`,`Dropdown`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.options)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var br=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-search-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiSearch`,``,`suiPlaceholder`,`Select State`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var yr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-scrolling-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiScrolling`,``,`suiPlaceholder`,`Select State`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var Er=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-compact-example`]],standalone:!1,features:[uo$1],decls:1,vars:1,consts:[[`suiCompact`,``,`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(a,s){a&1&&zh$1(0,`sui-select`,0),a&2&&Gh$1(`suiOptions`,s.genderOptions)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var Cr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select-two-way-example`]],standalone:!1,features:[uo$1],decls:9,vars:4,consts:[[`suiPlaceholder`,`Gender`,3,`ngModelChange`,`suiSelectionChanged`,`suiOptions`,`ngModel`]],template:function(a,s){a&1&&(is$1(0,`sui-select`,0),VE(),Dg(`ngModelChange`,function(m){return ZC(s.selectedGender,m)||(s.selectedGender=m),m}),Kh$1(`suiSelectionChanged`,function(m){return s.onSelectionChanged(m)}),Vu(),is$1(1,`p`),zC(2,` Selected value: `),is$1(3,`strong`),zC(4),Vu(),zh$1(5,`br`),zC(6,` Last change event: `),is$1(7,`strong`),zC(8),Vu()()),a&2&&(Gh$1(`suiOptions`,s.genderOptions),vg(`ngModel`,s.selectedGender),HE(),KD(4),gg(s.selectedGender),KD(4),gg(s.lastChange))},dependencies:[ui,Mn$1,Oe],encapsulation:2,changeDetection:1})}}return n})();function P0(n,u){n&1&&zh$1(0,`doc-select-standard-example`)}function k0(n,u){n&1&&zh$1(0,`doc-select-fluid-example`)}function F0(n,u){n&1&&zh$1(0,`doc-select-search-example`)}function A0(n,u){n&1&&zh$1(0,`doc-select-multiple-example`)}function V0(n,u){n&1&&zh$1(0,`doc-select-multiple-search-example`)}function B0(n,u){n&1&&zh$1(0,`doc-select-flag-example`)}function O0(n,u){n&1&&zh$1(0,`doc-select-images-example`)}function L0(n,u){n&1&&zh$1(0,`doc-select-two-way-example`)}function H0(n,u){n&1&&zh$1(0,`doc-select-loading-example`)}function W0(n,u){n&1&&zh$1(0,`doc-select-error-example`)}function R0(n,u){n&1&&zh$1(0,`doc-select-disabled-example`)}function z0(n,u){n&1&&zh$1(0,`doc-select-scrolling-example`)}function j0(n,u){n&1&&zh$1(0,`doc-select-compact-example`)}function N0(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Selection`),Vu(),is$1(6,`p`),zC(7,`A standard select can be used to pick between choices in a form.`),Vu(),jh$1(8,P0,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3),jh$1(10,k0,1,0,`ng-template`,5),Vu(),is$1(11,`doc-code-sample`,3)(12,`h3`,4),zC(13,`Search Selection`),Vu(),is$1(14,`p`),zC(15,`A selection dropdown can allow a user to search through a large list of choices.`),Vu(),jh$1(16,F0,1,0,`ng-template`,5),Vu(),is$1(17,`doc-code-sample`,3)(18,`h3`,4),zC(19,`Multiple Selection`),Vu(),is$1(20,`p`),zC(21,`A selection dropdown can allow multiple selections.`),Vu(),is$1(22,`div`,6),zh$1(23,`i`,7),is$1(24,`div`,8)(25,`p`),zC(26,`Selected values are emitted as an array.`),Vu()()(),jh$1(27,A0,1,0,`ng-template`,5),Vu(),is$1(28,`doc-code-sample`,3)(29,`h3`,4),zC(30,`Multiple Search Selection`),Vu(),is$1(31,`p`),zC(32,`A selection dropdown can allow multiple search selections.`),Vu(),jh$1(33,V0,1,0,`ng-template`,5),Vu(),is$1(34,`doc-code-sample`,3)(35,`h3`,4),zC(36,`Flag Selection`),Vu(),is$1(37,`p`),zC(38,`A selection can include flag icons.`),Vu(),is$1(39,`div`,6),zh$1(40,`i`,7),is$1(41,`div`,8)(42,`p`),zC(43,`Set `),is$1(44,`span`,9),zC(45,`flag`),Vu(),zC(46,` on an option to the two-letter country code of the flag to show.`),Vu()()(),jh$1(47,B0,1,0,`ng-template`,5),Vu(),is$1(48,`doc-code-sample`,3)(49,`h3`,4),zC(50,`Image Selection`),Vu(),is$1(51,`p`),zC(52,`A selection can include images.`),Vu(),jh$1(53,O0,1,0,`ng-template`,5),Vu(),is$1(54,`h2`,2),zC(55,`Forms`),Vu(),is$1(56,`doc-code-sample`,3)(57,`h3`,4),zC(58,`Form Binding`),Vu(),is$1(59,`p`),zC(60,`A select is a form control. Use it with `),is$1(61,`span`,9),zC(62,`ngModel`),Vu(),zC(63,`, or with `),is$1(64,`span`,9),zC(65,`formControl`),Vu(),zC(66,` / `),is$1(67,`span`,9),zC(68,`formControlName`),Vu(),zC(69,` in reactive forms. The `),is$1(70,`span`,9),zC(71,`suiSelectionChanged`),Vu(),zC(72,` event also fires whenever the selection changes.`),Vu(),is$1(73,`div`,6),zh$1(74,`i`,7),is$1(75,`div`,8)(76,`p`),zC(77,`Form binding with `),is$1(78,`span`,9),zC(79,`ngModel`),Vu(),zC(80,` and reactive forms requires `),is$1(81,`span`,9),zC(82,`FormsModule`),Vu(),zC(83,` or `),is$1(84,`span`,9),zC(85,`ReactiveFormsModule`),Vu(),zC(86,`. Programmatic value writes are supported for single selection.`),Vu()()(),jh$1(87,L0,1,0,`ng-template`,5),Vu(),is$1(88,`h2`,2),zC(89,`States`),Vu(),is$1(90,`doc-code-sample`,3)(91,`h3`,4),zC(92,`Loading`),Vu(),is$1(93,`p`),zC(94,`A dropdown can show that it is currently loading data.`),Vu(),jh$1(95,H0,1,0,`ng-template`,5),Vu(),is$1(96,`doc-code-sample`,3)(97,`h3`,4),zC(98,`Error`),Vu(),is$1(99,`p`),zC(100,`An errored dropdown can alert a user to a problem.`),Vu(),jh$1(101,W0,1,0,`ng-template`,5),Vu(),is$1(102,`doc-code-sample`,3)(103,`h3`,4),zC(104,`Disabled`),Vu(),is$1(105,`p`),zC(106,`A disabled dropdown menu or item does not allow user interaction.`),Vu(),jh$1(107,R0,1,0,`ng-template`,5),Vu(),is$1(108,`h2`,2),zC(109,`Variations`),Vu(),is$1(110,`doc-code-sample`,3)(111,`h3`,4),zC(112,`Scrolling`),Vu(),is$1(113,`p`),zC(114,`A selection dropdown can have its menu scroll.`),Vu(),jh$1(115,z0,1,0,`ng-template`,5),Vu(),is$1(116,`doc-code-sample`,3)(117,`h3`,4),zC(118,`Compact`),Vu(),is$1(119,`p`),zC(120,`A compact selection dropdown has no minimum width.`),Vu(),jh$1(121,j0,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetStandard)(`componentCode`,o.snippetStandardTs),KD(6),Gh$1(`templateCode`,o.snippetFluid)(`componentCode`,o.snippetStandardTs),KD(2),Gh$1(`templateCode`,o.snippetSearch)(`componentCode`,o.snippetSearchTs),KD(6),Gh$1(`templateCode`,o.snippetMultiple)(`componentCode`,o.snippetMultipleTs),KD(11),Gh$1(`templateCode`,o.snippetMultipleSearch)(`componentCode`,o.snippetMultipleTs),KD(6),Gh$1(`templateCode`,o.snippetFlag)(`componentCode`,o.snippetFlagsTs),KD(14),Gh$1(`templateCode`,o.snippetImages)(`componentCode`,o.snippetImagesTs),KD(8),Gh$1(`templateCode`,o.snippetTwoWay)(`componentCode`,o.snippetTwoWayTs),KD(34),Gh$1(`templateCode`,o.snippetLoading)(`componentCode`,o.snippetStatesTs),KD(6),Gh$1(`templateCode`,o.snippetError)(`componentCode`,o.snippetStatesTs),KD(6),Gh$1(`templateCode`,o.snippetDisabled)(`componentCode`,o.snippetStatesTs),KD(8),Gh$1(`templateCode`,o.snippetScrolling)(`componentCode`,o.snippetScrollingTs),KD(6),Gh$1(`templateCode`,o.snippetCompact)(`componentCode`,o.snippetCompactTs)}}function U0(n,u){n&1&&(is$1(0,`div`)(1,`div`,6),zh$1(2,`i`,7),is$1(3,`div`,8)(4,`p`),zC(5,` Import `),is$1(6,`span`,9),zC(7,`SuiSelectModule`),Vu(),zC(8,` from `),is$1(9,`span`,9),zC(10,`ngx-semantic/modules/select`),Vu(),zC(11,`. The select builds its own menu from `),is$1(12,`span`,9),zC(13,`suiOptions`),Vu(),zC(14,`, so you do not need to write menu markup. Looking for a menu of actions? See `),is$1(15,`a`,10),zC(16,`Dropdown`),Vu(),zC(17,`. `),Vu()()(),is$1(18,`h2`,2),zC(19,`sui-select`),Vu(),is$1(20,`p`),zC(21,`Selector: `),is$1(22,`span`,9),zC(23,`sui-select`),Vu(),zC(24,`. Implements `),is$1(25,`span`,9),zC(26,`ControlValueAccessor`),Vu(),zC(27,` so it can be used with template-driven and reactive forms.`),Vu(),is$1(28,`h4`,4),zC(29,`Properties`),Vu(),is$1(30,`table`,11)(31,`thead`)(32,`tr`)(33,`th`),zC(34,`Property`),Vu(),is$1(35,`th`),zC(36,`Description`),Vu(),is$1(37,`th`),zC(38,`Type`),Vu(),is$1(39,`th`),zC(40,`Default`),Vu()()(),is$1(41,`tbody`)(42,`tr`)(43,`td`),zC(44,`suiOptions`),Vu(),is$1(45,`td`),zC(46,`The options to choose from. See `),is$1(47,`span`,9),zC(48,`ISelectOption`),Vu(),zC(49,` below.`),Vu(),is$1(50,`td`)(51,`div`,12),zC(52,` ISelectOption[] `),Vu()(),is$1(53,`td`)(54,`div`,13),zC(55,` [] `),Vu()()(),is$1(56,`tr`)(57,`td`),zC(58,`suiPlaceholder`),Vu(),is$1(59,`td`),zC(60,`The select’s placeholder text.`),Vu(),is$1(61,`td`)(62,`div`,12),zC(63,` string `),Vu()(),is$1(64,`td`)(65,`div`,13),zC(66,` null `),Vu()()(),is$1(67,`tr`)(68,`td`),zC(69,`suiSearch`),Vu(),is$1(70,`td`),zC(71,`Determines if the select supports searching through its options.`),Vu(),is$1(72,`td`)(73,`div`,12),zC(74,` boolean `),Vu()(),is$1(75,`td`)(76,`div`,13),zC(77,` false `),Vu()()(),is$1(78,`tr`)(79,`td`),zC(80,`suiMultiple`),Vu(),is$1(81,`td`),zC(82,`Determines if the select allows for multiple selection. The selection is then an array of option values.`),Vu(),is$1(83,`td`)(84,`div`,12),zC(85,` boolean `),Vu()(),is$1(86,`td`)(87,`div`,13),zC(88,` false `),Vu()()(),is$1(89,`tr`)(90,`td`),zC(91,`suiFluid`),Vu(),is$1(92,`td`),zC(93,`Determines if the select is rendered as fluid, taking the full width of its parent.`),Vu(),is$1(94,`td`)(95,`div`,12),zC(96,` boolean `),Vu()(),is$1(97,`td`)(98,`div`,13),zC(99,` false `),Vu()()(),is$1(100,`tr`)(101,`td`),zC(102,`suiInline`),Vu(),is$1(103,`td`),zC(104,`Determines if the select is rendered inline.`),Vu(),is$1(105,`td`)(106,`div`,12),zC(107,` boolean `),Vu()(),is$1(108,`td`)(109,`div`,13),zC(110,` false `),Vu()()(),is$1(111,`tr`)(112,`td`),zC(113,`suiLoading`),Vu(),is$1(114,`td`),zC(115,`Determines if the select is rendered as loading.`),Vu(),is$1(116,`td`)(117,`div`,12),zC(118,` boolean `),Vu()(),is$1(119,`td`)(120,`div`,13),zC(121,` false `),Vu()()(),is$1(122,`tr`)(123,`td`),zC(124,`suiError`),Vu(),is$1(125,`td`),zC(126,`Determines if the select is rendered to depict an error.`),Vu(),is$1(127,`td`)(128,`div`,12),zC(129,` boolean `),Vu()(),is$1(130,`td`)(131,`div`,13),zC(132,` false `),Vu()()(),is$1(133,`tr`)(134,`td`),zC(135,`disabled`),Vu(),is$1(136,`td`),zC(137,`Determines if the select is disabled.`),Vu(),is$1(138,`td`)(139,`div`,12),zC(140,` boolean `),Vu()(),is$1(141,`td`)(142,`div`,13),zC(143,` false `),Vu()()(),is$1(144,`tr`)(145,`td`),zC(146,`suiScrolling`),Vu(),is$1(147,`td`),zC(148,`Determines if the select’s menu is rendered as scrollable.`),Vu(),is$1(149,`td`)(150,`div`,12),zC(151,` boolean `),Vu()(),is$1(152,`td`)(153,`div`,13),zC(154,` false `),Vu()()(),is$1(155,`tr`)(156,`td`),zC(157,`suiCompact`),Vu(),is$1(158,`td`),zC(159,`Determines if the select is rendered as compact, with no minimum width.`),Vu(),is$1(160,`td`)(161,`div`,12),zC(162,` boolean `),Vu()(),is$1(163,`td`)(164,`div`,13),zC(165,` false `),Vu()()(),is$1(166,`tr`)(167,`td`),zC(168,`name`),Vu(),is$1(169,`td`),zC(170,`The component’s name.`),Vu(),is$1(171,`td`)(172,`div`,12),zC(173,` string `),Vu()(),is$1(174,`td`)(175,`div`,13),zC(176,` null `),Vu()()()()(),is$1(177,`h4`,4),zC(178,`Events`),Vu(),is$1(179,`table`,11)(180,`thead`)(181,`tr`)(182,`th`),zC(183,`Event`),Vu(),is$1(184,`th`),zC(185,`Description`),Vu(),is$1(186,`th`),zC(187,`Type`),Vu()()(),is$1(188,`tbody`)(189,`tr`)(190,`td`),zC(191,`suiSelectionChanged`),Vu(),is$1(192,`td`),zC(193,`Fired when the selection changes. Emits the selected option value, or an array of values when `),is$1(194,`span`,9),zC(195,`suiMultiple`),Vu(),zC(196,` is set.`),Vu(),is$1(197,`td`)(198,`div`,12),zC(199,` any | any[] `),Vu()()()()(),is$1(200,`h2`,2),zC(201,`ISelectOption`),Vu(),is$1(202,`p`),zC(203,`The shape of each entry in `),is$1(204,`span`,9),zC(205,`suiOptions`),Vu(),zC(206,`. Import it from `),is$1(207,`span`,9),zC(208,`ngx-semantic/modules/select`),Vu(),zC(209,`.`),Vu(),is$1(210,`h4`,4),zC(211,`Properties`),Vu(),is$1(212,`table`,11)(213,`thead`)(214,`tr`)(215,`th`),zC(216,`Property`),Vu(),is$1(217,`th`),zC(218,`Description`),Vu(),is$1(219,`th`),zC(220,`Type`),Vu(),is$1(221,`th`),zC(222,`Default`),Vu()()(),is$1(223,`tbody`)(224,`tr`)(225,`td`),zC(226,`text`),Vu(),is$1(227,`td`),zC(228,`The text displayed for the option. This is also what the search filters on.`),Vu(),is$1(229,`td`)(230,`div`,12),zC(231,` string `),Vu()(),is$1(232,`td`)(233,`div`,13),zC(234,` - `),Vu()()(),is$1(235,`tr`)(236,`td`),zC(237,`value`),Vu(),is$1(238,`td`),zC(239,`The value emitted when the option is selected.`),Vu(),is$1(240,`td`)(241,`div`,12),zC(242,` any `),Vu()(),is$1(243,`td`)(244,`div`,13),zC(245,` - `),Vu()()(),is$1(246,`tr`)(247,`td`),zC(248,`image`),Vu(),is$1(249,`td`),zC(250,`Shows an image next to the option text. See `),is$1(251,`span`,9),zC(252,`ISelectOptionImage`),Vu(),zC(253,`.`),Vu(),is$1(254,`td`)(255,`div`,12),zC(256,` ISelectOptionImage `),Vu()(),is$1(257,`td`)(258,`div`,13),zC(259,` undefined `),Vu()()(),is$1(260,`tr`)(261,`td`),zC(262,`flag`),Vu(),is$1(263,`td`),zC(264,`The country code of a flag to show next to the option text, for example `),is$1(265,`span`,9),zC(266,`ng`),Vu(),zC(267,`.`),Vu(),is$1(268,`td`)(269,`div`,12),zC(270,` string `),Vu()(),is$1(271,`td`)(272,`div`,13),zC(273,` undefined `),Vu()()()()(),is$1(274,`h2`,2),zC(275,`ISelectOptionImage`),Vu(),is$1(276,`p`),zC(277,`The shape of `),is$1(278,`span`,9),zC(279,`ISelectOption.image`),Vu(),zC(280,`.`),Vu(),is$1(281,`h4`,4),zC(282,`Properties`),Vu(),is$1(283,`table`,11)(284,`thead`)(285,`tr`)(286,`th`),zC(287,`Property`),Vu(),is$1(288,`th`),zC(289,`Description`),Vu(),is$1(290,`th`),zC(291,`Type`),Vu(),is$1(292,`th`),zC(293,`Default`),Vu()()(),is$1(294,`tbody`)(295,`tr`)(296,`td`),zC(297,`src`),Vu(),is$1(298,`td`),zC(299,`The image source.`),Vu(),is$1(300,`td`)(301,`div`,12),zC(302,` string `),Vu()(),is$1(303,`td`)(304,`div`,13),zC(305,` - `),Vu()()(),is$1(306,`tr`)(307,`td`),zC(308,`avatar`),Vu(),is$1(309,`td`),zC(310,`When true, renders the image as a small avatar.`),Vu(),is$1(311,`td`)(312,`div`,12),zC(313,` boolean `),Vu()(),is$1(314,`td`)(315,`div`,13),zC(316,` - `),Vu()()()()(),is$1(317,`h2`,2),zC(318,`suiSelectMenu`),Vu(),is$1(319,`p`),zC(320,`Selector: `),is$1(321,`span`,9),zC(322,`[suiSelectMenu]`),Vu(),zC(323,`. The options menu rendered inside `),is$1(324,`span`,9),zC(325,`sui-select`),Vu(),zC(326,`. You do not normally use this directly.`),Vu(),is$1(327,`h4`,4),zC(328,`Properties`),Vu(),is$1(329,`table`,11)(330,`thead`)(331,`tr`)(332,`th`),zC(333,`Property`),Vu(),is$1(334,`th`),zC(335,`Description`),Vu(),is$1(336,`th`),zC(337,`Type`),Vu(),is$1(338,`th`),zC(339,`Default`),Vu()()(),is$1(340,`tbody`)(341,`tr`)(342,`td`),zC(343,`suiDirection`),Vu(),is$1(344,`td`),zC(345,`Sets the direction the menu opens. Allowed values are `),is$1(346,`span`,9),zC(347,`left`),Vu(),zC(348,` | `),is$1(349,`span`,9),zC(350,`right`),Vu(),zC(351,` | `),is$1(352,`span`,9),zC(353,`null`),Vu()(),is$1(354,`td`)(355,`div`,12),zC(356,` string `),Vu()(),is$1(357,`td`)(358,`div`,13),zC(359,` null `),Vu()()(),is$1(360,`tr`)(361,`td`),zC(362,`suiScrolling`),Vu(),is$1(363,`td`),zC(364,`Determines if the menu is scrollable or not.`),Vu(),is$1(365,`td`)(366,`div`,12),zC(367,` boolean `),Vu()(),is$1(368,`td`)(369,`div`,13),zC(370,` false `),Vu()()(),is$1(371,`tr`)(372,`td`),zC(373,`suiIsOpen`),Vu(),is$1(374,`td`),zC(375,`Sets whether the menu is open. This is managed by the select.`),Vu(),is$1(376,`td`)(377,`div`,12),zC(378,` boolean `),Vu()(),is$1(379,`td`)(380,`div`,13),zC(381,` false `),Vu()()()()(),is$1(382,`h2`,2),zC(383,`suiSelectMenuItem`),Vu(),is$1(384,`p`),zC(385,`Selector: `),is$1(386,`span`,9),zC(387,`[suiSelectMenuItem]`),Vu(),zC(388,`. An option inside the menu rendered by `),is$1(389,`span`,9),zC(390,`sui-select`),Vu(),zC(391,`. You do not normally use this directly.`),Vu(),is$1(392,`h4`,4),zC(393,`Properties`),Vu(),is$1(394,`table`,11)(395,`thead`)(396,`tr`)(397,`th`),zC(398,`Property`),Vu(),is$1(399,`th`),zC(400,`Description`),Vu(),is$1(401,`th`),zC(402,`Type`),Vu(),is$1(403,`th`),zC(404,`Default`),Vu()()(),is$1(405,`tbody`)(406,`tr`)(407,`td`),zC(408,`suiValue`),Vu(),is$1(409,`td`),zC(410,`The value to be emitted if this menu item is selected.`),Vu(),is$1(411,`td`)(412,`div`,12),zC(413,` any `),Vu()(),is$1(414,`td`)(415,`div`,13),zC(416,` null `),Vu()()(),is$1(417,`tr`)(418,`td`),zC(419,`suiSelected`),Vu(),is$1(420,`td`),zC(421,`Determines if the menu item is shown as selected.`),Vu(),is$1(422,`td`)(423,`div`,12),zC(424,` boolean `),Vu()(),is$1(425,`td`)(426,`div`,13),zC(427,` false `),Vu()()(),is$1(428,`tr`)(429,`td`),zC(430,`suiMultiple`),Vu(),is$1(431,`td`),zC(432,`Determines if this menu allows for selecting multiple items.`),Vu(),is$1(433,`td`)(434,`div`,12),zC(435,` boolean `),Vu()(),is$1(436,`td`)(437,`div`,13),zC(438,` false `),Vu()()()()()())}var Dr=(()=>{class n{constructor(o){this.snippetStandard=Ns,this.snippetFluid=Us,this.snippetSearch=$s,this.snippetMultiple=Ys,this.snippetMultipleSearch=Gs,this.snippetFlag=Xs,this.snippetImages=Js,this.snippetTwoWay=qs,this.snippetLoading=Zs,this.snippetError=Ks,this.snippetDisabled=Qs,this.snippetScrolling=er,this.snippetCompact=tr,this.snippetStandardTs=ir,this.snippetSearchTs=nr,this.snippetMultipleTs=or,this.snippetFlagsTs=ar,this.snippetImagesTs=sr,this.snippetTwoWayTs=rr,this.snippetStatesTs=lr,this.snippetScrollingTs=dr,this.snippetCompactTs=mr,o.setTitle(`Select | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-select`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Select`,`subHeader`,`A select is a dropdown used to pick one or more values from a list of options`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`docDemo`,``],[`sui-message`,``,`suiIcon`,``],[`sui-icon`,``,`suiIconType`,`info circle`],[`suiMessageContent`,``],[`sui-label`,``],[`routerLink`,`/modules/dropdown`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,N0,122,26,`div`,1)(2,U0,439,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[Qt,wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,we,li,ai,pr,ur,cr,hr,gr,fr,Sr,vr,xr,br,yr,Er,Cr],encapsulation:2,changeDetection:1})}}return n})();var wr=`<sui-modal
    suiHeaderText="Select a Photo"
    [(visible)]="isStandardModalVisible">
    <div sui-image suiModalContent>
      <div sui-image suiSize="medium">
        <img src="https://semantic-ui.com/images/avatar2/large/rachel.png">
      </div>
      <div suiCardDescription>
        <div sui-header>We've auto-chosen a profile image for you.</div>
        <p>We've grabbed the following image from the <a href="https://www.gravatar.com"
        target="_blank">gravatar</a> image
      associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div suiModalActions>
    <div sui-button suiEmphasis="secondary" suiColour="black">
      Nope
    </div>
    <div sui-button suiEmphasis="positive" suiIcon suiLabeled="right labeled">
      Yep, that's me
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var _r=`isStandardModalVisible = true;
`;var Tr=`<sui-modal
  suiBasic
  suiHeaderIcon="archive"
  suiHeaderText="Archive Old Messages"
  [(visible)]="isBasicModalVisible">
  <div sui-image suiModalContent>
    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
  </div>
  <div suiModalActions>
    <div sui-button suiBasic suiInverted suiColour="red">
      <i sui-icon suiIconType="remove"></i>
      No
    </div>
    <div sui-button suiInverted suiColour="green" (click)="isStandardModalVisible = false">
      <i sui-icon suiIconType="checkmark"></i>
      Yes
    </div>
  </div>
</sui-modal>
`;var Mr=`isBasicModalVisible = true;
`;var Ir=`<sui-modal
  suiFullScreen
  suiHeaderText="Update Your Settings"
  [(visible)]="isFullScreenModalVisible">
  <div suiModalContent>
    <div sui-form>
      <h4 sui-header suiDividing>Give us your feedback</h4>
      <div suiFormField>
        <label>Feedback</label>
        <textarea></textarea>
      </div>
      <div suiFormField>
        <sui-checkbox [checked]="true">It's okay to contact me.</sui-checkbox>
      </div>
    </div>
  </div>
  <div suiModalActions>
    <div sui-button>
      Cancel
    </div>
    <div sui-button suiEmphasis="positive">
      Send
    </div>
  </div>
</sui-modal>
`;var Pr=`isFullScreenModalVisible = true;
`;var kr=`<sui-modal
  suiSize="mini"
  suiHeaderText="Delete Your Account"
  [(visible)]="isSizeModalVisible">
  <div suiModalContent>
    <p>Are you sure you want to delete your account</p>
  </div>
  <div suiModalActions>
    <div sui-button suiColour="red">
      No
    </div>
    <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
      Yes
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var Fr=`isSizeModalVisible = true;
`;var Ar=`<sui-modal
  suiHeaderText="Profile Picture"
  [(visible)]="isScrollingModalVisible">
  <div suiModalContent suiScrollable suiImage>
    <div sui-image suiSize="medium">
      <img src="/assets/images/wireframes/image.png"/>
    </div>
    <div suiModalDescription>
      <div sui-header>Modal Header</div>
      <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

      <img sui-image src="/assets/images/wireframes/paragraph.png"/>
      @for (d of dummyList; track d) {
        <div sui-divider></div>
        <img sui-image src="/assets/images/wireframes/paragraph.png"/>
      }
    </div>
  </div>
  <div suiModalActions>
    <div class="black deny" sui-button suiEmphasis="secondary"
      (click)="isScrollingModalVisible = false">
      Close
    </div>
  </div>
</sui-modal>
`;var Vr=`isScrollingModalVisible = true;
`;var Br=`<sui-modal
  suiClosable="false"
  suiHeaderText="Delete Your Account"
  [(visible)]="isClosableModalVisible">
  <div suiModalContent>
    <p>Are you sure you want to delete your account</p>
  </div>
  <div suiModalActions>
    <div sui-button suiColour="red">
      No
    </div>
    <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
      Yes
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var Or=`isClosableModalVisible = true;
`;var Lr=`<sui-modal
  suiMaskClosable="false"
  suiHeaderText="Delete Your Account"
  [(visible)]="isMaskClosableModalVisible">
  <div suiModalContent>
    <p>Are you sure you want to delete your account</p>
  </div>
  <div suiModalActions>
    <div sui-button suiColour="red">
      No
    </div>
    <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
      Yes
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var Hr=`isMaskClosableModalVisible = true;
`;var yt=(()=>{class n{get classes(){return`actions`}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiModalActions`,``]],hostVars:2,hostBindings:function(a,s){a&2&&kC(s.classes)},exportAs:[`suiModalActions`]})}}return n})();var Et=(()=>{class n extends On$1{constructor(){super(...arguments),this.suiImage=!1,this.suiScrollable=!1}get classes(){return[J.getPropClass(this.suiScrollable,`scrolling`),J.getPropClass(this.suiImage,`image`),`content`].join(` `)}static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiModalContent`,``]],inputs:{suiImage:`suiImage`,suiScrollable:`suiScrollable`},exportAs:[`suiModalContent`],features:[uo$1]})}}return uS([ve()],n.prototype,`suiImage`,void 0),uS([ve()],n.prototype,`suiScrollable`,void 0),n})();var Wr=(()=>{class n{get classes(){return`description`}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiModalDescription`,``]],hostVars:2,hostBindings:function(a,s){a&2&&kC(s.classes)},exportAs:[`suiModalDescription`]})}}return n})();var st=(()=>{class n{get visible(){return this._visible}set visible(o){o?this.showModal():this.hideModal(),this._visible=o,this.visibleChange.emit(o)}get classes(){return[`ui`,this.suiSize,J.getPropClass(this.suiBasic,`basic`),J.getPropClass(this.suiFullScreen,`fullscreen`),this.scrollClass,`modal`,`transition`,`visible`,`active`].join(` `)}get scrollClass(){return this.suiScroll===`full`?`long`:this.suiScroll===`medium`?`longer`:``}constructor(){this.document=g(Y),this.renderer=g(yn),this.viewRef=g(ur$1),this.suiHeaderText=null,this.suiHeaderIcon=null,this.suiSize=null,this.suiScroll=`none`,this.suiBasic=!1,this.suiClosable=!0,this.suiCentered=!0,this.suiBlurring=!1,this.suiFullScreen=!1,this.suiMaskClosable=!0,this.visibleChange=new nt$1,this._visible=!1,this._modalDomRef=null,this.clickListener=null,this.uniqueId=Math.ceil(Math.random()*1e8)}ngOnDestroy(){let o=this.getModalFromDom();o&&(this.renderer.removeChild(this.document.body,o),this.suiBlurring&&this.renderer.removeClass(this.document.body,`dimmable`))}showModal(){this.isModalInDom()||this.generateDomElement(),this._modalDomRef&&(this.renderer.setProperty(this._modalDomRef,`style`,`display: flex !important;`),this.renderer.addClass(this._modalDomRef,`visible`),this.renderer.addClass(this._modalDomRef,`active`),this.suiBlurring&&(this.renderer.addClass(this.document.body,`dimmable`),this.renderer.addClass(this.document.body,`blurring`),this.renderer.addClass(this.document.body,`dimmed`)))}hideModal(){this._modalDomRef&&(this.renderer.removeAttribute(this._modalDomRef,`style`),this.renderer.removeClass(this._modalDomRef,`visible`),this.renderer.removeClass(this._modalDomRef,`active`),this.suiBlurring&&(this.renderer.removeClass(this.document.body,`blurring`),this.renderer.removeClass(this.document.body,`dimmed`)))}generateDomElement(){let o=this.renderer.createElement(`div`);this.renderer.setAttribute(o,`id`,this.uniqueId.toString());let a=`ui dimmer modals page`+(this.suiCentered?``:` top aligned`)+` transition`;this.renderer.setAttribute(o,`class`,a);let s=this.viewRef.createEmbeddedView(this.contentTemplate);s.detectChanges();for(let p of s.rootNodes)this.renderer.appendChild(o,p);this._modalDomRef=o,this.clickListener=this.renderer.listen(this._modalDomRef,`click`,p=>{p.target.id===this.uniqueId.toString()&&this.onClick()}),this.renderer.appendChild(this.document.body,this._modalDomRef)}isModalInDom(){return!!this.getModalFromDom()}getModalFromDom(){return this.document.getElementById(String(this.uniqueId))}onClick(){this.suiMaskClosable&&(this.visible=!1)}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){let o=[`contentTemplate`],a=[`*`];function s(ie,ke){if(ie&1){let ne=dC();is$1(0,`i`,4),Kh$1(`click`,function(){Pd$1(ne);let W=pC(3);return jd$1(W.visible=!1)}),Vu()}}function p(ie,ke){if(ie&1&&XI(0,s,1,0,`i`,3),ie&2){let ne=pC(2);tC(ne.suiBasic?-1:0)}}function m(ie,ke){if(ie&1&&zh$1(0,`i`,5),ie&2){let ne=pC(3);Gh$1(`suiIconType`,ne.suiHeaderIcon)}}function v(ie,ke){if(ie&1&&(is$1(0,`div`),XI(1,m,1,1,`i`,5),zC(2),Vu()),ie&2){let ne=pC(2);ho$1(`ui`,!!ne.suiHeaderIcon)(`icon`,!!ne.suiHeaderIcon)(`header`,!0),KD(),tC(ne.suiHeaderIcon?1:-1),KD(),Gu$1(` `,ne.suiHeaderText,` `)}}function O(ie,ke){if(ie&1&&(is$1(0,`div`,1),XI(1,p,1,1),XI(2,v,3,8,`div`,2),mC(3),Vu()),ie&2){let ne=pC();Gh$1(`ngClass`,ne.classes),KD(),tC(ne.suiClosable?1:-1),KD(),tC(ne.suiHeaderText||ne.suiHeaderIcon?2:-1)}}return OI({type:n,selectors:[[`sui-modal`]],viewQuery:function(ke,ne){if(ke&1&&tg(o,7),ke&2){let dt;vC(dt=DC())&&(ne.contentTemplate=dt.first)}},inputs:{suiHeaderText:`suiHeaderText`,suiHeaderIcon:`suiHeaderIcon`,suiSize:`suiSize`,suiScroll:`suiScroll`,suiBasic:`suiBasic`,suiClosable:`suiClosable`,suiCentered:`suiCentered`,suiBlurring:`suiBlurring`,suiFullScreen:`suiFullScreen`,suiMaskClosable:`suiMaskClosable`,visible:`visible`},outputs:{visibleChange:`visibleChange`},ngContentSelectors:a,decls:2,vars:0,consts:[[`contentTemplate`,``],[2,`display`,`block !important`,3,`ngClass`],[3,`ui`,`icon`,`header`],[`sui-icon`,``,`suiIconType`,`close`],[`sui-icon`,``,`suiIconType`,`close`,3,`click`],[`sui-icon`,``,3,`suiIconType`]],template:function(ke,ne){ke&1&&(gC(),jh$1(0,O,4,3,`ng-template`,null,0,sw))},dependencies:[sl$1,Gw,we],encapsulation:2})})()}}return uS([ve()],n.prototype,`suiBasic`,void 0),uS([ve()],n.prototype,`suiClosable`,void 0),uS([ve()],n.prototype,`suiCentered`,void 0),uS([ve()],n.prototype,`suiBlurring`,void 0),uS([ve()],n.prototype,`suiFullScreen`,void 0),uS([ve()],n.prototype,`suiMaskClosable`,void 0),n})();var Rr=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,st]})}}return n})();function sh(n,u){n&1&&zh$1(0,`div`,9)(1,`img`,6)}var rt=class{constructor(){this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((u,o)=>o)}};var jr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-standard-example`]],standalone:!1,features:[uo$1],decls:20,vars:1,consts:[[`suiHeaderText`,`Select a Photo`,3,`visibleChange`,`visible`],[`sui-image`,``,`suiModalContent`,``],[`sui-image`,``,`suiSize`,`medium`],[`src`,`https://semantic-ui.com/images/avatar2/large/rachel.png`],[`suiCardDescription`,``],[`sui-header`,``],[`href`,`https://www.gravatar.com`,`target`,`_blank`],[`suiModalActions`,``],[`sui-button`,``,`suiEmphasis`,`secondary`,`suiColour`,`black`],[`sui-button`,``,`suiEmphasis`,`positive`,`suiIcon`,``,`suiLabeled`,`right labeled`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isStandardModalVisible,m)||(s.isStandardModalVisible=m),m}),is$1(1,`div`,1)(2,`div`,2),zh$1(3,`img`,3),Vu(),is$1(4,`div`,4)(5,`div`,5),zC(6,`We've auto-chosen a profile image for you.`),Vu(),is$1(7,`p`),zC(8,`We've grabbed the following image from the `),is$1(9,`a`,6),zC(10,`gravatar`),Vu(),zC(11,` image associated with your registered e-mail address.`),Vu(),is$1(12,`p`),zC(13,`Is it okay to use this photo?`),Vu()()(),is$1(14,`div`,7)(15,`div`,8),zC(16,` Nope `),Vu(),is$1(17,`div`,9),zC(18,` Yep, that's me `),zh$1(19,`i`,10),Vu()()()),a&2&&vg(`visible`,s.isStandardModalVisible)},dependencies:[F,Ws$1,Ii,we,z,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Nr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-basic-example`]],standalone:!1,features:[uo$1],decls:11,vars:1,consts:[[`suiBasic`,``,`suiHeaderIcon`,`archive`,`suiHeaderText`,`Archive Old Messages`,3,`visibleChange`,`visible`],[`sui-image`,``,`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiBasic`,``,`suiInverted`,``,`suiColour`,`red`],[`sui-icon`,``,`suiIconType`,`remove`],[`sui-button`,``,`suiInverted`,``,`suiColour`,`green`,3,`click`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isBasicModalVisible,m)||(s.isBasicModalVisible=m),m}),is$1(1,`div`,1)(2,`p`),zC(3,`Your inbox is getting full, would you like us to enable automatic archiving of old messages?`),Vu()(),is$1(4,`div`,2)(5,`div`,3),zh$1(6,`i`,4),zC(7,` No `),Vu(),is$1(8,`div`,5),Kh$1(`click`,function(){return s.isStandardModalVisible=!1}),zh$1(9,`i`,6),zC(10,` Yes `),Vu()()()),a&2&&vg(`visible`,s.isBasicModalVisible)},dependencies:[Ii,we,z,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Ur=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-full-screen-example`]],standalone:!1,features:[uo$1],decls:17,vars:2,consts:[[`suiFullScreen`,``,`suiHeaderText`,`Update Your Settings`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`sui-form`,``],[`sui-header`,``,`suiDividing`,``],[`suiFormField`,``],[3,`checked`],[`suiModalActions`,``],[`sui-button`,``],[`sui-button`,``,`suiEmphasis`,`positive`]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isFullScreenModalVisible,m)||(s.isFullScreenModalVisible=m),m}),is$1(1,`div`,1)(2,`div`,2)(3,`h4`,3),zC(4,`Give us your feedback`),Vu(),is$1(5,`div`,4)(6,`label`),zC(7,`Feedback`),Vu(),zh$1(8,`textarea`),Vu(),is$1(9,`div`,4)(10,`sui-checkbox`,5),zC(11,`It's okay to contact me.`),Vu()()()(),is$1(12,`div`,6)(13,`div`,7),zC(14,` Cancel `),Vu(),is$1(15,`div`,8),zC(16,` Send `),Vu()()()),a&2&&(vg(`visible`,s.isFullScreenModalVisible),KD(10),Gh$1(`checked`,!0))},dependencies:[Ni,wi$1,Ws$1,Ii,st,yt,Et,P],encapsulation:2,changeDetection:1})}}return n})();var $r=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-size-example`]],standalone:!1,features:[uo$1],decls:10,vars:1,consts:[[`suiSize`,`mini`,`suiHeaderText`,`Delete Your Account`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiColour`,`red`],[`sui-button`,``,`suiIcon`,``,`suiLabeled`,`right labeled`,`suiEmphasis`,`positive`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isSizeModalVisible,m)||(s.isSizeModalVisible=m),m}),is$1(1,`div`,1)(2,`p`),zC(3,`Are you sure you want to delete your account`),Vu()(),is$1(4,`div`,2)(5,`div`,3),zC(6,` No `),Vu(),is$1(7,`div`,4),zC(8,` Yes `),zh$1(9,`i`,5),Vu()()()),a&2&&vg(`visible`,s.isSizeModalVisible)},dependencies:[Ii,we,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Yr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-scrolling-example`]],standalone:!1,features:[uo$1],decls:15,vars:1,consts:[[`suiHeaderText`,`Profile Picture`,3,`visibleChange`,`visible`],[`suiModalContent`,``,`suiScrollable`,``,`suiImage`,``],[`sui-image`,``,`suiSize`,`medium`],[`src`,`/assets/images/wireframes/image.png`],[`suiModalDescription`,``],[`sui-header`,``],[`sui-image`,``,`src`,`/assets/images/wireframes/paragraph.png`],[`suiModalActions`,``],[`sui-button`,``,`suiEmphasis`,`secondary`,1,`black`,`deny`,3,`click`],[`sui-divider`,``]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isScrollingModalVisible,m)||(s.isScrollingModalVisible=m),m}),is$1(1,`div`,1)(2,`div`,2),zh$1(3,`img`,3),Vu(),is$1(4,`div`,4)(5,`div`,5),zC(6,`Modal Header`),Vu(),is$1(7,`p`),zC(8,`This is an example of expanded content that will cause the modal's dimmer to scroll`),Vu(),zh$1(9,`img`,6),oC(10,sh,2,0,null,null,rC),Vu()(),is$1(12,`div`,7)(13,`div`,8),Kh$1(`click`,function(){return s.isScrollingModalVisible=!1}),zC(14,` Close `),Vu()()()),a&2&&(vg(`visible`,s.isScrollingModalVisible),KD(10),iC(s.dummyList))},dependencies:[Ws$1,Ii,_i,z,st,yt,Et,Wr],encapsulation:2,changeDetection:1})}}return n})();var Gr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-closable-example`]],standalone:!1,features:[uo$1],decls:10,vars:1,consts:[[`suiClosable`,`false`,`suiHeaderText`,`Delete Your Account`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiColour`,`red`],[`sui-button`,``,`suiIcon`,``,`suiLabeled`,`right labeled`,`suiEmphasis`,`positive`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isClosableModalVisible,m)||(s.isClosableModalVisible=m),m}),is$1(1,`div`,1)(2,`p`),zC(3,`Are you sure you want to delete your account`),Vu()(),is$1(4,`div`,2)(5,`div`,3),zC(6,` No `),Vu(),is$1(7,`div`,4),zC(8,` Yes `),zh$1(9,`i`,5),Vu()()()),a&2&&vg(`visible`,s.isClosableModalVisible)},dependencies:[Ii,we,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Xr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal-mask-closable-example`]],standalone:!1,features:[uo$1],decls:10,vars:1,consts:[[`suiMaskClosable`,`false`,`suiHeaderText`,`Delete Your Account`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiColour`,`red`],[`sui-button`,``,`suiIcon`,``,`suiLabeled`,`right labeled`,`suiEmphasis`,`positive`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(is$1(0,`sui-modal`,0),Dg(`visibleChange`,function(m){return ZC(s.isMaskClosableModalVisible,m)||(s.isMaskClosableModalVisible=m),m}),is$1(1,`div`,1)(2,`p`),zC(3,`Are you sure you want to delete your account`),Vu()(),is$1(4,`div`,2)(5,`div`,3),zC(6,` No `),Vu(),is$1(7,`div`,4),zC(8,` Yes `),zh$1(9,`i`,5),Vu()()()),a&2&&vg(`visible`,s.isMaskClosableModalVisible)},dependencies:[Ii,we,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();function lh(n,u){n&1&&zh$1(0,`doc-modal-standard-example`)}function dh(n,u){n&1&&zh$1(0,`doc-modal-basic-example`)}function mh(n,u){n&1&&zh$1(0,`doc-modal-full-screen-example`)}function ph(n,u){n&1&&zh$1(0,`doc-modal-size-example`)}function uh(n,u){n&1&&zh$1(0,`doc-modal-scrolling-example`)}function ch(n,u){n&1&&zh$1(0,`doc-modal-closable-example`)}function hh(n,u){n&1&&zh$1(0,`doc-modal-mask-closable-example`)}function gh(n,u){if(n&1){let o=dC();is$1(0,`div`)(1,`h2`,2),zC(2,`States`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Modal`),Vu(),is$1(6,`p`),zC(7,`A standard modal`),Vu(),is$1(8,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isStandardModalVisible=!0)}),zC(9,`Show Modal`),Vu(),jh$1(10,lh,1,0,`ng-template`,6),Vu(),is$1(11,`doc-code-sample`,3)(12,`h3`,4),zC(13,`Basic`),Vu(),is$1(14,`p`),zC(15,`A modal can reduce its complexity`),Vu(),is$1(16,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isBasicModalVisible=!0)}),zC(17,`Show Modal`),Vu(),jh$1(18,dh,1,0,`ng-template`,6),Vu(),is$1(19,`h2`,2),zC(20,`Variations`),Vu(),is$1(21,`doc-code-sample`,3)(22,`h3`,4),zC(23,`Full Screen`),Vu(),is$1(24,`p`),zC(25,`A modal can use the entire size of the screen`),Vu(),is$1(26,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isFullScreenModalVisible=!0)}),zC(27,`Show Modal`),Vu(),jh$1(28,mh,1,0,`ng-template`,6),Vu(),is$1(29,`doc-code-sample`,3)(30,`h3`,4),zC(31,`Size`),Vu(),is$1(32,`p`),zC(33,`A modal can vary in size`),Vu(),is$1(34,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isSizeModalVisible=!0)}),zC(35,`Show Modal`),Vu(),jh$1(36,ph,1,0,`ng-template`,6),Vu(),is$1(37,`doc-code-sample`,3)(38,`h3`,4),zC(39,`Scrolling Content`),Vu(),is$1(40,`p`),zC(41,`A modal can use the entire size of the screen.`),Vu(),is$1(42,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isScrollingModalVisible=!0)}),zC(43,`Show Modal`),Vu(),jh$1(44,uh,1,0,`ng-template`,6),Vu(),is$1(45,`doc-code-sample`,3)(46,`h3`,4),zC(47,`Closable`),Vu(),is$1(48,`p`),zC(49,`By default, a modal is rendered with a close icon in the top right corner. The modal can be rendered without the close button`),Vu(),is$1(50,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isClosableModalVisible=!0)}),zC(51,`Show Modal`),Vu(),jh$1(52,ch,1,0,`ng-template`,6),Vu(),is$1(53,`doc-code-sample`,3)(54,`h3`,4),zC(55,`Mask Closable`),Vu(),is$1(56,`p`),zC(57,`By default, a modal can be closed by clicking on the background. If that isn't the desired behaviour, that is configurable`),Vu(),is$1(58,`button`,5),Kh$1(`click`,function(){Pd$1(o);let s=pC();return jd$1(s.isMaskClosableModalVisible=!0)}),zC(59,`Show Modal`),Vu(),jh$1(60,hh,1,0,`ng-template`,6),Vu()()}if(n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetStandard)(`componentCode`,o.snippetStandardTs),KD(8),Gh$1(`templateCode`,o.snippetBasic)(`componentCode`,o.snippetBasicTs),KD(10),Gh$1(`templateCode`,o.snippetFullScreen)(`componentCode`,o.snippetFullScreenTs),KD(8),Gh$1(`templateCode`,o.snippetSize)(`componentCode`,o.snippetSizeTs),KD(8),Gh$1(`templateCode`,o.snippetScrolling)(`componentCode`,o.snippetScrollingTs),KD(8),Gh$1(`templateCode`,o.snippetClosable)(`componentCode`,o.snippetClosableTs),KD(8),Gh$1(`templateCode`,o.snippetMaskClosable)(`componentCode`,o.snippetMaskClosableTs)}}function fh(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-modal`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiHeaderText`),Vu(),is$1(20,`td`),zC(21,`The modal header`),Vu(),is$1(22,`td`)(23,`div`,8),zC(24,` string `),Vu()(),is$1(25,`td`)(26,`div`,9),zC(27,` null `),Vu()()(),is$1(28,`tr`)(29,`td`),zC(30,`suiHeaderIcon`),Vu(),is$1(31,`td`),zC(32,`The modal header icon type`),Vu(),is$1(33,`td`)(34,`div`,8),zC(35,` string `),Vu()(),is$1(36,`td`)(37,`div`,9),zC(38,` null `),Vu()()(),is$1(39,`tr`)(40,`td`),zC(41,`suiSize`),Vu(),is$1(42,`td`),zC(43,` Set the modal's size. Allowed values could be `),is$1(44,`span`,10),zC(45,`mini`),Vu(),zC(46,` | `),is$1(47,`span`,10),zC(48,`tiny`),Vu(),zC(49,` | `),is$1(50,`span`,10),zC(51,`small`),Vu(),zC(52,` | `),is$1(53,`span`,10),zC(54,`large`),Vu(),zC(55,` | `),is$1(56,`span`,10),zC(57,`null`),Vu()(),is$1(58,`td`)(59,`div`,8),zC(60,` string `),Vu()(),is$1(61,`td`)(62,`div`,9),zC(63,` null `),Vu()()(),is$1(64,`tr`)(65,`td`),zC(66,`suiScroll`),Vu(),is$1(67,`td`),zC(68,` Determines if the modal is scrollable. Allowed values could be `),is$1(69,`span`,10),zC(70,`full`),Vu(),zC(71,` | `),is$1(72,`span`,10),zC(73,`medium`),Vu(),zC(74,` | `),is$1(75,`span`,10),zC(76,`none`),Vu()(),is$1(77,`td`)(78,`div`,8),zC(79,` string `),Vu()(),is$1(80,`td`)(81,`div`,9),zC(82,` none `),Vu()()(),is$1(83,`tr`)(84,`td`),zC(85,`suiBasic`),Vu(),is$1(86,`td`),zC(87,`Determines if the modal is rendered as basic`),Vu(),is$1(88,`td`)(89,`div`,8),zC(90,` boolean `),Vu()(),is$1(91,`td`)(92,`div`,9),zC(93,` false `),Vu()()(),is$1(94,`tr`)(95,`td`),zC(96,`suiClosable`),Vu(),is$1(97,`td`),zC(98,`Determines if the close icon is rendered on the modal`),Vu(),is$1(99,`td`)(100,`div`,8),zC(101,` boolean `),Vu()(),is$1(102,`td`)(103,`div`,9),zC(104,` true `),Vu()()(),is$1(105,`tr`)(106,`td`),zC(107,`suiCentered`),Vu(),is$1(108,`td`),zC(109,`Determines if the modal is rendered vertically centered`),Vu(),is$1(110,`td`)(111,`div`,8),zC(112,` boolean `),Vu()(),is$1(113,`td`)(114,`div`,9),zC(115,` true `),Vu()()(),is$1(116,`tr`)(117,`td`),zC(118,`suiBlurring`),Vu(),is$1(119,`td`),zC(120,`Determines if the modal uses a dimmer background`),Vu(),is$1(121,`td`)(122,`div`,8),zC(123,` boolean `),Vu()(),is$1(124,`td`)(125,`div`,9),zC(126,` false `),Vu()()(),is$1(127,`tr`)(128,`td`),zC(129,`suiFullScreen`),Vu(),is$1(130,`td`),zC(131,`Determines if the modal is rendered to fill the screen horizontally`),Vu(),is$1(132,`td`)(133,`div`,8),zC(134,` boolean `),Vu()(),is$1(135,`td`)(136,`div`,9),zC(137,` false `),Vu()()(),is$1(138,`tr`)(139,`td`),zC(140,`suiMaskClosable`),Vu(),is$1(141,`td`),zC(142,`Determines if the modal is dismissable by clicking on the background`),Vu(),is$1(143,`td`)(144,`div`,8),zC(145,` boolean `),Vu()(),is$1(146,`td`)(147,`div`,9),zC(148,` true `),Vu()()(),is$1(149,`tr`)(150,`td`),zC(151,`visible`),Vu(),is$1(152,`td`),zC(153,`Determines if the modal is visible or not`),Vu(),is$1(154,`td`)(155,`div`,8),zC(156,` boolean `),Vu()(),is$1(157,`td`)(158,`div`,9),zC(159,` false `),Vu()()()()(),is$1(160,`h4`,4),zC(161,`Events`),Vu(),is$1(162,`table`,7)(163,`thead`)(164,`tr`)(165,`th`),zC(166,`Property`),Vu(),is$1(167,`th`),zC(168,`Description`),Vu(),is$1(169,`th`),zC(170,`Type`),Vu()()(),is$1(171,`tbody`)(172,`tr`)(173,`td`),zC(174,`visibleChange`),Vu(),is$1(175,`td`),zC(176,`Fired when a the modal's visibility changes `),Vu(),is$1(177,`td`)(178,`div`,8),zC(179,` boolean `),Vu()()()()(),is$1(180,`h2`,2),zC(181,`suiModalContent`),Vu(),is$1(182,`h4`,4),zC(183,`Properties`),Vu(),is$1(184,`table`,7)(185,`thead`)(186,`tr`)(187,`th`),zC(188,`Property`),Vu(),is$1(189,`th`),zC(190,`Description`),Vu(),is$1(191,`th`),zC(192,`Type`),Vu(),is$1(193,`th`),zC(194,`Default`),Vu()()(),is$1(195,`tbody`)(196,`tr`)(197,`td`),zC(198,`suiImage`),Vu(),is$1(199,`td`),zC(200,`Determines if the content can contain an image `),Vu(),is$1(201,`td`)(202,`div`,8),zC(203,` boolean `),Vu()(),is$1(204,`td`)(205,`div`,9),zC(206,` false `),Vu()()(),is$1(207,`tr`)(208,`td`),zC(209,`suiScrollable`),Vu(),is$1(210,`td`),zC(211,`Determines if the content is scrollable or not `),Vu(),is$1(212,`td`)(213,`div`,8),zC(214,` boolean `),Vu()(),is$1(215,`td`)(216,`div`,9),zC(217,` false `),Vu()()()()(),is$1(218,`h2`,2),zC(219,`suiModalActions`),Vu(),is$1(220,`h4`,4),zC(221,`Properties`),Vu(),is$1(222,`table`,7)(223,`thead`)(224,`tr`)(225,`th`),zC(226,`Property`),Vu(),is$1(227,`th`),zC(228,`Description`),Vu(),is$1(229,`th`),zC(230,`Type`),Vu(),is$1(231,`th`),zC(232,`Default`),Vu()()(),zh$1(233,`tbody`),is$1(234,`tfoot`,11)(235,`tr`)(236,`th`,12)(237,`div`,13),zC(238,`No properties for this directive`),Vu()()()()(),is$1(239,`h2`,2),zC(240,`suiModalDescription`),Vu(),is$1(241,`h4`,4),zC(242,`Properties`),Vu(),is$1(243,`table`,7)(244,`thead`)(245,`tr`)(246,`th`),zC(247,`Property`),Vu(),is$1(248,`th`),zC(249,`Description`),Vu(),is$1(250,`th`),zC(251,`Type`),Vu(),is$1(252,`th`),zC(253,`Default`),Vu()()(),zh$1(254,`tbody`),is$1(255,`tfoot`,11)(256,`tr`)(257,`th`,12)(258,`div`,13),zC(259,`No properties for this directive`),Vu()()()()()())}var Jr=(()=>{class n{constructor(o){this.snippetStandard=wr,this.snippetStandardTs=_r,this.snippetBasic=Tr,this.snippetBasicTs=Mr,this.snippetFullScreen=Ir,this.snippetFullScreenTs=Pr,this.snippetSize=kr,this.snippetSizeTs=Fr,this.snippetScrolling=Ar,this.snippetScrollingTs=Vr,this.snippetClosable=Br,this.snippetClosableTs=Or,this.snippetMaskClosable=Lr,this.snippetMaskClosableTs=Hr,this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((a,s)=>s),o.setTitle(`Modal | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-modal`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Modal`,`subHeader`,`Modals display content that temporarily blocks interactions with the main view of a site.`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-button`,``,3,`click`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[`sui-label`,``],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,gh,61,14,`div`,1)(2,fh,260,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Ii,jr,Nr,Ur,$r,Yr,Gr,Xr],encapsulation:2,changeDetection:1})}}return n})();var qr=`<sui-dropdown>
  <div class="text">File</div>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>
      <span class="description">ctrl + o</span>
      Open...
    </div>
    <div suiDropdownMenuItem>
      <span class="description">ctrl + s</span>
      Save as...
    </div>
    <div suiDropdownMenuItem>
      <span class="description">ctrl + r</span>
      Rename
    </div>
    <div suiDropdownMenuItem>Make a copy</div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="folder"></i>
      Move to folder
    </div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="trash"></i>
      Move to trash
    </div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuItem>Download As...</div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Publish To Web
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>Google Docs</div>
        <div suiDropdownMenuItem>Google Drive</div>
        <div suiDropdownMenuItem>Dropbox</div>
        <div suiDropdownMenuItem>Adobe Creative Cloud</div>
        <div suiDropdownMenuItem>Private FTP</div>
        <div suiDropdownMenuItem>Another Service...</div>
      </div>
    </div>
    <div suiDropdownMenuItem>E-mail Collaborators</div>
  </div>
</sui-dropdown>
`;var Zr=`<span>
  Show me posts by
  <sui-dropdown suiInline>
    <div class="text">
      <img sui-image suiAvatar src="/assets/images/jenny.jpg" alt="Jenny Hess">
      Jenny Hess
    </div>
    <i sui-icon suiIconType="dropdown"></i>
    <div suiDropdownMenu>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/jenny.jpg" alt="Jenny Hess">
        Jenny Hess
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/elliot.jpg" alt="Elliot Fu">
        Elliot Fu
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/stevie.jpg" alt="Stevie Feliciano">
        Stevie Feliciano
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/matt.jpg" alt="Matt">
        Matt
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/justen.jpg" alt="Justen Kitsune">
        Justen Kitsune
      </div>
    </div>
  </sui-dropdown>
</span>
`;var Kr=`<sui-dropdown suiPointing
              class="link item">
  <span class="text">Home</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Shopping</div>
    <div suiDropdownMenuItem>Categories</div>
    <div suiDropdownMenuItem>Order</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="top left"
              class="button">
  <span class="text">Top Left</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="top right"
              class="button">
  <span class="text">Top Right</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="left"
              class="button">
  <span class="text">Left</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="right"
              class="button">
  <span class="text">Right</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>
`;var Qr=`<sui-dropdown suiFloating
              class="labeled icon button">
  <i sui-icon suiIconType="filter"></i>
  <span class="text">Filter Posts</span>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Edit Post</div>
    <div suiDropdownMenuItem>Remove Post</div>
    <div suiDropdownMenuItem>Hide Post</div>
  </div>
</sui-dropdown>
`;var el=`<sui-dropdown suiSimple>
  Dropdown
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var tl=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var il=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var nl=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>
      <i sui-icon suiIconType="tags"></i>
      Filter by tag
    </div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var ol=`<sui-dropdown>
  <span class="text">Filter Tags</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu
       style="min-width: 15rem">
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>
      <span class="description">2 new</span>
      Important
    </div>
    <div suiDropdownMenuItem>
      <span class="description">10 new</span>
      Hopper
    </div>
    <div suiDropdownMenuItem>
      <span class="description">5 new</span>
      Discussion
    </div>
  </div>
</sui-dropdown>
`;var al=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>
      <div sui-label suiColour="red" suiEmpty suiCircular></div>
      Important
    </div>
    <div suiDropdownMenuItem>
      <div sui-label suiColour="blue" suiEmpty suiCircular></div>
      Announcement
    </div>
    <div suiDropdownMenuItem>
      <div sui-label suiColour="black" suiEmpty suiCircular></div>
      Discussion
    </div>
  </div>
</sui-dropdown>
`;var sl=`<sui-dropdown>
  <span class="text">Login</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div sui-message suiState="error">
      <div suiMessageHeader>Error</div>
      <p>You must log-in to see all categories</p>
    </div>
  </div>
</sui-dropdown>
`;var rl=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">Select Type</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>
      <span class="right floated">
        <i sui-icon suiIconType="exclamation"></i>
      </span>
      Important
    </div>
    <div suiDropdownMenuItem>
      <span class="right floated">
        <i sui-icon suiIconType="bullhorn"></i>
      </span>
      Announcement
    </div>
    <div suiDropdownMenuItem>
      <span class="right floated">
        <i sui-icon suiIconType="comments"></i>
      </span>
      Discussion
    </div>
  </div>
</sui-dropdown>
`;var ll=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div class="ui icon search input"
         (click)="$event.stopPropagation()">
      <i sui-icon suiIconType="search"></i>
      <input type="text"
             placeholder="Search issues...">
    </div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var dl=`<sui-dropdown>
  <span class="text">Add User</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>People You Might Know</div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/jenny.jpg" alt="Jenny Hess">
      Jenny Hess
    </div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/elliot.jpg" alt="Elliot Fu">
      Elliot Fu
    </div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/stevie.jpg" alt="Stevie Feliciano">
      Stevie Feliciano
    </div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuHeader>Your Friends' Friends</div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/matt.jpg" alt="Matt">
      Matt
    </div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/justen.jpg" alt="Justen Kitsune">
      Justen Kitsune
    </div>
  </div>
</sui-dropdown>
`;var ml=`<sui-dropdown suiLoading>
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var pl=`<sui-dropdown suiError
              class="selection">
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var ul=`<sui-dropdown disabled>
  <span class="text">Disabled Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>

<sui-dropdown>
  <span class="text">Disabled Item</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem disabled>Disabled</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var cl=`<sui-dropdown>
  <span class="text">Select choice</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu suiScrolling>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
    <div suiDropdownMenuItem>Choice 4</div>
    <div suiDropdownMenuItem>Choice 5</div>
    <div suiDropdownMenuItem>Choice 6</div>
    <div suiDropdownMenuItem>Choice 7</div>
    <div suiDropdownMenuItem>Choice 8</div>
    <div suiDropdownMenuItem>Choice 9</div>
    <div suiDropdownMenuItem>Choice 10</div>
    <div suiDropdownMenuItem>Choice 11</div>
    <div suiDropdownMenuItem>Choice 12</div>
    <div suiDropdownMenuItem>Choice 13</div>
    <div suiDropdownMenuItem>Choice 14</div>
    <div suiDropdownMenuItem>Choice 15</div>
  </div>
</sui-dropdown>
`;var hl=`<sui-dropdown suiCompact
              class="selection">
  <span class="text">Compact</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>A</div>
    <div suiDropdownMenuItem>B</div>
    <div suiDropdownMenuItem>C</div>
  </div>
</sui-dropdown>
`;var gl=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">All Sections</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var fl=`<sui-dropdown>
  <span class="text">Menu</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Right
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>1</div>
        <div suiDropdownMenuItem>2</div>
        <div suiDropdownMenuItem>3</div>
      </div>
    </div>
    <div suiDropdownMenuItem suiDirection="left">
      <i sui-icon suiIconType="dropdown"></i>
      Left
      <div suiDropdownMenu suiDirection="left">
        <div suiDropdownMenuItem>1</div>
        <div suiDropdownMenuItem>2</div>
        <div suiDropdownMenuItem>3</div>
      </div>
    </div>
  </div>
</sui-dropdown>

<sui-dropdown>
  <span class="text">Left Menu</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu suiDirection="left">
    <div suiDropdownMenuItem>1</div>
    <div suiDropdownMenuItem>2</div>
    <div suiDropdownMenuItem>3</div>
  </div>
</sui-dropdown>
`;var Sl=`<sui-dropdown>
  <span class="text">Filter Posts</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Filter by tag
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>Important</div>
        <div suiDropdownMenuItem>Announcement</div>
        <div suiDropdownMenuItem>Discussion</div>
      </div>
    </div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Filter by date
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>This Week</div>
        <div suiDropdownMenuItem>This Month</div>
        <div suiDropdownMenuItem>This Year</div>
      </div>
    </div>
  </div>
</sui-dropdown>
`;var vl=`<div sui-buttons suiColour="teal">
  <div sui-button>Save</div>
  <sui-dropdown suiFloating
                class="button icon">
    <i sui-icon suiIconType="dropdown"></i>
    <div suiDropdownMenu>
      <div suiDropdownMenuItem>
        <i sui-icon suiIconType="edit"></i>
        Edit Post
      </div>
      <div suiDropdownMenuItem>
        <i sui-icon suiIconType="delete"></i>
        Remove Post
      </div>
      <div suiDropdownMenuItem>
        <i sui-icon suiIconType="hide"></i>
        Hide Post
      </div>
    </div>
  </sui-dropdown>
</div>
`;var xl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-dropdown-example`]],standalone:!1,decls:48,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[1,`description`],[`sui-icon`,``,`suiIconType`,`folder`],[`sui-icon`,``,`suiIconType`,`trash`],[`suiDropdownMenuDivider`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`div`,0),zC(2,`File`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`New`),Vu(),is$1(7,`div`,3)(8,`span`,4),zC(9,`ctrl + o`),Vu(),zC(10,` Open... `),Vu(),is$1(11,`div`,3)(12,`span`,4),zC(13,`ctrl + s`),Vu(),zC(14,` Save as... `),Vu(),is$1(15,`div`,3)(16,`span`,4),zC(17,`ctrl + r`),Vu(),zC(18,` Rename `),Vu(),is$1(19,`div`,3),zC(20,`Make a copy`),Vu(),is$1(21,`div`,3),zh$1(22,`i`,5),zC(23,` Move to folder `),Vu(),is$1(24,`div`,3),zh$1(25,`i`,6),zC(26,` Move to trash `),Vu(),zh$1(27,`div`,7),is$1(28,`div`,3),zC(29,`Download As...`),Vu(),is$1(30,`div`,3),zh$1(31,`i`,1),zC(32,` Publish To Web `),is$1(33,`div`,2)(34,`div`,3),zC(35,`Google Docs`),Vu(),is$1(36,`div`,3),zC(37,`Google Drive`),Vu(),is$1(38,`div`,3),zC(39,`Dropbox`),Vu(),is$1(40,`div`,3),zC(41,`Adobe Creative Cloud`),Vu(),is$1(42,`div`,3),zC(43,`Private FTP`),Vu(),is$1(44,`div`,3),zC(45,`Another Service...`),Vu()()(),is$1(46,`div`,3),zC(47,`E-mail Collaborators`),Vu()()())},dependencies:[qe,me,ze$2,$e$1,we],encapsulation:2,changeDetection:1})}}return n})();var bl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-inline-example`]],standalone:!1,decls:23,vars:0,consts:[[`suiInline`,``],[1,`text`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/jenny.jpg`,`alt`,`Jenny Hess`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/elliot.jpg`,`alt`,`Elliot Fu`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/stevie.jpg`,`alt`,`Stevie Feliciano`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/matt.jpg`,`alt`,`Matt`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/justen.jpg`,`alt`,`Justen Kitsune`]],template:function(a,s){a&1&&(is$1(0,`span`),zC(1,` Show me posts by `),is$1(2,`sui-dropdown`,0)(3,`div`,1),zh$1(4,`img`,2),zC(5,` Jenny Hess `),Vu(),zh$1(6,`i`,3),is$1(7,`div`,4)(8,`div`,5),zh$1(9,`img`,2),zC(10,` Jenny Hess `),Vu(),is$1(11,`div`,5),zh$1(12,`img`,6),zC(13,` Elliot Fu `),Vu(),is$1(14,`div`,5),zh$1(15,`img`,7),zC(16,` Stevie Feliciano `),Vu(),is$1(17,`div`,5),zh$1(18,`img`,8),zC(19,` Matt `),Vu(),is$1(20,`div`,5),zh$1(21,`img`,9),zC(22,` Justen Kitsune `),Vu()()()())},dependencies:[qe,me,ze$2,we,z],encapsulation:2,changeDetection:1})}}return n})();var yl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-pointing-example`]],standalone:!1,decls:55,vars:0,consts:[[`suiPointing`,``,1,`link`,`item`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiPointing`,``,`suiPointingDirection`,`top left`,1,`button`],[`suiPointing`,``,`suiPointingDirection`,`top right`,1,`button`],[`suiPointing`,``,`suiPointingDirection`,`left`,1,`button`],[`suiPointing`,``,`suiPointingDirection`,`right`,1,`button`]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`Home`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4),zC(6,`Shopping`),Vu(),is$1(7,`div`,4),zC(8,`Categories`),Vu(),is$1(9,`div`,4),zC(10,`Order`),Vu()()(),is$1(11,`sui-dropdown`,5)(12,`span`,1),zC(13,`Top Left`),Vu(),zh$1(14,`i`,2),is$1(15,`div`,3)(16,`div`,4),zC(17,`New`),Vu(),is$1(18,`div`,4),zC(19,`Open...`),Vu(),is$1(20,`div`,4),zC(21,`Save as...`),Vu()()(),is$1(22,`sui-dropdown`,6)(23,`span`,1),zC(24,`Top Right`),Vu(),zh$1(25,`i`,2),is$1(26,`div`,3)(27,`div`,4),zC(28,`New`),Vu(),is$1(29,`div`,4),zC(30,`Open...`),Vu(),is$1(31,`div`,4),zC(32,`Save as...`),Vu()()(),is$1(33,`sui-dropdown`,7)(34,`span`,1),zC(35,`Left`),Vu(),zh$1(36,`i`,2),is$1(37,`div`,3)(38,`div`,4),zC(39,`New`),Vu(),is$1(40,`div`,4),zC(41,`Open...`),Vu(),is$1(42,`div`,4),zC(43,`Save as...`),Vu()()(),is$1(44,`sui-dropdown`,8)(45,`span`,1),zC(46,`Right`),Vu(),zh$1(47,`i`,2),is$1(48,`div`,3)(49,`div`,4),zC(50,`New`),Vu(),is$1(51,`div`,4),zC(52,`Open...`),Vu(),is$1(53,`div`,4),zC(54,`Save as...`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var El=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-floating-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiFloating`,``,1,`labeled`,`icon`,`button`],[`sui-icon`,``,`suiIconType`,`filter`],[1,`text`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0),zh$1(1,`i`,1),is$1(2,`span`,2),zC(3,`Filter Posts`),Vu(),is$1(4,`div`,3)(5,`div`,4),zC(6,`Edit Post`),Vu(),is$1(7,`div`,4),zC(8,`Remove Post`),Vu(),is$1(9,`div`,4),zC(10,`Hide Post`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Cl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-simple-example`]],standalone:!1,decls:10,vars:0,consts:[[`suiSimple`,``],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0),zC(1,` Dropdown `),zh$1(2,`i`,1),is$1(3,`div`,2)(4,`div`,3),zC(5,`Choice 1`),Vu(),is$1(6,`div`,3),zC(7,`Choice 2`),Vu(),is$1(8,`div`,3),zC(9,`Choice 3`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Dl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-header-example`]],standalone:!1,decls:13,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`Filter by tag`),Vu(),is$1(7,`div`,4),zC(8,`Important`),Vu(),is$1(9,`div`,4),zC(10,`Announcement`),Vu(),is$1(11,`div`,4),zC(12,`Discussion`),Vu()()())},dependencies:[qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var wl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-divider-example`]],standalone:!1,decls:13,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiDropdownMenuDivider`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`Important`),Vu(),zh$1(7,`div`,4),is$1(8,`div`,3),zC(9,`Announcement`),Vu(),zh$1(10,`div`,4),is$1(11,`div`,3),zC(12,`Discussion`),Vu()()())},dependencies:[qe,me,ze$2,$e$1,we],encapsulation:2,changeDetection:1})}}return n})();var _l=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-icon-example`]],standalone:!1,decls:14,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`sui-icon`,``,`suiIconType`,`tags`],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zh$1(6,`i`,4),zC(7,` Filter by tag `),Vu(),is$1(8,`div`,5),zC(9,`Important`),Vu(),is$1(10,`div`,5),zC(11,`Announcement`),Vu(),is$1(12,`div`,5),zC(13,`Discussion`),Vu()()())},dependencies:[qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var Tl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-description-example`]],standalone:!1,decls:19,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``,2,`min-width`,`15rem`],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``],[1,`description`]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter Tags`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`Filter by tag`),Vu(),is$1(7,`div`,4)(8,`span`,5),zC(9,`2 new`),Vu(),zC(10,` Important `),Vu(),is$1(11,`div`,4)(12,`span`,5),zC(13,`10 new`),Vu(),zC(14,` Hopper `),Vu(),is$1(15,`div`,4)(16,`span`,5),zC(17,`5 new`),Vu(),zC(18,` Discussion `),Vu()()())},dependencies:[qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var Ml=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-label-example`]],standalone:!1,decls:16,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``],[`sui-label`,``,`suiColour`,`red`,`suiEmpty`,``,`suiCircular`,``],[`sui-label`,``,`suiColour`,`blue`,`suiEmpty`,``,`suiCircular`,``],[`sui-label`,``,`suiColour`,`black`,`suiEmpty`,``,`suiCircular`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`Filter by tag`),Vu(),is$1(7,`div`,4),zh$1(8,`div`,5),zC(9,` Important `),Vu(),is$1(10,`div`,4),zh$1(11,`div`,6),zC(12,` Announcement `),Vu(),is$1(13,`div`,4),zh$1(14,`div`,7),zC(15,` Discussion `),Vu()()())},dependencies:[fi,qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var Il=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-message-example`]],standalone:!1,decls:10,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`sui-message`,``,`suiState`,`error`],[`suiMessageHeader`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Login`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3)(6,`div`,4),zC(7,`Error`),Vu(),is$1(8,`p`),zC(9,`You must log-in to see all categories`),Vu()()()())},dependencies:[qe,me,we,li,ri$2],encapsulation:2,changeDetection:1})}}return n})();var Pl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-floated-example`]],standalone:!1,decls:17,vars:0,consts:[[`suiFluid`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[1,`right`,`floated`],[`sui-icon`,``,`suiIconType`,`exclamation`],[`sui-icon`,``,`suiIconType`,`bullhorn`],[`sui-icon`,``,`suiIconType`,`comments`]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`Select Type`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4)(6,`span`,5),zh$1(7,`i`,6),Vu(),zC(8,` Important `),Vu(),is$1(9,`div`,4)(10,`span`,5),zh$1(11,`i`,7),Vu(),zC(12,` Announcement `),Vu(),is$1(13,`div`,4)(14,`span`,5),zh$1(15,`i`,8),Vu(),zC(16,` Discussion `),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var kl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-input-example`]],standalone:!1,decls:17,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[1,`ui`,`icon`,`search`,`input`,3,`click`],[`sui-icon`,``,`suiIconType`,`search`],[`type`,`text`,`placeholder`,`Search issues...`],[`suiDropdownMenuDivider`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),Kh$1(`click`,function(m){return m.stopPropagation()}),zh$1(6,`i`,4)(7,`input`,5),Vu(),zh$1(8,`div`,6),is$1(9,`div`,7),zC(10,`Filter by tag`),Vu(),is$1(11,`div`,8),zC(12,`Important`),Vu(),is$1(13,`div`,8),zC(14,`Announcement`),Vu(),is$1(15,`div`,8),zC(16,`Discussion`),Vu()()())},dependencies:[qe,me,ze$2,Ue$1,$e$1,we],encapsulation:2,changeDetection:1})}}return n})();var Fl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-image-example`]],standalone:!1,decls:25,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/jenny.jpg`,`alt`,`Jenny Hess`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/elliot.jpg`,`alt`,`Elliot Fu`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/stevie.jpg`,`alt`,`Stevie Feliciano`],[`suiDropdownMenuDivider`,``],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/matt.jpg`,`alt`,`Matt`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/justen.jpg`,`alt`,`Justen Kitsune`]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Add User`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`People You Might Know`),Vu(),is$1(7,`div`,4),zh$1(8,`img`,5),zC(9,` Jenny Hess `),Vu(),is$1(10,`div`,4),zh$1(11,`img`,6),zC(12,` Elliot Fu `),Vu(),is$1(13,`div`,4),zh$1(14,`img`,7),zC(15,` Stevie Feliciano `),Vu(),zh$1(16,`div`,8),is$1(17,`div`,3),zC(18,`Your Friends' Friends`),Vu(),is$1(19,`div`,4),zh$1(20,`img`,9),zC(21,` Matt `),Vu(),is$1(22,`div`,4),zh$1(23,`img`,10),zC(24,` Justen Kitsune `),Vu()()())},dependencies:[qe,me,ze$2,Ue$1,$e$1,we,z],encapsulation:2,changeDetection:1})}}return n})();var Al=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-loading-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiLoading`,``],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`Dropdown`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4),zC(6,`Choice 1`),Vu(),is$1(7,`div`,4),zC(8,`Choice 2`),Vu(),is$1(9,`div`,4),zC(10,`Choice 3`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Vl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-error-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiError`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`Dropdown`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4),zC(6,`Choice 1`),Vu(),is$1(7,`div`,4),zC(8,`Choice 2`),Vu(),is$1(9,`div`,4),zC(10,`Choice 3`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Bl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-disabled-example`]],standalone:!1,decls:22,vars:0,consts:[[`disabled`,``],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiDropdownMenuItem`,``,`disabled`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`Disabled Dropdown`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4),zC(6,`Choice 1`),Vu(),is$1(7,`div`,4),zC(8,`Choice 2`),Vu(),is$1(9,`div`,4),zC(10,`Choice 3`),Vu()()(),is$1(11,`sui-dropdown`)(12,`span`,1),zC(13,`Disabled Item`),Vu(),zh$1(14,`i`,2),is$1(15,`div`,3)(16,`div`,4),zC(17,`Choice 1`),Vu(),is$1(18,`div`,5),zC(19,`Disabled`),Vu(),is$1(20,`div`,4),zC(21,`Choice 3`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Ol=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-scrolling-example`]],standalone:!1,decls:35,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``,`suiScrolling`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Select choice`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zC(6,`Choice 1`),Vu(),is$1(7,`div`,3),zC(8,`Choice 2`),Vu(),is$1(9,`div`,3),zC(10,`Choice 3`),Vu(),is$1(11,`div`,3),zC(12,`Choice 4`),Vu(),is$1(13,`div`,3),zC(14,`Choice 5`),Vu(),is$1(15,`div`,3),zC(16,`Choice 6`),Vu(),is$1(17,`div`,3),zC(18,`Choice 7`),Vu(),is$1(19,`div`,3),zC(20,`Choice 8`),Vu(),is$1(21,`div`,3),zC(22,`Choice 9`),Vu(),is$1(23,`div`,3),zC(24,`Choice 10`),Vu(),is$1(25,`div`,3),zC(26,`Choice 11`),Vu(),is$1(27,`div`,3),zC(28,`Choice 12`),Vu(),is$1(29,`div`,3),zC(30,`Choice 13`),Vu(),is$1(31,`div`,3),zC(32,`Choice 14`),Vu(),is$1(33,`div`,3),zC(34,`Choice 15`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Ll=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-compact-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiCompact`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`Compact`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4),zC(6,`A`),Vu(),is$1(7,`div`,4),zC(8,`B`),Vu(),is$1(9,`div`,4),zC(10,`C`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Hl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-fluid-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiFluid`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`,0)(1,`span`,1),zC(2,`All Sections`),Vu(),zh$1(3,`i`,2),is$1(4,`div`,3)(5,`div`,4),zC(6,`Choice 1`),Vu(),is$1(7,`div`,4),zC(8,`Choice 2`),Vu(),is$1(9,`div`,4),zC(10,`Choice 3`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Wl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-menu-direction-example`]],standalone:!1,decls:36,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiDropdownMenuItem`,``,`suiDirection`,`left`],[`suiDropdownMenu`,``,`suiDirection`,`left`]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Menu`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zh$1(6,`i`,1),zC(7,` Right `),is$1(8,`div`,2)(9,`div`,3),zC(10,`1`),Vu(),is$1(11,`div`,3),zC(12,`2`),Vu(),is$1(13,`div`,3),zC(14,`3`),Vu()()(),is$1(15,`div`,4),zh$1(16,`i`,1),zC(17,` Left `),is$1(18,`div`,5)(19,`div`,3),zC(20,`1`),Vu(),is$1(21,`div`,3),zC(22,`2`),Vu(),is$1(23,`div`,3),zC(24,`3`),Vu()()()()(),is$1(25,`sui-dropdown`)(26,`span`,0),zC(27,`Left Menu`),Vu(),zh$1(28,`i`,1),is$1(29,`div`,5)(30,`div`,3),zC(31,`1`),Vu(),is$1(32,`div`,3),zC(33,`2`),Vu(),is$1(34,`div`,3),zC(35,`3`),Vu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Rl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-multiple-levels-example`]],standalone:!1,decls:25,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(is$1(0,`sui-dropdown`)(1,`span`,0),zC(2,`Filter Posts`),Vu(),zh$1(3,`i`,1),is$1(4,`div`,2)(5,`div`,3),zh$1(6,`i`,1),zC(7,` Filter by tag `),is$1(8,`div`,2)(9,`div`,3),zC(10,`Important`),Vu(),is$1(11,`div`,3),zC(12,`Announcement`),Vu(),is$1(13,`div`,3),zC(14,`Discussion`),Vu()()(),is$1(15,`div`,3),zh$1(16,`i`,1),zC(17,` Filter by date `),is$1(18,`div`,2)(19,`div`,3),zC(20,`This Week`),Vu(),is$1(21,`div`,3),zC(22,`This Month`),Vu(),is$1(23,`div`,3),zC(24,`This Year`),Vu()()()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var zl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown-button-group-example`]],standalone:!1,decls:15,vars:0,consts:[[`sui-buttons`,``,`suiColour`,`teal`],[`sui-button`,``],[`suiFloating`,``,1,`button`,`icon`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`sui-icon`,``,`suiIconType`,`edit`],[`sui-icon`,``,`suiIconType`,`delete`],[`sui-icon`,``,`suiIconType`,`hide`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`div`,1),zC(2,`Save`),Vu(),is$1(3,`sui-dropdown`,2),zh$1(4,`i`,3),is$1(5,`div`,4)(6,`div`,5),zh$1(7,`i`,6),zC(8,` Edit Post `),Vu(),is$1(9,`div`,5),zh$1(10,`i`,7),zC(11,` Remove Post `),Vu(),is$1(12,`div`,5),zh$1(13,`i`,8),zC(14,` Hide Post `),Vu()()()())},dependencies:[Ii,Di,qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();function zh(n,u){n&1&&zh$1(0,`doc-dropdown-dropdown-example`)}function jh(n,u){n&1&&zh$1(0,`doc-dropdown-inline-example`)}function Nh(n,u){n&1&&zh$1(0,`doc-dropdown-pointing-example`)}function Uh(n,u){n&1&&zh$1(0,`doc-dropdown-floating-example`)}function $h(n,u){n&1&&zh$1(0,`doc-dropdown-simple-example`)}function Yh(n,u){n&1&&zh$1(0,`doc-dropdown-header-example`)}function Gh(n,u){n&1&&zh$1(0,`doc-dropdown-divider-example`)}function Xh(n,u){n&1&&zh$1(0,`doc-dropdown-icon-example`)}function Jh(n,u){n&1&&zh$1(0,`doc-dropdown-description-example`)}function qh(n,u){n&1&&zh$1(0,`doc-dropdown-label-example`)}function Zh(n,u){n&1&&zh$1(0,`doc-dropdown-message-example`)}function Kh(n,u){n&1&&zh$1(0,`doc-dropdown-floated-example`)}function Qh(n,u){n&1&&zh$1(0,`doc-dropdown-input-example`)}function e1(n,u){n&1&&zh$1(0,`doc-dropdown-image-example`)}function t1(n,u){n&1&&zh$1(0,`doc-dropdown-loading-example`)}function i1(n,u){n&1&&zh$1(0,`doc-dropdown-error-example`)}function n1(n,u){n&1&&zh$1(0,`doc-dropdown-disabled-example`)}function o1(n,u){n&1&&zh$1(0,`doc-dropdown-scrolling-example`)}function a1(n,u){n&1&&zh$1(0,`doc-dropdown-compact-example`)}function s1(n,u){n&1&&zh$1(0,`doc-dropdown-fluid-example`)}function r1(n,u){n&1&&zh$1(0,`doc-dropdown-menu-direction-example`)}function l1(n,u){n&1&&zh$1(0,`doc-dropdown-multiple-levels-example`)}function d1(n,u){n&1&&zh$1(0,`doc-dropdown-button-group-example`)}function m1(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Dropdown`),Vu(),is$1(6,`p`),zC(7,`A dropdown.`),Vu(),is$1(8,`div`,5),zh$1(9,`i`,6),is$1(10,`div`,7)(11,`p`),zC(12,`A dropdown opens its menu when clicked. To pick a value in a form, use the selection dropdown provided by `),is$1(13,`a`,8),zC(14,`sui-select`),Vu(),zC(15,` instead.`),Vu()()(),jh$1(16,zh,1,0,`ng-template`,9),Vu(),is$1(17,`doc-code-sample`,3)(18,`h3`,4),zC(19,`Inline`),Vu(),is$1(20,`p`),zC(21,`A dropdown can be formatted to appear inline in other content.`),Vu(),jh$1(22,jh,1,0,`ng-template`,9),Vu(),is$1(23,`doc-code-sample`,3)(24,`h3`,4),zC(25,`Pointing`),Vu(),is$1(26,`p`),zC(27,`A dropdown can be formatted so that its menu is pointing.`),Vu(),is$1(28,`div`,5),zh$1(29,`i`,6),is$1(30,`div`,7)(31,`p`),zC(32,`Set `),is$1(33,`span`,10),zC(34,`suiPointing`),Vu(),zC(35,` to enable the pointing arrow, and optionally `),is$1(36,`span`,10),zC(37,`suiPointingDirection`),Vu(),zC(38,` to choose where the arrow sits.`),Vu()()(),jh$1(39,Nh,1,0,`ng-template`,9),Vu(),is$1(40,`doc-code-sample`,3)(41,`h3`,4),zC(42,`Floating`),Vu(),is$1(43,`p`),zC(44,`A dropdown menu can appear to be floating below an element.`),Vu(),jh$1(45,Uh,1,0,`ng-template`,9),Vu(),is$1(46,`doc-code-sample`,3)(47,`h3`,4),zC(48,`Simple`),Vu(),is$1(49,`p`),zC(50,`A simple dropdown can open on hover using only CSS.`),Vu(),jh$1(51,$h,1,0,`ng-template`,9),Vu(),is$1(52,`h2`,2),zC(53,`Content`),Vu(),is$1(54,`doc-code-sample`,3)(55,`h3`,4),zC(56,`Header`),Vu(),is$1(57,`p`),zC(58,`A dropdown menu can contain a header.`),Vu(),jh$1(59,Yh,1,0,`ng-template`,9),Vu(),is$1(60,`doc-code-sample`,3)(61,`h3`,4),zC(62,`Divider`),Vu(),is$1(63,`p`),zC(64,`A dropdown menu can contain dividers to separate related content.`),Vu(),jh$1(65,Gh,1,0,`ng-template`,9),Vu(),is$1(66,`doc-code-sample`,3)(67,`h3`,4),zC(68,`Icon`),Vu(),is$1(69,`p`),zC(70,`A dropdown menu can contain an `),is$1(71,`a`,11),zC(72,`icon`),Vu(),zC(73,`.`),Vu(),jh$1(74,Xh,1,0,`ng-template`,9),Vu(),is$1(75,`doc-code-sample`,3)(76,`h3`,4),zC(77,`Description`),Vu(),is$1(78,`p`),zC(79,`A dropdown menu can contain a description.`),Vu(),is$1(80,`div`,5),zh$1(81,`i`,6),is$1(82,`div`,7)(83,`p`),zC(84,`Using a description may require setting a minimum width on the menu to prevent content overlap.`),Vu()()(),jh$1(85,Jh,1,0,`ng-template`,9),Vu(),is$1(86,`doc-code-sample`,3)(87,`h3`,4),zC(88,`Label`),Vu(),is$1(89,`p`),zC(90,`A dropdown menu can contain a `),is$1(91,`a`,12),zC(92,`label`),Vu(),zC(93,`.`),Vu(),jh$1(94,qh,1,0,`ng-template`,9),Vu(),is$1(95,`doc-code-sample`,3)(96,`h3`,4),zC(97,`Message`),Vu(),is$1(98,`p`),zC(99,`A dropdown menu can contain a `),is$1(100,`a`,13),zC(101,`message`),Vu(),zC(102,`.`),Vu(),jh$1(103,Zh,1,0,`ng-template`,9),Vu(),is$1(104,`doc-code-sample`,3)(105,`h3`,4),zC(106,`Floated Content`),Vu(),is$1(107,`p`),zC(108,`A dropdown menu can contain floated content.`),Vu(),is$1(109,`div`,5),zh$1(110,`i`,6),is$1(111,`div`,7)(112,`p`),zC(113,`Floated content may stack to two lines without manually setting a width or using a fluid dropdown.`),Vu()()(),jh$1(114,Kh,1,0,`ng-template`,9),Vu(),is$1(115,`doc-code-sample`,3)(116,`h3`,4),zC(117,`Input`),Vu(),is$1(118,`p`),zC(119,`A dropdown menu can contain an `),is$1(120,`a`,14),zC(121,`input`),Vu(),zC(122,`.`),Vu(),is$1(123,`div`,5),zh$1(124,`i`,6),is$1(125,`div`,7)(126,`p`),zC(127,`Stop click propagation on the input so that typing or clicking it does not close the menu.`),Vu()()(),jh$1(128,Qh,1,0,`ng-template`,9),Vu(),is$1(129,`doc-code-sample`,3)(130,`h3`,4),zC(131,`Image`),Vu(),is$1(132,`p`),zC(133,`A dropdown menu can contain an `),is$1(134,`a`,15),zC(135,`image`),Vu(),zC(136,`.`),Vu(),jh$1(137,e1,1,0,`ng-template`,9),Vu(),is$1(138,`h2`,2),zC(139,`States`),Vu(),is$1(140,`doc-code-sample`,3)(141,`h3`,4),zC(142,`Loading`),Vu(),is$1(143,`p`),zC(144,`A dropdown can show that it is currently loading data.`),Vu(),jh$1(145,t1,1,0,`ng-template`,9),Vu(),is$1(146,`doc-code-sample`,3)(147,`h3`,4),zC(148,`Error`),Vu(),is$1(149,`p`),zC(150,`An errored dropdown can alert a user to a problem.`),Vu(),jh$1(151,i1,1,0,`ng-template`,9),Vu(),is$1(152,`doc-code-sample`,3)(153,`h3`,4),zC(154,`Disabled`),Vu(),is$1(155,`p`),zC(156,`A disabled dropdown menu or item does not allow user interaction.`),Vu(),jh$1(157,n1,1,0,`ng-template`,9),Vu(),is$1(158,`h2`,2),zC(159,`Variations`),Vu(),is$1(160,`doc-code-sample`,3)(161,`h3`,4),zC(162,`Scrolling`),Vu(),is$1(163,`p`),zC(164,`A dropdown can have its menu scroll.`),Vu(),is$1(165,`div`,5),zh$1(166,`i`,6),is$1(167,`div`,7)(168,`p`),zC(169,`Scrolling dropdowns are incompatible with the usage of sub menus.`),Vu()()(),jh$1(170,o1,1,0,`ng-template`,9),Vu(),is$1(171,`doc-code-sample`,3)(172,`h3`,4),zC(173,`Compact`),Vu(),is$1(174,`p`),zC(175,`A compact dropdown has no minimum width.`),Vu(),jh$1(176,a1,1,0,`ng-template`,9),Vu(),is$1(177,`doc-code-sample`,3)(178,`h3`,4),zC(179,`Fluid`),Vu(),is$1(180,`p`),zC(181,`A dropdown can take the full width of its parent.`),Vu(),jh$1(182,s1,1,0,`ng-template`,9),Vu(),is$1(183,`doc-code-sample`,3)(184,`h3`,4),zC(185,`Menu Direction`),Vu(),is$1(186,`p`),zC(187,`A dropdown menu or sub-menu can specify the direction it should open.`),Vu(),is$1(188,`div`,5),zh$1(189,`i`,6),is$1(190,`div`,7)(191,`p`),zC(192,`Specifying `),is$1(193,`span`,10),zC(194,`left`),Vu(),zC(195,` on a menu makes all child menus open in the same direction implicitly. To have the dropdown icon appear on the left side of a child item, set `),is$1(196,`span`,10),zC(197,`suiDirection`),Vu(),zC(198,` on the item as well.`),Vu()()(),jh$1(199,r1,1,0,`ng-template`,9),Vu(),is$1(200,`h2`,2),zC(201,`Menus`),Vu(),is$1(202,`doc-code-sample`,3)(203,`h3`,4),zC(204,`Multiple Levels`),Vu(),is$1(205,`p`),zC(206,`A dropdown menu can contain multiple levels.`),Vu(),is$1(207,`div`,5),zh$1(208,`i`,6),is$1(209,`div`,7)(210,`p`),zC(211,`Nest a `),is$1(212,`span`,10),zC(213,`suiDropdownMenu`),Vu(),zC(214,` inside a `),is$1(215,`span`,10),zC(216,`suiDropdownMenuItem`),Vu(),zC(217,`. The sub menu opens when the item is hovered.`),Vu()()(),jh$1(218,l1,1,0,`ng-template`,9),Vu(),is$1(219,`h2`,2),zC(220,`Coupling`),Vu(),is$1(221,`doc-code-sample`,3)(222,`h3`,4),zC(223,`Button Group`),Vu(),is$1(224,`p`),zC(225,`A dropdown can be attached to a `),is$1(226,`a`,16),zC(227,`button group`),Vu(),zC(228,`.`),Vu(),jh$1(229,d1,1,0,`ng-template`,9),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetDropdown),KD(14),Gh$1(`templateCode`,o.snippetInline),KD(6),Gh$1(`templateCode`,o.snippetPointing),KD(17),Gh$1(`templateCode`,o.snippetFloating),KD(6),Gh$1(`templateCode`,o.snippetSimple),KD(8),Gh$1(`templateCode`,o.snippetHeader),KD(6),Gh$1(`templateCode`,o.snippetDivider),KD(6),Gh$1(`templateCode`,o.snippetIcon),KD(9),Gh$1(`templateCode`,o.snippetDescription),KD(11),Gh$1(`templateCode`,o.snippetLabel),KD(9),Gh$1(`templateCode`,o.snippetMessage),KD(9),Gh$1(`templateCode`,o.snippetFloated),KD(11),Gh$1(`templateCode`,o.snippetInput),KD(14),Gh$1(`templateCode`,o.snippetImage),KD(11),Gh$1(`templateCode`,o.snippetLoading),KD(6),Gh$1(`templateCode`,o.snippetError),KD(6),Gh$1(`templateCode`,o.snippetDisabled),KD(8),Gh$1(`templateCode`,o.snippetScrolling),KD(11),Gh$1(`templateCode`,o.snippetCompact),KD(6),Gh$1(`templateCode`,o.snippetFluid),KD(6),Gh$1(`templateCode`,o.snippetMenuDirection),KD(19),Gh$1(`templateCode`,o.snippetMultipleLevels),KD(19),Gh$1(`templateCode`,o.snippetButtonGroup)}}function p1(n,u){n&1&&(is$1(0,`div`)(1,`div`,5),zh$1(2,`i`,6),is$1(3,`div`,7)(4,`p`),zC(5,` Import `),is$1(6,`span`,10),zC(7,`SuiDropdownModule`),Vu(),zC(8,` from `),is$1(9,`span`,10),zC(10,`ngx-semantic/modules/dropdown`),Vu(),zC(11,` to use the component and every directive below. Looking for the selection dropdown? See `),is$1(12,`a`,8),zC(13,`Select`),Vu(),zC(14,`. `),Vu()()(),is$1(15,`h2`,2),zC(16,`sui-dropdown`),Vu(),is$1(17,`p`),zC(18,`Selector: `),is$1(19,`span`,10),zC(20,`sui-dropdown, [sui-dropdown]`),Vu(),zC(21,`. Clicking the dropdown toggles its `),is$1(22,`span`,10),zC(23,`suiDropdownMenu`),Vu(),zC(24,`. The dropdown is focusable and does nothing when disabled.`),Vu(),is$1(25,`h4`,4),zC(26,`Properties`),Vu(),is$1(27,`table`,17)(28,`thead`)(29,`tr`)(30,`th`),zC(31,`Property`),Vu(),is$1(32,`th`),zC(33,`Description`),Vu(),is$1(34,`th`),zC(35,`Type`),Vu(),is$1(36,`th`),zC(37,`Default`),Vu()()(),is$1(38,`tbody`)(39,`tr`)(40,`td`),zC(41,`suiPointing`),Vu(),is$1(42,`td`),zC(43,`When true, renders the dropdown menu with a pointing arrow.`),Vu(),is$1(44,`td`)(45,`div`,18),zC(46,` boolean `),Vu()(),is$1(47,`td`)(48,`div`,19),zC(49,` false `),Vu()()(),is$1(50,`tr`)(51,`td`),zC(52,`suiPointingDirection`),Vu(),is$1(53,`td`),zC(54,`Sets where the pointing arrow sits. Use together with `),is$1(55,`span`,10),zC(56,`suiPointing`),Vu(),zC(57,`. Allowed values are `),is$1(58,`span`,10),zC(59,`top left`),Vu(),zC(60,` | `),is$1(61,`span`,10),zC(62,`top right`),Vu(),zC(63,` | `),is$1(64,`span`,10),zC(65,`left`),Vu(),zC(66,` | `),is$1(67,`span`,10),zC(68,`right`),Vu(),zC(69,` | `),is$1(70,`span`,10),zC(71,`bottom left`),Vu(),zC(72,` | `),is$1(73,`span`,10),zC(74,`bottom right`),Vu(),zC(75,` | `),is$1(76,`span`,10),zC(77,`null`),Vu()(),is$1(78,`td`)(79,`div`,18),zC(80,` string `),Vu()(),is$1(81,`td`)(82,`div`,19),zC(83,` null `),Vu()()(),is$1(84,`tr`)(85,`td`),zC(86,`suiFluid`),Vu(),is$1(87,`td`),zC(88,`When true, the dropdown takes the full width of its parent.`),Vu(),is$1(89,`td`)(90,`div`,18),zC(91,` boolean `),Vu()(),is$1(92,`td`)(93,`div`,19),zC(94,` false `),Vu()()(),is$1(95,`tr`)(96,`td`),zC(97,`suiInline`),Vu(),is$1(98,`td`),zC(99,`When true, the dropdown appears inline with surrounding content.`),Vu(),is$1(100,`td`)(101,`div`,18),zC(102,` boolean `),Vu()(),is$1(103,`td`)(104,`div`,19),zC(105,` false `),Vu()()(),is$1(106,`tr`)(107,`td`),zC(108,`suiLoading`),Vu(),is$1(109,`td`),zC(110,`When true, shows that the dropdown is loading data.`),Vu(),is$1(111,`td`)(112,`div`,18),zC(113,` boolean `),Vu()(),is$1(114,`td`)(115,`div`,19),zC(116,` false `),Vu()()(),is$1(117,`tr`)(118,`td`),zC(119,`suiError`),Vu(),is$1(120,`td`),zC(121,`When true, renders the dropdown in an error state.`),Vu(),is$1(122,`td`)(123,`div`,18),zC(124,` boolean `),Vu()(),is$1(125,`td`)(126,`div`,19),zC(127,` false `),Vu()()(),is$1(128,`tr`)(129,`td`),zC(130,`disabled`),Vu(),is$1(131,`td`),zC(132,`When true, the dropdown cannot be opened.`),Vu(),is$1(133,`td`)(134,`div`,18),zC(135,` boolean `),Vu()(),is$1(136,`td`)(137,`div`,19),zC(138,` false `),Vu()()(),is$1(139,`tr`)(140,`td`),zC(141,`suiScrolling`),Vu(),is$1(142,`td`),zC(143,`When true, applies the scrolling style to the dropdown. You can also set `),is$1(144,`span`,10),zC(145,`suiScrolling`),Vu(),zC(146,` on the menu.`),Vu(),is$1(147,`td`)(148,`div`,18),zC(149,` boolean `),Vu()(),is$1(150,`td`)(151,`div`,19),zC(152,` false `),Vu()()(),is$1(153,`tr`)(154,`td`),zC(155,`suiCompact`),Vu(),is$1(156,`td`),zC(157,`When true, removes the minimum width of the dropdown.`),Vu(),is$1(158,`td`)(159,`div`,18),zC(160,` boolean `),Vu()(),is$1(161,`td`)(162,`div`,19),zC(163,` false `),Vu()()(),is$1(164,`tr`)(165,`td`),zC(166,`suiFloating`),Vu(),is$1(167,`td`),zC(168,`When true, the menu appears to float below the element.`),Vu(),is$1(169,`td`)(170,`div`,18),zC(171,` boolean `),Vu()(),is$1(172,`td`)(173,`div`,19),zC(174,` false `),Vu()()(),is$1(175,`tr`)(176,`td`),zC(177,`suiSimple`),Vu(),is$1(178,`td`),zC(179,`When true, the dropdown opens on hover using CSS only.`),Vu(),is$1(180,`td`)(181,`div`,18),zC(182,` boolean `),Vu()(),is$1(183,`td`)(184,`div`,19),zC(185,` false `),Vu()()()()(),is$1(186,`h2`,2),zC(187,`suiDropdownMenu`),Vu(),is$1(188,`p`),zC(189,`Selector: `),is$1(190,`span`,10),zC(191,`[suiDropdownMenu]`),Vu(),zC(192,`. The menu of a dropdown or of a dropdown menu item (sub menu).`),Vu(),is$1(193,`h4`,4),zC(194,`Properties`),Vu(),is$1(195,`table`,17)(196,`thead`)(197,`tr`)(198,`th`),zC(199,`Property`),Vu(),is$1(200,`th`),zC(201,`Description`),Vu(),is$1(202,`th`),zC(203,`Type`),Vu(),is$1(204,`th`),zC(205,`Default`),Vu()()(),is$1(206,`tbody`)(207,`tr`)(208,`td`),zC(209,`suiDirection`),Vu(),is$1(210,`td`),zC(211,`Sets the direction the menu opens. Allowed values are `),is$1(212,`span`,10),zC(213,`left`),Vu(),zC(214,` | `),is$1(215,`span`,10),zC(216,`right`),Vu(),zC(217,` | `),is$1(218,`span`,10),zC(219,`null`),Vu()(),is$1(220,`td`)(221,`div`,18),zC(222,` string `),Vu()(),is$1(223,`td`)(224,`div`,19),zC(225,` null `),Vu()()(),is$1(226,`tr`)(227,`td`),zC(228,`suiScrolling`),Vu(),is$1(229,`td`),zC(230,`When true, the menu scrolls when it has many items.`),Vu(),is$1(231,`td`)(232,`div`,18),zC(233,` boolean `),Vu()(),is$1(234,`td`)(235,`div`,19),zC(236,` false `),Vu()()(),is$1(237,`tr`)(238,`td`),zC(239,`suiIsOpen`),Vu(),is$1(240,`td`),zC(241,`Sets whether the menu is open. This is managed by the parent dropdown or menu item but can be bound to if needed.`),Vu(),is$1(242,`td`)(243,`div`,18),zC(244,` boolean `),Vu()(),is$1(245,`td`)(246,`div`,19),zC(247,` false `),Vu()()()()(),is$1(248,`h2`,2),zC(249,`suiDropdownMenuItem`),Vu(),is$1(250,`p`),zC(251,`Selector: `),is$1(252,`span`,10),zC(253,`[suiDropdownMenuItem]`),Vu(),zC(254,`. An item in a dropdown menu. If it contains a `),is$1(255,`span`,10),zC(256,`suiDropdownMenu`),Vu(),zC(257,`, that sub menu opens while the item is hovered.`),Vu(),is$1(258,`h4`,4),zC(259,`Properties`),Vu(),is$1(260,`table`,17)(261,`thead`)(262,`tr`)(263,`th`),zC(264,`Property`),Vu(),is$1(265,`th`),zC(266,`Description`),Vu(),is$1(267,`th`),zC(268,`Type`),Vu(),is$1(269,`th`),zC(270,`Default`),Vu()()(),is$1(271,`tbody`)(272,`tr`)(273,`td`),zC(274,`suiDirection`),Vu(),is$1(275,`td`),zC(276,`Sets the side the item’s sub menu icon appears on. Allowed values are `),is$1(277,`span`,10),zC(278,`left`),Vu(),zC(279,` | `),is$1(280,`span`,10),zC(281,`right`),Vu(),zC(282,` | `),is$1(283,`span`,10),zC(284,`null`),Vu()(),is$1(285,`td`)(286,`div`,18),zC(287,` string `),Vu()(),is$1(288,`td`)(289,`div`,19),zC(290,` null `),Vu()()(),is$1(291,`tr`)(292,`td`),zC(293,`disabled`),Vu(),is$1(294,`td`),zC(295,`When true, the item does not allow user interaction.`),Vu(),is$1(296,`td`)(297,`div`,18),zC(298,` boolean `),Vu()(),is$1(299,`td`)(300,`div`,19),zC(301,` false `),Vu()()()()(),is$1(302,`h2`,2),zC(303,`suiDropdownMenuHeader`),Vu(),is$1(304,`p`),zC(305,`Selector: `),is$1(306,`span`,10),zC(307,`[suiDropdownMenuHeader]`),Vu(),zC(308,`. A header that groups the items below it.`),Vu(),is$1(309,`h4`,4),zC(310,`Properties`),Vu(),is$1(311,`table`,17)(312,`thead`)(313,`tr`)(314,`th`),zC(315,`Property`),Vu(),is$1(316,`th`),zC(317,`Description`),Vu(),is$1(318,`th`),zC(319,`Type`),Vu(),is$1(320,`th`),zC(321,`Default`),Vu()()(),zh$1(322,`tbody`),is$1(323,`tfoot`,20)(324,`tr`)(325,`th`,21)(326,`div`,22),zC(327,`No properties for this directive`),Vu()()()()(),is$1(328,`h2`,2),zC(329,`suiDropdownMenuDivider`),Vu(),is$1(330,`p`),zC(331,`Selector: `),is$1(332,`span`,10),zC(333,`[suiDropdownMenuDivider]`),Vu(),zC(334,`. A divider that separates related items.`),Vu(),is$1(335,`h4`,4),zC(336,`Properties`),Vu(),is$1(337,`table`,17)(338,`thead`)(339,`tr`)(340,`th`),zC(341,`Property`),Vu(),is$1(342,`th`),zC(343,`Description`),Vu(),is$1(344,`th`),zC(345,`Type`),Vu(),is$1(346,`th`),zC(347,`Default`),Vu()()(),zh$1(348,`tbody`),is$1(349,`tfoot`,20)(350,`tr`)(351,`th`,21)(352,`div`,22),zC(353,`No properties for this directive`),Vu()()()()()())}var jl=(()=>{class n{constructor(o){this.snippetDropdown=qr,this.snippetInline=Zr,this.snippetPointing=Kr,this.snippetFloating=Qr,this.snippetSimple=el,this.snippetHeader=tl,this.snippetDivider=il,this.snippetIcon=nl,this.snippetDescription=ol,this.snippetLabel=al,this.snippetMessage=sl,this.snippetFloated=rl,this.snippetInput=ll,this.snippetImage=dl,this.snippetLoading=ml,this.snippetError=pl,this.snippetDisabled=ul,this.snippetScrolling=cl,this.snippetCompact=hl,this.snippetFluid=gl,this.snippetMenuDirection=fl,this.snippetMultipleLevels=Sl,this.snippetButtonGroup=vl,o.setTitle(`Dropdown | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-dropdown`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Dropdown`,`subHeader`,`A dropdown allows a user to select a value from a series of options`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiIcon`,``],[`sui-icon`,``,`suiIconType`,`info circle`],[`suiMessageContent`,``],[`routerLink`,`/modules/select`],[`docDemo`,``],[`sui-label`,``],[`routerLink`,`/elements/icon`],[`routerLink`,`/elements/label`],[`routerLink`,`/collections/messages`],[`routerLink`,`/elements/input`],[`routerLink`,`/elements/image`],[`routerLink`,`/elements/button`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,m1,230,23,`div`,1)(2,p1,354,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[Qt,wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,we,li,ai,xl,bl,yl,El,Cl,Dl,wl,_l,Tl,Ml,Il,Pl,kl,Fl,Al,Vl,Bl,Ol,Ll,Hl,Wl,Rl,zl],encapsulation:2,changeDetection:1})}}return n})();var Nl=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.flipLeft()"><i sui-icon suiIconType="left long arrow"></i> Left</button>
  <button sui-button (click)="shape.flipUp()"><i sui-icon suiIconType="up long arrow"></i> Up</button>
  <button sui-button (click)="shape.flipDown()"><i sui-icon suiIconType="down long arrow"></i> Down</button>
  <button sui-button (click)="shape.flipRight()"><i sui-icon suiIconType="right long arrow"></i> Right</button>
  <button sui-button (click)="shape.flipOver()">Over</button>
  <button sui-button (click)="shape.flipBack()">Back</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape">
  <sui-shape-side>
    <div sui-segment>
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/steve.jpg">
      <h4 sui-header>
        Steve
        <div suiSubHeader>Steve is a creative professional</div>
      </h4>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div sui-segment>
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
      <h4 sui-header>
        Elliot
        <div suiSubHeader>Elliot is a sound engineer</div>
      </h4>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div sui-segment>
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/stevie.jpg">
      <h4 sui-header>
        Stevie
        <div suiSubHeader>Stevie is a writer</div>
      </h4>
    </div>
  </sui-shape-side>
</sui-shape>
`;var Ul=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.flipLeft()"><i sui-icon suiIconType="left long arrow"></i> Left</button>
  <button sui-button (click)="shape.flipUp()"><i sui-icon suiIconType="up long arrow"></i> Up</button>
  <button sui-button (click)="shape.flipDown()"><i sui-icon suiIconType="down long arrow"></i> Down</button>
  <button sui-button (click)="shape.flipRight()"><i sui-icon suiIconType="right long arrow"></i> Right</button>
  <button sui-button (click)="shape.flipOver()">Over</button>
  <button sui-button (click)="shape.flipBack()">Back</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiCube>
  <sui-shape-side>
    <div class="content">
      <div class="center">1</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">2</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">3</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">4</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">5</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">6</div>
    </div>
  </sui-shape-side>
</sui-shape>
`;var $l=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.flipLeft()"><i sui-icon suiIconType="left long arrow"></i> Left</button>
  <button sui-button (click)="shape.flipUp()"><i sui-icon suiIconType="up long arrow"></i> Up</button>
  <button sui-button (click)="shape.flipDown()"><i sui-icon suiIconType="down long arrow"></i> Down</button>
  <button sui-button (click)="shape.flipRight()"><i sui-icon suiIconType="right long arrow"></i> Right</button>
  <button sui-button (click)="shape.flipOver()">Over</button>
  <button sui-button (click)="shape.flipBack()">Back</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiText>
  <sui-shape-side>
    <h2 sui-header>Hello there!</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>Flip me</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>Shapes can hold text</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>Have a nice day</h2>
  </sui-shape-side>
</sui-shape>
`;var Yl=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.setNextSide('.first'); shape.flipUp()">First</button>
  <button sui-button (click)="shape.setNextSide('.second'); shape.flipUp()">Second</button>
  <button sui-button (click)="shape.setNextSide('.third'); shape.flipUp()">Third</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiText>
  <sui-shape-side class="first">
    <h2 sui-header>First side</h2>
  </sui-shape-side>
  <sui-shape-side class="second">
    <h2 sui-header>Second side</h2>
  </sui-shape-side>
  <sui-shape-side class="third">
    <h2 sui-header>Third side</h2>
  </sui-shape-side>
</sui-shape>
`;var Gl=`<button sui-button
        suiSize="small"
        (click)="shape.flipRight()">Flip Right</button>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiText
           suiWidth="next"
           [suiDuration]="1500">
  <sui-shape-side>
    <h2 sui-header>Short</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>A much longer side of text</h2>
  </sui-shape-side>
</sui-shape>
`;var _t=(()=>{class n{constructor(){this.element=g(Ie),this.styleActive=!1,this.styleHidden=!1,this.styleAnimating=!1,this.inlineStyles={},this.sideClass=!0}get nativeElement(){return this.element.nativeElement}clearInlineStyles(){this.inlineStyles={}}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){return OI({type:n,selectors:[[`sui-shape-side`]],hostVars:10,hostBindings:function(s,p){s&2&&(RC(p.inlineStyles),ho$1(`active`,p.styleActive)(`hidden`,p.styleHidden)(`animating`,p.styleAnimating)(`side`,p.sideClass))},exportAs:[`suiShapeSide`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(s,p){s&1&&(gC(),mC(0))},encapsulation:2,changeDetection:1})})()}}return n})();function $e(n){let u=n.getBoundingClientRect(),o=getComputedStyle(n);return u.height+parseFloat(o.marginTop)+parseFloat(o.marginBottom)}function xe(n){let u=n.getBoundingClientRect(),o=getComputedStyle(n);return u.width+parseFloat(o.marginLeft)+parseFloat(o.marginRight)}function S1(){let n=document.createElement(`div`),u={transition:`transitionend`,OTransition:`oTransitionEnd`,MozTransition:`transitionend`,WebkitTransition:`webkitTransitionEnd`};for(let o of Object.keys(u))if(n.style[o]!==void 0)return u[o];return`transitionend`}var Tt=(()=>{class n{constructor(){this.cdr=g(Pg$1),this.zone=g(G),this.suiDuration=null,this.suiWidth=`initial`,this.suiHeight=`initial`,this.suiJitter=0,this.suiAllowRepeats=!1,this.suiCube=!1,this.suiText=!1,this.suiBeforeChange=new nt$1,this.suiOnChange=new nt$1,this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={},this.transitionEnd=S1(),this.activeSide=null,this.nextSide=null,this.manualNextIndex=null,this.queue=[],this.sidesChangeSub=null}ngAfterContentInit(){this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.sidesChangeSub=this.sideList.changes.subscribe(()=>{this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.cdr.markForCheck()})}ngOnDestroy(){this.sidesChangeSub?.unsubscribe()}flipUp(){this.runFlip(`flip up`,()=>{this.setStageSize(),this.stageAbove(),this.animate(this.getTransformUp())})}flipDown(){this.runFlip(`flip down`,()=>{this.setStageSize(),this.stageBelow(),this.animate(this.getTransformDown())})}flipLeft(){this.runFlip(`flip left`,()=>{this.setStageSize(),this.stageLeft(),this.animate(this.getTransformLeft())})}flipRight(){this.runFlip(`flip right`,()=>{this.setStageSize(),this.stageRight(),this.animate(this.getTransformRight())})}flipOver(){this.runFlip(`flip over`,()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformOver())})}flipBack(){this.runFlip(`flip back`,()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformBack())})}setNextSide(o){let a=this.sideList.toArray(),s=a.filter(p=>p.nativeElement.matches(o));if(s.length===0){this.setDefaultSide();return}this.nextSide=s[0],this.manualNextIndex=a.indexOf(this.nextSide)}isAnimating(){return this.animating}reset(){this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={};for(let o of this.sideList.toArray())o.styleHidden=!1,o.styleAnimating=!1,o.clearInlineStyles();this.cdr.markForCheck()}repaint(){let o=this.sidesEl?.nativeElement;o&&o.offsetWidth}refresh(){this.setDefaultSide()}flip(o){switch(o){case`flip up`:this.flipUp();break;case`flip down`:this.flipDown();break;case`flip left`:this.flipLeft();break;case`flip right`:this.flipRight();break;case`flip over`:this.flipOver();break;case`flip back`:this.flipBack()}}runFlip(o,a){this.sideList.length<2||(this.setDefaultSide(),this.activeSide&&this.nextSide&&(this.isComplete()&&!this.animating&&!this.suiAllowRepeats||(this.animating?this.queue.push(o):a())))}isComplete(){return this.activeSide!==null&&this.nextSide!==null&&this.activeSide===this.nextSide}ensureFirstSideActive(){let o=this.sideList.toArray();o.length!==0&&(o.some(a=>a.styleActive)||(o[0].styleActive=!0))}setDefaultSide(){let o=this.sideList.toArray();if(o.length===0){this.activeSide=null,this.nextSide=null;return}let a=o.findIndex(s=>s.styleActive);if(this.activeSide=a>=0?o[a]:o[0],this.manualNextIndex!==null&&this.manualNextIndex>=0&&this.manualNextIndex<o.length)this.nextSide=o[this.manualNextIndex];else{let s=o.indexOf(this.activeSide);this.nextSide=s<o.length-1?o[s+1]:o[0]}}applyDurationToSides(){if(this.suiDuration===null||this.suiDuration===void 0)return;let o=`${this.suiDuration}ms`,a={transitionDuration:o,WebkitTransitionDuration:o,MozTransitionDuration:o,OTransitionDuration:o};this.sidesInlineStyle=w$1(w$1({},this.sidesInlineStyle),a);for(let s of this.sideList.toArray())s.inlineStyles=w$1(w$1({},s.inlineStyles),a)}setStageSize(){if(!this.activeSide||!this.nextSide)return;let o=this.shapeEl.nativeElement,a=this.suiWidth,s=this.suiHeight,p,m;a===`next`?p=xe(this.nextSide.nativeElement):a===`initial`?p=o.offsetWidth:p=a,s===`next`?m=$e(this.nextSide.nativeElement):s===`initial`?m=o.offsetHeight:m=s,this.shapeInlineStyle=x$1(w$1({},this.shapeInlineStyle),{width:`${p+this.suiJitter}px`,height:`${m+this.suiJitter}px`})}animate(o){if(!this.activeSide||!this.nextSide)return;let a=this.activeSide,s=this.nextSide;this.suiBeforeChange.emit(s);let p=this.sidesEl.nativeElement,m=v=>{if(v.target!==p){p.addEventListener(this.transitionEnd,m,{once:!0});return}this.zone.run(()=>{this.finishAnimation()})};setTimeout(()=>{this.zone.run(()=>{this.animating=!0,p.addEventListener(this.transitionEnd,m,{once:!0}),this.sidesInlineStyle=w$1(w$1({},this.sidesInlineStyle),o),a.styleHidden=!0,this.cdr.markForCheck()})})}finishAnimation(){this.reset(),this.setActive(),this.processQueue(),this.cdr.markForCheck()}setActive(){let o=this.sideList.toArray();if(this.nextSide){for(let a of o)a.styleActive=!1;this.nextSide.styleActive=!0,this.suiOnChange.emit(this.nextSide),this.manualNextIndex=null,this.setDefaultSide()}}processQueue(){let o=this.queue.shift();o&&this.flip(o)}getTransformUp(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateY(${-($e(o)-$e(a))/2}px) translateZ(${-$e(o)/2}px) rotateX(-90deg)`}}getTransformDown(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateY(${-($e(o)-$e(a))/2}px) translateZ(${-$e(o)/2}px) rotateX(90deg)`}}getTransformLeft(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) translateZ(${-xe(o)/2}px) rotateY(90deg)`}}getTransformRight(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) translateZ(${-xe(o)/2}px) rotateY(-90deg)`}}getTransformOver(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) rotateY(180deg)`}}getTransformBack(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) rotateY(-180deg)`}}stageAbove(){let o=this.activeSide,a=this.nextSide,s=$e(o.nativeElement),p=$e(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{top:`${m}px`,transform:`rotateX(90deg) translateZ(${O}px)`})}stageBelow(){let o=this.activeSide,a=this.nextSide,s=$e(o.nativeElement),p=$e(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{top:`${m}px`,transform:`rotateX(-90deg) translateZ(${O}px)`})}stageLeft(){let o=this.activeSide,a=this.nextSide,s=xe(o.nativeElement),p=xe(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{left:`${m}px`,transform:`rotateY(-90deg) translateZ(${O}px)`})}stageRight(){let o=this.activeSide,a=this.nextSide,s=xe(o.nativeElement),p=xe(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{left:`${m}px`,transform:`rotateY(90deg) translateZ(${O}px)`})}stageBehind(){let o=this.activeSide,a=this.nextSide,m=(xe(o.nativeElement)-xe(a.nativeElement))/2;o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{left:`${m}px`,transform:`rotateY(-180deg)`})}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){let o=[`shapeEl`],a=[`sidesEl`];return OI({type:n,selectors:[[`sui-shape`]],contentQueries:function(m,v,O){if(m&1&&eg(O,_t,4),m&2){let ie;vC(ie=DC())&&(v.sideList=ie)}},viewQuery:function(m,v){if(m&1&&tg(o,7)(a,7),m&2){let O;vC(O=DC())&&(v.shapeEl=O.first),vC(O=DC())&&(v.sidesEl=O.first)}},inputs:{suiDuration:`suiDuration`,suiWidth:`suiWidth`,suiHeight:`suiHeight`,suiJitter:`suiJitter`,suiAllowRepeats:`suiAllowRepeats`,suiCube:`suiCube`,suiText:`suiText`},outputs:{suiBeforeChange:`suiBeforeChange`,suiOnChange:`suiOnChange`},exportAs:[`suiShape`],ngContentSelectors:[`*`],decls:5,vars:8,consts:[[`shapeEl`,``],[`sidesEl`,``],[1,`ui`,`shape`,3,`ngStyle`],[1,`sides`,3,`ngStyle`]],template:function(m,v){m&1&&(gC(),is$1(0,`div`,2,0)(2,`div`,3,1),mC(4),Vu()()),m&2&&(ho$1(`animating`,v.animating)(`cube`,v.suiCube)(`text`,v.suiText),Gh$1(`ngStyle`,v.shapeInlineStyle),KD(2),Gh$1(`ngStyle`,v.sidesInlineStyle))},dependencies:[sl$1,zw],encapsulation:2,changeDetection:1})})()}}return uS([ve()],n.prototype,`suiAllowRepeats`,void 0),uS([ve()],n.prototype,`suiCube`,void 0),uS([ve()],n.prototype,`suiText`,void 0),n})();var Xl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Tt]})}}return n})();var Jl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-shape-shape-example`]],standalone:!1,decls:41,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`left long arrow`],[`sui-icon`,``,`suiIconType`,`up long arrow`],[`sui-icon`,``,`suiIconType`,`down long arrow`],[`sui-icon`,``,`suiIconType`,`right long arrow`],[`sui-divider`,``,`suiHidden`,``],[`sui-segment`,``],[`sui-image`,``,`src`,`https://semantic-ui.com/images/avatar/large/steve.jpg`],[`sui-header`,``],[`suiSubHeader`,``],[`sui-image`,``,`src`,`https://semantic-ui.com/images/avatar/large/elliot.jpg`],[`sui-image`,``,`src`,`https://semantic-ui.com/images/avatar/large/stevie.jpg`]],template:function(a,s){if(a&1){let p=dC();is$1(0,`div`,1)(1,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipLeft())}),zh$1(2,`i`,3),zC(3,` Left`),Vu(),is$1(4,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipUp())}),zh$1(5,`i`,4),zC(6,` Up`),Vu(),is$1(7,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipDown())}),zh$1(8,`i`,5),zC(9,` Down`),Vu(),is$1(10,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipRight())}),zh$1(11,`i`,6),zC(12,` Right`),Vu(),is$1(13,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipOver())}),zC(14,`Over`),Vu(),is$1(15,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipBack())}),zC(16,`Back`),Vu()(),zh$1(17,`div`,7),is$1(18,`sui-shape`,null,0)(20,`sui-shape-side`)(21,`div`,8),zh$1(22,`img`,9),is$1(23,`h4`,10),zC(24,` Steve `),is$1(25,`div`,11),zC(26,`Steve is a creative professional`),Vu()()()(),is$1(27,`sui-shape-side`)(28,`div`,8),zh$1(29,`img`,12),is$1(30,`h4`,10),zC(31,` Elliot `),is$1(32,`div`,11),zC(33,`Elliot is a sound engineer`),Vu()()()(),is$1(34,`sui-shape-side`)(35,`div`,8),zh$1(36,`img`,13),is$1(37,`h4`,10),zC(38,` Stevie `),is$1(39,`div`,11),zC(40,`Stevie is a writer`),Vu()()()()()}},dependencies:[Ws$1,Qs$1,Ii,Di,we,_i,z,ze,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var ql=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-shape-cube-example`]],standalone:!1,decls:44,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`left long arrow`],[`sui-icon`,``,`suiIconType`,`up long arrow`],[`sui-icon`,``,`suiIconType`,`down long arrow`],[`sui-icon`,``,`suiIconType`,`right long arrow`],[`sui-divider`,``,`suiHidden`,``],[`suiCube`,``],[1,`content`],[1,`center`]],template:function(a,s){if(a&1){let p=dC();is$1(0,`div`,1)(1,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipLeft())}),zh$1(2,`i`,3),zC(3,` Left`),Vu(),is$1(4,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipUp())}),zh$1(5,`i`,4),zC(6,` Up`),Vu(),is$1(7,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipDown())}),zh$1(8,`i`,5),zC(9,` Down`),Vu(),is$1(10,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipRight())}),zh$1(11,`i`,6),zC(12,` Right`),Vu(),is$1(13,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipOver())}),zC(14,`Over`),Vu(),is$1(15,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipBack())}),zC(16,`Back`),Vu()(),zh$1(17,`div`,7),is$1(18,`sui-shape`,8,0)(20,`sui-shape-side`)(21,`div`,9)(22,`div`,10),zC(23,`1`),Vu()()(),is$1(24,`sui-shape-side`)(25,`div`,9)(26,`div`,10),zC(27,`2`),Vu()()(),is$1(28,`sui-shape-side`)(29,`div`,9)(30,`div`,10),zC(31,`3`),Vu()()(),is$1(32,`sui-shape-side`)(33,`div`,9)(34,`div`,10),zC(35,`4`),Vu()()(),is$1(36,`sui-shape-side`)(37,`div`,9)(38,`div`,10),zC(39,`5`),Vu()()(),is$1(40,`sui-shape-side`)(41,`div`,9)(42,`div`,10),zC(43,`6`),Vu()()()()}},dependencies:[Ii,Di,we,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var Zl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-shape-text-example`]],standalone:!1,decls:32,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`left long arrow`],[`sui-icon`,``,`suiIconType`,`up long arrow`],[`sui-icon`,``,`suiIconType`,`down long arrow`],[`sui-icon`,``,`suiIconType`,`right long arrow`],[`sui-divider`,``,`suiHidden`,``],[`suiText`,``],[`sui-header`,``]],template:function(a,s){if(a&1){let p=dC();is$1(0,`div`,1)(1,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipLeft())}),zh$1(2,`i`,3),zC(3,` Left`),Vu(),is$1(4,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipUp())}),zh$1(5,`i`,4),zC(6,` Up`),Vu(),is$1(7,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipDown())}),zh$1(8,`i`,5),zC(9,` Down`),Vu(),is$1(10,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipRight())}),zh$1(11,`i`,6),zC(12,` Right`),Vu(),is$1(13,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipOver())}),zC(14,`Over`),Vu(),is$1(15,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(19);return jd$1(v.flipBack())}),zC(16,`Back`),Vu()(),zh$1(17,`div`,7),is$1(18,`sui-shape`,8,0)(20,`sui-shape-side`)(21,`h2`,9),zC(22,`Hello there!`),Vu()(),is$1(23,`sui-shape-side`)(24,`h2`,9),zC(25,`Flip me`),Vu()(),is$1(26,`sui-shape-side`)(27,`h2`,9),zC(28,`Shapes can hold text`),Vu()(),is$1(29,`sui-shape-side`)(30,`h2`,9),zC(31,`Have a nice day`),Vu()()()}},dependencies:[Ws$1,Ii,Di,we,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var Kl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-shape-next-side-example`]],standalone:!1,decls:19,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiText`,``],[1,`first`],[`sui-header`,``],[1,`second`],[1,`third`]],template:function(a,s){if(a&1){let p=dC();is$1(0,`div`,1)(1,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(9);return v.setNextSide(`.first`),jd$1(v.flipUp())}),zC(2,`First`),Vu(),is$1(3,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(9);return v.setNextSide(`.second`),jd$1(v.flipUp())}),zC(4,`Second`),Vu(),is$1(5,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(9);return v.setNextSide(`.third`),jd$1(v.flipUp())}),zC(6,`Third`),Vu()(),zh$1(7,`div`,3),is$1(8,`sui-shape`,4,0)(10,`sui-shape-side`,5)(11,`h2`,6),zC(12,`First side`),Vu()(),is$1(13,`sui-shape-side`,7)(14,`h2`,6),zC(15,`Second side`),Vu()(),is$1(16,`sui-shape-side`,8)(17,`h2`,6),zC(18,`Third side`),Vu()()()}},dependencies:[Ws$1,Ii,Di,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var Ql=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-shape-settings-example`]],standalone:!1,decls:11,vars:1,consts:[[`shape`,`suiShape`],[`sui-button`,``,`suiSize`,`small`,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiText`,``,`suiWidth`,`next`,3,`suiDuration`],[`sui-header`,``]],template:function(a,s){if(a&1){let p=dC();is$1(0,`button`,1),Kh$1(`click`,function(){Pd$1(p);let v=EC(4);return jd$1(v.flipRight())}),zC(1,`Flip Right`),Vu(),zh$1(2,`div`,2),is$1(3,`sui-shape`,3,0)(5,`sui-shape-side`)(6,`h2`,4),zC(7,`Short`),Vu()(),is$1(8,`sui-shape-side`)(9,`h2`,4),zC(10,`A much longer side of text`),Vu()()()}a&2&&(KD(3),Gh$1(`suiDuration`,1500))},dependencies:[Ws$1,Ii,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();function b1(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-shape-shape-example`),Vu())}function y1(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-shape-cube-example`),Vu())}function E1(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-shape-text-example`),Vu())}function C1(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-shape-next-side-example`),Vu())}function D1(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-shape-settings-example`),Vu())}function w1(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Shape`),Vu(),is$1(6,`p`),zC(7,`A shape can contain any content on each of its sides`),Vu(),is$1(8,`div`,5),zC(9,` Get a reference to the shape with `),is$1(10,`code`),zC(11,`#shape="suiShape"`),Vu(),zC(12,` to call its flip methods. `),Vu(),jh$1(13,b1,2,0,`ng-template`,6),Vu(),is$1(14,`doc-code-sample`,3)(15,`h3`,4),zC(16,`Cube`),Vu(),is$1(17,`p`),zC(18,`A shape can be the size of a cube`),Vu(),jh$1(19,y1,2,0,`ng-template`,6),Vu(),is$1(20,`doc-code-sample`,3)(21,`h3`,4),zC(22,`Text`),Vu(),is$1(23,`p`),zC(24,`A shape can be formatted for text content`),Vu(),jh$1(25,E1,2,0,`ng-template`,6),Vu(),zh$1(26,`br`),is$1(27,`h2`,2),zC(28,`Content`),Vu(),is$1(29,`doc-code-sample`,3)(30,`h3`,4),zC(31,`Side`),Vu(),is$1(32,`p`),zC(33,`A shape displays one side at a time; you can choose the next side before flipping`),Vu(),is$1(34,`div`,5)(35,`code`),zC(36,`setNextSide`),Vu(),zC(37,` takes a CSS selector that is matched against each side. `),Vu(),jh$1(38,C1,2,0,`ng-template`,6),Vu(),zh$1(39,`br`),is$1(40,`h2`,2),zC(41,`Settings`),Vu(),is$1(42,`doc-code-sample`,3)(43,`h3`,4),zC(44,`Duration and Size`),Vu(),is$1(45,`p`),zC(46,`A shape can change its animation duration, and resize to fit the next side while animating`),Vu(),jh$1(47,D1,2,0,`ng-template`,6),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetShape),KD(11),Gh$1(`templateCode`,o.snippetCube),KD(6),Gh$1(`templateCode`,o.snippetText),KD(9),Gh$1(`templateCode`,o.snippetNextSide),KD(13),Gh$1(`templateCode`,o.snippetSettings)}}function _1(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-shape`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,` suiCube `),Vu(),is$1(20,`td`),zC(21,` Format the shape as a cube `),Vu(),is$1(22,`td`)(23,`div`,9),zC(24,` boolean `),Vu()(),is$1(25,`td`)(26,`div`,10),zC(27,` false `),Vu()()(),is$1(28,`tr`)(29,`td`),zC(30,` suiText `),Vu(),is$1(31,`td`),zC(32,` Format the shape for text content `),Vu(),is$1(33,`td`)(34,`div`,9),zC(35,` boolean `),Vu()(),is$1(36,`td`)(37,`div`,10),zC(38,` false `),Vu()()(),is$1(39,`tr`)(40,`td`),zC(41,` suiDuration `),Vu(),is$1(42,`td`),zC(43,` Animation duration in milliseconds. Uses the Semantic UI CSS duration when not set `),Vu(),is$1(44,`td`)(45,`div`,9),zC(46,` number `),Vu()(),is$1(47,`td`)(48,`div`,10),zC(49,` null `),Vu()()(),is$1(50,`tr`)(51,`td`),zC(52,` suiWidth `),Vu(),is$1(53,`td`),zC(54,` Width of the shape while animating: the initial width, the next side's width or a pixel value. Allowed values are `),is$1(55,`span`,11),zC(56,`'initial'`),Vu(),zC(57,` | `),is$1(58,`span`,11),zC(59,`'next'`),Vu(),zC(60,` | `),is$1(61,`span`,11),zC(62,`number`),Vu()(),is$1(63,`td`)(64,`div`,9),zC(65,` string | number `),Vu()(),is$1(66,`td`)(67,`div`,10),zC(68,` 'initial' `),Vu()()(),is$1(69,`tr`)(70,`td`),zC(71,` suiHeight `),Vu(),is$1(72,`td`),zC(73,` Height of the shape while animating: the initial height, the next side's height or a pixel value. Allowed values are `),is$1(74,`span`,11),zC(75,`'initial'`),Vu(),zC(76,` | `),is$1(77,`span`,11),zC(78,`'next'`),Vu(),zC(79,` | `),is$1(80,`span`,11),zC(81,`number`),Vu()(),is$1(82,`td`)(83,`div`,9),zC(84,` string | number `),Vu()(),is$1(85,`td`)(86,`div`,10),zC(87,` 'initial' `),Vu()()(),is$1(88,`tr`)(89,`td`),zC(90,` suiJitter `),Vu(),is$1(91,`td`),zC(92,` Pixels added to the stage size to avoid rounding issues `),Vu(),is$1(93,`td`)(94,`div`,9),zC(95,` number `),Vu()(),is$1(96,`td`)(97,`div`,10),zC(98,` 0 `),Vu()()(),is$1(99,`tr`)(100,`td`),zC(101,` suiAllowRepeats `),Vu(),is$1(102,`td`),zC(103,` Allow flipping to the side that is already visible `),Vu(),is$1(104,`td`)(105,`div`,9),zC(106,` boolean `),Vu()(),is$1(107,`td`)(108,`div`,10),zC(109,` false `),Vu()()()()(),is$1(110,`h4`,4),zC(111,`Events`),Vu(),is$1(112,`table`,8)(113,`thead`)(114,`tr`)(115,`th`),zC(116,`Event`),Vu(),is$1(117,`th`),zC(118,`Description`),Vu(),is$1(119,`th`),zC(120,`Type`),Vu()()(),is$1(121,`tbody`)(122,`tr`)(123,`td`),zC(124,` suiBeforeChange `),Vu(),is$1(125,`td`),zC(126,` Emitted with the next side before the shape starts animating `),Vu(),is$1(127,`td`)(128,`div`,9),zC(129,` EventEmitter<SuiShapeSideComponent> `),Vu()()(),is$1(130,`tr`)(131,`td`),zC(132,` suiOnChange `),Vu(),is$1(133,`td`),zC(134,` Emitted with the new active side once the animation completes `),Vu(),is$1(135,`td`)(136,`div`,9),zC(137,` EventEmitter<SuiShapeSideComponent> `),Vu()()()()(),is$1(138,`h4`,4),zC(139,`Methods`),Vu(),is$1(140,`table`,8)(141,`thead`)(142,`tr`)(143,`th`),zC(144,`Method`),Vu(),is$1(145,`th`),zC(146,`Description`),Vu()()(),is$1(147,`tbody`)(148,`tr`)(149,`td`),zC(150,` flipUp() `),Vu(),is$1(151,`td`),zC(152,` Flips the shape upward `),Vu()(),is$1(153,`tr`)(154,`td`),zC(155,` flipDown() `),Vu(),is$1(156,`td`),zC(157,` Flips the shape downward `),Vu()(),is$1(158,`tr`)(159,`td`),zC(160,` flipLeft() `),Vu(),is$1(161,`td`),zC(162,` Flips the shape to the left `),Vu()(),is$1(163,`tr`)(164,`td`),zC(165,` flipRight() `),Vu(),is$1(166,`td`),zC(167,` Flips the shape to the right `),Vu()(),is$1(168,`tr`)(169,`td`),zC(170,` flipOver() `),Vu(),is$1(171,`td`),zC(172,` Flips the shape over clock-wise `),Vu()(),is$1(173,`tr`)(174,`td`),zC(175,` flipBack() `),Vu(),is$1(176,`td`),zC(177,` Flips the shape back counter-clockwise `),Vu()(),is$1(178,`tr`)(179,`td`),zC(180,` flip(behavior) `),Vu(),is$1(181,`td`),zC(182,` Runs a named flip such as `),is$1(183,`code`),zC(184,`'flip up'`),Vu()()(),is$1(185,`tr`)(186,`td`),zC(187,` setNextSide(selector) `),Vu(),is$1(188,`td`),zC(189,` Sets the side to show on the next flip `),Vu()(),is$1(190,`tr`)(191,`td`),zC(192,` isAnimating() `),Vu(),is$1(193,`td`),zC(194,` Returns whether the shape is animating `),Vu()(),is$1(195,`tr`)(196,`td`),zC(197,` reset() `),Vu(),is$1(198,`td`),zC(199,` Removes all inline animation styles `),Vu()(),is$1(200,`tr`)(201,`td`),zC(202,` repaint() `),Vu(),is$1(203,`td`),zC(204,` Forces the browser to repaint the shape `),Vu()(),is$1(205,`tr`)(206,`td`),zC(207,` refresh() `),Vu(),is$1(208,`td`),zC(209,` Re-reads the sides, e.g. after changing them `),Vu()()()()())}var ed=(()=>{class n{constructor(o){this.snippetShape=Nl,this.snippetCube=Ul,this.snippetText=$l,this.snippetNextSide=Yl,this.snippetSettings=Gl,o.setTitle(`Shape | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-shape`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Shape`,`subHeader`,`A shape is a three dimensional object displayed on a two dimensional plane`,`semanticUrl`,`https://semantic-ui.com/modules/shape.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[1,`shape-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[`sui-label`,``]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,w1,48,5,`div`,1)(2,_1,210,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li,Jl,ql,Zl,Kl,Ql],styles:[`[_nghost-%COMP%]     .shape-demo .ui.shape .side>.ui.segment{width:15rem;margin:0}`],changeDetection:1})}}return n})();var td=`<div sui-menu
     suiAttached="top">
  <a suiMenuItem
     (click)="visible = !visible">
    <i sui-icon suiIconType="sidebar"></i>
    Menu
  </a>
</div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiIcon="labeled icon"
       suiSidebarWidth="thin"
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var id=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var nd=`<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiSidebarWidth="thin"
       [visible]="true">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var od=`<div sui-menu
     suiAttached="top">
  <a suiMenuItem
     (click)="visible = !visible">
    <i sui-icon suiIconType="sidebar"></i>
    Menu
  </a>
</div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher
      suiDimmable>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var ad=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var sd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="show('left')">Left</button>
  <button sui-button (click)="show('right')">Right</button>
  <button sui-button (click)="show('top')">Top</button>
  <button sui-button (click)="show('bottom')">Bottom</button>
</div>
<div sui-divider suiHidden></div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       [suiVertical]="isVertical"
       [suiSidebarPosition]="direction"
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var rd=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var ld=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="width = 'very thin'; visible = true">Very Thin</button>
  <button sui-button (click)="width = 'thin'; visible = true">Thin</button>
  <button sui-button (click)="width = null; visible = true">Default</button>
  <button sui-button (click)="width = 'wide'; visible = true">Wide</button>
  <button sui-button (click)="width = 'very wide'; visible = true">Very Wide</button>
</div>
<div sui-divider suiHidden></div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       [suiSidebarWidth]="width"
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var dd=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var md=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="show('left', 'overlay')">Overlay</button>
  <button sui-button (click)="show('left', 'push')">Push</button>
  <button sui-button (click)="show('left', 'scale down')">Scale Down</button>
  <button sui-button (click)="show('left', 'uncover')">Uncover</button>
  <button sui-button (click)="show('left', 'slide along')">Slide Along</button>
  <button sui-button (click)="show('left', 'slide out')">Slide Out</button>
</div>
<div sui-divider suiHidden></div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiSidebarWidth="thin"
       [suiSidebarAnimation]="animation"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var pd=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var ud=`<sui-sidebar-container>
  <div sui-sidebar
       sui-menu
       suiVertical
       suiInverted
       [(visible)]="visible">
    <a suiMenuItem>Item 1</a>
    <a suiMenuItem>Item 2</a>
  </div>
  <sui-sidebar-pusher>
    <button sui-button
            (click)="visible = !visible">Toggle Sidebar</button>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var cd=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var lt=class{constructor(){this.visible=!1,this.direction=`left`,this.animation=`overlay`,this.width=null}show(u,o=`overlay`){this.direction=u,this.animation=o,this.visible=!0}get isVertical(){return this.direction===`left`||this.direction===`right`}};var hd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-sidebar-example`]],standalone:!1,features:[uo$1],decls:21,vars:1,consts:[[`sui-menu`,``,`suiAttached`,`top`],[`suiMenuItem`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`sidebar`],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiIcon`,`labeled icon`,`suiSidebarWidth`,`thin`,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`a`,1),Kh$1(`click`,function(){return s.visible=!s.visible}),zh$1(2,`i`,2),zC(3,` Menu `),Vu()(),is$1(4,`sui-sidebar-container`,3)(5,`div`,4),Dg(`visibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),is$1(6,`a`,5),zh$1(7,`i`,6),zC(8,` Home`),Vu(),is$1(9,`a`,5),zh$1(10,`i`,7),zC(11,` Topics`),Vu(),is$1(12,`a`,5),zh$1(13,`i`,8),zC(14,` Friends`),Vu()(),is$1(15,`sui-sidebar-pusher`)(16,`div`,9)(17,`h3`,10),zC(18,`Application Content`),Vu(),zh$1(19,`doc-wireframe`,11)(20,`doc-wireframe`,11),Vu()()()),a&2&&(KD(5),vg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,we,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var gd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-visible-example`]],standalone:!1,features:[uo$1],decls:17,vars:1,consts:[[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarWidth`,`thin`,3,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(is$1(0,`sui-sidebar-container`,0)(1,`div`,1)(2,`a`,2),zh$1(3,`i`,3),zC(4,` Home`),Vu(),is$1(5,`a`,2),zh$1(6,`i`,4),zC(7,` Topics`),Vu(),is$1(8,`a`,2),zh$1(9,`i`,5),zC(10,` Friends`),Vu()(),is$1(11,`sui-sidebar-pusher`)(12,`div`,6)(13,`h3`,7),zC(14,`Application Content`),Vu(),zh$1(15,`doc-wireframe`,8)(16,`doc-wireframe`,8),Vu()()()),a&2&&(KD(),Gh$1(`visible`,!0))},dependencies:[Dr$1,Ws$1,we,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var fd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-dimmed-example`]],standalone:!1,features:[uo$1],decls:21,vars:1,consts:[[`sui-menu`,``,`suiAttached`,`top`],[`suiMenuItem`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`sidebar`],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`suiDimmable`,``],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`a`,1),Kh$1(`click`,function(){return s.visible=!s.visible}),zh$1(2,`i`,2),zC(3,` Menu `),Vu()(),is$1(4,`sui-sidebar-container`,3)(5,`div`,4),Dg(`visibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),is$1(6,`a`,5),zh$1(7,`i`,6),zC(8,` Home`),Vu(),is$1(9,`a`,5),zh$1(10,`i`,7),zC(11,` Topics`),Vu(),is$1(12,`a`,5),zh$1(13,`i`,8),zC(14,` Friends`),Vu()(),is$1(15,`sui-sidebar-pusher`,9)(16,`div`,10)(17,`h3`,11),zC(18,`Application Content`),Vu(),zh$1(19,`doc-wireframe`,12)(20,`doc-wireframe`,12),Vu()()()),a&2&&(KD(5),vg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,we,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Sd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-direction-example`]],standalone:!1,features:[uo$1],decls:27,vars:3,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`suiVertical`,`suiSidebarPosition`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.show(`left`)}),zC(2,`Left`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.show(`right`)}),zC(4,`Right`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.show(`top`)}),zC(6,`Top`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.show(`bottom`)}),zC(8,`Bottom`),Vu()(),zh$1(9,`div`,2),is$1(10,`sui-sidebar-container`,3)(11,`div`,4),Dg(`visibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),is$1(12,`a`,5),zh$1(13,`i`,6),zC(14,` Home`),Vu(),is$1(15,`a`,5),zh$1(16,`i`,7),zC(17,` Topics`),Vu(),is$1(18,`a`,5),zh$1(19,`i`,8),zC(20,` Friends`),Vu()(),is$1(21,`sui-sidebar-pusher`)(22,`div`,9)(23,`h3`,10),zC(24,`Application Content`),Vu(),zh$1(25,`doc-wireframe`,11)(26,`doc-wireframe`,11),Vu()()()),a&2&&(KD(11),Gh$1(`suiVertical`,s.isVertical)(`suiSidebarPosition`,s.direction),vg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,Ii,Di,we,_i,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var vd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-width-example`]],standalone:!1,features:[uo$1],decls:29,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`suiSidebarWidth`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.width=`very thin`,s.visible=!0}),zC(2,`Very Thin`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.width=`thin`,s.visible=!0}),zC(4,`Thin`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.width=null,s.visible=!0}),zC(6,`Default`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.width=`wide`,s.visible=!0}),zC(8,`Wide`),Vu(),is$1(9,`button`,1),Kh$1(`click`,function(){return s.width=`very wide`,s.visible=!0}),zC(10,`Very Wide`),Vu()(),zh$1(11,`div`,2),is$1(12,`sui-sidebar-container`,3)(13,`div`,4),Dg(`visibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),is$1(14,`a`,5),zh$1(15,`i`,6),zC(16,` Home`),Vu(),is$1(17,`a`,5),zh$1(18,`i`,7),zC(19,` Topics`),Vu(),is$1(20,`a`,5),zh$1(21,`i`,8),zC(22,` Friends`),Vu()(),is$1(23,`sui-sidebar-pusher`)(24,`div`,9)(25,`h3`,10),zC(26,`Application Content`),Vu(),zh$1(27,`doc-wireframe`,11)(28,`doc-wireframe`,11),Vu()()()),a&2&&(KD(13),Gh$1(`suiSidebarWidth`,s.width),vg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,Ii,Di,we,_i,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var xd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-transitions-example`]],standalone:!1,features:[uo$1],decls:31,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarWidth`,`thin`,3,`visibleChange`,`suiSidebarAnimation`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.show(`left`,`overlay`)}),zC(2,`Overlay`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.show(`left`,`push`)}),zC(4,`Push`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.show(`left`,`scale down`)}),zC(6,`Scale Down`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.show(`left`,`uncover`)}),zC(8,`Uncover`),Vu(),is$1(9,`button`,1),Kh$1(`click`,function(){return s.show(`left`,`slide along`)}),zC(10,`Slide Along`),Vu(),is$1(11,`button`,1),Kh$1(`click`,function(){return s.show(`left`,`slide out`)}),zC(12,`Slide Out`),Vu()(),zh$1(13,`div`,2),is$1(14,`sui-sidebar-container`,3)(15,`div`,4),Dg(`visibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),is$1(16,`a`,5),zh$1(17,`i`,6),zC(18,` Home`),Vu(),is$1(19,`a`,5),zh$1(20,`i`,7),zC(21,` Topics`),Vu(),is$1(22,`a`,5),zh$1(23,`i`,8),zC(24,` Friends`),Vu()(),is$1(25,`sui-sidebar-pusher`)(26,`div`,9)(27,`h3`,10),zC(28,`Application Content`),Vu(),zh$1(29,`doc-wireframe`,11)(30,`doc-wireframe`,11),Vu()()()),a&2&&(KD(15),Gh$1(`suiSidebarAnimation`,s.animation),vg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,Ii,Di,we,_i,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var bd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar-page-example`]],standalone:!1,features:[uo$1],decls:9,vars:1,consts:[[`sui-sidebar`,``,`sui-menu`,``,`suiVertical`,``,`suiInverted`,``,3,`visibleChange`,`visible`],[`suiMenuItem`,``],[`sui-button`,``,3,`click`]],template:function(a,s){a&1&&(is$1(0,`sui-sidebar-container`)(1,`div`,0),Dg(`visibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),is$1(2,`a`,1),zC(3,`Item 1`),Vu(),is$1(4,`a`,1),zC(5,`Item 2`),Vu()(),is$1(6,`sui-sidebar-pusher`)(7,`button`,2),Kh$1(`click`,function(){return s.visible=!s.visible}),zC(8,`Toggle Sidebar`),Vu()()()),a&2&&(KD(),vg(`visible`,s.visible))},dependencies:[Ii,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();function z1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-sidebar-example`),Vu())}function j1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-visible-example`),Vu())}function N1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-dimmed-example`),Vu())}function U1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-direction-example`),Vu())}function $1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-width-example`),Vu())}function Y1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-transitions-example`),Vu())}function G1(n,u){n&1&&(is$1(0,`div`,9),zh$1(1,`doc-sidebar-page-example`),Vu())}function X1(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Sidebar`),Vu(),is$1(6,`p`),zC(7,`A sidebar, usually an inverted vertical menu`),Vu(),is$1(8,`div`,5),zC(9,` Bind `),is$1(10,`code`),zC(11,`[(visible)]`),Vu(),zC(12,` to show and hide the sidebar. When it is two-way bound, clicking the page content hides the sidebar. `),Vu(),jh$1(13,z1,2,0,`ng-template`,6),Vu(),zh$1(14,`br`),is$1(15,`h2`,2),zC(16,`States`),Vu(),is$1(17,`doc-code-sample`,7)(18,`h3`,4),zC(19,`Visible`),Vu(),is$1(20,`p`),zC(21,`A sidebar can be visible on the page`),Vu(),is$1(22,`div`,5),zC(23,` A sidebar that is not two-way bound stays visible when the page is clicked. `),Vu(),jh$1(24,j1,2,0,`ng-template`,6),Vu(),is$1(25,`doc-code-sample`,3)(26,`h3`,4),zC(27,`Dimmed`),Vu(),is$1(28,`p`),zC(29,`A pusher can be dimmed while the sidebar is visible`),Vu(),jh$1(30,N1,2,0,`ng-template`,6),Vu(),zh$1(31,`br`),is$1(32,`h2`,2),zC(33,`Variations`),Vu(),is$1(34,`doc-code-sample`,3)(35,`h3`,4),zC(36,`Direction`),Vu(),is$1(37,`p`),zC(38,`A sidebar can appear on different sides of the page`),Vu(),is$1(39,`div`,5),zC(40,` Top and bottom sidebars should be horizontal menus, so `),is$1(41,`code`),zC(42,`suiVertical`),Vu(),zC(43,` is only set for left and right sidebars. `),Vu(),jh$1(44,U1,2,0,`ng-template`,6),Vu(),is$1(45,`doc-code-sample`,3)(46,`h3`,4),zC(47,`Width`),Vu(),is$1(48,`p`),zC(49,`A sidebar can specify its width`),Vu(),jh$1(50,$1,2,0,`ng-template`,6),Vu(),is$1(51,`doc-code-sample`,3)(52,`h3`,4),zC(53,`Transitions`),Vu(),is$1(54,`p`),zC(55,`A sidebar can use different transitions to appear`),Vu(),is$1(56,`div`,8)(57,`code`),zC(58,`uncover`),Vu(),zC(59,`, `),is$1(60,`code`),zC(61,`slide along`),Vu(),zC(62,` and `),is$1(63,`code`),zC(64,`slide out`),Vu(),zC(65,` only support left and right sidebars. `),Vu(),jh$1(66,Y1,2,0,`ng-template`,6),Vu(),zh$1(67,`br`),is$1(68,`h2`,2),zC(69,`Usage`),Vu(),is$1(70,`doc-code-sample`,3)(71,`h3`,4),zC(72,`Page Structure`),Vu(),is$1(73,`p`),zC(74,`A sidebar requires a container with a sidebar and a pusher holding the page content`),Vu(),is$1(75,`div`,5),zC(76,` Without `),is$1(77,`code`),zC(78,`suiPushable`),Vu(),zC(79,` the page body is the context and the sidebar is fixed to the viewport. Add `),is$1(80,`code`),zC(81,`suiPushable`),Vu(),zC(82,` to keep the sidebar inside the container, as in the examples above. `),Vu(),is$1(83,`div`,8),zC(84,` A pushable container cannot have padding. `),Vu(),jh$1(85,G1,2,0,`ng-template`,6),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetSidebar)(`componentCode`,o.snippetSidebarTs),KD(14),Gh$1(`templateCode`,o.snippetVisible),KD(8),Gh$1(`templateCode`,o.snippetDimmed)(`componentCode`,o.snippetDimmedTs),KD(9),Gh$1(`templateCode`,o.snippetDirection)(`componentCode`,o.snippetDirectionTs),KD(11),Gh$1(`templateCode`,o.snippetWidth)(`componentCode`,o.snippetWidthTs),KD(6),Gh$1(`templateCode`,o.snippetTransitions)(`componentCode`,o.snippetTransitionsTs),KD(19),Gh$1(`templateCode`,o.snippetPage)(`componentCode`,o.snippetPageTs)}}function J1(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`sui-sidebar-container`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,10)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,` suiPushable `),Vu(),is$1(20,`td`),zC(21,` Make the container the sidebar's context instead of the page. Always applied when the pusher is dimmable `),Vu(),is$1(22,`td`)(23,`div`,11),zC(24,` boolean `),Vu()(),is$1(25,`td`)(26,`div`,12),zC(27,` false `),Vu()()()()(),is$1(28,`h2`,2),zC(29,`sui-sidebar`),Vu(),is$1(30,`h4`,4),zC(31,`Properties`),Vu(),is$1(32,`table`,10)(33,`thead`)(34,`tr`)(35,`th`),zC(36,`Property`),Vu(),is$1(37,`th`),zC(38,`Description`),Vu(),is$1(39,`th`),zC(40,`Type`),Vu(),is$1(41,`th`),zC(42,`Default`),Vu()()(),is$1(43,`tbody`)(44,`tr`)(45,`td`),zC(46,` visible `),Vu(),is$1(47,`td`),zC(48,` Whether the sidebar is shown. Supports two-way binding with `),is$1(49,`code`),zC(50,`[(visible)]`),Vu()(),is$1(51,`td`)(52,`div`,11),zC(53,` boolean `),Vu()(),is$1(54,`td`)(55,`div`,12),zC(56,` true `),Vu()()(),is$1(57,`tr`)(58,`td`),zC(59,` suiSidebarPosition `),Vu(),is$1(60,`td`),zC(61,` The side of the page the sidebar appears on. Allowed values are `),is$1(62,`span`,13),zC(63,`'left'`),Vu(),zC(64,` | `),is$1(65,`span`,13),zC(66,`'right'`),Vu(),zC(67,` | `),is$1(68,`span`,13),zC(69,`'top'`),Vu(),zC(70,` | `),is$1(71,`span`,13),zC(72,`'bottom'`),Vu()(),is$1(73,`td`)(74,`div`,11),zC(75,` string `),Vu()(),is$1(76,`td`)(77,`div`,12),zC(78,` 'left' `),Vu()()(),is$1(79,`tr`)(80,`td`),zC(81,` suiSidebarWidth `),Vu(),is$1(82,`td`),zC(83,` Set the width of the sidebar. Allowed values are `),is$1(84,`span`,13),zC(85,`'very thin'`),Vu(),zC(86,` | `),is$1(87,`span`,13),zC(88,`'thin'`),Vu(),zC(89,` | `),is$1(90,`span`,13),zC(91,`'wide'`),Vu(),zC(92,` | `),is$1(93,`span`,13),zC(94,`'very wide'`),Vu(),zC(95,` | `),is$1(96,`span`,13),zC(97,`null`),Vu()(),is$1(98,`td`)(99,`div`,11),zC(100,` string `),Vu()(),is$1(101,`td`)(102,`div`,12),zC(103,` null `),Vu()()(),is$1(104,`tr`)(105,`td`),zC(106,` suiSidebarAnimation `),Vu(),is$1(107,`td`),zC(108,` Set the transition used to show the sidebar. Allowed values are `),is$1(109,`span`,13),zC(110,`'overlay'`),Vu(),zC(111,` | `),is$1(112,`span`,13),zC(113,`'push'`),Vu(),zC(114,` | `),is$1(115,`span`,13),zC(116,`'scale down'`),Vu(),zC(117,` | `),is$1(118,`span`,13),zC(119,`'uncover'`),Vu(),zC(120,` | `),is$1(121,`span`,13),zC(122,`'slide along'`),Vu(),zC(123,` | `),is$1(124,`span`,13),zC(125,`'slide out'`),Vu(),zC(126,` | `),is$1(127,`span`,13),zC(128,`null`),Vu()(),is$1(129,`td`)(130,`div`,11),zC(131,` string `),Vu()(),is$1(132,`td`)(133,`div`,12),zC(134,` null `),Vu()()(),is$1(135,`tr`)(136,`td`),zC(137,` suiInverted `),Vu(),is$1(138,`td`),zC(139,` Invert the colours of the sidebar `),Vu(),is$1(140,`td`)(141,`div`,11),zC(142,` boolean `),Vu()(),is$1(143,`td`)(144,`div`,12),zC(145,` false `),Vu()()(),is$1(146,`tr`)(147,`td`),zC(148,` suiClosable `),Vu(),is$1(149,`td`),zC(150,` Hide a two-way bound sidebar when the pusher is clicked `),Vu(),is$1(151,`td`)(152,`div`,11),zC(153,` boolean `),Vu()(),is$1(154,`td`)(155,`div`,12),zC(156,` true `),Vu()()()()(),is$1(157,`h4`,4),zC(158,`Events`),Vu(),is$1(159,`table`,10)(160,`thead`)(161,`tr`)(162,`th`),zC(163,`Event`),Vu(),is$1(164,`th`),zC(165,`Description`),Vu(),is$1(166,`th`),zC(167,`Type`),Vu()()(),is$1(168,`tbody`)(169,`tr`)(170,`td`),zC(171,` visibleChange `),Vu(),is$1(172,`td`),zC(173,` Emitted when the sidebar is shown or hidden `),Vu(),is$1(174,`td`)(175,`div`,11),zC(176,` EventEmitter<boolean> `),Vu()()()()(),is$1(177,`h4`,4),zC(178,`Methods`),Vu(),is$1(179,`table`,10)(180,`thead`)(181,`tr`)(182,`th`),zC(183,`Method`),Vu(),is$1(184,`th`),zC(185,`Description`),Vu()()(),is$1(186,`tbody`)(187,`tr`)(188,`td`),zC(189,` show() `),Vu(),is$1(190,`td`),zC(191,` Shows the sidebar `),Vu()(),is$1(192,`tr`)(193,`td`),zC(194,` hide() `),Vu(),is$1(195,`td`),zC(196,` Hides the sidebar `),Vu()(),is$1(197,`tr`)(198,`td`),zC(199,` toggle() `),Vu(),is$1(200,`td`),zC(201,` Toggles the visibility of the sidebar `),Vu()()()(),is$1(202,`h2`,2),zC(203,`sui-sidebar-pusher`),Vu(),is$1(204,`h4`,4),zC(205,`Properties`),Vu(),is$1(206,`table`,10)(207,`thead`)(208,`tr`)(209,`th`),zC(210,`Property`),Vu(),is$1(211,`th`),zC(212,`Description`),Vu(),is$1(213,`th`),zC(214,`Type`),Vu(),is$1(215,`th`),zC(216,`Default`),Vu()()(),is$1(217,`tbody`)(218,`tr`)(219,`td`),zC(220,` suiDimmable `),Vu(),is$1(221,`td`),zC(222,` Dim the page content while the sidebar is visible `),Vu(),is$1(223,`td`)(224,`div`,11),zC(225,` boolean `),Vu()(),is$1(226,`td`)(227,`div`,12),zC(228,` false `),Vu()()()()()())}var yd=(()=>{class n{constructor(o){this.snippetSidebar=td,this.snippetSidebarTs=id,this.snippetVisible=nd,this.snippetDimmed=od,this.snippetDimmedTs=ad,this.snippetDirection=sd,this.snippetDirectionTs=rd,this.snippetWidth=ld,this.snippetWidthTs=dd,this.snippetTransitions=md,this.snippetTransitionsTs=pd,this.snippetPage=ud,this.snippetPageTs=cd,o.setTitle(`Sidebar | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sidebar`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Sidebar`,`subHeader`,`A sidebar hides additional content beside a page`,`semanticUrl`,`https://semantic-ui.com/modules/sidebar.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[3,`templateCode`],[`sui-message`,``,`suiState`,`warning`],[1,`sidebar-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[`sui-label`,``]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,X1,86,13,`div`,1)(2,J1,229,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li,hd,gd,fd,Sd,vd,xd,bd],styles:[`[_nghost-%COMP%]     .sidebar-demo sui-sidebar-container.ui.segment{height:22rem;margin-top:0}`],changeDetection:1})}}return n})();var Ed=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context">
      <h3 sui-header>Stuck Content</h3>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Cd=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context"
         suiPushing>
      <h3 sui-header>Stuck Content</h3>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Dd=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context"
         [suiOffset]="50">
      <h3 sui-header>Stuck Content</h3>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var wd=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context"
         (suiOnStick)="stuck = true"
         (suiOnUnstick)="stuck = false">
      <h3 sui-header>{{ stuck ? 'Stuck' : 'Not stuck' }}</h3>
    </div>
  </div>
</div>
`;var _d=`<div class="sticky-scroll"
     id="sticky-scroll-example">
  <div sui-segment
       #context>
    <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div sui-rail
         suiLocation="right"
         suiInternal>
      <div sui-segment
           suiSticky
           suiScrollContext="#sticky-scroll-example"
           [suiContext]="context">
        <h3 sui-header>Stuck Content</h3>
      </div>
    </div>
  </div>
</div>
`;var $t=(()=>{class n{constructor(){this.document=g(Y),this.el=g(Ie),this.renderer=g(yn),this.zone=g(G),this.cdr=g(Pg$1),this.suiContext=null,this.suiScrollContext=`window`,this.suiOffset=0,this.suiBottomOffset=0,this.suiPushing=!1,this.suiSetSize=!0,this.suiJitter=5,this.suiObserveChanges=!1,this.suiOnReposition=new nt$1,this.suiOnScroll=new nt$1,this.suiOnStick=new nt$1,this.suiOnUnstick=new nt$1,this.suiOnTop=new nt$1,this.suiOnBottom=new nt$1,this.cache=null,this.classUi=!0,this.classSticky=!0,this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1,this.destroy$=new he$1,this.elementScroll=0,this.scrollEl=window,this.contextEl=null,this.containerEl=null,this.mutationObserver=null,this.refreshTimer=null}ngOnInit(){this.scrollEl=this.resolveScrollElement();let o=this.document.defaultView;this.zone.runOutsideAngular(()=>{let a=this.scrollEl===window?o:this.scrollEl;Xs$1(a,`scroll`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>{let s=this.readScrollTop();this.zone.run(()=>{this.stick(s),this.suiOnScroll.emit()})})}),Xs$1(o,`resize`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>this.zone.run(()=>this.refresh(!1)))})})}ngAfterViewInit(){queueMicrotask(()=>this.refresh(!0))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.reset()}refresh(o=!1){this.resetLayout(),this.determineContainer(),this.determineContext(),this.contextEl&&(o&&this.determineContainer(),this.savePositions(),this.suiOnReposition.emit(),this.cdr.markForCheck(),this.suiObserveChanges&&typeof MutationObserver<`u`&&!this.mutationObserver&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.contextEl,{childList:!0,subtree:!0}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0})))}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh(!1)},100)}resolveScrollElement(){return this.suiScrollContext===`window`?window:this.document.querySelector(this.suiScrollContext)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}determineContainer(){let o=this.el.nativeElement;this.containerEl=o.offsetParent||o.parentElement}determineContext(){if(this.suiContext===null){this.contextEl=this.containerEl;return}if(typeof this.suiContext==`string`){this.contextEl=this.document.querySelector(this.suiContext);return}this.contextEl=this.suiContext}savePositions(){let o=this.el.nativeElement,a=this.contextEl,s=this.scrollEl===window?window.innerHeight:this.scrollEl.clientHeight,p=getComputedStyle(o),m=parseInt(p.marginTop,10)||0,v=parseInt(p.marginBottom,10)||0,O=this.scrollEl===window?null:this.scrollEl,ie=O?O.getBoundingClientRect().top:0,ke=O?O.scrollTop-ie:window.scrollY,ne=window.scrollX,dt=o.getBoundingClientRect(),W=a.getBoundingClientRect(),re=dt.top+ke,F=W.top+ke,It=dt.left+ne,Le=o.offsetHeight,Yt=a.offsetHeight,li=re-m,di=F+Yt;if(this.cache={fits:Le+this.suiOffset<=s,sameHeight:Le===Yt,scrollContext:{height:s},element:{margin:{top:m,bottom:v},top:li,left:It,width:o.offsetWidth,height:Le,bottom:re+Le},context:{top:F,height:Yt,bottom:di}},this.setContainerSize(),!this.isCacheValid()){this.cache=null,this.resetLayout();return}this.stick(this.readScrollTop())}isCacheValid(){if(!this.cache)return!1;let o=getComputedStyle(this.el.nativeElement);return o.display===`none`||o.visibility===`hidden`?!1:this.cache.element.height<=this.cache.context.height}setContainerSize(){if(!this.cache||!this.containerEl)return;let o=this.containerEl.tagName;if(o===`HTML`||o===`BODY`)return;let a=this.containerEl.offsetHeight,s=this.cache.context.height;Math.abs(a-s)>this.suiJitter&&this.renderer.setStyle(this.containerEl,`height`,`${s}px`)}stick(o){let a=this.cache;if(!a||a.sameHeight)return;let s=this.bottomState&&this.suiPushing?this.suiBottomOffset:this.suiOffset,p={top:o+s,bottom:o+s+a.scrollContext.height},m=a.element,v=a.context,O=a.fits?0:this.computeElementScroll(o);this.isInitialPosition()?p.top>=v.bottom?this.bindBottom():p.top>m.top&&(m.height+p.top-O>=v.bottom?this.bindBottom():this.fixTop()):this.fixed?this.topState?p.top<=m.top?this.setInitialPosition():m.height+p.top-O>=v.bottom?this.bindBottom():a.fits||(this.applyElementScroll(O),this.lastScroll=p.top):this.bottomState&&(p.bottom-m.height<=m.top?this.setInitialPosition():p.bottom>=v.bottom?this.bindBottom():a.fits||(this.applyElementScroll(O),this.lastScroll=p.top)):this.bound&&this.bottomState&&(p.top<=m.top?this.setInitialPosition():this.suiPushing?this.bound&&p.bottom<=v.bottom&&this.fixBottom():this.bound&&p.top<=v.bottom-m.height&&this.fixTop()),this.lastScroll=o,this.cdr.markForCheck()}isInitialPosition(){return!this.fixed&&!this.bound}computeElementScroll(o){let a=this.cache,s=this.lastScroll===void 0?0:o-this.lastScroll,p=a.element.height-a.scrollContext.height+this.suiOffset,m=this.elementScroll;this.topState?m=Math.abs(parseInt(this.el.nativeElement.style.top||`0`,10))||0:this.bottomState&&(m=Math.abs(parseInt(this.el.nativeElement.style.bottom||`0`,10))||0);let v=m+s;return a.fits||v<0?0:v>p?p:v}applyElementScroll(o){this.elementScroll=o,this.topState&&(this.renderer.setStyle(this.el.nativeElement,`bottom`,``),this.renderer.setStyle(this.el.nativeElement,`top`,`${-o}px`)),this.bottomState&&(this.renderer.setStyle(this.el.nativeElement,`top`,``),this.renderer.setStyle(this.el.nativeElement,`bottom`,`${o}px`))}bindBottom(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,`margin-top`),this.fixed=!1,this.bound=!0,this.topState=!1,this.bottomState=!0,this.suiOnBottom.emit(),this.suiOnUnstick.emit()}fixTop(){this.unfix(),this.unbind();let o=this.cache;this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,`width`,`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,`height`,`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,`min-height`,`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,`margin-top`,`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,`left`,`${o.element.left}px`),this.renderer.setStyle(this.el.nativeElement,`bottom`,``),this.renderer.setStyle(this.el.nativeElement,`margin-bottom`,``),this.scrollEl!==window&&this.renderer.setStyle(this.el.nativeElement,`top`,`${this.scrollEl.getBoundingClientRect().top}px`),this.fixed=!0,this.bound=!1,this.topState=!0,this.bottomState=!1,this.suiOnStick.emit()}fixBottom(){this.unfix(),this.unbind();let o=this.cache;if(this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,`width`,`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,`height`,`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,`min-height`,`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,`margin-top`,`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,`left`,`${o.element.left}px`),this.scrollEl!==window){let a=window.innerHeight-this.scrollEl.getBoundingClientRect().bottom;this.renderer.setStyle(this.el.nativeElement,`bottom`,`${a}px`)}this.fixed=!0,this.bound=!1,this.topState=!1,this.bottomState=!0,this.suiOnStick.emit()}setInitialPosition(){let o=this.fixed||this.bound;this.unfix(),this.unbind(),this.lastScroll=void 0,this.elementScroll=0,o&&(this.suiOnTop.emit(),this.suiOnUnstick.emit())}unbind(){this.bound&&(this.bound=!1,this.topState=!1,this.bottomState=!1)}unfix(){this.fixed&&(this.containerEl&&this.renderer.removeStyle(this.containerEl,`min-height`),this.renderer.removeStyle(this.el.nativeElement,`margin-top`),this.renderer.removeStyle(this.el.nativeElement,`left`),this.renderer.removeStyle(this.el.nativeElement,`width`),this.renderer.removeStyle(this.el.nativeElement,`height`),this.renderer.removeStyle(this.el.nativeElement,`top`),this.renderer.removeStyle(this.el.nativeElement,`bottom`),this.fixed=!1,this.topState=!1,this.bottomState=!1)}clearPositionStyles(){this.renderer.removeStyle(this.el.nativeElement,`left`),this.renderer.removeStyle(this.el.nativeElement,`top`),this.renderer.removeStyle(this.el.nativeElement,`bottom`),this.renderer.removeStyle(this.el.nativeElement,`margin-bottom`)}resetLayout(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,`margin-top`),this.containerEl&&(this.renderer.removeStyle(this.containerEl,`height`),this.renderer.removeStyle(this.containerEl,`min-height`)),this.renderer.removeStyle(this.el.nativeElement,`width`),this.renderer.removeStyle(this.el.nativeElement,`height`),this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1}reset(){this.resetLayout(),this.cache=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiSticky`,``]],hostVars:12,hostBindings:function(a,s){a&2&&ho$1(`ui`,s.classUi)(`sticky`,s.classSticky)(`fixed`,s.fixed)(`bound`,s.bound)(`top`,s.topState)(`bottom`,s.bottomState)},inputs:{suiContext:`suiContext`,suiScrollContext:`suiScrollContext`,suiOffset:`suiOffset`,suiBottomOffset:`suiBottomOffset`,suiPushing:`suiPushing`,suiSetSize:`suiSetSize`,suiJitter:`suiJitter`,suiObserveChanges:`suiObserveChanges`},outputs:{suiOnReposition:`suiOnReposition`,suiOnScroll:`suiOnScroll`,suiOnStick:`suiOnStick`,suiOnUnstick:`suiOnUnstick`,suiOnTop:`suiOnTop`,suiOnBottom:`suiOnBottom`},exportAs:[`suiSticky`]})}}return uS([ve()],n.prototype,`suiPushing`,void 0),uS([ve()],n.prototype,`suiSetSize`,void 0),uS([ve()],n.prototype,`suiObserveChanges`,void 0),n})();var Td=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1]})}}return n})();var Mt=class{constructor(){this.stuck=!1}};var Md=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sticky-sticky-example`]],standalone:!1,features:[uo$1],decls:16,vars:1,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,3,`suiContext`],[`sui-header`,``],[`type`,`image`]],template:function(a,s){if(a&1&&(is$1(0,`div`,1,0)(2,`div`,2),zh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Vu(),is$1(11,`div`,4)(12,`div`,5)(13,`h3`,6),zC(14,`Stuck Content`),Vu(),zh$1(15,`doc-wireframe`,7),Vu()()()),a&2){let p=EC(1);KD(12),Gh$1(`suiContext`,p)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Id=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sticky-pushing-example`]],standalone:!1,features:[uo$1],decls:16,vars:1,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,`suiPushing`,``,3,`suiContext`],[`sui-header`,``],[`type`,`image`]],template:function(a,s){if(a&1&&(is$1(0,`div`,1,0)(2,`div`,2),zh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Vu(),is$1(11,`div`,4)(12,`div`,5)(13,`h3`,6),zC(14,`Stuck Content`),Vu(),zh$1(15,`doc-wireframe`,7),Vu()()()),a&2){let p=EC(1);KD(12),Gh$1(`suiContext`,p)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Pd=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sticky-offset-example`]],standalone:!1,features:[uo$1],decls:16,vars:2,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,3,`suiContext`,`suiOffset`],[`sui-header`,``],[`type`,`image`]],template:function(a,s){if(a&1&&(is$1(0,`div`,1,0)(2,`div`,2),zh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Vu(),is$1(11,`div`,4)(12,`div`,5)(13,`h3`,6),zC(14,`Stuck Content`),Vu(),zh$1(15,`doc-wireframe`,7),Vu()()()),a&2){let p=EC(1);KD(12),Gh$1(`suiContext`,p)(`suiOffset`,50)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var kd=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sticky-events-example`]],standalone:!1,features:[uo$1],decls:15,vars:2,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,3,`suiOnStick`,`suiOnUnstick`,`suiContext`],[`sui-header`,``]],template:function(a,s){if(a&1&&(is$1(0,`div`,1,0)(2,`div`,2),zh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Vu(),is$1(11,`div`,4)(12,`div`,5),Kh$1(`suiOnStick`,function(){return s.stuck=!0})(`suiOnUnstick`,function(){return s.stuck=!1}),is$1(13,`h3`,6),zC(14),Vu()()()()),a&2){let p=EC(1);KD(12),Gh$1(`suiContext`,p),KD(2),gg(s.stuck?`Stuck`:`Not stuck`)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Fd=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sticky-scroll-context-example`]],standalone:!1,features:[uo$1],decls:16,vars:1,consts:[[`context`,``],[`id`,`sticky-scroll-example`,1,`sticky-scroll`],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,`suiScrollContext`,`#sticky-scroll-example`,3,`suiContext`],[`sui-header`,``]],template:function(a,s){if(a&1&&(is$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),zh$1(4,`doc-wireframe`,4)(5,`doc-wireframe`,4)(6,`doc-wireframe`,4)(7,`doc-wireframe`,4)(8,`doc-wireframe`,4)(9,`doc-wireframe`,4)(10,`doc-wireframe`,4)(11,`doc-wireframe`,4),Vu(),is$1(12,`div`,5)(13,`div`,6)(14,`h3`,7),zC(15,`Stuck Content`),Vu()()()()()),a&2){let p=EC(2);KD(13),Gh$1(`suiContext`,p)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();function ng(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-sticky-sticky-example`),Vu())}function og(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-sticky-pushing-example`),Vu())}function ag(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-sticky-offset-example`),Vu())}function sg(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-sticky-events-example`),Vu())}function rg(n,u){n&1&&(is$1(0,`div`,7),zh$1(1,`doc-sticky-scroll-context-example`),Vu())}function lg(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Sticky`),Vu(),is$1(6,`p`),zC(7,`Sticky content stays fixed to the viewport while its context is visible`),Vu(),is$1(8,`div`,5),zC(9,` Scroll the page to see the content stick. A sticky is usually placed in a `),is$1(10,`code`),zC(11,`rail`),Vu(),zC(12,`, and its `),is$1(13,`code`),zC(14,`suiContext`),Vu(),zC(15,` is the element whose bounds it stays within. `),Vu(),jh$1(16,ng,2,0,`ng-template`,6),Vu(),zh$1(17,`br`),is$1(18,`h2`,2),zC(19,`Variations`),Vu(),is$1(20,`doc-code-sample`,3)(21,`h3`,4),zC(22,`Pushing`),Vu(),is$1(23,`p`),zC(24,`Sticky content can push the page up when you scroll back, instead of returning to its original position straight away`),Vu(),jh$1(25,og,2,0,`ng-template`,6),Vu(),is$1(26,`doc-code-sample`,3)(27,`h3`,4),zC(28,`Offset`),Vu(),is$1(29,`p`),zC(30,`Sticky content can be offset from the top of the viewport, for example to sit below a fixed menu`),Vu(),jh$1(31,ag,2,0,`ng-template`,6),Vu(),is$1(32,`doc-code-sample`,3)(33,`h3`,4),zC(34,`Events`),Vu(),is$1(35,`p`),zC(36,`A sticky element reports when it sticks and unsticks`),Vu(),jh$1(37,sg,2,0,`ng-template`,6),Vu(),is$1(38,`doc-code-sample`,3)(39,`h3`,4),zC(40,`Scroll Context`),Vu(),is$1(41,`p`),zC(42,`A sticky can stick inside a scrolling element instead of the page`),Vu(),is$1(43,`div`,5)(44,`code`),zC(45,`suiScrollContext`),Vu(),zC(46,` takes a CSS selector for the scrolling element. `),Vu(),jh$1(47,rg,2,0,`ng-template`,6),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetSticky),KD(17),Gh$1(`templateCode`,o.snippetPushing),KD(6),Gh$1(`templateCode`,o.snippetOffset),KD(6),Gh$1(`templateCode`,o.snippetEvents),KD(6),Gh$1(`templateCode`,o.snippetScrollContext)}}function dg(n,u){n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`suiSticky`),Vu(),is$1(3,`h4`,4),zC(4,`Properties`),Vu(),is$1(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is$1(10,`th`),zC(11,`Description`),Vu(),is$1(12,`th`),zC(13,`Type`),Vu(),is$1(14,`th`),zC(15,`Default`),Vu()()(),is$1(16,`tbody`)(17,`tr`)(18,`td`),zC(19,` suiContext `),Vu(),is$1(20,`td`),zC(21,` The element (or CSS selector) the sticky stays within. Defaults to the sticky's offset parent `),Vu(),is$1(22,`td`)(23,`div`,9),zC(24,` string | HTMLElement `),Vu()(),is$1(25,`td`)(26,`div`,10),zC(27,` null `),Vu()()(),is$1(28,`tr`)(29,`td`),zC(30,` suiScrollContext `),Vu(),is$1(31,`td`),zC(32,` The scrolling element, as a CSS selector, or `),is$1(33,`code`),zC(34,`'window'`),Vu()(),is$1(35,`td`)(36,`div`,9),zC(37,` string `),Vu()(),is$1(38,`td`)(39,`div`,10),zC(40,` 'window' `),Vu()()(),is$1(41,`tr`)(42,`td`),zC(43,` suiOffset `),Vu(),is$1(44,`td`),zC(45,` Pixels between the sticky and the top of the scroll context when stuck `),Vu(),is$1(46,`td`)(47,`div`,9),zC(48,` number `),Vu()(),is$1(49,`td`)(50,`div`,10),zC(51,` 0 `),Vu()()(),is$1(52,`tr`)(53,`td`),zC(54,` suiBottomOffset `),Vu(),is$1(55,`td`),zC(56,` Pixels between the sticky and the bottom of the scroll context when pushing `),Vu(),is$1(57,`td`)(58,`div`,9),zC(59,` number `),Vu()(),is$1(60,`td`)(61,`div`,10),zC(62,` 0 `),Vu()()(),is$1(63,`tr`)(64,`td`),zC(65,` suiPushing `),Vu(),is$1(66,`td`),zC(67,` Push the page up when scrolling back instead of returning to its position `),Vu(),is$1(68,`td`)(69,`div`,9),zC(70,` boolean `),Vu()(),is$1(71,`td`)(72,`div`,10),zC(73,` false `),Vu()()(),is$1(74,`tr`)(75,`td`),zC(76,` suiSetSize `),Vu(),is$1(77,`td`),zC(78,` Keep the sticky's width and height when it becomes fixed `),Vu(),is$1(79,`td`)(80,`div`,9),zC(81,` boolean `),Vu()(),is$1(82,`td`)(83,`div`,10),zC(84,` true `),Vu()()(),is$1(85,`tr`)(86,`td`),zC(87,` suiJitter `),Vu(),is$1(88,`td`),zC(89,` Pixel tolerance before the container height is corrected `),Vu(),is$1(90,`td`)(91,`div`,9),zC(92,` number `),Vu()(),is$1(93,`td`)(94,`div`,10),zC(95,` 5 `),Vu()()(),is$1(96,`tr`)(97,`td`),zC(98,` suiObserveChanges `),Vu(),is$1(99,`td`),zC(100,` Recalculate positions when the content of the sticky or its context changes `),Vu(),is$1(101,`td`)(102,`div`,9),zC(103,` boolean `),Vu()(),is$1(104,`td`)(105,`div`,10),zC(106,` false `),Vu()()()()(),is$1(107,`h4`,4),zC(108,`Events`),Vu(),is$1(109,`table`,8)(110,`thead`)(111,`tr`)(112,`th`),zC(113,`Event`),Vu(),is$1(114,`th`),zC(115,`Description`),Vu(),is$1(116,`th`),zC(117,`Type`),Vu()()(),is$1(118,`tbody`)(119,`tr`)(120,`td`),zC(121,` suiOnStick `),Vu(),is$1(122,`td`),zC(123,` Emitted when the element becomes fixed to the viewport `),Vu(),is$1(124,`td`)(125,`div`,9),zC(126,` EventEmitter<void> `),Vu()()(),is$1(127,`tr`)(128,`td`),zC(129,` suiOnUnstick `),Vu(),is$1(130,`td`),zC(131,` Emitted when the element is no longer fixed `),Vu(),is$1(132,`td`)(133,`div`,9),zC(134,` EventEmitter<void> `),Vu()()(),is$1(135,`tr`)(136,`td`),zC(137,` suiOnTop `),Vu(),is$1(138,`td`),zC(139,` Emitted when the element returns to the top of its context `),Vu(),is$1(140,`td`)(141,`div`,9),zC(142,` EventEmitter<void> `),Vu()()(),is$1(143,`tr`)(144,`td`),zC(145,` suiOnBottom `),Vu(),is$1(146,`td`),zC(147,` Emitted when the element is bound to the bottom of its context `),Vu(),is$1(148,`td`)(149,`div`,9),zC(150,` EventEmitter<void> `),Vu()()(),is$1(151,`tr`)(152,`td`),zC(153,` suiOnScroll `),Vu(),is$1(154,`td`),zC(155,` Emitted on every scroll of the scroll context `),Vu(),is$1(156,`td`)(157,`div`,9),zC(158,` EventEmitter<void> `),Vu()()(),is$1(159,`tr`)(160,`td`),zC(161,` suiOnReposition `),Vu(),is$1(162,`td`),zC(163,` Emitted when positions are recalculated `),Vu(),is$1(164,`td`)(165,`div`,9),zC(166,` EventEmitter<void> `),Vu()()()()(),is$1(167,`h4`,4),zC(168,`Methods`),Vu(),is$1(169,`table`,8)(170,`thead`)(171,`tr`)(172,`th`),zC(173,`Method`),Vu(),is$1(174,`th`),zC(175,`Description`),Vu()()(),is$1(176,`tbody`)(177,`tr`)(178,`td`),zC(179,` refresh(hard?) `),Vu(),is$1(180,`td`),zC(181,` Recalculates the sticky positions, e.g. after the page layout changes `),Vu()()()()())}var Ad=(()=>{class n{constructor(o){this.snippetSticky=Ed,this.snippetPushing=Cd,this.snippetOffset=Dd,this.snippetEvents=wd,this.snippetScrollContext=_d,o.setTitle(`Sticky | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-sticky`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Sticky`,`subHeader`,`Sticky content stays fixed to the browser viewport while another column of content is visible on the page`,`semanticUrl`,`https://semantic-ui.com/modules/sticky.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[1,`sticky-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,lg,48,5,`div`,1)(2,dg,182,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li,Md,Id,Pd,kd,Fd],styles:[`[_nghost-%COMP%]     .sticky-demo .sticky-content{width:60%}[_nghost-%COMP%]     .sticky-demo .sticky-scroll{height:22rem;overflow-y:auto}`],changeDetection:1})}}return n})();var Vd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('scale')">Scale</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Bd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('zoom')">Zoom</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Od=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('fade')">Fade</button>
  <button sui-button (click)="run('fade up')">Fade Up</button>
  <button sui-button (click)="run('fade down')">Fade Down</button>
  <button sui-button (click)="run('fade left')">Fade Left</button>
  <button sui-button (click)="run('fade right')">Fade Right</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Ld=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('horizontal flip')">Horizontal Flip</button>
  <button sui-button (click)="run('vertical flip')">Vertical Flip</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Hd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('drop')">Drop</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Wd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('fly left')">Fly Left</button>
  <button sui-button (click)="run('fly right')">Fly Right</button>
  <button sui-button (click)="run('fly up')">Fly Up</button>
  <button sui-button (click)="run('fly down')">Fly Down</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Rd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('swing left')">Swing Left</button>
  <button sui-button (click)="run('swing right')">Swing Right</button>
  <button sui-button (click)="run('swing up')">Swing Up</button>
  <button sui-button (click)="run('swing down')">Swing Down</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var zd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('browse')">Browse</button>
  <button sui-button (click)="run('browse right')">Browse Right</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var jd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('slide down')">Slide Down</button>
  <button sui-button (click)="run('slide up')">Slide Up</button>
  <button sui-button (click)="run('slide left')">Slide Left</button>
  <button sui-button (click)="run('slide right')">Slide Right</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Nd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="play('jiggle')">Jiggle</button>
  <button sui-button (click)="play('flash')">Flash</button>
  <button sui-button (click)="play('shake')">Shake</button>
  <button sui-button (click)="play('pulse')">Pulse</button>
  <button sui-button (click)="play('tada')">Tada</button>
  <button sui-button (click)="play('bounce')">Bounce</button>
  <button sui-button (click)="play('glow')">Glow</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [suiPlay]="playCount">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Ud=`animation = 'pulse';
playCount = 0;

play(animation: string): void {
  this.animation = animation;
  // incrementing suiPlay replays the current static animation
  this.playCount++;
}
`;var $d=`<button sui-button
        (click)="visible = !visible">
  {{ visible ? 'Hide' : 'Show' }}
</button>
<div class="transition-stage">
  <sui-transition
      suiAnimation="scale"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Yd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('horizontal flip in')">Horizontal Flip In</button>
  <button sui-button (click)="run('vertical flip out')">Vertical Flip Out</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Gd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="duration = 200; visible = !visible">200ms</button>
  <button sui-button (click)="duration = '1s'; visible = !visible">1s</button>
  <button sui-button (click)="duration = '3s'; visible = !visible">3s</button>
</div>
<div class="transition-stage">
  <sui-transition
      suiAnimation="fade up"
      [suiDuration]="duration"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Xd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="leaf.show()">Show</button>
  <button sui-button (click)="leaf.hide()">Hide</button>
  <button sui-button (click)="leaf.toggle()">Toggle</button>
  <button sui-button (click)="leaf.stop()">Stop</button>
</div>
<div class="transition-stage">
  <sui-transition
      #leaf="suiTransition"
      suiAnimation="swing down"
      suiDuration="2s"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Jd=`<button sui-button
        (click)="visible = !visible">
  Toggle
</button>
<div class="transition-stage">
  <sui-transition
      suiAnimation="drop"
      [(suiVisible)]="visible"
      (suiAnimationStart)="log('Animation started')"
      (suiAnimationComplete)="log('Animation complete')"
      (suiOnShow)="log('Shown')"
      (suiOnHide)="log('Hidden')">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
<div sui-segment>
  @for (entry of events; track $index) {
    <div>{{ entry }}</div>
  } @empty {
    <em>No events yet</em>
  }
</div>
`;var qd=`visible = true;
events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 6);
}
`;var Zd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="visible = !visible">Toggle</button>
  <button sui-button
          [suiActive]="disabled"
          suiToggle
          (click)="disabled = !disabled">
    {{ disabled ? 'Animations disabled' : 'Animations enabled' }}
  </button>
</div>
<div class="transition-stage">
  <sui-transition
      suiAnimation="fly left"
      [suiDisabled]="disabled"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var bi=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵprov=Ze({token:n,factory:()=>g(Mg)})}return n})();var Si=class{};var Mg=(()=>{class n extends bi{animationModuleType=g($y,{optional:!0});_nextAnimationId=0;_renderer;constructor(o,a){super();let s={id:`0`,encapsulation:Pe$2.None,styles:[],data:{animation:[]}};if(this._renderer=o.createRenderer(a.body,s),this.animationModuleType===null&&!Pg(this._renderer))throw new D(3600,!1)}build(o){let a=this._nextAnimationId;this._nextAnimationId++;let s=Array.isArray(o)?si(o):o;return Kd(this._renderer,null,a,`register`,[s]),new vi(a,this._renderer)}static ɵfac=function(a){return new(a||n)(T(mn),T(Y))};static ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var vi=class extends Si{_id;_renderer;constructor(u,o){super(),this._id=u,this._renderer=o}create(u,o){return new xi(this._id,u,o||{},this._renderer)}};var xi=class{id;element;_renderer;parentPlayer=null;_started=!1;constructor(u,o,a,s){this.id=u,this.element=o,this._renderer=s,this._command(`create`,a)}_listen(u,o){return this._renderer.listen(this.element,`@@${this.id}:${u}`,o)}_command(u,...o){Kd(this._renderer,this.element,this.id,u,o)}onDone(u){this._listen(`done`,u)}onStart(u){this._listen(`start`,u)}onDestroy(u){this._listen(`destroy`,u)}init(){this._command(`init`)}hasStarted(){return this._started}play(){this._command(`play`),this._started=!0}pause(){this._command(`pause`)}restart(){this._command(`restart`)}finish(){this._command(`finish`)}destroy(){this._command(`destroy`)}reset(){this._command(`reset`),this._started=!1}setPosition(u){this._command(`setPosition`,u)}getPosition(){return Ig(this._renderer)?.engine?.players[this.id]?.getPosition()??0}totalTime=0};function Kd(n,u,o,a,s){n.setProperty(u,`@@${o}:${a}`,s)}function Ig(n){let u=n.ɵtype;return u===0?n:u===1?n.animationRenderer:null}function Pg(n){let u=n.ɵtype;return u===0||u===1}function Qd(n){if(typeof n==`number`)return Number.isFinite(n)?`${n}ms`:`500ms`;let u=String(n).trim();return u?/^\d+(\.\d+)?(ms|s)$/i.test(u)?u:/^\d+(\.\d+)?$/.test(u)?`${u}ms`:u:`500ms`}function yi(n){let u=n.trim().toLowerCase().replace(/\s+/g,` `),o=null,a=u;return a.endsWith(` in`)?(o=`in`,a=a.slice(0,-3).trim()):a.endsWith(` out`)&&(o=`out`,a=a.slice(0,-4).trim()),{baseName:a,explicitDirection:o}}function kg(n,u,o){return n===`in`||n===`out`?n:u===`in`?`in`:u===`out`?`out`:o?`in`:`out`}var Fg=/* @__PURE__ */ new Set([`jiggle`,`flash`,`shake`,`pulse`,`tada`,`bounce`,`glow`]);function ri(n){return Fg.has(n)}var M=`cubic-bezier(0.4, 0, 0.2, 1)`;var tm={scale:{enter:n=>[ni({opacity:0,transform:`scale(0)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`scale(1)`}))],leave:n=>[ni({opacity:1,transform:`scale(1)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`scale(0)`}))]},zoom:{enter:n=>[ni({opacity:0,transform:`scale(0.35)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`scale(1)`}))],leave:n=>[ni({opacity:1,transform:`scale(1)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`scale(0.35)`}))]},fade:{enter:n=>[ni({opacity:0,offset:0}),ti(`${n} ${M}`,ni({opacity:1}))],leave:n=>[ni({opacity:1,offset:0}),ti(`${n} ${M}`,ni({opacity:0}))]},"fade up":{enter:n=>[ni({opacity:0,transform:`translateY(0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(0.75rem)`}))]},"fade down":{enter:n=>[ni({opacity:0,transform:`translateY(-0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-0.75rem)`}))]},"fade left":{enter:n=>[ni({opacity:0,transform:`translateX(0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(0.75rem)`}))]},"fade right":{enter:n=>[ni({opacity:0,transform:`translateX(-0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-0.75rem)`}))]},"horizontal flip":{enter:n=>[ni({opacity:0,transform:`perspective(600px) rotateY(-90deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`perspective(600px) rotateY(0deg)`}))],leave:n=>[ni({opacity:1,transform:`perspective(600px) rotateY(0deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`perspective(600px) rotateY(90deg)`}))]},"vertical flip":{enter:n=>[ni({opacity:0,transform:`perspective(600px) rotateX(-90deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`perspective(600px) rotateX(0deg)`}))],leave:n=>[ni({opacity:1,transform:`perspective(600px) rotateX(0deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`perspective(600px) rotateX(90deg)`}))]},drop:{enter:n=>[ni({opacity:0,transform:`translateY(-120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-120%)`}))]},"fly left":{enter:n=>[ni({opacity:0,transform:`translateX(120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-120%)`}))]},"fly right":{enter:n=>[ni({opacity:0,transform:`translateX(-120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(120%)`}))]},"fly up":{enter:n=>[ni({opacity:0,transform:`translateY(120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-120%)`}))]},"fly down":{enter:n=>[ni({opacity:0,transform:`translateY(-120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(120%)`}))]},"swing left":{enter:n=>[ni({opacity:0,transform:`rotate(-12deg)`,transformOrigin:`top center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(12deg)`,transformOrigin:`top center`}))]},"swing right":{enter:n=>[ni({opacity:0,transform:`rotate(12deg)`,transformOrigin:`top center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(-12deg)`,transformOrigin:`top center`}))]},"swing up":{enter:n=>[ni({opacity:0,transform:`rotate(-10deg)`,transformOrigin:`bottom center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(10deg)`,transformOrigin:`bottom center`}))]},"swing down":{enter:n=>[ni({opacity:0,transform:`rotate(10deg)`,transformOrigin:`top center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(-10deg)`,transformOrigin:`top center`}))]},browse:{enter:n=>[ni({opacity:0,transform:`translateX(-1rem) skewX(-6deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(1rem) skewX(6deg)`}))]},"browse right":{enter:n=>[ni({opacity:0,transform:`translateX(1rem) skewX(6deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-1rem) skewX(-6deg)`}))]},"slide down":{enter:n=>[ni({opacity:0,transform:`translateY(-100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-100%)`}))]},"slide up":{enter:n=>[ni({opacity:0,transform:`translateY(100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(100%)`}))]},"slide left":{enter:n=>[ni({opacity:0,transform:`translateX(100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-100%)`}))]},"slide right":{enter:n=>[ni({opacity:0,transform:`translateX(-100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(100%)`}))]}};var em=tm.fade;function im(n){return ri(n)?em:tm[n]??em}function Ag(n,u){return im(n).enter(u)}function Vg(n,u){return im(n).leave(u)}function Bg(n,u){if(!ri(n))return null;switch(n){case`pulse`:return[ni({transform:`scale(1)`,offset:0}),ti(`${u} ${M}`,ri$1([ni({transform:`scale(1)`,offset:0}),ni({transform:`scale(1.06)`,offset:.5}),ni({transform:`scale(1)`,offset:1})]))];case`shake`:return[ti(`${u} ${M}`,ri$1([ni({transform:`translateX(0)`,offset:0}),ni({transform:`translateX(-0.5rem)`,offset:.2}),ni({transform:`translateX(0.5rem)`,offset:.4}),ni({transform:`translateX(-0.35rem)`,offset:.6}),ni({transform:`translateX(0.35rem)`,offset:.8}),ni({transform:`translateX(0)`,offset:1})]))];case`jiggle`:return[ti(`${u} ${M}`,ri$1([ni({transform:`rotate(0deg)`,offset:0}),ni({transform:`rotate(-2.5deg)`,offset:.25}),ni({transform:`rotate(2.5deg)`,offset:.5}),ni({transform:`rotate(-1.5deg)`,offset:.75}),ni({transform:`rotate(0deg)`,offset:1})]))];case`flash`:return[ti(`${u} linear`,ri$1([ni({opacity:1,offset:0}),ni({opacity:.2,offset:.5}),ni({opacity:1,offset:1})]))];case`tada`:return[ti(`${u} ${M}`,ri$1([ni({transform:`scale(1) rotate(0deg)`,offset:0}),ni({transform:`scale(0.92) rotate(-2deg)`,offset:.1}),ni({transform:`scale(1.08) rotate(2deg)`,offset:.3}),ni({transform:`scale(1.02) rotate(-1deg)`,offset:.5}),ni({transform:`scale(1) rotate(0deg)`,offset:1})]))];case`bounce`:return[ti(`${u} ${M}`,ri$1([ni({transform:`translateY(0)`,offset:0}),ni({transform:`translateY(-0.6rem)`,offset:.35}),ni({transform:`translateY(0)`,offset:.55}),ni({transform:`translateY(-0.25rem)`,offset:.7}),ni({transform:`translateY(0)`,offset:.85}),ni({transform:`translateY(0)`,offset:1})]))];case`glow`:return[ti(`${u} ${M}`,ri$1([ni({boxShadow:`0 0 0 0 rgba(100, 180, 255, 0)`,offset:0}),ni({boxShadow:`0 0 1.25rem 0.25rem rgba(100, 180, 255, 0.45)`,offset:.5}),ni({boxShadow:`0 0 0 0 rgba(100, 180, 255, 0)`,offset:1})]))];default:return null}}var be=(()=>{class n extends On$1{constructor(){super(...arguments),this.builder=g(bi),this.el=g(Ie),this.renderer=g(yn),this.zone=g(G),this.cdr=g(Pg$1),this.suiAnimation=`fade`,this.suiDuration=500,this.suiDirection=`auto`,this.suiVisible=!0,this.suiPlay=0,this.suiDisabled=!1,this.suiVisibleChange=new nt$1,this.suiAnimationStart=new nt$1,this.suiAnimationComplete=new nt$1,this.suiOnShow=new nt$1,this.suiOnHide=new nt$1,this.animating=!1,this.hidden=!1,this.hostClassList=``,this.player=null,this.initialized=!1,this.lastVisible=!0,this.lastPlay=0}get classes(){return this.hostClassList}ngOnChanges(o){if(o.suiPlay&&(o.suiPlay.firstChange?this.lastPlay=this.suiPlay:this.suiPlay!==this.lastPlay&&(this.lastPlay=this.suiPlay,this.runStaticAnimation())),o.suiVisible){let a=this.suiVisible;if(!this.initialized){this.initialized=!0,this.lastVisible=a,this.applyImmediateVisibility(a),this.syncHostClasses();return}a!==this.lastVisible&&(this.lastVisible=a,this.runVisibilityTransition(a))}(o.suiAnimation||o.suiDuration||o.suiDirection||o.suiDisabled)&&this.syncHostClasses()}ngOnDestroy(){this.destroyPlayer()}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}toggle(){this.setVisible(!this.suiVisible)}stop(){this.destroyPlayer(),this.animating=!1,this.syncHostClasses(),this.cdr.markForCheck()}playStatic(){this.runStaticAnimation()}setVisible(o){if(this.suiVisible!==o){if(this.suiVisible=o,this.suiVisibleChange.emit(o),!this.initialized){this.initialized=!0,this.lastVisible=o,this.applyImmediateVisibility(o),this.syncHostClasses(),this.cdr.markForCheck();return}this.lastVisible=o,this.runVisibilityTransition(o),this.cdr.markForCheck()}}runVisibilityTransition(o){if(this.suiDisabled){this.suiAnimationStart.emit(),this.applyImmediateVisibility(o),this.emitVisibilityCallbacks(o),this.cdr.markForCheck();return}let{baseName:a,explicitDirection:s}=yi(this.suiAnimation),p=kg(s,this.suiDirection,o),m=ri(a)?`fade`:a,v=Qd(this.suiDuration),O=p===`in`?Ag(m,v):Vg(m,v);this.playSteps(O,o)}runStaticAnimation(){let{baseName:o}=yi(this.suiAnimation);if(!ri(o)||this.suiDisabled)return;let a=Bg(o,Qd(this.suiDuration));a&&this.playSteps(a,!0,!0)}playSteps(o,a,s=!1){this.destroyPlayer(),this.animating=!0,a&&(this.hidden=!1),this.suiAnimationStart.emit(),this.syncHostClasses(),this.cdr.markForCheck();let m=this.builder.build(o).create(this.el.nativeElement);this.player=m,m.onDone(()=>{this.zone.run(()=>{this.player=null,this.animating=!1,a?(this.applyVisibleEndState(),this.hidden=!1):(this.applyHiddenEndState(),this.hidden=!0),this.suiAnimationComplete.emit(),s||(a?this.suiOnShow.emit():this.suiOnHide.emit()),this.syncHostClasses(),this.cdr.markForCheck()})}),m.play()}emitVisibilityCallbacks(o){this.suiAnimationComplete.emit(),o?this.suiOnShow.emit():this.suiOnHide.emit()}applyImmediateVisibility(o){this.destroyPlayer(),this.animating=!1,o?(this.applyVisibleEndState(),this.hidden=!1):(this.applyHiddenEndState(),this.hidden=!0),this.syncHostClasses()}applyVisibleEndState(){let o=this.el.nativeElement;this.renderer.setStyle(o,`opacity`,`1`),this.renderer.setStyle(o,`visibility`,`visible`),this.renderer.removeStyle(o,`transform`),this.renderer.removeStyle(o,`transform-origin`),this.renderer.removeStyle(o,`box-shadow`)}applyHiddenEndState(){let o=this.el.nativeElement;this.renderer.setStyle(o,`opacity`,`0`),this.renderer.setStyle(o,`visibility`,`hidden`),this.renderer.removeStyle(o,`transform`),this.renderer.removeStyle(o,`transform-origin`)}destroyPlayer(){this.player&&(this.player.destroy(),this.player=null)}syncHostClasses(){let{baseName:o}=yi(this.suiAnimation),a=J.combineToClass([`transition`,...o.split(` `),J.getPropClass(this.animating,`animating`),J.getPropClass(this.suiDisabled,`disabled`),J.getPropClass(!this.hidden,`visible`),J.getPropClass(this.hidden,`hidden`)]);this.hostClassList=J.removeExcessWhitespace(a),this.syncClasses()}static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=(function(){return OI({type:n,selectors:[[`sui-transition`]],inputs:{suiAnimation:`suiAnimation`,suiDuration:`suiDuration`,suiDirection:`suiDirection`,suiVisible:`suiVisible`,suiPlay:`suiPlay`,suiDisabled:`suiDisabled`},outputs:{suiVisibleChange:`suiVisibleChange`,suiAnimationStart:`suiAnimationStart`,suiAnimationComplete:`suiAnimationComplete`,suiOnShow:`suiOnShow`,suiOnHide:`suiOnHide`},exportAs:[`suiTransition`],features:[uo$1,Kc$1],ngContentSelectors:[`*`],decls:1,vars:0,template:function(s,p){s&1&&(gC(),mC(0))},encapsulation:2})})()}}return uS([ve()],n.prototype,`suiVisible`,void 0),uS([ve()],n.prototype,`suiDisabled`,void 0),n})();var nm=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({})}}return n})();function Lg(n,u){if(n&1&&(is$1(0,`div`),zC(1),Vu()),n&2){let o=u.$implicit;KD(),gg(o)}}function Hg(n,u){n&1&&(is$1(0,`em`),zC(1,`No events yet`),Vu())}var he=class{constructor(){this.animation=`fade`,this.visible=!0,this.duration=500,this.disabled=!1,this.playCount=0,this.events=[]}run(u){this.animation=u,this.visible=!this.visible}play(u){this.animation=u,this.playCount++}log(u){this.events=[u,...this.events].slice(0,6)}};var om=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-scale-example`]],standalone:!1,features:[uo$1],decls:6,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`scale`)}),zC(2,`Scale`),Vu()(),is$1(3,`div`,2)(4,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(5,`img`,4),Vu()()),a&2&&(KD(4),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var am=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-zoom-example`]],standalone:!1,features:[uo$1],decls:6,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`zoom`)}),zC(2,`Zoom`),Vu()(),is$1(3,`div`,2)(4,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(5,`img`,4),Vu()()),a&2&&(KD(4),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var sm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-fade-example`]],standalone:!1,features:[uo$1],decls:14,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`fade`)}),zC(2,`Fade`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`fade up`)}),zC(4,`Fade Up`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.run(`fade down`)}),zC(6,`Fade Down`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.run(`fade left`)}),zC(8,`Fade Left`),Vu(),is$1(9,`button`,1),Kh$1(`click`,function(){return s.run(`fade right`)}),zC(10,`Fade Right`),Vu()(),is$1(11,`div`,2)(12,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(13,`img`,4),Vu()()),a&2&&(KD(12),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var rm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-flip-example`]],standalone:!1,features:[uo$1],decls:8,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`horizontal flip`)}),zC(2,`Horizontal Flip`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`vertical flip`)}),zC(4,`Vertical Flip`),Vu()(),is$1(5,`div`,2)(6,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(7,`img`,4),Vu()()),a&2&&(KD(6),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var lm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-drop-example`]],standalone:!1,features:[uo$1],decls:6,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`drop`)}),zC(2,`Drop`),Vu()(),is$1(3,`div`,2)(4,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(5,`img`,4),Vu()()),a&2&&(KD(4),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var dm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-fly-example`]],standalone:!1,features:[uo$1],decls:12,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`fly left`)}),zC(2,`Fly Left`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`fly right`)}),zC(4,`Fly Right`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.run(`fly up`)}),zC(6,`Fly Up`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.run(`fly down`)}),zC(8,`Fly Down`),Vu()(),is$1(9,`div`,2)(10,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(11,`img`,4),Vu()()),a&2&&(KD(10),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var mm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-swing-example`]],standalone:!1,features:[uo$1],decls:12,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`swing left`)}),zC(2,`Swing Left`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`swing right`)}),zC(4,`Swing Right`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.run(`swing up`)}),zC(6,`Swing Up`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.run(`swing down`)}),zC(8,`Swing Down`),Vu()(),is$1(9,`div`,2)(10,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(11,`img`,4),Vu()()),a&2&&(KD(10),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var pm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-browse-example`]],standalone:!1,features:[uo$1],decls:8,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`browse`)}),zC(2,`Browse`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`browse right`)}),zC(4,`Browse Right`),Vu()(),is$1(5,`div`,2)(6,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(7,`img`,4),Vu()()),a&2&&(KD(6),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var um=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-slide-example`]],standalone:!1,features:[uo$1],decls:12,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`slide down`)}),zC(2,`Slide Down`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`slide up`)}),zC(4,`Slide Up`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.run(`slide left`)}),zC(6,`Slide Left`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.run(`slide right`)}),zC(8,`Slide Right`),Vu()(),is$1(9,`div`,2)(10,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(11,`img`,4),Vu()()),a&2&&(KD(10),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var cm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-static-example`]],standalone:!1,features:[uo$1],decls:18,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiAnimation`,`suiPlay`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.play(`jiggle`)}),zC(2,`Jiggle`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.play(`flash`)}),zC(4,`Flash`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.play(`shake`)}),zC(6,`Shake`),Vu(),is$1(7,`button`,1),Kh$1(`click`,function(){return s.play(`pulse`)}),zC(8,`Pulse`),Vu(),is$1(9,`button`,1),Kh$1(`click`,function(){return s.play(`tada`)}),zC(10,`Tada`),Vu(),is$1(11,`button`,1),Kh$1(`click`,function(){return s.play(`bounce`)}),zC(12,`Bounce`),Vu(),is$1(13,`button`,1),Kh$1(`click`,function(){return s.play(`glow`)}),zC(14,`Glow`),Vu()(),is$1(15,`div`,2)(16,`sui-transition`,3),zh$1(17,`img`,4),Vu()()),a&2&&(KD(16),Gh$1(`suiAnimation`,s.animation)(`suiPlay`,s.playCount))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var hm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-visibility-example`]],standalone:!1,features:[uo$1],decls:5,vars:2,consts:[[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`scale`,3,`suiVisibleChange`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.visible=!s.visible}),zC(1),Vu(),is$1(2,`div`,1)(3,`sui-transition`,2),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(4,`img`,3),Vu()()),a&2&&(KD(),Gu$1(` `,s.visible?`Hide`:`Show`,`
`),KD(2),vg(`suiVisible`,s.visible))},dependencies:[Ii,z,be],encapsulation:2,changeDetection:1})}}return n})();var gm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-direction-example`]],standalone:!1,features:[uo$1],decls:8,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.run(`horizontal flip in`)}),zC(2,`Horizontal Flip In`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.run(`vertical flip out`)}),zC(4,`Vertical Flip Out`),Vu()(),is$1(5,`div`,2)(6,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(7,`img`,4),Vu()()),a&2&&(KD(6),Gh$1(`suiAnimation`,s.animation),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var fm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-duration-example`]],standalone:!1,features:[uo$1],decls:10,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`fade up`,3,`suiVisibleChange`,`suiDuration`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.duration=200,s.visible=!s.visible}),zC(2,`200ms`),Vu(),is$1(3,`button`,1),Kh$1(`click`,function(){return s.duration=`1s`,s.visible=!s.visible}),zC(4,`1s`),Vu(),is$1(5,`button`,1),Kh$1(`click`,function(){return s.duration=`3s`,s.visible=!s.visible}),zC(6,`3s`),Vu()(),is$1(7,`div`,2)(8,`sui-transition`,3),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(9,`img`,4),Vu()()),a&2&&(KD(8),Gh$1(`suiDuration`,s.duration),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var Sm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-methods-example`]],standalone:!1,features:[uo$1],decls:13,vars:1,consts:[[`leaf`,`suiTransition`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`swing down`,`suiDuration`,`2s`,3,`suiVisibleChange`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){if(a&1){let p=dC();is$1(0,`div`,1)(1,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(11);return jd$1(v.show())}),zC(2,`Show`),Vu(),is$1(3,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(11);return jd$1(v.hide())}),zC(4,`Hide`),Vu(),is$1(5,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(11);return jd$1(v.toggle())}),zC(6,`Toggle`),Vu(),is$1(7,`button`,2),Kh$1(`click`,function(){Pd$1(p);let v=EC(11);return jd$1(v.stop())}),zC(8,`Stop`),Vu()(),is$1(9,`div`,3)(10,`sui-transition`,4,0),Dg(`suiVisibleChange`,function(v){return Pd$1(p),ZC(s.visible,v)||(s.visible=v),jd$1(v)}),zh$1(12,`img`,5),Vu()()}a&2&&(KD(10),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var vm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-events-example`]],standalone:!1,features:[uo$1],decls:9,vars:2,consts:[[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`drop`,3,`suiVisibleChange`,`suiAnimationStart`,`suiAnimationComplete`,`suiOnShow`,`suiOnHide`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`],[`sui-segment`,``]],template:function(a,s){a&1&&(is$1(0,`button`,0),Kh$1(`click`,function(){return s.visible=!s.visible}),zC(1,` Toggle
`),Vu(),is$1(2,`div`,1)(3,`sui-transition`,2),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),Kh$1(`suiAnimationStart`,function(){return s.log(`Animation started`)})(`suiAnimationComplete`,function(){return s.log(`Animation complete`)})(`suiOnShow`,function(){return s.log(`Shown`)})(`suiOnHide`,function(){return s.log(`Hidden`)}),zh$1(4,`img`,3),Vu()(),is$1(5,`div`,4),oC(6,Lg,2,1,`div`,null,nC,!1,Hg,2,0,`em`),Vu()),a&2&&(KD(3),vg(`suiVisible`,s.visible),KD(3),iC(s.events))},dependencies:[Ii,z,ze,be],encapsulation:2,changeDetection:1})}}return n})();var xm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=to$1(n)))(s||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition-disabled-example`]],standalone:!1,features:[uo$1],decls:8,vars:4,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-button`,``,`suiToggle`,``,3,`click`,`suiActive`],[1,`transition-stage`],[`suiAnimation`,`fly left`,3,`suiVisibleChange`,`suiDisabled`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(is$1(0,`div`,0)(1,`button`,1),Kh$1(`click`,function(){return s.visible=!s.visible}),zC(2,`Toggle`),Vu(),is$1(3,`button`,2),Kh$1(`click`,function(){return s.disabled=!s.disabled}),zC(4),Vu()(),is$1(5,`div`,3)(6,`sui-transition`,4),Dg(`suiVisibleChange`,function(m){return ZC(s.visible,m)||(s.visible=m),m}),zh$1(7,`img`,5),Vu()()),a&2&&(KD(3),Gh$1(`suiActive`,s.disabled),KD(),Gu$1(` `,s.disabled?`Animations disabled`:`Animations enabled`,` `),KD(2),Gh$1(`suiDisabled`,s.disabled),vg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();function Rg(n,u){n&1&&zh$1(0,`doc-transition-scale-example`)}function zg(n,u){n&1&&zh$1(0,`doc-transition-zoom-example`)}function jg(n,u){n&1&&zh$1(0,`doc-transition-fade-example`)}function Ng(n,u){n&1&&zh$1(0,`doc-transition-flip-example`)}function Ug(n,u){n&1&&zh$1(0,`doc-transition-drop-example`)}function $g(n,u){n&1&&zh$1(0,`doc-transition-fly-example`)}function Yg(n,u){n&1&&zh$1(0,`doc-transition-swing-example`)}function Gg(n,u){n&1&&zh$1(0,`doc-transition-browse-example`)}function Xg(n,u){n&1&&zh$1(0,`doc-transition-slide-example`)}function Jg(n,u){n&1&&zh$1(0,`doc-transition-static-example`)}function qg(n,u){n&1&&zh$1(0,`doc-transition-visibility-example`)}function Zg(n,u){n&1&&zh$1(0,`doc-transition-direction-example`)}function Kg(n,u){n&1&&zh$1(0,`doc-transition-duration-example`)}function Qg(n,u){n&1&&zh$1(0,`doc-transition-methods-example`)}function ef(n,u){n&1&&zh$1(0,`doc-transition-events-example`)}function tf(n,u){n&1&&zh$1(0,`doc-transition-disabled-example`)}function nf(n,u){if(n&1&&(is$1(0,`div`)(1,`h2`,2),zC(2,`Transitions`),Vu(),is$1(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Scale`),Vu(),is$1(6,`p`),zC(7,`An element can scale into or out of view`),Vu(),jh$1(8,Rg,1,0,`ng-template`,5),Vu(),is$1(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Zoom`),Vu(),is$1(12,`p`),zC(13,`An element can zoom into view from far away`),Vu(),jh$1(14,zg,1,0,`ng-template`,5),Vu(),is$1(15,`doc-code-sample`,3)(16,`h3`,4),zC(17,`Fade`),Vu(),is$1(18,`p`),zC(19,`An element can fade into or out of view descending and ascending`),Vu(),jh$1(20,jg,1,0,`ng-template`,5),Vu(),is$1(21,`doc-code-sample`,3)(22,`h3`,4),zC(23,`Flip`),Vu(),is$1(24,`p`),zC(25,`An element can flip into or out of view vertically or horizontally`),Vu(),jh$1(26,Ng,1,0,`ng-template`,5),Vu(),is$1(27,`doc-code-sample`,3)(28,`h3`,4),zC(29,`Drop`),Vu(),is$1(30,`p`),zC(31,`An element can drop into view from above`),Vu(),jh$1(32,Ug,1,0,`ng-template`,5),Vu(),is$1(33,`doc-code-sample`,3)(34,`h3`,4),zC(35,`Fly`),Vu(),is$1(36,`p`),zC(37,`An element can fly in from off canvas`),Vu(),jh$1(38,$g,1,0,`ng-template`,5),Vu(),is$1(39,`doc-code-sample`,3)(40,`h3`,4),zC(41,`Swing`),Vu(),is$1(42,`p`),zC(43,`An element can swing into view`),Vu(),jh$1(44,Yg,1,0,`ng-template`,5),Vu(),is$1(45,`doc-code-sample`,3)(46,`h3`,4),zC(47,`Browse`),Vu(),is$1(48,`p`),zC(49,`An element can appear and disappear as part of a series`),Vu(),jh$1(50,Gg,1,0,`ng-template`,5),Vu(),is$1(51,`doc-code-sample`,3)(52,`h3`,4),zC(53,`Slide`),Vu(),is$1(54,`p`),zC(55,`An element can appear to slide in from above or below`),Vu(),jh$1(56,Xg,1,0,`ng-template`,5),Vu(),zh$1(57,`br`),is$1(58,`h2`,2),zC(59,`Static Animations`),Vu(),is$1(60,`doc-code-sample`,6)(61,`h3`,4),zC(62,`Static Animations`),Vu(),is$1(63,`p`),zC(64,`Jiggle, flash, shake, pulse, tada, bounce and glow draw attention to an element without changing its visibility`),Vu(),is$1(65,`div`,7),zC(66,` Static animations run each time the value bound to `),is$1(67,`code`),zC(68,`suiPlay`),Vu(),zC(69,` changes, so increment a counter to replay one. `),Vu(),jh$1(70,Jg,1,0,`ng-template`,5),Vu(),zh$1(71,`br`),is$1(72,`h2`,2),zC(73,`Usage`),Vu(),is$1(74,`doc-code-sample`,3)(75,`h3`,4),zC(76,`Visibility`),Vu(),is$1(77,`p`),zC(78,`After an animation finishes, the element keeps its final state. An outward transition leaves it hidden, an inward transition leaves it visible`),Vu(),is$1(79,`div`,7)(80,`code`),zC(81,`suiVisible`),Vu(),zC(82,` supports two-way binding with `),is$1(83,`code`),zC(84,`[(suiVisible)]`),Vu(),zC(85,`. `),Vu(),jh$1(86,qg,1,0,`ng-template`,5),Vu(),is$1(87,`doc-code-sample`,3)(88,`h3`,4),zC(89,`Specifying a Direction`),Vu(),is$1(90,`p`),zC(91,`To force an animation direction, add either `),is$1(92,`code`),zC(93,`in`),Vu(),zC(94,` or `),is$1(95,`code`),zC(96,`out`),Vu(),zC(97,` to the animation name`),Vu(),is$1(98,`div`,7),zC(99,` Without a suffix the direction is chosen automatically: showing an element plays the inward animation and hiding it plays the outward one. You can also force it with `),is$1(100,`code`),zC(101,`suiDirection`),Vu(),zC(102,`. `),Vu(),jh$1(103,Zg,1,0,`ng-template`,5),Vu(),is$1(104,`doc-code-sample`,3)(105,`h3`,4),zC(106,`Duration`),Vu(),is$1(107,`p`),zC(108,`The duration can be a number of milliseconds or a CSS time string such as `),is$1(109,`code`),zC(110,`500ms`),Vu(),zC(111,` or `),is$1(112,`code`),zC(113,`2s`),Vu()(),jh$1(114,Kg,1,0,`ng-template`,5),Vu(),is$1(115,`doc-code-sample`,3)(116,`h3`,4),zC(117,`Controlling Programmatically`),Vu(),is$1(118,`p`),zC(119,`Export the component with `),is$1(120,`code`),zC(121,`#ref="suiTransition"`),Vu(),zC(122,` to show, hide, toggle or stop it from the template or a component`),Vu(),jh$1(123,Qg,1,0,`ng-template`,5),Vu(),is$1(124,`doc-code-sample`,6)(125,`h3`,4),zC(126,`Callbacks`),Vu(),is$1(127,`p`),zC(128,`A transition reports when an animation starts and completes, and when the element is shown or hidden`),Vu(),jh$1(129,ef,1,0,`ng-template`,5),Vu(),is$1(130,`doc-code-sample`,3)(131,`h3`,4),zC(132,`Disabled`),Vu(),is$1(133,`p`),zC(134,`A disabled transition changes visibility straight away without animating`),Vu(),jh$1(135,tf,1,0,`ng-template`,5),Vu()()),n&2){let o=pC();KD(3),Gh$1(`templateCode`,o.snippetScale),KD(6),Gh$1(`templateCode`,o.snippetZoom),KD(6),Gh$1(`templateCode`,o.snippetFade),KD(6),Gh$1(`templateCode`,o.snippetFlip),KD(6),Gh$1(`templateCode`,o.snippetDrop),KD(6),Gh$1(`templateCode`,o.snippetFly),KD(6),Gh$1(`templateCode`,o.snippetSwing),KD(6),Gh$1(`templateCode`,o.snippetBrowse),KD(6),Gh$1(`templateCode`,o.snippetSlide),KD(9),Gh$1(`templateCode`,o.snippetStatic)(`componentCode`,o.snippetStaticTs),KD(14),Gh$1(`templateCode`,o.snippetVisibility),KD(13),Gh$1(`templateCode`,o.snippetDirection),KD(17),Gh$1(`templateCode`,o.snippetDuration),KD(11),Gh$1(`templateCode`,o.snippetMethods),KD(9),Gh$1(`templateCode`,o.snippetEvents)(`componentCode`,o.snippetEventsTs),KD(6),Gh$1(`templateCode`,o.snippetDisabled)}}function of(n,u){n&1&&(is$1(0,`div`)(1,`div`,7)(2,`code`),zC(3,`sui-transition`),Vu(),zC(4,` animates with `),is$1(5,`code`),zC(6,`@angular/animations`),Vu(),zC(7,`, so your application must enable animations, for example by importing `),is$1(8,`code`),zC(9,`BrowserAnimationsModule`),Vu(),zC(10,` or adding `),is$1(11,`code`),zC(12,`provideAnimations()`),Vu(),zC(13,`. `),Vu(),is$1(14,`h2`,2),zC(15,`sui-transition`),Vu(),is$1(16,`h4`,4),zC(17,`Properties`),Vu(),is$1(18,`table`,8)(19,`thead`)(20,`tr`)(21,`th`),zC(22,`Property`),Vu(),is$1(23,`th`),zC(24,`Description`),Vu(),is$1(25,`th`),zC(26,`Type`),Vu(),is$1(27,`th`),zC(28,`Default`),Vu()()(),is$1(29,`tbody`)(30,`tr`)(31,`td`),zC(32,` suiAnimation `),Vu(),is$1(33,`td`),zC(34,` The named animation, e.g. `),is$1(35,`code`),zC(36,`fade up`),Vu(),zC(37,`, `),is$1(38,`code`),zC(39,`horizontal flip`),Vu(),zC(40,` or `),is$1(41,`code`),zC(42,`pulse`),Vu(),zC(43,`. Add `),is$1(44,`code`),zC(45,`in`),Vu(),zC(46,` or `),is$1(47,`code`),zC(48,`out`),Vu(),zC(49,` to force a direction `),Vu(),is$1(50,`td`)(51,`div`,9),zC(52,` string `),Vu()(),is$1(53,`td`)(54,`div`,10),zC(55,` 'fade' `),Vu()()(),is$1(56,`tr`)(57,`td`),zC(58,` suiDuration `),Vu(),is$1(59,`td`),zC(60,` Animation duration in milliseconds, or a CSS time string `),Vu(),is$1(61,`td`)(62,`div`,9),zC(63,` number | string `),Vu()(),is$1(64,`td`)(65,`div`,10),zC(66,` 500 `),Vu()()(),is$1(67,`tr`)(68,`td`),zC(69,` suiDirection `),Vu(),is$1(70,`td`),zC(71,` Whether showing and hiding pick the inward or outward animation automatically, or always use one `),Vu(),is$1(72,`td`)(73,`div`,9),zC(74,` 'auto' | 'in' | 'out' `),Vu()(),is$1(75,`td`)(76,`div`,10),zC(77,` 'auto' `),Vu()()(),is$1(78,`tr`)(79,`td`),zC(80,` suiVisible `),Vu(),is$1(81,`td`),zC(82,` Whether the element is visible. Changing it runs the transition. Supports two-way binding `),Vu(),is$1(83,`td`)(84,`div`,9),zC(85,` boolean `),Vu()(),is$1(86,`td`)(87,`div`,10),zC(88,` true `),Vu()()(),is$1(89,`tr`)(90,`td`),zC(91,` suiPlay `),Vu(),is$1(92,`td`),zC(93,` Change this value (for example, increment a counter) to replay the current static animation `),Vu(),is$1(94,`td`)(95,`div`,9),zC(96,` number `),Vu()(),is$1(97,`td`)(98,`div`,10),zC(99,` 0 `),Vu()()(),is$1(100,`tr`)(101,`td`),zC(102,` suiDisabled `),Vu(),is$1(103,`td`),zC(104,` Turn animations off so visibility changes apply straight away `),Vu(),is$1(105,`td`)(106,`div`,9),zC(107,` boolean `),Vu()(),is$1(108,`td`)(109,`div`,10),zC(110,` false `),Vu()()()()(),is$1(111,`h4`,4),zC(112,`Events`),Vu(),is$1(113,`table`,8)(114,`thead`)(115,`tr`)(116,`th`),zC(117,`Event`),Vu(),is$1(118,`th`),zC(119,`Description`),Vu(),is$1(120,`th`),zC(121,`Type`),Vu()()(),is$1(122,`tbody`)(123,`tr`)(124,`td`),zC(125,` suiVisibleChange `),Vu(),is$1(126,`td`),zC(127,` Emitted when visibility is changed through a method call such as `),is$1(128,`code`),zC(129,`show()`),Vu(),zC(130,`, `),is$1(131,`code`),zC(132,`hide()`),Vu(),zC(133,` or `),is$1(134,`code`),zC(135,`toggle()`),Vu()(),is$1(136,`td`)(137,`div`,9),zC(138,` EventEmitter&lt;boolean&gt; `),Vu()()(),is$1(139,`tr`)(140,`td`),zC(141,` suiAnimationStart `),Vu(),is$1(142,`td`),zC(143,` Emitted when a transition or static animation begins `),Vu(),is$1(144,`td`)(145,`div`,9),zC(146,` EventEmitter&lt;void&gt; `),Vu()()(),is$1(147,`tr`)(148,`td`),zC(149,` suiAnimationComplete `),Vu(),is$1(150,`td`),zC(151,` Emitted when a transition or static animation finishes `),Vu(),is$1(152,`td`)(153,`div`,9),zC(154,` EventEmitter&lt;void&gt; `),Vu()()(),is$1(155,`tr`)(156,`td`),zC(157,` suiOnShow `),Vu(),is$1(158,`td`),zC(159,` Emitted after an inward transition leaves the element visible `),Vu(),is$1(160,`td`)(161,`div`,9),zC(162,` EventEmitter&lt;void&gt; `),Vu()()(),is$1(163,`tr`)(164,`td`),zC(165,` suiOnHide `),Vu(),is$1(166,`td`),zC(167,` Emitted after an outward transition leaves the element hidden `),Vu(),is$1(168,`td`)(169,`div`,9),zC(170,` EventEmitter&lt;void&gt; `),Vu()()()()(),is$1(171,`h4`,4),zC(172,`Methods`),Vu(),is$1(173,`table`,8)(174,`thead`)(175,`tr`)(176,`th`),zC(177,`Method`),Vu(),is$1(178,`th`),zC(179,`Description`),Vu()()(),is$1(180,`tbody`)(181,`tr`)(182,`td`),zC(183,` show() `),Vu(),is$1(184,`td`),zC(185,` Shows the element with the current animation `),Vu()(),is$1(186,`tr`)(187,`td`),zC(188,` hide() `),Vu(),is$1(189,`td`),zC(190,` Hides the element with the current animation `),Vu()(),is$1(191,`tr`)(192,`td`),zC(193,` toggle() `),Vu(),is$1(194,`td`),zC(195,` Toggles between hidden and visible `),Vu()(),is$1(196,`tr`)(197,`td`),zC(198,` setVisible(visible) `),Vu(),is$1(199,`td`),zC(200,` Shows or hides the element `),Vu()(),is$1(201,`tr`)(202,`td`),zC(203,` playStatic() `),Vu(),is$1(204,`td`),zC(205,` Runs the current animation if it is a static one; does nothing otherwise `),Vu()(),is$1(206,`tr`)(207,`td`),zC(208,` stop() `),Vu(),is$1(209,`td`),zC(210,` Stops the animation that is running `),Vu()()()(),is$1(211,`h4`,4),zC(212,`Animations`),Vu(),is$1(213,`table`,8)(214,`thead`)(215,`tr`)(216,`th`),zC(217,`Type`),Vu(),is$1(218,`th`),zC(219,`Names`),Vu()()(),is$1(220,`tbody`)(221,`tr`)(222,`td`),zC(223,` Inward / outward `),Vu(),is$1(224,`td`)(225,`code`),zC(226,`scale`),Vu(),zC(227,`, `),is$1(228,`code`),zC(229,`zoom`),Vu(),zC(230,`, `),is$1(231,`code`),zC(232,`fade`),Vu(),zC(233,`, `),is$1(234,`code`),zC(235,`fade up`),Vu(),zC(236,`, `),is$1(237,`code`),zC(238,`fade down`),Vu(),zC(239,`, `),is$1(240,`code`),zC(241,`fade left`),Vu(),zC(242,`, `),is$1(243,`code`),zC(244,`fade right`),Vu(),zC(245,`, `),is$1(246,`code`),zC(247,`horizontal flip`),Vu(),zC(248,`, `),is$1(249,`code`),zC(250,`vertical flip`),Vu(),zC(251,`, `),is$1(252,`code`),zC(253,`drop`),Vu(),zC(254,`, `),is$1(255,`code`),zC(256,`fly left`),Vu(),zC(257,`, `),is$1(258,`code`),zC(259,`fly right`),Vu(),zC(260,`, `),is$1(261,`code`),zC(262,`fly up`),Vu(),zC(263,`, `),is$1(264,`code`),zC(265,`fly down`),Vu(),zC(266,`, `),is$1(267,`code`),zC(268,`swing left`),Vu(),zC(269,`, `),is$1(270,`code`),zC(271,`swing right`),Vu(),zC(272,`, `),is$1(273,`code`),zC(274,`swing up`),Vu(),zC(275,`, `),is$1(276,`code`),zC(277,`swing down`),Vu(),zC(278,`, `),is$1(279,`code`),zC(280,`browse`),Vu(),zC(281,`, `),is$1(282,`code`),zC(283,`browse right`),Vu(),zC(284,`, `),is$1(285,`code`),zC(286,`slide down`),Vu(),zC(287,`, `),is$1(288,`code`),zC(289,`slide up`),Vu(),zC(290,`, `),is$1(291,`code`),zC(292,`slide left`),Vu(),zC(293,`, `),is$1(294,`code`),zC(295,`slide right`),Vu()()(),is$1(296,`tr`)(297,`td`),zC(298,` Static `),Vu(),is$1(299,`td`)(300,`code`),zC(301,`jiggle`),Vu(),zC(302,`, `),is$1(303,`code`),zC(304,`flash`),Vu(),zC(305,`, `),is$1(306,`code`),zC(307,`shake`),Vu(),zC(308,`, `),is$1(309,`code`),zC(310,`pulse`),Vu(),zC(311,`, `),is$1(312,`code`),zC(313,`tada`),Vu(),zC(314,`, `),is$1(315,`code`),zC(316,`bounce`),Vu(),zC(317,`, `),is$1(318,`code`),zC(319,`glow`),Vu()()()()()())}var bm=(()=>{class n{constructor(o){this.snippetScale=Vd,this.snippetZoom=Bd,this.snippetFade=Od,this.snippetFlip=Ld,this.snippetDrop=Hd,this.snippetFly=Wd,this.snippetSwing=Rd,this.snippetBrowse=zd,this.snippetSlide=jd,this.snippetStatic=Nd,this.snippetStaticTs=Ud,this.snippetVisibility=$d,this.snippetDirection=Yd,this.snippetDuration=Gd,this.snippetMethods=Xd,this.snippetEvents=Jd,this.snippetEventsTs=qd,this.snippetDisabled=Zd,o.setTitle(`Transition | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-transition`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Transition`,`subHeader`,`A transition is an animation usually used to move content in or out of view`,`semanticUrl`,`https://semantic-ui.com/modules/transition.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-message`,``,`suiState`,`info`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(is$1(0,`doc-page`,0),jh$1(1,nf,136,18,`div`,1)(2,of,320,0,`div`,1),Vu()),a&2&&(KD(),Gh$1(`docPageContent`,`definition`),KD(),Gh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li,om,am,sm,rm,lm,dm,mm,pm,um,cm,hm,gm,fm,Sm,vm,xm],styles:[`[_nghost-%COMP%]     .transition-stage{min-height:170px;padding-top:1rem}`],changeDetection:1})}}return n})();var af=[{path:`accordion`,component:ua},{path:`checkbox`,component:Ra},{path:`dimmer`,component:so},{path:`dropdown`,component:jl},{path:`embed`,component:Ln},{path:`modal`,component:Jr},{path:`popup`,component:js},{path:`progress`,component:ys},{path:`rating`,component:vo},{path:`search`,component:Wo},{path:`select`,component:Dr},{path:`shape`,component:ed},{path:`sidebar`,component:yd},{path:`sticky`,component:Ad},{path:`tab`,component:ia},{path:`transition`,component:bm}];var ym=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[Is$1.forChild(af),Is$1]})}}return n})();var U3=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Pe$1,ym,Kr$1,gi,K,R$1,Fn,xi$1,Ks$1,uo,Go,bi$2,vi$2,We$1,Vt,yi$1,Ci,B$1,Rr,pi,wi,pi$1,bi$1,ci,ns,U,ra,ti$1,Xl,$,At,Td,Qe,nm]})}}return n})();export{U3 as ModulesModule};