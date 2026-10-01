import{a as J,b as Ue}from"./chunk-D262BDEX.js";import{d as te,e as ie,g as ne,i as Ae,j as Be,k as ke,l as Z,m as Pe,p as Ne,q as Le,r as He,s as Ve,t as ee,u as Oe,v as h,w as F,x as S,y as qe}from"./chunk-WQWEICND.js";import{a as Y,c as We,d as b,e as ge,f as N,g as se,h as ze,i as I,k as Re}from"./chunk-HT427THK.js";import{A as O,B as q,C as U,D as j,E as _,F as Ge,a as oe,b as y,c as C,d as X,e as Fe,f as Me,h as w,i as De,l as P,n as we,o as M,p as D,q as A,r as _e,w as z,x as Te}from"./chunk-YB6MVHLL.js";import{b as Ce,d as he,h as be,j as T,l as Ie}from"./chunk-CM7RNYHB.js";import{$a as x,Aa as Q,Ba as de,Da as p,Ea as c,J as $,N as le,Ra as o,Sa as i,Ta as e,Ua as d,Vb as me,_b as V,aa as v,bb as H,ca as re,g as Ee,na as m,nb as t,ta as L,vb as ye,za as s}from"./chunk-AUZPSXMG.js";import"./chunk-HHHS5ZAZ.js";var je=`<form sui-form>
  <div suiFormField>
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name">
  </div>
  <div suiFormField>
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name">
  </div>
  <div suiFormField>
    <sui-checkbox>I agree to the terms and conditions</sui-checkbox>
  </div>
  <button sui-button type="submit">Submit</button>
</form>
`;var Ye=`<form sui-form>
  <h4 sui-header suiDividing>Shipping Information</h4>
  <div suiFormField>
    <label>Name</label>
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <input type="text" name="shipping[first-name]" placeholder="First Name">
      </div>
      <div suiFormField>
        <input type="text" name="shipping[last-name]" placeholder="Last Name">
      </div>
    </div>
  </div>
  <div suiFormField>
    <label>Billing Address</label>
    <div suiFormFields>
      <div suiFormField suiWidth="twelve">
        <input type="text" name="shipping[address]" placeholder="Street Address">
      </div>
      <div suiFormField suiWidth="four">
        <input type="text" name="shipping[address-2]" placeholder="Apt #">
      </div>
    </div>
  </div>
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>State</label>
      <sui-select suiPlaceholder="State" [suiOptions]="states"></sui-select>
    </div>
    <div suiFormField>
      <label>Country</label>
      <sui-select suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
    </div>
  </div>
  <h4 sui-header suiDividing>Billing Information</h4>
  <div suiFormField>
    <label>Card Type</label>
    <sui-select suiPlaceholder="Type" [suiOptions]="cards"></sui-select>
  </div>
  <div suiFormFields>
    <div suiFormField suiWidth="seven">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #">
    </div>
    <div suiFormField suiWidth="three">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC">
    </div>
    <div suiFormField suiWidth="six">
      <label>Expiration</label>
      <div suiFormFields suiWidth="two">
        <div suiFormField>
          <sui-select suiPlaceholder="Month" [suiOptions]="months"></sui-select>
        </div>
        <div suiFormField>
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year">
        </div>
      </div>
    </div>
  </div>
  <h4 sui-header suiDividing>Receipt</h4>
  <div suiFormField>
    <label>Send Receipt To:</label>
    <sui-select suiPlaceholder="Saved Contacts" [suiOptions]="contacts"></sui-select>
  </div>
  <div sui-segment>
    <div suiFormField>
      <sui-checkbox suiType="toggle">Do not include a receipt in the package</sui-checkbox>
    </div>
  </div>
  <div sui-button tabindex="0">Submit Order</div>
</form>
`;var Je=`<div sui-form>
  <div suiFormField>
    <label>User Input</label>
    <input type="text">
  </div>
</div>
`;var Xe=`<div sui-form>
  <div suiFormFields>
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var Ke=`<div sui-form>
  <div suiFormFields suiWidth="three">
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var $e=`<div sui-form>
  <div suiFormFields suiInline>
    <div suiFormField suiWidth="eight">
      <label>Name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField suiWidth="three">
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField suiWidth="five">
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var Qe=`<div sui-form>
  <div suiFormField>
    <label>Text</label>
    <textarea></textarea>
  </div>
  <div suiFormField>
    <label>Short Text</label>
    <textarea rows="2"></textarea>
  </div>
</div>
`;var Ze=`<div sui-form>
  <div suiFormField suiInline>
    <sui-checkbox>Checkbox</sui-checkbox>
  </div>
  <div suiFormField suiInline>
    <sui-checkbox suiType="slider">Slider</sui-checkbox>
    <label></label>
  </div>
  <div suiFormField suiInline>
    <sui-checkbox suiType="toggle">Toggle</sui-checkbox>
  </div>
</div>
`;var et=`<div sui-form>
  <div suiFormFields>
    <label>Select your favorite fruit:</label>
    <div suiFormField>
      <sui-checkbox suiType="radio">Apples</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Oranges</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Pears</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Grapefruit</sui-checkbox>
    </div>
  </div>
  <div suiFormFields suiGrouped>
    <label>Select your second favorite fruit:</label>
    <div suiFormField>
      <sui-checkbox suiType="radio">Apples</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Oranges</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Pears</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Grapefruit</sui-checkbox>
    </div>
  </div>
</div>
`;var tt=`<div sui-form>
  <div suiFormField>
    <label>Gender</label>
    <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
  </div>
</div>
`;var it=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiSearch suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var nt=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiMultiple suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var at=`<div sui-form>
  <div suiFormField>
    <select>
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
  </div>
</div>
`;var lt=`<div sui-form>
  <div sui-message>
    <div class="header">We had some issues</div>
    <ul class="list">
      <li>Please enter your first name</li>
      <li>Please enter your last name</li>
    </ul>
  </div>
</div>
`;var rt=`<div sui-form suiLoading>
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-button>Submit</div>
</div>
`;var dt=`<div sui-form suiState="success">
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-message suiState="success">
    <div suiMessageHeader>Form Completed</div>
    <p>Youre all signed up for the newsletter.</p>
  </div>
  <div sui-button>Submit</div>
</div>
`;var mt=`<div sui-form suiState="error">
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-message suiState="error">
    <div suiMessageHeader>Action Forbidden</div>
    <p>You can only sign up for an account once with a given e-mail address.</p>
  </div>
  <div sui-button>Submit</div>
</div>
`;var ot=`<div sui-form suiState="warning">
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-message suiState="warning">
    <div suiMessageHeader>Action Forbidden</div>
    <ul suiMessageList>
      <li>That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.
      </li>
    </ul>
  </div>
  <div sui-button>Submit</div>
</div>
`;var st=`<div sui-form>
  <div suiFormFields suiWidth="two">
    <div suiFormField suiError>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div suiFormField suiError>
    <label>Gender</label>
    <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
  </div>
  <div suiFormField suiError suiInline>
    <sui-checkbox>
      I agree to the Terms and Conditions
    </sui-checkbox>
  </div>
</div>
`;var ut=`<div sui-form>
  <div suiFormFields suiWidth="two">
    <div suiFormField disabled>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField disabled>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
</div>
`;var ct=`<div sui-form>
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="Read Only" readonly="" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Read Only" readonly="" type="text">
    </div>
  </div>
</div>
`;var pt=`<div sui-form suiSize="mini">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var vt=`<div sui-form suiSize="tiny">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var xt=`<div sui-form suiSize="small">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var ft=`<div sui-form suiSize="large">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var St=`<div sui-form suiSize="big">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var ht=`<div sui-form suiSize="huge">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var gt=`<div sui-form suiSize="massive">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Et=`<div sui-form suiEqualWidth>
  <div suiFormFields>
    <div suiFormField>
      <label>Username</label>
      <input type="text" placeholder="Username">
    </div>
    <div suiFormField>
      <label>Password</label>
      <input type="password">
    </div>
  </div>
  <div suiFormFields>
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var yt=`<div sui-segment suiInverted>
  <div sui-form suiInverted>
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>Username</label>
        <input type="text" placeholder="Username">
      </div>
      <div suiFormField>
        <label>Password</label>
        <input type="password">
      </div>
    </div>
    <div suiFormField suiInline>
      <sui-checkbox>I agree to terms and conditions</sui-checkbox>
    </div>
    <div sui-button>Submit</div>
  </div>
</div>
`;var Ct=`<div sui-form>
  <div suiFormField suiInline>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
</div>
`;var bt=`<div sui-form>
  <div suiFormFields>
    <div suiFormField suiWidth="six">
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField suiWidth="four">
      <label>Middle</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField suiWidth="six">
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
  <div suiFormFields>
    <div suiFormField suiWidth="two">
      <input type="text" placeholder="2 Wide">
    </div>
    <div suiFormField suiWidth="twelve">
      <input type="text" placeholder="12 Wide">
    </div>
    <div suiFormField suiWidth="two">
      <input type="text" placeholder="2 Wide">
    </div>
  </div>
  <div suiFormFields>
    <div suiFormField suiWidth="eight">
      <input type="text" placeholder="8 Wide">
    </div>
    <div suiFormField suiWidth="six">
      <input type="text" placeholder="6 Wide">
    </div>
    <div suiFormField suiWidth="two">
      <input type="text" placeholder="2 Wide">
    </div>
  </div>
</div>
`;var Ft=`<div sui-form>
  <div suiFormField suiRequired>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
  <div suiFormField suiInline suiRequired>
    <sui-checkbox>I agree to terms and conditions</sui-checkbox>
  </div>
</div>
`;var Mt=`<div sui-form>
  <div suiFormFields suiWidth="three">
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var Dt=`<div sui-form>
  <div suiFormFields suiGrouped>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Apples
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Oranges
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Pears
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Grapefruit
      </sui-checkbox>
    </div>
  </div>
</div>
`;var wt=`<div sui-form>
  <div suiFormFields>
    <div suiFormField>
      <label>Username</label>
      <input type="text" placeholder="Username">
    </div>
    <div suiFormField>
      <label>Password</label>
      <input type="password">
    </div>
  </div>
  <div suiFormFields suiEqualWidth>
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var _t=`<div sui-form>
  <div suiFormFields suiInline>
    <label>Phone Number</label>
    <div suiFormField>
      <input type="text" placeholder="(xxx)">
    </div>
    <div suiFormField>
      <input type="text" placeholder="xxx">
    </div>
    <div suiFormField>
      <input type="text" placeholder="xxxx">
    </div>
  </div>
</div>
`;var It=`<div sui-form>
  <div suiFormFields suiInline>
    <label>What's your favourite fruit?</label>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Apples
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Oranges
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Pears
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Grapefruit
      </sui-checkbox>
    </div>
  </div>
