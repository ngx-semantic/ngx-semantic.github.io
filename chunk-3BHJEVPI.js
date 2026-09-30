import{a as w,b as Se}from"./chunk-SWCWYY3E.js";import{d as O,e as q,g as V,i as me,j as de,k as pe,l as R,m as xe,n as f,o as h,p as x,q as fe}from"./chunk-2EBGCAL3.js";import{a as G,c as ce,d as F,e as ee,f as _,g as K,h as ue,i as b,k as ve}from"./chunk-6JKHLIY7.js";import{A as W,B as L,C as P,D as H,F as se,a as X,h as D,i as ae,l as k,n as re,w as Z,x as le}from"./chunk-3Z3RPJQU.js";import{b as ie,d as Q,h as ne,j as M,l as oe}from"./chunk-C4XHNY6F.js";import{Aa as d,Ba as z,Ca as Y,Ea as u,Fa as p,J as I,N as U,Sa as m,Ta as i,Ua as e,Ub as J,Va as o,Zb as A,aa as v,ca as j,cb as N,g as te,na as s,nb as t,ua as T}from"./chunk-5X32GX6J.js";import"./chunk-HHHS5ZAZ.js";var he=`<form sui-form>
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
`;var Fe=`<form sui-form>
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
`;var ge=`<div sui-form>
  <div suiFormField>
    <label>User Input</label>
    <input type="text">
  </div>
</div>
`;var be=`<div sui-form>
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
`;var Ee=`<div sui-form>
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
`;var ye=`<div sui-form>
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
`;var Ce=`<div sui-form>
  <div suiFormField>
    <label>Text</label>
    <textarea></textarea>
  </div>
  <div suiFormField>
    <label>Short Text</label>
    <textarea rows="2"></textarea>
  </div>
</div>
`;var De=`<div sui-form>
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
`;var Me=`<div sui-form>
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
`;var _e=`<div sui-form>
  <div suiFormField>
    <label>Gender</label>
    <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
  </div>
</div>
`;var Be=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiSearch suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var we=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiMultiple suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var Ie=`<div sui-form>
  <div suiFormField>
    <select>
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
  </div>
</div>
`;var Te=`<div sui-form>
  <div sui-message>
    <div class="header">We had some issues</div>
    <ul class="list">
      <li>Please enter your first name</li>
      <li>Please enter your last name</li>
    </ul>
  </div>
</div>
`;var ze=`<div sui-form suiLoading>
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-button>Submit</div>
</div>
`;var Ne=`<div sui-form suiState="success">
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
`;var Ae=`<div sui-form suiState="error">
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
`;var ke=`<div sui-form suiState="warning">
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
`;var We=`<div sui-form>
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
`;var Le=`<div sui-form>
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
`;var Pe=`<div sui-form>
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
`;var He=`<div sui-form suiSize="mini">
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
`;var Ge=`<div sui-form suiSize="tiny">
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
`;var Re=`<div sui-form suiSize="small">
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
`;var Oe=`<div sui-form suiSize="large">
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
`;var qe=`<div sui-form suiSize="big">
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
`;var Ve=`<div sui-form suiSize="huge">
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
`;var Ue=`<div sui-form suiSize="massive">
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
`;var je=`<div sui-form suiEqualWidth>
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
`;var Ye=`<div sui-segment suiInverted>
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
`;var Je=`<div sui-form>
  <div suiFormField suiInline>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
</div>
`;var Xe=`<div sui-form>
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
`;var Ke=`<div sui-form>
  <div suiFormField suiRequired>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
  <div suiFormField suiInline suiRequired>
    <sui-checkbox>I agree to terms and conditions</sui-checkbox>
  </div>
</div>
`;var $e=`<div sui-form>
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
`;var Qe=`<div sui-form>
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
`;var Ze=`<div sui-form>
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
`;var et=`<div sui-form>
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
`;var tt=`<div sui-form>
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
`;var S=class{constructor(){this.states=[{text:"Alabama",value:"al"}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Nigeria",value:"ng",flag:"ng"}],this.months=[{text:"January",value:"jan"}],this.cards=[{text:"Visa",value:"visa"}],this.contacts=[{text:"Justen Kitsune",image:{avatar:!0,src:"https://semantic-ui.com/images/avatar/small/stevie.jpg"}}],this.gender=[{text:"Male"},{text:"Female"}]}},nt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-basic-example"]],standalone:!1,features:[u],decls:14,vars:0,consts:[["sui-form",""],["suiFormField",""],["type","text","name","first-name","placeholder","First Name"],["type","text","name","last-name","placeholder","Last Name"],["sui-button","","type","submit"]],template:function(r,l){r&1&&(i(0,"form",0)(1,"div",1)(2,"label"),t(3,"First Name"),e(),o(4,"input",2),e(),i(5,"div",1)(6,"label"),t(7,"Last Name"),e(),o(8,"input",3),e(),i(9,"div",1)(10,"sui-checkbox"),t(11,"I agree to the terms and conditions"),e()(),i(12,"button",4),t(13,"Submit"),e()())},dependencies:[V,O,q,f,x,w,b],encapsulation:2})}}return n})(),at=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-basic-alt-example"]],standalone:!1,features:[u],decls:63,vars:5,consts:[["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],["suiFormFields","","suiWidth","two"],["type","text","name","shipping[first-name]","placeholder","First Name"],["type","text","name","shipping[last-name]","placeholder","Last Name"],["suiFormFields",""],["suiFormField","","suiWidth","twelve"],["type","text","name","shipping[address]","placeholder","Street Address"],["suiFormField","","suiWidth","four"],["type","text","name","shipping[address-2]","placeholder","Apt #"],["suiPlaceholder","State",3,"suiOptions"],["suiPlaceholder","Country",3,"suiOptions"],["suiPlaceholder","Type",3,"suiOptions"],["suiFormField","","suiWidth","seven"],["type","text","name","card[number]","maxlength","16","placeholder","Card #"],["suiFormField","","suiWidth","three"],["type","text","name","card[cvc]","maxlength","3","placeholder","CVC"],["suiFormField","","suiWidth","six"],["suiPlaceholder","Month",3,"suiOptions"],["type","text","name","card[expire-year]","maxlength","4","placeholder","Year"],["suiPlaceholder","Saved Contacts",3,"suiOptions"],["sui-segment",""],["suiType","toggle"],["sui-button","","tabindex","0"]],template:function(r,l){r&1&&(i(0,"form",0)(1,"h4",1),t(2,"Shipping Information"),e(),i(3,"div",2)(4,"label"),t(5,"Name"),e(),i(6,"div",3)(7,"div",2),o(8,"input",4),e(),i(9,"div",2),o(10,"input",5),e()()(),i(11,"div",2)(12,"label"),t(13,"Billing Address"),e(),i(14,"div",6)(15,"div",7),o(16,"input",8),e(),i(17,"div",9),o(18,"input",10),e()()(),i(19,"div",3)(20,"div",2)(21,"label"),t(22,"State"),e(),o(23,"sui-select",11),e(),i(24,"div",2)(25,"label"),t(26,"Country"),e(),o(27,"sui-select",12),e()(),i(28,"h4",1),t(29,"Billing Information"),e(),i(30,"div",2)(31,"label"),t(32,"Card Type"),e(),o(33,"sui-select",13),e(),i(34,"div",6)(35,"div",14)(36,"label"),t(37,"Card Number"),e(),o(38,"input",15),e(),i(39,"div",16)(40,"label"),t(41,"CVC"),e(),o(42,"input",17),e(),i(43,"div",18)(44,"label"),t(45,"Expiration"),e(),i(46,"div",3)(47,"div",2),o(48,"sui-select",19),e(),i(49,"div",2),o(50,"input",20),e()()()(),i(51,"h4",1),t(52,"Receipt"),e(),i(53,"div",2)(54,"label"),t(55,"Send Receipt To:"),e(),o(56,"sui-select",21),e(),i(57,"div",22)(58,"div",2)(59,"sui-checkbox",23),t(60,"Do not include a receipt in the package"),e()()(),i(61,"div",24),t(62,"Submit Order"),e()()),r&2&&(s(23),m("suiOptions",l.states),s(4),m("suiOptions",l.countries),s(6),m("suiOptions",l.cards),s(15),m("suiOptions",l.months),s(8),m("suiOptions",l.contacts))},dependencies:[V,O,q,f,x,h,M,w,b,Z,R],encapsulation:2})}}return n})(),rt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-user-input-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-form",""],["suiFormField",""],["type","text"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"User Input"),e(),o(4,"input",2),e()())},dependencies:[f,x],encapsulation:2})}}return n})(),ot=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-fields-example"]],standalone:!1,features:[u],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Middle name"),e(),o(9,"input",4),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),o(13,"input",5),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),lt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-fields-width-example"]],standalone:!1,features:[u],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","three"],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Middle name"),e(),o(9,"input",4),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),o(13,"input",5),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),st=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-fields-inline-example"]],standalone:!1,features:[u],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField","","suiWidth","eight"],["type","text","placeholder","First Name"],["suiFormField","","suiWidth","three"],["type","text","placeholder","Middle Name"],["suiFormField","","suiWidth","five"],["type","text","placeholder","Last Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"Name"),e(),o(5,"input",3),e(),i(6,"div",4),o(7,"input",5),e(),i(8,"div",6),o(9,"input",7),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),mt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-text-area-example"]],standalone:!1,features:[u],decls:9,vars:0,consts:[["sui-form",""],["suiFormField",""],["rows","2"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Text"),e(),o(4,"textarea"),e(),i(5,"div",1)(6,"label"),t(7,"Short Text"),e(),o(8,"textarea",2),e()())},dependencies:[f,x],encapsulation:2})}}return n})(),dt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-checkbox-example"]],standalone:!1,features:[u],decls:11,vars:0,consts:[["sui-form",""],["suiFormField","","suiInline",""],["suiType","slider"],["suiType","toggle"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"sui-checkbox"),t(3,"Checkbox"),e()(),i(4,"div",1)(5,"sui-checkbox",2),t(6,"Slider"),e(),o(7,"label"),e(),i(8,"div",1)(9,"sui-checkbox",3),t(10,"Toggle"),e()()())},dependencies:[f,x,w],encapsulation:2})}}return n})(),pt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-radio-example"]],standalone:!1,features:[u],decls:31,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["suiType","radio"],["suiFormFields","","suiGrouped",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Select your favorite fruit:"),e(),i(4,"div",2)(5,"sui-checkbox",3),t(6,"Apples"),e()(),i(7,"div",2)(8,"sui-checkbox",3),t(9,"Oranges"),e()(),i(10,"div",2)(11,"sui-checkbox",3),t(12,"Pears"),e()(),i(13,"div",2)(14,"sui-checkbox",3),t(15,"Grapefruit"),e()()(),i(16,"div",4)(17,"label"),t(18,"Select your second favorite fruit:"),e(),i(19,"div",2)(20,"sui-checkbox",3),t(21,"Apples"),e()(),i(22,"div",2)(23,"sui-checkbox",3),t(24,"Oranges"),e()(),i(25,"div",2)(26,"sui-checkbox",3),t(27,"Pears"),e()(),i(28,"div",2)(29,"sui-checkbox",3),t(30,"Grapefruit"),e()()()())},dependencies:[f,x,h,w],encapsulation:2})}}return n})(),ct=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-dropdown-example"]],standalone:!1,features:[u],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiPlaceholder","Gender",3,"suiOptions"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Gender"),e(),o(4,"sui-select",2),e()()),r&2&&(s(4),m("suiOptions",l.gender))},dependencies:[f,x,R],encapsulation:2})}}return n})(),ut=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-dropdown-alt-example"]],standalone:!1,features:[u],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiSearch","","suiPlaceholder","Country",3,"suiOptions"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Country"),e(),o(4,"sui-select",2),e()()),r&2&&(s(4),m("suiOptions",l.countries))},dependencies:[f,x,R],encapsulation:2})}}return n})(),vt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-multiple-select-example"]],standalone:!1,features:[u],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiMultiple","","suiPlaceholder","Country",3,"suiOptions"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Country"),e(),o(4,"sui-select",2),e()()),r&2&&(s(4),m("suiOptions",l.countries))},dependencies:[f,x,R],encapsulation:2})}}return n})(),xt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-html-select-example"]],standalone:!1,features:[u],decls:9,vars:0,consts:[["sui-form",""],["suiFormField",""],["value",""],["value","1"],["value","0"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"select")(3,"option",2),t(4,"Gender"),e(),i(5,"option",3),t(6,"Male"),e(),i(7,"option",4),t(8,"Female"),e()()()())},dependencies:[me,de,f,x],encapsulation:2})}}return n})(),ft=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-message-example"]],standalone:!1,features:[u],decls:9,vars:0,consts:[["sui-form",""],["sui-message",""],[1,"header"],[1,"list"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),t(3,"We had some issues"),e(),i(4,"ul",3)(5,"li"),t(6,"Please enter your first name"),e(),i(7,"li"),t(8,"Please enter your last name"),e()()()())},dependencies:[x,F],encapsulation:2})}}return n})(),St=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-loading-example"]],standalone:!1,features:[u],decls:7,vars:0,consts:[["sui-form","","suiLoading",""],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),o(4,"input",2),e(),i(5,"div",3),t(6,"Submit"),e()())},dependencies:[f,x,b],encapsulation:2})}}return n})(),ht=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-success-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiState","success"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","success"],["suiMessageHeader",""],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),o(4,"input",2),e(),i(5,"div",3)(6,"div",4),t(7,"Form Completed"),e(),i(8,"p"),t(9,"Youre all signed up for the newsletter."),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,F,_,b],encapsulation:2})}}return n})(),Ft=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-error-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiState","error"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","error"],["suiMessageHeader",""],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),o(4,"input",2),e(),i(5,"div",3)(6,"div",4),t(7,"Action Forbidden"),e(),i(8,"p"),t(9,"You can only sign up for an account once with a given e-mail address."),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,F,_,b],encapsulation:2})}}return n})(),gt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-warning-example"]],standalone:!1,features:[u],decls:13,vars:0,consts:[["sui-form","","suiState","warning"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","warning"],["suiMessageHeader",""],["suiMessageList",""],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"E-mail"),e(),o(4,"input",2),e(),i(5,"div",3)(6,"div",4),t(7,"Action Forbidden"),e(),i(8,"ul",5)(9,"li"),t(10,"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail. "),e()()(),i(11,"div",6),t(12,"Submit"),e()())},dependencies:[f,x,F,_,K,b],encapsulation:2})}}return n})(),bt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-field-error-example"]],standalone:!1,features:[u],decls:17,vars:1,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField","","suiError",""],["placeholder","First Name","type","text"],["suiFormField",""],["placeholder","Last Name","type","text"],["suiPlaceholder","Gender",3,"suiOptions"],["suiFormField","","suiError","","suiInline",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",4)(7,"label"),t(8,"Last Name"),e(),o(9,"input",5),e()(),i(10,"div",2)(11,"label"),t(12,"Gender"),e(),o(13,"sui-select",6),e(),i(14,"div",7)(15,"sui-checkbox"),t(16," I agree to the Terms and Conditions "),e()()()),r&2&&(s(13),m("suiOptions",l.gender))},dependencies:[f,x,h,w,R],encapsulation:2})}}return n})(),Et=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-disabled-example"]],standalone:!1,features:[u],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField","","disabled",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),yt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-read-only-example"]],standalone:!1,features:[u],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","Read Only","readonly","","type","text"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",3),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),Ct=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-mini-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","mini"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),Dt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-tiny-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","tiny"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),Mt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-small-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","small"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),_t=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-large-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","large"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),Bt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-big-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","big"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),wt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-huge-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","huge"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),It=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-size-massive-example"]],standalone:!1,features:[u],decls:12,vars:0,consts:[["sui-form","","suiSize","massive"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First Name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Last Name"),e(),o(9,"input",4),e()(),i(10,"div",5),t(11,"Submit"),e()())},dependencies:[f,x,h,b],encapsulation:2})}}return n})(),Tt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-equal-width-example"]],standalone:!1,features:[u],decls:23,vars:0,consts:[["sui-form","","suiEqualWidth",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"Username"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Password"),e(),o(9,"input",4),e()(),i(10,"div",1)(11,"div",2)(12,"label"),t(13,"First name"),e(),o(14,"input",5),e(),i(15,"div",2)(16,"label"),t(17,"Middle name"),e(),o(18,"input",6),e(),i(19,"div",2)(20,"label"),t(21,"Last name"),e(),o(22,"input",7),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),zt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-inverted-example"]],standalone:!1,features:[u],decls:16,vars:0,consts:[["sui-segment","","suiInverted",""],["sui-form","","suiInverted",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["suiFormField","","suiInline",""],["sui-button",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t(5,"Username"),e(),o(6,"input",4),e(),i(7,"div",3)(8,"label"),t(9,"Password"),e(),o(10,"input",5),e()(),i(11,"div",6)(12,"sui-checkbox"),t(13,"I agree to terms and conditions"),e()(),i(14,"div",7),t(15,"Submit"),e()()())},dependencies:[f,x,h,w,b,Z],encapsulation:2})}}return n})(),Nt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-inline-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-form",""],["suiFormField","","suiInline",""],["type","text","placeholder","Full Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Last name"),e(),o(4,"input",2),e()())},dependencies:[f,x],encapsulation:2})}}return n})(),At=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-width-example"]],standalone:!1,features:[u],decls:28,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField","","suiWidth","six"],["type","text","placeholder","First Name"],["suiFormField","","suiWidth","four"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"],["suiFormField","","suiWidth","two"],["type","text","placeholder","2 Wide"],["suiFormField","","suiWidth","twelve"],["type","text","placeholder","12 Wide"],["suiFormField","","suiWidth","eight"],["type","text","placeholder","8 Wide"],["type","text","placeholder","6 Wide"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),o(5,"input",3),e(),i(6,"div",4)(7,"label"),t(8,"Middle"),e(),o(9,"input",5),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),o(13,"input",6),e()(),i(14,"div",1)(15,"div",7),o(16,"input",8),e(),i(17,"div",9),o(18,"input",10),e(),i(19,"div",7),o(20,"input",8),e()(),i(21,"div",1)(22,"div",11),o(23,"input",12),e(),i(24,"div",2),o(25,"input",13),e(),i(26,"div",7),o(27,"input",8),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),kt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-required-example"]],standalone:!1,features:[u],decls:8,vars:0,consts:[["sui-form",""],["suiFormField","","suiRequired",""],["type","text","placeholder","Full Name"],["suiFormField","","suiInline","","suiRequired",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Last name"),e(),o(4,"input",2),e(),i(5,"div",3)(6,"sui-checkbox"),t(7,"I agree to terms and conditions"),e()()())},dependencies:[f,x,w],encapsulation:2})}}return n})(),Wt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-evenly-divided-example"]],standalone:!1,features:[u],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","three"],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"First name"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Middle name"),e(),o(9,"input",4),e(),i(10,"div",2)(11,"label"),t(12,"Last name"),e(),o(13,"input",5),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),Lt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-grouped-example"]],standalone:!1,features:[u],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"sui-checkbox",3),t(4," Apples "),e()(),i(5,"div",2)(6,"sui-checkbox",3),t(7," Oranges "),e()(),i(8,"div",2)(9,"sui-checkbox",3),t(10," Pears "),e()(),i(11,"div",2)(12,"sui-checkbox",3),t(13," Grapefruit "),e()()()())},dependencies:[f,x,h,w],encapsulation:2})}}return n})(),Pt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-equal-width-group-example"]],standalone:!1,features:[u],decls:23,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["suiFormFields","","suiEqualWidth",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t(4,"Username"),e(),o(5,"input",3),e(),i(6,"div",2)(7,"label"),t(8,"Password"),e(),o(9,"input",4),e()(),i(10,"div",5)(11,"div",2)(12,"label"),t(13,"First name"),e(),o(14,"input",6),e(),i(15,"div",2)(16,"label"),t(17,"Middle name"),e(),o(18,"input",7),e(),i(19,"div",2)(20,"label"),t(21,"Last name"),e(),o(22,"input",8),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),Ht=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-inline-group-example"]],standalone:!1,features:[u],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["type","text","placeholder","(xxx)"],["type","text","placeholder","xxx"],["type","text","placeholder","xxxx"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Phone Number"),e(),i(4,"div",2),o(5,"input",3),e(),i(6,"div",2),o(7,"input",4),e(),i(8,"div",2),o(9,"input",5),e()()())},dependencies:[f,x,h],encapsulation:2})}}return n})(),Gt=(()=>{class n extends S{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-form-inline-group-alt-example"]],standalone:!1,features:[u],decls:16,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"What's your favourite fruit?"),e(),i(4,"div",2)(5,"sui-checkbox",3),t(6," Apples "),e()(),i(7,"div",2)(8,"sui-checkbox",3),t(9," Oranges "),e()(),i(10,"div",2)(11,"sui-checkbox",3),t(12," Pears "),e()(),i(13,"div",2)(14,"sui-checkbox",3),t(15," Grapefruit "),e()()()())},dependencies:[f,x,h,w],encapsulation:2})}}return n})();function $n(n,c){n&1&&o(0,"doc-form-basic-example")}function Qn(n,c){n&1&&o(0,"doc-form-basic-alt-example")}function Zn(n,c){n&1&&o(0,"doc-form-user-input-example")}function ea(n,c){n&1&&o(0,"doc-form-fields-example")}function ta(n,c){n&1&&o(0,"doc-form-fields-width-example")}function ia(n,c){n&1&&o(0,"doc-form-fields-inline-example")}function na(n,c){n&1&&o(0,"doc-form-text-area-example")}function aa(n,c){n&1&&o(0,"doc-form-checkbox-example")}function ra(n,c){n&1&&o(0,"doc-form-radio-example")}function oa(n,c){n&1&&o(0,"doc-form-dropdown-example")}function la(n,c){n&1&&o(0,"doc-form-dropdown-alt-example")}function sa(n,c){n&1&&o(0,"doc-form-multiple-select-example")}function ma(n,c){n&1&&o(0,"doc-form-html-select-example")}function da(n,c){n&1&&o(0,"doc-form-message-example")}function pa(n,c){n&1&&o(0,"doc-form-loading-example")}function ca(n,c){n&1&&o(0,"doc-form-success-example")}function ua(n,c){n&1&&o(0,"doc-form-error-example")}function va(n,c){n&1&&o(0,"doc-form-warning-example")}function xa(n,c){n&1&&o(0,"doc-form-field-error-example")}function fa(n,c){n&1&&o(0,"doc-form-disabled-example")}function Sa(n,c){n&1&&o(0,"doc-form-read-only-example")}function ha(n,c){n&1&&o(0,"doc-form-size-mini-example")}function Fa(n,c){n&1&&o(0,"doc-form-size-tiny-example")}function ga(n,c){n&1&&o(0,"doc-form-size-small-example")}function ba(n,c){n&1&&o(0,"doc-form-size-large-example")}function Ea(n,c){n&1&&o(0,"doc-form-size-big-example")}function ya(n,c){n&1&&o(0,"doc-form-size-huge-example")}function Ca(n,c){n&1&&o(0,"doc-form-size-massive-example")}function Da(n,c){n&1&&o(0,"doc-form-equal-width-example")}function Ma(n,c){n&1&&o(0,"doc-form-inverted-example")}function _a(n,c){n&1&&o(0,"doc-form-inline-example")}function Ba(n,c){n&1&&o(0,"doc-form-width-example")}function wa(n,c){n&1&&o(0,"doc-form-required-example")}function Ia(n,c){n&1&&o(0,"doc-form-evenly-divided-example")}function Ta(n,c){n&1&&o(0,"doc-form-grouped-example")}function za(n,c){n&1&&o(0,"doc-form-equal-width-group-example")}function Na(n,c){n&1&&o(0,"doc-form-inline-group-example")}function Aa(n,c){n&1&&o(0,"doc-form-inline-group-alt-example")}function ka(n,c){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Form"),e(),i(6,"p"),t(7,"A form"),e(),p(8,$n,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),p(10,Qn,1,0,"ng-template",5),e(),o(11,"br"),i(12,"h2",2),t(13,"Content"),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Field"),e(),i(17,"p"),t(18,"A field is a form element containing a label and an input"),e(),p(19,Zn,1,0,"ng-template",5),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22,"Fields"),e(),i(23,"p"),t(24,"A set of fields can appear grouped together"),e(),i(25,"div",6),t(26," Field groups automatically receive responsive styling, swapping to one field per row on mobile devices. "),e(),p(27,ea,1,0,"ng-template",5),e(),i(28,"doc-code-sample",3),p(29,ta,1,0,"ng-template",5),e(),i(30,"doc-code-sample",3),p(31,ia,1,0,"ng-template",5),e(),i(32,"doc-code-sample",3)(33,"h3",4),t(34,"Text Area"),e(),i(35,"p"),t(36,"A textarea can be used to allow for extended user input."),e(),i(37,"div",7),t(38," To specify an approximate text area size use the rows attribute. "),e(),p(39,na,1,0,"ng-template",5),e(),i(40,"doc-code-sample",3)(41,"h3",4),t(42,"Checkbox"),e(),i(43,"p"),t(44,"A form can contain a "),i(45,"a",8),t(46,"checkbox"),e()(),i(47,"div",7),t(48," UI checkbox are special, styled versions of standard HTML checkboxes "),e(),p(49,aa,1,0,"ng-template",5),e(),i(50,"doc-code-sample",3)(51,"h3",4),t(52,"Radio Checkbox"),e(),i(53,"p"),t(54,"A form can contain a "),i(55,"a",8),t(56,"radio checkbox"),e()(),p(57,ra,1,0,"ng-template",5),e(),i(58,"doc-code-sample",3)(59,"h3",4),t(60,"Dropdown"),e(),i(61,"p"),t(62,"A form can contain a "),i(63,"a",9),t(64,"dropdown"),e()(),p(65,oa,1,0,"ng-template",5),e(),i(66,"doc-code-sample",3),p(67,la,1,0,"ng-template",5),e(),i(68,"doc-code-sample",3)(69,"h3",4),t(70,"Multiple Select"),e(),i(71,"p"),t(72,"A multiple select is used to include several choices with one form field"),e(),p(73,sa,1,0,"ng-template",5),e(),i(74,"doc-code-sample",3)(75,"h3",4),t(76,"HTML Select"),e(),i(77,"p"),t(78,"A multiple select is used to include several choices with one form field"),e(),p(79,ma,1,0,"ng-template",5),e(),i(80,"doc-code-sample",3)(81,"h3",4),t(82,"Message"),e(),i(83,"p"),t(84,"A form can contain a "),i(85,"a",10),t(86,"message"),e()(),i(87,"div",7),t(88," Any "),i(89,"code"),t(90,"info"),e(),t(91,", "),i(92,"code"),t(93,"error"),e(),t(94,", "),i(95,"code"),t(96,"success"),e(),t(97,", or "),i(98,"code"),t(99,"warning"),e(),t(100," message blocks found inside a form are hidden by default. "),e(),p(101,da,1,0,"ng-template",5),e(),o(102,"br"),i(103,"h2",2),t(104,"State"),e(),i(105,"doc-code-sample",3)(106,"h3",4),t(107,"Loading"),e(),i(108,"p"),t(109,"If a form is in loading state, it will automatically show a loading indicator."),e(),p(110,pa,1,0,"ng-template",5),e(),i(111,"doc-code-sample",3)(112,"h3",4),t(113,"Success"),e(),i(114,"p"),t(115,"If a form is in an success state, it will automatically show any success message blocks."),e(),p(116,ca,1,0,"ng-template",5),e(),i(117,"doc-code-sample",3)(118,"h3",4),t(119,"Error"),e(),i(120,"p"),t(121,"If a form is in an error state, it will automatically show any error message blocks."),e(),p(122,ua,1,0,"ng-template",5),e(),i(123,"doc-code-sample",3)(124,"h3",4),t(125,"Warning"),e(),i(126,"p"),t(127,"If a form is in warning state, it will automatically show any warning message block."),e(),p(128,va,1,0,"ng-template",5),e(),i(129,"doc-code-sample",3)(130,"h3",4),t(131,"Field Error"),e(),i(132,"p"),t(133,"Individual fields may display an error state"),e(),p(134,xa,1,0,"ng-template",5),e(),i(135,"doc-code-sample",3)(136,"h3",4),t(137,"Disabled Field"),e(),i(138,"p"),t(139,"Individual fields may be disabled"),e(),p(140,fa,1,0,"ng-template",5),e(),i(141,"doc-code-sample",3)(142,"h3",4),t(143,"Read-Only Field"),e(),i(144,"p"),t(145,"Individual fields may be read only"),e(),p(146,Sa,1,0,"ng-template",5),e(),o(147,"br"),i(148,"h2",2),t(149,"Form Variations"),e(),i(150,"doc-code-sample",3)(151,"h3",4),t(152,"Size"),e(),i(153,"p"),t(154,"A form can vary in size"),e(),p(155,ha,1,0,"ng-template",5),e(),i(156,"doc-code-sample",3),p(157,Fa,1,0,"ng-template",5),e(),i(158,"doc-code-sample",3),p(159,ga,1,0,"ng-template",5),e(),i(160,"doc-code-sample",3),p(161,ba,1,0,"ng-template",5),e(),i(162,"doc-code-sample",3),p(163,Ea,1,0,"ng-template",5),e(),i(164,"doc-code-sample",3),p(165,ya,1,0,"ng-template",5),e(),i(166,"doc-code-sample",3),p(167,Ca,1,0,"ng-template",5),e(),i(168,"doc-code-sample",3)(169,"h3",4),t(170,"Equal Width Form"),e(),i(171,"p"),t(172,"Forms can automatically divide fields to be equal width"),e(),p(173,Da,1,0,"ng-template",5),e(),i(174,"doc-code-sample",3)(175,"h3",4),t(176,"Inverted"),e(),i(177,"p"),t(178,"A form on a dark background may have to invert its colour scheme"),e(),p(179,Ma,1,0,"ng-template",5),e(),o(180,"br"),i(181,"h2",2),t(182,"Field Variations"),e(),i(183,"doc-code-sample",3)(184,"h3",4),t(185,"Inline Field"),e(),i(186,"p"),t(187,"A field can have its label next to instead of above it."),e(),p(188,_a,1,0,"ng-template",5),e(),i(189,"doc-code-sample",3)(190,"h3",4),t(191,"Width"),e(),i(192,"p"),t(193,"A field can specify its width in grid columns"),e(),p(194,Ba,1,0,"ng-template",5),e(),i(195,"doc-code-sample",3)(196,"h3",4),t(197,"Required"),e(),i(198,"p"),t(199,"A field can show that input is mandatory"),e(),p(200,wa,1,0,"ng-template",5),e(),o(201,"br"),i(202,"h2",2),t(203,"Group Variations"),e(),i(204,"doc-code-sample",3)(205,"h3",4),t(206,"Evenly Divided"),e(),i(207,"p"),t(208,"Fields can have their widths divided evenly."),e(),p(209,Ia,1,0,"ng-template",5),e(),i(210,"doc-code-sample",3)(211,"h3",4),t(212,"Grouped Fields"),e(),i(213,"p"),t(214,"Fields can show related choices."),e(),p(215,Ta,1,0,"ng-template",5),e(),i(216,"doc-code-sample",3)(217,"h3",4),t(218,"Equal Width Fields"),e(),i(219,"p"),t(220,"Fields can automatically divide fields to be equal width."),e(),p(221,za,1,0,"ng-template",5),e(),i(222,"doc-code-sample",3)(223,"h3",4),t(224,"Inline Fields"),e(),i(225,"p"),t(226,"Multiple fields may be inline in a row."),e(),p(227,Na,1,0,"ng-template",5),e(),i(228,"doc-code-sample",3),p(229,Aa,1,0,"ng-template",5),e()()),n&2){let a=N();s(3),m("templateCode",a.snippetBasic),s(6),m("templateCode",a.snippetBasicAlt),s(5),m("templateCode",a.snippetUserInput),s(6),m("templateCode",a.snippetFields),s(8),m("templateCode",a.snippetFieldsWidth),s(2),m("templateCode",a.snippetFieldsInline),s(2),m("templateCode",a.snippetTextArea),s(8),m("templateCode",a.snippetCheckbox),s(10),m("templateCode",a.snippetRadio),s(8),m("templateCode",a.snippetDropdown),s(8),m("templateCode",a.snippetDropdownAlt),s(2),m("templateCode",a.snippetMultipleSelect),s(6),m("templateCode",a.snippetHtmlSelect),s(6),m("templateCode",a.snippetMessage),s(25),m("templateCode",a.snippetLoading),s(6),m("templateCode",a.snippetSuccess),s(6),m("templateCode",a.snippetError),s(6),m("templateCode",a.snippetWarning),s(6),m("templateCode",a.snippetFieldError),s(6),m("templateCode",a.snippetDisabled),s(6),m("templateCode",a.snippetReadOnly),s(9),m("templateCode",a.snippetSizeMini),s(6),m("templateCode",a.snippetSizeTiny),s(2),m("templateCode",a.snippetSizeSmall),s(2),m("templateCode",a.snippetSizeLarge),s(2),m("templateCode",a.snippetSizeBig),s(2),m("templateCode",a.snippetSizeHuge),s(2),m("templateCode",a.snippetSizeMassive),s(2),m("templateCode",a.snippetEqualWidth),s(6),m("templateCode",a.snippetInverted),s(9),m("templateCode",a.snippetInline),s(6),m("templateCode",a.snippetWidth),s(6),m("templateCode",a.snippetRequired),s(9),m("templateCode",a.snippetEvenlyDivided),s(6),m("templateCode",a.snippetGrouped),s(6),m("templateCode",a.snippetEqualWidthGroup),s(6),m("templateCode",a.snippetInlineGroup),s(6),m("templateCode",a.snippetInlineGroupAlt)}}function Wa(n,c){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-form"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",11)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiState"),e(),i(20,"td"),t(21,"Set the form state. Allowed values could be "),i(22,"span",12),t(23,"success"),e(),t(24," | "),i(25,"span",12),t(26,"warning"),e(),t(27," | "),i(28,"span",12),t(29,"error"),e(),t(30," | "),i(31,"span",12),t(32,"null"),e()(),i(33,"td")(34,"div",13),t(35," string "),e()(),i(36,"td")(37,"div",14),t(38," null "),e()()(),i(39,"tr")(40,"td"),t(41,"suiSize"),e(),i(42,"td"),t(43,"Set the form size. Allowed values could be "),i(44,"span",12),t(45,"mini"),e(),t(46," | "),i(47,"span",12),t(48,"tiny"),e(),t(49," | "),i(50,"span",12),t(51,"small"),e(),t(52," | "),i(53,"span",12),t(54,"medium"),e(),t(55," | "),i(56,"span",12),t(57,"big"),e(),t(58," | "),i(59,"span",12),t(60,"huge"),e(),t(61," | "),i(62,"span",12),t(63,"massive"),e(),t(64," | "),i(65,"span",12),t(66,"null"),e()(),i(67,"td")(68,"div",13),t(69," string "),e()(),i(70,"td")(71,"div",14),t(72," null "),e()()(),i(73,"tr")(74,"td"),t(75,"suiLoading"),e(),i(76,"td"),t(77,"Whether or not the form is a loading state. "),e(),i(78,"td")(79,"div",13),t(80," boolean "),e()(),i(81,"td")(82,"div",14),t(83," false "),e()()(),i(84,"tr")(85,"td"),t(86,"suiEqualWidth"),e(),i(87,"td"),t(88,"Whether or not the form fields are of equal width. "),e(),i(89,"td")(90,"div",13),t(91," boolean "),e()(),i(92,"td")(93,"div",14),t(94," false "),e()()(),i(95,"tr")(96,"td"),t(97,"suiInverted"),e(),i(98,"td"),t(99,"Whether or not the form has inverted colours. "),e(),i(100,"td")(101,"div",13),t(102," boolean "),e()(),i(103,"td")(104,"div",14),t(105," false "),e()()()()(),o(106,"br"),i(107,"h2",2),t(108,"suiFormFields"),e(),i(109,"h4",4),t(110,"Properties"),e(),i(111,"table",11)(112,"thead")(113,"tr")(114,"th"),t(115,"Property"),e(),i(116,"th"),t(117,"Description"),e(),i(118,"th"),t(119,"Type"),e(),i(120,"th"),t(121,"Default"),e()()(),i(122,"tbody")(123,"tr")(124,"td"),t(125,"suiWidth"),e(),i(126,"td"),t(127,"Set the fields width. Allowed values could be "),i(128,"span",12),t(129,"one"),e(),t(130," | "),i(131,"span",12),t(132,"two"),e(),t(133," | "),i(134,"span",12),t(135,"three"),e(),t(136," | "),i(137,"span",12),t(138,"four"),e(),t(139," | "),i(140,"span",12),t(141,"five"),e(),t(142," | "),i(143,"span",12),t(144,"six"),e(),t(145," | "),i(146,"span",12),t(147,"seven"),e(),t(148," | "),i(149,"span",12),t(150,"eight"),e(),t(151," | "),i(152,"span",12),t(153,"nine"),e(),t(154," | "),i(155,"span",12),t(156,"ten"),e(),t(157," | "),i(158,"span",12),t(159,"eleven"),e(),t(160," | "),i(161,"span",12),t(162,"twelve"),e(),t(163," | "),i(164,"span",12),t(165,"thirteen"),e(),t(166," | "),i(167,"span",12),t(168,"fourteen"),e(),t(169,"| "),i(170,"span",12),t(171,"fifteen"),e(),t(172," | "),i(173,"span",12),t(174,"sixteen"),e(),t(175," | "),i(176,"span",12),t(177,"null"),e()(),i(178,"td")(179,"div",13),t(180," string"),e()(),i(181,"td")(182,"div",14),t(183," null"),e()()(),i(184,"tr")(185,"td"),t(186,"suiInline"),e(),i(187,"td"),t(188," Determine whether or not the field group is inline "),e(),i(189,"td")(190,"div",13),t(191," boolean "),e()(),i(192,"td")(193,"div",14),t(194," false "),e()()(),i(195,"tr")(196,"td"),t(197,"suiGrouped"),e(),i(198,"td"),t(199," Determine whether or not the fields are grouped "),e(),i(200,"td")(201,"div",13),t(202," boolean "),e()(),i(203,"td")(204,"div",14),t(205," false "),e()()(),i(206,"tr")(207,"td"),t(208,"suiEqualWidth"),e(),i(209,"td"),t(210," Determine whether or not the field contents are equal width "),e(),i(211,"td")(212,"div",13),t(213," boolean "),e()(),i(214,"td")(215,"div",14),t(216," false "),e()()()()(),o(217,"br"),i(218,"h2",2),t(219,"suiFormField"),e(),i(220,"h4",4),t(221,"Properties"),e(),i(222,"table",11)(223,"thead")(224,"tr")(225,"th"),t(226,"Property"),e(),i(227,"th"),t(228,"Description"),e(),i(229,"th"),t(230,"Type"),e(),i(231,"th"),t(232,"Default"),e()()(),i(233,"tbody")(234,"tr")(235,"td"),t(236,"suiWidth"),e(),i(237,"td"),t(238,"Set the fields width. Allowed values could be "),i(239,"span",12),t(240,"one"),e(),t(241," | "),i(242,"span",12),t(243,"two"),e(),t(244," | "),i(245,"span",12),t(246,"three"),e(),t(247," | "),i(248,"span",12),t(249,"four"),e(),t(250," | "),i(251,"span",12),t(252,"five"),e(),t(253," | "),i(254,"span",12),t(255,"six"),e(),t(256," | "),i(257,"span",12),t(258,"seven"),e(),t(259," | "),i(260,"span",12),t(261,"eight"),e(),t(262," | "),i(263,"span",12),t(264,"nine"),e(),t(265," | "),i(266,"span",12),t(267,"ten"),e(),t(268," | "),i(269,"span",12),t(270,"eleven"),e(),t(271," | "),i(272,"span",12),t(273,"twelve"),e(),t(274," | "),i(275,"span",12),t(276,"thirteen"),e(),t(277," | "),i(278,"span",12),t(279,"fourteen"),e(),t(280,"| "),i(281,"span",12),t(282,"fifteen"),e(),t(283," | "),i(284,"span",12),t(285,"sixteen"),e(),t(286," | "),i(287,"span",12),t(288,"null"),e()(),i(289,"td")(290,"div",13),t(291," string"),e()(),i(292,"td")(293,"div",14),t(294," null"),e()()(),i(295,"tr")(296,"td"),t(297,"suiError"),e(),i(298,"td"),t(299," Determine whether or not the field is in an error state "),e(),i(300,"td")(301,"div",13),t(302," boolean "),e()(),i(303,"td")(304,"div",14),t(305," false "),e()()(),i(306,"tr")(307,"td"),t(308,"suiInline"),e(),i(309,"td"),t(310," Determine whether or not the field is inline "),e(),i(311,"td")(312,"div",13),t(313," boolean "),e()(),i(314,"td")(315,"div",14),t(316," false "),e()()(),i(317,"tr")(318,"td"),t(319,"disabled"),e(),i(320,"td"),t(321," Determine whether or not the field is disabled "),e(),i(322,"td")(323,"div",13),t(324," boolean "),e()(),i(325,"td")(326,"div",14),t(327," false "),e()()(),i(328,"tr")(329,"td"),t(330,"suiRequired"),e(),i(331,"td"),t(332," Determine whether or not the field is required "),e(),i(333,"td")(334,"div",13),t(335," boolean "),e()(),i(336,"td")(337,"div",14),t(338," false "),e()()()()()())}var Jt=(()=>{class n{constructor(a){this.snippetBasic=he,this.snippetBasicAlt=Fe,this.snippetUserInput=ge,this.snippetFields=be,this.snippetFieldsWidth=Ee,this.snippetFieldsInline=ye,this.snippetTextArea=Ce,this.snippetCheckbox=De,this.snippetRadio=Me,this.snippetDropdown=_e,this.snippetDropdownAlt=Be,this.snippetMultipleSelect=we,this.snippetHtmlSelect=Ie,this.snippetMessage=Te,this.snippetLoading=ze,this.snippetSuccess=Ne,this.snippetError=Ae,this.snippetWarning=ke,this.snippetFieldError=We,this.snippetDisabled=Le,this.snippetReadOnly=Pe,this.snippetSizeMini=He,this.snippetSizeTiny=Ge,this.snippetSizeSmall=Re,this.snippetSizeLarge=Oe,this.snippetSizeBig=qe,this.snippetSizeHuge=Ve,this.snippetSizeMassive=Ue,this.snippetEqualWidth=je,this.snippetInverted=Ye,this.snippetInline=Je,this.snippetWidth=Xe,this.snippetRequired=Ke,this.snippetEvenlyDivided=$e,this.snippetGrouped=Qe,this.snippetEqualWidthGroup=Ze,this.snippetInlineGroup=et,this.snippetInlineGroupAlt=tt,this.states=[{text:"Alabama",value:"al"}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Nigeria",value:"ng",flag:"ng"}],this.months=[{text:"January",value:"jan"}],this.cards=[{text:"Visa",value:"visa"}],this.contacts=[{text:"Justen Kitsune",image:{avatar:!0,src:"https://semantic-ui.com/images/avatar/small/stevie.jpg"}}],this.gender=[{text:"Male"},{text:"Female"}],a.setTitle("Form | Ngx Semantic")}static{this.\u0275fac=function(r){return new(r||n)(T(A))}}static{this.\u0275cmp=d({type:n,selectors:[["doc-form"]],standalone:!1,decls:3,vars:2,consts:[["header","Form","subHeader","A form displays a set of related user input fields in a structured way"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-message","","suiState","success"],["sui-message","","suiState","info"],["routerLink","/modules/checkbox"],["routerLink","/modules/dropdown"],["routerLink","/collections/message"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(r,l){r&1&&(i(0,"doc-page",0),p(1,ka,230,38,"div",1)(2,Wa,339,0,"div",1),e()),r&2&&(s(),m("docPageContent","definition"),s(),m("docPageContent","api"))},dependencies:[H,L,W,P,M,F,ie,G,k,nt,at,rt,ot,lt,st,mt,dt,pt,ct,ut,vt,xt,ft,St,ht,Ft,gt,bt,Et,yt,Ct,Dt,Mt,_t,Bt,wt,It,Tt,zt,Nt,At,kt,Wt,Lt,Pt,Ht,Gt],encapsulation:2})}}return n})();var Xt=(()=>{class n{constructor(){}ngOnInit(){}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-grid"]],standalone:!1,decls:1,vars:0,template:function(r,l){r&1&&t(0,"grid works")},encapsulation:2})}}return n})();var Kt=(()=>{class n{constructor(){}ngOnInit(){}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-menu"]],standalone:!1,decls:1,vars:0,template:function(r,l){r&1&&t(0,"menu works")},encapsulation:2})}}return n})();var $t=(()=>{class n{constructor(){}ngOnInit(){}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-table"]],standalone:!1,decls:1,vars:0,template:function(r,l){r&1&&t(0,"table works")},encapsulation:2})}}return n})();var Qt=`<div sui-message suiSize="small">
  <div suiMessageHeader>
    Changes in Service
  </div>
  <p>We updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</div>
`;var Zt=`<div sui-message>
  <div suiMessageHeader>
    New Site Features
  </div>
  <ul suiMessageList>
    <li>You can now have cover images on blog pages</li>
    <li>Drafts will now auto-save while writing</li>
  </ul>
</div>
`;var ei=`<div sui-message suiIcon>
  <i suiIconType="inbox" sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Have you heard about our mailing list?
    </div>
    <p>Get the best news in your e-mail every day.</p>
  </div>
</div>
`;var ti=`<div sui-message suiIcon>
  <i suiIconType="notched circle" suiLoading sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Just one second
    </div>
    <p>We're fetching that content for you.</p>
  </div>
</div>
`;var ii=`<div sui-message suiDismissible>
  <div suiMessageHeader>
    Welcome back!
  </div>
  <p>This is a special notification which you can dismiss if you're bored with it.</p>
</div>
`;var ni=`<div sui-message suiHidden>
  <p>You can't see me</p>
</div>
`;var ai=`<div sui-message suiVisible>
  <p>You can always see me</p>
</div>
`;var ri=`<div sui-message suiFloating>
  <p>Way to go!</p>
</div>
`;var oi=`<div sui-message suiCompact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</div>
`;var li=`<div sui-message suiAttached='attached'>
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
`;var si=`<div sui-message suiColour='warning' suiDismissible>
  <div suiMessageHeader>
    You must register before you can do that!
  </div>
  <p>Visit our registration page, then try again</p>
</div>
`;var mi=`<div sui-message suiColour='info' suiDismissible>
  <div suiMessageHeader>
    Was this what you wanted?
  </div>
  <p>It's good to see you again</p>
</div>
`;var di=`<div sui-message suiColour='positive' suiDismissible>
  <div suiMessageHeader>
    You are eligible for a reward
  </div>
  <p>Go to your special offers page to see now</p>
</div>
`;var pi=`<div sui-message suiColour='negative' suiDismissible>
  <div suiMessageHeader>
    We're sorry we can't apply that discount
  </div>
  <p>That offer has expired</p>
</div>
`;var ci=`<div sui-message suiColour='red'>Red</div>
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
`;var ui=`<div sui-message suiSize='mini'>This is a mini message</div>
<div sui-message suiSize='tiny'>This is a tiny message</div>
<div sui-message suiSize='small'>This is a small message</div>
<div sui-message suiSize='large'>This is a large message</div>
<div sui-message suiSize='big'>This is a big message</div>
<div sui-message suiSize='huge'>This is a huge message</div>
<div sui-message suiSize='massive'>This is a massive message</div>
`;var g=class{constructor(){this.isDefinitionsActive=!0}},vi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-std-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-message","","suiSize","small"],["suiMessageHeader",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," Changes in Service "),e(),i(3,"p"),t(4,"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."),e()())},dependencies:[F,_],encapsulation:2})}}return n})(),xi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-list-example"]],standalone:!1,features:[u],decls:8,vars:0,consts:[["sui-message",""],["suiMessageHeader",""],["suiMessageList",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," New Site Features "),e(),i(3,"ul",2)(4,"li"),t(5,"You can now have cover images on blog pages"),e(),i(6,"li"),t(7,"Drafts will now auto-save while writing"),e()()())},dependencies:[F,_,K],encapsulation:2})}}return n})(),fi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-icon-example"]],standalone:!1,features:[u],decls:7,vars:0,consts:[["sui-message","","suiIcon",""],["suiIconType","inbox","sui-icon",""],["suiMessageContent",""],["sui-header",""]],template:function(r,l){r&1&&(i(0,"div",0),o(1,"i",1),i(2,"div",2)(3,"div",3),t(4," Have you heard about our mailing list? "),e(),i(5,"p"),t(6,"Get the best news in your e-mail every day."),e()()())},dependencies:[D,M,F,ee],encapsulation:2})}}return n})(),Si=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-icon2-example"]],standalone:!1,features:[u],decls:7,vars:0,consts:[["sui-message","","suiIcon",""],["suiIconType","notched circle","suiLoading","","sui-icon",""],["suiMessageContent",""],["sui-header",""]],template:function(r,l){r&1&&(i(0,"div",0),o(1,"i",1),i(2,"div",2)(3,"div",3),t(4," Just one second "),e(),i(5,"p"),t(6,"We're fetching that content for you."),e()()())},dependencies:[D,M,F,ee],encapsulation:2})}}return n})(),hi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-dissmisable-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-message","","suiDismissible",""],["suiMessageHeader",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," Welcome back! "),e(),i(3,"p"),t(4,"This is a special notification which you can dismiss if you're bored with it."),e()())},dependencies:[F,_],encapsulation:2})}}return n})(),Fi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-hidden-example"]],standalone:!1,features:[u],decls:3,vars:0,consts:[["sui-message","","suiHidden",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"p"),t(2,"You can't see me"),e()())},dependencies:[F],encapsulation:2})}}return n})(),gi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-visible-example"]],standalone:!1,features:[u],decls:3,vars:0,consts:[["sui-message","","suiVisible",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"p"),t(2,"You can always see me"),e()())},dependencies:[F],encapsulation:2})}}return n})(),bi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-floating-example"]],standalone:!1,features:[u],decls:3,vars:0,consts:[["sui-message","","suiFloating",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"p"),t(2,"Way to go!"),e()())},dependencies:[F],encapsulation:2})}}return n})(),Ei=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-compact-example"]],standalone:!1,features:[u],decls:3,vars:0,consts:[["sui-message","","suiCompact",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"p"),t(2,"Get all the best inventions in your e-mail every day. Sign up now!"),e()())},dependencies:[F],encapsulation:2})}}return n})(),yi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-attached-example"]],standalone:!1,features:[u],decls:36,vars:0,consts:[["sui-message","","suiAttached","attached"],["sui-header",""],["sui-form","",1,"attached","fluid","segment"],["suiFormFields","",1,"two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["placeholder","Username","type","text"],["type","password"],["suiFormField","","suiInline",""],[1,"ui","checkbox"],["type","checkbox","id","terms"],["for","terms"],["sui-button","","suiColour","blue"],["sui-message","","suiAttached","bottom attached","suiColour","warning"],["suiIconType","help","sui-icon",""],["href","#"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," Welcome to our site! "),e(),i(3,"p"),t(4,"Fill out the form below to sign-up for a new account"),e()(),i(5,"form",2)(6,"div",3)(7,"div",4)(8,"label"),t(9,"First Name"),e(),o(10,"input",5),e(),i(11,"div",4)(12,"label"),t(13,"Last Name"),e(),o(14,"input",6),e()(),i(15,"div",4)(16,"label"),t(17,"Username"),e(),o(18,"input",7),e(),i(19,"div",4)(20,"label"),t(21,"Password"),e(),o(22,"input",8),e(),i(23,"div",9)(24,"div",10),o(25,"input",11),i(26,"label",12),t(27,"I agree to the terms and conditions"),e()()(),i(28,"div",13),t(29,"Submit"),e()(),i(30,"div",14),o(31,"i",15),t(32," Already signed up? "),i(33,"a",16),t(34,"Login here"),e(),t(35,` instead.
`),e())},dependencies:[V,O,q,f,x,h,D,M,F,b],encapsulation:2})}}return n})(),Ci=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-warning-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-message","","suiColour","warning","suiDismissible",""],["suiMessageHeader",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," You must register before you can do that! "),e(),i(3,"p"),t(4,"Visit our registration page, then try again"),e()())},dependencies:[F,_],encapsulation:2})}}return n})(),Di=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-info-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-message","","suiColour","info","suiDismissible",""],["suiMessageHeader",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," Was this what you wanted? "),e(),i(3,"p"),t(4,"It's good to see you again"),e()())},dependencies:[F,_],encapsulation:2})}}return n})(),Mi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-success-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-message","","suiColour","positive","suiDismissible",""],["suiMessageHeader",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," You are eligible for a reward "),e(),i(3,"p"),t(4,"Go to your special offers page to see now"),e()())},dependencies:[F,_],encapsulation:2})}}return n})(),_i=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-error-example"]],standalone:!1,features:[u],decls:5,vars:0,consts:[["sui-message","","suiColour","negative","suiDismissible",""],["suiMessageHeader",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"div",1),t(2," We're sorry we can't apply that discount "),e(),i(3,"p"),t(4,"That offer has expired"),e()())},dependencies:[F,_],encapsulation:2})}}return n})(),Bi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-coloured-example"]],standalone:!1,features:[u],decls:24,vars:0,consts:[["sui-message","","suiColour","red"],["sui-message","","suiColour","orange"],["sui-message","","suiColour","yellow"],["sui-message","","suiColour","olive"],["sui-message","","suiColour","green"],["sui-message","","suiColour","teal"],["sui-message","","suiColour","blue"],["sui-message","","suiColour","violet"],["sui-message","","suiColour","purple"],["sui-message","","suiColour","pink"],["sui-message","","suiColour","brown"],["sui-message","","suiColour","black"]],template:function(r,l){r&1&&(i(0,"div",0),t(1,"Red"),e(),i(2,"div",1),t(3,"Orange"),e(),i(4,"div",2),t(5,"Yellow"),e(),i(6,"div",3),t(7,"Olive"),e(),i(8,"div",4),t(9,"Green"),e(),i(10,"div",5),t(11,"Teal"),e(),i(12,"div",6),t(13,"Blue"),e(),i(14,"div",7),t(15,"Violet"),e(),i(16,"div",8),t(17,"Purple"),e(),i(18,"div",9),t(19,"Pink"),e(),i(20,"div",10),t(21,"Brown"),e(),i(22,"div",11),t(23,"Black"),e())},dependencies:[F],encapsulation:2})}}return n})(),wi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let a;return function(l){return(a||(a=v(n)))(l||n)}})()}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages-msg-sizes-example"]],standalone:!1,features:[u],decls:14,vars:0,consts:[["sui-message","","suiSize","mini"],["sui-message","","suiSize","tiny"],["sui-message","","suiSize","small"],["sui-message","","suiSize","large"],["sui-message","","suiSize","big"],["sui-message","","suiSize","huge"],["sui-message","","suiSize","massive"]],template:function(r,l){r&1&&(i(0,"div",0),t(1,"This is a mini message"),e(),i(2,"div",1),t(3,"This is a tiny message"),e(),i(4,"div",2),t(5,"This is a small message"),e(),i(6,"div",3),t(7,"This is a large message"),e(),i(8,"div",4),t(9,"This is a big message"),e(),i(10,"div",5),t(11,"This is a huge message"),e(),i(12,"div",6),t(13,"This is a massive message"),e())},dependencies:[F],encapsulation:2})}}return n})();function tr(n,c){n&1&&o(0,"doc-messages-msg-std-example")}function ir(n,c){n&1&&o(0,"doc-messages-msg-list-example")}function nr(n,c){n&1&&o(0,"doc-messages-msg-icon-example")}function ar(n,c){n&1&&o(0,"doc-messages-msg-icon2-example")}function rr(n,c){n&1&&o(0,"doc-messages-msg-dissmisable-example")}function or(n,c){n&1&&o(0,"doc-messages-msg-hidden-example")}function lr(n,c){n&1&&o(0,"doc-messages-msg-visible-example")}function sr(n,c){n&1&&o(0,"doc-messages-msg-floating-example")}function mr(n,c){n&1&&o(0,"doc-messages-msg-compact-example")}function dr(n,c){n&1&&o(0,"doc-messages-msg-attached-example")}function pr(n,c){n&1&&o(0,"doc-messages-msg-warning-example")}function cr(n,c){n&1&&o(0,"doc-messages-msg-info-example")}function ur(n,c){n&1&&o(0,"doc-messages-msg-success-example")}function vr(n,c){n&1&&o(0,"doc-messages-msg-error-example")}function xr(n,c){n&1&&o(0,"doc-messages-msg-coloured-example")}function fr(n,c){n&1&&o(0,"doc-messages-msg-sizes-example")}function Sr(n,c){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Message"),e(),i(6,"p"),t(7,"A basic message"),e(),p(8,tr,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"List Message"),e(),i(12,"p"),t(13,"A message with a list"),e(),p(14,ir,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Icon Message"),e(),i(18,"p"),t(19,"A message can contain an icon"),e(),p(20,nr,1,0,"ng-template",5),e(),i(21,"doc-code-sample",3),p(22,ar,1,0,"ng-template",5),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Dissmissable Block"),e(),i(26,"p"),t(27,"A message that the user can choose to hide"),e(),p(28,rr,1,0,"ng-template",5),e(),i(29,"h2",2),t(30,"States"),e(),i(31,"doc-code-sample",3)(32,"h3",4),t(33,"Hidden"),e(),i(34,"p"),t(35,"A message can be hidden"),e(),p(36,or,1,0,"ng-template",5),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Visible"),e(),i(40,"p"),t(41,"A message can be set to visible to force itself to be shown"),e(),p(42,lr,1,0,"ng-template",5),e(),i(43,"h2",2),t(44,"Variations"),e(),o(45,"br"),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Floating"),e(),i(49,"p"),t(50,"A message can float above content that it is related to"),e(),p(51,sr,1,0,"ng-template",5),e(),i(52,"doc-code-sample",3)(53,"h3",4),t(54,"Compact"),e(),i(55,"p"),t(56,"A message can only take up the width of its content"),e(),p(57,mr,1,0,"ng-template",5),e(),i(58,"doc-code-sample",3)(59,"h3",4),t(60,"Attached"),e(),i(61,"p"),t(62,"A message can be formatted to attach itself to other content"),e(),p(63,dr,1,0,"ng-template",5),e(),i(64,"doc-code-sample",3)(65,"h3",4),t(66,"Warning"),e(),i(67,"p"),t(68,"A message may be formatted to display warning messages."),e(),p(69,pr,1,0,"ng-template",5),e(),i(70,"doc-code-sample",3)(71,"h3",4),t(72,"Info"),e(),i(73,"p"),t(74,"A message may be formatted to display information"),e(),p(75,cr,1,0,"ng-template",5),e(),i(76,"doc-code-sample",3)(77,"h3",4),t(78,"Positive/Success"),e(),i(79,"p"),t(80,"A message may be formatted to display a positive message"),e(),p(81,ur,1,0,"ng-template",5),e(),i(82,"doc-code-sample",3)(83,"h3",4),t(84,"Negative/Error"),e(),i(85,"p"),t(86,"A message may be formatted to display a negative message"),e(),p(87,vr,1,0,"ng-template",5),e(),i(88,"doc-code-sample",3)(89,"h3",4),t(90,"Coloured"),e(),i(91,"p"),t(92,"A message can be formatted to be different colours"),e(),p(93,xr,1,0,"ng-template",5),e(),i(94,"doc-code-sample",3)(95,"h3",4),t(96,"Size"),e(),i(97,"p"),t(98,"A message can have different sizes"),e(),p(99,fr,1,0,"ng-template",5),e()()),n&2){let a=N();s(3),m("templateCode",a.snippetBasic),s(6),m("templateCode",a.snippetList),s(6),m("templateCode",a.snippetIcon1),s(6),m("templateCode",a.snippetIcon2),s(2),m("templateCode",a.snippetDismissable),s(8),m("templateCode",a.snippetHidden),s(6),m("templateCode",a.snippetVisible),s(9),m("templateCode",a.snippetFloating),s(6),m("templateCode",a.snippetCompact),s(6),m("templateCode",a.snippetAttached),s(6),m("templateCode",a.snippettWarning),s(6),m("templateCode",a.snippetInfo),s(6),m("templateCode",a.snippetSuccess),s(6),m("templateCode",a.snippetError),s(6),m("templateCode",a.snippetColoured),s(6),m("templateCode",a.snippetSizes)}}function hr(n,c){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-message"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiAttached"),e(),i(20,"td"),t(21," Attach a message to other content. Allowed values could be "),i(22,"span",7),t(23,"attached"),e(),t(24," | "),i(25,"span",7),t(26,"bottom attached"),e(),t(27," | "),i(28,"span",7),t(29,"null"),e()(),i(30,"td")(31,"div",8),t(32," string "),e()(),i(33,"td")(34,"div",9),t(35," null "),e()()(),i(36,"tr")(37,"td"),t(38,"suiColour"),e(),i(39,"td"),t(40,"Set the message colour. Allowed values could be "),i(41,"span",7),t(42,"'red'"),e(),t(43," | "),i(44,"span",7),t(45,"'orange'"),e(),t(46," | "),i(47,"span",7),t(48,"'yellow'"),e(),t(49," | "),i(50,"span",7),t(51,"'olive'"),e(),t(52," | "),i(53,"span",7),t(54,"'green'"),e(),t(55," | "),i(56,"span",7),t(57,"'teal'"),e(),t(58," | "),i(59,"span",7),t(60,"'blue'"),e(),t(61," | "),i(62,"span",7),t(63,"'violet'"),e(),t(64," | "),i(65,"span",7),t(66,"'purple'"),e(),t(67," | "),i(68,"span",7),t(69,"'pink'"),e(),t(70," | "),i(71,"span",7),t(72,"'brown'"),e(),t(73," | "),i(74,"span",7),t(75,"'grey'"),e(),t(76," | "),i(77,"span",7),t(78,"'black'"),e(),t(79," | "),i(80,"span",7),t(81,"null"),e()(),i(82,"td")(83,"div",8),t(84," string "),e()(),i(85,"td")(86,"div",9),t(87," null "),e()()(),i(88,"tr")(89,"td"),t(90,"suiState"),e(),i(91,"td"),t(92,"Set a message to either visible or hidden states."),e(),i(93,"td")(94,"div",8),t(95," string "),e()(),i(96,"td")(97,"div",9),t(98," null "),e()()(),i(99,"tr")(100,"td"),t(101,"suiSize"),e(),i(102,"td"),t(103,"Set the breadcrumb size. Allowed values could be "),i(104,"span",7),t(105,"mini"),e(),t(106," | "),i(107,"span",7),t(108,"tiny"),e(),t(109," | "),i(110,"span",7),t(111,"small"),e(),t(112," | "),i(113,"span",7),t(114,"medium"),e(),t(115," | "),i(116,"span",7),t(117,"big"),e(),t(118," | "),i(119,"span",7),t(120,"huge"),e(),t(121," | "),i(122,"span",7),t(123,"massive"),e(),t(124," | "),i(125,"span",7),t(126,"null"),e()(),i(127,"td")(128,"div",8),t(129," string "),e()(),i(130,"td")(131,"div",9),t(132," null "),e()()(),i(133,"tr")(134,"td"),t(135,"suiDismissable"),e(),i(136,"td"),t(137," Determine whether or not a message can be dismissed "),e(),i(138,"td")(139,"div",8),t(140," boolean "),e()(),i(141,"td")(142,"div",9),t(143," false "),e()()(),i(144,"tr")(145,"td"),t(146,"suiIcon"),e(),i(147,"td"),t(148," Determine whether or not a message can contain an icon "),e(),i(149,"td")(150,"div",8),t(151," boolean "),e()(),i(152,"td")(153,"div",9),t(154," false "),e()()(),i(155,"tr")(156,"td"),t(157,"suiHidden"),e(),i(158,"td"),t(159," Prevent a message from displaying. "),e(),i(160,"td")(161,"div",8),t(162," boolean "),e()(),i(163,"td")(164,"div",9),t(165," false "),e()()(),i(166,"tr")(167,"td"),t(168,"suiVisible"),e(),i(169,"td"),t(170," Present the message to the display "),e(),i(171,"td")(172,"div",8),t(173," boolean "),e()(),i(174,"td")(175,"div",9),t(176," false "),e()()(),i(177,"tr")(178,"td"),t(179,"suiFloating"),e(),i(180,"td"),t(181," Determine whether or not a message will float over the content it is related to "),e(),i(182,"td")(183,"div",8),t(184," boolean "),e()(),i(185,"td")(186,"div",9),t(187," false "),e()()(),i(188,"tr")(189,"td"),t(190,"suiCompact"),e(),i(191,"td"),t(192," Setup the message to take up just as much space as its content "),e(),i(193,"td")(194,"div",8),t(195," boolean "),e()(),i(196,"td")(197,"div",9),t(198," false "),e()()()()(),o(199,"br"),i(200,"h2",2),t(201,"suiMessageHeader"),e(),i(202,"h4",4),t(203,"Properties"),e(),i(204,"table",6)(205,"thead")(206,"tr")(207,"th"),t(208,"Property"),e(),i(209,"th"),t(210,"Description"),e(),i(211,"th"),t(212,"Type"),e(),i(213,"th"),t(214,"Default"),e()()(),o(215,"tbody"),i(216,"tfoot",10)(217,"tr")(218,"th",11)(219,"div",12),t(220,"No properties for this directive"),e()()()()(),o(221,"br"),i(222,"h2",2),t(223,"suiMessageContent"),e(),i(224,"h4",4),t(225,"Properties"),e(),i(226,"table",6)(227,"thead")(228,"tr")(229,"th"),t(230,"Property"),e(),i(231,"th"),t(232,"Description"),e(),i(233,"th"),t(234,"Type"),e(),i(235,"th"),t(236,"Default"),e()()(),o(237,"tbody"),i(238,"tfoot",10)(239,"tr")(240,"th",11)(241,"div",12),t(242,"No properties for this directive"),e()()()()(),o(243,"br"),i(244,"h2",2),t(245,"suiMessageList"),e(),i(246,"h4",4),t(247,"Properties"),e(),i(248,"table",6)(249,"thead")(250,"tr")(251,"th"),t(252,"Property"),e(),i(253,"th"),t(254,"Description"),e(),i(255,"th"),t(256,"Type"),e(),i(257,"th"),t(258,"Default"),e()()(),o(259,"tbody"),i(260,"tfoot",10)(261,"tr")(262,"th",11)(263,"div",12),t(264,"No properties for this directive"),e()()()()()())}var Ii=(()=>{class n{constructor(a){this.snippetBasic=Qt,this.snippetList=Zt,this.snippetIcon1=ei,this.snippetIcon2=ti,this.snippetDismissable=ii,this.snippetHidden=ni,this.snippetVisible=ai,this.snippetFloating=ri,this.snippetCompact=oi,this.snippetAttached=li,this.snippettWarning=si,this.snippetInfo=mi,this.snippetSuccess=di,this.snippetError=pi,this.snippetColoured=ci,this.snippetSizes=ui,this.isDefinitionsActive=!0,a.setTitle("Message | Ngx Semantic")}static{this.\u0275fac=function(r){return new(r||n)(T(A))}}static{this.\u0275cmp=d({type:n,selectors:[["doc-messages"]],standalone:!1,decls:3,vars:2,consts:[["header","Message","subHeader","A message displays information that explains nearby content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(r,l){r&1&&(i(0,"doc-page",0),p(1,Sr,100,16,"div",1)(2,hr,265,0,"div",1),e()),r&2&&(s(),m("docPageContent","definition"),s(),m("docPageContent","api"))},dependencies:[H,L,W,P,M,G,k,vi,xi,fi,Si,hi,Fi,gi,bi,Ei,yi,Ci,Di,Mi,_i,Bi,wi],styles:['div[_ngcontent-%COMP%]   [class*="right floated"][_ngcontent-%COMP%]{float:right;margin-right:.25em}']})}}return n})();var Ti=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Store</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var zi=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Store</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var Ni=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Registration</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Ai=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var ki=`<div sui-breadcrumb>
  <span suiBreadcrumbSection>Home</span>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search</div>
</div>
`;var Wi=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search for: <a href="#">paper towels</a></div>
</div>
`;var Li=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Products</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Paper Towels</div>
</div>
`;var Pi=`<div sui-breadcrumb suiSize='mini'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Hi=`<div sui-breadcrumb suiSize='tiny'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Gi=`<div sui-breadcrumb suiSize='small'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Ri=`<div sui-breadcrumb suiSize='large'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Oi=`<div sui-breadcrumb suiSize='big'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var qi=`<div sui-breadcrumb suiSize='huge'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Vi=`<div sui-breadcrumb suiSize='massive'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var E=(()=>{class n extends X{constructor(){let a=U(j);super(a),this.suiIcon=""}get classes(){return[this.getIcon(),"divider"].join(" ")}getIcon(){return this.suiIcon?`${this.suiIcon} icon`:this.suiIcon}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275dir=Y({type:n,selectors:[["","suiBreadcrumbDivider",""]],inputs:{suiIcon:"suiIcon"},exportAs:["suiBreadcrumbDivider"],features:[u]})}}return n})(),y=(()=>{class n extends X{constructor(){let a=U(j);super(a),this.suiActive=!1}get classes(){return[this.getActive(),"section"].join(" ")}getActive(){return this.suiActive?"active":""}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275dir=Y({type:n,selectors:[["","suiBreadcrumbSection",""]],inputs:{suiActive:"suiActive"},exportAs:["suiBreadcrumbSection"],features:[u]})}}return te([ne()],n.prototype,"suiActive",void 0),n})(),C=(()=>{class n extends X{constructor(){let a=U(j);super(a),this.suiSize=null}get classes(){return["ui",this.suiSize,"breadcrumb"].join(" ")}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275dir=Y({type:n,selectors:[["","sui-breadcrumb",""]],inputs:{suiSize:"suiSize"},exportAs:["suiBreadcrumb"],features:[u]})}}return n})(),Ui=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=z({type:n})}static{this.\u0275inj=I({imports:[J]})}}return n})();var ji=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-std-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"a",1),t(6,"Store"),e(),i(7,"div",2),t(8," /"),e(),i(9,"div",3),t(10,"T-Shirt"),e()())},dependencies:[E,y,C],encapsulation:2})}}return n})(),Yi=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-std1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiIcon","right angle","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Store"),e(),o(6,"i",2),i(7,"div",3),t(8,"T-Shirt"),e()())},dependencies:[E,y,C],encapsulation:2})}}return n})(),Ji=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-content-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"a",1),t(6,"Registration"),e(),i(7,"div",2),t(8," /"),e(),i(9,"div",3),t(10,"Personal Information"),e()())},dependencies:[E,y,C],encapsulation:2})}}return n})(),Xi=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-content1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),Ki=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-section-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"span",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"div",3),t(6,"Search"),e()())},dependencies:[E,y,C],encapsulation:2})}}return n})(),$i=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-link-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""],["href","#"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),i(3,"div",2),t(4," /"),e(),i(5,"div",3),t(6,"Search for: "),i(7,"a",4),t(8,"paper towels"),e()()())},dependencies:[E,y,C],encapsulation:2})}}return n})(),Qi=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-active-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Products"),e(),i(3,"div",2),t(4," /"),e(),i(5,"div",3),t(6,"Paper Towels"),e()())},dependencies:[E,y,C],encapsulation:2})}}return n})(),Zi=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","mini"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),en=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","tiny"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),tn=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size2-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","small"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),nn=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size3-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","large"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),an=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size4-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","big"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),rn=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size5-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","huge"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})(),on=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb-breadcrumb-size6-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","massive"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(r,l){r&1&&(i(0,"div",0)(1,"a",1),t(2,"Home"),e(),o(3,"i",2),i(4,"a",1),t(5,"Registration"),e(),o(6,"i",3),i(7,"div",4),t(8,"Personal Information"),e()())},dependencies:[D,E,y,C],encapsulation:2})}}return n})();function kr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-std-example")}function Wr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-std1-example")}function Lr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-content-example")}function Pr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-content1-example")}function Hr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-section-example")}function Gr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-link-example")}function Rr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-active-example")}function Or(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size-example")}function qr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size1-example")}function Vr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size2-example")}function Ur(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size3-example")}function jr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size4-example")}function Yr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size5-example")}function Jr(n,c){n&1&&o(0,"doc-breadcrumb-breadcrumb-size6-example")}function Xr(n,c){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Breadcrumb"),e(),i(6,"p"),t(7,"A standard breadcrumb"),e(),p(8,kr,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),p(10,Wr,1,0,"ng-template",5),e(),o(11,"br"),i(12,"h2",2),t(13,"Content"),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Divider"),e(),i(17,"p"),t(18,"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text"),e(),p(19,Lr,1,0,"ng-template",5),e(),i(20,"doc-code-sample",3),p(21,Pr,1,0,"ng-template",5),e(),i(22,"doc-code-sample",3)(23,"h3",4),t(24,"Section"),e(),i(25,"p"),t(26,"A breadcrumb can contain sections that can either be formatted as a link or text"),e(),p(27,Hr,1,0,"ng-template",5),e(),i(28,"doc-code-sample",3)(29,"h3",4),t(30,"Link"),e(),i(31,"p"),t(32,"A section may be linkable or contain a link"),e(),p(33,Gr,1,0,"ng-template",5),e(),o(34,"br"),i(35,"h2",2),t(36,"States"),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Active"),e(),i(40,"p"),t(41,"A section can be active"),e(),p(42,Rr,1,0,"ng-template",5),e(),o(43,"br"),i(44,"h2",2),t(45,"Variations"),e(),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Size"),e(),i(49,"p"),t(50,"A breadcrumb can vary in size"),e(),p(51,Or,1,0,"ng-template",5),e(),i(52,"doc-code-sample",3),p(53,qr,1,0,"ng-template",5),e(),i(54,"doc-code-sample",3),p(55,Vr,1,0,"ng-template",5),e(),i(56,"doc-code-sample",3),p(57,Ur,1,0,"ng-template",5),e(),i(58,"doc-code-sample",3),p(59,jr,1,0,"ng-template",5),e(),i(60,"doc-code-sample",3),p(61,Yr,1,0,"ng-template",5),e(),i(62,"doc-code-sample",3),p(63,Jr,1,0,"ng-template",5),e()()),n&2){let a=N();s(3),m("templateCode",a.snippetStd),s(6),m("templateCode",a.snippetStd1),s(5),m("templateCode",a.snippetContent1),s(6),m("templateCode",a.snippetContent2),s(2),m("templateCode",a.snippetSection),s(6),m("templateCode",a.snippetLink),s(9),m("templateCode",a.snippetActive),s(9),m("templateCode",a.snippetSize),s(6),m("templateCode",a.snippetSize1),s(2),m("templateCode",a.snippetSize2),s(2),m("templateCode",a.snippetSize3),s(2),m("templateCode",a.snippetSize4),s(2),m("templateCode",a.snippetSize5),s(2),m("templateCode",a.snippetSize6)}}function Kr(n,c){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-breadcrumb"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiSize"),e(),i(20,"td"),t(21,"Set the breadcrumb size. Allowed values could be "),i(22,"span",7),t(23,"mini"),e(),t(24," | "),i(25,"span",7),t(26,"tiny"),e(),t(27," | "),i(28,"span",7),t(29,"small"),e(),t(30," | "),i(31,"span",7),t(32,"medium"),e(),t(33," | "),i(34,"span",7),t(35,"big"),e(),t(36," | "),i(37,"span",7),t(38,"huge"),e(),t(39," | "),i(40,"span",7),t(41,"massive"),e(),t(42," | "),i(43,"span",7),t(44,"null"),e()(),i(45,"td")(46,"div",8),t(47," string "),e()(),i(48,"td")(49,"div",9),t(50," null "),e()()()()(),o(51,"br"),i(52,"h2",2),t(53,"suiBreadcrumbDivider"),e(),i(54,"h4",4),t(55,"Properties"),e(),i(56,"table",6)(57,"thead")(58,"tr")(59,"th"),t(60,"Property"),e(),i(61,"th"),t(62,"Description"),e(),i(63,"th"),t(64,"Type"),e(),i(65,"th"),t(66,"Default"),e()()(),i(67,"tbody")(68,"tr")(69,"td"),t(70,"suiIcon"),e(),i(71,"td"),t(72," Determine the icon to be used as the divider "),e(),i(73,"td")(74,"div",8),t(75," string "),e()(),i(76,"td")(77,"div",9),t(78," '' "),e()()()()(),o(79,"br"),i(80,"h2",2),t(81,"suiBreadcrumbSection"),e(),i(82,"h4",4),t(83,"Properties"),e(),i(84,"table",6)(85,"thead")(86,"tr")(87,"th"),t(88,"Property"),e(),i(89,"th"),t(90,"Description"),e(),i(91,"th"),t(92,"Type"),e(),i(93,"th"),t(94,"Default"),e()()(),i(95,"tbody")(96,"tr")(97,"td"),t(98,"suiActive"),e(),i(99,"td"),t(100," Determine whether or not the breadcrumb section is active "),e(),i(101,"td")(102,"div",8),t(103," boolean "),e()(),i(104,"td")(105,"div",9),t(106," false "),e()()()()()())}var ln=(()=>{class n{constructor(a){this.snippetStd=Ti,this.snippetStd1=zi,this.snippetContent1=Ni,this.snippetContent2=Ai,this.snippetSection=ki,this.snippetLink=Wi,this.snippetActive=Li,this.snippetSize=Pi,this.snippetSize1=Hi,this.snippetSize2=Gi,this.snippetSize3=Ri,this.snippetSize4=Oi,this.snippetSize5=qi,this.snippetSize6=Vi,a.setTitle("Breadcrumb | Ngx Semantic")}static{this.\u0275fac=function(r){return new(r||n)(T(A))}}static{this.\u0275cmp=d({type:n,selectors:[["doc-breadcrumb"]],standalone:!1,decls:3,vars:2,consts:[["header","Breadcrumb","subHeader","A breadcrumb is used to show hierarchy between content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(r,l){r&1&&(i(0,"doc-page",0),p(1,Xr,64,14,"div",1)(2,Kr,107,0,"div",1),e()),r&2&&(s(),m("docPageContent","definition"),s(),m("docPageContent","api"))},dependencies:[H,L,W,P,M,G,k,ji,Yi,Ji,Xi,Ki,$i,Qi,Zi,en,tn,nn,an,rn,on],encapsulation:2})}}return n})();var $r=[{path:"messages",component:Ii},{path:"breadcrumb",component:ln},{path:"grid",component:Xt},{path:"form",component:Jt},{path:"menu",component:Kt},{path:"table",component:$t}],sn=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=z({type:n})}static{this.\u0275inj=I({imports:[Q.forChild($r),Q]})}}return n})();var zm=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=z({type:n})}static{this.\u0275inj=I({imports:[J,pe,se,fe,ae,oe,ue,sn,Ui,ce,re,Se,ve,le,xe]})}}return n})();export{zm as CollectionsModule};