</div>
`;var g=class{constructor(){this.states=[{text:"Alabama",value:"al"}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Nigeria",value:"ng",flag:"ng"}],this.months=[{text:"January",value:"jan"}],this.cards=[{text:"Visa",value:"visa"}],this.contacts=[{text:"Justen Kitsune",image:{avatar:!0,src:"https://semantic-ui.com/images/avatar/small/stevie.jpg"}}],this.gender=[{text:"Male"},{text:"Female"}]}},At=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-basic-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-form",""],["suiFormField",""],["type","text","name","first-name","placeholder","First Name"],["type","text","name","last-name","placeholder","Last Name"],["sui-button","","type","submit"]],template:function(l,r){l&1&&(i(0,"form",0)(1,"div",1)(2,"label"),t(3,"First Name"),e(),d(4,"input",2),e(),i(5,"div",1)(6,"label"),t(7,"Last Name"),e(),d(8,"input",3),e(),i(9,"div",1)(10,"sui-checkbox"),t(11,"I agree to the terms and conditions"),e()(),i(12,"button",4),t(13,"Submit"),e()())},dependencies:[ne,te,ie,h,S,J,I],encapsulation:2})}}return n})(),Bt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-basic-alt-example"]],standalone:!1,features:[p],decls:63,vars:5,consts:[["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],["suiFormFields","","suiWidth","two"],["type","text","name","shipping[first-name]","placeholder","First Name"],["type","text","name","shipping[last-name]","placeholder","Last Name"],["suiFormFields",""],["suiFormField","","suiWidth","twelve"],["type","text","name","shipping[address]","placeholder","Street Address"],["suiFormField","","suiWidth","four"],["type","text","name","shipping[address-2]","placeholder","Apt #"],["suiPlaceholder","State",3,"suiOptions"],["suiPlaceholder","Country",3,"suiOptions"],["suiPlaceholder","Type",3,"suiOptions"],["suiFormField","","suiWidth","seven"],["type","text","name","card[number]","maxlength","16","placeholder","Card #"],["suiFormField","","suiWidth","three"],["type","text","name","card[cvc]","maxlength","3","placeholder","CVC"],["suiFormField","","suiWidth","six"],["suiPlaceholder","Month",3,"suiOptions"],["type","text","name","card[expire-year]","maxlength","4","placeholder","Year"],["suiPlaceholder","Saved Contacts",3,"suiOptions"],["sui-segment",""],["suiType","toggle"],["sui-button","","tabindex","0"]],template:function(l,r){l&1&&(i(0,"form",0)(1,"h4",1),t(2,"Shipping Information"),e(),i(3,"div",2)(4,"label"),t(5,"Name"),e(),i(6,"div",3)(7,"div",2),d(8,"input",4),e(),i(9,"div",2),d(10,"input",5),e()()(),i(11,"div",2)(12,"label"),t(13,"Billing Address"),e(),i(14,"div",6)(15,"div",7),d(16,"input",8),e(),i(17,"div",9),d(18,"input",10),e()()(),i(19,"div",3)(20,"div",2)(21,"label"),t(22,"State"),e(),d(23,"sui-select",11),e(),i(24,"div",2)(25,"label"),t(26,"Country"),e(),d(27,"sui-select",12),e()(),i(28,"h4",1),t(29,"Billing Information"),e(),i(30,"div",2)(31,"label"),t(32,"Card Type"),e(),d(33,"sui-select",13),e(),i(34,"div",6)(35,"div",14)(36,"label"),t(37,"Card Number"),e(),d(38,"input",15),e(),i(39,"div",16)(40,"label"),t(41,"CVC"),e(),d(42,"input",17),e(),i(43,"div",18)(44,"label"),t(45,"Expiration"),e(),i(46,"div",3)(47,"div",2),d(48,"sui-select",19),e(),i(49,"div",2),d(50,"input",20),e()()()(),i(51,"h4",1),t(52,"Receipt"),e(),i(53,"div",2)(54,"label"),t(55,"Send Receipt To:"),e(),d(56,"sui-select",21),e(),i(57,"div",22)(58,"div",2)(59,"sui-checkbox",23),t(60,"Do not include a receipt in the package"),e()()(),i(61,"div",24),t(62,"Submit Order"),e()()),l&2&&(m(23),o("suiOptions",r.states),m(4),o("suiOptions",r.countries),m(6),o("suiOptions",r.cards),m(15),o("suiOptions",r.months),m(8),o("suiOptions",r.contacts))},dependencies:[ne,te,ie,h,S,F,T,J,I,z,ee],encapsulation:2})}}return n})(),kt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-user-input-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-form",""],["suiFormField",""],["type","text"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"User Input"),e(),d(4,"input",2),e()())},dependencies:[h,S],encapsulation:2})}}return n})(),Wt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-fields-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Middle name"),e(),d(9,"input",4),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),d(13,"input",5),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),zt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-fields-width-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","three"],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Middle name"),e(),d(9,"input",4),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),d(13,"input",5),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),Rt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-fields-inline-example"]],standalone:!1,features:[p],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField","","suiWidth","eight"],["type","text","placeholder","First Name"],["suiFormField","","suiWidth","three"],["type","text","placeholder","Middle Name"],["suiFormField","","suiWidth","five"],["type","text","placeholder","Last Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"Name"),e(),d(5,"input",3),e(),i(6,"div",4),d(7,"input",5),e(),i(8,"div",6),d(9,"input",7),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),Pt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-text-area-example"]],standalone:!1,features:[p],decls:9,vars:0,consts:[["sui-form",""],["suiFormField",""],["rows","2"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Text"),e(),d(4,"textarea"),e(),i(5,"div",1)(6,"label"),t(7,"Short Text"),e(),d(8,"textarea",2),e()())},dependencies:[h,S],encapsulation:2})}}return n})(),Nt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-checkbox-example"]],standalone:!1,features:[p],decls:11,vars:0,consts:[["sui-form",""],["suiFormField","","suiInline",""],["suiType","slider"],["suiType","toggle"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"sui-checkbox"),t(3,"Checkbox"),e()(),i(4,"div",1)(5,"sui-checkbox",2),t(6,"Slider"),e(),d(7,"label"),e(),i(8,"div",1)(9,"sui-checkbox",3),t(10,"Toggle"),e()()())},dependencies:[h,S,J],encapsulation:2})}}return n})(),Lt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-radio-example"]],standalone:!1,features:[p],decls:31,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["suiType","radio"],["suiFormFields","","suiGrouped",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Select your favorite fruit:"),e(),i(4,"div",2)(5,"sui-checkbox",3),t(6,"Apples"),e()(),i(7,"div",2)(8,"sui-checkbox",3),t(9,"Oranges"),e()(),i(10,"div",2)(11,"sui-checkbox",3),t(12,"Pears"),e()(),i(13,"div",2)(14,"sui-checkbox",3),t(15,"Grapefruit"),e()()(),i(16,"div",4)(17,"label"),t(18,"Select your second favorite fruit:"),e(),i(19,"div",2)(20,"sui-checkbox",3),t(21,"Apples"),e()(),i(22,"div",2)(23,"sui-checkbox",3),t(24,"Oranges"),e()(),i(25,"div",2)(26,"sui-checkbox",3),t(27,"Pears"),e()(),i(28,"div",2)(29,"sui-checkbox",3),t(30,"Grapefruit"),e()()()())},dependencies:[h,S,F,J],encapsulation:2})}}return n})(),Ht=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-dropdown-example"]],standalone:!1,features:[p],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiPlaceholder","Gender",3,"suiOptions"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Gender"),e(),d(4,"sui-select",2),e()()),l&2&&(m(4),o("suiOptions",r.gender))},dependencies:[h,S,ee],encapsulation:2})}}return n})(),Vt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-dropdown-alt-example"]],standalone:!1,features:[p],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiSearch","","suiPlaceholder","Country",3,"suiOptions"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Country"),e(),d(4,"sui-select",2),e()()),l&2&&(m(4),o("suiOptions",r.countries))},dependencies:[h,S,ee],encapsulation:2})}}return n})(),Ot=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-multiple-select-example"]],standalone:!1,features:[p],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiMultiple","","suiPlaceholder","Country",3,"suiOptions"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Country"),e(),d(4,"sui-select",2),e()()),l&2&&(m(4),o("suiOptions",r.countries))},dependencies:[h,S,ee],encapsulation:2})}}return n})(),qt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-html-select-example"]],standalone:!1,features:[p],decls:9,vars:0,consts:[["sui-form",""],["suiFormField",""],["value",""],["value","1"],["value","0"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"select")(3,"option",2),t(4,"Gender"),e(),i(5,"option",3),t(6,"Male"),e(),i(7,"option",4),t(8,"Female"),e()()()())},dependencies:[Ae,Be,h,S],encapsulation:2})}}return n})(),Ut=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-message-example"]],standalone:!1,features:[p],decls:9,vars:0,consts:[["sui-form",""],["sui-message",""],[1,"header"],[1,"list"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),t(3,"We had some issues"),e(),i(4,"ul",3)(5,"li"),t(6,"Please enter your first name"),e(),i(7,"li"),t(8,"Please enter your last name"),e()()()())},dependencies:[S,b],encapsulation:2})}}return n})(),jt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-loading-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-form","","suiLoading",""],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),d(4,"input",2),e(),i(5,"div",3),t(6,"Submit"),e()())},dependencies:[h,S,I],encapsulation:2})}}return n})(),Yt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-success-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiState","success"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","success"],["suiMessageHeader",""],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),d(4,"input",2),e(),i(5,"div",3)(6,"div",4),t(7,"Form Completed"),e(),i(8,"p"),t(9,"Youre all signed up for the newsletter."),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,b,N,I],encapsulation:2})}}return n})(),Jt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-error-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiState","error"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","error"],["suiMessageHeader",""],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),d(4,"input",2),e(),i(5,"div",3)(6,"div",4),t(7,"Action Forbidden"),e(),i(8,"p"),t(9,"You can only sign up for an account once with a given e-mail address."),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,b,N,I],encapsulation:2})}}return n})(),Xt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-warning-example"]],standalone:!1,features:[p],decls:13,vars:0,consts:[["sui-form","","suiState","warning"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","warning"],["suiMessageHeader",""],["suiMessageList",""],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),d(4,"input",2),e(),i(5,"div",3)(6,"div",4),t(7,"Action Forbidden"),e(),i(8,"ul",5)(9,"li"),t(10,"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail. "),e()()(),i(11,"div",6),t(12,"Submit"),e()())},dependencies:[h,S,b,N,se,I],encapsulation:2})}}return n})(),Kt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-field-error-example"]],standalone:!1,features:[p],decls:17,vars:1,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField","","suiError",""],["placeholder","First Name","type","text"],["suiFormField",""],["placeholder","Last Name","type","text"],["suiPlaceholder","Gender",3,"suiOptions"],["suiFormField","","suiError","","suiInline",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",4)(7,"label"),t(8,"Last Name"),e(),d(9,"input",5),e()(),i(10,"div",2)(11,"label"),t(12,"Gender"),e(),d(13,"sui-select",6),e(),i(14,"div",7)(15,"sui-checkbox"),t(16," I agree to the Terms and Conditions "),e()()()),l&2&&(m(13),o("suiOptions",r.gender))},dependencies:[h,S,F,J,ee],encapsulation:2})}}return n})(),$t=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-disabled-example"]],standalone:!1,features:[p],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField","","disabled",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),Qt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-read-only-example"]],standalone:!1,features:[p],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","Read Only","readonly","","type","text"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",3),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),Zt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-mini-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","mini"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),ei=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-tiny-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","tiny"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),ti=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-small-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","small"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),ii=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-large-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","large"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),ni=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-big-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","big"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),ai=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-huge-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","huge"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),li=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-size-massive-example"]],standalone:!1,features:[p],decls:12,vars:0,consts:[["sui-form","","suiSize","massive"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),d(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[h,S,F,I],encapsulation:2})}}return n})(),ri=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-equal-width-example"]],standalone:!1,features:[p],decls:23,vars:0,consts:[["sui-form","","suiEqualWidth",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"Username"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Password"),e(),d(9,"input",4),e()(),i(10,"div",1)(11,"div",2)(12,"label"),t(13,"First name"),e(),d(14,"input",5),e(),i(15,"div",2)(16,"label"),t(17,"Middle name"),e(),d(18,"input",6),e(),i(19,"div",2)(20,"label"),t(21,"Last name"),e(),d(22,"input",7),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),di=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-inverted-example"]],standalone:!1,features:[p],decls:16,vars:0,consts:[["sui-segment","","suiInverted",""],["sui-form","","suiInverted",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["suiFormField","","suiInline",""],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t(5,"Username"),e(),d(6,"input",4),e(),i(7,"div",3)(8,"label"),t(9,"Password"),e(),d(10,"input",5),e()(),i(11,"div",6)(12,"sui-checkbox"),t(13,"I agree to terms and conditions"),e()(),i(14,"div",7),t(15,"Submit"),e()()())},dependencies:[h,S,F,J,I,z],encapsulation:2})}}return n})(),mi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-inline-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-form",""],["suiFormField","","suiInline",""],["type","text","placeholder","Full Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Last name"),e(),d(4,"input",2),e()())},dependencies:[h,S],encapsulation:2})}}return n})(),oi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-width-example"]],standalone:!1,features:[p],decls:28,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField","","suiWidth","six"],["type","text","placeholder","First Name"],["suiFormField","","suiWidth","four"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"],["suiFormField","","suiWidth","two"],["type","text","placeholder","2 Wide"],["suiFormField","","suiWidth","twelve"],["type","text","placeholder","12 Wide"],["suiFormField","","suiWidth","eight"],["type","text","placeholder","8 Wide"],["type","text","placeholder","6 Wide"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),d(5,"input",3),e(),i(6,"div",4)(7,"label"),t(8,"Middle"),e(),d(9,"input",5),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),d(13,"input",6),e()(),i(14,"div",1)(15,"div",7),d(16,"input",8),e(),i(17,"div",9),d(18,"input",10),e(),i(19,"div",7),d(20,"input",8),e()(),i(21,"div",1)(22,"div",11),d(23,"input",12),e(),i(24,"div",2),d(25,"input",13),e(),i(26,"div",7),d(27,"input",8),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),si=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-required-example"]],standalone:!1,features:[p],decls:8,vars:0,consts:[["sui-form",""],["suiFormField","","suiRequired",""],["type","text","placeholder","Full Name"],["suiFormField","","suiInline","","suiRequired",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Last name"),e(),d(4,"input",2),e(),i(5,"div",3)(6,"sui-checkbox"),t(7,"I agree to terms and conditions"),e()()())},dependencies:[h,S,J],encapsulation:2})}}return n})(),ui=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-evenly-divided-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","three"],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Middle name"),e(),d(9,"input",4),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),d(13,"input",5),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),ci=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-grouped-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"sui-checkbox",3),t(4," Apples "),e()(),i(5,"div",2)(6,"sui-checkbox",3),t(7," Oranges "),e()(),i(8,"div",2)(9,"sui-checkbox",3),t(10," Pears "),e()(),i(11,"div",2)(12,"sui-checkbox",3),t(13," Grapefruit "),e()()()())},dependencies:[h,S,F,J],encapsulation:2})}}return n})(),pi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-equal-width-group-example"]],standalone:!1,features:[p],decls:23,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["suiFormFields","","suiEqualWidth",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"Username"),e(),d(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Password"),e(),d(9,"input",4),e()(),i(10,"div",5)(11,"div",2)(12,"label"),t(13,"First name"),e(),d(14,"input",6),e(),i(15,"div",2)(16,"label"),t(17,"Middle name"),e(),d(18,"input",7),e(),i(19,"div",2)(20,"label"),t(21,"Last name"),e(),d(22,"input",8),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),vi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-inline-group-example"]],standalone:!1,features:[p],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["type","text","placeholder","(xxx)"],["type","text","placeholder","xxx"],["type","text","placeholder","xxxx"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Phone Number"),e(),i(4,"div",2),d(5,"input",3),e(),i(6,"div",2),d(7,"input",4),e(),i(8,"div",2),d(9,"input",5),e()()())},dependencies:[h,S,F],encapsulation:2})}}return n})(),xi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-form-inline-group-alt-example"]],standalone:!1,features:[p],decls:16,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"What's your favourite fruit?"),e(),i(4,"div",2)(5,"sui-checkbox",3),t(6," Apples "),e()(),i(7,"div",2)(8,"sui-checkbox",3),t(9," Oranges "),e()(),i(10,"div",2)(11,"sui-checkbox",3),t(12," Pears "),e()(),i(13,"div",2)(14,"sui-checkbox",3),t(15," Grapefruit "),e()()()())},dependencies:[h,S,F,J],encapsulation:2})}}return n})();function zr(n,u){n&1&&d(0,"doc-form-basic-example")}function Rr(n,u){n&1&&d(0,"doc-form-basic-alt-example")}function Pr(n,u){n&1&&d(0,"doc-form-user-input-example")}function Nr(n,u){n&1&&d(0,"doc-form-fields-example")}function Lr(n,u){n&1&&d(0,"doc-form-fields-width-example")}function Hr(n,u){n&1&&d(0,"doc-form-fields-inline-example")}function Vr(n,u){n&1&&d(0,"doc-form-text-area-example")}function Or(n,u){n&1&&d(0,"doc-form-checkbox-example")}function qr(n,u){n&1&&d(0,"doc-form-radio-example")}function Ur(n,u){n&1&&d(0,"doc-form-dropdown-example")}function jr(n,u){n&1&&d(0,"doc-form-dropdown-alt-example")}function Yr(n,u){n&1&&d(0,"doc-form-multiple-select-example")}function Jr(n,u){n&1&&d(0,"doc-form-html-select-example")}function Xr(n,u){n&1&&d(0,"doc-form-message-example")}function Kr(n,u){n&1&&d(0,"doc-form-loading-example")}function $r(n,u){n&1&&d(0,"doc-form-success-example")}function Qr(n,u){n&1&&d(0,"doc-form-error-example")}function Zr(n,u){n&1&&d(0,"doc-form-warning-example")}function ed(n,u){n&1&&d(0,"doc-form-field-error-example")}function td(n,u){n&1&&d(0,"doc-form-disabled-example")}function id(n,u){n&1&&d(0,"doc-form-read-only-example")}function nd(n,u){n&1&&d(0,"doc-form-size-mini-example")}function ad(n,u){n&1&&d(0,"doc-form-size-tiny-example")}function ld(n,u){n&1&&d(0,"doc-form-size-small-example")}function rd(n,u){n&1&&d(0,"doc-form-size-large-example")}function dd(n,u){n&1&&d(0,"doc-form-size-big-example")}function md(n,u){n&1&&d(0,"doc-form-size-huge-example")}function od(n,u){n&1&&d(0,"doc-form-size-massive-example")}function sd(n,u){n&1&&d(0,"doc-form-equal-width-example")}function ud(n,u){n&1&&d(0,"doc-form-inverted-example")}function cd(n,u){n&1&&d(0,"doc-form-inline-example")}function pd(n,u){n&1&&d(0,"doc-form-width-example")}function vd(n,u){n&1&&d(0,"doc-form-required-example")}function xd(n,u){n&1&&d(0,"doc-form-evenly-divided-example")}function fd(n,u){n&1&&d(0,"doc-form-grouped-example")}function Sd(n,u){n&1&&d(0,"doc-form-equal-width-group-example")}function hd(n,u){n&1&&d(0,"doc-form-inline-group-example")}function gd(n,u){n&1&&d(0,"doc-form-inline-group-alt-example")}function Ed(n,u){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Form"),e(),i(6,"p"),t(7,"A form"),e(),c(8,zr,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),c(10,Rr,1,0,"ng-template",5),e(),d(11,"br"),i(12,"h2",2),t(13,"Content"),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Field"),e(),i(17,"p"),t(18,"A field is a form element containing a label and an input"),e(),c(19,Pr,1,0,"ng-template",5),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22,"Fields"),e(),i(23,"p"),t(24,"A set of fields can appear grouped together"),e(),i(25,"div",6),t(26," Field groups automatically receive responsive styling, swapping to one field per row on mobile devices. "),e(),c(27,Nr,1,0,"ng-template",5),e(),i(28,"doc-code-sample",3),c(29,Lr,1,0,"ng-template",5),e(),i(30,"doc-code-sample",3),c(31,Hr,1,0,"ng-template",5),e(),i(32,"doc-code-sample",3)(33,"h3",4),t(34,"Text Area"),e(),i(35,"p"),t(36,"A textarea can be used to allow for extended user input."),e(),i(37,"div",7),t(38," To specify an approximate text area size use the rows attribute. "),e(),c(39,Vr,1,0,"ng-template",5),e(),i(40,"doc-code-sample",3)(41,"h3",4),t(42,"Checkbox"),e(),i(43,"p"),t(44,"A form can contain a "),i(45,"a",8),t(46,"checkbox"),e()(),i(47,"div",7),t(48," UI checkbox are special, styled versions of standard HTML checkboxes "),e(),c(49,Or,1,0,"ng-template",5),e(),i(50,"doc-code-sample",3)(51,"h3",4),t(52,"Radio Checkbox"),e(),i(53,"p"),t(54,"A form can contain a "),i(55,"a",8),t(56,"radio checkbox"),e()(),c(57,qr,1,0,"ng-template",5),e(),i(58,"doc-code-sample",3)(59,"h3",4),t(60,"Dropdown"),e(),i(61,"p"),t(62,"A form can contain a "),i(63,"a",9),t(64,"dropdown"),e()(),c(65,Ur,1,0,"ng-template",5),e(),i(66,"doc-code-sample",3),c(67,jr,1,0,"ng-template",5),e(),i(68,"doc-code-sample",3)(69,"h3",4),t(70,"Multiple Select"),e(),i(71,"p"),t(72,"A multiple select is used to include several choices with one form field"),e(),c(73,Yr,1,0,"ng-template",5),e(),i(74,"doc-code-sample",3)(75,"h3",4),t(76,"HTML Select"),e(),i(77,"p"),t(78,"A multiple select is used to include several choices with one form field"),e(),c(79,Jr,1,0,"ng-template",5),e(),i(80,"doc-code-sample",3)(81,"h3",4),t(82,"Message"),e(),i(83,"p"),t(84,"A form can contain a "),i(85,"a",10),t(86,"message"),e()(),i(87,"div",7),t(88," Any "),i(89,"code"),t(90,"info"),e(),t(91,", "),i(92,"code"),t(93,"error"),e(),t(94,", "),i(95,"code"),t(96,"success"),e(),t(97,", or "),i(98,"code"),t(99,"warning"),e(),t(100," message blocks found inside a form are hidden by default. "),e(),c(101,Xr,1,0,"ng-template",5),e(),d(102,"br"),i(103,"h2",2),t(104,"State"),e(),i(105,"doc-code-sample",3)(106,"h3",4),t(107,"Loading"),e(),i(108,"p"),t(109,"If a form is in loading state, it will automatically show a loading indicator."),e(),c(110,Kr,1,0,"ng-template",5),e(),i(111,"doc-code-sample",3)(112,"h3",4),t(113,"Success"),e(),i(114,"p"),t(115,"If a form is in an success state, it will automatically show any success message blocks."),e(),c(116,$r,1,0,"ng-template",5),e(),i(117,"doc-code-sample",3)(118,"h3",4),t(119,"Error"),e(),i(120,"p"),t(121,"If a form is in an error state, it will automatically show any error message blocks."),e(),c(122,Qr,1,0,"ng-template",5),e(),i(123,"doc-code-sample",3)(124,"h3",4),t(125,"Warning"),e(),i(126,"p"),t(127,"If a form is in warning state, it will automatically show any warning message block."),e(),c(128,Zr,1,0,"ng-template",5),e(),i(129,"doc-code-sample",3)(130,"h3",4),t(131,"Field Error"),e(),i(132,"p"),t(133,"Individual fields may display an error state"),e(),c(134,ed,1,0,"ng-template",5),e(),i(135,"doc-code-sample",3)(136,"h3",4),t(137,"Disabled Field"),e(),i(138,"p"),t(139,"Individual fields may be disabled"),e(),c(140,td,1,0,"ng-template",5),e(),i(141,"doc-code-sample",3)(142,"h3",4),t(143,"Read-Only Field"),e(),i(144,"p"),t(145,"Individual fields may be read only"),e(),c(146,id,1,0,"ng-template",5),e(),d(147,"br"),i(148,"h2",2),t(149,"Form Variations"),e(),i(150,"doc-code-sample",3)(151,"h3",4),t(152,"Size"),e(),i(153,"p"),t(154,"A form can vary in size"),e(),c(155,nd,1,0,"ng-template",5),e(),i(156,"doc-code-sample",3),c(157,ad,1,0,"ng-template",5),e(),i(158,"doc-code-sample",3),c(159,ld,1,0,"ng-template",5),e(),i(160,"doc-code-sample",3),c(161,rd,1,0,"ng-template",5),e(),i(162,"doc-code-sample",3),c(163,dd,1,0,"ng-template",5),e(),i(164,"doc-code-sample",3),c(165,md,1,0,"ng-template",5),e(),i(166,"doc-code-sample",3),c(167,od,1,0,"ng-template",5),e(),i(168,"doc-code-sample",3)(169,"h3",4),t(170,"Equal Width Form"),e(),i(171,"p"),t(172,"Forms can automatically divide fields to be equal width"),e(),c(173,sd,1,0,"ng-template",5),e(),i(174,"doc-code-sample",3)(175,"h3",4),t(176,"Inverted"),e(),i(177,"p"),t(178,"A form on a dark background may have to invert its colour scheme"),e(),c(179,ud,1,0,"ng-template",5),e(),d(180,"br"),i(181,"h2",2),t(182,"Field Variations"),e(),i(183,"doc-code-sample",3)(184,"h3",4),t(185,"Inline Field"),e(),i(186,"p"),t(187,"A field can have its label next to instead of above it."),e(),c(188,cd,1,0,"ng-template",5),e(),i(189,"doc-code-sample",3)(190,"h3",4),t(191,"Width"),e(),i(192,"p"),t(193,"A field can specify its width in grid columns"),e(),c(194,pd,1,0,"ng-template",5),e(),i(195,"doc-code-sample",3)(196,"h3",4),t(197,"Required"),e(),i(198,"p"),t(199,"A field can show that input is mandatory"),e(),c(200,vd,1,0,"ng-template",5),e(),d(201,"br"),i(202,"h2",2),t(203,"Group Variations"),e(),i(204,"doc-code-sample",3)(205,"h3",4),t(206,"Evenly Divided"),e(),i(207,"p"),t(208,"Fields can have their widths divided evenly."),e(),c(209,xd,1,0,"ng-template",5),e(),i(210,"doc-code-sample",3)(211,"h3",4),t(212,"Grouped Fields"),e(),i(213,"p"),t(214,"Fields can show related choices."),e(),c(215,fd,1,0,"ng-template",5),e(),i(216,"doc-code-sample",3)(217,"h3",4),t(218,"Equal Width Fields"),e(),i(219,"p"),t(220,"Fields can automatically divide fields to be equal width."),e(),c(221,Sd,1,0,"ng-template",5),e(),i(222,"doc-code-sample",3)(223,"h3",4),t(224,"Inline Fields"),e(),i(225,"p"),t(226,"Multiple fields may be inline in a row."),e(),c(227,hd,1,0,"ng-template",5),e(),i(228,"doc-code-sample",3),c(229,gd,1,0,"ng-template",5),e()()),n&2){let a=H();m(3),o("templateCode",a.snippetBasic),m(6),o("templateCode",a.snippetBasicAlt),m(5),o("templateCode",a.snippetUserInput),m(6),o("templateCode",a.snippetFields),m(8),o("templateCode",a.snippetFieldsWidth),m(2),o("templateCode",a.snippetFieldsInline),m(2),o("templateCode",a.snippetTextArea),m(8),o("templateCode",a.snippetCheckbox),m(10),o("templateCode",a.snippetRadio),m(8),o("templateCode",a.snippetDropdown),m(8),o("templateCode",a.snippetDropdownAlt),m(2),o("templateCode",a.snippetMultipleSelect),m(6),o("templateCode",a.snippetHtmlSelect),m(6),o("templateCode",a.snippetMessage),m(25),o("templateCode",a.snippetLoading),m(6),o("templateCode",a.snippetSuccess),m(6),o("templateCode",a.snippetError),m(6),o("templateCode",a.snippetWarning),m(6),o("templateCode",a.snippetFieldError),m(6),o("templateCode",a.snippetDisabled),m(6),o("templateCode",a.snippetReadOnly),m(9),o("templateCode",a.snippetSizeMini),m(6),o("templateCode",a.snippetSizeTiny),m(2),o("templateCode",a.snippetSizeSmall),m(2),o("templateCode",a.snippetSizeLarge),m(2),o("templateCode",a.snippetSizeBig),m(2),o("templateCode",a.snippetSizeHuge),m(2),o("templateCode",a.snippetSizeMassive),m(2),o("templateCode",a.snippetEqualWidth),m(6),o("templateCode",a.snippetInverted),m(9),o("templateCode",a.snippetInline),m(6),o("templateCode",a.snippetWidth),m(6),o("templateCode",a.snippetRequired),m(9),o("templateCode",a.snippetEvenlyDivided),m(6),o("templateCode",a.snippetGrouped),m(6),o("templateCode",a.snippetEqualWidthGroup),m(6),o("templateCode",a.snippetInlineGroup),m(6),o("templateCode",a.snippetInlineGroupAlt)}}function yd(n,u){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-form"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",11)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiState"),e(),i(20,"td"),t(21,"Set the form state. Allowed values could be "),i(22,"span",12),t(23,"success"),e(),t(24," | "),i(25,"span",12),t(26,"warning"),e(),t(27," | "),i(28,"span",12),t(29,"error"),e(),t(30," | "),i(31,"span",12),t(32,"null"),e()(),i(33,"td")(34,"div",13),t(35," string "),e()(),i(36,"td")(37,"div",14),t(38," null "),e()()(),i(39,"tr")(40,"td"),t(41,"suiSize"),e(),i(42,"td"),t(43,"Set the form size. Allowed values could be "),i(44,"span",12),t(45,"mini"),e(),t(46," | "),i(47,"span",12),t(48,"tiny"),e(),t(49," | "),i(50,"span",12),t(51,"small"),e(),t(52," | "),i(53,"span",12),t(54,"medium"),e(),t(55," | "),i(56,"span",12),t(57,"big"),e(),t(58," | "),i(59,"span",12),t(60,"huge"),e(),t(61," | "),i(62,"span",12),t(63,"massive"),e(),t(64," | "),i(65,"span",12),t(66,"null"),e()(),i(67,"td")(68,"div",13),t(69," string "),e()(),i(70,"td")(71,"div",14),t(72," null "),e()()(),i(73,"tr")(74,"td"),t(75,"suiLoading"),e(),i(76,"td"),t(77,"Whether or not the form is a loading state. "),e(),i(78,"td")(79,"div",13),t(80," boolean "),e()(),i(81,"td")(82,"div",14),t(83," false "),e()()(),i(84,"tr")(85,"td"),t(86,"suiEqualWidth"),e(),i(87,"td"),t(88,"Whether or not the form fields are of equal width. "),e(),i(89,"td")(90,"div",13),t(91," boolean "),e()(),i(92,"td")(93,"div",14),t(94," false "),e()()(),i(95,"tr")(96,"td"),t(97,"suiInverted"),e(),i(98,"td"),t(99,"Whether or not the form has inverted colours. "),e(),i(100,"td")(101,"div",13),t(102," boolean "),e()(),i(103,"td")(104,"div",14),t(105," false "),e()()()()(),d(106,"br"),i(107,"h2",2),t(108,"suiFormFields"),e(),i(109,"h4",4),t(110,"Properties"),e(),i(111,"table",11)(112,"thead")(113,"tr")(114,"th"),t(115,"Property"),e(),i(116,"th"),t(117,"Description"),e(),i(118,"th"),t(119,"Type"),e(),i(120,"th"),t(121,"Default"),e()()(),i(122,"tbody")(123,"tr")(124,"td"),t(125,"suiWidth"),e(),i(126,"td"),t(127,"Set the fields width. Allowed values could be "),i(128,"span",12),t(129,"one"),e(),t(130," | "),i(131,"span",12),t(132,"two"),e(),t(133," | "),i(134,"span",12),t(135,"three"),e(),t(136," | "),i(137,"span",12),t(138,"four"),e(),t(139," | "),i(140,"span",12),t(141,"five"),e(),t(142," | "),i(143,"span",12),t(144,"six"),e(),t(145," | "),i(146,"span",12),t(147,"seven"),e(),t(148," | "),i(149,"span",12),t(150,"eight"),e(),t(151," | "),i(152,"span",12),t(153,"nine"),e(),t(154," | "),i(155,"span",12),t(156,"ten"),e(),t(157," | "),i(158,"span",12),t(159,"eleven"),e(),t(160," | "),i(161,"span",12),t(162,"twelve"),e(),t(163," | "),i(164,"span",12),t(165,"thirteen"),e(),t(166," | "),i(167,"span",12),t(168,"fourteen"),e(),t(169,"| "),i(170,"span",12),t(171,"fifteen"),e(),t(172," | "),i(173,"span",12),t(174,"sixteen"),e(),t(175," | "),i(176,"span",12),t(177,"null"),e()(),i(178,"td")(179,"div",13),t(180," string"),e()(),i(181,"td")(182,"div",14),t(183," null"),e()()(),i(184,"tr")(185,"td"),t(186,"suiInline"),e(),i(187,"td"),t(188," Determine whether or not the field group is inline "),e(),i(189,"td")(190,"div",13),t(191," boolean "),e()(),i(192,"td")(193,"div",14),t(194," false "),e()()(),i(195,"tr")(196,"td"),t(197,"suiGrouped"),e(),i(198,"td"),t(199," Determine whether or not the fields are grouped "),e(),i(200,"td")(201,"div",13),t(202," boolean "),e()(),i(203,"td")(204,"div",14),t(205," false "),e()()(),i(206,"tr")(207,"td"),t(208,"suiEqualWidth"),e(),i(209,"td"),t(210," Determine whether or not the field contents are equal width "),e(),i(211,"td")(212,"div",13),t(213," boolean "),e()(),i(214,"td")(215,"div",14),t(216," false "),e()()()()(),d(217,"br"),i(218,"h2",2),t(219,"suiFormField"),e(),i(220,"h4",4),t(221,"Properties"),e(),i(222,"table",11)(223,"thead")(224,"tr")(225,"th"),t(226,"Property"),e(),i(227,"th"),t(228,"Description"),e(),i(229,"th"),t(230,"Type"),e(),i(231,"th"),t(232,"Default"),e()()(),i(233,"tbody")(234,"tr")(235,"td"),t(236,"suiWidth"),e(),i(237,"td"),t(238,"Set the fields width. Allowed values could be "),i(239,"span",12),t(240,"one"),e(),t(241," | "),i(242,"span",12),t(243,"two"),e(),t(244," | "),i(245,"span",12),t(246,"three"),e(),t(247," | "),i(248,"span",12),t(249,"four"),e(),t(250," | "),i(251,"span",12),t(252,"five"),e(),t(253," | "),i(254,"span",12),t(255,"six"),e(),t(256," | "),i(257,"span",12),t(258,"seven"),e(),t(259," | "),i(260,"span",12),t(261,"eight"),e(),t(262," | "),i(263,"span",12),t(264,"nine"),e(),t(265," | "),i(266,"span",12),t(267,"ten"),e(),t(268," | "),i(269,"span",12),t(270,"eleven"),e(),t(271," | "),i(272,"span",12),t(273,"twelve"),e(),t(274," | "),i(275,"span",12),t(276,"thirteen"),e(),t(277," | "),i(278,"span",12),t(279,"fourteen"),e(),t(280,"| "),i(281,"span",12),t(282,"fifteen"),e(),t(283," | "),i(284,"span",12),t(285,"sixteen"),e(),t(286," | "),i(287,"span",12),t(288,"null"),e()(),i(289,"td")(290,"div",13),t(291," string"),e()(),i(292,"td")(293,"div",14),t(294," null"),e()()(),i(295,"tr")(296,"td"),t(297,"suiError"),e(),i(298,"td"),t(299," Determine whether or not the field is in an error state "),e(),i(300,"td")(301,"div",13),t(302," boolean "),e()(),i(303,"td")(304,"div",14),t(305," false "),e()()(),i(306,"tr")(307,"td"),t(308,"suiInline"),e(),i(309,"td"),t(310," Determine whether or not the field is inline "),e(),i(311,"td")(312,"div",13),t(313," boolean "),e()(),i(314,"td")(315,"div",14),t(316," false "),e()()(),i(317,"tr")(318,"td"),t(319,"disabled"),e(),i(320,"td"),t(321," Determine whether or not the field is disabled "),e(),i(322,"td")(323,"div",13),t(324," boolean "),e()(),i(325,"td")(326,"div",14),t(327," false "),e()()(),i(328,"tr")(329,"td"),t(330,"suiRequired"),e(),i(331,"td"),t(332," Determine whether or not the field is required "),e(),i(333,"td")(334,"div",13),t(335," boolean "),e()(),i(336,"td")(337,"div",14),t(338," false "),e()()()()()())}var fi=(()=>{class n{constructor(a){this.snippetBasic=je,this.snippetBasicAlt=Ye,this.snippetUserInput=Je,this.snippetFields=Xe,this.snippetFieldsWidth=Ke,this.snippetFieldsInline=$e,this.snippetTextArea=Qe,this.snippetCheckbox=Ze,this.snippetRadio=et,this.snippetDropdown=tt,this.snippetDropdownAlt=it,this.snippetMultipleSelect=nt,this.snippetHtmlSelect=at,this.snippetMessage=lt,this.snippetLoading=rt,this.snippetSuccess=dt,this.snippetError=mt,this.snippetWarning=ot,this.snippetFieldError=st,this.snippetDisabled=ut,this.snippetReadOnly=ct,this.snippetSizeMini=pt,this.snippetSizeTiny=vt,this.snippetSizeSmall=xt,this.snippetSizeLarge=ft,this.snippetSizeBig=St,this.snippetSizeHuge=ht,this.snippetSizeMassive=gt,this.snippetEqualWidth=Et,this.snippetInverted=yt,this.snippetInline=Ct,this.snippetWidth=bt,this.snippetRequired=Ft,this.snippetEvenlyDivided=Mt,this.snippetGrouped=Dt,this.snippetEqualWidthGroup=wt,this.snippetInlineGroup=_t,this.snippetInlineGroupAlt=It,this.states=[{text:"Alabama",value:"al"}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Nigeria",value:"ng",flag:"ng"}],this.months=[{text:"January",value:"jan"}],this.cards=[{text:"Visa",value:"visa"}],this.contacts=[{text:"Justen Kitsune",image:{avatar:!0,src:"https://semantic-ui.com/images/avatar/small/stevie.jpg"}}],this.gender=[{text:"Male"},{text:"Female"}],a.setTitle("Form | Ngx Semantic")}static{this.\u0275fac=function(l){return new(l||n)(L(V))}}static{this.\u0275cmp=s({type:n,selectors:[["doc-form"]],standalone:!1,decls:3,vars:2,consts:[["header","Form","subHeader","A form displays a set of related user input fields in a structured way"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-message","","suiState","success"],["sui-message","","suiState","info"],["routerLink","/modules/checkbox"],["routerLink","/modules/dropdown"],["routerLink","/collections/message"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(l,r){l&1&&(i(0,"doc-page",0),c(1,Ed,230,38,"div",1)(2,yd,339,0,"div",1),e()),l&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,q,O,U,T,b,Ce,Y,P,At,Bt,kt,Wt,zt,Rt,Pt,Nt,Lt,Ht,Vt,Ot,qt,Ut,jt,Yt,Jt,Xt,Kt,$t,Qt,Zt,ei,ti,ii,ni,ai,li,ri,di,mi,oi,si,ui,ci,pi,vi,xi],encapsulation:2})}}return n})();var Si=`<div sui-grid>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var hi=`<div sui-grid
     suiWidth="three"
     suiDivided="divided">
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
</div>
`;var gi=`<div sui-grid
     suiDivided="vertically divided">
  <div suiGridRow
       suiWidth="two">
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow
       suiWidth="three">
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
</div>
`;var Ei=`<div sui-grid
     suiCelled="celled">
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="thirteen">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="ten">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var yi=`<div sui-grid
     suiCelled="internally celled">
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="ten">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="ten">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Ci=`<div sui-grid
     suiWidth="four">
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
</div>
`;var bi=`<div sui-grid>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var Fi=`<div sui-grid
     suiWidth="three">
  <div suiGridColumn
       suiFloated="left floated">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiFloated="right floated">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var Mi=`<div sui-grid>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="nine">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="three">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var Di=`<div sui-grid>
  <div suiGridRow
       suiWidth="four">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow
       suiWidth="three">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow
       suiWidth="five">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var wi=`<div sui-grid
     suiEqual>
  <div suiGridColumn>
    <div sui-segment>1</div>
  </div>
  <div suiGridColumn
       suiWidth="eight">
    <div sui-segment>2</div>
  </div>
  <div suiGridColumn>
    <div sui-segment>3</div>
  </div>
</div>
<div sui-grid>
  <div suiGridRow
       suiEqual>
    <div suiGridColumn>
      <div sui-segment>1</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>2</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>3</div>
    </div>
  </div>
  <div suiGridRow
       suiEqual>
    <div suiGridColumn>
      <div sui-segment>1</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>2</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>3</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>4</div>
    </div>
  </div>
</div>
`;var _i=`<div sui-grid
     suiWidth="three"
     suiDivided="divided">
  <div suiGridRow
       suiStretched>
    <div suiGridColumn>
      <div sui-segment>1</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>1</div>
      <div sui-segment>2</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>1</div>
      <div sui-segment>2</div>
      <div sui-segment>3</div>
    </div>
  </div>
</div>
`;var Ii=`<p>The following grid has vertical and horizontal gutters.</p>
<div sui-grid
     suiWidth="two"
     suiPadded="padded">
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
<p>The following grid has vertical gutters.</p>
<div sui-grid
     suiWidth="two"
     suiPadded="vertically padded">
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
<p>The following grid has horizontal gutters.</p>
<div sui-grid
     suiWidth="two"
     suiPadded="horizontally padded">
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var Ti=`<div sui-grid
     suiWidth="four"
     suiRelaxation="relaxed">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
<div sui-grid
     suiWidth="four"
     suiRelaxation="very relaxed">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var Gi=`<div sui-grid
     suiWidth="five"
     suiPadded="padded">
  <div suiGridColumn
       suiColour="red">
    Red
  </div>
  <div suiGridColumn
       suiColour="orange">
    Orange
  </div>
  <div suiGridColumn
       suiColour="yellow">
    Yellow
  </div>
  <div suiGridColumn
       suiColour="olive">
    Olive
  </div>
  <div suiGridColumn
       suiColour="green">
    Green
  </div>
  <div suiGridColumn
       suiColour="teal">
    Teal
  </div>
  <div suiGridColumn
       suiColour="blue">
    Blue
  </div>
  <div suiGridColumn
       suiColour="violet">
    Violet
  </div>
  <div suiGridColumn
       suiColour="purple">
    Purple
  </div>
  <div suiGridColumn
       suiColour="pink">
    Pink
  </div>
  <div suiGridColumn
       suiColour="brown">
    Brown
  </div>
  <div suiGridColumn
       suiColour="grey">
    Grey
  </div>
  <div suiGridColumn
       suiColour="black">
    Black
  </div>
</div>
<div sui-grid
     suiPadded="padded">
  <div suiGridRow
       suiColour="red">
    <div suiGridColumn>
      Red
    </div>
  </div>
  <div suiGridRow
       suiColour="orange">
    <div suiGridColumn>
      Orange
    </div>
  </div>
  <div suiGridRow
       suiColour="yellow">
    <div suiGridColumn>
      Yellow
    </div>
  </div>
  <div suiGridRow
       suiColour="olive">
    <div suiGridColumn>
      Olive
    </div>
  </div>
</div>
`;var Ai=`<div sui-grid
     suiCentered
     suiWidth="two">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridRow
       suiCentered
       suiWidth="four">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Bi=`<div sui-grid
     suiAlignment="center aligned"
     suiWidth="three">
  <div suiGridRow>
    <div suiGridColumn>
      <div sui-segment>Cats</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Dogs</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Monkeys</div>
    </div>
  </div>
</div>
<div sui-grid>
  <div suiGridRow
       suiWidth="three">
    <div suiGridColumn
         suiAlignment="left aligned">
      <div sui-segment>Left aligned column</div>
    </div>
    <div suiGridColumn
         suiAlignment="center aligned">
      <div sui-segment>Center aligned column</div>
    </div>
    <div suiGridColumn
         suiAlignment="right aligned">
      <div sui-segment>Right aligned column</div>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiAlignment="justified">
      <div sui-segment>Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.</div>
    </div>
  </div>
</div>
`;var ki=`<div sui-grid
     suiVerticalAlignment="middle aligned"
     suiWidth="four">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
<div sui-grid
     suiWidth="four">
  <div suiGridRow
       suiVerticalAlignment="bottom aligned">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiVerticalAlignment="top aligned">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiVerticalAlignment="middle aligned">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiVerticalAlignment="bottom aligned">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Wi=`<div sui-grid
     suiDoubling
     suiWidth="five">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var zi=`<div sui-grid
     suiStackable
     suiWidth="two">
  <div suiGridColumn>
    <div sui-segment><doc-wireframe type="paragraph"></doc-wireframe></div>
  </div>
  <div suiGridColumn>
    <div sui-segment><doc-wireframe type="paragraph"></doc-wireframe></div>
  </div>
</div>
`;var Ri=`<div sui-grid
     suiWidth="four"
     suiDivided="divided"
     suiReversed="computer reversed">
  <div suiGridRow>
    <div suiGridColumn>
      Computer First
    </div>
    <div suiGridColumn>
      Computer Second
    </div>
    <div suiGridColumn>
      Computer Third
    </div>
    <div suiGridColumn>
      Computer Fourth
    </div>
  </div>
</div>
<div sui-grid
     suiWidth="three"
     suiDivided="divided">
  <div suiGridRow
       [suiReversed]="['tablet reversed', 'mobile reversed']">
    <div suiGridColumn>
      Tablet &amp; Mobile First
    </div>
    <div suiGridColumn>
      Tablet &amp; Mobile Second
    </div>
    <div suiGridColumn>
      Tablet &amp; Mobile Third
    </div>
  </div>
</div>
<div sui-grid
     suiWidth="one"
     suiDivided="vertically divided"
     suiReversed="computer vertically reversed">
  <div suiGridRow>
    <div suiGridColumn>
      Computer Row 1
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      Computer Row 2
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      Computer Row 3
    </div>
  </div>
</div>
`;var Pi=`<div sui-grid>
  <div suiGridRow
       suiWidth="two">
    <div suiGridColumn
         suiDeviceVisibility="large screen only">
      <div sui-segment>Large Screen</div>
    </div>
    <div suiGridColumn
         suiDeviceVisibility="widescreen only">
      <div sui-segment>Widescreen</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="two"
       suiDeviceVisibility="mobile only">
    <div suiGridColumn>
      <div sui-segment>Mobile</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Mobile</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="two"
       suiDeviceVisibility="tablet only">
    <div suiGridColumn>
      <div sui-segment>Tablet</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Tablet</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="three"
       suiDeviceVisibility="computer only">
    <div suiGridColumn>
      <div sui-segment>Computer</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Computer</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Computer</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="two">
    <div suiGridColumn>
      <div sui-segment>All Sizes</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>All Sizes</div>
    </div>
  </div>
</div>
`;var Ni=`<div sui-grid>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var jd=()=>["tablet reversed","mobile reversed"],Li=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-grid-example"]],standalone:!1,decls:17,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiWidth","four"],["type","image"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",1),d(4,"doc-wireframe",2),e(),i(5,"div",1),d(6,"doc-wireframe",2),e(),i(7,"div",1),d(8,"doc-wireframe",2),e(),i(9,"div",1),d(10,"doc-wireframe",2),e(),i(11,"div",1),d(12,"doc-wireframe",2),e(),i(13,"div",1),d(14,"doc-wireframe",2),e(),i(15,"div",1),d(16,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),Hi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-divided-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-grid","","suiWidth","three","suiDivided","divided"],["suiGridRow",""],["suiGridColumn",""],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e(),i(4,"div",2),d(5,"doc-wireframe",3),e(),i(6,"div",2),d(7,"doc-wireframe",3),e()(),i(8,"div",1)(9,"div",2),d(10,"doc-wireframe",3),e(),i(11,"div",2),d(12,"doc-wireframe",3),e(),i(13,"div",2),d(14,"doc-wireframe",3),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),Vi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-vertically-divided-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-grid","","suiDivided","vertically divided"],["suiGridRow","","suiWidth","two"],["suiGridColumn",""],["type","paragraph"],["suiGridRow","","suiWidth","three"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e(),i(4,"div",2),d(5,"doc-wireframe",3),e()(),i(6,"div",4)(7,"div",2),d(8,"doc-wireframe",3),e(),i(9,"div",2),d(10,"doc-wireframe",3),e(),i(11,"div",2),d(12,"doc-wireframe",3),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),Oi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-celled-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-grid","","suiCelled","celled"],["suiGridRow",""],["suiGridColumn","","suiWidth","three"],["type","image"],["suiGridColumn","","suiWidth","thirteen"],["type","paragraph"],["suiGridColumn","","suiWidth","ten"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e(),i(4,"div",4),d(5,"doc-wireframe",5),e()(),i(6,"div",1)(7,"div",2),d(8,"doc-wireframe",3),e(),i(9,"div",6),d(10,"doc-wireframe",5),e(),i(11,"div",2),d(12,"doc-wireframe",3),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),qi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-internally-celled-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-grid","","suiCelled","internally celled"],["suiGridRow",""],["suiGridColumn","","suiWidth","three"],["type","image"],["suiGridColumn","","suiWidth","ten"],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e(),i(4,"div",4),d(5,"doc-wireframe",5),e(),i(6,"div",2),d(7,"doc-wireframe",3),e()(),i(8,"div",1)(9,"div",2),d(10,"doc-wireframe",3),e(),i(11,"div",4),d(12,"doc-wireframe",5),e(),i(13,"div",2),d(14,"doc-wireframe",3),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),Ui=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-rows-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-grid","","suiWidth","four"],["suiGridRow",""],["suiGridColumn",""],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e(),i(4,"div",2),d(5,"doc-wireframe",3),e(),i(6,"div",2),d(7,"doc-wireframe",3),e()(),i(8,"div",1)(9,"div",2),d(10,"doc-wireframe",3),e(),i(11,"div",2),d(12,"doc-wireframe",3),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),ji=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-columns-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiWidth","four"],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",1),d(4,"doc-wireframe",2),e(),i(5,"div",1),d(6,"doc-wireframe",2),e(),i(7,"div",1),d(8,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),Yi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-floated-example"]],standalone:!1,decls:5,vars:0,consts:[["sui-grid","","suiWidth","three"],["suiGridColumn","","suiFloated","left floated"],["type","paragraph"],["suiGridColumn","","suiFloated","right floated"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",3),d(4,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),Ji=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-column-width-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiWidth","four"],["type","image"],["suiGridColumn","","suiWidth","nine"],["type","paragraph"],["suiGridColumn","","suiWidth","three"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",3),d(4,"doc-wireframe",4),e(),i(5,"div",5),d(6,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),Xi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-column-count-example"]],standalone:!1,decls:28,vars:0,consts:[["sui-grid",""],["suiGridRow","","suiWidth","four"],["suiGridColumn",""],["type","image"],["suiGridRow","","suiWidth","three"],["suiGridRow","","suiWidth","five"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e(),i(4,"div",2),d(5,"doc-wireframe",3),e(),i(6,"div",2),d(7,"doc-wireframe",3),e(),i(8,"div",2),d(9,"doc-wireframe",3),e()(),i(10,"div",4)(11,"div",2),d(12,"doc-wireframe",3),e(),i(13,"div",2),d(14,"doc-wireframe",3),e(),i(15,"div",2),d(16,"doc-wireframe",3),e()(),i(17,"div",5)(18,"div",2),d(19,"doc-wireframe",3),e(),i(20,"div",2),d(21,"doc-wireframe",3),e(),i(22,"div",2),d(23,"doc-wireframe",3),e(),i(24,"div",2),d(25,"doc-wireframe",3),e(),i(26,"div",2),d(27,"doc-wireframe",3),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),Ki=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-equal-width-example"]],standalone:!1,decls:34,vars:0,consts:[["sui-grid","","suiEqual",""],["suiGridColumn",""],["sui-segment",""],["suiGridColumn","","suiWidth","eight"],["sui-grid",""],["suiGridRow","","suiEqual",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),t(3,"1"),e()(),i(4,"div",3)(5,"div",2),t(6,"2"),e()(),i(7,"div",1)(8,"div",2),t(9,"3"),e()()(),i(10,"div",4)(11,"div",5)(12,"div",1)(13,"div",2),t(14,"1"),e()(),i(15,"div",1)(16,"div",2),t(17,"2"),e()(),i(18,"div",1)(19,"div",2),t(20,"3"),e()()(),i(21,"div",5)(22,"div",1)(23,"div",2),t(24,"1"),e()(),i(25,"div",1)(26,"div",2),t(27,"2"),e()(),i(28,"div",1)(29,"div",2),t(30,"3"),e()(),i(31,"div",1)(32,"div",2),t(33,"4"),e()()()())},dependencies:[z,M,D,A],encapsulation:2})}}return n})(),$i=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-stretched-example"]],standalone:!1,decls:17,vars:0,consts:[["sui-grid","","suiWidth","three","suiDivided","divided"],["suiGridRow","","suiStretched",""],["suiGridColumn",""],["sui-segment",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t(4,"1"),e()(),i(5,"div",2)(6,"div",3),t(7,"1"),e(),i(8,"div",3),t(9,"2"),e()(),i(10,"div",2)(11,"div",3),t(12,"1"),e(),i(13,"div",3),t(14,"2"),e(),i(15,"div",3),t(16,"3"),e()()()())},dependencies:[z,M,D,A],encapsulation:2})}}return n})(),Qi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-padded-example"]],standalone:!1,decls:21,vars:0,consts:[["sui-grid","","suiWidth","two","suiPadded","padded"],["suiGridColumn",""],["type","paragraph"],["sui-grid","","suiWidth","two","suiPadded","vertically padded"],["sui-grid","","suiWidth","two","suiPadded","horizontally padded"]],template:function(l,r){l&1&&(i(0,"p"),t(1,"The following grid has vertical and horizontal gutters."),e(),i(2,"div",0)(3,"div",1),d(4,"doc-wireframe",2),e(),i(5,"div",1),d(6,"doc-wireframe",2),e()(),i(7,"p"),t(8,"The following grid has vertical gutters."),e(),i(9,"div",3)(10,"div",1),d(11,"doc-wireframe",2),e(),i(12,"div",1),d(13,"doc-wireframe",2),e()(),i(14,"p"),t(15,"The following grid has horizontal gutters."),e(),i(16,"div",4)(17,"div",1),d(18,"doc-wireframe",2),e(),i(19,"div",1),d(20,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),Zi=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-relaxed-example"]],standalone:!1,decls:18,vars:0,consts:[["sui-grid","","suiWidth","four","suiRelaxation","relaxed"],["suiGridColumn",""],["type","image"],["sui-grid","","suiWidth","four","suiRelaxation","very relaxed"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",1),d(4,"doc-wireframe",2),e(),i(5,"div",1),d(6,"doc-wireframe",2),e(),i(7,"div",1),d(8,"doc-wireframe",2),e()(),i(9,"div",3)(10,"div",1),d(11,"doc-wireframe",2),e(),i(12,"div",1),d(13,"doc-wireframe",2),e(),i(14,"div",1),d(15,"doc-wireframe",2),e(),i(16,"div",1),d(17,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),en=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-colored-example"]],standalone:!1,decls:40,vars:0,consts:[["sui-grid","","suiWidth","five","suiPadded","padded"],["suiGridColumn","","suiColour","red"],["suiGridColumn","","suiColour","orange"],["suiGridColumn","","suiColour","yellow"],["suiGridColumn","","suiColour","olive"],["suiGridColumn","","suiColour","green"],["suiGridColumn","","suiColour","teal"],["suiGridColumn","","suiColour","blue"],["suiGridColumn","","suiColour","violet"],["suiGridColumn","","suiColour","purple"],["suiGridColumn","","suiColour","pink"],["suiGridColumn","","suiColour","brown"],["suiGridColumn","","suiColour","grey"],["suiGridColumn","","suiColour","black"],["sui-grid","","suiPadded","padded"],["suiGridRow","","suiColour","red"],["suiGridColumn",""],["suiGridRow","","suiColour","orange"],["suiGridRow","","suiColour","yellow"],["suiGridRow","","suiColour","olive"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," Red "),e(),i(3,"div",2),t(4," Orange "),e(),i(5,"div",3),t(6," Yellow "),e(),i(7,"div",4),t(8," Olive "),e(),i(9,"div",5),t(10," Green "),e(),i(11,"div",6),t(12," Teal "),e(),i(13,"div",7),t(14," Blue "),e(),i(15,"div",8),t(16," Violet "),e(),i(17,"div",9),t(18," Purple "),e(),i(19,"div",10),t(20," Pink "),e(),i(21,"div",11),t(22," Brown "),e(),i(23,"div",12),t(24," Grey "),e(),i(25,"div",13),t(26," Black "),e()(),i(27,"div",14)(28,"div",15)(29,"div",16),t(30," Red "),e()(),i(31,"div",17)(32,"div",16),t(33," Orange "),e()(),i(34,"div",18)(35,"div",16),t(36," Yellow "),e()(),i(37,"div",19)(38,"div",16),t(39," Olive "),e()()())},dependencies:[M,D,A],encapsulation:2})}}return n})(),tn=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-centered-example"]],standalone:!1,decls:10,vars:0,consts:[["sui-grid","","suiCentered","","suiWidth","two"],["suiGridColumn",""],["type","image"],["suiGridRow","","suiCentered","","suiWidth","four"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",3)(4,"div",1),d(5,"doc-wireframe",2),e(),i(6,"div",1),d(7,"doc-wireframe",2),e(),i(8,"div",1),d(9,"doc-wireframe",2),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),nn=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-text-alignment-example"]],standalone:!1,decls:26,vars:0,consts:[["sui-grid","","suiAlignment","center aligned","suiWidth","three"],["suiGridRow",""],["suiGridColumn",""],["sui-segment",""],["sui-grid",""],["suiGridRow","","suiWidth","three"],["suiGridColumn","","suiAlignment","left aligned"],["suiGridColumn","","suiAlignment","center aligned"],["suiGridColumn","","suiAlignment","right aligned"],["suiGridColumn","","suiAlignment","justified"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t(4,"Cats"),e()(),i(5,"div",2)(6,"div",3),t(7,"Dogs"),e()(),i(8,"div",2)(9,"div",3),t(10,"Monkeys"),e()()()(),i(11,"div",4)(12,"div",5)(13,"div",6)(14,"div",3),t(15,"Left aligned column"),e()(),i(16,"div",7)(17,"div",3),t(18,"Center aligned column"),e()(),i(19,"div",8)(20,"div",3),t(21,"Right aligned column"),e()()(),i(22,"div",1)(23,"div",9)(24,"div",3),t(25,"Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other."),e()()()())},dependencies:[z,M,D,A],encapsulation:2})}}return n})(),an=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-vertical-alignment-example"]],standalone:!1,decls:31,vars:0,consts:[["sui-grid","","suiVerticalAlignment","middle aligned","suiWidth","four"],["suiGridColumn",""],["type","image"],["sui-grid","","suiWidth","four"],["suiGridRow","","suiVerticalAlignment","bottom aligned"],["suiGridRow",""],["suiGridColumn","","suiVerticalAlignment","top aligned"],["suiGridColumn","","suiVerticalAlignment","middle aligned"],["suiGridColumn","","suiVerticalAlignment","bottom aligned"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",1),d(4,"doc-wireframe",2)(5,"doc-wireframe",2),e(),i(6,"div",1),d(7,"doc-wireframe",2),e(),i(8,"div",1),d(9,"doc-wireframe",2),e()(),i(10,"div",3)(11,"div",4)(12,"div",1),d(13,"doc-wireframe",2),e(),i(14,"div",1),d(15,"doc-wireframe",2)(16,"doc-wireframe",2),e(),i(17,"div",1),d(18,"doc-wireframe",2),e(),i(19,"div",1),d(20,"doc-wireframe",2),e()(),i(21,"div",5)(22,"div",6),d(23,"doc-wireframe",2),e(),i(24,"div",1),d(25,"doc-wireframe",2)(26,"doc-wireframe",2),e(),i(27,"div",7),d(28,"doc-wireframe",2),e(),i(29,"div",8),d(30,"doc-wireframe",2),e()()())},dependencies:[_,M,D,A],encapsulation:2})}}return n})(),ln=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-doubling-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-grid","","suiDoubling","","suiWidth","five"],["suiGridColumn",""],["type","image"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",1),d(4,"doc-wireframe",2),e(),i(5,"div",1),d(6,"doc-wireframe",2),e(),i(7,"div",1),d(8,"doc-wireframe",2),e(),i(9,"div",1),d(10,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})(),rn=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-stackable-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-grid","","suiStackable","","suiWidth","two"],["suiGridColumn",""],["sui-segment",""],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"doc-wireframe",3),e()(),i(4,"div",1)(5,"div",2),d(6,"doc-wireframe",3),e()()())},dependencies:[_,z,M,D],encapsulation:2})}}return n})(),dn=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-reversed-example"]],standalone:!1,decls:28,vars:2,consts:[["sui-grid","","suiWidth","four","suiDivided","divided","suiReversed","computer reversed"],["suiGridRow",""],["suiGridColumn",""],["sui-grid","","suiWidth","three","suiDivided","divided"],["suiGridRow","",3,"suiReversed"],["sui-grid","","suiWidth","one","suiDivided","vertically divided","suiReversed","computer vertically reversed"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),t(3," Computer First "),e(),i(4,"div",2),t(5," Computer Second "),e(),i(6,"div",2),t(7," Computer Third "),e(),i(8,"div",2),t(9," Computer Fourth "),e()()(),i(10,"div",3)(11,"div",4)(12,"div",2),t(13," Tablet & Mobile First "),e(),i(14,"div",2),t(15," Tablet & Mobile Second "),e(),i(16,"div",2),t(17," Tablet & Mobile Third "),e()()(),i(18,"div",5)(19,"div",1)(20,"div",2),t(21," Computer Row 1 "),e()(),i(22,"div",1)(23,"div",2),t(24," Computer Row 2 "),e()(),i(25,"div",1)(26,"div",2),t(27," Computer Row 3 "),e()()()),l&2&&(m(11),o("suiReversed",ye(1,jd)))},dependencies:[M,D,A],encapsulation:2})}}return n})(),mn=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-device-visibility-example"]],standalone:!1,decls:39,vars:0,consts:[["sui-grid",""],["suiGridRow","","suiWidth","two"],["suiGridColumn","","suiDeviceVisibility","large screen only"],["sui-segment",""],["suiGridColumn","","suiDeviceVisibility","widescreen only"],["suiGridRow","","suiWidth","two","suiDeviceVisibility","mobile only"],["suiGridColumn",""],["suiGridRow","","suiWidth","two","suiDeviceVisibility","tablet only"],["suiGridRow","","suiWidth","three","suiDeviceVisibility","computer only"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t(4,"Large Screen"),e()(),i(5,"div",4)(6,"div",3),t(7,"Widescreen"),e()()(),i(8,"div",5)(9,"div",6)(10,"div",3),t(11,"Mobile"),e()(),i(12,"div",6)(13,"div",3),t(14,"Mobile"),e()()(),i(15,"div",7)(16,"div",6)(17,"div",3),t(18,"Tablet"),e()(),i(19,"div",6)(20,"div",3),t(21,"Tablet"),e()()(),i(22,"div",8)(23,"div",6)(24,"div",3),t(25,"Computer"),e()(),i(26,"div",6)(27,"div",3),t(28,"Computer"),e()(),i(29,"div",6)(30,"div",3),t(31,"Computer"),e()()(),i(32,"div",1)(33,"div",6)(34,"div",3),t(35,"All Sizes"),e()(),i(36,"div",6)(37,"div",3),t(38,"All Sizes"),e()()()())},dependencies:[z,M,D,A],encapsulation:2})}}return n})(),on=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid-responsive-width-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiMobileWidth","sixteen","suiTabletWidth","eight","suiComputerWidth","four"],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"doc-wireframe",2),e(),i(3,"div",1),d(4,"doc-wireframe",2),e(),i(5,"div",1),d(6,"doc-wireframe",2),e(),i(7,"div",1),d(8,"doc-wireframe",2),e()())},dependencies:[_,M,D],encapsulation:2})}}return n})();function Jd(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-grid-example"),e())}function Xd(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-divided-example"),e())}function Kd(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-vertically-divided-example"),e())}function $d(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-celled-example"),e())}function Qd(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-internally-celled-example"),e())}function Zd(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-rows-example"),e())}function em(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-columns-example"),e())}function tm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-floated-example"),e())}function im(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-column-width-example"),e())}function nm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-column-count-example"),e())}function am(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-equal-width-example"),e())}function lm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-stretched-example"),e())}function rm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-padded-example"),e())}function dm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-relaxed-example"),e())}function mm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-colored-example"),e())}function om(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-centered-example"),e())}function sm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-text-alignment-example"),e())}function um(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-vertical-alignment-example"),e())}function cm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-doubling-example"),e())}function pm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-stackable-example"),e())}function vm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-reversed-example"),e())}function xm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-device-visibility-example"),e())}function fm(n,u){n&1&&(i(0,"div",9),d(1,"doc-grid-responsive-width-example"),e())}function Sm(n,u){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Grid"),e(),i(6,"p"),t(7,"A basic grid"),e(),i(8,"div",5),t(9," Grids divide horizontal space into "),i(10,"b"),t(11,"16 columns"),e(),t(12,". Four "),i(13,"code"),t(14,"four wide"),e(),t(15," columns fit in a single row, "),i(16,"code"),t(17,"16 / 4 = 4"),e(),t(18,". "),e(),c(19,Jd,2,0,"ng-template",6),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22," Divided "),i(23,"div",7),t(24,"Requires Rows"),e()(),i(25,"p"),t(26,"A grid can have dividers between its columns"),e(),c(27,Xd,2,0,"ng-template",6),e(),i(28,"doc-code-sample",3)(29,"h3",4),t(30," Vertically Divided "),i(31,"div",7),t(32,"Requires Rows"),e()(),i(33,"p"),t(34,"A grid can have dividers between rows"),e(),c(35,Kd,2,0,"ng-template",6),e(),i(36,"doc-code-sample",3)(37,"h3",4),t(38," Celled "),i(39,"div",7),t(40,"Requires Rows"),e()(),i(41,"p"),t(42,"A grid can have rows divided into cells"),e(),c(43,$d,2,0,"ng-template",6),e(),i(44,"doc-code-sample",3)(45,"h3",4),t(46," Internally Celled "),i(47,"div",7),t(48,"Requires Rows"),e()(),i(49,"p"),t(50,"A grid can have rows divisions only between internal rows"),e(),c(51,Qd,2,0,"ng-template",6),e(),d(52,"br"),i(53,"h2",2),t(54,"Content"),e(),i(55,"doc-code-sample",3)(56,"h3",4),t(57,"Rows"),e(),i(58,"p"),t(59,"A row is a horizontal grouping of columns"),e(),i(60,"div",5),t(61," Row wrappers automatically clear previous columns and allow you to apply variations to a group of columns. "),e(),c(62,Zd,2,0,"ng-template",6),e(),i(63,"doc-code-sample",3)(64,"h3",4),t(65,"Columns"),e(),i(66,"p"),t(67,"Columns each contain gutters giving them equal spacing from other columns"),e(),i(68,"div",8),t(69," Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns. "),e(),c(70,em,2,0,"ng-template",6),e(),d(71,"br"),i(72,"h2",2),t(73,"Variations"),e(),i(74,"doc-code-sample",3)(75,"h3",4),t(76,"Floated"),e(),i(77,"p"),t(78,"A column can sit flush against the left or right edge of a row"),e(),c(79,tm,2,0,"ng-template",6),e(),i(80,"doc-code-sample",3)(81,"h3",4),t(82,"Column Width"),e(),i(83,"p"),t(84,"A column can vary in width taking up more than a single grid column"),e(),i(85,"div",5),t(86," If a column cannot fit in a row it will automatically flow to the next row. "),e(),c(87,im,2,0,"ng-template",6),e(),i(88,"doc-code-sample",3)(89,"h3",4),t(90,"Column Count"),e(),i(91,"p"),t(92,"A grid can have a different number of columns per row"),e(),c(93,nm,2,0,"ng-template",6),e(),i(94,"doc-code-sample",3)(95,"h3",4),t(96,"Equal Width"),e(),i(97,"p"),t(98,"A grid can automatically resize all elements to split the available width evenly"),e(),c(99,am,2,0,"ng-template",6),e(),i(100,"doc-code-sample",3)(101,"h3",4),t(102,"Stretched"),e(),i(103,"p"),t(104,"A row can stretch its contents to take up the entire column height"),e(),c(105,lm,2,0,"ng-template",6),e(),i(106,"doc-code-sample",3)(107,"h3",4),t(108,"Padded"),e(),i(109,"p"),t(110,"A grid can preserve its vertical and horizontal gutters on first and last columns"),e(),c(111,rm,2,0,"ng-template",6),e(),i(112,"doc-code-sample",3)(113,"h3",4),t(114,"Relaxed"),e(),i(115,"p"),t(116,"A grid can increase its gutters to allow for more negative space"),e(),c(117,dm,2,0,"ng-template",6),e(),i(118,"doc-code-sample",3)(119,"h3",4),t(120,"Colored"),e(),i(121,"p"),t(122,"A row or column can be colored"),e(),i(123,"div",8),t(124," Colored rows or columns should be used with a "),i(125,"code"),t(126,"padded"),e(),t(127," grid, which does not include negative margins. "),e(),c(128,mm,2,0,"ng-template",6),e(),i(129,"doc-code-sample",3)(130,"h3",4),t(131,"Centered"),e(),i(132,"p"),t(133,"A grid can have its columns centered"),e(),c(134,om,2,0,"ng-template",6),e(),i(135,"doc-code-sample",3)(136,"h3",4),t(137,"Text Alignment"),e(),i(138,"p"),t(139,"A grid, row, or column can specify its text alignment"),e(),c(140,sm,2,0,"ng-template",6),e(),i(141,"doc-code-sample",3)(142,"h3",4),t(143,"Vertical Alignment"),e(),i(144,"p"),t(145,"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered"),e(),i(146,"div",5),t(147," Use "),i(148,"code"),t(149,"suiVerticalAlignment"),e(),t(150," when you need to combine a vertical alignment with a text alignment set through "),i(151,"code"),t(152,"suiAlignment"),e(),t(153,". "),e(),c(154,um,2,0,"ng-template",6),e(),d(155,"br"),i(156,"h2",2),t(157,"Responsive Variations"),e(),i(158,"doc-code-sample",3)(159,"h3",4),t(160,"Doubling"),e(),i(161,"p"),t(162,"A grid can double its column width on tablet and mobile sizes"),e(),i(163,"div",5),t(164," A grid will round its columns to the closest reasonable value when doubling, for example a "),i(165,"code"),t(166,"five column grid"),e(),t(167," will use "),i(168,"code"),t(169,"2 mobile, 3 tablet, 5 desktop"),e(),t(170,". To force 1 column on mobile you can add "),i(171,"code"),t(172,"suiStackable"),e(),t(173,". "),e(),c(174,cm,2,0,"ng-template",6),e(),i(175,"doc-code-sample",3)(176,"h3",4),t(177,"Stackable"),e(),i(178,"p"),t(179,"A grid can have its columns stack on-top of each other after reaching mobile breakpoints"),e(),i(180,"div",5),t(181," To see a grid stack, try resizing your browser to a small width. "),e(),c(182,pm,2,0,"ng-template",6),e(),i(183,"doc-code-sample",3)(184,"h3",4),t(185,"Reversed"),e(),i(186,"p"),t(187,"A grid or row can specify that its columns should reverse order at different device sizes"),e(),i(188,"div",5),t(189," Reversed grids are compatible with "),i(190,"code"),t(191,"divided"),e(),t(192," grids and other complex grid types. Bind an array to "),i(193,"code"),t(194,"suiReversed"),e(),t(195," to reverse on more than one device. "),e(),c(196,vm,2,0,"ng-template",6),e(),i(197,"doc-code-sample",3)(198,"h3",4),t(199,"Device Visibility"),e(),i(200,"p"),t(201,"A column or row can appear only for a specific device, or screen sizes"),e(),i(202,"div",5),t(203," See the container documentation for information on breakpoint calculations. "),e(),c(204,xm,2,0,"ng-template",6),e(),i(205,"doc-code-sample",3)(206,"h3",4),t(207,"Responsive Width"),e(),i(208,"p"),t(209,"A column can specify a width for a specific device"),e(),i(210,"div",8),t(211," It's recommended to use a responsive pattern like "),i(212,"code"),t(213,"doubling"),e(),t(214," or "),i(215,"code"),t(216,"stackable"),e(),t(217," to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary. "),e(),c(218,fm,2,0,"ng-template",6),e()()),n&2){let a=H();m(3),o("templateCode",a.snippetGrid),m(17),o("templateCode",a.snippetDivided),m(8),o("templateCode",a.snippetVerticallyDivided),m(8),o("templateCode",a.snippetCelled),m(8),o("templateCode",a.snippetInternallyCelled),m(11),o("templateCode",a.snippetRows),m(8),o("templateCode",a.snippetColumns),m(11),o("templateCode",a.snippetFloated),m(6),o("templateCode",a.snippetColumnWidth),m(8),o("templateCode",a.snippetColumnCount),m(6),o("templateCode",a.snippetEqualWidth),m(6),o("templateCode",a.snippetStretched),m(6),o("templateCode",a.snippetPadded),m(6),o("templateCode",a.snippetRelaxed),m(6),o("templateCode",a.snippetColored),m(11),o("templateCode",a.snippetCentered),m(6),o("templateCode",a.snippetTextAlignment),m(6),o("templateCode",a.snippetVerticalAlignment),m(17),o("templateCode",a.snippetDoubling),m(17),o("templateCode",a.snippetStackable),m(8),o("templateCode",a.snippetReversed),m(14),o("templateCode",a.snippetDeviceVisibility),m(8),o("templateCode",a.snippetResponsiveWidth)}}function hm(n,u){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-grid"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",10)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiWidth"),e(),i(20,"td"),t(21," Set the number of columns in the grid. Allowed values are "),i(22,"span",11),t(23,"'one'"),e(),t(24," through "),i(25,"span",11),t(26,"'sixteen'"),e(),t(27," | "),i(28,"span",11),t(29,"null"),e()(),i(30,"td")(31,"div",12),t(32," string "),e()(),i(33,"td")(34,"div",13),t(35," null "),e()()(),i(36,"tr")(37,"td"),t(38,"suiAlignment"),e(),i(39,"td"),t(40," Set the text alignment of the grid. Allowed values are "),i(41,"span",11),t(42,"'left aligned'"),e(),t(43," | "),i(44,"span",11),t(45,"'center aligned'"),e(),t(46," | "),i(47,"span",11),t(48,"'right aligned'"),e(),t(49," | "),i(50,"span",11),t(51,"'justified'"),e(),t(52," | "),i(53,"span",11),t(54,"null"),e()(),i(55,"td")(56,"div",12),t(57," string "),e()(),i(58,"td")(59,"div",13),t(60," null "),e()()(),i(61,"tr")(62,"td"),t(63,"suiVerticalAlignment"),e(),i(64,"td"),t(65," Set the vertical alignment of the grid. Allowed values are "),i(66,"span",11),t(67,"'top aligned'"),e(),t(68," | "),i(69,"span",11),t(70,"'middle aligned'"),e(),t(71," | "),i(72,"span",11),t(73,"'bottom aligned'"),e(),t(74," | "),i(75,"span",11),t(76,"null"),e()(),i(77,"td")(78,"div",12),t(79," string "),e()(),i(80,"td")(81,"div",13),t(82," null "),e()()(),i(83,"tr")(84,"td"),t(85,"suiDivided"),e(),i(86,"td"),t(87," Set dividers between columns or rows. Allowed values are "),i(88,"span",11),t(89,"'divided'"),e(),t(90," | "),i(91,"span",11),t(92,"'vertically divided'"),e(),t(93," | "),i(94,"span",11),t(95,"null"),e()(),i(96,"td")(97,"div",12),t(98," string "),e()(),i(99,"td")(100,"div",13),t(101," null "),e()()(),i(102,"tr")(103,"td"),t(104,"suiCelled"),e(),i(105,"td"),t(106," Divide rows into cells. Allowed values are "),i(107,"span",11),t(108,"'celled'"),e(),t(109," | "),i(110,"span",11),t(111,"'internally celled'"),e(),t(112," | "),i(113,"span",11),t(114,"null"),e()(),i(115,"td")(116,"div",12),t(117," string "),e()(),i(118,"td")(119,"div",13),t(120," null "),e()()(),i(121,"tr")(122,"td"),t(123,"suiPadded"),e(),i(124,"td"),t(125," Preserve gutters on first and last columns. Allowed values are "),i(126,"span",11),t(127,"'padded'"),e(),t(128," | "),i(129,"span",11),t(130,"'vertically padded'"),e(),t(131," | "),i(132,"span",11),t(133,"'horizontally padded'"),e(),t(134," | "),i(135,"span",11),t(136,"null"),e()(),i(137,"td")(138,"div",12),t(139," string "),e()(),i(140,"td")(141,"div",13),t(142," null "),e()()(),i(143,"tr")(144,"td"),t(145,"suiRelaxation"),e(),i(146,"td"),t(147," Increase the size of the gutters. Allowed values are "),i(148,"span",11),t(149,"'relaxed'"),e(),t(150," | "),i(151,"span",11),t(152,"'very relaxed'"),e(),t(153," | "),i(154,"span",11),t(155,"null"),e()(),i(156,"td")(157,"div",12),t(158," string "),e()(),i(159,"td")(160,"div",13),t(161," null "),e()()(),i(162,"tr")(163,"td"),t(164,"suiReversed"),e(),i(165,"td"),t(166," Reverse the order of columns or rows by device. Accepts one value or an array of "),i(167,"span",11),t(168,"'computer reversed'"),e(),t(169," | "),i(170,"span",11),t(171,"'tablet reversed'"),e(),t(172," | "),i(173,"span",11),t(174,"'mobile reversed'"),e(),t(175," | "),i(176,"span",11),t(177,"'computer vertically reversed'"),e(),t(178," | "),i(179,"span",11),t(180,"'tablet vertically reversed'"),e(),t(181," | "),i(182,"span",11),t(183,"'mobile vertically reversed'"),e(),t(184," | "),i(185,"span",11),t(186,"null"),e()(),i(187,"td")(188,"div",12),t(189," string | string[] "),e()(),i(190,"td")(191,"div",13),t(192," null "),e()()(),i(193,"tr")(194,"td"),t(195,"suiEqual"),e(),i(196,"td"),t(197," Set whether columns should automatically split the available width evenly "),e(),i(198,"td")(199,"div",12),t(200," boolean "),e()(),i(201,"td")(202,"div",13),t(203," false "),e()()(),i(204,"tr")(205,"td"),t(206,"suiCentered"),e(),i(207,"td"),t(208," Set whether the columns should be centered "),e(),i(209,"td")(210,"div",12),t(211," boolean "),e()(),i(212,"td")(213,"div",13),t(214," false "),e()()(),i(215,"tr")(216,"td"),t(217,"suiStretched"),e(),i(218,"td"),t(219," Set whether columns should stretch to take up the entire row height "),e(),i(220,"td")(221,"div",12),t(222," boolean "),e()(),i(223,"td")(224,"div",13),t(225," false "),e()()(),i(226,"tr")(227,"td"),t(228,"suiStackable"),e(),i(229,"td"),t(230," Set whether columns should stack on mobile devices "),e(),i(231,"td")(232,"div",12),t(233," boolean "),e()(),i(234,"td")(235,"div",13),t(236," false "),e()()(),i(237,"tr")(238,"td"),t(239,"suiDoubling"),e(),i(240,"td"),t(241," Set whether column widths should double for each device jump "),e(),i(242,"td")(243,"div",12),t(244," boolean "),e()(),i(245,"td")(246,"div",13),t(247," false "),e()()(),i(248,"tr")(249,"td"),t(250,"suiContainer"),e(),i(251,"td"),t(252," Set whether the grid should also be a responsive container "),e(),i(253,"td")(254,"div",12),t(255," boolean "),e()(),i(256,"td")(257,"div",13),t(258," false "),e()()()()(),i(259,"h2",2),t(260,"suiGridRow"),e(),i(261,"h4",4),t(262,"Properties"),e(),i(263,"table",10)(264,"thead")(265,"tr")(266,"th"),t(267,"Property"),e(),i(268,"th"),t(269,"Description"),e(),i(270,"th"),t(271,"Type"),e(),i(272,"th"),t(273,"Default"),e()()(),i(274,"tbody")(275,"tr")(276,"td"),t(277,"suiWidth"),e(),i(278,"td"),t(279," Set the number of columns in the row. Allowed values are "),i(280,"span",11),t(281,"'one'"),e(),t(282," through "),i(283,"span",11),t(284,"'sixteen'"),e(),t(285," | "),i(286,"span",11),t(287,"null"),e()(),i(288,"td")(289,"div",12),t(290," string "),e()(),i(291,"td")(292,"div",13),t(293," null "),e()()(),i(294,"tr")(295,"td"),t(296,"suiAlignment"),e(),i(297,"td"),t(298," Set the text (or vertical) alignment of the row. Allowed values are "),i(299,"span",11),t(300,"'left aligned'"),e(),t(301," | "),i(302,"span",11),t(303,"'center aligned'"),e(),t(304," | "),i(305,"span",11),t(306,"'right aligned'"),e(),t(307," | "),i(308,"span",11),t(309,"'justified'"),e(),t(310," | "),i(311,"span",11),t(312,"'top aligned'"),e(),t(313," | "),i(314,"span",11),t(315,"'middle aligned'"),e(),t(316," | "),i(317,"span",11),t(318,"'bottom aligned'"),e(),t(319," | "),i(320,"span",11),t(321,"null"),e()(),i(322,"td")(323,"div",12),t(324," string "),e()(),i(325,"td")(326,"div",13),t(327," null "),e()()(),i(328,"tr")(329,"td"),t(330,"suiVerticalAlignment"),e(),i(331,"td"),t(332," Set the vertical alignment of the row. Allowed values are "),i(333,"span",11),t(334,"'top aligned'"),e(),t(335," | "),i(336,"span",11),t(337,"'middle aligned'"),e(),t(338," | "),i(339,"span",11),t(340,"'bottom aligned'"),e(),t(341," | "),i(342,"span",11),t(343,"null"),e()(),i(344,"td")(345,"div",12),t(346," string "),e()(),i(347,"td")(348,"div",13),t(349," null "),e()()(),i(350,"tr")(351,"td"),t(352,"suiColour"),e(),i(353,"td"),t(354," Set the background colour of the row. Allowed values are "),i(355,"span",11),t(356,"'red'"),e(),t(357," | "),i(358,"span",11),t(359,"'orange'"),e(),t(360," | "),i(361,"span",11),t(362,"'yellow'"),e(),t(363," | "),i(364,"span",11),t(365,"'olive'"),e(),t(366," | "),i(367,"span",11),t(368,"'green'"),e(),t(369," | "),i(370,"span",11),t(371,"'teal'"),e(),t(372," | "),i(373,"span",11),t(374,"'blue'"),e(),t(375," | "),i(376,"span",11),t(377,"'violet'"),e(),t(378," | "),i(379,"span",11),t(380,"'purple'"),e(),t(381," | "),i(382,"span",11),t(383,"'pink'"),e(),t(384," | "),i(385,"span",11),t(386,"'brown'"),e(),t(387," | "),i(388,"span",11),t(389,"'grey'"),e(),t(390," | "),i(391,"span",11),t(392,"'black'"),e(),t(393," | "),i(394,"span",11),t(395,"null"),e()(),i(396,"td")(397,"div",12),t(398," string "),e()(),i(399,"td")(400,"div",13),t(401," null "),e()()(),i(402,"tr")(403,"td"),t(404,"suiReversed"),e(),i(405,"td"),t(406," Reverse the order of columns by device. Accepts one value or an array of "),i(407,"span",11),t(408,"'computer reversed'"),e(),t(409," | "),i(410,"span",11),t(411,"'tablet reversed'"),e(),t(412," | "),i(413,"span",11),t(414,"'mobile reversed'"),e(),t(415," | "),i(416,"span",11),t(417,"'computer vertically reversed'"),e(),t(418," | "),i(419,"span",11),t(420,"'tablet vertically reversed'"),e(),t(421," | "),i(422,"span",11),t(423,"'mobile vertically reversed'"),e(),t(424," | "),i(425,"span",11),t(426,"null"),e()(),i(427,"td")(428,"div",12),t(429," string | string[] "),e()(),i(430,"td")(431,"div",13),t(432," null "),e()()(),i(433,"tr")(434,"td"),t(435,"suiDeviceVisibility"),e(),i(436,"td"),t(437," Only show the row on specific devices. Allowed values are "),i(438,"span",11),t(439,"'mobile only'"),e(),t(440," | "),i(441,"span",11),t(442,"'tablet only'"),e(),t(443," | "),i(444,"span",11),t(445,"'computer only'"),e(),t(446," | "),i(447,"span",11),t(448,"'large screen only'"),e(),t(449," | "),i(450,"span",11),t(451,"'widescreen only'"),e(),t(452," | "),i(453,"span",11),t(454,"'tablet mobile only'"),e(),t(455," | "),i(456,"span",11),t(457,"null"),e()(),i(458,"td")(459,"div",12),t(460," string "),e()(),i(461,"td")(462,"div",13),t(463," null "),e()()(),i(464,"tr")(465,"td"),t(466,"suiEqual"),e(),i(467,"td"),t(468," Set whether columns should automatically split the available width evenly "),e(),i(469,"td")(470,"div",12),t(471," boolean "),e()(),i(472,"td")(473,"div",13),t(474," false "),e()()(),i(475,"tr")(476,"td"),t(477,"suiCentered"),e(),i(478,"td"),t(479," Set whether the columns should be centered "),e(),i(480,"td")(481,"div",12),t(482," boolean "),e()(),i(483,"td")(484,"div",13),t(485," false "),e()()(),i(486,"tr")(487,"td"),t(488,"suiStretched"),e(),i(489,"td"),t(490," Set whether columns should stretch to take up the entire row height "),e(),i(491,"td")(492,"div",12),t(493," boolean "),e()(),i(494,"td")(495,"div",13),t(496," false "),e()()(),i(497,"tr")(498,"td"),t(499,"suiDoubling"),e(),i(500,"td"),t(501," Set whether column widths should double for each device jump "),e(),i(502,"td")(503,"div",12),t(504," boolean "),e()(),i(505,"td")(506,"div",13),t(507," false "),e()()()()(),i(508,"h2",2),t(509,"suiGridColumn"),e(),i(510,"h4",4),t(511,"Properties"),e(),i(512,"table",10)(513,"thead")(514,"tr")(515,"th"),t(516,"Property"),e(),i(517,"th"),t(518,"Description"),e(),i(519,"th"),t(520,"Type"),e(),i(521,"th"),t(522,"Default"),e()()(),i(523,"tbody")(524,"tr")(525,"td"),t(526,"suiWidth"),e(),i(527,"td"),t(528," Set the width of the column. Allowed values are "),i(529,"span",11),t(530,"'one'"),e(),t(531," through "),i(532,"span",11),t(533,"'sixteen'"),e(),t(534," | "),i(535,"span",11),t(536,"null"),e()(),i(537,"td")(538,"div",12),t(539," string "),e()(),i(540,"td")(541,"div",13),t(542," null "),e()()(),i(543,"tr")(544,"td"),t(545,"suiMobileWidth"),e(),i(546,"td"),t(547," Set the width of the column on mobile devices. Allowed values are "),i(548,"span",11),t(549,"'one'"),e(),t(550," through "),i(551,"span",11),t(552,"'sixteen'"),e(),t(553," | "),i(554,"span",11),t(555,"null"),e()(),i(556,"td")(557,"div",12),t(558," string "),e()(),i(559,"td")(560,"div",13),t(561," null "),e()()(),i(562,"tr")(563,"td"),t(564,"suiTabletWidth"),e(),i(565,"td"),t(566," Set the width of the column on tablets. Allowed values are "),i(567,"span",11),t(568,"'one'"),e(),t(569," through "),i(570,"span",11),t(571,"'sixteen'"),e(),t(572," | "),i(573,"span",11),t(574,"null"),e()(),i(575,"td")(576,"div",12),t(577," string "),e()(),i(578,"td")(579,"div",13),t(580," null "),e()()(),i(581,"tr")(582,"td"),t(583,"suiComputerWidth"),e(),i(584,"td"),t(585," Set the width of the column on computers. Allowed values are "),i(586,"span",11),t(587,"'one'"),e(),t(588," through "),i(589,"span",11),t(590,"'sixteen'"),e(),t(591," | "),i(592,"span",11),t(593,"null"),e()(),i(594,"td")(595,"div",12),t(596," string "),e()(),i(597,"td")(598,"div",13),t(599," null "),e()()(),i(600,"tr")(601,"td"),t(602,"suiLargeScreenWidth"),e(),i(603,"td"),t(604," Set the width of the column on large screens. Allowed values are "),i(605,"span",11),t(606,"'one'"),e(),t(607," through "),i(608,"span",11),t(609,"'sixteen'"),e(),t(610," | "),i(611,"span",11),t(612,"null"),e()(),i(613,"td")(614,"div",12),t(615," string "),e()(),i(616,"td")(617,"div",13),t(618," null "),e()()(),i(619,"tr")(620,"td"),t(621,"suiWidescreenWidth"),e(),i(622,"td"),t(623," Set the width of the column on widescreens. Allowed values are "),i(624,"span",11),t(625,"'one'"),e(),t(626," through "),i(627,"span",11),t(628,"'sixteen'"),e(),t(629," | "),i(630,"span",11),t(631,"null"),e()(),i(632,"td")(633,"div",12),t(634," string "),e()(),i(635,"td")(636,"div",13),t(637," null "),e()()(),i(638,"tr")(639,"td"),t(640,"suiFloated"),e(),i(641,"td"),t(642," Float the column to the edge of the row. Allowed values are "),i(643,"span",11),t(644,"'left floated'"),e(),t(645," | "),i(646,"span",11),t(647,"'right floated'"),e(),t(648," | "),i(649,"span",11),t(650,"null"),e()(),i(651,"td")(652,"div",12),t(653," string "),e()(),i(654,"td")(655,"div",13),t(656," null "),e()()(),i(657,"tr")(658,"td"),t(659,"suiAlignment"),e(),i(660,"td"),t(661," Set the text (or vertical) alignment of the column. Allowed values are "),i(662,"span",11),t(663,"'left aligned'"),e(),t(664," | "),i(665,"span",11),t(666,"'center aligned'"),e(),t(667," | "),i(668,"span",11),t(669,"'right aligned'"),e(),t(670," | "),i(671,"span",11),t(672,"'justified'"),e(),t(673," | "),i(674,"span",11),t(675,"'top aligned'"),e(),t(676," | "),i(677,"span",11),t(678,"'middle aligned'"),e(),t(679," | "),i(680,"span",11),t(681,"'bottom aligned'"),e(),t(682," | "),i(683,"span",11),t(684,"null"),e()(),i(685,"td")(686,"div",12),t(687," string "),e()(),i(688,"td")(689,"div",13),t(690," null "),e()()(),i(691,"tr")(692,"td"),t(693,"suiVerticalAlignment"),e(),i(694,"td"),t(695," Set the vertical alignment of the column. Allowed values are "),i(696,"span",11),t(697,"'top aligned'"),e(),t(698," | "),i(699,"span",11),t(700,"'middle aligned'"),e(),t(701," | "),i(702,"span",11),t(703,"'bottom aligned'"),e(),t(704," | "),i(705,"span",11),t(706,"null"),e()(),i(707,"td")(708,"div",12),t(709," string "),e()(),i(710,"td")(711,"div",13),t(712," null "),e()()(),i(713,"tr")(714,"td"),t(715,"suiColour"),e(),i(716,"td"),t(717," Set the background colour of the column. Allowed values are "),i(718,"span",11),t(719,"'red'"),e(),t(720," | "),i(721,"span",11),t(722,"'orange'"),e(),t(723," | "),i(724,"span",11),t(725,"'yellow'"),e(),t(726," | "),i(727,"span",11),t(728,"'olive'"),e(),t(729," | "),i(730,"span",11),t(731,"'green'"),e(),t(732," | "),i(733,"span",11),t(734,"'teal'"),e(),t(735," | "),i(736,"span",11),t(737,"'blue'"),e(),t(738," | "),i(739,"span",11),t(740,"'violet'"),e(),t(741," | "),i(742,"span",11),t(743,"'purple'"),e(),t(744," | "),i(745,"span",11),t(746,"'pink'"),e(),t(747," | "),i(748,"span",11),t(749,"'brown'"),e(),t(750," | "),i(751,"span",11),t(752,"'grey'"),e(),t(753," | "),i(754,"span",11),t(755,"'black'"),e(),t(756," | "),i(757,"span",11),t(758,"null"),e()(),i(759,"td")(760,"div",12),t(761," string "),e()(),i(762,"td")(763,"div",13),t(764," null "),e()()(),i(765,"tr")(766,"td"),t(767,"suiDeviceVisibility"),e(),i(768,"td"),t(769," Only show the column on specific devices. Allowed values are "),i(770,"span",11),t(771,"'mobile only'"),e(),t(772," | "),i(773,"span",11),t(774,"'tablet only'"),e(),t(775," | "),i(776,"span",11),t(777,"'computer only'"),e(),t(778," | "),i(779,"span",11),t(780,"'large screen only'"),e(),t(781," | "),i(782,"span",11),t(783,"'widescreen only'"),e(),t(784," | "),i(785,"span",11),t(786,"'tablet mobile only'"),e(),t(787," | "),i(788,"span",11),t(789,"null"),e()(),i(790,"td")(791,"div",12),t(792," string "),e()(),i(793,"td")(794,"div",13),t(795," null "),e()()(),i(796,"tr")(797,"td"),t(798,"suiStretched"),e(),i(799,"td"),t(800," Set whether the column contents should stretch to the column height "),e(),i(801,"td")(802,"div",12),t(803," boolean "),e()(),i(804,"td")(805,"div",13),t(806," false "),e()()()()()())}var sn=(()=>{class n{constructor(a){this.snippetGrid=Si,this.snippetDivided=hi,this.snippetVerticallyDivided=gi,this.snippetCelled=Ei,this.snippetInternallyCelled=yi,this.snippetRows=Ci,this.snippetColumns=bi,this.snippetFloated=Fi,this.snippetColumnWidth=Mi,this.snippetColumnCount=Di,this.snippetEqualWidth=wi,this.snippetStretched=_i,this.snippetPadded=Ii,this.snippetRelaxed=Ti,this.snippetColored=Gi,this.snippetCentered=Ai,this.snippetTextAlignment=Bi,this.snippetVerticalAlignment=ki,this.snippetDoubling=Wi,this.snippetStackable=zi,this.snippetReversed=Ri,this.snippetDeviceVisibility=Pi,this.snippetResponsiveWidth=Ni,a.setTitle("Grid | Ngx Semantic")}static{this.\u0275fac=function(l){return new(l||n)(L(V))}}static{this.\u0275cmp=s({type:n,selectors:[["doc-grid"]],standalone:!1,decls:3,vars:2,consts:[["header","Grid","subHeader","A grid is used to harmonize negative space in a layout","semanticUrl","https://semantic-ui.com/collections/grid.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],["sui-label","","suiColour","teal","suiSize","tiny"],["sui-message","","suiState","warning"],[1,"grid-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(l,r){l&1&&(i(0,"doc-page",0),c(1,Sm,219,23,"div",1)(2,hm,807,0,"div",1),e()),l&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,q,O,U,T,b,Y,P,Li,Hi,Vi,Oi,qi,Ui,ji,Yi,Ji,Xi,Ki,$i,Qi,Zi,en,tn,nn,an,ln,rn,dn,mn,on],styles:["[_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.column:not(.row), [_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.row>.column{box-shadow:inset 0 0 0 1px #2224261a}[_nghost-%COMP%]     .grid-demo .ui.grid+.ui.grid, [_nghost-%COMP%]     .grid-demo .ui.grid+p{margin-top:1.5rem}"]})}}return n})();var un=`<div sui-menu>
  <div suiMenuItem suiHeader>Our Company</div>
  <a suiMenuItem>About Us</a>
  <a suiMenuItem>Jobs</a>
  <a suiMenuItem>Locations</a>
</div>
`;var cn=`<div sui-menu
     suiWidth="three">
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var pn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var vn=`<div sui-menu
     suiSecondary>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiIcon="icon">
        <input type="text" placeholder="Search...">
        <i sui-icon suiIconType="search link"></i>
      </div>
    </div>
    <a suiMenuItem>Logout</a>
  </div>
</div>
`;var xn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var fn=`<div sui-menu
     suiPointing>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiIcon="icon"
           suiTransparent>
        <input type="text" placeholder="Search...">
        <i sui-icon suiIconType="search link"></i>
      </div>
    </div>
  </div>
</div>
<div sui-segment>
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var Sn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var hn=`<div sui-menu
     suiSecondary
     suiPointing>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
  <div suiSubMenu
       suiRight>
    <a suiMenuItem>Logout</a>
  </div>
</div>
<div sui-segment>
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var gn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var En=`<div sui-menu
     suiTabular>
  <a suiMenuItem
     [suiActive]="activeItem === 'bio'"
     (click)="select('bio')">
    Bio
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'photos'"
     (click)="select('photos')">
    Photos
  </a>
</div>
`;var yn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Cn=`<div sui-menu
     suiTabular
     suiAttached="top">
  <a suiMenuItem
     [suiActive]="activeItem === 'bio'"
     (click)="select('bio')">
    Bio
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'photos'"
     (click)="select('photos')">
    Photos
  </a>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiIcon="icon"
           suiTransparent>
        <input type="text" placeholder="Search users...">
        <i sui-icon suiIconType="search link"></i>
      </div>
    </div>
  </div>
</div>
<div sui-segment
     suiAttached="bottom attached">
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var bn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Fn=`<div sui-menu
     suiText>
  <div suiMenuItem suiHeader>Sort By</div>
  <a suiMenuItem
     [suiActive]="activeItem === 'closest'"
     (click)="select('closest')">
    Closest
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'most-comments'"
     (click)="select('most-comments')">
    Most Comments
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'most-popular'"
     (click)="select('most-popular')">
    Most Popular
  </a>
</div>
`;var Mn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Dn=`<div sui-menu
     suiVertical>
  <a suiMenuItem
     suiActive
     suiColour="teal">
    Inbox
    <div sui-label
         suiColour="teal"
         suiPointing="left">1</div>
  </a>
  <a suiMenuItem>
    Spam
    <div sui-label>51</div>
  </a>
  <a suiMenuItem>
    Updates
    <div sui-label>1</div>
  </a>
  <div suiMenuItem>
    <div sui-input
         suiIcon="icon"
         suiTransparent>
      <input type="text" placeholder="Search mail...">
      <i sui-icon suiIconType="search"></i>
    </div>
  </div>
</div>
`;var wn=`<div sui-menu
     suiVertical
     suiSecondary>
  <a suiMenuItem
     [suiActive]="activeItem === 'account'"
     (click)="select('account')">
    Account
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'settings'"
     (click)="select('settings')">
    Settings
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'display-options'"
     (click)="select('display-options')">
    Display Options
  </a>
</div>
<div sui-menu
     suiVertical
     suiPointing>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var _n=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var In=`<div sui-menu
     suiPagination>
  <a suiMenuItem suiActive>1</a>
  <div suiMenuItem disabled>...</div>
  <a suiMenuItem>10</a>
  <a suiMenuItem>11</a>
  <a suiMenuItem>12</a>
</div>
`;var Tn=`<div sui-menu>
  <div suiMenuItem suiHeader>Our Company</div>
  <a suiMenuItem>About Us</a>
  <a suiMenuItem>Jobs</a>
</div>
<div sui-menu
     suiVertical>
  <div suiMenuItem>
    <div suiMenuHeader>Products</div>
    <div suiSubMenu>
      <a suiMenuItem>Enterprise</a>
      <a suiMenuItem>Consumer</a>
    </div>
  </div>
  <div suiMenuItem>
    <div suiMenuHeader>Hosting</div>
    <div suiSubMenu>
      <a suiMenuItem>Shared</a>
      <a suiMenuItem>Dedicated</a>
    </div>
  </div>
</div>
`;var Gn=`<div sui-menu
     suiVertical>
  <div suiMenuItem>
    <h4 sui-header>Promotions</h4>
    <p>Check out our new promotions</p>
  </div>
  <div suiMenuItem>
    <h4 sui-header>Coupons</h4>
    <p>Check out our collection of coupons</p>
  </div>
</div>
`;var An=`<div sui-menu>
  <div suiMenuItem>
    <div sui-input
         suiIcon="icon">
      <input type="text" placeholder="Search...">
      <i sui-icon suiIconType="search"></i>
    </div>
  </div>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiAction="action">
        <input type="text" placeholder="Navigate to...">
        <div sui-button suiColour="blue">Go</div>
      </div>
    </div>
  </div>
</div>
`;var Bn=`<div sui-menu>
  <div suiMenuItem>
    <div sui-button suiEmphasis="primary">Sign up</div>
  </div>
  <div suiMenuItem>
    <div sui-button>Log-in</div>
  </div>
</div>
`;var kn=`<div sui-menu
     suiVertical>
  <a suiMenuItem href="https://www.google.com" target="_blank">Visit Google</a>
  <div suiMenuItem suiLink>Link via class</div>
  <div suiMenuItem>Not a link</div>
</div>
`;var Wn=`<div sui-menu>
  <a suiMenuItem>Home</a>
  <sui-dropdown suiMenuItem>
    <span class="text">More</span>
    <i sui-icon suiIconType="dropdown"></i>
    <div suiDropdownMenu>
      <div suiDropdownMenuItem>Edit Profile</div>
      <div suiDropdownMenuItem>Choose Language</div>
      <div suiDropdownMenuItem>Account Settings</div>
    </div>
  </sui-dropdown>
</div>
`;var zn=`<div sui-menu>
  <a suiMenuItem>Browse</a>
  <a suiMenuItem>Submit</a>
  <div suiSubMenu
       suiRight>
    <a suiMenuItem>Sign Up</a>
    <a suiMenuItem>Help</a>
  </div>
</div>
`;var Rn=`<div sui-menu
     suiCompact>
  <a suiMenuItem>A link</a>
  <div suiMenuItem suiLink>div Link</div>
</div>
`;var Pn=`<div sui-menu
     suiCompact>
  <a suiMenuItem suiActive>Link</a>
</div>
`;var Nn=`<div sui-menu
     suiCompact>
  <div suiMenuItem disabled>Link</div>
</div>
`;var Ln=`<div sui-menu
     suiStackable>
  <div suiMenuItem>
    <img src="assets/images/logo.png">
  </div>
  <a suiMenuItem>Features</a>
  <a suiMenuItem>Testimonials</a>
  <a suiMenuItem>Sign-in</a>
</div>
`;var Hn=`<div sui-menu
     suiInverted>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
<div sui-menu
     suiInverted
     suiVertical>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var Vn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var On=`<div sui-menu
     suiWidth="thirteen">
  <a suiMenuItem
     suiColour="red"
     [suiActive]="activeItem === 'red'"
     (click)="select('red')">Red</a>
  <a suiMenuItem
     suiColour="orange"
     [suiActive]="activeItem === 'orange'"
     (click)="select('orange')">Orange</a>
  <a suiMenuItem
     suiColour="yellow"
     [suiActive]="activeItem === 'yellow'"
     (click)="select('yellow')">Yellow</a>
  <a suiMenuItem
     suiColour="olive"
     [suiActive]="activeItem === 'olive'"
     (click)="select('olive')">Olive</a>
  <a suiMenuItem
     suiColour="green"
     [suiActive]="activeItem === 'green'"
     (click)="select('green')">Green</a>
  <a suiMenuItem
     suiColour="teal"
     [suiActive]="activeItem === 'teal'"
     (click)="select('teal')">Teal</a>
  <a suiMenuItem
     suiColour="blue"
     [suiActive]="activeItem === 'blue'"
     (click)="select('blue')">Blue</a>
  <a suiMenuItem
     suiColour="violet"
     [suiActive]="activeItem === 'violet'"
     (click)="select('violet')">Violet</a>
  <a suiMenuItem
     suiColour="purple"
     [suiActive]="activeItem === 'purple'"
     (click)="select('purple')">Purple</a>
  <a suiMenuItem
     suiColour="pink"
     [suiActive]="activeItem === 'pink'"
     (click)="select('pink')">Pink</a>
  <a suiMenuItem
     suiColour="brown"
     [suiActive]="activeItem === 'brown'"
     (click)="select('brown')">Brown</a>
  <a suiMenuItem
     suiColour="grey"
     [suiActive]="activeItem === 'grey'"
     (click)="select('grey')">Grey</a>
  <a suiMenuItem
     suiColour="black"
     [suiActive]="activeItem === 'black'"
     (click)="select('black')">Black</a>
</div>
`;var qn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Un=`<div sui-menu
     suiColour="blue"
     suiWidth="three">
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
<div sui-menu
     suiColour="teal"
     suiInverted
     suiWidth="three">
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var jn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Yn=`<div sui-menu
     suiIcon="icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i></a>
</div>
<div sui-menu
     suiIcon="icon"
     suiVertical
     suiCompact>
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i></a>
</div>
`;var Jn=`<div sui-menu
     suiIcon="labeled icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i>Games</a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i>Channels</a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i>Videos</a>
</div>
`;var Xn=`<div sui-menu
     suiVertical
     suiFluid>
  <a suiMenuItem>Run</a>
  <a suiMenuItem>Walk</a>
  <a suiMenuItem>Bike</a>
</div>
`;var Kn=`<div sui-menu
     suiCompact
     suiIcon="labeled icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i>Games</a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i>Channels</a>
</div>
`;var $n=`<div sui-menu
     suiWidth="three">
  <a suiMenuItem>Buy</a>
  <a suiMenuItem>Sell</a>
  <a suiMenuItem>Rent</a>
</div>
`;var Qn=`<div sui-menu
     suiAttached="top">
  <div suiMenuItem>Top attached</div>
</div>
<div sui-segment
     suiAttached="attached">
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
<div sui-menu
     suiAttached="attached">
  <div suiMenuItem>Attached</div>
</div>
<div sui-segment
     suiAttached="attached">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
<div sui-menu
     suiAttached="bottom">
  <div suiMenuItem>Bottom attached</div>
</div>
`;var Zn=`<div sui-menu
     suiSize="mini"
     suiCompact>
  <a suiMenuItem suiActive>Mini</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="tiny"
     suiCompact>
  <a suiMenuItem suiActive>Tiny</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="small"
     suiCompact>
  <a suiMenuItem suiActive>Small</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="large"
     suiCompact>
  <a suiMenuItem suiActive>Large</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="huge"
     suiCompact>
  <a suiMenuItem suiActive>Huge</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="massive"
     suiCompact>
  <a suiMenuItem suiActive>Massive</a>
  <a suiMenuItem>Messages</a>
</div>
`;var ea=`<div sui-menu>
  <a suiMenuItem suiFitted="fitted">No padding whatsoever</a>
  <a suiMenuItem suiFitted="horizontally fitted">No horizontal padding</a>
  <a suiMenuItem suiFitted="vertically fitted">No vertical padding</a>
</div>
`;var ta=`<div sui-menu
     suiBorderless
     suiWidth="five">
  <a suiMenuItem>1</a>
  <a suiMenuItem>2</a>
  <a suiMenuItem>3</a>
  <a suiMenuItem>4</a>
  <a suiMenuItem>5</a>
</div>
`;var E=class{constructor(){this.activeItem="home"}select(u){this.activeItem=u}},na=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-menu-example"]],standalone:!1,features:[p],decls:9,vars:0,consts:[["sui-menu",""],["suiMenuItem","","suiHeader",""],["suiMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2,"Our Company"),e(),i(3,"a",2),t(4,"About Us"),e(),i(5,"a",2),t(6,"Jobs"),e(),i(7,"a",2),t(8,"Locations"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),aa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-menu-evenly-example"]],standalone:!1,features:[p],decls:7,vars:3,consts:[["sui-menu","","suiWidth","three"],["suiMenuItem","",3,"click","suiActive"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("home")}),t(2," Home "),e(),i(3,"a",1),x("click",function(){return r.select("messages")}),t(4," Messages "),e(),i(5,"a",1),x("click",function(){return r.select("friends")}),t(6," Friends "),e()()),l&2&&(m(),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[y,C],encapsulation:2})}}return n})(),la=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-secondary-example"]],standalone:!1,features:[p],decls:14,vars:3,consts:[["sui-menu","","suiSecondary",""],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-input","","suiIcon","icon"],["type","text","placeholder","Search..."],["sui-icon","","suiIconType","search link"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("home")}),t(2," Home "),e(),i(3,"a",1),x("click",function(){return r.select("messages")}),t(4," Messages "),e(),i(5,"a",1),x("click",function(){return r.select("friends")}),t(6," Friends "),e(),i(7,"div",2)(8,"div",3)(9,"div",4),d(10,"input",5)(11,"i",6),e()(),i(12,"a",3),t(13,"Logout"),e()()()),l&2&&(m(),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[w,y,C,X,Z],encapsulation:2})}}return n})(),ra=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-pointing-example"]],standalone:!1,features:[p],decls:14,vars:3,consts:[["sui-menu","","suiPointing",""],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-input","","suiIcon","icon","suiTransparent",""],["type","text","placeholder","Search..."],["sui-icon","","suiIconType","search link"],["sui-segment",""],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("home")}),t(2," Home "),e(),i(3,"a",1),x("click",function(){return r.select("messages")}),t(4," Messages "),e(),i(5,"a",1),x("click",function(){return r.select("friends")}),t(6," Friends "),e(),i(7,"div",2)(8,"div",3)(9,"div",4),d(10,"input",5)(11,"i",6),e()()()(),i(12,"div",7),d(13,"doc-wireframe",8),e()),l&2&&(m(),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[_,w,z,y,C,X,Z],encapsulation:2})}}return n})(),da=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-secondary-pointing-example"]],standalone:!1,features:[p],decls:12,vars:3,consts:[["sui-menu","","suiSecondary","","suiPointing",""],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-segment",""],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("home")}),t(2," Home "),e(),i(3,"a",1),x("click",function(){return r.select("messages")}),t(4," Messages "),e(),i(5,"a",1),x("click",function(){return r.select("friends")}),t(6," Friends "),e(),i(7,"div",2)(8,"a",3),t(9,"Logout"),e()()(),i(10,"div",4),d(11,"doc-wireframe",5),e()),l&2&&(m(),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[_,z,y,C,X],encapsulation:2})}}return n})(),ma=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-tabular-example"]],standalone:!1,features:[p],decls:5,vars:2,consts:[["sui-menu","","suiTabular",""],["suiMenuItem","",3,"click","suiActive"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("bio")}),t(2," Bio "),e(),i(3,"a",1),x("click",function(){return r.select("photos")}),t(4," Photos "),e()()),l&2&&(m(),o("suiActive",r.activeItem==="bio"),m(2),o("suiActive",r.activeItem==="photos"))},dependencies:[y,C],encapsulation:2})}}return n})(),oa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-tabular-attached-example"]],standalone:!1,features:[p],decls:12,vars:2,consts:[["sui-menu","","suiTabular","","suiAttached","top"],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-input","","suiIcon","icon","suiTransparent",""],["type","text","placeholder","Search users..."],["sui-icon","","suiIconType","search link"],["sui-segment","","suiAttached","bottom attached"],["type","paragraph"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("bio")}),t(2," Bio "),e(),i(3,"a",1),x("click",function(){return r.select("photos")}),t(4," Photos "),e(),i(5,"div",2)(6,"div",3)(7,"div",4),d(8,"input",5)(9,"i",6),e()()()(),i(10,"div",7),d(11,"doc-wireframe",8),e()),l&2&&(m(),o("suiActive",r.activeItem==="bio"),m(2),o("suiActive",r.activeItem==="photos"))},dependencies:[_,w,z,y,C,X,Z],encapsulation:2})}}return n})(),sa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-text-example"]],standalone:!1,features:[p],decls:9,vars:3,consts:[["sui-menu","","suiText",""],["suiMenuItem","","suiHeader",""],["suiMenuItem","",3,"click","suiActive"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2,"Sort By"),e(),i(3,"a",2),x("click",function(){return r.select("closest")}),t(4," Closest "),e(),i(5,"a",2),x("click",function(){return r.select("most-comments")}),t(6," Most Comments "),e(),i(7,"a",2),x("click",function(){return r.select("most-popular")}),t(8," Most Popular "),e()()),l&2&&(m(3),o("suiActive",r.activeItem==="closest"),m(2),o("suiActive",r.activeItem==="most-comments"),m(2),o("suiActive",r.activeItem==="most-popular"))},dependencies:[y,C],encapsulation:2})}}return n})(),ua=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-vertical-example"]],standalone:!1,features:[p],decls:17,vars:0,consts:[["sui-menu","","suiVertical",""],["suiMenuItem","","suiActive","","suiColour","teal"],["sui-label","","suiColour","teal","suiPointing","left"],["suiMenuItem",""],["sui-label",""],["sui-input","","suiIcon","icon","suiTransparent",""],["type","text","placeholder","Search mail..."],["sui-icon","","suiIconType","search"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2," Inbox "),i(3,"div",2),t(4,"1"),e()(),i(5,"a",3),t(6," Spam "),i(7,"div",4),t(8,"51"),e()(),i(9,"a",3),t(10," Updates "),i(11,"div",4),t(12,"1"),e()(),i(13,"div",3)(14,"div",5),d(15,"input",6)(16,"i",7),e()()())},dependencies:[w,P,y,C,Z],encapsulation:2})}}return n})(),ca=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-vertical-secondary-example"]],standalone:!1,features:[p],decls:14,vars:6,consts:[["sui-menu","","suiVertical","","suiSecondary",""],["suiMenuItem","",3,"click","suiActive"],["sui-menu","","suiVertical","","suiPointing",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("account")}),t(2," Account "),e(),i(3,"a",1),x("click",function(){return r.select("settings")}),t(4," Settings "),e(),i(5,"a",1),x("click",function(){return r.select("display-options")}),t(6," Display Options "),e()(),i(7,"div",2)(8,"a",1),x("click",function(){return r.select("home")}),t(9," Home "),e(),i(10,"a",1),x("click",function(){return r.select("messages")}),t(11," Messages "),e(),i(12,"a",1),x("click",function(){return r.select("friends")}),t(13," Friends "),e()()),l&2&&(m(),o("suiActive",r.activeItem==="account"),m(2),o("suiActive",r.activeItem==="settings"),m(2),o("suiActive",r.activeItem==="display-options"),m(3),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[y,C],encapsulation:2})}}return n})(),pa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-pagination-example"]],standalone:!1,features:[p],decls:11,vars:0,consts:[["sui-menu","","suiPagination",""],["suiMenuItem","","suiActive",""],["suiMenuItem","","disabled",""],["suiMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"1"),e(),i(3,"div",2),t(4,"..."),e(),i(5,"a",3),t(6,"10"),e(),i(7,"a",3),t(8,"11"),e(),i(9,"a",3),t(10,"12"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),va=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-header-example"]],standalone:!1,features:[p],decls:24,vars:0,consts:[["sui-menu",""],["suiMenuItem","","suiHeader",""],["suiMenuItem",""],["sui-menu","","suiVertical",""],["suiMenuHeader",""],["suiSubMenu",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2,"Our Company"),e(),i(3,"a",2),t(4,"About Us"),e(),i(5,"a",2),t(6,"Jobs"),e()(),i(7,"div",3)(8,"div",2)(9,"div",4),t(10,"Products"),e(),i(11,"div",5)(12,"a",2),t(13,"Enterprise"),e(),i(14,"a",2),t(15,"Consumer"),e()()(),i(16,"div",2)(17,"div",4),t(18,"Hosting"),e(),i(19,"div",5)(20,"a",2),t(21,"Shared"),e(),i(22,"a",2),t(23,"Dedicated"),e()()()())},dependencies:[y,C,X,Fe],encapsulation:2})}}return n})(),xa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-text-content-example"]],standalone:!1,features:[p],decls:11,vars:0,consts:[["sui-menu","","suiVertical",""],["suiMenuItem",""],["sui-header",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),t(3,"Promotions"),e(),i(4,"p"),t(5,"Check out our new promotions"),e()(),i(6,"div",1)(7,"h4",2),t(8,"Coupons"),e(),i(9,"p"),t(10,"Check out our collection of coupons"),e()()())},dependencies:[T,y,C],encapsulation:2})}}return n})(),fa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-input-example"]],standalone:!1,features:[p],decls:11,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],["sui-input","","suiIcon","icon"],["type","text","placeholder","Search..."],["sui-icon","","suiIconType","search"],["suiSubMenu","","suiRight",""],["sui-input","","suiAction","action"],["type","text","placeholder","Navigate to..."],["sui-button","","suiColour","blue"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"input",3)(4,"i",4),e()(),i(5,"div",5)(6,"div",1)(7,"div",6),d(8,"input",7),i(9,"div",8),t(10,"Go"),e()()()()())},dependencies:[w,I,y,C,X,Z],encapsulation:2})}}return n})(),Sa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-button-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),t(3,"Sign up"),e()(),i(4,"div",1)(5,"div",3),t(6,"Log-in"),e()()())},dependencies:[I,y,C],encapsulation:2})}}return n})(),ha=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-link-item-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-menu","","suiVertical",""],["suiMenuItem","","href","https://www.google.com","target","_blank"],["suiMenuItem","","suiLink",""],["suiMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Visit Google"),e(),i(3,"div",2),t(4,"Link via class"),e(),i(5,"div",3),t(6,"Not a link"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),ga=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-dropdown-item-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"sui-dropdown",1)(4,"span",2),t(5,"More"),e(),d(6,"i",3),i(7,"div",4)(8,"div",5),t(9,"Edit Profile"),e(),i(10,"div",5),t(11,"Choose Language"),e(),i(12,"div",5),t(13,"Account Settings"),e()()()())},dependencies:[w,y,C,He,Ne,Le],encapsulation:2})}}return n})(),Ea=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-sub-menu-example"]],standalone:!1,features:[p],decls:10,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],["suiSubMenu","","suiRight",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Browse"),e(),i(3,"a",1),t(4,"Submit"),e(),i(5,"div",2)(6,"a",1),t(7,"Sign Up"),e(),i(8,"a",1),t(9,"Help"),e()()())},dependencies:[y,C,X],encapsulation:2})}}return n})(),ya=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-hover-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-menu","","suiCompact",""],["suiMenuItem",""],["suiMenuItem","","suiLink",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"A link"),e(),i(3,"div",2),t(4,"div Link"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),Ca=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-active-example"]],standalone:!1,features:[p],decls:3,vars:0,consts:[["sui-menu","","suiCompact",""],["suiMenuItem","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Link"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),ba=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-disabled-example"]],standalone:!1,features:[p],decls:3,vars:0,consts:[["sui-menu","","suiCompact",""],["suiMenuItem","","disabled",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2,"Link"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),Fa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-stackable-example"]],standalone:!1,features:[p],decls:9,vars:0,consts:[["sui-menu","","suiStackable",""],["suiMenuItem",""],["src","assets/images/logo.png"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),d(2,"img",2),e(),i(3,"a",1),t(4,"Features"),e(),i(5,"a",1),t(6,"Testimonials"),e(),i(7,"a",1),t(8,"Sign-in"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),Ma=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-inverted-example"]],standalone:!1,features:[p],decls:14,vars:6,consts:[["sui-menu","","suiInverted",""],["suiMenuItem","",3,"click","suiActive"],["sui-menu","","suiInverted","","suiVertical",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("home")}),t(2," Home "),e(),i(3,"a",1),x("click",function(){return r.select("messages")}),t(4," Messages "),e(),i(5,"a",1),x("click",function(){return r.select("friends")}),t(6," Friends "),e()(),i(7,"div",2)(8,"a",1),x("click",function(){return r.select("home")}),t(9," Home "),e(),i(10,"a",1),x("click",function(){return r.select("messages")}),t(11," Messages "),e(),i(12,"a",1),x("click",function(){return r.select("friends")}),t(13," Friends "),e()()),l&2&&(m(),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"),m(3),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[y,C],encapsulation:2})}}return n})(),Da=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-colored-example"]],standalone:!1,features:[p],decls:27,vars:13,consts:[["sui-menu","","suiWidth","thirteen"],["suiMenuItem","","suiColour","red",3,"click","suiActive"],["suiMenuItem","","suiColour","orange",3,"click","suiActive"],["suiMenuItem","","suiColour","yellow",3,"click","suiActive"],["suiMenuItem","","suiColour","olive",3,"click","suiActive"],["suiMenuItem","","suiColour","green",3,"click","suiActive"],["suiMenuItem","","suiColour","teal",3,"click","suiActive"],["suiMenuItem","","suiColour","blue",3,"click","suiActive"],["suiMenuItem","","suiColour","violet",3,"click","suiActive"],["suiMenuItem","","suiColour","purple",3,"click","suiActive"],["suiMenuItem","","suiColour","pink",3,"click","suiActive"],["suiMenuItem","","suiColour","brown",3,"click","suiActive"],["suiMenuItem","","suiColour","grey",3,"click","suiActive"],["suiMenuItem","","suiColour","black",3,"click","suiActive"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("red")}),t(2,"Red"),e(),i(3,"a",2),x("click",function(){return r.select("orange")}),t(4,"Orange"),e(),i(5,"a",3),x("click",function(){return r.select("yellow")}),t(6,"Yellow"),e(),i(7,"a",4),x("click",function(){return r.select("olive")}),t(8,"Olive"),e(),i(9,"a",5),x("click",function(){return r.select("green")}),t(10,"Green"),e(),i(11,"a",6),x("click",function(){return r.select("teal")}),t(12,"Teal"),e(),i(13,"a",7),x("click",function(){return r.select("blue")}),t(14,"Blue"),e(),i(15,"a",8),x("click",function(){return r.select("violet")}),t(16,"Violet"),e(),i(17,"a",9),x("click",function(){return r.select("purple")}),t(18,"Purple"),e(),i(19,"a",10),x("click",function(){return r.select("pink")}),t(20,"Pink"),e(),i(21,"a",11),x("click",function(){return r.select("brown")}),t(22,"Brown"),e(),i(23,"a",12),x("click",function(){return r.select("grey")}),t(24,"Grey"),e(),i(25,"a",13),x("click",function(){return r.select("black")}),t(26,"Black"),e()()),l&2&&(m(),o("suiActive",r.activeItem==="red"),m(2),o("suiActive",r.activeItem==="orange"),m(2),o("suiActive",r.activeItem==="yellow"),m(2),o("suiActive",r.activeItem==="olive"),m(2),o("suiActive",r.activeItem==="green"),m(2),o("suiActive",r.activeItem==="teal"),m(2),o("suiActive",r.activeItem==="blue"),m(2),o("suiActive",r.activeItem==="violet"),m(2),o("suiActive",r.activeItem==="purple"),m(2),o("suiActive",r.activeItem==="pink"),m(2),o("suiActive",r.activeItem==="brown"),m(2),o("suiActive",r.activeItem==="grey"),m(2),o("suiActive",r.activeItem==="black"))},dependencies:[y,C],encapsulation:2})}}return n})(),wa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-colored-menu-example"]],standalone:!1,features:[p],decls:14,vars:6,consts:[["sui-menu","","suiColour","blue","suiWidth","three"],["suiMenuItem","",3,"click","suiActive"],["sui-menu","","suiColour","teal","suiInverted","","suiWidth","three"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return r.select("home")}),t(2," Home "),e(),i(3,"a",1),x("click",function(){return r.select("messages")}),t(4," Messages "),e(),i(5,"a",1),x("click",function(){return r.select("friends")}),t(6," Friends "),e()(),i(7,"div",2)(8,"a",1),x("click",function(){return r.select("home")}),t(9," Home "),e(),i(10,"a",1),x("click",function(){return r.select("messages")}),t(11," Messages "),e(),i(12,"a",1),x("click",function(){return r.select("friends")}),t(13," Friends "),e()()),l&2&&(m(),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"),m(3),o("suiActive",r.activeItem==="home"),m(2),o("suiActive",r.activeItem==="messages"),m(2),o("suiActive",r.activeItem==="friends"))},dependencies:[y,C],encapsulation:2})}}return n})(),_a=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-icons-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-menu","","suiIcon","icon"],["suiMenuItem",""],["sui-icon","","suiIconType","gamepad"],["sui-icon","","suiIconType","video camera"],["sui-icon","","suiIconType","video play"],["sui-menu","","suiIcon","icon","suiVertical","","suiCompact",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),d(2,"i",2),e(),i(3,"a",1),d(4,"i",3),e(),i(5,"a",1),d(6,"i",4),e()(),i(7,"div",5)(8,"a",1),d(9,"i",2),e(),i(10,"a",1),d(11,"i",3),e(),i(12,"a",1),d(13,"i",4),e()())},dependencies:[w,y,C],encapsulation:2})}}return n})(),Ia=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-labeled-icon-example"]],standalone:!1,features:[p],decls:10,vars:0,consts:[["sui-menu","","suiIcon","labeled icon"],["suiMenuItem",""],["sui-icon","","suiIconType","gamepad"],["sui-icon","","suiIconType","video camera"],["sui-icon","","suiIconType","video play"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),d(2,"i",2),t(3,"Games"),e(),i(4,"a",1),d(5,"i",3),t(6,"Channels"),e(),i(7,"a",1),d(8,"i",4),t(9,"Videos"),e()())},dependencies:[w,y,C],encapsulation:2})}}return n})(),Ta=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-fluid-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-menu","","suiVertical","","suiFluid",""],["suiMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Run"),e(),i(3,"a",1),t(4,"Walk"),e(),i(5,"a",1),t(6,"Bike"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),Ga=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-compact-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-menu","","suiCompact","","suiIcon","labeled icon"],["suiMenuItem",""],["sui-icon","","suiIconType","gamepad"],["sui-icon","","suiIconType","video camera"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),d(2,"i",2),t(3,"Games"),e(),i(4,"a",1),d(5,"i",3),t(6,"Channels"),e()())},dependencies:[w,y,C],encapsulation:2})}}return n})(),Aa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-evenly-divided-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-menu","","suiWidth","three"],["suiMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Buy"),e(),i(3,"a",1),t(4,"Sell"),e(),i(5,"a",1),t(6,"Rent"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),Ba=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-attached-example"]],standalone:!1,features:[p],decls:13,vars:0,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem",""],["sui-segment","","suiAttached","attached"],["type","paragraph"],["sui-menu","","suiAttached","attached"],["type","short-paragraph"],["sui-menu","","suiAttached","bottom"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2,"Top attached"),e()(),i(3,"div",2),d(4,"doc-wireframe",3),e(),i(5,"div",4)(6,"div",1),t(7,"Attached"),e()(),i(8,"div",2),d(9,"doc-wireframe",5),e(),i(10,"div",6)(11,"div",1),t(12,"Bottom attached"),e()())},dependencies:[_,z,y,C],encapsulation:2})}}return n})(),ka=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-size-example"]],standalone:!1,features:[p],decls:30,vars:0,consts:[["sui-menu","","suiSize","mini","suiCompact",""],["suiMenuItem","","suiActive",""],["suiMenuItem",""],["sui-menu","","suiSize","tiny","suiCompact",""],["sui-menu","","suiSize","small","suiCompact",""],["sui-menu","","suiSize","large","suiCompact",""],["sui-menu","","suiSize","huge","suiCompact",""],["sui-menu","","suiSize","massive","suiCompact",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Mini"),e(),i(3,"a",2),t(4,"Messages"),e()(),i(5,"div",3)(6,"a",1),t(7,"Tiny"),e(),i(8,"a",2),t(9,"Messages"),e()(),i(10,"div",4)(11,"a",1),t(12,"Small"),e(),i(13,"a",2),t(14,"Messages"),e()(),i(15,"div",5)(16,"a",1),t(17,"Large"),e(),i(18,"a",2),t(19,"Messages"),e()(),i(20,"div",6)(21,"a",1),t(22,"Huge"),e(),i(23,"a",2),t(24,"Messages"),e()(),i(25,"div",7)(26,"a",1),t(27,"Massive"),e(),i(28,"a",2),t(29,"Messages"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),Wa=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-fitted-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-menu",""],["suiMenuItem","","suiFitted","fitted"],["suiMenuItem","","suiFitted","horizontally fitted"],["suiMenuItem","","suiFitted","vertically fitted"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"No padding whatsoever"),e(),i(3,"a",2),t(4,"No horizontal padding"),e(),i(5,"a",3),t(6,"No vertical padding"),e()())},dependencies:[y,C],encapsulation:2})}}return n})(),za=(()=>{class n extends E{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu-borderless-example"]],standalone:!1,features:[p],decls:11,vars:0,consts:[["sui-menu","","suiBorderless","","suiWidth","five"],["suiMenuItem",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"1"),e(),i(3,"a",1),t(4,"2"),e(),i(5,"a",1),t(6,"3"),e(),i(7,"a",1),t(8,"4"),e(),i(9,"a",1),t(10,"5"),e()())},dependencies:[y,C],encapsulation:2})}}return n})();function co(n,u){n&1&&d(0,"doc-menu-menu-example")}function po(n,u){n&1&&d(0,"doc-menu-menu-evenly-example")}function vo(n,u){n&1&&d(0,"doc-menu-secondary-example")}function xo(n,u){n&1&&d(0,"doc-menu-pointing-example")}function fo(n,u){n&1&&d(0,"doc-menu-secondary-pointing-example")}function So(n,u){n&1&&d(0,"doc-menu-tabular-example")}function ho(n,u){n&1&&d(0,"doc-menu-tabular-attached-example")}function go(n,u){n&1&&d(0,"doc-menu-text-example")}function Eo(n,u){n&1&&d(0,"doc-menu-vertical-example")}function yo(n,u){n&1&&d(0,"doc-menu-vertical-secondary-example")}function Co(n,u){n&1&&d(0,"doc-menu-pagination-example")}function bo(n,u){n&1&&d(0,"doc-menu-header-example")}function Fo(n,u){n&1&&d(0,"doc-menu-text-content-example")}function Mo(n,u){n&1&&d(0,"doc-menu-input-example")}function Do(n,u){n&1&&d(0,"doc-menu-button-example")}function wo(n,u){n&1&&d(0,"doc-menu-link-item-example")}function _o(n,u){n&1&&d(0,"doc-menu-dropdown-item-example")}function Io(n,u){n&1&&d(0,"doc-menu-sub-menu-example")}function To(n,u){n&1&&d(0,"doc-menu-hover-example")}function Go(n,u){n&1&&d(0,"doc-menu-active-example")}function Ao(n,u){n&1&&d(0,"doc-menu-disabled-example")}function Bo(n,u){n&1&&d(0,"doc-menu-stackable-example")}function ko(n,u){n&1&&d(0,"doc-menu-inverted-example")}function Wo(n,u){n&1&&d(0,"doc-menu-colored-example")}function zo(n,u){n&1&&d(0,"doc-menu-colored-menu-example")}function Ro(n,u){n&1&&d(0,"doc-menu-icons-example")}function Po(n,u){n&1&&d(0,"doc-menu-labeled-icon-example")}function No(n,u){n&1&&d(0,"doc-menu-fluid-example")}function Lo(n,u){n&1&&d(0,"doc-menu-compact-example")}function Ho(n,u){n&1&&d(0,"doc-menu-evenly-divided-example")}function Vo(n,u){n&1&&d(0,"doc-menu-attached-example")}function Oo(n,u){n&1&&d(0,"doc-menu-size-example")}function qo(n,u){n&1&&d(0,"doc-menu-fitted-example")}function Uo(n,u){n&1&&d(0,"doc-menu-borderless-example")}function jo(n,u){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Menu"),e(),i(6,"p"),t(7,"A menu"),e(),c(8,co,1,0,"ng-template",5),e(),i(9,"doc-code-sample",6)(10,"p"),t(11,"A menu can have its items divided evenly"),e(),c(12,po,1,0,"ng-template",5),e(),i(13,"doc-code-sample",6)(14,"h3",4),t(15,"Secondary Menu"),e(),i(16,"p"),t(17,"A menu can adjust its appearance to de-emphasize its contents"),e(),c(18,vo,1,0,"ng-template",5),e(),i(19,"doc-code-sample",6)(20,"h3",4),t(21,"Pointing"),e(),i(22,"p"),t(23,"A menu can point to show its relationship to nearby content"),e(),c(24,xo,1,0,"ng-template",5),e(),i(25,"doc-code-sample",6)(26,"p"),t(27,"A secondary menu can also point"),e(),c(28,fo,1,0,"ng-template",5),e(),i(29,"doc-code-sample",6)(30,"h3",4),t(31,"Tabular"),e(),i(32,"p"),t(33,"A menu can be formatted to show tabs of information"),e(),c(34,So,1,0,"ng-template",5),e(),i(35,"doc-code-sample",6)(36,"p"),t(37,"A tabular menu can be attached to a segment"),e(),c(38,ho,1,0,"ng-template",5),e(),i(39,"doc-code-sample",6)(40,"h3",4),t(41,"Text"),e(),i(42,"p"),t(43,"A menu can be formatted for text content"),e(),c(44,go,1,0,"ng-template",5),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Vertical Menu"),e(),i(48,"p"),t(49,"A vertical menu displays elements vertically"),e(),c(50,Eo,1,0,"ng-template",5),e(),i(51,"doc-code-sample",6)(52,"p"),t(53,"Vertical menus can be secondary, pointing or text menus"),e(),c(54,yo,1,0,"ng-template",5),e(),i(55,"doc-code-sample",3)(56,"h3",4),t(57,"Pagination"),e(),i(58,"p"),t(59,"A pagination menu is specially formatted to present links to pages of content"),e(),c(60,Co,1,0,"ng-template",5),e(),d(61,"br"),i(62,"h2",2),t(63,"Content"),e(),i(64,"doc-code-sample",3)(65,"h3",4),t(66,"Header"),e(),i(67,"p"),t(68,"A menu item may include a header or may itself be a header"),e(),i(69,"div",7),t(70," Use "),i(71,"code"),t(72,"suiHeader"),e(),t(73," on an item, or "),i(74,"code"),t(75,"suiMenuHeader"),e(),t(76," inside an item, to add a header. "),e(),c(77,bo,1,0,"ng-template",5),e(),i(78,"doc-code-sample",3)(79,"h3",4),t(80,"Text"),e(),i(81,"p"),t(82,"A vertical menu item can include any type of text content"),e(),c(83,Fo,1,0,"ng-template",5),e(),i(84,"doc-code-sample",3)(85,"h3",4),t(86,"Input"),e(),i(87,"p"),t(88,"A menu item can contain an input inside of it"),e(),c(89,Mo,1,0,"ng-template",5),e(),i(90,"doc-code-sample",3)(91,"h3",4),t(92,"Button"),e(),i(93,"p"),t(94,"A menu item can contain a button inside of it"),e(),c(95,Do,1,0,"ng-template",5),e(),i(96,"doc-code-sample",3)(97,"h3",4),t(98,"Link Item"),e(),i(99,"p"),t(100,"A menu may contain a link item, or an item formatted as if it is a link"),e(),c(101,wo,1,0,"ng-template",5),e(),i(102,"doc-code-sample",3)(103,"h3",4),t(104,"Dropdown Item"),e(),i(105,"p"),t(106,"An item may contain a nested menu in a dropdown"),e(),c(107,_o,1,0,"ng-template",5),e(),i(108,"doc-code-sample",3)(109,"h3",4),t(110,"Menu"),e(),i(111,"p"),t(112,"A menu may contain another menu group in the same level as menu items"),e(),i(113,"div",7),t(114," Use "),i(115,"code"),t(116,"suiSubMenu"),e(),t(117," with "),i(118,"code"),t(119,"suiRight"),e(),t(120," to float a group of items to the right of the menu. "),e(),c(121,Io,1,0,"ng-template",5),e(),d(122,"br"),i(123,"h2",2),t(124,"States"),e(),i(125,"doc-code-sample",3)(126,"h3",4),t(127,"Hover"),e(),i(128,"p"),t(129,"A menu item can be hovered"),e(),i(130,"div",7),t(131," Menu items are only hoverable if they are links, "),i(132,"code"),t(133,"<a>"),e(),t(134," or "),i(135,"code"),t(136,"suiLink"),e(),t(137,". "),e(),c(138,To,1,0,"ng-template",5),e(),i(139,"doc-code-sample",3)(140,"h3",4),t(141,"Active"),e(),i(142,"p"),t(143,"A menu item can be active"),e(),c(144,Go,1,0,"ng-template",5),e(),i(145,"doc-code-sample",3)(146,"h3",4),t(147,"Disabled"),e(),i(148,"p"),t(149,"A menu item can be disabled"),e(),c(150,Ao,1,0,"ng-template",5),e(),d(151,"br"),i(152,"h2",2),t(153,"Variations"),e(),i(154,"doc-code-sample",3)(155,"h3",4),t(156,"Stackable"),e(),i(157,"p"),t(158,"A menu can stack at mobile resolutions"),e(),c(159,Bo,1,0,"ng-template",5),e(),i(160,"doc-code-sample",6)(161,"h3",4),t(162,"Inverted"),e(),i(163,"p"),t(164,"A menu may have its colors inverted to show greater contrast"),e(),c(165,ko,1,0,"ng-template",5),e(),i(166,"doc-code-sample",6)(167,"h3",4),t(168,"Colored"),e(),i(169,"p"),t(170,"Additional colors can be specified"),e(),c(171,Wo,1,0,"ng-template",5),e(),i(172,"doc-code-sample",6)(173,"p"),t(174,"A whole menu can also be coloured, or coloured and inverted"),e(),c(175,zo,1,0,"ng-template",5),e(),i(176,"doc-code-sample",3)(177,"h3",4),t(178,"Icons"),e(),i(179,"p"),t(180,"A menu may have just icons"),e(),c(181,Ro,1,0,"ng-template",5),e(),i(182,"doc-code-sample",3)(183,"h3",4),t(184,"Labeled Icon"),e(),i(185,"p"),t(186,"A menu may have labeled icons"),e(),c(187,Po,1,0,"ng-template",5),e(),i(188,"doc-code-sample",3)(189,"h3",4),t(190,"Fluid"),e(),i(191,"p"),t(192,"A vertical menu may take the size of its container"),e(),i(193,"div",7),t(194," A horizontal menu will be fluid by default. "),e(),c(195,No,1,0,"ng-template",5),e(),i(196,"doc-code-sample",3)(197,"h3",4),t(198,"Compact"),e(),i(199,"p"),t(200,"A menu can take up only the space necessary to fit its content"),e(),c(201,Lo,1,0,"ng-template",5),e(),i(202,"doc-code-sample",3)(203,"h3",4),t(204,"Evenly Divided"),e(),i(205,"p"),t(206,"A menu can have its items divided evenly"),e(),c(207,Ho,1,0,"ng-template",5),e(),i(208,"doc-code-sample",3)(209,"h3",4),t(210,"Attached"),e(),i(211,"p"),t(212,"A menu may be attached to other content segments"),e(),c(213,Vo,1,0,"ng-template",5),e(),i(214,"doc-code-sample",3)(215,"h3",4),t(216,"Size"),e(),i(217,"p"),t(218,"A menu can vary in size"),e(),c(219,Oo,1,0,"ng-template",5),e(),i(220,"doc-code-sample",3)(221,"h3",4),t(222,"Fitted"),e(),i(223,"p"),t(224,"A menu item or menu can remove element padding, vertically or horizontally"),e(),c(225,qo,1,0,"ng-template",5),e(),i(226,"doc-code-sample",3)(227,"h3",4),t(228,"Borderless"),e(),i(229,"p"),t(230,"A menu item or menu can have no borders"),e(),c(231,Uo,1,0,"ng-template",5),e()()),n&2){let a=H();m(3),o("templateCode",a.snippetMenu),m(6),o("templateCode",a.snippetMenuEvenly)("componentCode",a.snippetMenuEvenlyTs),m(4),o("templateCode",a.snippetSecondary)("componentCode",a.snippetSecondaryTs),m(6),o("templateCode",a.snippetPointing)("componentCode",a.snippetPointingTs),m(6),o("templateCode",a.snippetSecondaryPointing)("componentCode",a.snippetSecondaryPointingTs),m(4),o("templateCode",a.snippetTabular)("componentCode",a.snippetTabularTs),m(6),o("templateCode",a.snippetTabularAttached)("componentCode",a.snippetTabularAttachedTs),m(4),o("templateCode",a.snippetText)("componentCode",a.snippetTextTs),m(6),o("templateCode",a.snippetVertical),m(6),o("templateCode",a.snippetVerticalSecondary)("componentCode",a.snippetVerticalSecondaryTs),m(4),o("templateCode",a.snippetPagination),m(9),o("templateCode",a.snippetHeader),m(14),o("templateCode",a.snippetTextContent),m(6),o("templateCode",a.snippetInput),m(6),o("templateCode",a.snippetButton),m(6),o("templateCode",a.snippetLinkItem),m(6),o("templateCode",a.snippetDropdownItem),m(6),o("templateCode",a.snippetSubMenu),m(17),o("templateCode",a.snippetHover),m(14),o("templateCode",a.snippetActive),m(6),o("templateCode",a.snippetDisabled),m(9),o("templateCode",a.snippetStackable),m(6),o("templateCode",a.snippetInverted)("componentCode",a.snippetInvertedTs),m(6),o("templateCode",a.snippetColored)("componentCode",a.snippetColoredTs),m(6),o("templateCode",a.snippetColoredMenu)("componentCode",a.snippetColoredMenuTs),m(4),o("templateCode",a.snippetIcons),m(6),o("templateCode",a.snippetLabeledIcon),m(6),o("templateCode",a.snippetFluid),m(8),o("templateCode",a.snippetCompact),m(6),o("templateCode",a.snippetEvenlyDivided),m(6),o("templateCode",a.snippetAttached),m(6),o("templateCode",a.snippetSize),m(6),o("templateCode",a.snippetFitted),m(6),o("templateCode",a.snippetBorderless)}}function Yo(n,u){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-menu"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19," suiWidth "),e(),i(20,"td"),t(21," Divide the menu into a number of evenly sized items. Allowed values are "),i(22,"span",9),t(23,"'one'"),e(),t(24," through "),i(25,"span",9),t(26,"'sixteen'"),e(),t(27," | "),i(28,"span",9),t(29,"null"),e()(),i(30,"td")(31,"div",10),t(32," string "),e()(),i(33,"td")(34,"div",11),t(35," null "),e()()(),i(36,"tr")(37,"td"),t(38," suiColour "),e(),i(39,"td"),t(40," Set the colour of the menu. Allowed values are "),i(41,"span",9),t(42,"'red'"),e(),t(43," | "),i(44,"span",9),t(45,"'orange'"),e(),t(46," | "),i(47,"span",9),t(48,"'yellow'"),e(),t(49," | "),i(50,"span",9),t(51,"'olive'"),e(),t(52," | "),i(53,"span",9),t(54,"'green'"),e(),t(55," | "),i(56,"span",9),t(57,"'teal'"),e(),t(58," | "),i(59,"span",9),t(60,"'blue'"),e(),t(61," | "),i(62,"span",9),t(63,"'violet'"),e(),t(64," | "),i(65,"span",9),t(66,"'purple'"),e(),t(67," | "),i(68,"span",9),t(69,"'pink'"),e(),t(70," | "),i(71,"span",9),t(72,"'brown'"),e(),t(73," | "),i(74,"span",9),t(75,"'grey'"),e(),t(76," | "),i(77,"span",9),t(78,"'black'"),e(),t(79," | "),i(80,"span",9),t(81,"null"),e()(),i(82,"td")(83,"div",10),t(84," string "),e()(),i(85,"td")(86,"div",11),t(87," null "),e()()(),i(88,"tr")(89,"td"),t(90," suiSize "),e(),i(91,"td"),t(92," Set the size of the menu. Allowed values are "),i(93,"span",9),t(94,"'mini'"),e(),t(95," | "),i(96,"span",9),t(97,"'tiny'"),e(),t(98," | "),i(99,"span",9),t(100,"'small'"),e(),t(101," | "),i(102,"span",9),t(103,"'large'"),e(),t(104," | "),i(105,"span",9),t(106,"'huge'"),e(),t(107," | "),i(108,"span",9),t(109,"'massive'"),e(),t(110," | "),i(111,"span",9),t(112,"null"),e()(),i(113,"td")(114,"div",10),t(115," string "),e()(),i(116,"td")(117,"div",11),t(118," null "),e()()(),i(119,"tr")(120,"td"),t(121," suiAttached "),e(),i(122,"td"),t(123," Attach the menu to other content. Allowed values are "),i(124,"span",9),t(125,"'top'"),e(),t(126," | "),i(127,"span",9),t(128,"'bottom'"),e(),t(129," | "),i(130,"span",9),t(131,"'attached'"),e(),t(132," | "),i(133,"span",9),t(134,"null"),e()(),i(135,"td")(136,"div",10),t(137," string "),e()(),i(138,"td")(139,"div",11),t(140," null "),e()()(),i(141,"tr")(142,"td"),t(143," suiFixed "),e(),i(144,"td"),t(145," Fix the menu to a side of the viewport. Allowed values are "),i(146,"span",9),t(147,"'top'"),e(),t(148," | "),i(149,"span",9),t(150,"'bottom'"),e(),t(151," | "),i(152,"span",9),t(153,"'left'"),e(),t(154," | "),i(155,"span",9),t(156,"'right'"),e(),t(157," | "),i(158,"span",9),t(159,"null"),e()(),i(160,"td")(161,"div",10),t(162," string "),e()(),i(163,"td")(164,"div",11),t(165," null "),e()()(),i(166,"tr")(167,"td"),t(168," suiIcon "),e(),i(169,"td"),t(170," Format the menu for icon items. Allowed values are "),i(171,"span",9),t(172,"'icon'"),e(),t(173," | "),i(174,"span",9),t(175,"'labeled icon'"),e(),t(176," | "),i(177,"span",9),t(178,"null"),e()(),i(179,"td")(180,"div",10),t(181," string "),e()(),i(182,"td")(183,"div",11),t(184," null "),e()()(),i(185,"tr")(186,"td"),t(187," suiSecondary "),e(),i(188,"td"),t(189," De-emphasize the contents of the menu "),e(),i(190,"td")(191,"div",10),t(192," boolean "),e()(),i(193,"td")(194,"div",11),t(195," false "),e()()(),i(196,"tr")(197,"td"),t(198," suiPointing "),e(),i(199,"td"),t(200," Point to show the relationship to nearby content "),e(),i(201,"td")(202,"div",10),t(203," boolean "),e()(),i(204,"td")(205,"div",11),t(206," false "),e()()(),i(207,"tr")(208,"td"),t(209," suiTabular "),e(),i(210,"td"),t(211," Format the menu as tabs "),e(),i(212,"td")(213,"div",10),t(214," boolean "),e()(),i(215,"td")(216,"div",11),t(217," false "),e()()(),i(218,"tr")(219,"td"),t(220," suiText "),e(),i(221,"td"),t(222," Format the menu for text content "),e(),i(223,"td")(224,"div",10),t(225," boolean "),e()(),i(226,"td")(227,"div",11),t(228," false "),e()()(),i(229,"tr")(230,"td"),t(231," suiVertical "),e(),i(232,"td"),t(233," Display the items vertically "),e(),i(234,"td")(235,"div",10),t(236," boolean "),e()(),i(237,"td")(238,"div",11),t(239," false "),e()()(),i(240,"tr")(241,"td"),t(242," suiPagination "),e(),i(243,"td"),t(244," Format the menu for pagination links "),e(),i(245,"td")(246,"div",10),t(247," boolean "),e()(),i(248,"td")(249,"div",11),t(250," false "),e()()(),i(251,"tr")(252,"td"),t(253," suiInverted "),e(),i(254,"td"),t(255," Invert the colours of the menu "),e(),i(256,"td")(257,"div",10),t(258," boolean "),e()(),i(259,"td")(260,"div",11),t(261," false "),e()()(),i(262,"tr")(263,"td"),t(264," suiFluid "),e(),i(265,"td"),t(266," Make a vertical menu take the width of its container "),e(),i(267,"td")(268,"div",10),t(269," boolean "),e()(),i(270,"td")(271,"div",11),t(272," false "),e()()(),i(273,"tr")(274,"td"),t(275," suiCompact "),e(),i(276,"td"),t(277," Only take up the space needed to fit the items "),e(),i(278,"td")(279,"div",10),t(280," boolean "),e()(),i(281,"td")(282,"div",11),t(283," false "),e()()(),i(284,"tr")(285,"td"),t(286," suiStackable "),e(),i(287,"td"),t(288," Stack the items at mobile resolutions "),e(),i(289,"td")(290,"div",10),t(291," boolean "),e()(),i(292,"td")(293,"div",11),t(294," false "),e()()(),i(295,"tr")(296,"td"),t(297," suiBorderless "),e(),i(298,"td"),t(299," Remove the item borders "),e(),i(300,"td")(301,"div",10),t(302," boolean "),e()(),i(303,"td")(304,"div",11),t(305," false "),e()()(),i(306,"tr")(307,"td"),t(308," suiRight "),e(),i(309,"td"),t(310," Position the menu on the right "),e(),i(311,"td")(312,"div",10),t(313," boolean "),e()(),i(314,"td")(315,"div",11),t(316," false "),e()()()()(),i(317,"h2",2),t(318,"suiMenuItem"),e(),i(319,"h4",4),t(320,"Properties"),e(),i(321,"table",8)(322,"thead")(323,"tr")(324,"th"),t(325,"Property"),e(),i(326,"th"),t(327,"Description"),e(),i(328,"th"),t(329,"Type"),e(),i(330,"th"),t(331,"Default"),e()()(),i(332,"tbody")(333,"tr")(334,"td"),t(335," suiColour "),e(),i(336,"td"),t(337," Set the colour of the item. Allowed values are "),i(338,"span",9),t(339,"'red'"),e(),t(340," | "),i(341,"span",9),t(342,"'orange'"),e(),t(343," | "),i(344,"span",9),t(345,"'yellow'"),e(),t(346," | "),i(347,"span",9),t(348,"'olive'"),e(),t(349," | "),i(350,"span",9),t(351,"'green'"),e(),t(352," | "),i(353,"span",9),t(354,"'teal'"),e(),t(355," | "),i(356,"span",9),t(357,"'blue'"),e(),t(358," | "),i(359,"span",9),t(360,"'violet'"),e(),t(361," | "),i(362,"span",9),t(363,"'purple'"),e(),t(364," | "),i(365,"span",9),t(366,"'pink'"),e(),t(367," | "),i(368,"span",9),t(369,"'brown'"),e(),t(370," | "),i(371,"span",9),t(372,"'grey'"),e(),t(373," | "),i(374,"span",9),t(375,"'black'"),e(),t(376," | "),i(377,"span",9),t(378,"null"),e()(),i(379,"td")(380,"div",10),t(381," string "),e()(),i(382,"td")(383,"div",11),t(384," null "),e()()(),i(385,"tr")(386,"td"),t(387," suiFitted "),e(),i(388,"td"),t(389," Remove the padding from the item. Allowed values are "),i(390,"span",9),t(391,"'fitted'"),e(),t(392," | "),i(393,"span",9),t(394,"'horizontally fitted'"),e(),t(395," | "),i(396,"span",9),t(397,"'vertically fitted'"),e(),t(398," | "),i(399,"span",9),t(400,"null"),e()(),i(401,"td")(402,"div",10),t(403," string "),e()(),i(404,"td")(405,"div",11),t(406," null "),e()()(),i(407,"tr")(408,"td"),t(409," suiActive "),e(),i(410,"td"),t(411," Mark the item as active "),e(),i(412,"td")(413,"div",10),t(414," boolean "),e()(),i(415,"td")(416,"div",11),t(417," false "),e()()(),i(418,"tr")(419,"td"),t(420," suiHeader "),e(),i(421,"td"),t(422," Format the item as a header "),e(),i(423,"td")(424,"div",10),t(425," boolean "),e()(),i(426,"td")(427,"div",11),t(428," false "),e()()(),i(429,"tr")(430,"td"),t(431," suiLink "),e(),i(432,"td"),t(433," Format the item as a link "),e(),i(434,"td")(435,"div",10),t(436," boolean "),e()(),i(437,"td")(438,"div",11),t(439," false "),e()()(),i(440,"tr")(441,"td"),t(442," suiBrowser "),e(),i(443,"td"),t(444," Format the item as a browser item "),e(),i(445,"td")(446,"div",10),t(447," boolean "),e()(),i(448,"td")(449,"div",11),t(450," false "),e()()(),i(451,"tr")(452,"td"),t(453," disabled "),e(),i(454,"td"),t(455," Disable the item "),e(),i(456,"td")(457,"div",10),t(458," boolean "),e()(),i(459,"td")(460,"div",11),t(461," false "),e()()()()(),i(462,"h2",2),t(463,"suiSubMenu"),e(),i(464,"h4",4),t(465,"Properties"),e(),i(466,"table",8)(467,"thead")(468,"tr")(469,"th"),t(470,"Property"),e(),i(471,"th"),t(472,"Description"),e(),i(473,"th"),t(474,"Type"),e(),i(475,"th"),t(476,"Default"),e()()(),i(477,"tbody")(478,"tr")(479,"td"),t(480," suiRight "),e(),i(481,"td"),t(482," Float the group of items to the right of the parent menu "),e(),i(483,"td")(484,"div",10),t(485," boolean "),e()(),i(486,"td")(487,"div",11),t(488," false "),e()()()()()())}var Ra=(()=>{class n{constructor(a){this.snippetMenu=un,this.snippetMenuEvenly=cn,this.snippetMenuEvenlyTs=pn,this.snippetSecondary=vn,this.snippetSecondaryTs=xn,this.snippetPointing=fn,this.snippetPointingTs=Sn,this.snippetSecondaryPointing=hn,this.snippetSecondaryPointingTs=gn,this.snippetTabular=En,this.snippetTabularTs=yn,this.snippetTabularAttached=Cn,this.snippetTabularAttachedTs=bn,this.snippetText=Fn,this.snippetTextTs=Mn,this.snippetVertical=Dn,this.snippetVerticalSecondary=wn,this.snippetVerticalSecondaryTs=_n,this.snippetPagination=In,this.snippetHeader=Tn,this.snippetTextContent=Gn,this.snippetInput=An,this.snippetButton=Bn,this.snippetLinkItem=kn,this.snippetDropdownItem=Wn,this.snippetSubMenu=zn,this.snippetHover=Rn,this.snippetActive=Pn,this.snippetDisabled=Nn,this.snippetStackable=Ln,this.snippetInverted=Hn,this.snippetInvertedTs=Vn,this.snippetColored=On,this.snippetColoredTs=qn,this.snippetColoredMenu=Un,this.snippetColoredMenuTs=jn,this.snippetIcons=Yn,this.snippetLabeledIcon=Jn,this.snippetFluid=Xn,this.snippetCompact=Kn,this.snippetEvenlyDivided=$n,this.snippetAttached=Qn,this.snippetSize=Zn,this.snippetFitted=ea,this.snippetBorderless=ta,a.setTitle("Menu | Ngx Semantic")}static{this.\u0275fac=function(l){return new(l||n)(L(V))}}static{this.\u0275cmp=s({type:n,selectors:[["doc-menu"]],standalone:!1,decls:3,vars:2,consts:[["header","Menu","subHeader","A menu displays grouped navigation actions","semanticUrl","https://semantic-ui.com/collections/menu.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(l,r){l&1&&(i(0,"doc-page",0),c(1,jo,232,45,"div",1)(2,Yo,489,0,"div",1),e()),l&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,q,O,U,T,b,Y,P,na,aa,la,ra,da,ma,oa,sa,ua,ca,pa,va,xa,fa,Sa,ha,ga,Ea,ya,Ca,ba,Fa,Ma,Da,wa,_a,Ia,Ta,Ga,Aa,Ba,ka,Wa,za],encapsulation:2})}}return n})();var Pa=(()=>{class n{constructor(){}ngOnInit(){}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-table"]],standalone:!1,decls:1,vars:0,template:function(l,r){l&1&&t(0,"table works")},encapsulation:2})}}return n})();var Na=`<div sui-message suiSize="small">
  <div suiMessageHeader>
    Changes in Service
  </div>
  <p>We updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</div>
`;var La=`<div sui-message>
  <div suiMessageHeader>
    New Site Features
  </div>
  <ul suiMessageList>
    <li>You can now have cover images on blog pages</li>
    <li>Drafts will now auto-save while writing</li>
  </ul>
</div>
`;var Ha=`<div sui-message suiIcon>
  <i suiIconType="inbox" sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Have you heard about our mailing list?
    </div>
    <p>Get the best news in your e-mail every day.</p>
  </div>
</div>
`;var Va=`<div sui-message suiIcon>
  <i suiIconType="notched circle" suiLoading sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Just one second
    </div>
    <p>We're fetching that content for you.</p>
  </div>
</div>
`;var Oa=`<div sui-message suiDismissible>
  <div suiMessageHeader>
    Welcome back!
  </div>
  <p>This is a special notification which you can dismiss if you're bored with it.</p>
</div>
`;var qa=`<div sui-message suiHidden>
  <p>You can't see me</p>
</div>
`;var Ua=`<div sui-message suiVisible>
  <p>You can always see me</p>
</div>
`;var ja=`<div sui-message suiFloating>
  <p>Way to go!</p>
</div>
`;var Ya=`<div sui-message suiCompact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</div>
`;var Ja=`<div sui-message suiAttached='attached'>
  <div sui-header>
    Welcome to our site!
  </div>
  <p>Fill out the form below to sign-up for a new account</p>
</div>
<form sui-form class="attached fluid segment">
  <div suiFormFields class="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div suiFormField>
    <label>Username</label>
    <input placeholder="Username" type="text">
  </div>
  <div suiFormField>
    <label>Password</label>
    <input type="password">
  </div>
  <div suiFormField suiInline>
    <div class="ui checkbox">
      <input type="checkbox" id="terms">
      <label for="terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <div sui-button suiColour='blue'>Submit</div>
</form>
<div sui-message suiAttached='bottom attached' suiColour='warning'>
  <i suiIconType="help" sui-icon></i>
  Already signed up? <a href="#">Login here</a> instead.
</div>
`;var Xa=`<div sui-message suiColour='warning' suiDismissible>
  <div suiMessageHeader>
    You must register before you can do that!
  </div>
  <p>Visit our registration page, then try again</p>
</div>
`;var Ka=`<div sui-message suiColour='info' suiDismissible>
  <div suiMessageHeader>
    Was this what you wanted?
  </div>
  <p>It's good to see you again</p>
</div>
`;var $a=`<div sui-message suiColour='positive' suiDismissible>
  <div suiMessageHeader>
    You are eligible for a reward
  </div>
  <p>Go to your special offers page to see now</p>
</div>
`;var Qa=`<div sui-message suiColour='negative' suiDismissible>
  <div suiMessageHeader>
    We're sorry we can't apply that discount
  </div>
  <p>That offer has expired</p>
</div>
`;var Za=`<div sui-message suiColour='red'>Red</div>
<div sui-message suiColour='orange'>Orange</div>
<div sui-message suiColour='yellow'>Yellow</div>
<div sui-message suiColour='olive'>Olive</div>
<div sui-message suiColour='green'>Green</div>
<div sui-message suiColour='teal'>Teal</div>
<div sui-message suiColour='blue'>Blue</div>
<div sui-message suiColour='violet'>Violet</div>
<div sui-message suiColour='purple'>Purple</div>
<div sui-message suiColour='pink'>Pink</div>
<div sui-message suiColour='brown'>Brown</div>
<div sui-message suiColour='black'>Black</div>
`;var el=`<div sui-message suiSize='mini'>This is a mini message</div>
<div sui-message suiSize='tiny'>This is a tiny message</div>
<div sui-message suiSize='small'>This is a small message</div>
<div sui-message suiSize='large'>This is a large message</div>
<div sui-message suiSize='big'>This is a big message</div>
<div sui-message suiSize='huge'>This is a huge message</div>
<div sui-message suiSize='massive'>This is a massive message</div>
`;var G=class{constructor(){this.isDefinitionsActive=!0}},tl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-std-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-message","","suiSize","small"],["suiMessageHeader",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," Changes in Service "),e(),i(3,"p"),t(4,"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."),e()())},dependencies:[b,N],encapsulation:2})}}return n})(),il=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-list-example"]],standalone:!1,features:[p],decls:8,vars:0,consts:[["sui-message",""],["suiMessageHeader",""],["suiMessageList",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," New Site Features "),e(),i(3,"ul",2)(4,"li"),t(5,"You can now have cover images on blog pages"),e(),i(6,"li"),t(7,"Drafts will now auto-save while writing"),e()()())},dependencies:[b,N,se],encapsulation:2})}}return n})(),nl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-icon-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-message","","suiIcon",""],["suiIconType","inbox","sui-icon",""],["suiMessageContent",""],["sui-header",""]],template:function(l,r){l&1&&(i(0,"div",0),d(1,"i",1),i(2,"div",2)(3,"div",3),t(4," Have you heard about our mailing list? "),e(),i(5,"p"),t(6,"Get the best news in your e-mail every day."),e()()())},dependencies:[w,T,b,ge],encapsulation:2})}}return n})(),al=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-icon2-example"]],standalone:!1,features:[p],decls:7,vars:0,consts:[["sui-message","","suiIcon",""],["suiIconType","notched circle","suiLoading","","sui-icon",""],["suiMessageContent",""],["sui-header",""]],template:function(l,r){l&1&&(i(0,"div",0),d(1,"i",1),i(2,"div",2)(3,"div",3),t(4," Just one second "),e(),i(5,"p"),t(6,"We're fetching that content for you."),e()()())},dependencies:[w,T,b,ge],encapsulation:2})}}return n})(),ll=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-dissmisable-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-message","","suiDismissible",""],["suiMessageHeader",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," Welcome back! "),e(),i(3,"p"),t(4,"This is a special notification which you can dismiss if you're bored with it."),e()())},dependencies:[b,N],encapsulation:2})}}return n})(),rl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-hidden-example"]],standalone:!1,features:[p],decls:3,vars:0,consts:[["sui-message","","suiHidden",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"p"),t(2,"You can't see me"),e()())},dependencies:[b],encapsulation:2})}}return n})(),dl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-visible-example"]],standalone:!1,features:[p],decls:3,vars:0,consts:[["sui-message","","suiVisible",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"p"),t(2,"You can always see me"),e()())},dependencies:[b],encapsulation:2})}}return n})(),ml=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-floating-example"]],standalone:!1,features:[p],decls:3,vars:0,consts:[["sui-message","","suiFloating",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"p"),t(2,"Way to go!"),e()())},dependencies:[b],encapsulation:2})}}return n})(),ol=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-compact-example"]],standalone:!1,features:[p],decls:3,vars:0,consts:[["sui-message","","suiCompact",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"p"),t(2,"Get all the best inventions in your e-mail every day. Sign up now!"),e()())},dependencies:[b],encapsulation:2})}}return n})(),sl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-attached-example"]],standalone:!1,features:[p],decls:36,vars:0,consts:[["sui-message","","suiAttached","attached"],["sui-header",""],["sui-form","",1,"attached","fluid","segment"],["suiFormFields","",1,"two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["placeholder","Username","type","text"],["type","password"],["suiFormField","","suiInline",""],[1,"ui","checkbox"],["type","checkbox","id","terms"],["for","terms"],["sui-button","","suiColour","blue"],["sui-message","","suiAttached","bottom attached","suiColour","warning"],["suiIconType","help","sui-icon",""],["href","#"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," Welcome to our site! "),e(),i(3,"p"),t(4,"Fill out the form below to sign-up for a new account"),e()(),i(5,"form",2)(6,"div",3)(7,"div",4)(8,"label"),t(9,"First Name"),e(),d(10,"input",5),e(),i(11,"div",4)(12,"label"),t(13,"Last Name"),e(),d(14,"input",6),e()(),i(15,"div",4)(16,"label"),t(17,"Username"),e(),d(18,"input",7),e(),i(19,"div",4)(20,"label"),t(21,"Password"),e(),d(22,"input",8),e(),i(23,"div",9)(24,"div",10),d(25,"input",11),i(26,"label",12),t(27,"I agree to the terms and conditions"),e()()(),i(28,"div",13),t(29,"Submit"),e()(),i(30,"div",14),d(31,"i",15),t(32," Already signed up? "),i(33,"a",16),t(34,"Login here"),e(),t(35,` instead.
`),e())},dependencies:[ne,te,ie,h,S,F,w,T,b,I],encapsulation:2})}}return n})(),ul=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-warning-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-message","","suiColour","warning","suiDismissible",""],["suiMessageHeader",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," You must register before you can do that! "),e(),i(3,"p"),t(4,"Visit our registration page, then try again"),e()())},dependencies:[b,N],encapsulation:2})}}return n})(),cl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-info-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-message","","suiColour","info","suiDismissible",""],["suiMessageHeader",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," Was this what you wanted? "),e(),i(3,"p"),t(4,"It's good to see you again"),e()())},dependencies:[b,N],encapsulation:2})}}return n})(),pl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-success-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-message","","suiColour","positive","suiDismissible",""],["suiMessageHeader",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," You are eligible for a reward "),e(),i(3,"p"),t(4,"Go to your special offers page to see now"),e()())},dependencies:[b,N],encapsulation:2})}}return n})(),vl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-error-example"]],standalone:!1,features:[p],decls:5,vars:0,consts:[["sui-message","","suiColour","negative","suiDismissible",""],["suiMessageHeader",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1),t(2," We're sorry we can't apply that discount "),e(),i(3,"p"),t(4,"That offer has expired"),e()())},dependencies:[b,N],encapsulation:2})}}return n})(),xl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-coloured-example"]],standalone:!1,features:[p],decls:24,vars:0,consts:[["sui-message","","suiColour","red"],["sui-message","","suiColour","orange"],["sui-message","","suiColour","yellow"],["sui-message","","suiColour","olive"],["sui-message","","suiColour","green"],["sui-message","","suiColour","teal"],["sui-message","","suiColour","blue"],["sui-message","","suiColour","violet"],["sui-message","","suiColour","purple"],["sui-message","","suiColour","pink"],["sui-message","","suiColour","brown"],["sui-message","","suiColour","black"]],template:function(l,r){l&1&&(i(0,"div",0),t(1,"Red"),e(),i(2,"div",1),t(3,"Orange"),e(),i(4,"div",2),t(5,"Yellow"),e(),i(6,"div",3),t(7,"Olive"),e(),i(8,"div",4),t(9,"Green"),e(),i(10,"div",5),t(11,"Teal"),e(),i(12,"div",6),t(13,"Blue"),e(),i(14,"div",7),t(15,"Violet"),e(),i(16,"div",8),t(17,"Purple"),e(),i(18,"div",9),t(19,"Pink"),e(),i(20,"div",10),t(21,"Brown"),e(),i(22,"div",11),t(23,"Black"),e())},dependencies:[b],encapsulation:2})}}return n})(),fl=(()=>{class n extends G{static{this.\u0275fac=(()=>{let a;return function(r){return(a||(a=v(n)))(r||n)}})()}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages-msg-sizes-example"]],standalone:!1,features:[p],decls:14,vars:0,consts:[["sui-message","","suiSize","mini"],["sui-message","","suiSize","tiny"],["sui-message","","suiSize","small"],["sui-message","","suiSize","large"],["sui-message","","suiSize","big"],["sui-message","","suiSize","huge"],["sui-message","","suiSize","massive"]],template:function(l,r){l&1&&(i(0,"div",0),t(1,"This is a mini message"),e(),i(2,"div",1),t(3,"This is a tiny message"),e(),i(4,"div",2),t(5,"This is a small message"),e(),i(6,"div",3),t(7,"This is a large message"),e(),i(8,"div",4),t(9,"This is a big message"),e(),i(10,"div",5),t(11,"This is a huge message"),e(),i(12,"div",6),t(13,"This is a massive message"),e())},dependencies:[b],encapsulation:2})}}return n})();function us(n,u){n&1&&d(0,"doc-messages-msg-std-example")}function cs(n,u){n&1&&d(0,"doc-messages-msg-list-example")}function ps(n,u){n&1&&d(0,"doc-messages-msg-icon-example")}function vs(n,u){n&1&&d(0,"doc-messages-msg-icon2-example")}function xs(n,u){n&1&&d(0,"doc-messages-msg-dissmisable-example")}function fs(n,u){n&1&&d(0,"doc-messages-msg-hidden-example")}function Ss(n,u){n&1&&d(0,"doc-messages-msg-visible-example")}function hs(n,u){n&1&&d(0,"doc-messages-msg-floating-example")}function gs(n,u){n&1&&d(0,"doc-messages-msg-compact-example")}function Es(n,u){n&1&&d(0,"doc-messages-msg-attached-example")}function ys(n,u){n&1&&d(0,"doc-messages-msg-warning-example")}function Cs(n,u){n&1&&d(0,"doc-messages-msg-info-example")}function bs(n,u){n&1&&d(0,"doc-messages-msg-success-example")}function Fs(n,u){n&1&&d(0,"doc-messages-msg-error-example")}function Ms(n,u){n&1&&d(0,"doc-messages-msg-coloured-example")}function Ds(n,u){n&1&&d(0,"doc-messages-msg-sizes-example")}function ws(n,u){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Message"),e(),i(6,"p"),t(7,"A basic message"),e(),c(8,us,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"List Message"),e(),i(12,"p"),t(13,"A message with a list"),e(),c(14,cs,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Icon Message"),e(),i(18,"p"),t(19,"A message can contain an icon"),e(),c(20,ps,1,0,"ng-template",5),e(),i(21,"doc-code-sample",3),c(22,vs,1,0,"ng-template",5),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Dissmissable Block"),e(),i(26,"p"),t(27,"A message that the user can choose to hide"),e(),c(28,xs,1,0,"ng-template",5),e(),i(29,"h2",2),t(30,"States"),e(),i(31,"doc-code-sample",3)(32,"h3",4),t(33,"Hidden"),e(),i(34,"p"),t(35,"A message can be hidden"),e(),c(36,fs,1,0,"ng-template",5),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Visible"),e(),i(40,"p"),t(41,"A message can be set to visible to force itself to be shown"),e(),c(42,Ss,1,0,"ng-template",5),e(),i(43,"h2",2),t(44,"Variations"),e(),d(45,"br"),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Floating"),e(),i(49,"p"),t(50,"A message can float above content that it is related to"),e(),c(51,hs,1,0,"ng-template",5),e(),i(52,"doc-code-sample",3)(53,"h3",4),t(54,"Compact"),e(),i(55,"p"),t(56,"A message can only take up the width of its content"),e(),c(57,gs,1,0,"ng-template",5),e(),i(58,"doc-code-sample",3)(59,"h3",4),t(60,"Attached"),e(),i(61,"p"),t(62,"A message can be formatted to attach itself to other content"),e(),c(63,Es,1,0,"ng-template",5),e(),i(64,"doc-code-sample",3)(65,"h3",4),t(66,"Warning"),e(),i(67,"p"),t(68,"A message may be formatted to display warning messages."),e(),c(69,ys,1,0,"ng-template",5),e(),i(70,"doc-code-sample",3)(71,"h3",4),t(72,"Info"),e(),i(73,"p"),t(74,"A message may be formatted to display information"),e(),c(75,Cs,1,0,"ng-template",5),e(),i(76,"doc-code-sample",3)(77,"h3",4),t(78,"Positive/Success"),e(),i(79,"p"),t(80,"A message may be formatted to display a positive message"),e(),c(81,bs,1,0,"ng-template",5),e(),i(82,"doc-code-sample",3)(83,"h3",4),t(84,"Negative/Error"),e(),i(85,"p"),t(86,"A message may be formatted to display a negative message"),e(),c(87,Fs,1,0,"ng-template",5),e(),i(88,"doc-code-sample",3)(89,"h3",4),t(90,"Coloured"),e(),i(91,"p"),t(92,"A message can be formatted to be different colours"),e(),c(93,Ms,1,0,"ng-template",5),e(),i(94,"doc-code-sample",3)(95,"h3",4),t(96,"Size"),e(),i(97,"p"),t(98,"A message can have different sizes"),e(),c(99,Ds,1,0,"ng-template",5),e()()),n&2){let a=H();m(3),o("templateCode",a.snippetBasic),m(6),o("templateCode",a.snippetList),m(6),o("templateCode",a.snippetIcon1),m(6),o("templateCode",a.snippetIcon2),m(2),o("templateCode",a.snippetDismissable),m(8),o("templateCode",a.snippetHidden),m(6),o("templateCode",a.snippetVisible),m(9),o("templateCode",a.snippetFloating),m(6),o("templateCode",a.snippetCompact),m(6),o("templateCode",a.snippetAttached),m(6),o("templateCode",a.snippettWarning),m(6),o("templateCode",a.snippetInfo),m(6),o("templateCode",a.snippetSuccess),m(6),o("templateCode",a.snippetError),m(6),o("templateCode",a.snippetColoured),m(6),o("templateCode",a.snippetSizes)}}function _s(n,u){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-message"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiAttached"),e(),i(20,"td"),t(21," Attach a message to other content. Allowed values could be "),i(22,"span",7),t(23,"attached"),e(),t(24," | "),i(25,"span",7),t(26,"bottom attached"),e(),t(27," | "),i(28,"span",7),t(29,"null"),e()(),i(30,"td")(31,"div",8),t(32," string "),e()(),i(33,"td")(34,"div",9),t(35," null "),e()()(),i(36,"tr")(37,"td"),t(38,"suiColour"),e(),i(39,"td"),t(40,"Set the message colour. Allowed values could be "),i(41,"span",7),t(42,"'red'"),e(),t(43," | "),i(44,"span",7),t(45,"'orange'"),e(),t(46," | "),i(47,"span",7),t(48,"'yellow'"),e(),t(49," | "),i(50,"span",7),t(51,"'olive'"),e(),t(52," | "),i(53,"span",7),t(54,"'green'"),e(),t(55," | "),i(56,"span",7),t(57,"'teal'"),e(),t(58," | "),i(59,"span",7),t(60,"'blue'"),e(),t(61," | "),i(62,"span",7),t(63,"'violet'"),e(),t(64," | "),i(65,"span",7),t(66,"'purple'"),e(),t(67," | "),i(68,"span",7),t(69,"'pink'"),e(),t(70," | "),i(71,"span",7),t(72,"'brown'"),e(),t(73," | "),i(74,"span",7),t(75,"'grey'"),e(),t(76," | "),i(77,"span",7),t(78,"'black'"),e(),t(79," | "),i(80,"span",7),t(81,"null"),e()(),i(82,"td")(83,"div",8),t(84," string "),e()(),i(85,"td")(86,"div",9),t(87," null "),e()()(),i(88,"tr")(89,"td"),t(90,"suiState"),e(),i(91,"td"),t(92,"Set a message to either visible or hidden states."),e(),i(93,"td")(94,"div",8),t(95," string "),e()(),i(96,"td")(97,"div",9),t(98," null "),e()()(),i(99,"tr")(100,"td"),t(101,"suiSize"),e(),i(102,"td"),t(103,"Set the breadcrumb size. Allowed values could be "),i(104,"span",7),t(105,"mini"),e(),t(106," | "),i(107,"span",7),t(108,"tiny"),e(),t(109," | "),i(110,"span",7),t(111,"small"),e(),t(112," | "),i(113,"span",7),t(114,"medium"),e(),t(115," | "),i(116,"span",7),t(117,"big"),e(),t(118," | "),i(119,"span",7),t(120,"huge"),e(),t(121," | "),i(122,"span",7),t(123,"massive"),e(),t(124," | "),i(125,"span",7),t(126,"null"),e()(),i(127,"td")(128,"div",8),t(129," string "),e()(),i(130,"td")(131,"div",9),t(132," null "),e()()(),i(133,"tr")(134,"td"),t(135,"suiDismissable"),e(),i(136,"td"),t(137," Determine whether or not a message can be dismissed "),e(),i(138,"td")(139,"div",8),t(140," boolean "),e()(),i(141,"td")(142,"div",9),t(143," false "),e()()(),i(144,"tr")(145,"td"),t(146,"suiIcon"),e(),i(147,"td"),t(148," Determine whether or not a message can contain an icon "),e(),i(149,"td")(150,"div",8),t(151," boolean "),e()(),i(152,"td")(153,"div",9),t(154," false "),e()()(),i(155,"tr")(156,"td"),t(157,"suiHidden"),e(),i(158,"td"),t(159," Prevent a message from displaying. "),e(),i(160,"td")(161,"div",8),t(162," boolean "),e()(),i(163,"td")(164,"div",9),t(165," false "),e()()(),i(166,"tr")(167,"td"),t(168,"suiVisible"),e(),i(169,"td"),t(170," Present the message to the display "),e(),i(171,"td")(172,"div",8),t(173," boolean "),e()(),i(174,"td")(175,"div",9),t(176," false "),e()()(),i(177,"tr")(178,"td"),t(179,"suiFloating"),e(),i(180,"td"),t(181," Determine whether or not a message will float over the content it is related to "),e(),i(182,"td")(183,"div",8),t(184," boolean "),e()(),i(185,"td")(186,"div",9),t(187," false "),e()()(),i(188,"tr")(189,"td"),t(190,"suiCompact"),e(),i(191,"td"),t(192," Setup the message to take up just as much space as its content "),e(),i(193,"td")(194,"div",8),t(195," boolean "),e()(),i(196,"td")(197,"div",9),t(198," false "),e()()()()(),d(199,"br"),i(200,"h2",2),t(201,"suiMessageHeader"),e(),i(202,"h4",4),t(203,"Properties"),e(),i(204,"table",6)(205,"thead")(206,"tr")(207,"th"),t(208,"Property"),e(),i(209,"th"),t(210,"Description"),e(),i(211,"th"),t(212,"Type"),e(),i(213,"th"),t(214,"Default"),e()()(),d(215,"tbody"),i(216,"tfoot",10)(217,"tr")(218,"th",11)(219,"div",12),t(220,"No properties for this directive"),e()()()()(),d(221,"br"),i(222,"h2",2),t(223,"suiMessageContent"),e(),i(224,"h4",4),t(225,"Properties"),e(),i(226,"table",6)(227,"thead")(228,"tr")(229,"th"),t(230,"Property"),e(),i(231,"th"),t(232,"Description"),e(),i(233,"th"),t(234,"Type"),e(),i(235,"th"),t(236,"Default"),e()()(),d(237,"tbody"),i(238,"tfoot",10)(239,"tr")(240,"th",11)(241,"div",12),t(242,"No properties for this directive"),e()()()()(),d(243,"br"),i(244,"h2",2),t(245,"suiMessageList"),e(),i(246,"h4",4),t(247,"Properties"),e(),i(248,"table",6)(249,"thead")(250,"tr")(251,"th"),t(252,"Property"),e(),i(253,"th"),t(254,"Description"),e(),i(255,"th"),t(256,"Type"),e(),i(257,"th"),t(258,"Default"),e()()(),d(259,"tbody"),i(260,"tfoot",10)(261,"tr")(262,"th",11)(263,"div",12),t(264,"No properties for this directive"),e()()()()()())}var Sl=(()=>{class n{constructor(a){this.snippetBasic=Na,this.snippetList=La,this.snippetIcon1=Ha,this.snippetIcon2=Va,this.snippetDismissable=Oa,this.snippetHidden=qa,this.snippetVisible=Ua,this.snippetFloating=ja,this.snippetCompact=Ya,this.snippetAttached=Ja,this.snippettWarning=Xa,this.snippetInfo=Ka,this.snippetSuccess=$a,this.snippetError=Qa,this.snippetColoured=Za,this.snippetSizes=el,this.isDefinitionsActive=!0,a.setTitle("Message | Ngx Semantic")}static{this.\u0275fac=function(l){return new(l||n)(L(V))}}static{this.\u0275cmp=s({type:n,selectors:[["doc-messages"]],standalone:!1,decls:3,vars:2,consts:[["header","Message","subHeader","A message displays information that explains nearby content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(l,r){l&1&&(i(0,"doc-page",0),c(1,ws,100,16,"div",1)(2,_s,265,0,"div",1),e()),l&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,q,O,U,T,Y,P,tl,il,nl,al,ll,rl,dl,ml,ol,sl,ul,cl,pl,vl,xl,fl],styles:['div[_ngcontent-%COMP%]   [class*="right floated"][_ngcontent-%COMP%]{float:right;margin-right:.25em}']})}}return n})();var hl=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Store</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var gl=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Store</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var El=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Registration</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var yl=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Cl=`<div sui-breadcrumb>
  <span suiBreadcrumbSection>Home</span>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search</div>
</div>
`;var bl=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search for: <a href="#">paper towels</a></div>
</div>
`;var Fl=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Products</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Paper Towels</div>
</div>
`;var Ml=`<div sui-breadcrumb suiSize='mini'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Dl=`<div sui-breadcrumb suiSize='tiny'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var wl=`<div sui-breadcrumb suiSize='small'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var _l=`<div sui-breadcrumb suiSize='large'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Il=`<div sui-breadcrumb suiSize='big'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Tl=`<div sui-breadcrumb suiSize='huge'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Gl=`<div sui-breadcrumb suiSize='massive'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var B=(()=>{class n extends oe{constructor(){let a=le(re);super(a),this.suiIcon=""}get classes(){return[this.getIcon(),"divider"].join(" ")}getIcon(){return this.suiIcon?`${this.suiIcon} icon`:this.suiIcon}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275dir=de({type:n,selectors:[["","suiBreadcrumbDivider",""]],inputs:{suiIcon:"suiIcon"},exportAs:["suiBreadcrumbDivider"],features:[p]})}}return n})(),k=(()=>{class n extends oe{constructor(){let a=le(re);super(a),this.suiActive=!1}get classes(){return[this.getActive(),"section"].join(" ")}getActive(){return this.suiActive?"active":""}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275dir=de({type:n,selectors:[["","suiBreadcrumbSection",""]],inputs:{suiActive:"suiActive"},exportAs:["suiBreadcrumbSection"],features:[p]})}}return Ee([be()],n.prototype,"suiActive",void 0),n})(),W=(()=>{class n extends oe{constructor(){let a=le(re);super(a),this.suiSize=null}get classes(){return["ui",this.suiSize,"breadcrumb"].join(" ")}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275dir=de({type:n,selectors:[["","sui-breadcrumb",""]],inputs:{suiSize:"suiSize"},exportAs:["suiBreadcrumb"],features:[p]})}}return n})(),Al=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275mod=Q({type:n})}static{this.\u0275inj=$({imports:[me]})}}return n})();var Bl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-std-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"a",1),t(6,"Store"),e(),i(7,"div",2),t(8," /"),e(),i(9,"div",3),t(10,"T-Shirt"),e()())},dependencies:[B,k,W],encapsulation:2})}}return n})(),kl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-std1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiIcon","right angle","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Store"),e(),d(6,"i",2),i(7,"div",3),t(8,"T-Shirt"),e()())},dependencies:[B,k,W],encapsulation:2})}}return n})(),Wl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-content-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"a",1),t(6,"Registration"),e(),i(7,"div",2),t(8," /"),e(),i(9,"div",3),t(10,"Personal Information"),e()())},dependencies:[B,k,W],encapsulation:2})}}return n})(),zl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-content1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),Rl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-section-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"span",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"div",3),t(6,"Search"),e()())},dependencies:[B,k,W],encapsulation:2})}}return n})(),Pl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-link-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""],["href","#"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"div",3),t(6,"Search for: "),i(7,"a",4),t(8,"paper towels"),e()()())},dependencies:[B,k,W],encapsulation:2})}}return n})(),Nl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-active-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Products"),e(),i(3,"div",2),t(4," /"),e(),i(5,"div",3),t(6,"Paper Towels"),e()())},dependencies:[B,k,W],encapsulation:2})}}return n})(),Ll=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","mini"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),Hl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","tiny"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),Vl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size2-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","small"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),Ol=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size3-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","large"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),ql=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size4-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","big"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),Ul=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size5-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","huge"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})(),jl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb-breadcrumb-size6-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","massive"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(l,r){l&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),d(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),d(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[w,B,k,W],encapsulation:2})}}return n})();function Us(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-std-example")}function js(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-std1-example")}function Ys(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-content-example")}function Js(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-content1-example")}function Xs(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-section-example")}function Ks(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-link-example")}function $s(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-active-example")}function Qs(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size-example")}function Zs(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size1-example")}function e0(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size2-example")}function t0(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size3-example")}function i0(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size4-example")}function n0(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size5-example")}function a0(n,u){n&1&&d(0,"doc-breadcrumb-breadcrumb-size6-example")}function l0(n,u){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Breadcrumb"),e(),i(6,"p"),t(7,"A standard breadcrumb"),e(),c(8,Us,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),c(10,js,1,0,"ng-template",5),e(),d(11,"br"),i(12,"h2",2),t(13,"Content"),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Divider"),e(),i(17,"p"),t(18,"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text"),e(),c(19,Ys,1,0,"ng-template",5),e(),i(20,"doc-code-sample",3),c(21,Js,1,0,"ng-template",5),e(),i(22,"doc-code-sample",3)(23,"h3",4),t(24,"Section"),e(),i(25,"p"),t(26,"A breadcrumb can contain sections that can either be formatted as a link or text"),e(),c(27,Xs,1,0,"ng-template",5),e(),i(28,"doc-code-sample",3)(29,"h3",4),t(30,"Link"),e(),i(31,"p"),t(32,"A section may be linkable or contain a link"),e(),c(33,Ks,1,0,"ng-template",5),e(),d(34,"br"),i(35,"h2",2),t(36,"States"),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Active"),e(),i(40,"p"),t(41,"A section can be active"),e(),c(42,$s,1,0,"ng-template",5),e(),d(43,"br"),i(44,"h2",2),t(45,"Variations"),e(),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Size"),e(),i(49,"p"),t(50,"A breadcrumb can vary in size"),e(),c(51,Qs,1,0,"ng-template",5),e(),i(52,"doc-code-sample",3),c(53,Zs,1,0,"ng-template",5),e(),i(54,"doc-code-sample",3),c(55,e0,1,0,"ng-template",5),e(),i(56,"doc-code-sample",3),c(57,t0,1,0,"ng-template",5),e(),i(58,"doc-code-sample",3),c(59,i0,1,0,"ng-template",5),e(),i(60,"doc-code-sample",3),c(61,n0,1,0,"ng-template",5),e(),i(62,"doc-code-sample",3),c(63,a0,1,0,"ng-template",5),e()()),n&2){let a=H();m(3),o("templateCode",a.snippetStd),m(6),o("templateCode",a.snippetStd1),m(5),o("templateCode",a.snippetContent1),m(6),o("templateCode",a.snippetContent2),m(2),o("templateCode",a.snippetSection),m(6),o("templateCode",a.snippetLink),m(9),o("templateCode",a.snippetActive),m(9),o("templateCode",a.snippetSize),m(6),o("templateCode",a.snippetSize1),m(2),o("templateCode",a.snippetSize2),m(2),o("templateCode",a.snippetSize3),m(2),o("templateCode",a.snippetSize4),m(2),o("templateCode",a.snippetSize5),m(2),o("templateCode",a.snippetSize6)}}function r0(n,u){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-breadcrumb"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiSize"),e(),i(20,"td"),t(21,"Set the breadcrumb size. Allowed values could be "),i(22,"span",7),t(23,"mini"),e(),t(24," | "),i(25,"span",7),t(26,"tiny"),e(),t(27," | "),i(28,"span",7),t(29,"small"),e(),t(30," | "),i(31,"span",7),t(32,"medium"),e(),t(33," | "),i(34,"span",7),t(35,"big"),e(),t(36," | "),i(37,"span",7),t(38,"huge"),e(),t(39," | "),i(40,"span",7),t(41,"massive"),e(),t(42," | "),i(43,"span",7),t(44,"null"),e()(),i(45,"td")(46,"div",8),t(47," string "),e()(),i(48,"td")(49,"div",9),t(50," null "),e()()()()(),d(51,"br"),i(52,"h2",2),t(53,"suiBreadcrumbDivider"),e(),i(54,"h4",4),t(55,"Properties"),e(),i(56,"table",6)(57,"thead")(58,"tr")(59,"th"),t(60,"Property"),e(),i(61,"th"),t(62,"Description"),e(),i(63,"th"),t(64,"Type"),e(),i(65,"th"),t(66,"Default"),e()()(),i(67,"tbody")(68,"tr")(69,"td"),t(70,"suiIcon"),e(),i(71,"td"),t(72," Determine the icon to be used as the divider "),e(),i(73,"td")(74,"div",8),t(75," string "),e()(),i(76,"td")(77,"div",9),t(78," '' "),e()()()()(),d(79,"br"),i(80,"h2",2),t(81,"suiBreadcrumbSection"),e(),i(82,"h4",4),t(83,"Properties"),e(),i(84,"table",6)(85,"thead")(86,"tr")(87,"th"),t(88,"Property"),e(),i(89,"th"),t(90,"Description"),e(),i(91,"th"),t(92,"Type"),e(),i(93,"th"),t(94,"Default"),e()()(),i(95,"tbody")(96,"tr")(97,"td"),t(98,"suiActive"),e(),i(99,"td"),t(100," Determine whether or not the breadcrumb section is active "),e(),i(101,"td")(102,"div",8),t(103," boolean "),e()(),i(104,"td")(105,"div",9),t(106," false "),e()()()()()())}var Yl=(()=>{class n{constructor(a){this.snippetStd=hl,this.snippetStd1=gl,this.snippetContent1=El,this.snippetContent2=yl,this.snippetSection=Cl,this.snippetLink=bl,this.snippetActive=Fl,this.snippetSize=Ml,this.snippetSize1=Dl,this.snippetSize2=wl,this.snippetSize3=_l,this.snippetSize4=Il,this.snippetSize5=Tl,this.snippetSize6=Gl,a.setTitle("Breadcrumb | Ngx Semantic")}static{this.\u0275fac=function(l){return new(l||n)(L(V))}}static{this.\u0275cmp=s({type:n,selectors:[["doc-breadcrumb"]],standalone:!1,decls:3,vars:2,consts:[["header","Breadcrumb","subHeader","A breadcrumb is used to show hierarchy between content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(l,r){l&1&&(i(0,"doc-page",0),c(1,l0,64,14,"div",1)(2,r0,107,0,"div",1),e()),l&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,q,O,U,T,Y,P,Bl,kl,Wl,zl,Rl,Pl,Nl,Ll,Hl,Vl,Ol,ql,Ul,jl],encapsulation:2})}}return n})();var d0=[{path:"messages",component:Sl},{path:"breadcrumb",component:Yl},{path:"grid",component:sn},{path:"form",component:fi},{path:"menu",component:Ra},{path:"table",component:Pa}],Jl=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275mod=Q({type:n})}static{this.\u0275inj=$({imports:[he.forChild(d0),he]})}}return n})();var Dx=(()=>{class n{static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275mod=Q({type:n})}static{this.\u0275inj=$({imports:[me,ke,Ge,qe,De,Ie,ze,Jl,Al,We,we,Ue,Re,Te,Oe,_e,Me,Pe,Ve]})}}return n})();export{Dx as CollectionsModule};
