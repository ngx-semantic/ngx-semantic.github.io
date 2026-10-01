import{a as $,b as et}from"./chunk-7VSZDAOM.js";import{a as ie,b as je,e as Ye,f as Xe,g as $e,h as Ke,i as ne,j as Qe}from"./chunk-2HLRGEM6.js";import{d as de,f as re,i as me,m as Le,n as He,o as Ve,p as E,q as _,r as f,t as Ze}from"./chunk-W6MYVGP4.js";import{a as h,b as K,c as Y,d as be,e as qe,f as D,g as Fe,h as X,i as ye,j as Oe,k as A,m as Ue}from"./chunk-DR4HYFGY.js";import{A as q,B as O,C as U,D as j,E as I,F as Je,a as ge,b,c as y,d as Q,e as Ge,f as Be,h as M,i as Ne,l as P,n as We,o as w,p as T,q as B,r as Re,w as z,x as ze}from"./chunk-QBLBVBYM.js";import{b as Ae,d as Ce,h as ke,j as k,l as Pe}from"./chunk-NBCTIWWJ.js";import{Ab as Ie,Ca as p,Da as te,Ea as he,Ga as c,Ha as u,M as ee,Q as xe,Ta as we,Ua as Te,Va as o,Wa as i,Xa as t,Ya as r,ac as Ee,da as v,db as x,fa as Se,fb as H,fc as V,g as _e,qa as m,rb as e,sb as fe,wa as L}from"./chunk-LQ7F2QM7.js";import"./chunk-HHHS5ZAZ.js";var tt=`<form sui-form>
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
`;var it=`<form sui-form>
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
`;var nt=`<div sui-form>
  <div suiFormField>
    <label>User Input</label>
    <input type="text">
  </div>
</div>
`;var lt=`<div sui-form>
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
`;var at=`<div sui-form>
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
`;var dt=`<div sui-form>
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
`;var rt=`<div sui-form>
  <div suiFormField>
    <label>Text</label>
    <textarea></textarea>
  </div>
  <div suiFormField>
    <label>Short Text</label>
    <textarea rows="2"></textarea>
  </div>
</div>
`;var mt=`<div sui-form>
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
`;var ot=`<div sui-form>
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
`;var st=`<div sui-form>
  <div suiFormField>
    <label>Gender</label>
    <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
  </div>
</div>
`;var pt=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiSearch suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var ut=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiMultiple suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var ct=`<div sui-form>
  <div suiFormField>
    <select>
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
  </div>
</div>
`;var vt=`<div sui-form>
  <div sui-message>
    <div class="header">We had some issues</div>
    <ul class="list">
      <li>Please enter your first name</li>
      <li>Please enter your last name</li>
    </ul>
  </div>
</div>
`;var xt=`<div sui-form suiLoading>
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-button>Submit</div>
</div>
`;var St=`<div sui-form suiState="success">
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
`;var ht=`<div sui-form suiState="error">
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
`;var ft=`<div sui-form suiState="warning">
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
`;var Et=`<div sui-form>
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
`;var gt=`<div sui-form>
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
`;var bt=`<div sui-form>
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
`;var yt=`<div sui-form suiSize="mini">
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
`;var Ct=`<div sui-form suiSize="tiny">
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
`;var Ft=`<div sui-form suiSize="small">
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
`;var Dt=`<div sui-form suiSize="large">
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
`;var Mt=`<div sui-form suiSize="big">
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
`;var _t=`<div sui-form suiSize="huge">
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
`;var wt=`<div sui-form suiSize="massive">
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
`;var Tt=`<div sui-form suiEqualWidth>
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
`;var It=`<div sui-segment suiInverted>
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
`;var At=`<div sui-form>
  <div suiFormField suiInline>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
</div>
`;var kt=`<div sui-form>
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
`;var Gt=`<div sui-form>
  <div suiFormField suiRequired>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
  <div suiFormField suiInline suiRequired>
    <sui-checkbox>I agree to terms and conditions</sui-checkbox>
  </div>
</div>
`;var Bt=`<div sui-form>
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
`;var Nt=`<div sui-form>
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
`;var Wt=`<div sui-form>
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
`;var Rt=`<div sui-form>
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
`;var Pt=`<div sui-form>
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
`;var g=class{constructor(){this.states=[{text:"Alabama",value:"al"}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Nigeria",value:"ng",flag:"ng"}],this.months=[{text:"January",value:"jan"}],this.cards=[{text:"Visa",value:"visa"}],this.contacts=[{text:"Justen Kitsune",image:{avatar:!0,src:"https://semantic-ui.com/images/avatar/small/stevie.jpg"}}],this.gender=[{text:"Male"},{text:"Female"}]}},Jt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-basic-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-form",""],["suiFormField",""],["type","text","name","first-name","placeholder","First Name"],["type","text","name","last-name","placeholder","Last Name"],["sui-button","","type","submit"]],template:function(a,d){a&1&&(i(0,"form",0)(1,"div",1)(2,"label"),e(3,"First Name"),t(),r(4,"input",2),t(),i(5,"div",1)(6,"label"),e(7,"Last Name"),t(),r(8,"input",3),t(),i(9,"div",1)(10,"sui-checkbox"),e(11,"I agree to the terms and conditions"),t()(),i(12,"button",4),e(13,"Submit"),t()())},dependencies:[me,de,re,E,f,$,A],encapsulation:2})}}return n})(),Lt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-basic-alt-example"]],standalone:!1,features:[c],decls:63,vars:5,consts:[["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],["suiFormFields","","suiWidth","two"],["type","text","name","shipping[first-name]","placeholder","First Name"],["type","text","name","shipping[last-name]","placeholder","Last Name"],["suiFormFields",""],["suiFormField","","suiWidth","twelve"],["type","text","name","shipping[address]","placeholder","Street Address"],["suiFormField","","suiWidth","four"],["type","text","name","shipping[address-2]","placeholder","Apt #"],["suiPlaceholder","State",3,"suiOptions"],["suiPlaceholder","Country",3,"suiOptions"],["suiPlaceholder","Type",3,"suiOptions"],["suiFormField","","suiWidth","seven"],["type","text","name","card[number]","maxlength","16","placeholder","Card #"],["suiFormField","","suiWidth","three"],["type","text","name","card[cvc]","maxlength","3","placeholder","CVC"],["suiFormField","","suiWidth","six"],["suiPlaceholder","Month",3,"suiOptions"],["type","text","name","card[expire-year]","maxlength","4","placeholder","Year"],["suiPlaceholder","Saved Contacts",3,"suiOptions"],["sui-segment",""],["suiType","toggle"],["sui-button","","tabindex","0"]],template:function(a,d){a&1&&(i(0,"form",0)(1,"h4",1),e(2,"Shipping Information"),t(),i(3,"div",2)(4,"label"),e(5,"Name"),t(),i(6,"div",3)(7,"div",2),r(8,"input",4),t(),i(9,"div",2),r(10,"input",5),t()()(),i(11,"div",2)(12,"label"),e(13,"Billing Address"),t(),i(14,"div",6)(15,"div",7),r(16,"input",8),t(),i(17,"div",9),r(18,"input",10),t()()(),i(19,"div",3)(20,"div",2)(21,"label"),e(22,"State"),t(),r(23,"sui-select",11),t(),i(24,"div",2)(25,"label"),e(26,"Country"),t(),r(27,"sui-select",12),t()(),i(28,"h4",1),e(29,"Billing Information"),t(),i(30,"div",2)(31,"label"),e(32,"Card Type"),t(),r(33,"sui-select",13),t(),i(34,"div",6)(35,"div",14)(36,"label"),e(37,"Card Number"),t(),r(38,"input",15),t(),i(39,"div",16)(40,"label"),e(41,"CVC"),t(),r(42,"input",17),t(),i(43,"div",18)(44,"label"),e(45,"Expiration"),t(),i(46,"div",3)(47,"div",2),r(48,"sui-select",19),t(),i(49,"div",2),r(50,"input",20),t()()()(),i(51,"h4",1),e(52,"Receipt"),t(),i(53,"div",2)(54,"label"),e(55,"Send Receipt To:"),t(),r(56,"sui-select",21),t(),i(57,"div",22)(58,"div",2)(59,"sui-checkbox",23),e(60,"Do not include a receipt in the package"),t()()(),i(61,"div",24),e(62,"Submit Order"),t()()),a&2&&(m(23),o("suiOptions",d.states),m(4),o("suiOptions",d.countries),m(6),o("suiOptions",d.cards),m(15),o("suiOptions",d.months),m(8),o("suiOptions",d.contacts))},dependencies:[me,de,re,E,f,_,k,$,A,z,ne],encapsulation:2})}}return n})(),Ht=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-user-input-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-form",""],["suiFormField",""],["type","text"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"User Input"),t(),r(4,"input",2),t()())},dependencies:[E,f],encapsulation:2})}}return n})(),Vt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-fields-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Middle name"),t(),r(9,"input",4),t(),i(10,"div",2)(11,"label"),e(12,"Last name"),t(),r(13,"input",5),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),qt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-fields-width-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","three"],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Middle name"),t(),r(9,"input",4),t(),i(10,"div",2)(11,"label"),e(12,"Last name"),t(),r(13,"input",5),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),Ot=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-fields-inline-example"]],standalone:!1,features:[c],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField","","suiWidth","eight"],["type","text","placeholder","First Name"],["suiFormField","","suiWidth","three"],["type","text","placeholder","Middle Name"],["suiFormField","","suiWidth","five"],["type","text","placeholder","Last Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"Name"),t(),r(5,"input",3),t(),i(6,"div",4),r(7,"input",5),t(),i(8,"div",6),r(9,"input",7),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),Ut=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-text-area-example"]],standalone:!1,features:[c],decls:9,vars:0,consts:[["sui-form",""],["suiFormField",""],["rows","2"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Text"),t(),r(4,"textarea"),t(),i(5,"div",1)(6,"label"),e(7,"Short Text"),t(),r(8,"textarea",2),t()())},dependencies:[E,f],encapsulation:2})}}return n})(),jt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-checkbox-example"]],standalone:!1,features:[c],decls:11,vars:0,consts:[["sui-form",""],["suiFormField","","suiInline",""],["suiType","slider"],["suiType","toggle"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"sui-checkbox"),e(3,"Checkbox"),t()(),i(4,"div",1)(5,"sui-checkbox",2),e(6,"Slider"),t(),r(7,"label"),t(),i(8,"div",1)(9,"sui-checkbox",3),e(10,"Toggle"),t()()())},dependencies:[E,f,$],encapsulation:2})}}return n})(),Yt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-radio-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["suiType","radio"],["suiFormFields","","suiGrouped",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Select your favorite fruit:"),t(),i(4,"div",2)(5,"sui-checkbox",3),e(6,"Apples"),t()(),i(7,"div",2)(8,"sui-checkbox",3),e(9,"Oranges"),t()(),i(10,"div",2)(11,"sui-checkbox",3),e(12,"Pears"),t()(),i(13,"div",2)(14,"sui-checkbox",3),e(15,"Grapefruit"),t()()(),i(16,"div",4)(17,"label"),e(18,"Select your second favorite fruit:"),t(),i(19,"div",2)(20,"sui-checkbox",3),e(21,"Apples"),t()(),i(22,"div",2)(23,"sui-checkbox",3),e(24,"Oranges"),t()(),i(25,"div",2)(26,"sui-checkbox",3),e(27,"Pears"),t()(),i(28,"div",2)(29,"sui-checkbox",3),e(30,"Grapefruit"),t()()()())},dependencies:[E,f,_,$],encapsulation:2})}}return n})(),Xt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-dropdown-example"]],standalone:!1,features:[c],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Gender"),t(),r(4,"sui-select",2),t()()),a&2&&(m(4),o("suiOptions",d.gender))},dependencies:[E,f,ne],encapsulation:2})}}return n})(),$t=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-dropdown-alt-example"]],standalone:!1,features:[c],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiSearch","","suiPlaceholder","Country",3,"suiOptions"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Country"),t(),r(4,"sui-select",2),t()()),a&2&&(m(4),o("suiOptions",d.countries))},dependencies:[E,f,ne],encapsulation:2})}}return n})(),Kt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-multiple-select-example"]],standalone:!1,features:[c],decls:5,vars:1,consts:[["sui-form",""],["suiFormField",""],["suiMultiple","","suiPlaceholder","Country",3,"suiOptions"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Country"),t(),r(4,"sui-select",2),t()()),a&2&&(m(4),o("suiOptions",d.countries))},dependencies:[E,f,ne],encapsulation:2})}}return n})(),Qt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-html-select-example"]],standalone:!1,features:[c],decls:9,vars:0,consts:[["sui-form",""],["suiFormField",""],["value",""],["value","1"],["value","0"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"select")(3,"option",2),e(4,"Gender"),t(),i(5,"option",3),e(6,"Male"),t(),i(7,"option",4),e(8,"Female"),t()()()())},dependencies:[Le,He,E,f],encapsulation:2})}}return n})(),Zt=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-message-example"]],standalone:!1,features:[c],decls:9,vars:0,consts:[["sui-form",""],["sui-message",""],[1,"header"],[1,"list"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),e(3,"We had some issues"),t(),i(4,"ul",3)(5,"li"),e(6,"Please enter your first name"),t(),i(7,"li"),e(8,"Please enter your last name"),t()()()())},dependencies:[f,D],encapsulation:2})}}return n})(),ei=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-loading-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-form","","suiLoading",""],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"E-mail"),t(),r(4,"input",2),t(),i(5,"div",3),e(6,"Submit"),t()())},dependencies:[E,f,A],encapsulation:2})}}return n})(),ti=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-success-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiState","success"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","success"],["suiMessageHeader",""],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"E-mail"),t(),r(4,"input",2),t(),i(5,"div",3)(6,"div",4),e(7,"Form Completed"),t(),i(8,"p"),e(9,"Youre all signed up for the newsletter."),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,D,X,A],encapsulation:2})}}return n})(),ii=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-error-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiState","error"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","error"],["suiMessageHeader",""],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"E-mail"),t(),r(4,"input",2),t(),i(5,"div",3)(6,"div",4),e(7,"Action Forbidden"),t(),i(8,"p"),e(9,"You can only sign up for an account once with a given e-mail address."),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,D,X,A],encapsulation:2})}}return n})(),ni=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-warning-example"]],standalone:!1,features:[c],decls:13,vars:0,consts:[["sui-form","","suiState","warning"],["suiFormField",""],["type","email","placeholder","joe@schmoe.com"],["sui-message","","suiState","warning"],["suiMessageHeader",""],["suiMessageList",""],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"E-mail"),t(),r(4,"input",2),t(),i(5,"div",3)(6,"div",4),e(7,"Action Forbidden"),t(),i(8,"ul",5)(9,"li"),e(10,"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail. "),t()()(),i(11,"div",6),e(12,"Submit"),t()())},dependencies:[E,f,D,X,ye,A],encapsulation:2})}}return n})(),li=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-field-error-example"]],standalone:!1,features:[c],decls:17,vars:1,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField","","suiError",""],["placeholder","First Name","type","text"],["suiFormField",""],["placeholder","Last Name","type","text"],["suiPlaceholder","Gender",3,"suiOptions"],["suiFormField","","suiError","","suiInline",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",4)(7,"label"),e(8,"Last Name"),t(),r(9,"input",5),t()(),i(10,"div",2)(11,"label"),e(12,"Gender"),t(),r(13,"sui-select",6),t(),i(14,"div",7)(15,"sui-checkbox"),e(16," I agree to the Terms and Conditions "),t()()()),a&2&&(m(13),o("suiOptions",d.gender))},dependencies:[E,f,_,$,ne],encapsulation:2})}}return n})(),ai=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-disabled-example"]],standalone:!1,features:[c],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField","","disabled",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),di=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-read-only-example"]],standalone:!1,features:[c],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","Read Only","readonly","","type","text"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",3),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),ri=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-mini-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","mini"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),mi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-tiny-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","tiny"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),oi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-small-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","small"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),si=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-large-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","large"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),pi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-big-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","big"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),ui=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-huge-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","huge"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),ci=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-size-massive-example"]],standalone:!1,features:[c],decls:12,vars:0,consts:[["sui-form","","suiSize","massive"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First Name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Last Name"),t(),r(9,"input",4),t()(),i(10,"div",5),e(11,"Submit"),t()())},dependencies:[E,f,_,A],encapsulation:2})}}return n})(),vi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-equal-width-example"]],standalone:!1,features:[c],decls:23,vars:0,consts:[["sui-form","","suiEqualWidth",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"Username"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Password"),t(),r(9,"input",4),t()(),i(10,"div",1)(11,"div",2)(12,"label"),e(13,"First name"),t(),r(14,"input",5),t(),i(15,"div",2)(16,"label"),e(17,"Middle name"),t(),r(18,"input",6),t(),i(19,"div",2)(20,"label"),e(21,"Last name"),t(),r(22,"input",7),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),xi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-inverted-example"]],standalone:!1,features:[c],decls:16,vars:0,consts:[["sui-segment","","suiInverted",""],["sui-form","","suiInverted",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["suiFormField","","suiInline",""],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e(5,"Username"),t(),r(6,"input",4),t(),i(7,"div",3)(8,"label"),e(9,"Password"),t(),r(10,"input",5),t()(),i(11,"div",6)(12,"sui-checkbox"),e(13,"I agree to terms and conditions"),t()(),i(14,"div",7),e(15,"Submit"),t()()())},dependencies:[E,f,_,$,A,z],encapsulation:2})}}return n})(),Si=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-inline-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-form",""],["suiFormField","","suiInline",""],["type","text","placeholder","Full Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Last name"),t(),r(4,"input",2),t()())},dependencies:[E,f],encapsulation:2})}}return n})(),hi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-width-example"]],standalone:!1,features:[c],decls:28,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField","","suiWidth","six"],["type","text","placeholder","First Name"],["suiFormField","","suiWidth","four"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"],["suiFormField","","suiWidth","two"],["type","text","placeholder","2 Wide"],["suiFormField","","suiWidth","twelve"],["type","text","placeholder","12 Wide"],["suiFormField","","suiWidth","eight"],["type","text","placeholder","8 Wide"],["type","text","placeholder","6 Wide"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First name"),t(),r(5,"input",3),t(),i(6,"div",4)(7,"label"),e(8,"Middle"),t(),r(9,"input",5),t(),i(10,"div",2)(11,"label"),e(12,"Last name"),t(),r(13,"input",6),t()(),i(14,"div",1)(15,"div",7),r(16,"input",8),t(),i(17,"div",9),r(18,"input",10),t(),i(19,"div",7),r(20,"input",8),t()(),i(21,"div",1)(22,"div",11),r(23,"input",12),t(),i(24,"div",2),r(25,"input",13),t(),i(26,"div",7),r(27,"input",8),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),fi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-required-example"]],standalone:!1,features:[c],decls:8,vars:0,consts:[["sui-form",""],["suiFormField","","suiRequired",""],["type","text","placeholder","Full Name"],["suiFormField","","suiInline","","suiRequired",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Last name"),t(),r(4,"input",2),t(),i(5,"div",3)(6,"sui-checkbox"),e(7,"I agree to terms and conditions"),t()()())},dependencies:[E,f,$],encapsulation:2})}}return n})(),Ei=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-evenly-divided-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiWidth","three"],["suiFormField",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"First name"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Middle name"),t(),r(9,"input",4),t(),i(10,"div",2)(11,"label"),e(12,"Last name"),t(),r(13,"input",5),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),gi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-grouped-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"sui-checkbox",3),e(4," Apples "),t()(),i(5,"div",2)(6,"sui-checkbox",3),e(7," Oranges "),t()(),i(8,"div",2)(9,"sui-checkbox",3),e(10," Pears "),t()(),i(11,"div",2)(12,"sui-checkbox",3),e(13," Grapefruit "),t()()()())},dependencies:[E,f,_,$],encapsulation:2})}}return n})(),bi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-equal-width-group-example"]],standalone:!1,features:[c],decls:23,vars:0,consts:[["sui-form",""],["suiFormFields",""],["suiFormField",""],["type","text","placeholder","Username"],["type","password"],["suiFormFields","","suiEqualWidth",""],["type","text","placeholder","First Name"],["type","text","placeholder","Middle Name"],["type","text","placeholder","Last Name"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),e(4,"Username"),t(),r(5,"input",3),t(),i(6,"div",2)(7,"label"),e(8,"Password"),t(),r(9,"input",4),t()(),i(10,"div",5)(11,"div",2)(12,"label"),e(13,"First name"),t(),r(14,"input",6),t(),i(15,"div",2)(16,"label"),e(17,"Middle name"),t(),r(18,"input",7),t(),i(19,"div",2)(20,"label"),e(21,"Last name"),t(),r(22,"input",8),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),yi=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-inline-group-example"]],standalone:!1,features:[c],decls:10,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["type","text","placeholder","(xxx)"],["type","text","placeholder","xxx"],["type","text","placeholder","xxxx"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Phone Number"),t(),i(4,"div",2),r(5,"input",3),t(),i(6,"div",2),r(7,"input",4),t(),i(8,"div",2),r(9,"input",5),t()()())},dependencies:[E,f,_],encapsulation:2})}}return n})(),Ci=(()=>{class n extends g{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-form-inline-group-alt-example"]],standalone:!1,features:[c],decls:16,vars:0,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"What's your favourite fruit?"),t(),i(4,"div",2)(5,"sui-checkbox",3),e(6," Apples "),t()(),i(7,"div",2)(8,"sui-checkbox",3),e(9," Oranges "),t()(),i(10,"div",2)(11,"sui-checkbox",3),e(12," Pears "),t()(),i(13,"div",2)(14,"sui-checkbox",3),e(15," Grapefruit "),t()()()())},dependencies:[E,f,_,$],encapsulation:2})}}return n})();function $r(n,s){n&1&&r(0,"doc-form-basic-example")}function Kr(n,s){n&1&&r(0,"doc-form-basic-alt-example")}function Qr(n,s){n&1&&r(0,"doc-form-user-input-example")}function Zr(n,s){n&1&&r(0,"doc-form-fields-example")}function em(n,s){n&1&&r(0,"doc-form-fields-width-example")}function tm(n,s){n&1&&r(0,"doc-form-fields-inline-example")}function im(n,s){n&1&&r(0,"doc-form-text-area-example")}function nm(n,s){n&1&&r(0,"doc-form-checkbox-example")}function lm(n,s){n&1&&r(0,"doc-form-radio-example")}function am(n,s){n&1&&r(0,"doc-form-dropdown-example")}function dm(n,s){n&1&&r(0,"doc-form-dropdown-alt-example")}function rm(n,s){n&1&&r(0,"doc-form-multiple-select-example")}function mm(n,s){n&1&&r(0,"doc-form-html-select-example")}function om(n,s){n&1&&r(0,"doc-form-message-example")}function sm(n,s){n&1&&r(0,"doc-form-loading-example")}function pm(n,s){n&1&&r(0,"doc-form-success-example")}function um(n,s){n&1&&r(0,"doc-form-error-example")}function cm(n,s){n&1&&r(0,"doc-form-warning-example")}function vm(n,s){n&1&&r(0,"doc-form-field-error-example")}function xm(n,s){n&1&&r(0,"doc-form-disabled-example")}function Sm(n,s){n&1&&r(0,"doc-form-read-only-example")}function hm(n,s){n&1&&r(0,"doc-form-size-mini-example")}function fm(n,s){n&1&&r(0,"doc-form-size-tiny-example")}function Em(n,s){n&1&&r(0,"doc-form-size-small-example")}function gm(n,s){n&1&&r(0,"doc-form-size-large-example")}function bm(n,s){n&1&&r(0,"doc-form-size-big-example")}function ym(n,s){n&1&&r(0,"doc-form-size-huge-example")}function Cm(n,s){n&1&&r(0,"doc-form-size-massive-example")}function Fm(n,s){n&1&&r(0,"doc-form-equal-width-example")}function Dm(n,s){n&1&&r(0,"doc-form-inverted-example")}function Mm(n,s){n&1&&r(0,"doc-form-inline-example")}function _m(n,s){n&1&&r(0,"doc-form-width-example")}function wm(n,s){n&1&&r(0,"doc-form-required-example")}function Tm(n,s){n&1&&r(0,"doc-form-evenly-divided-example")}function Im(n,s){n&1&&r(0,"doc-form-grouped-example")}function Am(n,s){n&1&&r(0,"doc-form-equal-width-group-example")}function km(n,s){n&1&&r(0,"doc-form-inline-group-example")}function Gm(n,s){n&1&&r(0,"doc-form-inline-group-alt-example")}function Bm(n,s){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Form"),t(),i(6,"p"),e(7,"A form"),t(),u(8,$r,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3),u(10,Kr,1,0,"ng-template",5),t(),r(11,"br"),i(12,"h2",2),e(13,"Content"),t(),i(14,"doc-code-sample",3)(15,"h3",4),e(16,"Field"),t(),i(17,"p"),e(18,"A field is a form element containing a label and an input"),t(),u(19,Qr,1,0,"ng-template",5),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22,"Fields"),t(),i(23,"p"),e(24,"A set of fields can appear grouped together"),t(),i(25,"div",6),e(26," Field groups automatically receive responsive styling, swapping to one field per row on mobile devices. "),t(),u(27,Zr,1,0,"ng-template",5),t(),i(28,"doc-code-sample",3),u(29,em,1,0,"ng-template",5),t(),i(30,"doc-code-sample",3),u(31,tm,1,0,"ng-template",5),t(),i(32,"doc-code-sample",3)(33,"h3",4),e(34,"Text Area"),t(),i(35,"p"),e(36,"A textarea can be used to allow for extended user input."),t(),i(37,"div",7),e(38," To specify an approximate text area size use the rows attribute. "),t(),u(39,im,1,0,"ng-template",5),t(),i(40,"doc-code-sample",3)(41,"h3",4),e(42,"Checkbox"),t(),i(43,"p"),e(44,"A form can contain a "),i(45,"a",8),e(46,"checkbox"),t()(),i(47,"div",7),e(48," UI checkbox are special, styled versions of standard HTML checkboxes "),t(),u(49,nm,1,0,"ng-template",5),t(),i(50,"doc-code-sample",3)(51,"h3",4),e(52,"Radio Checkbox"),t(),i(53,"p"),e(54,"A form can contain a "),i(55,"a",8),e(56,"radio checkbox"),t()(),u(57,lm,1,0,"ng-template",5),t(),i(58,"doc-code-sample",3)(59,"h3",4),e(60,"Dropdown"),t(),i(61,"p"),e(62,"A form can contain a "),i(63,"a",9),e(64,"dropdown"),t()(),u(65,am,1,0,"ng-template",5),t(),i(66,"doc-code-sample",3),u(67,dm,1,0,"ng-template",5),t(),i(68,"doc-code-sample",3)(69,"h3",4),e(70,"Multiple Select"),t(),i(71,"p"),e(72,"A multiple select is used to include several choices with one form field"),t(),u(73,rm,1,0,"ng-template",5),t(),i(74,"doc-code-sample",3)(75,"h3",4),e(76,"HTML Select"),t(),i(77,"p"),e(78,"A multiple select is used to include several choices with one form field"),t(),u(79,mm,1,0,"ng-template",5),t(),i(80,"doc-code-sample",3)(81,"h3",4),e(82,"Message"),t(),i(83,"p"),e(84,"A form can contain a "),i(85,"a",10),e(86,"message"),t()(),i(87,"div",7),e(88," Any "),i(89,"code"),e(90,"info"),t(),e(91,", "),i(92,"code"),e(93,"error"),t(),e(94,", "),i(95,"code"),e(96,"success"),t(),e(97,", or "),i(98,"code"),e(99,"warning"),t(),e(100," message blocks found inside a form are hidden by default. "),t(),u(101,om,1,0,"ng-template",5),t(),r(102,"br"),i(103,"h2",2),e(104,"State"),t(),i(105,"doc-code-sample",3)(106,"h3",4),e(107,"Loading"),t(),i(108,"p"),e(109,"If a form is in loading state, it will automatically show a loading indicator."),t(),u(110,sm,1,0,"ng-template",5),t(),i(111,"doc-code-sample",3)(112,"h3",4),e(113,"Success"),t(),i(114,"p"),e(115,"If a form is in an success state, it will automatically show any success message blocks."),t(),u(116,pm,1,0,"ng-template",5),t(),i(117,"doc-code-sample",3)(118,"h3",4),e(119,"Error"),t(),i(120,"p"),e(121,"If a form is in an error state, it will automatically show any error message blocks."),t(),u(122,um,1,0,"ng-template",5),t(),i(123,"doc-code-sample",3)(124,"h3",4),e(125,"Warning"),t(),i(126,"p"),e(127,"If a form is in warning state, it will automatically show any warning message block."),t(),u(128,cm,1,0,"ng-template",5),t(),i(129,"doc-code-sample",3)(130,"h3",4),e(131,"Field Error"),t(),i(132,"p"),e(133,"Individual fields may display an error state"),t(),u(134,vm,1,0,"ng-template",5),t(),i(135,"doc-code-sample",3)(136,"h3",4),e(137,"Disabled Field"),t(),i(138,"p"),e(139,"Individual fields may be disabled"),t(),u(140,xm,1,0,"ng-template",5),t(),i(141,"doc-code-sample",3)(142,"h3",4),e(143,"Read-Only Field"),t(),i(144,"p"),e(145,"Individual fields may be read only"),t(),u(146,Sm,1,0,"ng-template",5),t(),r(147,"br"),i(148,"h2",2),e(149,"Form Variations"),t(),i(150,"doc-code-sample",3)(151,"h3",4),e(152,"Size"),t(),i(153,"p"),e(154,"A form can vary in size"),t(),u(155,hm,1,0,"ng-template",5),t(),i(156,"doc-code-sample",3),u(157,fm,1,0,"ng-template",5),t(),i(158,"doc-code-sample",3),u(159,Em,1,0,"ng-template",5),t(),i(160,"doc-code-sample",3),u(161,gm,1,0,"ng-template",5),t(),i(162,"doc-code-sample",3),u(163,bm,1,0,"ng-template",5),t(),i(164,"doc-code-sample",3),u(165,ym,1,0,"ng-template",5),t(),i(166,"doc-code-sample",3),u(167,Cm,1,0,"ng-template",5),t(),i(168,"doc-code-sample",3)(169,"h3",4),e(170,"Equal Width Form"),t(),i(171,"p"),e(172,"Forms can automatically divide fields to be equal width"),t(),u(173,Fm,1,0,"ng-template",5),t(),i(174,"doc-code-sample",3)(175,"h3",4),e(176,"Inverted"),t(),i(177,"p"),e(178,"A form on a dark background may have to invert its colour scheme"),t(),u(179,Dm,1,0,"ng-template",5),t(),r(180,"br"),i(181,"h2",2),e(182,"Field Variations"),t(),i(183,"doc-code-sample",3)(184,"h3",4),e(185,"Inline Field"),t(),i(186,"p"),e(187,"A field can have its label next to instead of above it."),t(),u(188,Mm,1,0,"ng-template",5),t(),i(189,"doc-code-sample",3)(190,"h3",4),e(191,"Width"),t(),i(192,"p"),e(193,"A field can specify its width in grid columns"),t(),u(194,_m,1,0,"ng-template",5),t(),i(195,"doc-code-sample",3)(196,"h3",4),e(197,"Required"),t(),i(198,"p"),e(199,"A field can show that input is mandatory"),t(),u(200,wm,1,0,"ng-template",5),t(),r(201,"br"),i(202,"h2",2),e(203,"Group Variations"),t(),i(204,"doc-code-sample",3)(205,"h3",4),e(206,"Evenly Divided"),t(),i(207,"p"),e(208,"Fields can have their widths divided evenly."),t(),u(209,Tm,1,0,"ng-template",5),t(),i(210,"doc-code-sample",3)(211,"h3",4),e(212,"Grouped Fields"),t(),i(213,"p"),e(214,"Fields can show related choices."),t(),u(215,Im,1,0,"ng-template",5),t(),i(216,"doc-code-sample",3)(217,"h3",4),e(218,"Equal Width Fields"),t(),i(219,"p"),e(220,"Fields can automatically divide fields to be equal width."),t(),u(221,Am,1,0,"ng-template",5),t(),i(222,"doc-code-sample",3)(223,"h3",4),e(224,"Inline Fields"),t(),i(225,"p"),e(226,"Multiple fields may be inline in a row."),t(),u(227,km,1,0,"ng-template",5),t(),i(228,"doc-code-sample",3),u(229,Gm,1,0,"ng-template",5),t()()),n&2){let l=H();m(3),o("templateCode",l.snippetBasic),m(6),o("templateCode",l.snippetBasicAlt),m(5),o("templateCode",l.snippetUserInput),m(6),o("templateCode",l.snippetFields),m(8),o("templateCode",l.snippetFieldsWidth),m(2),o("templateCode",l.snippetFieldsInline),m(2),o("templateCode",l.snippetTextArea),m(8),o("templateCode",l.snippetCheckbox),m(10),o("templateCode",l.snippetRadio),m(8),o("templateCode",l.snippetDropdown),m(8),o("templateCode",l.snippetDropdownAlt),m(2),o("templateCode",l.snippetMultipleSelect),m(6),o("templateCode",l.snippetHtmlSelect),m(6),o("templateCode",l.snippetMessage),m(25),o("templateCode",l.snippetLoading),m(6),o("templateCode",l.snippetSuccess),m(6),o("templateCode",l.snippetError),m(6),o("templateCode",l.snippetWarning),m(6),o("templateCode",l.snippetFieldError),m(6),o("templateCode",l.snippetDisabled),m(6),o("templateCode",l.snippetReadOnly),m(9),o("templateCode",l.snippetSizeMini),m(6),o("templateCode",l.snippetSizeTiny),m(2),o("templateCode",l.snippetSizeSmall),m(2),o("templateCode",l.snippetSizeLarge),m(2),o("templateCode",l.snippetSizeBig),m(2),o("templateCode",l.snippetSizeHuge),m(2),o("templateCode",l.snippetSizeMassive),m(2),o("templateCode",l.snippetEqualWidth),m(6),o("templateCode",l.snippetInverted),m(9),o("templateCode",l.snippetInline),m(6),o("templateCode",l.snippetWidth),m(6),o("templateCode",l.snippetRequired),m(9),o("templateCode",l.snippetEvenlyDivided),m(6),o("templateCode",l.snippetGrouped),m(6),o("templateCode",l.snippetEqualWidthGroup),m(6),o("templateCode",l.snippetInlineGroup),m(6),o("templateCode",l.snippetInlineGroupAlt)}}function Nm(n,s){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-form"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",11)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiState"),t(),i(20,"td"),e(21,"Set the form state. Allowed values could be "),i(22,"span",12),e(23,"success"),t(),e(24," | "),i(25,"span",12),e(26,"warning"),t(),e(27," | "),i(28,"span",12),e(29,"error"),t(),e(30," | "),i(31,"span",12),e(32,"null"),t()(),i(33,"td")(34,"div",13),e(35," string "),t()(),i(36,"td")(37,"div",14),e(38," null "),t()()(),i(39,"tr")(40,"td"),e(41,"suiSize"),t(),i(42,"td"),e(43,"Set the form size. Allowed values could be "),i(44,"span",12),e(45,"mini"),t(),e(46," | "),i(47,"span",12),e(48,"tiny"),t(),e(49," | "),i(50,"span",12),e(51,"small"),t(),e(52," | "),i(53,"span",12),e(54,"medium"),t(),e(55," | "),i(56,"span",12),e(57,"big"),t(),e(58," | "),i(59,"span",12),e(60,"huge"),t(),e(61," | "),i(62,"span",12),e(63,"massive"),t(),e(64," | "),i(65,"span",12),e(66,"null"),t()(),i(67,"td")(68,"div",13),e(69," string "),t()(),i(70,"td")(71,"div",14),e(72," null "),t()()(),i(73,"tr")(74,"td"),e(75,"suiLoading"),t(),i(76,"td"),e(77,"Whether or not the form is a loading state. "),t(),i(78,"td")(79,"div",13),e(80," boolean "),t()(),i(81,"td")(82,"div",14),e(83," false "),t()()(),i(84,"tr")(85,"td"),e(86,"suiEqualWidth"),t(),i(87,"td"),e(88,"Whether or not the form fields are of equal width. "),t(),i(89,"td")(90,"div",13),e(91," boolean "),t()(),i(92,"td")(93,"div",14),e(94," false "),t()()(),i(95,"tr")(96,"td"),e(97,"suiInverted"),t(),i(98,"td"),e(99,"Whether or not the form has inverted colours. "),t(),i(100,"td")(101,"div",13),e(102," boolean "),t()(),i(103,"td")(104,"div",14),e(105," false "),t()()()()(),r(106,"br"),i(107,"h2",2),e(108,"suiFormFields"),t(),i(109,"h4",4),e(110,"Properties"),t(),i(111,"table",11)(112,"thead")(113,"tr")(114,"th"),e(115,"Property"),t(),i(116,"th"),e(117,"Description"),t(),i(118,"th"),e(119,"Type"),t(),i(120,"th"),e(121,"Default"),t()()(),i(122,"tbody")(123,"tr")(124,"td"),e(125,"suiWidth"),t(),i(126,"td"),e(127,"Set the fields width. Allowed values could be "),i(128,"span",12),e(129,"one"),t(),e(130," | "),i(131,"span",12),e(132,"two"),t(),e(133," | "),i(134,"span",12),e(135,"three"),t(),e(136," | "),i(137,"span",12),e(138,"four"),t(),e(139," | "),i(140,"span",12),e(141,"five"),t(),e(142," | "),i(143,"span",12),e(144,"six"),t(),e(145," | "),i(146,"span",12),e(147,"seven"),t(),e(148," | "),i(149,"span",12),e(150,"eight"),t(),e(151," | "),i(152,"span",12),e(153,"nine"),t(),e(154," | "),i(155,"span",12),e(156,"ten"),t(),e(157," | "),i(158,"span",12),e(159,"eleven"),t(),e(160," | "),i(161,"span",12),e(162,"twelve"),t(),e(163," | "),i(164,"span",12),e(165,"thirteen"),t(),e(166," | "),i(167,"span",12),e(168,"fourteen"),t(),e(169,"| "),i(170,"span",12),e(171,"fifteen"),t(),e(172," | "),i(173,"span",12),e(174,"sixteen"),t(),e(175," | "),i(176,"span",12),e(177,"null"),t()(),i(178,"td")(179,"div",13),e(180," string"),t()(),i(181,"td")(182,"div",14),e(183," null"),t()()(),i(184,"tr")(185,"td"),e(186,"suiInline"),t(),i(187,"td"),e(188," Determine whether or not the field group is inline "),t(),i(189,"td")(190,"div",13),e(191," boolean "),t()(),i(192,"td")(193,"div",14),e(194," false "),t()()(),i(195,"tr")(196,"td"),e(197,"suiGrouped"),t(),i(198,"td"),e(199," Determine whether or not the fields are grouped "),t(),i(200,"td")(201,"div",13),e(202," boolean "),t()(),i(203,"td")(204,"div",14),e(205," false "),t()()(),i(206,"tr")(207,"td"),e(208,"suiEqualWidth"),t(),i(209,"td"),e(210," Determine whether or not the field contents are equal width "),t(),i(211,"td")(212,"div",13),e(213," boolean "),t()(),i(214,"td")(215,"div",14),e(216," false "),t()()()()(),r(217,"br"),i(218,"h2",2),e(219,"suiFormField"),t(),i(220,"h4",4),e(221,"Properties"),t(),i(222,"table",11)(223,"thead")(224,"tr")(225,"th"),e(226,"Property"),t(),i(227,"th"),e(228,"Description"),t(),i(229,"th"),e(230,"Type"),t(),i(231,"th"),e(232,"Default"),t()()(),i(233,"tbody")(234,"tr")(235,"td"),e(236,"suiWidth"),t(),i(237,"td"),e(238,"Set the fields width. Allowed values could be "),i(239,"span",12),e(240,"one"),t(),e(241," | "),i(242,"span",12),e(243,"two"),t(),e(244," | "),i(245,"span",12),e(246,"three"),t(),e(247," | "),i(248,"span",12),e(249,"four"),t(),e(250," | "),i(251,"span",12),e(252,"five"),t(),e(253," | "),i(254,"span",12),e(255,"six"),t(),e(256," | "),i(257,"span",12),e(258,"seven"),t(),e(259," | "),i(260,"span",12),e(261,"eight"),t(),e(262," | "),i(263,"span",12),e(264,"nine"),t(),e(265," | "),i(266,"span",12),e(267,"ten"),t(),e(268," | "),i(269,"span",12),e(270,"eleven"),t(),e(271," | "),i(272,"span",12),e(273,"twelve"),t(),e(274," | "),i(275,"span",12),e(276,"thirteen"),t(),e(277," | "),i(278,"span",12),e(279,"fourteen"),t(),e(280,"| "),i(281,"span",12),e(282,"fifteen"),t(),e(283," | "),i(284,"span",12),e(285,"sixteen"),t(),e(286," | "),i(287,"span",12),e(288,"null"),t()(),i(289,"td")(290,"div",13),e(291," string"),t()(),i(292,"td")(293,"div",14),e(294," null"),t()()(),i(295,"tr")(296,"td"),e(297,"suiError"),t(),i(298,"td"),e(299," Determine whether or not the field is in an error state "),t(),i(300,"td")(301,"div",13),e(302," boolean "),t()(),i(303,"td")(304,"div",14),e(305," false "),t()()(),i(306,"tr")(307,"td"),e(308,"suiInline"),t(),i(309,"td"),e(310," Determine whether or not the field is inline "),t(),i(311,"td")(312,"div",13),e(313," boolean "),t()(),i(314,"td")(315,"div",14),e(316," false "),t()()(),i(317,"tr")(318,"td"),e(319,"disabled"),t(),i(320,"td"),e(321," Determine whether or not the field is disabled "),t(),i(322,"td")(323,"div",13),e(324," boolean "),t()(),i(325,"td")(326,"div",14),e(327," false "),t()()(),i(328,"tr")(329,"td"),e(330,"suiRequired"),t(),i(331,"td"),e(332," Determine whether or not the field is required "),t(),i(333,"td")(334,"div",13),e(335," boolean "),t()(),i(336,"td")(337,"div",14),e(338," false "),t()()()()()())}var Fi=(()=>{class n{constructor(l){this.snippetBasic=tt,this.snippetBasicAlt=it,this.snippetUserInput=nt,this.snippetFields=lt,this.snippetFieldsWidth=at,this.snippetFieldsInline=dt,this.snippetTextArea=rt,this.snippetCheckbox=mt,this.snippetRadio=ot,this.snippetDropdown=st,this.snippetDropdownAlt=pt,this.snippetMultipleSelect=ut,this.snippetHtmlSelect=ct,this.snippetMessage=vt,this.snippetLoading=xt,this.snippetSuccess=St,this.snippetError=ht,this.snippetWarning=ft,this.snippetFieldError=Et,this.snippetDisabled=gt,this.snippetReadOnly=bt,this.snippetSizeMini=yt,this.snippetSizeTiny=Ct,this.snippetSizeSmall=Ft,this.snippetSizeLarge=Dt,this.snippetSizeBig=Mt,this.snippetSizeHuge=_t,this.snippetSizeMassive=wt,this.snippetEqualWidth=Tt,this.snippetInverted=It,this.snippetInline=At,this.snippetWidth=kt,this.snippetRequired=Gt,this.snippetEvenlyDivided=Bt,this.snippetGrouped=Nt,this.snippetEqualWidthGroup=Wt,this.snippetInlineGroup=Rt,this.snippetInlineGroupAlt=Pt,this.states=[{text:"Alabama",value:"al"}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Nigeria",value:"ng",flag:"ng"}],this.months=[{text:"January",value:"jan"}],this.cards=[{text:"Visa",value:"visa"}],this.contacts=[{text:"Justen Kitsune",image:{avatar:!0,src:"https://semantic-ui.com/images/avatar/small/stevie.jpg"}}],this.gender=[{text:"Male"},{text:"Female"}],l.setTitle("Form | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(V))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-form"]],standalone:!1,decls:3,vars:2,consts:[["header","Form","subHeader","A form displays a set of related user input fields in a structured way"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-message","","suiState","success"],["sui-message","","suiState","info"],["routerLink","/modules/checkbox"],["routerLink","/modules/dropdown"],["routerLink","/collections/message"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,d){a&1&&(i(0,"doc-page",0),u(1,Bm,230,38,"div",1)(2,Nm,339,0,"div",1),t()),a&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,O,q,U,k,D,Ae,h,P,Jt,Lt,Ht,Vt,qt,Ot,Ut,jt,Yt,Xt,$t,Kt,Qt,Zt,ei,ti,ii,ni,li,ai,di,ri,mi,oi,si,pi,ui,ci,vi,xi,Si,hi,fi,Ei,gi,bi,yi,Ci],encapsulation:2})}}return n})();var Di=`<div sui-grid>
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
`;var Mi=`<div sui-grid
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
`;var _i=`<div sui-grid
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
`;var wi=`<div sui-grid
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
`;var Ti=`<div sui-grid
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
`;var Ii=`<div sui-grid
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
`;var Ai=`<div sui-grid>
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
`;var ki=`<div sui-grid
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
`;var Gi=`<div sui-grid>
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
`;var Bi=`<div sui-grid>
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
`;var Ni=`<div sui-grid
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
`;var Wi=`<div sui-grid
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
`;var Ri=`<p>The following grid has vertical and horizontal gutters.</p>
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
`;var Pi=`<div sui-grid
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
`;var zi=`<div sui-grid
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
`;var Ji=`<div sui-grid
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
`;var Li=`<div sui-grid
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
`;var Hi=`<div sui-grid
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
`;var Vi=`<div sui-grid
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
`;var qi=`<div sui-grid
     suiStackable
     suiWidth="two">
  <div suiGridColumn>
    <div sui-segment><doc-wireframe type="paragraph"></doc-wireframe></div>
  </div>
  <div suiGridColumn>
    <div sui-segment><doc-wireframe type="paragraph"></doc-wireframe></div>
  </div>
</div>
`;var Oi=`<div sui-grid
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
`;var Ui=`<div sui-grid>
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
`;var ji=`<div sui-grid>
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
`;var ro=()=>["tablet reversed","mobile reversed"],Yi=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-grid-example"]],standalone:!1,decls:17,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiWidth","four"],["type","image"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",1),r(4,"doc-wireframe",2),t(),i(5,"div",1),r(6,"doc-wireframe",2),t(),i(7,"div",1),r(8,"doc-wireframe",2),t(),i(9,"div",1),r(10,"doc-wireframe",2),t(),i(11,"div",1),r(12,"doc-wireframe",2),t(),i(13,"div",1),r(14,"doc-wireframe",2),t(),i(15,"div",1),r(16,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),Xi=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-divided-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-grid","","suiWidth","three","suiDivided","divided"],["suiGridRow",""],["suiGridColumn",""],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t(),i(4,"div",2),r(5,"doc-wireframe",3),t(),i(6,"div",2),r(7,"doc-wireframe",3),t()(),i(8,"div",1)(9,"div",2),r(10,"doc-wireframe",3),t(),i(11,"div",2),r(12,"doc-wireframe",3),t(),i(13,"div",2),r(14,"doc-wireframe",3),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),$i=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-vertically-divided-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-grid","","suiDivided","vertically divided"],["suiGridRow","","suiWidth","two"],["suiGridColumn",""],["type","paragraph"],["suiGridRow","","suiWidth","three"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t(),i(4,"div",2),r(5,"doc-wireframe",3),t()(),i(6,"div",4)(7,"div",2),r(8,"doc-wireframe",3),t(),i(9,"div",2),r(10,"doc-wireframe",3),t(),i(11,"div",2),r(12,"doc-wireframe",3),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),Ki=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-celled-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-grid","","suiCelled","celled"],["suiGridRow",""],["suiGridColumn","","suiWidth","three"],["type","image"],["suiGridColumn","","suiWidth","thirteen"],["type","paragraph"],["suiGridColumn","","suiWidth","ten"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t(),i(4,"div",4),r(5,"doc-wireframe",5),t()(),i(6,"div",1)(7,"div",2),r(8,"doc-wireframe",3),t(),i(9,"div",6),r(10,"doc-wireframe",5),t(),i(11,"div",2),r(12,"doc-wireframe",3),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),Qi=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-internally-celled-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-grid","","suiCelled","internally celled"],["suiGridRow",""],["suiGridColumn","","suiWidth","three"],["type","image"],["suiGridColumn","","suiWidth","ten"],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t(),i(4,"div",4),r(5,"doc-wireframe",5),t(),i(6,"div",2),r(7,"doc-wireframe",3),t()(),i(8,"div",1)(9,"div",2),r(10,"doc-wireframe",3),t(),i(11,"div",4),r(12,"doc-wireframe",5),t(),i(13,"div",2),r(14,"doc-wireframe",3),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),Zi=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-rows-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-grid","","suiWidth","four"],["suiGridRow",""],["suiGridColumn",""],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t(),i(4,"div",2),r(5,"doc-wireframe",3),t(),i(6,"div",2),r(7,"doc-wireframe",3),t()(),i(8,"div",1)(9,"div",2),r(10,"doc-wireframe",3),t(),i(11,"div",2),r(12,"doc-wireframe",3),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),en=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-columns-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiWidth","four"],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",1),r(4,"doc-wireframe",2),t(),i(5,"div",1),r(6,"doc-wireframe",2),t(),i(7,"div",1),r(8,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),tn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-floated-example"]],standalone:!1,decls:5,vars:0,consts:[["sui-grid","","suiWidth","three"],["suiGridColumn","","suiFloated","left floated"],["type","paragraph"],["suiGridColumn","","suiFloated","right floated"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",3),r(4,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),nn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-column-width-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiWidth","four"],["type","image"],["suiGridColumn","","suiWidth","nine"],["type","paragraph"],["suiGridColumn","","suiWidth","three"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",3),r(4,"doc-wireframe",4),t(),i(5,"div",5),r(6,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),ln=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-column-count-example"]],standalone:!1,decls:28,vars:0,consts:[["sui-grid",""],["suiGridRow","","suiWidth","four"],["suiGridColumn",""],["type","image"],["suiGridRow","","suiWidth","three"],["suiGridRow","","suiWidth","five"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t(),i(4,"div",2),r(5,"doc-wireframe",3),t(),i(6,"div",2),r(7,"doc-wireframe",3),t(),i(8,"div",2),r(9,"doc-wireframe",3),t()(),i(10,"div",4)(11,"div",2),r(12,"doc-wireframe",3),t(),i(13,"div",2),r(14,"doc-wireframe",3),t(),i(15,"div",2),r(16,"doc-wireframe",3),t()(),i(17,"div",5)(18,"div",2),r(19,"doc-wireframe",3),t(),i(20,"div",2),r(21,"doc-wireframe",3),t(),i(22,"div",2),r(23,"doc-wireframe",3),t(),i(24,"div",2),r(25,"doc-wireframe",3),t(),i(26,"div",2),r(27,"doc-wireframe",3),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),an=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-equal-width-example"]],standalone:!1,decls:34,vars:0,consts:[["sui-grid","","suiEqual",""],["suiGridColumn",""],["sui-segment",""],["suiGridColumn","","suiWidth","eight"],["sui-grid",""],["suiGridRow","","suiEqual",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),e(3,"1"),t()(),i(4,"div",3)(5,"div",2),e(6,"2"),t()(),i(7,"div",1)(8,"div",2),e(9,"3"),t()()(),i(10,"div",4)(11,"div",5)(12,"div",1)(13,"div",2),e(14,"1"),t()(),i(15,"div",1)(16,"div",2),e(17,"2"),t()(),i(18,"div",1)(19,"div",2),e(20,"3"),t()()(),i(21,"div",5)(22,"div",1)(23,"div",2),e(24,"1"),t()(),i(25,"div",1)(26,"div",2),e(27,"2"),t()(),i(28,"div",1)(29,"div",2),e(30,"3"),t()(),i(31,"div",1)(32,"div",2),e(33,"4"),t()()()())},dependencies:[z,w,T,B],encapsulation:2})}}return n})(),dn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-stretched-example"]],standalone:!1,decls:17,vars:0,consts:[["sui-grid","","suiWidth","three","suiDivided","divided"],["suiGridRow","","suiStretched",""],["suiGridColumn",""],["sui-segment",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e(4,"1"),t()(),i(5,"div",2)(6,"div",3),e(7,"1"),t(),i(8,"div",3),e(9,"2"),t()(),i(10,"div",2)(11,"div",3),e(12,"1"),t(),i(13,"div",3),e(14,"2"),t(),i(15,"div",3),e(16,"3"),t()()()())},dependencies:[z,w,T,B],encapsulation:2})}}return n})(),rn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-padded-example"]],standalone:!1,decls:21,vars:0,consts:[["sui-grid","","suiWidth","two","suiPadded","padded"],["suiGridColumn",""],["type","paragraph"],["sui-grid","","suiWidth","two","suiPadded","vertically padded"],["sui-grid","","suiWidth","two","suiPadded","horizontally padded"]],template:function(a,d){a&1&&(i(0,"p"),e(1,"The following grid has vertical and horizontal gutters."),t(),i(2,"div",0)(3,"div",1),r(4,"doc-wireframe",2),t(),i(5,"div",1),r(6,"doc-wireframe",2),t()(),i(7,"p"),e(8,"The following grid has vertical gutters."),t(),i(9,"div",3)(10,"div",1),r(11,"doc-wireframe",2),t(),i(12,"div",1),r(13,"doc-wireframe",2),t()(),i(14,"p"),e(15,"The following grid has horizontal gutters."),t(),i(16,"div",4)(17,"div",1),r(18,"doc-wireframe",2),t(),i(19,"div",1),r(20,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),mn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-relaxed-example"]],standalone:!1,decls:18,vars:0,consts:[["sui-grid","","suiWidth","four","suiRelaxation","relaxed"],["suiGridColumn",""],["type","image"],["sui-grid","","suiWidth","four","suiRelaxation","very relaxed"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",1),r(4,"doc-wireframe",2),t(),i(5,"div",1),r(6,"doc-wireframe",2),t(),i(7,"div",1),r(8,"doc-wireframe",2),t()(),i(9,"div",3)(10,"div",1),r(11,"doc-wireframe",2),t(),i(12,"div",1),r(13,"doc-wireframe",2),t(),i(14,"div",1),r(15,"doc-wireframe",2),t(),i(16,"div",1),r(17,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),on=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-colored-example"]],standalone:!1,decls:40,vars:0,consts:[["sui-grid","","suiWidth","five","suiPadded","padded"],["suiGridColumn","","suiColour","red"],["suiGridColumn","","suiColour","orange"],["suiGridColumn","","suiColour","yellow"],["suiGridColumn","","suiColour","olive"],["suiGridColumn","","suiColour","green"],["suiGridColumn","","suiColour","teal"],["suiGridColumn","","suiColour","blue"],["suiGridColumn","","suiColour","violet"],["suiGridColumn","","suiColour","purple"],["suiGridColumn","","suiColour","pink"],["suiGridColumn","","suiColour","brown"],["suiGridColumn","","suiColour","grey"],["suiGridColumn","","suiColour","black"],["sui-grid","","suiPadded","padded"],["suiGridRow","","suiColour","red"],["suiGridColumn",""],["suiGridRow","","suiColour","orange"],["suiGridRow","","suiColour","yellow"],["suiGridRow","","suiColour","olive"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," Red "),t(),i(3,"div",2),e(4," Orange "),t(),i(5,"div",3),e(6," Yellow "),t(),i(7,"div",4),e(8," Olive "),t(),i(9,"div",5),e(10," Green "),t(),i(11,"div",6),e(12," Teal "),t(),i(13,"div",7),e(14," Blue "),t(),i(15,"div",8),e(16," Violet "),t(),i(17,"div",9),e(18," Purple "),t(),i(19,"div",10),e(20," Pink "),t(),i(21,"div",11),e(22," Brown "),t(),i(23,"div",12),e(24," Grey "),t(),i(25,"div",13),e(26," Black "),t()(),i(27,"div",14)(28,"div",15)(29,"div",16),e(30," Red "),t()(),i(31,"div",17)(32,"div",16),e(33," Orange "),t()(),i(34,"div",18)(35,"div",16),e(36," Yellow "),t()(),i(37,"div",19)(38,"div",16),e(39," Olive "),t()()())},dependencies:[w,T,B],encapsulation:2})}}return n})(),sn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-centered-example"]],standalone:!1,decls:10,vars:0,consts:[["sui-grid","","suiCentered","","suiWidth","two"],["suiGridColumn",""],["type","image"],["suiGridRow","","suiCentered","","suiWidth","four"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",3)(4,"div",1),r(5,"doc-wireframe",2),t(),i(6,"div",1),r(7,"doc-wireframe",2),t(),i(8,"div",1),r(9,"doc-wireframe",2),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),pn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-text-alignment-example"]],standalone:!1,decls:26,vars:0,consts:[["sui-grid","","suiAlignment","center aligned","suiWidth","three"],["suiGridRow",""],["suiGridColumn",""],["sui-segment",""],["sui-grid",""],["suiGridRow","","suiWidth","three"],["suiGridColumn","","suiAlignment","left aligned"],["suiGridColumn","","suiAlignment","center aligned"],["suiGridColumn","","suiAlignment","right aligned"],["suiGridColumn","","suiAlignment","justified"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e(4,"Cats"),t()(),i(5,"div",2)(6,"div",3),e(7,"Dogs"),t()(),i(8,"div",2)(9,"div",3),e(10,"Monkeys"),t()()()(),i(11,"div",4)(12,"div",5)(13,"div",6)(14,"div",3),e(15,"Left aligned column"),t()(),i(16,"div",7)(17,"div",3),e(18,"Center aligned column"),t()(),i(19,"div",8)(20,"div",3),e(21,"Right aligned column"),t()()(),i(22,"div",1)(23,"div",9)(24,"div",3),e(25,"Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other."),t()()()())},dependencies:[z,w,T,B],encapsulation:2})}}return n})(),un=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-vertical-alignment-example"]],standalone:!1,decls:31,vars:0,consts:[["sui-grid","","suiVerticalAlignment","middle aligned","suiWidth","four"],["suiGridColumn",""],["type","image"],["sui-grid","","suiWidth","four"],["suiGridRow","","suiVerticalAlignment","bottom aligned"],["suiGridRow",""],["suiGridColumn","","suiVerticalAlignment","top aligned"],["suiGridColumn","","suiVerticalAlignment","middle aligned"],["suiGridColumn","","suiVerticalAlignment","bottom aligned"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",1),r(4,"doc-wireframe",2)(5,"doc-wireframe",2),t(),i(6,"div",1),r(7,"doc-wireframe",2),t(),i(8,"div",1),r(9,"doc-wireframe",2),t()(),i(10,"div",3)(11,"div",4)(12,"div",1),r(13,"doc-wireframe",2),t(),i(14,"div",1),r(15,"doc-wireframe",2)(16,"doc-wireframe",2),t(),i(17,"div",1),r(18,"doc-wireframe",2),t(),i(19,"div",1),r(20,"doc-wireframe",2),t()(),i(21,"div",5)(22,"div",6),r(23,"doc-wireframe",2),t(),i(24,"div",1),r(25,"doc-wireframe",2)(26,"doc-wireframe",2),t(),i(27,"div",7),r(28,"doc-wireframe",2),t(),i(29,"div",8),r(30,"doc-wireframe",2),t()()())},dependencies:[I,w,T,B],encapsulation:2})}}return n})(),cn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-doubling-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-grid","","suiDoubling","","suiWidth","five"],["suiGridColumn",""],["type","image"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",1),r(4,"doc-wireframe",2),t(),i(5,"div",1),r(6,"doc-wireframe",2),t(),i(7,"div",1),r(8,"doc-wireframe",2),t(),i(9,"div",1),r(10,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})(),vn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-stackable-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-grid","","suiStackable","","suiWidth","two"],["suiGridColumn",""],["sui-segment",""],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"doc-wireframe",3),t()(),i(4,"div",1)(5,"div",2),r(6,"doc-wireframe",3),t()()())},dependencies:[I,z,w,T],encapsulation:2})}}return n})(),xn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-reversed-example"]],standalone:!1,decls:28,vars:2,consts:[["sui-grid","","suiWidth","four","suiDivided","divided","suiReversed","computer reversed"],["suiGridRow",""],["suiGridColumn",""],["sui-grid","","suiWidth","three","suiDivided","divided"],["suiGridRow","",3,"suiReversed"],["sui-grid","","suiWidth","one","suiDivided","vertically divided","suiReversed","computer vertically reversed"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),e(3," Computer First "),t(),i(4,"div",2),e(5," Computer Second "),t(),i(6,"div",2),e(7," Computer Third "),t(),i(8,"div",2),e(9," Computer Fourth "),t()()(),i(10,"div",3)(11,"div",4)(12,"div",2),e(13," Tablet & Mobile First "),t(),i(14,"div",2),e(15," Tablet & Mobile Second "),t(),i(16,"div",2),e(17," Tablet & Mobile Third "),t()()(),i(18,"div",5)(19,"div",1)(20,"div",2),e(21," Computer Row 1 "),t()(),i(22,"div",1)(23,"div",2),e(24," Computer Row 2 "),t()(),i(25,"div",1)(26,"div",2),e(27," Computer Row 3 "),t()()()),a&2&&(m(11),o("suiReversed",Ie(1,ro)))},dependencies:[w,T,B],encapsulation:2})}}return n})(),Sn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-device-visibility-example"]],standalone:!1,decls:39,vars:0,consts:[["sui-grid",""],["suiGridRow","","suiWidth","two"],["suiGridColumn","","suiDeviceVisibility","large screen only"],["sui-segment",""],["suiGridColumn","","suiDeviceVisibility","widescreen only"],["suiGridRow","","suiWidth","two","suiDeviceVisibility","mobile only"],["suiGridColumn",""],["suiGridRow","","suiWidth","two","suiDeviceVisibility","tablet only"],["suiGridRow","","suiWidth","three","suiDeviceVisibility","computer only"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e(4,"Large Screen"),t()(),i(5,"div",4)(6,"div",3),e(7,"Widescreen"),t()()(),i(8,"div",5)(9,"div",6)(10,"div",3),e(11,"Mobile"),t()(),i(12,"div",6)(13,"div",3),e(14,"Mobile"),t()()(),i(15,"div",7)(16,"div",6)(17,"div",3),e(18,"Tablet"),t()(),i(19,"div",6)(20,"div",3),e(21,"Tablet"),t()()(),i(22,"div",8)(23,"div",6)(24,"div",3),e(25,"Computer"),t()(),i(26,"div",6)(27,"div",3),e(28,"Computer"),t()(),i(29,"div",6)(30,"div",3),e(31,"Computer"),t()()(),i(32,"div",1)(33,"div",6)(34,"div",3),e(35,"All Sizes"),t()(),i(36,"div",6)(37,"div",3),e(38,"All Sizes"),t()()()())},dependencies:[z,w,T,B],encapsulation:2})}}return n})(),hn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid-responsive-width-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-grid",""],["suiGridColumn","","suiMobileWidth","sixteen","suiTabletWidth","eight","suiComputerWidth","four"],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"doc-wireframe",2),t(),i(3,"div",1),r(4,"doc-wireframe",2),t(),i(5,"div",1),r(6,"doc-wireframe",2),t(),i(7,"div",1),r(8,"doc-wireframe",2),t()())},dependencies:[I,w,T],encapsulation:2})}}return n})();function oo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-grid-example"),t())}function so(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-divided-example"),t())}function po(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-vertically-divided-example"),t())}function uo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-celled-example"),t())}function co(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-internally-celled-example"),t())}function vo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-rows-example"),t())}function xo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-columns-example"),t())}function So(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-floated-example"),t())}function ho(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-column-width-example"),t())}function fo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-column-count-example"),t())}function Eo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-equal-width-example"),t())}function go(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-stretched-example"),t())}function bo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-padded-example"),t())}function yo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-relaxed-example"),t())}function Co(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-colored-example"),t())}function Fo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-centered-example"),t())}function Do(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-text-alignment-example"),t())}function Mo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-vertical-alignment-example"),t())}function _o(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-doubling-example"),t())}function wo(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-stackable-example"),t())}function To(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-reversed-example"),t())}function Io(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-device-visibility-example"),t())}function Ao(n,s){n&1&&(i(0,"div",9),r(1,"doc-grid-responsive-width-example"),t())}function ko(n,s){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Grid"),t(),i(6,"p"),e(7,"A basic grid"),t(),i(8,"div",5),e(9," Grids divide horizontal space into "),i(10,"b"),e(11,"16 columns"),t(),e(12,". Four "),i(13,"code"),e(14,"four wide"),t(),e(15," columns fit in a single row, "),i(16,"code"),e(17,"16 / 4 = 4"),t(),e(18,". "),t(),u(19,oo,2,0,"ng-template",6),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22," Divided "),i(23,"div",7),e(24,"Requires Rows"),t()(),i(25,"p"),e(26,"A grid can have dividers between its columns"),t(),u(27,so,2,0,"ng-template",6),t(),i(28,"doc-code-sample",3)(29,"h3",4),e(30," Vertically Divided "),i(31,"div",7),e(32,"Requires Rows"),t()(),i(33,"p"),e(34,"A grid can have dividers between rows"),t(),u(35,po,2,0,"ng-template",6),t(),i(36,"doc-code-sample",3)(37,"h3",4),e(38," Celled "),i(39,"div",7),e(40,"Requires Rows"),t()(),i(41,"p"),e(42,"A grid can have rows divided into cells"),t(),u(43,uo,2,0,"ng-template",6),t(),i(44,"doc-code-sample",3)(45,"h3",4),e(46," Internally Celled "),i(47,"div",7),e(48,"Requires Rows"),t()(),i(49,"p"),e(50,"A grid can have rows divisions only between internal rows"),t(),u(51,co,2,0,"ng-template",6),t(),r(52,"br"),i(53,"h2",2),e(54,"Content"),t(),i(55,"doc-code-sample",3)(56,"h3",4),e(57,"Rows"),t(),i(58,"p"),e(59,"A row is a horizontal grouping of columns"),t(),i(60,"div",5),e(61," Row wrappers automatically clear previous columns and allow you to apply variations to a group of columns. "),t(),u(62,vo,2,0,"ng-template",6),t(),i(63,"doc-code-sample",3)(64,"h3",4),e(65,"Columns"),t(),i(66,"p"),e(67,"Columns each contain gutters giving them equal spacing from other columns"),t(),i(68,"div",8),e(69," Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns. "),t(),u(70,xo,2,0,"ng-template",6),t(),r(71,"br"),i(72,"h2",2),e(73,"Variations"),t(),i(74,"doc-code-sample",3)(75,"h3",4),e(76,"Floated"),t(),i(77,"p"),e(78,"A column can sit flush against the left or right edge of a row"),t(),u(79,So,2,0,"ng-template",6),t(),i(80,"doc-code-sample",3)(81,"h3",4),e(82,"Column Width"),t(),i(83,"p"),e(84,"A column can vary in width taking up more than a single grid column"),t(),i(85,"div",5),e(86," If a column cannot fit in a row it will automatically flow to the next row. "),t(),u(87,ho,2,0,"ng-template",6),t(),i(88,"doc-code-sample",3)(89,"h3",4),e(90,"Column Count"),t(),i(91,"p"),e(92,"A grid can have a different number of columns per row"),t(),u(93,fo,2,0,"ng-template",6),t(),i(94,"doc-code-sample",3)(95,"h3",4),e(96,"Equal Width"),t(),i(97,"p"),e(98,"A grid can automatically resize all elements to split the available width evenly"),t(),u(99,Eo,2,0,"ng-template",6),t(),i(100,"doc-code-sample",3)(101,"h3",4),e(102,"Stretched"),t(),i(103,"p"),e(104,"A row can stretch its contents to take up the entire column height"),t(),u(105,go,2,0,"ng-template",6),t(),i(106,"doc-code-sample",3)(107,"h3",4),e(108,"Padded"),t(),i(109,"p"),e(110,"A grid can preserve its vertical and horizontal gutters on first and last columns"),t(),u(111,bo,2,0,"ng-template",6),t(),i(112,"doc-code-sample",3)(113,"h3",4),e(114,"Relaxed"),t(),i(115,"p"),e(116,"A grid can increase its gutters to allow for more negative space"),t(),u(117,yo,2,0,"ng-template",6),t(),i(118,"doc-code-sample",3)(119,"h3",4),e(120,"Colored"),t(),i(121,"p"),e(122,"A row or column can be colored"),t(),i(123,"div",8),e(124," Colored rows or columns should be used with a "),i(125,"code"),e(126,"padded"),t(),e(127," grid, which does not include negative margins. "),t(),u(128,Co,2,0,"ng-template",6),t(),i(129,"doc-code-sample",3)(130,"h3",4),e(131,"Centered"),t(),i(132,"p"),e(133,"A grid can have its columns centered"),t(),u(134,Fo,2,0,"ng-template",6),t(),i(135,"doc-code-sample",3)(136,"h3",4),e(137,"Text Alignment"),t(),i(138,"p"),e(139,"A grid, row, or column can specify its text alignment"),t(),u(140,Do,2,0,"ng-template",6),t(),i(141,"doc-code-sample",3)(142,"h3",4),e(143,"Vertical Alignment"),t(),i(144,"p"),e(145,"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered"),t(),i(146,"div",5),e(147," Use "),i(148,"code"),e(149,"suiVerticalAlignment"),t(),e(150," when you need to combine a vertical alignment with a text alignment set through "),i(151,"code"),e(152,"suiAlignment"),t(),e(153,". "),t(),u(154,Mo,2,0,"ng-template",6),t(),r(155,"br"),i(156,"h2",2),e(157,"Responsive Variations"),t(),i(158,"doc-code-sample",3)(159,"h3",4),e(160,"Doubling"),t(),i(161,"p"),e(162,"A grid can double its column width on tablet and mobile sizes"),t(),i(163,"div",5),e(164," A grid will round its columns to the closest reasonable value when doubling, for example a "),i(165,"code"),e(166,"five column grid"),t(),e(167," will use "),i(168,"code"),e(169,"2 mobile, 3 tablet, 5 desktop"),t(),e(170,". To force 1 column on mobile you can add "),i(171,"code"),e(172,"suiStackable"),t(),e(173,". "),t(),u(174,_o,2,0,"ng-template",6),t(),i(175,"doc-code-sample",3)(176,"h3",4),e(177,"Stackable"),t(),i(178,"p"),e(179,"A grid can have its columns stack on-top of each other after reaching mobile breakpoints"),t(),i(180,"div",5),e(181," To see a grid stack, try resizing your browser to a small width. "),t(),u(182,wo,2,0,"ng-template",6),t(),i(183,"doc-code-sample",3)(184,"h3",4),e(185,"Reversed"),t(),i(186,"p"),e(187,"A grid or row can specify that its columns should reverse order at different device sizes"),t(),i(188,"div",5),e(189," Reversed grids are compatible with "),i(190,"code"),e(191,"divided"),t(),e(192," grids and other complex grid types. Bind an array to "),i(193,"code"),e(194,"suiReversed"),t(),e(195," to reverse on more than one device. "),t(),u(196,To,2,0,"ng-template",6),t(),i(197,"doc-code-sample",3)(198,"h3",4),e(199,"Device Visibility"),t(),i(200,"p"),e(201,"A column or row can appear only for a specific device, or screen sizes"),t(),i(202,"div",5),e(203," See the container documentation for information on breakpoint calculations. "),t(),u(204,Io,2,0,"ng-template",6),t(),i(205,"doc-code-sample",3)(206,"h3",4),e(207,"Responsive Width"),t(),i(208,"p"),e(209,"A column can specify a width for a specific device"),t(),i(210,"div",8),e(211," It's recommended to use a responsive pattern like "),i(212,"code"),e(213,"doubling"),t(),e(214," or "),i(215,"code"),e(216,"stackable"),t(),e(217," to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary. "),t(),u(218,Ao,2,0,"ng-template",6),t()()),n&2){let l=H();m(3),o("templateCode",l.snippetGrid),m(17),o("templateCode",l.snippetDivided),m(8),o("templateCode",l.snippetVerticallyDivided),m(8),o("templateCode",l.snippetCelled),m(8),o("templateCode",l.snippetInternallyCelled),m(11),o("templateCode",l.snippetRows),m(8),o("templateCode",l.snippetColumns),m(11),o("templateCode",l.snippetFloated),m(6),o("templateCode",l.snippetColumnWidth),m(8),o("templateCode",l.snippetColumnCount),m(6),o("templateCode",l.snippetEqualWidth),m(6),o("templateCode",l.snippetStretched),m(6),o("templateCode",l.snippetPadded),m(6),o("templateCode",l.snippetRelaxed),m(6),o("templateCode",l.snippetColored),m(11),o("templateCode",l.snippetCentered),m(6),o("templateCode",l.snippetTextAlignment),m(6),o("templateCode",l.snippetVerticalAlignment),m(17),o("templateCode",l.snippetDoubling),m(17),o("templateCode",l.snippetStackable),m(8),o("templateCode",l.snippetReversed),m(14),o("templateCode",l.snippetDeviceVisibility),m(8),o("templateCode",l.snippetResponsiveWidth)}}function Go(n,s){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-grid"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",10)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiWidth"),t(),i(20,"td"),e(21," Set the number of columns in the grid. Allowed values are "),i(22,"span",11),e(23,"'one'"),t(),e(24," through "),i(25,"span",11),e(26,"'sixteen'"),t(),e(27," | "),i(28,"span",11),e(29,"null"),t()(),i(30,"td")(31,"div",12),e(32," string "),t()(),i(33,"td")(34,"div",13),e(35," null "),t()()(),i(36,"tr")(37,"td"),e(38,"suiAlignment"),t(),i(39,"td"),e(40," Set the text alignment of the grid. Allowed values are "),i(41,"span",11),e(42,"'left aligned'"),t(),e(43," | "),i(44,"span",11),e(45,"'center aligned'"),t(),e(46," | "),i(47,"span",11),e(48,"'right aligned'"),t(),e(49," | "),i(50,"span",11),e(51,"'justified'"),t(),e(52," | "),i(53,"span",11),e(54,"null"),t()(),i(55,"td")(56,"div",12),e(57," string "),t()(),i(58,"td")(59,"div",13),e(60," null "),t()()(),i(61,"tr")(62,"td"),e(63,"suiVerticalAlignment"),t(),i(64,"td"),e(65," Set the vertical alignment of the grid. Allowed values are "),i(66,"span",11),e(67,"'top aligned'"),t(),e(68," | "),i(69,"span",11),e(70,"'middle aligned'"),t(),e(71," | "),i(72,"span",11),e(73,"'bottom aligned'"),t(),e(74," | "),i(75,"span",11),e(76,"null"),t()(),i(77,"td")(78,"div",12),e(79," string "),t()(),i(80,"td")(81,"div",13),e(82," null "),t()()(),i(83,"tr")(84,"td"),e(85,"suiDivided"),t(),i(86,"td"),e(87," Set dividers between columns or rows. Allowed values are "),i(88,"span",11),e(89,"'divided'"),t(),e(90," | "),i(91,"span",11),e(92,"'vertically divided'"),t(),e(93," | "),i(94,"span",11),e(95,"null"),t()(),i(96,"td")(97,"div",12),e(98," string "),t()(),i(99,"td")(100,"div",13),e(101," null "),t()()(),i(102,"tr")(103,"td"),e(104,"suiCelled"),t(),i(105,"td"),e(106," Divide rows into cells. Allowed values are "),i(107,"span",11),e(108,"'celled'"),t(),e(109," | "),i(110,"span",11),e(111,"'internally celled'"),t(),e(112," | "),i(113,"span",11),e(114,"null"),t()(),i(115,"td")(116,"div",12),e(117," string "),t()(),i(118,"td")(119,"div",13),e(120," null "),t()()(),i(121,"tr")(122,"td"),e(123,"suiPadded"),t(),i(124,"td"),e(125," Preserve gutters on first and last columns. Allowed values are "),i(126,"span",11),e(127,"'padded'"),t(),e(128," | "),i(129,"span",11),e(130,"'vertically padded'"),t(),e(131," | "),i(132,"span",11),e(133,"'horizontally padded'"),t(),e(134," | "),i(135,"span",11),e(136,"null"),t()(),i(137,"td")(138,"div",12),e(139," string "),t()(),i(140,"td")(141,"div",13),e(142," null "),t()()(),i(143,"tr")(144,"td"),e(145,"suiRelaxation"),t(),i(146,"td"),e(147," Increase the size of the gutters. Allowed values are "),i(148,"span",11),e(149,"'relaxed'"),t(),e(150," | "),i(151,"span",11),e(152,"'very relaxed'"),t(),e(153," | "),i(154,"span",11),e(155,"null"),t()(),i(156,"td")(157,"div",12),e(158," string "),t()(),i(159,"td")(160,"div",13),e(161," null "),t()()(),i(162,"tr")(163,"td"),e(164,"suiReversed"),t(),i(165,"td"),e(166," Reverse the order of columns or rows by device. Accepts one value or an array of "),i(167,"span",11),e(168,"'computer reversed'"),t(),e(169," | "),i(170,"span",11),e(171,"'tablet reversed'"),t(),e(172," | "),i(173,"span",11),e(174,"'mobile reversed'"),t(),e(175," | "),i(176,"span",11),e(177,"'computer vertically reversed'"),t(),e(178," | "),i(179,"span",11),e(180,"'tablet vertically reversed'"),t(),e(181," | "),i(182,"span",11),e(183,"'mobile vertically reversed'"),t(),e(184," | "),i(185,"span",11),e(186,"null"),t()(),i(187,"td")(188,"div",12),e(189," string | string[] "),t()(),i(190,"td")(191,"div",13),e(192," null "),t()()(),i(193,"tr")(194,"td"),e(195,"suiEqual"),t(),i(196,"td"),e(197," Set whether columns should automatically split the available width evenly "),t(),i(198,"td")(199,"div",12),e(200," boolean "),t()(),i(201,"td")(202,"div",13),e(203," false "),t()()(),i(204,"tr")(205,"td"),e(206,"suiCentered"),t(),i(207,"td"),e(208," Set whether the columns should be centered "),t(),i(209,"td")(210,"div",12),e(211," boolean "),t()(),i(212,"td")(213,"div",13),e(214," false "),t()()(),i(215,"tr")(216,"td"),e(217,"suiStretched"),t(),i(218,"td"),e(219," Set whether columns should stretch to take up the entire row height "),t(),i(220,"td")(221,"div",12),e(222," boolean "),t()(),i(223,"td")(224,"div",13),e(225," false "),t()()(),i(226,"tr")(227,"td"),e(228,"suiStackable"),t(),i(229,"td"),e(230," Set whether columns should stack on mobile devices "),t(),i(231,"td")(232,"div",12),e(233," boolean "),t()(),i(234,"td")(235,"div",13),e(236," false "),t()()(),i(237,"tr")(238,"td"),e(239,"suiDoubling"),t(),i(240,"td"),e(241," Set whether column widths should double for each device jump "),t(),i(242,"td")(243,"div",12),e(244," boolean "),t()(),i(245,"td")(246,"div",13),e(247," false "),t()()(),i(248,"tr")(249,"td"),e(250,"suiContainer"),t(),i(251,"td"),e(252," Set whether the grid should also be a responsive container "),t(),i(253,"td")(254,"div",12),e(255," boolean "),t()(),i(256,"td")(257,"div",13),e(258," false "),t()()()()(),i(259,"h2",2),e(260,"suiGridRow"),t(),i(261,"h4",4),e(262,"Properties"),t(),i(263,"table",10)(264,"thead")(265,"tr")(266,"th"),e(267,"Property"),t(),i(268,"th"),e(269,"Description"),t(),i(270,"th"),e(271,"Type"),t(),i(272,"th"),e(273,"Default"),t()()(),i(274,"tbody")(275,"tr")(276,"td"),e(277,"suiWidth"),t(),i(278,"td"),e(279," Set the number of columns in the row. Allowed values are "),i(280,"span",11),e(281,"'one'"),t(),e(282," through "),i(283,"span",11),e(284,"'sixteen'"),t(),e(285," | "),i(286,"span",11),e(287,"null"),t()(),i(288,"td")(289,"div",12),e(290," string "),t()(),i(291,"td")(292,"div",13),e(293," null "),t()()(),i(294,"tr")(295,"td"),e(296,"suiAlignment"),t(),i(297,"td"),e(298," Set the text (or vertical) alignment of the row. Allowed values are "),i(299,"span",11),e(300,"'left aligned'"),t(),e(301," | "),i(302,"span",11),e(303,"'center aligned'"),t(),e(304," | "),i(305,"span",11),e(306,"'right aligned'"),t(),e(307," | "),i(308,"span",11),e(309,"'justified'"),t(),e(310," | "),i(311,"span",11),e(312,"'top aligned'"),t(),e(313," | "),i(314,"span",11),e(315,"'middle aligned'"),t(),e(316," | "),i(317,"span",11),e(318,"'bottom aligned'"),t(),e(319," | "),i(320,"span",11),e(321,"null"),t()(),i(322,"td")(323,"div",12),e(324," string "),t()(),i(325,"td")(326,"div",13),e(327," null "),t()()(),i(328,"tr")(329,"td"),e(330,"suiVerticalAlignment"),t(),i(331,"td"),e(332," Set the vertical alignment of the row. Allowed values are "),i(333,"span",11),e(334,"'top aligned'"),t(),e(335," | "),i(336,"span",11),e(337,"'middle aligned'"),t(),e(338," | "),i(339,"span",11),e(340,"'bottom aligned'"),t(),e(341," | "),i(342,"span",11),e(343,"null"),t()(),i(344,"td")(345,"div",12),e(346," string "),t()(),i(347,"td")(348,"div",13),e(349," null "),t()()(),i(350,"tr")(351,"td"),e(352,"suiColour"),t(),i(353,"td"),e(354," Set the background colour of the row. Allowed values are "),i(355,"span",11),e(356,"'red'"),t(),e(357," | "),i(358,"span",11),e(359,"'orange'"),t(),e(360," | "),i(361,"span",11),e(362,"'yellow'"),t(),e(363," | "),i(364,"span",11),e(365,"'olive'"),t(),e(366," | "),i(367,"span",11),e(368,"'green'"),t(),e(369," | "),i(370,"span",11),e(371,"'teal'"),t(),e(372," | "),i(373,"span",11),e(374,"'blue'"),t(),e(375," | "),i(376,"span",11),e(377,"'violet'"),t(),e(378," | "),i(379,"span",11),e(380,"'purple'"),t(),e(381," | "),i(382,"span",11),e(383,"'pink'"),t(),e(384," | "),i(385,"span",11),e(386,"'brown'"),t(),e(387," | "),i(388,"span",11),e(389,"'grey'"),t(),e(390," | "),i(391,"span",11),e(392,"'black'"),t(),e(393," | "),i(394,"span",11),e(395,"null"),t()(),i(396,"td")(397,"div",12),e(398," string "),t()(),i(399,"td")(400,"div",13),e(401," null "),t()()(),i(402,"tr")(403,"td"),e(404,"suiReversed"),t(),i(405,"td"),e(406," Reverse the order of columns by device. Accepts one value or an array of "),i(407,"span",11),e(408,"'computer reversed'"),t(),e(409," | "),i(410,"span",11),e(411,"'tablet reversed'"),t(),e(412," | "),i(413,"span",11),e(414,"'mobile reversed'"),t(),e(415," | "),i(416,"span",11),e(417,"'computer vertically reversed'"),t(),e(418," | "),i(419,"span",11),e(420,"'tablet vertically reversed'"),t(),e(421," | "),i(422,"span",11),e(423,"'mobile vertically reversed'"),t(),e(424," | "),i(425,"span",11),e(426,"null"),t()(),i(427,"td")(428,"div",12),e(429," string | string[] "),t()(),i(430,"td")(431,"div",13),e(432," null "),t()()(),i(433,"tr")(434,"td"),e(435,"suiDeviceVisibility"),t(),i(436,"td"),e(437," Only show the row on specific devices. Allowed values are "),i(438,"span",11),e(439,"'mobile only'"),t(),e(440," | "),i(441,"span",11),e(442,"'tablet only'"),t(),e(443," | "),i(444,"span",11),e(445,"'computer only'"),t(),e(446," | "),i(447,"span",11),e(448,"'large screen only'"),t(),e(449," | "),i(450,"span",11),e(451,"'widescreen only'"),t(),e(452," | "),i(453,"span",11),e(454,"'tablet mobile only'"),t(),e(455," | "),i(456,"span",11),e(457,"null"),t()(),i(458,"td")(459,"div",12),e(460," string "),t()(),i(461,"td")(462,"div",13),e(463," null "),t()()(),i(464,"tr")(465,"td"),e(466,"suiEqual"),t(),i(467,"td"),e(468," Set whether columns should automatically split the available width evenly "),t(),i(469,"td")(470,"div",12),e(471," boolean "),t()(),i(472,"td")(473,"div",13),e(474," false "),t()()(),i(475,"tr")(476,"td"),e(477,"suiCentered"),t(),i(478,"td"),e(479," Set whether the columns should be centered "),t(),i(480,"td")(481,"div",12),e(482," boolean "),t()(),i(483,"td")(484,"div",13),e(485," false "),t()()(),i(486,"tr")(487,"td"),e(488,"suiStretched"),t(),i(489,"td"),e(490," Set whether columns should stretch to take up the entire row height "),t(),i(491,"td")(492,"div",12),e(493," boolean "),t()(),i(494,"td")(495,"div",13),e(496," false "),t()()(),i(497,"tr")(498,"td"),e(499,"suiDoubling"),t(),i(500,"td"),e(501," Set whether column widths should double for each device jump "),t(),i(502,"td")(503,"div",12),e(504," boolean "),t()(),i(505,"td")(506,"div",13),e(507," false "),t()()()()(),i(508,"h2",2),e(509,"suiGridColumn"),t(),i(510,"h4",4),e(511,"Properties"),t(),i(512,"table",10)(513,"thead")(514,"tr")(515,"th"),e(516,"Property"),t(),i(517,"th"),e(518,"Description"),t(),i(519,"th"),e(520,"Type"),t(),i(521,"th"),e(522,"Default"),t()()(),i(523,"tbody")(524,"tr")(525,"td"),e(526,"suiWidth"),t(),i(527,"td"),e(528," Set the width of the column. Allowed values are "),i(529,"span",11),e(530,"'one'"),t(),e(531," through "),i(532,"span",11),e(533,"'sixteen'"),t(),e(534," | "),i(535,"span",11),e(536,"null"),t()(),i(537,"td")(538,"div",12),e(539," string "),t()(),i(540,"td")(541,"div",13),e(542," null "),t()()(),i(543,"tr")(544,"td"),e(545,"suiMobileWidth"),t(),i(546,"td"),e(547," Set the width of the column on mobile devices. Allowed values are "),i(548,"span",11),e(549,"'one'"),t(),e(550," through "),i(551,"span",11),e(552,"'sixteen'"),t(),e(553," | "),i(554,"span",11),e(555,"null"),t()(),i(556,"td")(557,"div",12),e(558," string "),t()(),i(559,"td")(560,"div",13),e(561," null "),t()()(),i(562,"tr")(563,"td"),e(564,"suiTabletWidth"),t(),i(565,"td"),e(566," Set the width of the column on tablets. Allowed values are "),i(567,"span",11),e(568,"'one'"),t(),e(569," through "),i(570,"span",11),e(571,"'sixteen'"),t(),e(572," | "),i(573,"span",11),e(574,"null"),t()(),i(575,"td")(576,"div",12),e(577," string "),t()(),i(578,"td")(579,"div",13),e(580," null "),t()()(),i(581,"tr")(582,"td"),e(583,"suiComputerWidth"),t(),i(584,"td"),e(585," Set the width of the column on computers. Allowed values are "),i(586,"span",11),e(587,"'one'"),t(),e(588," through "),i(589,"span",11),e(590,"'sixteen'"),t(),e(591," | "),i(592,"span",11),e(593,"null"),t()(),i(594,"td")(595,"div",12),e(596," string "),t()(),i(597,"td")(598,"div",13),e(599," null "),t()()(),i(600,"tr")(601,"td"),e(602,"suiLargeScreenWidth"),t(),i(603,"td"),e(604," Set the width of the column on large screens. Allowed values are "),i(605,"span",11),e(606,"'one'"),t(),e(607," through "),i(608,"span",11),e(609,"'sixteen'"),t(),e(610," | "),i(611,"span",11),e(612,"null"),t()(),i(613,"td")(614,"div",12),e(615," string "),t()(),i(616,"td")(617,"div",13),e(618," null "),t()()(),i(619,"tr")(620,"td"),e(621,"suiWidescreenWidth"),t(),i(622,"td"),e(623," Set the width of the column on widescreens. Allowed values are "),i(624,"span",11),e(625,"'one'"),t(),e(626," through "),i(627,"span",11),e(628,"'sixteen'"),t(),e(629," | "),i(630,"span",11),e(631,"null"),t()(),i(632,"td")(633,"div",12),e(634," string "),t()(),i(635,"td")(636,"div",13),e(637," null "),t()()(),i(638,"tr")(639,"td"),e(640,"suiFloated"),t(),i(641,"td"),e(642," Float the column to the edge of the row. Allowed values are "),i(643,"span",11),e(644,"'left floated'"),t(),e(645," | "),i(646,"span",11),e(647,"'right floated'"),t(),e(648," | "),i(649,"span",11),e(650,"null"),t()(),i(651,"td")(652,"div",12),e(653," string "),t()(),i(654,"td")(655,"div",13),e(656," null "),t()()(),i(657,"tr")(658,"td"),e(659,"suiAlignment"),t(),i(660,"td"),e(661," Set the text (or vertical) alignment of the column. Allowed values are "),i(662,"span",11),e(663,"'left aligned'"),t(),e(664," | "),i(665,"span",11),e(666,"'center aligned'"),t(),e(667," | "),i(668,"span",11),e(669,"'right aligned'"),t(),e(670," | "),i(671,"span",11),e(672,"'justified'"),t(),e(673," | "),i(674,"span",11),e(675,"'top aligned'"),t(),e(676," | "),i(677,"span",11),e(678,"'middle aligned'"),t(),e(679," | "),i(680,"span",11),e(681,"'bottom aligned'"),t(),e(682," | "),i(683,"span",11),e(684,"null"),t()(),i(685,"td")(686,"div",12),e(687," string "),t()(),i(688,"td")(689,"div",13),e(690," null "),t()()(),i(691,"tr")(692,"td"),e(693,"suiVerticalAlignment"),t(),i(694,"td"),e(695," Set the vertical alignment of the column. Allowed values are "),i(696,"span",11),e(697,"'top aligned'"),t(),e(698," | "),i(699,"span",11),e(700,"'middle aligned'"),t(),e(701," | "),i(702,"span",11),e(703,"'bottom aligned'"),t(),e(704," | "),i(705,"span",11),e(706,"null"),t()(),i(707,"td")(708,"div",12),e(709," string "),t()(),i(710,"td")(711,"div",13),e(712," null "),t()()(),i(713,"tr")(714,"td"),e(715,"suiColour"),t(),i(716,"td"),e(717," Set the background colour of the column. Allowed values are "),i(718,"span",11),e(719,"'red'"),t(),e(720," | "),i(721,"span",11),e(722,"'orange'"),t(),e(723," | "),i(724,"span",11),e(725,"'yellow'"),t(),e(726," | "),i(727,"span",11),e(728,"'olive'"),t(),e(729," | "),i(730,"span",11),e(731,"'green'"),t(),e(732," | "),i(733,"span",11),e(734,"'teal'"),t(),e(735," | "),i(736,"span",11),e(737,"'blue'"),t(),e(738," | "),i(739,"span",11),e(740,"'violet'"),t(),e(741," | "),i(742,"span",11),e(743,"'purple'"),t(),e(744," | "),i(745,"span",11),e(746,"'pink'"),t(),e(747," | "),i(748,"span",11),e(749,"'brown'"),t(),e(750," | "),i(751,"span",11),e(752,"'grey'"),t(),e(753," | "),i(754,"span",11),e(755,"'black'"),t(),e(756," | "),i(757,"span",11),e(758,"null"),t()(),i(759,"td")(760,"div",12),e(761," string "),t()(),i(762,"td")(763,"div",13),e(764," null "),t()()(),i(765,"tr")(766,"td"),e(767,"suiDeviceVisibility"),t(),i(768,"td"),e(769," Only show the column on specific devices. Allowed values are "),i(770,"span",11),e(771,"'mobile only'"),t(),e(772," | "),i(773,"span",11),e(774,"'tablet only'"),t(),e(775," | "),i(776,"span",11),e(777,"'computer only'"),t(),e(778," | "),i(779,"span",11),e(780,"'large screen only'"),t(),e(781," | "),i(782,"span",11),e(783,"'widescreen only'"),t(),e(784," | "),i(785,"span",11),e(786,"'tablet mobile only'"),t(),e(787," | "),i(788,"span",11),e(789,"null"),t()(),i(790,"td")(791,"div",12),e(792," string "),t()(),i(793,"td")(794,"div",13),e(795," null "),t()()(),i(796,"tr")(797,"td"),e(798,"suiStretched"),t(),i(799,"td"),e(800," Set whether the column contents should stretch to the column height "),t(),i(801,"td")(802,"div",12),e(803," boolean "),t()(),i(804,"td")(805,"div",13),e(806," false "),t()()()()()())}var fn=(()=>{class n{constructor(l){this.snippetGrid=Di,this.snippetDivided=Mi,this.snippetVerticallyDivided=_i,this.snippetCelled=wi,this.snippetInternallyCelled=Ti,this.snippetRows=Ii,this.snippetColumns=Ai,this.snippetFloated=ki,this.snippetColumnWidth=Gi,this.snippetColumnCount=Bi,this.snippetEqualWidth=Ni,this.snippetStretched=Wi,this.snippetPadded=Ri,this.snippetRelaxed=Pi,this.snippetColored=zi,this.snippetCentered=Ji,this.snippetTextAlignment=Li,this.snippetVerticalAlignment=Hi,this.snippetDoubling=Vi,this.snippetStackable=qi,this.snippetReversed=Oi,this.snippetDeviceVisibility=Ui,this.snippetResponsiveWidth=ji,l.setTitle("Grid | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(V))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-grid"]],standalone:!1,decls:3,vars:2,consts:[["header","Grid","subHeader","A grid is used to harmonize negative space in a layout","semanticUrl","https://semantic-ui.com/collections/grid.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],["sui-label","","suiColour","teal","suiSize","tiny"],["sui-message","","suiState","warning"],[1,"grid-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,d){a&1&&(i(0,"doc-page",0),u(1,ko,219,23,"div",1)(2,Go,807,0,"div",1),t()),a&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,O,q,U,k,D,h,P,Yi,Xi,$i,Ki,Qi,Zi,en,tn,nn,ln,an,dn,rn,mn,on,sn,pn,un,cn,vn,xn,Sn,hn],styles:["[_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.column:not(.row), [_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.row>.column{box-shadow:inset 0 0 0 1px #2224261a}[_nghost-%COMP%]     .grid-demo .ui.grid+.ui.grid, [_nghost-%COMP%]     .grid-demo .ui.grid+p{margin-top:1.5rem}"]})}}return n})();var En=`<div sui-menu>
  <div suiMenuItem suiHeader>Our Company</div>
  <a suiMenuItem>About Us</a>
  <a suiMenuItem>Jobs</a>
  <a suiMenuItem>Locations</a>
</div>
`;var gn=`<div sui-menu
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
`;var yn=`<div sui-menu
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
`;var Cn=`import { Component } from '@angular/core';

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
`;var Dn=`import { Component } from '@angular/core';

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
`;var Mn=`<div sui-menu
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
`;var wn=`<div sui-menu
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
`;var Tn=`import { Component } from '@angular/core';

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
`;var An=`import { Component } from '@angular/core';

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
`;var kn=`<div sui-menu
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
`;var Gn=`import { Component } from '@angular/core';

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
`;var Bn=`<div sui-menu
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
`;var Nn=`<div sui-menu
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
`;var Wn=`import { Component } from '@angular/core';

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
`;var Rn=`<div sui-menu
     suiPagination>
  <a suiMenuItem suiActive>1</a>
  <div suiMenuItem disabled>...</div>
  <a suiMenuItem>10</a>
  <a suiMenuItem>11</a>
  <a suiMenuItem>12</a>
</div>
`;var Pn=`<div sui-menu>
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
`;var zn=`<div sui-menu
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
`;var Jn=`<div sui-menu>
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
`;var Ln=`<div sui-menu>
  <div suiMenuItem>
    <div sui-button suiEmphasis="primary">Sign up</div>
  </div>
  <div suiMenuItem>
    <div sui-button>Log-in</div>
  </div>
</div>
`;var Hn=`<div sui-menu
     suiVertical>
  <a suiMenuItem href="https://www.google.com" target="_blank">Visit Google</a>
  <div suiMenuItem suiLink>Link via class</div>
  <div suiMenuItem>Not a link</div>
</div>
`;var Vn=`<div sui-menu>
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
`;var qn=`<div sui-menu>
  <a suiMenuItem>Browse</a>
  <a suiMenuItem>Submit</a>
  <div suiSubMenu
       suiRight>
    <a suiMenuItem>Sign Up</a>
    <a suiMenuItem>Help</a>
  </div>
</div>
`;var On=`<div sui-menu
     suiCompact>
  <a suiMenuItem>A link</a>
  <div suiMenuItem suiLink>div Link</div>
</div>
`;var Un=`<div sui-menu
     suiCompact>
  <a suiMenuItem suiActive>Link</a>
</div>
`;var jn=`<div sui-menu
     suiCompact>
  <div suiMenuItem disabled>Link</div>
</div>
`;var Yn=`<div sui-menu
     suiStackable>
  <div suiMenuItem>
    <img src="assets/images/logo.png">
  </div>
  <a suiMenuItem>Features</a>
  <a suiMenuItem>Testimonials</a>
  <a suiMenuItem>Sign-in</a>
</div>
`;var Xn=`<div sui-menu
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
`;var $n=`import { Component } from '@angular/core';

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
`;var Kn=`<div sui-menu
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
`;var Qn=`import { Component } from '@angular/core';

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
`;var Zn=`<div sui-menu
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
`;var el=`import { Component } from '@angular/core';

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
`;var tl=`<div sui-menu
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
`;var il=`<div sui-menu
     suiIcon="labeled icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i>Games</a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i>Channels</a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i>Videos</a>
</div>
`;var nl=`<div sui-menu
     suiVertical
     suiFluid>
  <a suiMenuItem>Run</a>
  <a suiMenuItem>Walk</a>
  <a suiMenuItem>Bike</a>
</div>
`;var ll=`<div sui-menu
     suiCompact
     suiIcon="labeled icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i>Games</a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i>Channels</a>
</div>
`;var al=`<div sui-menu
     suiWidth="three">
  <a suiMenuItem>Buy</a>
  <a suiMenuItem>Sell</a>
  <a suiMenuItem>Rent</a>
</div>
`;var dl=`<div sui-menu
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
`;var rl=`<div sui-menu
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
`;var ml=`<div sui-menu>
  <a suiMenuItem suiFitted="fitted">No padding whatsoever</a>
  <a suiMenuItem suiFitted="horizontally fitted">No horizontal padding</a>
  <a suiMenuItem suiFitted="vertically fitted">No vertical padding</a>
</div>
`;var ol=`<div sui-menu
     suiBorderless
     suiWidth="five">
  <a suiMenuItem>1</a>
  <a suiMenuItem>2</a>
  <a suiMenuItem>3</a>
  <a suiMenuItem>4</a>
  <a suiMenuItem>5</a>
</div>
`;var C=class{constructor(){this.activeItem="home"}select(s){this.activeItem=s}},sl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-menu-example"]],standalone:!1,features:[c],decls:9,vars:0,consts:[["sui-menu",""],["suiMenuItem","","suiHeader",""],["suiMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Our Company"),t(),i(3,"a",2),e(4,"About Us"),t(),i(5,"a",2),e(6,"Jobs"),t(),i(7,"a",2),e(8,"Locations"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),pl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-menu-evenly-example"]],standalone:!1,features:[c],decls:7,vars:3,consts:[["sui-menu","","suiWidth","three"],["suiMenuItem","",3,"click","suiActive"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("home")}),e(2," Home "),t(),i(3,"a",1),x("click",function(){return d.select("messages")}),e(4," Messages "),t(),i(5,"a",1),x("click",function(){return d.select("friends")}),e(6," Friends "),t()()),a&2&&(m(),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[b,y],encapsulation:2})}}return n})(),ul=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-secondary-example"]],standalone:!1,features:[c],decls:14,vars:3,consts:[["sui-menu","","suiSecondary",""],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-input","","suiIcon","icon"],["type","text","placeholder","Search..."],["sui-icon","","suiIconType","search link"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("home")}),e(2," Home "),t(),i(3,"a",1),x("click",function(){return d.select("messages")}),e(4," Messages "),t(),i(5,"a",1),x("click",function(){return d.select("friends")}),e(6," Friends "),t(),i(7,"div",2)(8,"div",3)(9,"div",4),r(10,"input",5)(11,"i",6),t()(),i(12,"a",3),e(13,"Logout"),t()()()),a&2&&(m(),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[M,b,y,Q,ie],encapsulation:2})}}return n})(),cl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-pointing-example"]],standalone:!1,features:[c],decls:14,vars:3,consts:[["sui-menu","","suiPointing",""],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-input","","suiIcon","icon","suiTransparent",""],["type","text","placeholder","Search..."],["sui-icon","","suiIconType","search link"],["sui-segment",""],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("home")}),e(2," Home "),t(),i(3,"a",1),x("click",function(){return d.select("messages")}),e(4," Messages "),t(),i(5,"a",1),x("click",function(){return d.select("friends")}),e(6," Friends "),t(),i(7,"div",2)(8,"div",3)(9,"div",4),r(10,"input",5)(11,"i",6),t()()()(),i(12,"div",7),r(13,"doc-wireframe",8),t()),a&2&&(m(),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[I,M,z,b,y,Q,ie],encapsulation:2})}}return n})(),vl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-secondary-pointing-example"]],standalone:!1,features:[c],decls:12,vars:3,consts:[["sui-menu","","suiSecondary","","suiPointing",""],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-segment",""],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("home")}),e(2," Home "),t(),i(3,"a",1),x("click",function(){return d.select("messages")}),e(4," Messages "),t(),i(5,"a",1),x("click",function(){return d.select("friends")}),e(6," Friends "),t(),i(7,"div",2)(8,"a",3),e(9,"Logout"),t()()(),i(10,"div",4),r(11,"doc-wireframe",5),t()),a&2&&(m(),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[I,z,b,y,Q],encapsulation:2})}}return n})(),xl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-tabular-example"]],standalone:!1,features:[c],decls:5,vars:2,consts:[["sui-menu","","suiTabular",""],["suiMenuItem","",3,"click","suiActive"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("bio")}),e(2," Bio "),t(),i(3,"a",1),x("click",function(){return d.select("photos")}),e(4," Photos "),t()()),a&2&&(m(),o("suiActive",d.activeItem==="bio"),m(2),o("suiActive",d.activeItem==="photos"))},dependencies:[b,y],encapsulation:2})}}return n})(),Sl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-tabular-attached-example"]],standalone:!1,features:[c],decls:12,vars:2,consts:[["sui-menu","","suiTabular","","suiAttached","top"],["suiMenuItem","",3,"click","suiActive"],["suiSubMenu","","suiRight",""],["suiMenuItem",""],["sui-input","","suiIcon","icon","suiTransparent",""],["type","text","placeholder","Search users..."],["sui-icon","","suiIconType","search link"],["sui-segment","","suiAttached","bottom attached"],["type","paragraph"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("bio")}),e(2," Bio "),t(),i(3,"a",1),x("click",function(){return d.select("photos")}),e(4," Photos "),t(),i(5,"div",2)(6,"div",3)(7,"div",4),r(8,"input",5)(9,"i",6),t()()()(),i(10,"div",7),r(11,"doc-wireframe",8),t()),a&2&&(m(),o("suiActive",d.activeItem==="bio"),m(2),o("suiActive",d.activeItem==="photos"))},dependencies:[I,M,z,b,y,Q,ie],encapsulation:2})}}return n})(),hl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-text-example"]],standalone:!1,features:[c],decls:9,vars:3,consts:[["sui-menu","","suiText",""],["suiMenuItem","","suiHeader",""],["suiMenuItem","",3,"click","suiActive"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Sort By"),t(),i(3,"a",2),x("click",function(){return d.select("closest")}),e(4," Closest "),t(),i(5,"a",2),x("click",function(){return d.select("most-comments")}),e(6," Most Comments "),t(),i(7,"a",2),x("click",function(){return d.select("most-popular")}),e(8," Most Popular "),t()()),a&2&&(m(3),o("suiActive",d.activeItem==="closest"),m(2),o("suiActive",d.activeItem==="most-comments"),m(2),o("suiActive",d.activeItem==="most-popular"))},dependencies:[b,y],encapsulation:2})}}return n})(),fl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-vertical-example"]],standalone:!1,features:[c],decls:17,vars:0,consts:[["sui-menu","","suiVertical",""],["suiMenuItem","","suiActive","","suiColour","teal"],["sui-label","","suiColour","teal","suiPointing","left"],["suiMenuItem",""],["sui-label",""],["sui-input","","suiIcon","icon","suiTransparent",""],["type","text","placeholder","Search mail..."],["sui-icon","","suiIconType","search"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2," Inbox "),i(3,"div",2),e(4,"1"),t()(),i(5,"a",3),e(6," Spam "),i(7,"div",4),e(8,"51"),t()(),i(9,"a",3),e(10," Updates "),i(11,"div",4),e(12,"1"),t()(),i(13,"div",3)(14,"div",5),r(15,"input",6)(16,"i",7),t()()())},dependencies:[M,P,b,y,ie],encapsulation:2})}}return n})(),El=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-vertical-secondary-example"]],standalone:!1,features:[c],decls:14,vars:6,consts:[["sui-menu","","suiVertical","","suiSecondary",""],["suiMenuItem","",3,"click","suiActive"],["sui-menu","","suiVertical","","suiPointing",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("account")}),e(2," Account "),t(),i(3,"a",1),x("click",function(){return d.select("settings")}),e(4," Settings "),t(),i(5,"a",1),x("click",function(){return d.select("display-options")}),e(6," Display Options "),t()(),i(7,"div",2)(8,"a",1),x("click",function(){return d.select("home")}),e(9," Home "),t(),i(10,"a",1),x("click",function(){return d.select("messages")}),e(11," Messages "),t(),i(12,"a",1),x("click",function(){return d.select("friends")}),e(13," Friends "),t()()),a&2&&(m(),o("suiActive",d.activeItem==="account"),m(2),o("suiActive",d.activeItem==="settings"),m(2),o("suiActive",d.activeItem==="display-options"),m(3),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[b,y],encapsulation:2})}}return n})(),gl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-pagination-example"]],standalone:!1,features:[c],decls:11,vars:0,consts:[["sui-menu","","suiPagination",""],["suiMenuItem","","suiActive",""],["suiMenuItem","","disabled",""],["suiMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"1"),t(),i(3,"div",2),e(4,"..."),t(),i(5,"a",3),e(6,"10"),t(),i(7,"a",3),e(8,"11"),t(),i(9,"a",3),e(10,"12"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),bl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-header-example"]],standalone:!1,features:[c],decls:24,vars:0,consts:[["sui-menu",""],["suiMenuItem","","suiHeader",""],["suiMenuItem",""],["sui-menu","","suiVertical",""],["suiMenuHeader",""],["suiSubMenu",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Our Company"),t(),i(3,"a",2),e(4,"About Us"),t(),i(5,"a",2),e(6,"Jobs"),t()(),i(7,"div",3)(8,"div",2)(9,"div",4),e(10,"Products"),t(),i(11,"div",5)(12,"a",2),e(13,"Enterprise"),t(),i(14,"a",2),e(15,"Consumer"),t()()(),i(16,"div",2)(17,"div",4),e(18,"Hosting"),t(),i(19,"div",5)(20,"a",2),e(21,"Shared"),t(),i(22,"a",2),e(23,"Dedicated"),t()()()())},dependencies:[b,y,Q,Ge],encapsulation:2})}}return n})(),yl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-text-content-example"]],standalone:!1,features:[c],decls:11,vars:0,consts:[["sui-menu","","suiVertical",""],["suiMenuItem",""],["sui-header",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),e(3,"Promotions"),t(),i(4,"p"),e(5,"Check out our new promotions"),t()(),i(6,"div",1)(7,"h4",2),e(8,"Coupons"),t(),i(9,"p"),e(10,"Check out our collection of coupons"),t()()())},dependencies:[k,b,y],encapsulation:2})}}return n})(),Cl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-input-example"]],standalone:!1,features:[c],decls:11,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],["sui-input","","suiIcon","icon"],["type","text","placeholder","Search..."],["sui-icon","","suiIconType","search"],["suiSubMenu","","suiRight",""],["sui-input","","suiAction","action"],["type","text","placeholder","Navigate to..."],["sui-button","","suiColour","blue"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),r(3,"input",3)(4,"i",4),t()(),i(5,"div",5)(6,"div",1)(7,"div",6),r(8,"input",7),i(9,"div",8),e(10,"Go"),t()()()()())},dependencies:[M,A,b,y,Q,ie],encapsulation:2})}}return n})(),Fl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-button-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),e(3,"Sign up"),t()(),i(4,"div",1)(5,"div",3),e(6,"Log-in"),t()()())},dependencies:[A,b,y],encapsulation:2})}}return n})(),Dl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-link-item-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-menu","","suiVertical",""],["suiMenuItem","","href","https://www.google.com","target","_blank"],["suiMenuItem","","suiLink",""],["suiMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Visit Google"),t(),i(3,"div",2),e(4,"Link via class"),t(),i(5,"div",3),e(6,"Not a link"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Ml=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-dropdown-item-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),i(3,"sui-dropdown",1)(4,"span",2),e(5,"More"),t(),r(6,"i",3),i(7,"div",4)(8,"div",5),e(9,"Edit Profile"),t(),i(10,"div",5),e(11,"Choose Language"),t(),i(12,"div",5),e(13,"Account Settings"),t()()()())},dependencies:[M,b,y,$e,Ye,Xe],encapsulation:2})}}return n})(),_l=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-sub-menu-example"]],standalone:!1,features:[c],decls:10,vars:0,consts:[["sui-menu",""],["suiMenuItem",""],["suiSubMenu","","suiRight",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Browse"),t(),i(3,"a",1),e(4,"Submit"),t(),i(5,"div",2)(6,"a",1),e(7,"Sign Up"),t(),i(8,"a",1),e(9,"Help"),t()()())},dependencies:[b,y,Q],encapsulation:2})}}return n})(),wl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-hover-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-menu","","suiCompact",""],["suiMenuItem",""],["suiMenuItem","","suiLink",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"A link"),t(),i(3,"div",2),e(4,"div Link"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Tl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-active-example"]],standalone:!1,features:[c],decls:3,vars:0,consts:[["sui-menu","","suiCompact",""],["suiMenuItem","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Link"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Il=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-disabled-example"]],standalone:!1,features:[c],decls:3,vars:0,consts:[["sui-menu","","suiCompact",""],["suiMenuItem","","disabled",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Link"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Al=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-stackable-example"]],standalone:!1,features:[c],decls:9,vars:0,consts:[["sui-menu","","suiStackable",""],["suiMenuItem",""],["src","assets/images/logo.png"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),r(2,"img",2),t(),i(3,"a",1),e(4,"Features"),t(),i(5,"a",1),e(6,"Testimonials"),t(),i(7,"a",1),e(8,"Sign-in"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),kl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-inverted-example"]],standalone:!1,features:[c],decls:14,vars:6,consts:[["sui-menu","","suiInverted",""],["suiMenuItem","",3,"click","suiActive"],["sui-menu","","suiInverted","","suiVertical",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("home")}),e(2," Home "),t(),i(3,"a",1),x("click",function(){return d.select("messages")}),e(4," Messages "),t(),i(5,"a",1),x("click",function(){return d.select("friends")}),e(6," Friends "),t()(),i(7,"div",2)(8,"a",1),x("click",function(){return d.select("home")}),e(9," Home "),t(),i(10,"a",1),x("click",function(){return d.select("messages")}),e(11," Messages "),t(),i(12,"a",1),x("click",function(){return d.select("friends")}),e(13," Friends "),t()()),a&2&&(m(),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"),m(3),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[b,y],encapsulation:2})}}return n})(),Gl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-colored-example"]],standalone:!1,features:[c],decls:27,vars:13,consts:[["sui-menu","","suiWidth","thirteen"],["suiMenuItem","","suiColour","red",3,"click","suiActive"],["suiMenuItem","","suiColour","orange",3,"click","suiActive"],["suiMenuItem","","suiColour","yellow",3,"click","suiActive"],["suiMenuItem","","suiColour","olive",3,"click","suiActive"],["suiMenuItem","","suiColour","green",3,"click","suiActive"],["suiMenuItem","","suiColour","teal",3,"click","suiActive"],["suiMenuItem","","suiColour","blue",3,"click","suiActive"],["suiMenuItem","","suiColour","violet",3,"click","suiActive"],["suiMenuItem","","suiColour","purple",3,"click","suiActive"],["suiMenuItem","","suiColour","pink",3,"click","suiActive"],["suiMenuItem","","suiColour","brown",3,"click","suiActive"],["suiMenuItem","","suiColour","grey",3,"click","suiActive"],["suiMenuItem","","suiColour","black",3,"click","suiActive"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("red")}),e(2,"Red"),t(),i(3,"a",2),x("click",function(){return d.select("orange")}),e(4,"Orange"),t(),i(5,"a",3),x("click",function(){return d.select("yellow")}),e(6,"Yellow"),t(),i(7,"a",4),x("click",function(){return d.select("olive")}),e(8,"Olive"),t(),i(9,"a",5),x("click",function(){return d.select("green")}),e(10,"Green"),t(),i(11,"a",6),x("click",function(){return d.select("teal")}),e(12,"Teal"),t(),i(13,"a",7),x("click",function(){return d.select("blue")}),e(14,"Blue"),t(),i(15,"a",8),x("click",function(){return d.select("violet")}),e(16,"Violet"),t(),i(17,"a",9),x("click",function(){return d.select("purple")}),e(18,"Purple"),t(),i(19,"a",10),x("click",function(){return d.select("pink")}),e(20,"Pink"),t(),i(21,"a",11),x("click",function(){return d.select("brown")}),e(22,"Brown"),t(),i(23,"a",12),x("click",function(){return d.select("grey")}),e(24,"Grey"),t(),i(25,"a",13),x("click",function(){return d.select("black")}),e(26,"Black"),t()()),a&2&&(m(),o("suiActive",d.activeItem==="red"),m(2),o("suiActive",d.activeItem==="orange"),m(2),o("suiActive",d.activeItem==="yellow"),m(2),o("suiActive",d.activeItem==="olive"),m(2),o("suiActive",d.activeItem==="green"),m(2),o("suiActive",d.activeItem==="teal"),m(2),o("suiActive",d.activeItem==="blue"),m(2),o("suiActive",d.activeItem==="violet"),m(2),o("suiActive",d.activeItem==="purple"),m(2),o("suiActive",d.activeItem==="pink"),m(2),o("suiActive",d.activeItem==="brown"),m(2),o("suiActive",d.activeItem==="grey"),m(2),o("suiActive",d.activeItem==="black"))},dependencies:[b,y],encapsulation:2})}}return n})(),Bl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-colored-menu-example"]],standalone:!1,features:[c],decls:14,vars:6,consts:[["sui-menu","","suiColour","blue","suiWidth","three"],["suiMenuItem","",3,"click","suiActive"],["sui-menu","","suiColour","teal","suiInverted","","suiWidth","three"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),x("click",function(){return d.select("home")}),e(2," Home "),t(),i(3,"a",1),x("click",function(){return d.select("messages")}),e(4," Messages "),t(),i(5,"a",1),x("click",function(){return d.select("friends")}),e(6," Friends "),t()(),i(7,"div",2)(8,"a",1),x("click",function(){return d.select("home")}),e(9," Home "),t(),i(10,"a",1),x("click",function(){return d.select("messages")}),e(11," Messages "),t(),i(12,"a",1),x("click",function(){return d.select("friends")}),e(13," Friends "),t()()),a&2&&(m(),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"),m(3),o("suiActive",d.activeItem==="home"),m(2),o("suiActive",d.activeItem==="messages"),m(2),o("suiActive",d.activeItem==="friends"))},dependencies:[b,y],encapsulation:2})}}return n})(),Nl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-icons-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-menu","","suiIcon","icon"],["suiMenuItem",""],["sui-icon","","suiIconType","gamepad"],["sui-icon","","suiIconType","video camera"],["sui-icon","","suiIconType","video play"],["sui-menu","","suiIcon","icon","suiVertical","","suiCompact",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),r(2,"i",2),t(),i(3,"a",1),r(4,"i",3),t(),i(5,"a",1),r(6,"i",4),t()(),i(7,"div",5)(8,"a",1),r(9,"i",2),t(),i(10,"a",1),r(11,"i",3),t(),i(12,"a",1),r(13,"i",4),t()())},dependencies:[M,b,y],encapsulation:2})}}return n})(),Wl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-labeled-icon-example"]],standalone:!1,features:[c],decls:10,vars:0,consts:[["sui-menu","","suiIcon","labeled icon"],["suiMenuItem",""],["sui-icon","","suiIconType","gamepad"],["sui-icon","","suiIconType","video camera"],["sui-icon","","suiIconType","video play"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),r(2,"i",2),e(3,"Games"),t(),i(4,"a",1),r(5,"i",3),e(6,"Channels"),t(),i(7,"a",1),r(8,"i",4),e(9,"Videos"),t()())},dependencies:[M,b,y],encapsulation:2})}}return n})(),Rl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-fluid-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-menu","","suiVertical","","suiFluid",""],["suiMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Run"),t(),i(3,"a",1),e(4,"Walk"),t(),i(5,"a",1),e(6,"Bike"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Pl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-compact-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-menu","","suiCompact","","suiIcon","labeled icon"],["suiMenuItem",""],["sui-icon","","suiIconType","gamepad"],["sui-icon","","suiIconType","video camera"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),r(2,"i",2),e(3,"Games"),t(),i(4,"a",1),r(5,"i",3),e(6,"Channels"),t()())},dependencies:[M,b,y],encapsulation:2})}}return n})(),zl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-evenly-divided-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-menu","","suiWidth","three"],["suiMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Buy"),t(),i(3,"a",1),e(4,"Sell"),t(),i(5,"a",1),e(6,"Rent"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Jl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-attached-example"]],standalone:!1,features:[c],decls:13,vars:0,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem",""],["sui-segment","","suiAttached","attached"],["type","paragraph"],["sui-menu","","suiAttached","attached"],["type","short-paragraph"],["sui-menu","","suiAttached","bottom"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Top attached"),t()(),i(3,"div",2),r(4,"doc-wireframe",3),t(),i(5,"div",4)(6,"div",1),e(7,"Attached"),t()(),i(8,"div",2),r(9,"doc-wireframe",5),t(),i(10,"div",6)(11,"div",1),e(12,"Bottom attached"),t()())},dependencies:[I,z,b,y],encapsulation:2})}}return n})(),Ll=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-size-example"]],standalone:!1,features:[c],decls:30,vars:0,consts:[["sui-menu","","suiSize","mini","suiCompact",""],["suiMenuItem","","suiActive",""],["suiMenuItem",""],["sui-menu","","suiSize","tiny","suiCompact",""],["sui-menu","","suiSize","small","suiCompact",""],["sui-menu","","suiSize","large","suiCompact",""],["sui-menu","","suiSize","huge","suiCompact",""],["sui-menu","","suiSize","massive","suiCompact",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Mini"),t(),i(3,"a",2),e(4,"Messages"),t()(),i(5,"div",3)(6,"a",1),e(7,"Tiny"),t(),i(8,"a",2),e(9,"Messages"),t()(),i(10,"div",4)(11,"a",1),e(12,"Small"),t(),i(13,"a",2),e(14,"Messages"),t()(),i(15,"div",5)(16,"a",1),e(17,"Large"),t(),i(18,"a",2),e(19,"Messages"),t()(),i(20,"div",6)(21,"a",1),e(22,"Huge"),t(),i(23,"a",2),e(24,"Messages"),t()(),i(25,"div",7)(26,"a",1),e(27,"Massive"),t(),i(28,"a",2),e(29,"Messages"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Hl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-fitted-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-menu",""],["suiMenuItem","","suiFitted","fitted"],["suiMenuItem","","suiFitted","horizontally fitted"],["suiMenuItem","","suiFitted","vertically fitted"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"No padding whatsoever"),t(),i(3,"a",2),e(4,"No horizontal padding"),t(),i(5,"a",3),e(6,"No vertical padding"),t()())},dependencies:[b,y],encapsulation:2})}}return n})(),Vl=(()=>{class n extends C{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu-borderless-example"]],standalone:!1,features:[c],decls:11,vars:0,consts:[["sui-menu","","suiBorderless","","suiWidth","five"],["suiMenuItem",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"1"),t(),i(3,"a",1),e(4,"2"),t(),i(5,"a",1),e(6,"3"),t(),i(7,"a",1),e(8,"4"),t(),i(9,"a",1),e(10,"5"),t()())},dependencies:[b,y],encapsulation:2})}}return n})();function _s(n,s){n&1&&r(0,"doc-menu-menu-example")}function ws(n,s){n&1&&r(0,"doc-menu-menu-evenly-example")}function Ts(n,s){n&1&&r(0,"doc-menu-secondary-example")}function Is(n,s){n&1&&r(0,"doc-menu-pointing-example")}function As(n,s){n&1&&r(0,"doc-menu-secondary-pointing-example")}function ks(n,s){n&1&&r(0,"doc-menu-tabular-example")}function Gs(n,s){n&1&&r(0,"doc-menu-tabular-attached-example")}function Bs(n,s){n&1&&r(0,"doc-menu-text-example")}function Ns(n,s){n&1&&r(0,"doc-menu-vertical-example")}function Ws(n,s){n&1&&r(0,"doc-menu-vertical-secondary-example")}function Rs(n,s){n&1&&r(0,"doc-menu-pagination-example")}function Ps(n,s){n&1&&r(0,"doc-menu-header-example")}function zs(n,s){n&1&&r(0,"doc-menu-text-content-example")}function Js(n,s){n&1&&r(0,"doc-menu-input-example")}function Ls(n,s){n&1&&r(0,"doc-menu-button-example")}function Hs(n,s){n&1&&r(0,"doc-menu-link-item-example")}function Vs(n,s){n&1&&r(0,"doc-menu-dropdown-item-example")}function qs(n,s){n&1&&r(0,"doc-menu-sub-menu-example")}function Os(n,s){n&1&&r(0,"doc-menu-hover-example")}function Us(n,s){n&1&&r(0,"doc-menu-active-example")}function js(n,s){n&1&&r(0,"doc-menu-disabled-example")}function Ys(n,s){n&1&&r(0,"doc-menu-stackable-example")}function Xs(n,s){n&1&&r(0,"doc-menu-inverted-example")}function $s(n,s){n&1&&r(0,"doc-menu-colored-example")}function Ks(n,s){n&1&&r(0,"doc-menu-colored-menu-example")}function Qs(n,s){n&1&&r(0,"doc-menu-icons-example")}function Zs(n,s){n&1&&r(0,"doc-menu-labeled-icon-example")}function e0(n,s){n&1&&r(0,"doc-menu-fluid-example")}function t0(n,s){n&1&&r(0,"doc-menu-compact-example")}function i0(n,s){n&1&&r(0,"doc-menu-evenly-divided-example")}function n0(n,s){n&1&&r(0,"doc-menu-attached-example")}function l0(n,s){n&1&&r(0,"doc-menu-size-example")}function a0(n,s){n&1&&r(0,"doc-menu-fitted-example")}function d0(n,s){n&1&&r(0,"doc-menu-borderless-example")}function r0(n,s){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Menu"),t(),i(6,"p"),e(7,"A menu"),t(),u(8,_s,1,0,"ng-template",5),t(),i(9,"doc-code-sample",6)(10,"p"),e(11,"A menu can have its items divided evenly"),t(),u(12,ws,1,0,"ng-template",5),t(),i(13,"doc-code-sample",6)(14,"h3",4),e(15,"Secondary Menu"),t(),i(16,"p"),e(17,"A menu can adjust its appearance to de-emphasize its contents"),t(),u(18,Ts,1,0,"ng-template",5),t(),i(19,"doc-code-sample",6)(20,"h3",4),e(21,"Pointing"),t(),i(22,"p"),e(23,"A menu can point to show its relationship to nearby content"),t(),u(24,Is,1,0,"ng-template",5),t(),i(25,"doc-code-sample",6)(26,"p"),e(27,"A secondary menu can also point"),t(),u(28,As,1,0,"ng-template",5),t(),i(29,"doc-code-sample",6)(30,"h3",4),e(31,"Tabular"),t(),i(32,"p"),e(33,"A menu can be formatted to show tabs of information"),t(),u(34,ks,1,0,"ng-template",5),t(),i(35,"doc-code-sample",6)(36,"p"),e(37,"A tabular menu can be attached to a segment"),t(),u(38,Gs,1,0,"ng-template",5),t(),i(39,"doc-code-sample",6)(40,"h3",4),e(41,"Text"),t(),i(42,"p"),e(43,"A menu can be formatted for text content"),t(),u(44,Bs,1,0,"ng-template",5),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Vertical Menu"),t(),i(48,"p"),e(49,"A vertical menu displays elements vertically"),t(),u(50,Ns,1,0,"ng-template",5),t(),i(51,"doc-code-sample",6)(52,"p"),e(53,"Vertical menus can be secondary, pointing or text menus"),t(),u(54,Ws,1,0,"ng-template",5),t(),i(55,"doc-code-sample",3)(56,"h3",4),e(57,"Pagination"),t(),i(58,"p"),e(59,"A pagination menu is specially formatted to present links to pages of content"),t(),u(60,Rs,1,0,"ng-template",5),t(),r(61,"br"),i(62,"h2",2),e(63,"Content"),t(),i(64,"doc-code-sample",3)(65,"h3",4),e(66,"Header"),t(),i(67,"p"),e(68,"A menu item may include a header or may itself be a header"),t(),i(69,"div",7),e(70," Use "),i(71,"code"),e(72,"suiHeader"),t(),e(73," on an item, or "),i(74,"code"),e(75,"suiMenuHeader"),t(),e(76," inside an item, to add a header. "),t(),u(77,Ps,1,0,"ng-template",5),t(),i(78,"doc-code-sample",3)(79,"h3",4),e(80,"Text"),t(),i(81,"p"),e(82,"A vertical menu item can include any type of text content"),t(),u(83,zs,1,0,"ng-template",5),t(),i(84,"doc-code-sample",3)(85,"h3",4),e(86,"Input"),t(),i(87,"p"),e(88,"A menu item can contain an input inside of it"),t(),u(89,Js,1,0,"ng-template",5),t(),i(90,"doc-code-sample",3)(91,"h3",4),e(92,"Button"),t(),i(93,"p"),e(94,"A menu item can contain a button inside of it"),t(),u(95,Ls,1,0,"ng-template",5),t(),i(96,"doc-code-sample",3)(97,"h3",4),e(98,"Link Item"),t(),i(99,"p"),e(100,"A menu may contain a link item, or an item formatted as if it is a link"),t(),u(101,Hs,1,0,"ng-template",5),t(),i(102,"doc-code-sample",3)(103,"h3",4),e(104,"Dropdown Item"),t(),i(105,"p"),e(106,"An item may contain a nested menu in a dropdown"),t(),u(107,Vs,1,0,"ng-template",5),t(),i(108,"doc-code-sample",3)(109,"h3",4),e(110,"Menu"),t(),i(111,"p"),e(112,"A menu may contain another menu group in the same level as menu items"),t(),i(113,"div",7),e(114," Use "),i(115,"code"),e(116,"suiSubMenu"),t(),e(117," with "),i(118,"code"),e(119,"suiRight"),t(),e(120," to float a group of items to the right of the menu. "),t(),u(121,qs,1,0,"ng-template",5),t(),r(122,"br"),i(123,"h2",2),e(124,"States"),t(),i(125,"doc-code-sample",3)(126,"h3",4),e(127,"Hover"),t(),i(128,"p"),e(129,"A menu item can be hovered"),t(),i(130,"div",7),e(131," Menu items are only hoverable if they are links, "),i(132,"code"),e(133,"<a>"),t(),e(134," or "),i(135,"code"),e(136,"suiLink"),t(),e(137,". "),t(),u(138,Os,1,0,"ng-template",5),t(),i(139,"doc-code-sample",3)(140,"h3",4),e(141,"Active"),t(),i(142,"p"),e(143,"A menu item can be active"),t(),u(144,Us,1,0,"ng-template",5),t(),i(145,"doc-code-sample",3)(146,"h3",4),e(147,"Disabled"),t(),i(148,"p"),e(149,"A menu item can be disabled"),t(),u(150,js,1,0,"ng-template",5),t(),r(151,"br"),i(152,"h2",2),e(153,"Variations"),t(),i(154,"doc-code-sample",3)(155,"h3",4),e(156,"Stackable"),t(),i(157,"p"),e(158,"A menu can stack at mobile resolutions"),t(),u(159,Ys,1,0,"ng-template",5),t(),i(160,"doc-code-sample",6)(161,"h3",4),e(162,"Inverted"),t(),i(163,"p"),e(164,"A menu may have its colors inverted to show greater contrast"),t(),u(165,Xs,1,0,"ng-template",5),t(),i(166,"doc-code-sample",6)(167,"h3",4),e(168,"Colored"),t(),i(169,"p"),e(170,"Additional colors can be specified"),t(),u(171,$s,1,0,"ng-template",5),t(),i(172,"doc-code-sample",6)(173,"p"),e(174,"A whole menu can also be coloured, or coloured and inverted"),t(),u(175,Ks,1,0,"ng-template",5),t(),i(176,"doc-code-sample",3)(177,"h3",4),e(178,"Icons"),t(),i(179,"p"),e(180,"A menu may have just icons"),t(),u(181,Qs,1,0,"ng-template",5),t(),i(182,"doc-code-sample",3)(183,"h3",4),e(184,"Labeled Icon"),t(),i(185,"p"),e(186,"A menu may have labeled icons"),t(),u(187,Zs,1,0,"ng-template",5),t(),i(188,"doc-code-sample",3)(189,"h3",4),e(190,"Fluid"),t(),i(191,"p"),e(192,"A vertical menu may take the size of its container"),t(),i(193,"div",7),e(194," A horizontal menu will be fluid by default. "),t(),u(195,e0,1,0,"ng-template",5),t(),i(196,"doc-code-sample",3)(197,"h3",4),e(198,"Compact"),t(),i(199,"p"),e(200,"A menu can take up only the space necessary to fit its content"),t(),u(201,t0,1,0,"ng-template",5),t(),i(202,"doc-code-sample",3)(203,"h3",4),e(204,"Evenly Divided"),t(),i(205,"p"),e(206,"A menu can have its items divided evenly"),t(),u(207,i0,1,0,"ng-template",5),t(),i(208,"doc-code-sample",3)(209,"h3",4),e(210,"Attached"),t(),i(211,"p"),e(212,"A menu may be attached to other content segments"),t(),u(213,n0,1,0,"ng-template",5),t(),i(214,"doc-code-sample",3)(215,"h3",4),e(216,"Size"),t(),i(217,"p"),e(218,"A menu can vary in size"),t(),u(219,l0,1,0,"ng-template",5),t(),i(220,"doc-code-sample",3)(221,"h3",4),e(222,"Fitted"),t(),i(223,"p"),e(224,"A menu item or menu can remove element padding, vertically or horizontally"),t(),u(225,a0,1,0,"ng-template",5),t(),i(226,"doc-code-sample",3)(227,"h3",4),e(228,"Borderless"),t(),i(229,"p"),e(230,"A menu item or menu can have no borders"),t(),u(231,d0,1,0,"ng-template",5),t()()),n&2){let l=H();m(3),o("templateCode",l.snippetMenu),m(6),o("templateCode",l.snippetMenuEvenly)("componentCode",l.snippetMenuEvenlyTs),m(4),o("templateCode",l.snippetSecondary)("componentCode",l.snippetSecondaryTs),m(6),o("templateCode",l.snippetPointing)("componentCode",l.snippetPointingTs),m(6),o("templateCode",l.snippetSecondaryPointing)("componentCode",l.snippetSecondaryPointingTs),m(4),o("templateCode",l.snippetTabular)("componentCode",l.snippetTabularTs),m(6),o("templateCode",l.snippetTabularAttached)("componentCode",l.snippetTabularAttachedTs),m(4),o("templateCode",l.snippetText)("componentCode",l.snippetTextTs),m(6),o("templateCode",l.snippetVertical),m(6),o("templateCode",l.snippetVerticalSecondary)("componentCode",l.snippetVerticalSecondaryTs),m(4),o("templateCode",l.snippetPagination),m(9),o("templateCode",l.snippetHeader),m(14),o("templateCode",l.snippetTextContent),m(6),o("templateCode",l.snippetInput),m(6),o("templateCode",l.snippetButton),m(6),o("templateCode",l.snippetLinkItem),m(6),o("templateCode",l.snippetDropdownItem),m(6),o("templateCode",l.snippetSubMenu),m(17),o("templateCode",l.snippetHover),m(14),o("templateCode",l.snippetActive),m(6),o("templateCode",l.snippetDisabled),m(9),o("templateCode",l.snippetStackable),m(6),o("templateCode",l.snippetInverted)("componentCode",l.snippetInvertedTs),m(6),o("templateCode",l.snippetColored)("componentCode",l.snippetColoredTs),m(6),o("templateCode",l.snippetColoredMenu)("componentCode",l.snippetColoredMenuTs),m(4),o("templateCode",l.snippetIcons),m(6),o("templateCode",l.snippetLabeledIcon),m(6),o("templateCode",l.snippetFluid),m(8),o("templateCode",l.snippetCompact),m(6),o("templateCode",l.snippetEvenlyDivided),m(6),o("templateCode",l.snippetAttached),m(6),o("templateCode",l.snippetSize),m(6),o("templateCode",l.snippetFitted),m(6),o("templateCode",l.snippetBorderless)}}function m0(n,s){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-menu"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiWidth "),t(),i(20,"td"),e(21," Divide the menu into a number of evenly sized items. Allowed values are "),i(22,"span",9),e(23,"'one'"),t(),e(24," through "),i(25,"span",9),e(26,"'sixteen'"),t(),e(27," | "),i(28,"span",9),e(29,"null"),t()(),i(30,"td")(31,"div",10),e(32," string "),t()(),i(33,"td")(34,"div",11),e(35," null "),t()()(),i(36,"tr")(37,"td"),e(38," suiColour "),t(),i(39,"td"),e(40," Set the colour of the menu. Allowed values are "),i(41,"span",9),e(42,"'red'"),t(),e(43," | "),i(44,"span",9),e(45,"'orange'"),t(),e(46," | "),i(47,"span",9),e(48,"'yellow'"),t(),e(49," | "),i(50,"span",9),e(51,"'olive'"),t(),e(52," | "),i(53,"span",9),e(54,"'green'"),t(),e(55," | "),i(56,"span",9),e(57,"'teal'"),t(),e(58," | "),i(59,"span",9),e(60,"'blue'"),t(),e(61," | "),i(62,"span",9),e(63,"'violet'"),t(),e(64," | "),i(65,"span",9),e(66,"'purple'"),t(),e(67," | "),i(68,"span",9),e(69,"'pink'"),t(),e(70," | "),i(71,"span",9),e(72,"'brown'"),t(),e(73," | "),i(74,"span",9),e(75,"'grey'"),t(),e(76," | "),i(77,"span",9),e(78,"'black'"),t(),e(79," | "),i(80,"span",9),e(81,"null"),t()(),i(82,"td")(83,"div",10),e(84," string "),t()(),i(85,"td")(86,"div",11),e(87," null "),t()()(),i(88,"tr")(89,"td"),e(90," suiSize "),t(),i(91,"td"),e(92," Set the size of the menu. Allowed values are "),i(93,"span",9),e(94,"'mini'"),t(),e(95," | "),i(96,"span",9),e(97,"'tiny'"),t(),e(98," | "),i(99,"span",9),e(100,"'small'"),t(),e(101," | "),i(102,"span",9),e(103,"'large'"),t(),e(104," | "),i(105,"span",9),e(106,"'huge'"),t(),e(107," | "),i(108,"span",9),e(109,"'massive'"),t(),e(110," | "),i(111,"span",9),e(112,"null"),t()(),i(113,"td")(114,"div",10),e(115," string "),t()(),i(116,"td")(117,"div",11),e(118," null "),t()()(),i(119,"tr")(120,"td"),e(121," suiAttached "),t(),i(122,"td"),e(123," Attach the menu to other content. Allowed values are "),i(124,"span",9),e(125,"'top'"),t(),e(126," | "),i(127,"span",9),e(128,"'bottom'"),t(),e(129," | "),i(130,"span",9),e(131,"'attached'"),t(),e(132," | "),i(133,"span",9),e(134,"null"),t()(),i(135,"td")(136,"div",10),e(137," string "),t()(),i(138,"td")(139,"div",11),e(140," null "),t()()(),i(141,"tr")(142,"td"),e(143," suiFixed "),t(),i(144,"td"),e(145," Fix the menu to a side of the viewport. Allowed values are "),i(146,"span",9),e(147,"'top'"),t(),e(148," | "),i(149,"span",9),e(150,"'bottom'"),t(),e(151," | "),i(152,"span",9),e(153,"'left'"),t(),e(154," | "),i(155,"span",9),e(156,"'right'"),t(),e(157," | "),i(158,"span",9),e(159,"null"),t()(),i(160,"td")(161,"div",10),e(162," string "),t()(),i(163,"td")(164,"div",11),e(165," null "),t()()(),i(166,"tr")(167,"td"),e(168," suiIcon "),t(),i(169,"td"),e(170," Format the menu for icon items. Allowed values are "),i(171,"span",9),e(172,"'icon'"),t(),e(173," | "),i(174,"span",9),e(175,"'labeled icon'"),t(),e(176," | "),i(177,"span",9),e(178,"null"),t()(),i(179,"td")(180,"div",10),e(181," string "),t()(),i(182,"td")(183,"div",11),e(184," null "),t()()(),i(185,"tr")(186,"td"),e(187," suiSecondary "),t(),i(188,"td"),e(189," De-emphasize the contents of the menu "),t(),i(190,"td")(191,"div",10),e(192," boolean "),t()(),i(193,"td")(194,"div",11),e(195," false "),t()()(),i(196,"tr")(197,"td"),e(198," suiPointing "),t(),i(199,"td"),e(200," Point to show the relationship to nearby content "),t(),i(201,"td")(202,"div",10),e(203," boolean "),t()(),i(204,"td")(205,"div",11),e(206," false "),t()()(),i(207,"tr")(208,"td"),e(209," suiTabular "),t(),i(210,"td"),e(211," Format the menu as tabs "),t(),i(212,"td")(213,"div",10),e(214," boolean "),t()(),i(215,"td")(216,"div",11),e(217," false "),t()()(),i(218,"tr")(219,"td"),e(220," suiText "),t(),i(221,"td"),e(222," Format the menu for text content "),t(),i(223,"td")(224,"div",10),e(225," boolean "),t()(),i(226,"td")(227,"div",11),e(228," false "),t()()(),i(229,"tr")(230,"td"),e(231," suiVertical "),t(),i(232,"td"),e(233," Display the items vertically "),t(),i(234,"td")(235,"div",10),e(236," boolean "),t()(),i(237,"td")(238,"div",11),e(239," false "),t()()(),i(240,"tr")(241,"td"),e(242," suiPagination "),t(),i(243,"td"),e(244," Format the menu for pagination links "),t(),i(245,"td")(246,"div",10),e(247," boolean "),t()(),i(248,"td")(249,"div",11),e(250," false "),t()()(),i(251,"tr")(252,"td"),e(253," suiInverted "),t(),i(254,"td"),e(255," Invert the colours of the menu "),t(),i(256,"td")(257,"div",10),e(258," boolean "),t()(),i(259,"td")(260,"div",11),e(261," false "),t()()(),i(262,"tr")(263,"td"),e(264," suiFluid "),t(),i(265,"td"),e(266," Make a vertical menu take the width of its container "),t(),i(267,"td")(268,"div",10),e(269," boolean "),t()(),i(270,"td")(271,"div",11),e(272," false "),t()()(),i(273,"tr")(274,"td"),e(275," suiCompact "),t(),i(276,"td"),e(277," Only take up the space needed to fit the items "),t(),i(278,"td")(279,"div",10),e(280," boolean "),t()(),i(281,"td")(282,"div",11),e(283," false "),t()()(),i(284,"tr")(285,"td"),e(286," suiStackable "),t(),i(287,"td"),e(288," Stack the items at mobile resolutions "),t(),i(289,"td")(290,"div",10),e(291," boolean "),t()(),i(292,"td")(293,"div",11),e(294," false "),t()()(),i(295,"tr")(296,"td"),e(297," suiBorderless "),t(),i(298,"td"),e(299," Remove the item borders "),t(),i(300,"td")(301,"div",10),e(302," boolean "),t()(),i(303,"td")(304,"div",11),e(305," false "),t()()(),i(306,"tr")(307,"td"),e(308," suiRight "),t(),i(309,"td"),e(310," Position the menu on the right "),t(),i(311,"td")(312,"div",10),e(313," boolean "),t()(),i(314,"td")(315,"div",11),e(316," false "),t()()()()(),i(317,"h2",2),e(318,"suiMenuItem"),t(),i(319,"h4",4),e(320,"Properties"),t(),i(321,"table",8)(322,"thead")(323,"tr")(324,"th"),e(325,"Property"),t(),i(326,"th"),e(327,"Description"),t(),i(328,"th"),e(329,"Type"),t(),i(330,"th"),e(331,"Default"),t()()(),i(332,"tbody")(333,"tr")(334,"td"),e(335," suiColour "),t(),i(336,"td"),e(337," Set the colour of the item. Allowed values are "),i(338,"span",9),e(339,"'red'"),t(),e(340," | "),i(341,"span",9),e(342,"'orange'"),t(),e(343," | "),i(344,"span",9),e(345,"'yellow'"),t(),e(346," | "),i(347,"span",9),e(348,"'olive'"),t(),e(349," | "),i(350,"span",9),e(351,"'green'"),t(),e(352," | "),i(353,"span",9),e(354,"'teal'"),t(),e(355," | "),i(356,"span",9),e(357,"'blue'"),t(),e(358," | "),i(359,"span",9),e(360,"'violet'"),t(),e(361," | "),i(362,"span",9),e(363,"'purple'"),t(),e(364," | "),i(365,"span",9),e(366,"'pink'"),t(),e(367," | "),i(368,"span",9),e(369,"'brown'"),t(),e(370," | "),i(371,"span",9),e(372,"'grey'"),t(),e(373," | "),i(374,"span",9),e(375,"'black'"),t(),e(376," | "),i(377,"span",9),e(378,"null"),t()(),i(379,"td")(380,"div",10),e(381," string "),t()(),i(382,"td")(383,"div",11),e(384," null "),t()()(),i(385,"tr")(386,"td"),e(387," suiFitted "),t(),i(388,"td"),e(389," Remove the padding from the item. Allowed values are "),i(390,"span",9),e(391,"'fitted'"),t(),e(392," | "),i(393,"span",9),e(394,"'horizontally fitted'"),t(),e(395," | "),i(396,"span",9),e(397,"'vertically fitted'"),t(),e(398," | "),i(399,"span",9),e(400,"null"),t()(),i(401,"td")(402,"div",10),e(403," string "),t()(),i(404,"td")(405,"div",11),e(406," null "),t()()(),i(407,"tr")(408,"td"),e(409," suiActive "),t(),i(410,"td"),e(411," Mark the item as active "),t(),i(412,"td")(413,"div",10),e(414," boolean "),t()(),i(415,"td")(416,"div",11),e(417," false "),t()()(),i(418,"tr")(419,"td"),e(420," suiHeader "),t(),i(421,"td"),e(422," Format the item as a header "),t(),i(423,"td")(424,"div",10),e(425," boolean "),t()(),i(426,"td")(427,"div",11),e(428," false "),t()()(),i(429,"tr")(430,"td"),e(431," suiLink "),t(),i(432,"td"),e(433," Format the item as a link "),t(),i(434,"td")(435,"div",10),e(436," boolean "),t()(),i(437,"td")(438,"div",11),e(439," false "),t()()(),i(440,"tr")(441,"td"),e(442," suiBrowser "),t(),i(443,"td"),e(444," Format the item as a browser item "),t(),i(445,"td")(446,"div",10),e(447," boolean "),t()(),i(448,"td")(449,"div",11),e(450," false "),t()()(),i(451,"tr")(452,"td"),e(453," disabled "),t(),i(454,"td"),e(455," Disable the item "),t(),i(456,"td")(457,"div",10),e(458," boolean "),t()(),i(459,"td")(460,"div",11),e(461," false "),t()()()()(),i(462,"h2",2),e(463,"suiSubMenu"),t(),i(464,"h4",4),e(465,"Properties"),t(),i(466,"table",8)(467,"thead")(468,"tr")(469,"th"),e(470,"Property"),t(),i(471,"th"),e(472,"Description"),t(),i(473,"th"),e(474,"Type"),t(),i(475,"th"),e(476,"Default"),t()()(),i(477,"tbody")(478,"tr")(479,"td"),e(480," suiRight "),t(),i(481,"td"),e(482," Float the group of items to the right of the parent menu "),t(),i(483,"td")(484,"div",10),e(485," boolean "),t()(),i(486,"td")(487,"div",11),e(488," false "),t()()()()()())}var ql=(()=>{class n{constructor(l){this.snippetMenu=En,this.snippetMenuEvenly=gn,this.snippetMenuEvenlyTs=bn,this.snippetSecondary=yn,this.snippetSecondaryTs=Cn,this.snippetPointing=Fn,this.snippetPointingTs=Dn,this.snippetSecondaryPointing=Mn,this.snippetSecondaryPointingTs=_n,this.snippetTabular=wn,this.snippetTabularTs=Tn,this.snippetTabularAttached=In,this.snippetTabularAttachedTs=An,this.snippetText=kn,this.snippetTextTs=Gn,this.snippetVertical=Bn,this.snippetVerticalSecondary=Nn,this.snippetVerticalSecondaryTs=Wn,this.snippetPagination=Rn,this.snippetHeader=Pn,this.snippetTextContent=zn,this.snippetInput=Jn,this.snippetButton=Ln,this.snippetLinkItem=Hn,this.snippetDropdownItem=Vn,this.snippetSubMenu=qn,this.snippetHover=On,this.snippetActive=Un,this.snippetDisabled=jn,this.snippetStackable=Yn,this.snippetInverted=Xn,this.snippetInvertedTs=$n,this.snippetColored=Kn,this.snippetColoredTs=Qn,this.snippetColoredMenu=Zn,this.snippetColoredMenuTs=el,this.snippetIcons=tl,this.snippetLabeledIcon=il,this.snippetFluid=nl,this.snippetCompact=ll,this.snippetEvenlyDivided=al,this.snippetAttached=dl,this.snippetSize=rl,this.snippetFitted=ml,this.snippetBorderless=ol,l.setTitle("Menu | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(V))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-menu"]],standalone:!1,decls:3,vars:2,consts:[["header","Menu","subHeader","A menu displays grouped navigation actions","semanticUrl","https://semantic-ui.com/collections/menu.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,d){a&1&&(i(0,"doc-page",0),u(1,r0,232,45,"div",1)(2,m0,489,0,"div",1),t()),a&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,O,q,U,k,D,h,P,sl,pl,ul,cl,vl,xl,Sl,hl,fl,El,gl,bl,yl,Cl,Fl,Dl,Ml,_l,wl,Tl,Il,Al,kl,Gl,Bl,Nl,Wl,Rl,Pl,zl,Jl,Ll,Hl,Vl],encapsulation:2})}}return n})();var Ol=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Header</th>
    <th>Header</th>
    <th>Header</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  </tbody>
  <tfoot>
  <tr>
    <th colspan="3">
      <div sui-menu
           suiPagination
           class="right floated">
        <a suiMenuItem><i sui-icon suiIconType="chevron left"></i></a>
        <a suiMenuItem>1</a>
        <a suiMenuItem>2</a>
        <a suiMenuItem>3</a>
        <a suiMenuItem><i sui-icon suiIconType="chevron right"></i></a>
      </div>
    </th>
  </tr>
  </tfoot>
</table>
`;var Ul=`<table sui-table
       suiDefinition>
  <thead>
  <tr>
    <th></th>
    <th>Arguments</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>reset rating</td>
    <td>None</td>
    <td>Resets rating to default value</td>
  </tr>
  <tr>
    <td>set rating</td>
    <td>rating (integer)</td>
    <td>Sets the current star rating to specified value</td>
  </tr>
  </tbody>
</table>
`;var jl=`<table sui-table
       suiCelled
       suiStructured>
  <thead>
  <tr>
    <th rowspan="2">Name</th>
    <th rowspan="2">Type</th>
    <th rowspan="2">Files</th>
    <th colspan="3">Languages</th>
  </tr>
  <tr>
    <th>Ruby</th>
    <th>JavaScript</th>
    <th>Python</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Alpha Team</td>
    <td>Project 1</td>
    <td suiTableCell suiTextAlignment="right">2</td>
    <td suiTableCell suiTextAlignment="center"><i sui-icon suiIconType="large green checkmark"></i></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Beta Team</td>
    <td>Project 1</td>
    <td suiTableCell suiTextAlignment="right">52</td>
    <td suiTableCell suiTextAlignment="center"><i sui-icon suiIconType="large green checkmark"></i></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Project 2</td>
    <td suiTableCell suiTextAlignment="right">12</td>
    <td></td>
    <td suiTableCell suiTextAlignment="center"><i sui-icon suiIconType="large green checkmark"></i></td>
    <td></td>
  </tr>
  </tbody>
</table>
`;var Yl=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>No Name Specified</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  <tr suiTableRow suiState="positive">
    <td>Jimmy</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td suiTableCell suiState="negative">Unknown</td>
    <td>Requires call</td>
  </tr>
  <tr suiTableRow suiState="negative">
    <td>Jill</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Xl=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow suiState="error">
    <td>No Name Specified</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jimmy</td>
    <td suiTableCell suiState="error">Cannot pull data</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Unknown</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
`;var $l=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow suiState="warning">
    <td>No Name Specified</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jimmy</td>
    <td>Approved</td>
    <td suiTableCell suiState="warning">Requires call</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Kl=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow suiActive>
    <td>John</td>
    <td>Selected</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td suiTableCell suiActive>Approved</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Ql=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow disabled>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Selected</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td suiTableCell disabled>Approved</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Zl=`<table sui-table
       suiCelled
       suiSingleLine>
  <thead>
  <tr>
    <th>Name</th>
    <th>Registration Date</th>
    <th>E-mail address</th>
    <th>Premium Plan</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John Lilki</td>
    <td>September 14, 2013</td>
    <td>jhlilk22@yahoo.com</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Jamie Harington</td>
    <td>January 11, 2014</td>
    <td>jamieharingonton@yahoo.com</td>
    <td>Yes</td>
  </tr>
  </tbody>
</table>
`;var ea=`<table sui-table
       suiCelled
       suiFixed>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</td>
  </tr>
  </tbody>
</table>
`;var ta=`<table sui-table
       suiCelled
       suiStacking="unstackable">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiCelled
       suiStacking="tablet stackable">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ia=`<table sui-table
       suiCelled
       suiSelectable>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var na=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>No Action</td>
    <td suiTableCell suiSelectable><a href="#">Edit</a></td>
  </tr>
  <tr suiTableRow suiState="warning">
    <td>Jimmy</td>
    <td>Requires Action</td>
    <td suiTableCell suiSelectable><a href="#">Edit</a></td>
  </tr>
  </tbody>
</table>
`;var la=`<table sui-table
       suiStriped>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td suiTableCell suiVerticalAlignment="top">Notes<br>1<br>2<br></td>
  </tr>
  <tr suiTableRow suiVerticalAlignment="bottom">
    <td>Jamie</td>
    <td>Approved</td>
    <td>Notes<br>1<br>2<br></td>
  </tr>
  </tbody>
</table>
`;var aa=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th suiTableHeaderCell suiTextAlignment="right">Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td suiTableCell suiTextAlignment="right">None</td>
  </tr>
  <tr suiTableRow suiTextAlignment="center">
    <td>Jamie</td>
    <td>Approved</td>
    <td suiTableCell suiTextAlignment="right">Requires call</td>
  </tr>
  </tbody>
</table>
`;var da=`<table sui-table
       suiCelled
       suiStriped>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ra=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ma=`<table sui-table
       suiBasic="basic">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiBasic="very basic">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var oa=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td suiTableCell suiCollapsing><i sui-icon suiIconType="folder"></i> node_modules</td>
    <td>Initial commit</td>
  </tr>
  <tr>
    <td suiTableCell suiCollapsing><i sui-icon suiIconType="folder"></i> test</td>
    <td>Initial commit</td>
  </tr>
  <tr>
    <td suiTableCell suiCollapsing><i sui-icon suiIconType="file outline"></i> Makefile</td>
    <td>Initial commit</td>
  </tr>
  </tbody>
</table>
`;var sa=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th suiTableHeaderCell suiWidth="ten">Name</th>
    <th suiTableHeaderCell suiWidth="six">Status</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
  </tr>
  </tbody>
</table>
`;var pa=`<table sui-table
       suiCelled
       suiWidth="three">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ua=`<table sui-table
       suiCelled
       suiCollapsing>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ca=`<table sui-table
       suiColour="red">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="orange">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="yellow">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="green">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="teal">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="blue">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
`;var va=`<table sui-table
       suiInverted>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiInverted
       suiColour="teal">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var xa=`<table sui-table
       suiCelled
       suiSortable>
  <thead>
  <tr>
    <th suiTableHeaderCell
        [suiSorted]="sortedBy('name')"
        (click)="sort('name')">Name</th>
    <th suiTableHeaderCell
        [suiSorted]="sortedBy('age')"
        (click)="sort('age')">Age</th>
    <th suiTableHeaderCell
        [suiSorted]="sortedBy('job')"
        (click)="sort('job')">Job</th>
  </tr>
  </thead>
  <tbody>
  @for (person of people; track person.name) {
    <tr>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
      <td>{{ person.job }}</td>
    </tr>
  }
  </tbody>
</table>
`;var Sa=`import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
  job: string;
}

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html'
})
export class SortableTableComponent {
  people: Person[] = [
    { name: 'John', age: 15, job: 'Student' },
    { name: 'Jamie', age: 42, job: 'Engineer' },
    { name: 'Jill', age: 29, job: 'Designer' },
    { name: 'Ahmed', age: 34, job: 'Accountant' }
  ];
  sortColumn: keyof Person | null = null;
  sortDirection: 'ascending' | 'descending' = 'ascending';

  sort(column: keyof Person): void {
    this.sortDirection = this.sortColumn === column && this.sortDirection === 'ascending' ? 'descending' : 'ascending';
    this.sortColumn = column;
    const factor = this.sortDirection === 'ascending' ? 1 : -1;
    this.people = [...this.people].sort((a, b) => (a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0) * factor);
  }

  sortedBy(column: keyof Person): 'ascending' | 'descending' | null {
    return this.sortColumn === column ? this.sortDirection : null;
  }
}
`;var ha=`<table sui-table
       suiCelled
       suiDefinition
       suiCompact="compact">
  <thead class="full-width">
  <tr>
    <th></th>
    <th>Name</th>
    <th>Registration Date</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td suiTableCell suiCollapsing>1</td>
    <td>John Lilki</td>
    <td>September 14, 2013</td>
  </tr>
  <tr>
    <td suiTableCell suiCollapsing>2</td>
    <td>Jamie Harington</td>
    <td>January 11, 2014</td>
  </tr>
  </tbody>
  <tfoot class="full-width">
  <tr>
    <th></th>
    <th colspan="2">
      <div sui-button
           suiSize="small"
           suiEmphasis="primary">Approve</div>
    </th>
  </tr>
  </tfoot>
</table>
`;var fa=`<table sui-table
       suiCelled
       suiPadded="padded">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiCelled
       suiPadded="very padded">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Ea=`<table sui-table
       suiCelled
       suiCompact="compact">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiCelled
       suiCompact="very compact">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ga=`<table sui-table
       suiSize="small">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiSize="large">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ba=`<table sui-table
       suiAttached="top attached">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiAttached="attached">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiAttached="bottom attached">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var J0=(n,s)=>s.name;function L0(n,s){if(n&1&&(i(0,"tr")(1,"td"),e(2),t(),i(3,"td"),e(4),t(),i(5,"td"),e(6),t()()),n&2){let l=s.$implicit;m(2),fe(l.name),m(2),fe(l.age),m(2),fe(l.job)}}var F=class{constructor(){this.people=[{name:"John",age:15,job:"Student"},{name:"Jamie",age:42,job:"Engineer"},{name:"Jill",age:29,job:"Designer"},{name:"Ahmed",age:34,job:"Accountant"}],this.sortColumn=null,this.sortDirection="ascending"}sort(s){this.sortDirection=this.sortColumn===s&&this.sortDirection==="ascending"?"descending":"ascending",this.sortColumn=s;let l=this.sortDirection==="ascending"?1:-1;this.people=[...this.people].sort((a,d)=>(a[s]>d[s]?1:a[s]<d[s]?-1:0)*l)}sortedBy(s){return this.sortColumn===s?this.sortDirection:null}},ya=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-table-example"]],standalone:!1,features:[c],decls:45,vars:0,consts:[["sui-table","","suiCelled",""],["colspan","3"],["sui-menu","","suiPagination","",1,"right","floated"],["suiMenuItem",""],["sui-icon","","suiIconType","chevron left"],["sui-icon","","suiIconType","chevron right"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Header"),t(),i(5,"th"),e(6,"Header"),t(),i(7,"th"),e(8,"Header"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"Cell"),t(),i(13,"td"),e(14,"Cell"),t(),i(15,"td"),e(16,"Cell"),t()(),i(17,"tr")(18,"td"),e(19,"Cell"),t(),i(20,"td"),e(21,"Cell"),t(),i(22,"td"),e(23,"Cell"),t()(),i(24,"tr")(25,"td"),e(26,"Cell"),t(),i(27,"td"),e(28,"Cell"),t(),i(29,"td"),e(30,"Cell"),t()()(),i(31,"tfoot")(32,"tr")(33,"th",1)(34,"div",2)(35,"a",3),r(36,"i",4),t(),i(37,"a",3),e(38,"1"),t(),i(39,"a",3),e(40,"2"),t(),i(41,"a",3),e(42,"3"),t(),i(43,"a",3),r(44,"i",5),t()()()()()())},dependencies:[M,h,b,y],encapsulation:2})}}return n})(),Ca=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-definition-example"]],standalone:!1,features:[c],decls:23,vars:0,consts:[["sui-table","","suiDefinition",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr"),r(3,"th"),i(4,"th"),e(5,"Arguments"),t(),i(6,"th"),e(7,"Description"),t()()(),i(8,"tbody")(9,"tr")(10,"td"),e(11,"reset rating"),t(),i(12,"td"),e(13,"None"),t(),i(14,"td"),e(15,"Resets rating to default value"),t()(),i(16,"tr")(17,"td"),e(18,"set rating"),t(),i(19,"td"),e(20,"rating (integer)"),t(),i(21,"td"),e(22,"Sets the current star rating to specified value"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Fa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-structured-example"]],standalone:!1,features:[c],decls:50,vars:0,consts:[["sui-table","","suiCelled","","suiStructured",""],["rowspan","2"],["colspan","3"],["suiTableCell","","suiTextAlignment","right"],["suiTableCell","","suiTextAlignment","center"],["sui-icon","","suiIconType","large green checkmark"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),e(4,"Name"),t(),i(5,"th",1),e(6,"Type"),t(),i(7,"th",1),e(8,"Files"),t(),i(9,"th",2),e(10,"Languages"),t()(),i(11,"tr")(12,"th"),e(13,"Ruby"),t(),i(14,"th"),e(15,"JavaScript"),t(),i(16,"th"),e(17,"Python"),t()()(),i(18,"tbody")(19,"tr")(20,"td"),e(21,"Alpha Team"),t(),i(22,"td"),e(23,"Project 1"),t(),i(24,"td",3),e(25,"2"),t(),i(26,"td",4),r(27,"i",5),t(),r(28,"td")(29,"td"),t(),i(30,"tr")(31,"td",1),e(32,"Beta Team"),t(),i(33,"td"),e(34,"Project 1"),t(),i(35,"td",3),e(36,"52"),t(),i(37,"td",4),r(38,"i",5),t(),r(39,"td")(40,"td"),t(),i(41,"tr")(42,"td"),e(43,"Project 2"),t(),i(44,"td",3),e(45,"12"),t(),r(46,"td"),i(47,"td",4),r(48,"i",5),t(),r(49,"td"),t()()())},dependencies:[M,h,Y],encapsulation:2})}}return n})(),Da=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-positive-negative-example"]],standalone:!1,features:[c],decls:38,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableRow","","suiState","positive"],["suiTableCell","","suiState","negative"],["suiTableRow","","suiState","negative"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"No Name Specified"),t(),i(13,"td"),e(14,"Unknown"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr",1)(18,"td"),e(19,"Jimmy"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"None"),t()(),i(24,"tr")(25,"td"),e(26,"Jamie"),t(),i(27,"td",2),e(28,"Unknown"),t(),i(29,"td"),e(30,"Requires call"),t()(),i(31,"tr",3)(32,"td"),e(33,"Jill"),t(),i(34,"td"),e(35,"Unknown"),t(),i(36,"td"),e(37,"None"),t()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),Ma=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-error-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableRow","","suiState","error"],["suiTableCell","","suiState","error"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr",1)(11,"td"),e(12,"No Name Specified"),t(),i(13,"td"),e(14,"Unknown"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jimmy"),t(),i(20,"td",2),e(21,"Cannot pull data"),t(),i(22,"td"),e(23,"None"),t()(),i(24,"tr")(25,"td"),e(26,"Jamie"),t(),i(27,"td"),e(28,"Unknown"),t(),i(29,"td"),e(30,"Requires call"),t()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),_a=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-warning-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableRow","","suiState","warning"],["suiTableCell","","suiState","warning"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr",1)(11,"td"),e(12,"No Name Specified"),t(),i(13,"td"),e(14,"Unknown"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jimmy"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td",2),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jamie"),t(),i(27,"td"),e(28,"Unknown"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),wa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-active-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableRow","","suiActive",""],["suiTableCell","","suiActive",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr",1)(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Selected"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td",2),e(28,"Approved"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),Ta=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-disabled-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableRow","","disabled",""],["suiTableCell","","disabled",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr",1)(11,"td"),e(12,"Jamie"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"Requires call"),t()(),i(17,"tr")(18,"td"),e(19,"John"),t(),i(20,"td"),e(21,"Selected"),t(),i(22,"td"),e(23,"None"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td",2),e(28,"Approved"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),Ia=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-single-line-example"]],standalone:!1,features:[c],decls:30,vars:0,consts:[["sui-table","","suiCelled","","suiSingleLine",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Registration Date"),t(),i(7,"th"),e(8,"E-mail address"),t(),i(9,"th"),e(10,"Premium Plan"),t()()(),i(11,"tbody")(12,"tr")(13,"td"),e(14,"John Lilki"),t(),i(15,"td"),e(16,"September 14, 2013"),t(),i(17,"td"),e(18,"jhlilk22@yahoo.com"),t(),i(19,"td"),e(20,"No"),t()(),i(21,"tr")(22,"td"),e(23,"Jamie Harington"),t(),i(24,"td"),e(25,"January 11, 2014"),t(),i(26,"td"),e(27,"jamieharingonton@yahoo.com"),t(),i(28,"td"),e(29,"Yes"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Aa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-fixed-example"]],standalone:!1,features:[c],decls:24,vars:0,consts:[["sui-table","","suiCelled","","suiFixed",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Description"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),ka=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-stacking-example"]],standalone:!1,features:[c],decls:62,vars:0,consts:[["sui-table","","suiCelled","","suiStacking","unstackable"],["sui-table","","suiCelled","","suiStacking","tablet stackable"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()(),i(31,"table",1)(32,"thead")(33,"tr")(34,"th"),e(35,"Name"),t(),i(36,"th"),e(37,"Status"),t(),i(38,"th"),e(39,"Notes"),t()()(),i(40,"tbody")(41,"tr")(42,"td"),e(43,"John"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"None"),t()(),i(48,"tr")(49,"td"),e(50,"Jamie"),t(),i(51,"td"),e(52,"Approved"),t(),i(53,"td"),e(54,"Requires call"),t()(),i(55,"tr")(56,"td"),e(57,"Jill"),t(),i(58,"td"),e(59,"Denied"),t(),i(60,"td"),e(61,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Ga=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-selectable-row-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled","","suiSelectable",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Ba=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-selectable-cell-example"]],standalone:!1,features:[c],decls:26,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableCell","","suiSelectable",""],["href","#"],["suiTableRow","","suiState","warning"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"No Action"),t(),i(15,"td",1)(16,"a",2),e(17,"Edit"),t()()(),i(18,"tr",3)(19,"td"),e(20,"Jimmy"),t(),i(21,"td"),e(22,"Requires Action"),t(),i(23,"td",1)(24,"a",2),e(25,"Edit"),t()()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),Na=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-vertical-alignment-example"]],standalone:!1,features:[c],decls:34,vars:0,consts:[["sui-table","","suiStriped",""],["suiTableCell","","suiVerticalAlignment","top"],["suiTableRow","","suiVerticalAlignment","bottom"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td",1),e(16,"Notes"),r(17,"br"),e(18,"1"),r(19,"br"),e(20,"2"),r(21,"br"),t()(),i(22,"tr",2)(23,"td"),e(24,"Jamie"),t(),i(25,"td"),e(26,"Approved"),t(),i(27,"td"),e(28,"Notes"),r(29,"br"),e(30,"1"),r(31,"br"),e(32,"2"),r(33,"br"),t()()()())},dependencies:[h,K,Y],encapsulation:2})}}return n})(),Wa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-text-alignment-example"]],standalone:!1,features:[c],decls:24,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableHeaderCell","","suiTextAlignment","right"],["suiTableCell","","suiTextAlignment","right"],["suiTableRow","","suiTextAlignment","center"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th",1),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td",2),e(16,"None"),t()(),i(17,"tr",3)(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td",2),e(23,"Requires call"),t()()()())},dependencies:[h,K,Y,be],encapsulation:2})}}return n})(),Ra=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-striped-example"]],standalone:!1,features:[c],decls:52,vars:0,consts:[["sui-table","","suiCelled","","suiStriped",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()(),i(31,"tr")(32,"td"),e(33,"John"),t(),i(34,"td"),e(35,"Approved"),t(),i(36,"td"),e(37,"None"),t()(),i(38,"tr")(39,"td"),e(40,"Jamie"),t(),i(41,"td"),e(42,"Approved"),t(),i(43,"td"),e(44,"Requires call"),t()(),i(45,"tr")(46,"td"),e(47,"Jill"),t(),i(48,"td"),e(49,"Denied"),t(),i(50,"td"),e(51,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Pa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-celled-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),za=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-basic-example"]],standalone:!1,features:[c],decls:62,vars:0,consts:[["sui-table","","suiBasic","basic"],["sui-table","","suiBasic","very basic"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()(),i(31,"table",1)(32,"thead")(33,"tr")(34,"th"),e(35,"Name"),t(),i(36,"th"),e(37,"Status"),t(),i(38,"th"),e(39,"Notes"),t()()(),i(40,"tbody")(41,"tr")(42,"td"),e(43,"John"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"None"),t()(),i(48,"tr")(49,"td"),e(50,"Jamie"),t(),i(51,"td"),e(52,"Approved"),t(),i(53,"td"),e(54,"Requires call"),t()(),i(55,"tr")(56,"td"),e(57,"Jill"),t(),i(58,"td"),e(59,"Denied"),t(),i(60,"td"),e(61,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Ja=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-collapsing-cell-example"]],standalone:!1,features:[c],decls:26,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableCell","","suiCollapsing",""],["sui-icon","","suiIconType","folder"],["sui-icon","","suiIconType","file outline"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Notes"),t()()(),i(7,"tbody")(8,"tr")(9,"td",1),r(10,"i",2),e(11," node_modules"),t(),i(12,"td"),e(13,"Initial commit"),t()(),i(14,"tr")(15,"td",1),r(16,"i",2),e(17," test"),t(),i(18,"td"),e(19,"Initial commit"),t()(),i(20,"tr")(21,"td",1),r(22,"i",3),e(23," Makefile"),t(),i(24,"td"),e(25,"Initial commit"),t()()()())},dependencies:[M,h,Y],encapsulation:2})}}return n})(),La=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-column-width-example"]],standalone:!1,features:[c],decls:23,vars:0,consts:[["sui-table","","suiCelled",""],["suiTableHeaderCell","","suiWidth","ten"],["suiTableHeaderCell","","suiWidth","six"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),e(4,"Name"),t(),i(5,"th",2),e(6,"Status"),t()()(),i(7,"tbody")(8,"tr")(9,"td"),e(10,"John"),t(),i(11,"td"),e(12,"Approved"),t()(),i(13,"tr")(14,"td"),e(15,"Jamie"),t(),i(16,"td"),e(17,"Approved"),t()(),i(18,"tr")(19,"td"),e(20,"Jill"),t(),i(21,"td"),e(22,"Denied"),t()()()())},dependencies:[h,be],encapsulation:2})}}return n})(),Ha=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-column-count-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled","","suiWidth","three"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Va=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-collapsing-example"]],standalone:!1,features:[c],decls:31,vars:0,consts:[["sui-table","","suiCelled","","suiCollapsing",""]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),qa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-colored-example"]],standalone:!1,features:[c],decls:144,vars:0,consts:[["sui-table","","suiColour","red"],["sui-table","","suiColour","orange"],["sui-table","","suiColour","yellow"],["sui-table","","suiColour","green"],["sui-table","","suiColour","teal"],["sui-table","","suiColour","blue"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()()()(),i(24,"table",1)(25,"thead")(26,"tr")(27,"th"),e(28,"Name"),t(),i(29,"th"),e(30,"Status"),t(),i(31,"th"),e(32,"Notes"),t()()(),i(33,"tbody")(34,"tr")(35,"td"),e(36,"John"),t(),i(37,"td"),e(38,"Approved"),t(),i(39,"td"),e(40,"None"),t()(),i(41,"tr")(42,"td"),e(43,"Jamie"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"Requires call"),t()()()(),i(48,"table",2)(49,"thead")(50,"tr")(51,"th"),e(52,"Name"),t(),i(53,"th"),e(54,"Status"),t(),i(55,"th"),e(56,"Notes"),t()()(),i(57,"tbody")(58,"tr")(59,"td"),e(60,"John"),t(),i(61,"td"),e(62,"Approved"),t(),i(63,"td"),e(64,"None"),t()(),i(65,"tr")(66,"td"),e(67,"Jamie"),t(),i(68,"td"),e(69,"Approved"),t(),i(70,"td"),e(71,"Requires call"),t()()()(),i(72,"table",3)(73,"thead")(74,"tr")(75,"th"),e(76,"Name"),t(),i(77,"th"),e(78,"Status"),t(),i(79,"th"),e(80,"Notes"),t()()(),i(81,"tbody")(82,"tr")(83,"td"),e(84,"John"),t(),i(85,"td"),e(86,"Approved"),t(),i(87,"td"),e(88,"None"),t()(),i(89,"tr")(90,"td"),e(91,"Jamie"),t(),i(92,"td"),e(93,"Approved"),t(),i(94,"td"),e(95,"Requires call"),t()()()(),i(96,"table",4)(97,"thead")(98,"tr")(99,"th"),e(100,"Name"),t(),i(101,"th"),e(102,"Status"),t(),i(103,"th"),e(104,"Notes"),t()()(),i(105,"tbody")(106,"tr")(107,"td"),e(108,"John"),t(),i(109,"td"),e(110,"Approved"),t(),i(111,"td"),e(112,"None"),t()(),i(113,"tr")(114,"td"),e(115,"Jamie"),t(),i(116,"td"),e(117,"Approved"),t(),i(118,"td"),e(119,"Requires call"),t()()()(),i(120,"table",5)(121,"thead")(122,"tr")(123,"th"),e(124,"Name"),t(),i(125,"th"),e(126,"Status"),t(),i(127,"th"),e(128,"Notes"),t()()(),i(129,"tbody")(130,"tr")(131,"td"),e(132,"John"),t(),i(133,"td"),e(134,"Approved"),t(),i(135,"td"),e(136,"None"),t()(),i(137,"tr")(138,"td"),e(139,"Jamie"),t(),i(140,"td"),e(141,"Approved"),t(),i(142,"td"),e(143,"Requires call"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Oa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-inverted-example"]],standalone:!1,features:[c],decls:62,vars:0,consts:[["sui-table","","suiInverted",""],["sui-table","","suiInverted","","suiColour","teal"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()(),i(31,"table",1)(32,"thead")(33,"tr")(34,"th"),e(35,"Name"),t(),i(36,"th"),e(37,"Status"),t(),i(38,"th"),e(39,"Notes"),t()()(),i(40,"tbody")(41,"tr")(42,"td"),e(43,"John"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"None"),t()(),i(48,"tr")(49,"td"),e(50,"Jamie"),t(),i(51,"td"),e(52,"Approved"),t(),i(53,"td"),e(54,"Requires call"),t()(),i(55,"tr")(56,"td"),e(57,"Jill"),t(),i(58,"td"),e(59,"Denied"),t(),i(60,"td"),e(61,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Ua=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-sortable-example"]],standalone:!1,features:[c],decls:12,vars:3,consts:[["sui-table","","suiCelled","","suiSortable",""],["suiTableHeaderCell","",3,"click","suiSorted"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),x("click",function(){return d.sort("name")}),e(4,"Name"),t(),i(5,"th",1),x("click",function(){return d.sort("age")}),e(6,"Age"),t(),i(7,"th",1),x("click",function(){return d.sort("job")}),e(8,"Job"),t()()(),i(9,"tbody"),we(10,L0,7,3,"tr",null,J0),t()()),a&2&&(m(3),o("suiSorted",d.sortedBy("name")),m(2),o("suiSorted",d.sortedBy("age")),m(2),o("suiSorted",d.sortedBy("job")),m(3),Te(d.people))},dependencies:[h,be],encapsulation:2})}}return n})(),ja=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-full-width-example"]],standalone:!1,features:[c],decls:29,vars:0,consts:[["sui-table","","suiCelled","","suiDefinition","","suiCompact","compact"],[1,"full-width"],["suiTableCell","","suiCollapsing",""],["colspan","2"],["sui-button","","suiSize","small","suiEmphasis","primary"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead",1)(2,"tr"),r(3,"th"),i(4,"th"),e(5,"Name"),t(),i(6,"th"),e(7,"Registration Date"),t()()(),i(8,"tbody")(9,"tr")(10,"td",2),e(11,"1"),t(),i(12,"td"),e(13,"John Lilki"),t(),i(14,"td"),e(15,"September 14, 2013"),t()(),i(16,"tr")(17,"td",2),e(18,"2"),t(),i(19,"td"),e(20,"Jamie Harington"),t(),i(21,"td"),e(22,"January 11, 2014"),t()()(),i(23,"tfoot",1)(24,"tr"),r(25,"th"),i(26,"th",3)(27,"div",4),e(28,"Approve"),t()()()()())},dependencies:[h,Y,A],encapsulation:2})}}return n})(),Ya=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-padded-example"]],standalone:!1,features:[c],decls:62,vars:0,consts:[["sui-table","","suiCelled","","suiPadded","padded"],["sui-table","","suiCelled","","suiPadded","very padded"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()(),i(31,"table",1)(32,"thead")(33,"tr")(34,"th"),e(35,"Name"),t(),i(36,"th"),e(37,"Status"),t(),i(38,"th"),e(39,"Notes"),t()()(),i(40,"tbody")(41,"tr")(42,"td"),e(43,"John"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"None"),t()(),i(48,"tr")(49,"td"),e(50,"Jamie"),t(),i(51,"td"),e(52,"Approved"),t(),i(53,"td"),e(54,"Requires call"),t()(),i(55,"tr")(56,"td"),e(57,"Jill"),t(),i(58,"td"),e(59,"Denied"),t(),i(60,"td"),e(61,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Xa=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-compact-example"]],standalone:!1,features:[c],decls:62,vars:0,consts:[["sui-table","","suiCelled","","suiCompact","compact"],["sui-table","","suiCelled","","suiCompact","very compact"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()(),i(31,"table",1)(32,"thead")(33,"tr")(34,"th"),e(35,"Name"),t(),i(36,"th"),e(37,"Status"),t(),i(38,"th"),e(39,"Notes"),t()()(),i(40,"tbody")(41,"tr")(42,"td"),e(43,"John"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"None"),t()(),i(48,"tr")(49,"td"),e(50,"Jamie"),t(),i(51,"td"),e(52,"Approved"),t(),i(53,"td"),e(54,"Requires call"),t()(),i(55,"tr")(56,"td"),e(57,"Jill"),t(),i(58,"td"),e(59,"Denied"),t(),i(60,"td"),e(61,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),$a=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-size-example"]],standalone:!1,features:[c],decls:62,vars:0,consts:[["sui-table","","suiSize","small"],["sui-table","","suiSize","large"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()(),i(17,"tr")(18,"td"),e(19,"Jamie"),t(),i(20,"td"),e(21,"Approved"),t(),i(22,"td"),e(23,"Requires call"),t()(),i(24,"tr")(25,"td"),e(26,"Jill"),t(),i(27,"td"),e(28,"Denied"),t(),i(29,"td"),e(30,"None"),t()()()(),i(31,"table",1)(32,"thead")(33,"tr")(34,"th"),e(35,"Name"),t(),i(36,"th"),e(37,"Status"),t(),i(38,"th"),e(39,"Notes"),t()()(),i(40,"tbody")(41,"tr")(42,"td"),e(43,"John"),t(),i(44,"td"),e(45,"Approved"),t(),i(46,"td"),e(47,"None"),t()(),i(48,"tr")(49,"td"),e(50,"Jamie"),t(),i(51,"td"),e(52,"Approved"),t(),i(53,"td"),e(54,"Requires call"),t()(),i(55,"tr")(56,"td"),e(57,"Jill"),t(),i(58,"td"),e(59,"Denied"),t(),i(60,"td"),e(61,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})(),Ka=(()=>{class n extends F{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-table-attached-example"]],standalone:!1,features:[c],decls:51,vars:0,consts:[["sui-table","","suiAttached","top attached"],["sui-table","","suiAttached","attached"],["sui-table","","suiAttached","bottom attached"]],template:function(a,d){a&1&&(i(0,"table",0)(1,"thead")(2,"tr")(3,"th"),e(4,"Name"),t(),i(5,"th"),e(6,"Status"),t(),i(7,"th"),e(8,"Notes"),t()()(),i(9,"tbody")(10,"tr")(11,"td"),e(12,"John"),t(),i(13,"td"),e(14,"Approved"),t(),i(15,"td"),e(16,"None"),t()()()(),i(17,"table",1)(18,"thead")(19,"tr")(20,"th"),e(21,"Name"),t(),i(22,"th"),e(23,"Status"),t(),i(24,"th"),e(25,"Notes"),t()()(),i(26,"tbody")(27,"tr")(28,"td"),e(29,"Jamie"),t(),i(30,"td"),e(31,"Approved"),t(),i(32,"td"),e(33,"Requires call"),t()()()(),i(34,"table",2)(35,"thead")(36,"tr")(37,"th"),e(38,"Name"),t(),i(39,"th"),e(40,"Status"),t(),i(41,"th"),e(42,"Notes"),t()()(),i(43,"tbody")(44,"tr")(45,"td"),e(46,"Jill"),t(),i(47,"td"),e(48,"Denied"),t(),i(49,"td"),e(50,"None"),t()()()())},dependencies:[h],encapsulation:2})}}return n})();function V0(n,s){n&1&&r(0,"doc-table-table-example")}function q0(n,s){n&1&&r(0,"doc-table-definition-example")}function O0(n,s){n&1&&r(0,"doc-table-structured-example")}function U0(n,s){n&1&&r(0,"doc-table-positive-negative-example")}function j0(n,s){n&1&&r(0,"doc-table-error-example")}function Y0(n,s){n&1&&r(0,"doc-table-warning-example")}function X0(n,s){n&1&&r(0,"doc-table-active-example")}function $0(n,s){n&1&&r(0,"doc-table-disabled-example")}function K0(n,s){n&1&&r(0,"doc-table-single-line-example")}function Q0(n,s){n&1&&r(0,"doc-table-fixed-example")}function Z0(n,s){n&1&&r(0,"doc-table-stacking-example")}function ep(n,s){n&1&&r(0,"doc-table-selectable-row-example")}function tp(n,s){n&1&&r(0,"doc-table-selectable-cell-example")}function ip(n,s){n&1&&r(0,"doc-table-vertical-alignment-example")}function np(n,s){n&1&&r(0,"doc-table-text-alignment-example")}function lp(n,s){n&1&&r(0,"doc-table-striped-example")}function ap(n,s){n&1&&r(0,"doc-table-celled-example")}function dp(n,s){n&1&&r(0,"doc-table-basic-example")}function rp(n,s){n&1&&r(0,"doc-table-collapsing-cell-example")}function mp(n,s){n&1&&r(0,"doc-table-column-width-example")}function op(n,s){n&1&&r(0,"doc-table-column-count-example")}function sp(n,s){n&1&&r(0,"doc-table-collapsing-example")}function pp(n,s){n&1&&r(0,"doc-table-colored-example")}function up(n,s){n&1&&r(0,"doc-table-inverted-example")}function cp(n,s){n&1&&r(0,"doc-table-sortable-example")}function vp(n,s){n&1&&r(0,"doc-table-full-width-example")}function xp(n,s){n&1&&r(0,"doc-table-padded-example")}function Sp(n,s){n&1&&r(0,"doc-table-compact-example")}function hp(n,s){n&1&&r(0,"doc-table-size-example")}function fp(n,s){n&1&&r(0,"doc-table-attached-example")}function Ep(n,s){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Table"),t(),i(6,"p"),e(7,"A standard table"),t(),u(8,V0,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Definition"),t(),i(12,"p"),e(13,"A table may be formatted to emphasize a first column that defines a rows content"),t(),u(14,q0,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Structured"),t(),i(18,"p"),e(19,"A table can be formatted to display complex structured data"),t(),u(20,O0,1,0,"ng-template",5),t(),r(21,"br"),i(22,"h2",2),e(23,"States"),t(),i(24,"doc-code-sample",3)(25,"h3",4),e(26,"Positive / Negative"),t(),i(27,"p"),e(28,"A cell or row may let a user know whether a value is good or bad"),t(),u(29,U0,1,0,"ng-template",5),t(),i(30,"doc-code-sample",3)(31,"h3",4),e(32,"Error"),t(),i(33,"p"),e(34,"A cell or row may call attention to an error or a negative value"),t(),u(35,j0,1,0,"ng-template",5),t(),i(36,"doc-code-sample",3)(37,"h3",4),e(38,"Warning"),t(),i(39,"p"),e(40,"A cell or row may warn a user"),t(),u(41,Y0,1,0,"ng-template",5),t(),i(42,"doc-code-sample",3)(43,"h3",4),e(44,"Active"),t(),i(45,"p"),e(46,"A cell or row can be active or selected by a user"),t(),u(47,X0,1,0,"ng-template",5),t(),i(48,"doc-code-sample",3)(49,"h3",4),e(50,"Disabled"),t(),i(51,"p"),e(52,"A cell can be disabled"),t(),u(53,$0,1,0,"ng-template",5),t(),r(54,"br"),i(55,"h2",2),e(56,"Variations"),t(),i(57,"doc-code-sample",3)(58,"h3",4),e(59,"Single Line"),t(),i(60,"p"),e(61,"A table can specify that its cell contents should remain on a single line and not wrap"),t(),u(62,K0,1,0,"ng-template",5),t(),i(63,"doc-code-sample",3)(64,"h3",4),e(65,"Fixed"),t(),i(66,"p"),e(67,"A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content"),t(),i(68,"div",6),e(69," Fixed tables will automatically ellipsis overflowing text. Use "),i(70,"code"),e(71,"suiSingleLine"),t(),e(72," to prevent wrapping. "),t(),u(73,Q0,1,0,"ng-template",5),t(),i(74,"doc-code-sample",3)(75,"h3",4),e(76,"Stacking"),t(),i(77,"p"),e(78,"A table can specify how it stacks table content responsively"),t(),i(79,"div",6),e(80," Tables are stackable on mobile by default. Use "),i(81,"code"),e(82,"unstackable"),t(),e(83," to prevent this, or "),i(84,"code"),e(85,"tablet stackable"),t(),e(86," to also stack on tablets. "),t(),u(87,Z0,1,0,"ng-template",5),t(),i(88,"doc-code-sample",3)(89,"h3",4),e(90,"Selectable Row"),t(),i(91,"p"),e(92,"A table can have its rows appear selectable"),t(),u(93,ep,1,0,"ng-template",5),t(),i(94,"doc-code-sample",3)(95,"h3",4),e(96,"Selectable Cell"),t(),i(97,"p"),e(98,"A table cell can be selectable"),t(),i(99,"div",6),e(100," A selectable cell requires a link inside it to size the click area. "),t(),u(101,tp,1,0,"ng-template",5),t(),i(102,"doc-code-sample",3)(103,"h3",4),e(104,"Vertical Alignment"),t(),i(105,"p"),e(106,"A table header, row, or cell can adjust its vertical alignment"),t(),u(107,ip,1,0,"ng-template",5),t(),i(108,"doc-code-sample",3)(109,"h3",4),e(110,"Text Alignment"),t(),i(111,"p"),e(112,"A table header, row, or cell can adjust its text alignment"),t(),u(113,np,1,0,"ng-template",5),t(),i(114,"doc-code-sample",3)(115,"h3",4),e(116,"Striped"),t(),i(117,"p"),e(118,"A table can stripe alternate rows of content with a darker color to increase contrast"),t(),u(119,lp,1,0,"ng-template",5),t(),i(120,"doc-code-sample",3)(121,"h3",4),e(122,"Celled"),t(),i(123,"p"),e(124,"A table may be divided each row into separate cells"),t(),u(125,ap,1,0,"ng-template",5),t(),i(126,"doc-code-sample",3)(127,"h3",4),e(128,"Basic"),t(),i(129,"p"),e(130,"A table can reduce its complexity to increase readability"),t(),u(131,dp,1,0,"ng-template",5),t(),i(132,"doc-code-sample",3)(133,"h3",4),e(134,"Collapsing Cell"),t(),i(135,"p"),e(136,"A cell can be collapsing so that it only uses as much space as required"),t(),u(137,rp,1,0,"ng-template",5),t(),i(138,"doc-code-sample",3)(139,"h3",4),e(140,"Column Width"),t(),i(141,"p"),e(142,"A table can specify the width of individual columns independently"),t(),u(143,mp,1,0,"ng-template",5),t(),i(144,"doc-code-sample",3)(145,"h3",4),e(146,"Column Count"),t(),i(147,"p"),e(148,"A table can specify its column count to divide its content evenly"),t(),u(149,op,1,0,"ng-template",5),t(),i(150,"doc-code-sample",3)(151,"h3",4),e(152,"Collapsing"),t(),i(153,"p"),e(154,"A table can be collapsing, taking up only as much space as its rows"),t(),u(155,sp,1,0,"ng-template",5),t(),i(156,"doc-code-sample",3)(157,"h3",4),e(158,"Colored"),t(),i(159,"p"),e(160,"A table can be given a color to distinguish it from other tables"),t(),i(161,"div",6),e(162," Any of the colours "),i(163,"span",7),e(164,"'red'"),t(),e(165," | "),i(166,"span",7),e(167,"'orange'"),t(),e(168," | "),i(169,"span",7),e(170,"'yellow'"),t(),e(171," | "),i(172,"span",7),e(173,"'olive'"),t(),e(174," | "),i(175,"span",7),e(176,"'green'"),t(),e(177," | "),i(178,"span",7),e(179,"'teal'"),t(),e(180," | "),i(181,"span",7),e(182,"'blue'"),t(),e(183," | "),i(184,"span",7),e(185,"'violet'"),t(),e(186," | "),i(187,"span",7),e(188,"'purple'"),t(),e(189," | "),i(190,"span",7),e(191,"'pink'"),t(),e(192," | "),i(193,"span",7),e(194,"'brown'"),t(),e(195," | "),i(196,"span",7),e(197,"'grey'"),t(),e(198," | "),i(199,"span",7),e(200,"'black'"),t(),e(201," can be used. "),t(),u(202,pp,1,0,"ng-template",5),t(),i(203,"doc-code-sample",3)(204,"h3",4),e(205,"Inverted"),t(),i(206,"p"),e(207,"A table's colors can be inverted"),t(),u(208,up,1,0,"ng-template",5),t(),i(209,"doc-code-sample",8)(210,"h3",4),e(211,"Sortable"),t(),i(212,"p"),e(213,"A table may allow a user to sort contents by clicking on a table header"),t(),i(214,"div",6),e(215," Sorting is done by your component; "),i(216,"code"),e(217,"suiSorted"),t(),e(218," only shows the current sort direction on the header. "),t(),u(219,cp,1,0,"ng-template",5),t(),i(220,"doc-code-sample",3)(221,"h3",4),e(222,"Full-Width Header / Footer"),t(),i(223,"p"),e(224,"A definition table can have a full width header or footer, filling in the gap left by the first column"),t(),i(225,"div",6),e(226," Add the "),i(227,"code"),e(228,"full-width"),t(),e(229," class to a "),i(230,"code"),e(231,"thead"),t(),e(232," or "),i(233,"code"),e(234,"tfoot"),t(),e(235,". "),t(),u(236,vp,1,0,"ng-template",5),t(),i(237,"doc-code-sample",3)(238,"h3",4),e(239,"Padded"),t(),i(240,"p"),e(241,"A table may sometimes need to be more padded for legibility"),t(),u(242,xp,1,0,"ng-template",5),t(),i(243,"doc-code-sample",3)(244,"h3",4),e(245,"Compact"),t(),i(246,"p"),e(247,"A table may sometimes need to be more compact to make more rows visible at a time"),t(),u(248,Sp,1,0,"ng-template",5),t(),i(249,"doc-code-sample",3)(250,"h3",4),e(251,"Size"),t(),i(252,"p"),e(253,"A table can also be small or large"),t(),u(254,hp,1,0,"ng-template",5),t(),i(255,"doc-code-sample",3)(256,"h3",4),e(257,"Attached"),t(),i(258,"p"),e(259,"A table can be attached to other content on a page"),t(),u(260,fp,1,0,"ng-template",5),t()()),n&2){let l=H();m(3),o("templateCode",l.snippetTable),m(6),o("templateCode",l.snippetDefinition),m(6),o("templateCode",l.snippetStructured),m(9),o("templateCode",l.snippetPositiveNegative),m(6),o("templateCode",l.snippetError),m(6),o("templateCode",l.snippetWarning),m(6),o("templateCode",l.snippetActive),m(6),o("templateCode",l.snippetDisabled),m(9),o("templateCode",l.snippetSingleLine),m(6),o("templateCode",l.snippetFixed),m(11),o("templateCode",l.snippetStacking),m(14),o("templateCode",l.snippetSelectableRow),m(6),o("templateCode",l.snippetSelectableCell),m(8),o("templateCode",l.snippetVerticalAlignment),m(6),o("templateCode",l.snippetTextAlignment),m(6),o("templateCode",l.snippetStriped),m(6),o("templateCode",l.snippetCelled),m(6),o("templateCode",l.snippetBasic),m(6),o("templateCode",l.snippetCollapsingCell),m(6),o("templateCode",l.snippetColumnWidth),m(6),o("templateCode",l.snippetColumnCount),m(6),o("templateCode",l.snippetCollapsing),m(6),o("templateCode",l.snippetColored),m(47),o("templateCode",l.snippetInverted),m(6),o("templateCode",l.snippetSortable)("componentCode",l.snippetSortableTs),m(11),o("templateCode",l.snippetFullWidth),m(17),o("templateCode",l.snippetPadded),m(6),o("templateCode",l.snippetCompact),m(6),o("templateCode",l.snippetSize),m(6),o("templateCode",l.snippetAttached)}}function gp(n,s){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-table"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",9)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiBasic "),t(),i(20,"td"),e(21," Reduce the complexity of the table. Allowed values are "),i(22,"span",7),e(23,"'basic'"),t(),e(24," | "),i(25,"span",7),e(26,"'very basic'"),t(),e(27," | "),i(28,"span",7),e(29,"null"),t()(),i(30,"td")(31,"div",10),e(32," string "),t()(),i(33,"td")(34,"div",11),e(35," null "),t()()(),i(36,"tr")(37,"td"),e(38," suiWidth "),t(),i(39,"td"),e(40," Divide the table into a number of equal columns. Allowed values are "),i(41,"span",7),e(42,"'one'"),t(),e(43," through "),i(44,"span",7),e(45,"'sixteen'"),t(),e(46," | "),i(47,"span",7),e(48,"null"),t()(),i(49,"td")(50,"div",10),e(51," string "),t()(),i(52,"td")(53,"div",11),e(54," null "),t()()(),i(55,"tr")(56,"td"),e(57," suiColour "),t(),i(58,"td"),e(59," Set the colour of the table. Allowed values are "),i(60,"span",7),e(61,"'red'"),t(),e(62," | "),i(63,"span",7),e(64,"'orange'"),t(),e(65," | "),i(66,"span",7),e(67,"'yellow'"),t(),e(68," | "),i(69,"span",7),e(70,"'olive'"),t(),e(71," | "),i(72,"span",7),e(73,"'green'"),t(),e(74," | "),i(75,"span",7),e(76,"'teal'"),t(),e(77," | "),i(78,"span",7),e(79,"'blue'"),t(),e(80," | "),i(81,"span",7),e(82,"'violet'"),t(),e(83," | "),i(84,"span",7),e(85,"'purple'"),t(),e(86," | "),i(87,"span",7),e(88,"'pink'"),t(),e(89," | "),i(90,"span",7),e(91,"'brown'"),t(),e(92," | "),i(93,"span",7),e(94,"'grey'"),t(),e(95," | "),i(96,"span",7),e(97,"'black'"),t(),e(98," | "),i(99,"span",7),e(100,"null"),t()(),i(101,"td")(102,"div",10),e(103," string "),t()(),i(104,"td")(105,"div",11),e(106," null "),t()()(),i(107,"tr")(108,"td"),e(109," suiPadded "),t(),i(110,"td"),e(111," Increase the padding of the cells. Allowed values are "),i(112,"span",7),e(113,"'padded'"),t(),e(114," | "),i(115,"span",7),e(116,"'very padded'"),t(),e(117," | "),i(118,"span",7),e(119,"null"),t()(),i(120,"td")(121,"div",10),e(122," string "),t()(),i(123,"td")(124,"div",11),e(125," null "),t()()(),i(126,"tr")(127,"td"),e(128," suiCompact "),t(),i(129,"td"),e(130," Reduce the padding of the cells. Allowed values are "),i(131,"span",7),e(132,"'compact'"),t(),e(133," | "),i(134,"span",7),e(135,"'very compact'"),t(),e(136," | "),i(137,"span",7),e(138,"null"),t()(),i(139,"td")(140,"div",10),e(141," string "),t()(),i(142,"td")(143,"div",11),e(144," null "),t()()(),i(145,"tr")(146,"td"),e(147," suiSize "),t(),i(148,"td"),e(149," Set the size of the table. Allowed values are "),i(150,"span",7),e(151,"'small'"),t(),e(152," | "),i(153,"span",7),e(154,"'large'"),t(),e(155," | "),i(156,"span",7),e(157,"null"),t()(),i(158,"td")(159,"div",10),e(160," string "),t()(),i(161,"td")(162,"div",11),e(163," null "),t()()(),i(164,"tr")(165,"td"),e(166," suiStacking "),t(),i(167,"td"),e(168," Control how the table stacks responsively. Allowed values are "),i(169,"span",7),e(170,"'unstackable'"),t(),e(171," | "),i(172,"span",7),e(173,"'tablet stackable'"),t(),e(174," | "),i(175,"span",7),e(176,"'mobile stackable'"),t(),e(177," | "),i(178,"span",7),e(179,"'computer stackable'"),t(),e(180," | "),i(181,"span",7),e(182,"'large screen stackable'"),t(),e(183," | "),i(184,"span",7),e(185,"'tablet mobile stackable'"),t(),e(186," | "),i(187,"span",7),e(188,"null"),t()(),i(189,"td")(190,"div",10),e(191," string "),t()(),i(192,"td")(193,"div",11),e(194," null "),t()()(),i(195,"tr")(196,"td"),e(197," suiAttached "),t(),i(198,"td"),e(199," Attach the table to other content. Allowed values are "),i(200,"span",7),e(201,"'top attached'"),t(),e(202," | "),i(203,"span",7),e(204,"'attached'"),t(),e(205," | "),i(206,"span",7),e(207,"'bottom attached'"),t(),e(208," | "),i(209,"span",7),e(210,"null"),t()(),i(211,"td")(212,"div",10),e(213," string "),t()(),i(214,"td")(215,"div",11),e(216," null "),t()()(),i(217,"tr")(218,"td"),e(219," suiCelled "),t(),i(220,"td"),e(221," Divide each row into separate cells "),t(),i(222,"td")(223,"div",10),e(224," boolean "),t()(),i(225,"td")(226,"div",11),e(227," false "),t()()(),i(228,"tr")(229,"td"),e(230," suiStriped "),t(),i(231,"td"),e(232," Stripe alternate rows "),t(),i(233,"td")(234,"div",10),e(235," boolean "),t()(),i(236,"td")(237,"div",11),e(238," false "),t()()(),i(239,"tr")(240,"td"),e(241," suiDefinition "),t(),i(242,"td"),e(243," Emphasize the first column "),t(),i(244,"td")(245,"div",10),e(246," boolean "),t()(),i(247,"td")(248,"div",11),e(249," false "),t()()(),i(250,"tr")(251,"td"),e(252," suiStructured "),t(),i(253,"td"),e(254," Format the table for complex structured data "),t(),i(255,"td")(256,"div",10),e(257," boolean "),t()(),i(258,"td")(259,"div",11),e(260," false "),t()()(),i(261,"tr")(262,"td"),e(263," suiSingleLine "),t(),i(264,"td"),e(265," Prevent cell contents from wrapping "),t(),i(266,"td")(267,"div",10),e(268," boolean "),t()(),i(269,"td")(270,"div",11),e(271," false "),t()()(),i(272,"tr")(273,"td"),e(274," suiFixed "),t(),i(275,"td"),e(276," Use a fixed table layout "),t(),i(277,"td")(278,"div",10),e(279," boolean "),t()(),i(280,"td")(281,"div",11),e(282," false "),t()()(),i(283,"tr")(284,"td"),e(285," suiSelectable "),t(),i(286,"td"),e(287," Make the rows appear selectable "),t(),i(288,"td")(289,"div",10),e(290," boolean "),t()(),i(291,"td")(292,"div",11),e(293," false "),t()()(),i(294,"tr")(295,"td"),e(296," suiSortable "),t(),i(297,"td"),e(298," Format the headers as sortable "),t(),i(299,"td")(300,"div",10),e(301," boolean "),t()(),i(302,"td")(303,"div",11),e(304," false "),t()()(),i(305,"tr")(306,"td"),e(307," suiInverted "),t(),i(308,"td"),e(309," Invert the colours of the table "),t(),i(310,"td")(311,"div",10),e(312," boolean "),t()(),i(313,"td")(314,"div",11),e(315," false "),t()()(),i(316,"tr")(317,"td"),e(318," suiCollapsing "),t(),i(319,"td"),e(320," Only take up as much space as the rows need "),t(),i(321,"td")(322,"div",10),e(323," boolean "),t()(),i(324,"td")(325,"div",11),e(326," false "),t()()()()(),i(327,"h2",2),e(328,"suiTableRow"),t(),i(329,"h4",4),e(330,"Properties"),t(),i(331,"table",9)(332,"thead")(333,"tr")(334,"th"),e(335,"Property"),t(),i(336,"th"),e(337,"Description"),t(),i(338,"th"),e(339,"Type"),t(),i(340,"th"),e(341,"Default"),t()()(),i(342,"tbody")(343,"tr")(344,"td"),e(345," suiState "),t(),i(346,"td"),e(347," Set the state of the row. Allowed values are "),i(348,"span",7),e(349,"'positive'"),t(),e(350," | "),i(351,"span",7),e(352,"'negative'"),t(),e(353," | "),i(354,"span",7),e(355,"'warning'"),t(),e(356," | "),i(357,"span",7),e(358,"'error'"),t(),e(359," | "),i(360,"span",7),e(361,"null"),t()(),i(362,"td")(363,"div",10),e(364," string "),t()(),i(365,"td")(366,"div",11),e(367," null "),t()()(),i(368,"tr")(369,"td"),e(370," suiTextAlignment "),t(),i(371,"td"),e(372," Set the text alignment of the row. Allowed values are "),i(373,"span",7),e(374,"'left'"),t(),e(375," | "),i(376,"span",7),e(377,"'center'"),t(),e(378," | "),i(379,"span",7),e(380,"'right'"),t(),e(381," | "),i(382,"span",7),e(383,"null"),t()(),i(384,"td")(385,"div",10),e(386," string "),t()(),i(387,"td")(388,"div",11),e(389," null "),t()()(),i(390,"tr")(391,"td"),e(392," suiVerticalAlignment "),t(),i(393,"td"),e(394," Set the vertical alignment of the row. Allowed values are "),i(395,"span",7),e(396,"'top'"),t(),e(397," | "),i(398,"span",7),e(399,"'middle'"),t(),e(400," | "),i(401,"span",7),e(402,"'bottom'"),t(),e(403," | "),i(404,"span",7),e(405,"null"),t()(),i(406,"td")(407,"div",10),e(408," string "),t()(),i(409,"td")(410,"div",11),e(411," null "),t()()(),i(412,"tr")(413,"td"),e(414," suiActive "),t(),i(415,"td"),e(416," Mark the row as active "),t(),i(417,"td")(418,"div",10),e(419," boolean "),t()(),i(420,"td")(421,"div",11),e(422," false "),t()()(),i(423,"tr")(424,"td"),e(425," disabled "),t(),i(426,"td"),e(427," Disable the row "),t(),i(428,"td")(429,"div",10),e(430," boolean "),t()(),i(431,"td")(432,"div",11),e(433," false "),t()()()()(),i(434,"h2",2),e(435,"suiTableHeaderCell"),t(),i(436,"h4",4),e(437,"Properties"),t(),i(438,"table",9)(439,"thead")(440,"tr")(441,"th"),e(442,"Property"),t(),i(443,"th"),e(444,"Description"),t(),i(445,"th"),e(446,"Type"),t(),i(447,"th"),e(448,"Default"),t()()(),i(449,"tbody")(450,"tr")(451,"td"),e(452," suiWidth "),t(),i(453,"td"),e(454," Set the width of the column. Allowed values are "),i(455,"span",7),e(456,"'one'"),t(),e(457," through "),i(458,"span",7),e(459,"'sixteen'"),t(),e(460," | "),i(461,"span",7),e(462,"null"),t()(),i(463,"td")(464,"div",10),e(465," string "),t()(),i(466,"td")(467,"div",11),e(468," null "),t()()(),i(469,"tr")(470,"td"),e(471," suiTextAlignment "),t(),i(472,"td"),e(473," Set the text alignment of the header. Allowed values are "),i(474,"span",7),e(475,"'left'"),t(),e(476," | "),i(477,"span",7),e(478,"'center'"),t(),e(479," | "),i(480,"span",7),e(481,"'right'"),t(),e(482," | "),i(483,"span",7),e(484,"null"),t()(),i(485,"td")(486,"div",10),e(487," string "),t()(),i(488,"td")(489,"div",11),e(490," null "),t()()(),i(491,"tr")(492,"td"),e(493," suiVerticalAlignment "),t(),i(494,"td"),e(495," Set the vertical alignment of the header. Allowed values are "),i(496,"span",7),e(497,"'top'"),t(),e(498," | "),i(499,"span",7),e(500,"'middle'"),t(),e(501," | "),i(502,"span",7),e(503,"'bottom'"),t(),e(504," | "),i(505,"span",7),e(506,"null"),t()(),i(507,"td")(508,"div",10),e(509," string "),t()(),i(510,"td")(511,"div",11),e(512," null "),t()()(),i(513,"tr")(514,"td"),e(515," suiSorted "),t(),i(516,"td"),e(517," Show the current sort direction. Allowed values are "),i(518,"span",7),e(519,"'ascending'"),t(),e(520," | "),i(521,"span",7),e(522,"'descending'"),t(),e(523," | "),i(524,"span",7),e(525,"null"),t()(),i(526,"td")(527,"div",10),e(528," string "),t()(),i(529,"td")(530,"div",11),e(531," null "),t()()(),i(532,"tr")(533,"td"),e(534," suiSingleLine "),t(),i(535,"td"),e(536," Prevent the header contents from wrapping "),t(),i(537,"td")(538,"div",10),e(539," boolean "),t()(),i(540,"td")(541,"div",11),e(542," false "),t()()(),i(543,"tr")(544,"td"),e(545," suiCollapsing "),t(),i(546,"td"),e(547," Only take up as much space as the contents need "),t(),i(548,"td")(549,"div",10),e(550," boolean "),t()(),i(551,"td")(552,"div",11),e(553," false "),t()()()()(),i(554,"h2",2),e(555,"suiTableCell"),t(),i(556,"h4",4),e(557,"Properties"),t(),i(558,"table",9)(559,"thead")(560,"tr")(561,"th"),e(562,"Property"),t(),i(563,"th"),e(564,"Description"),t(),i(565,"th"),e(566,"Type"),t(),i(567,"th"),e(568,"Default"),t()()(),i(569,"tbody")(570,"tr")(571,"td"),e(572," suiState "),t(),i(573,"td"),e(574," Set the state of the cell. Allowed values are "),i(575,"span",7),e(576,"'positive'"),t(),e(577," | "),i(578,"span",7),e(579,"'negative'"),t(),e(580," | "),i(581,"span",7),e(582,"'warning'"),t(),e(583," | "),i(584,"span",7),e(585,"'error'"),t(),e(586," | "),i(587,"span",7),e(588,"null"),t()(),i(589,"td")(590,"div",10),e(591," string "),t()(),i(592,"td")(593,"div",11),e(594," null "),t()()(),i(595,"tr")(596,"td"),e(597," suiTextAlignment "),t(),i(598,"td"),e(599," Set the text alignment of the cell. Allowed values are "),i(600,"span",7),e(601,"'left'"),t(),e(602," | "),i(603,"span",7),e(604,"'center'"),t(),e(605," | "),i(606,"span",7),e(607,"'right'"),t(),e(608," | "),i(609,"span",7),e(610,"null"),t()(),i(611,"td")(612,"div",10),e(613," string "),t()(),i(614,"td")(615,"div",11),e(616," null "),t()()(),i(617,"tr")(618,"td"),e(619," suiVerticalAlignment "),t(),i(620,"td"),e(621," Set the vertical alignment of the cell. Allowed values are "),i(622,"span",7),e(623,"'top'"),t(),e(624," | "),i(625,"span",7),e(626,"'middle'"),t(),e(627," | "),i(628,"span",7),e(629,"'bottom'"),t(),e(630," | "),i(631,"span",7),e(632,"null"),t()(),i(633,"td")(634,"div",10),e(635," string "),t()(),i(636,"td")(637,"div",11),e(638," null "),t()()(),i(639,"tr")(640,"td"),e(641," suiActive "),t(),i(642,"td"),e(643," Mark the cell as active "),t(),i(644,"td")(645,"div",10),e(646," boolean "),t()(),i(647,"td")(648,"div",11),e(649," false "),t()()(),i(650,"tr")(651,"td"),e(652," suiCollapsing "),t(),i(653,"td"),e(654," Only take up as much space as the contents need "),t(),i(655,"td")(656,"div",10),e(657," boolean "),t()(),i(658,"td")(659,"div",11),e(660," false "),t()()(),i(661,"tr")(662,"td"),e(663," suiSelectable "),t(),i(664,"td"),e(665," Make the cell selectable "),t(),i(666,"td")(667,"div",10),e(668," boolean "),t()(),i(669,"td")(670,"div",11),e(671," false "),t()()(),i(672,"tr")(673,"td"),e(674," suiSingleLine "),t(),i(675,"td"),e(676," Prevent the cell contents from wrapping "),t(),i(677,"td")(678,"div",10),e(679," boolean "),t()(),i(680,"td")(681,"div",11),e(682," false "),t()()(),i(683,"tr")(684,"td"),e(685," disabled "),t(),i(686,"td"),e(687," Disable the cell "),t(),i(688,"td")(689,"div",10),e(690," boolean "),t()(),i(691,"td")(692,"div",11),e(693," false "),t()()()()()())}var Qa=(()=>{class n{constructor(l){this.snippetTable=Ol,this.snippetDefinition=Ul,this.snippetStructured=jl,this.snippetPositiveNegative=Yl,this.snippetError=Xl,this.snippetWarning=$l,this.snippetActive=Kl,this.snippetDisabled=Ql,this.snippetSingleLine=Zl,this.snippetFixed=ea,this.snippetStacking=ta,this.snippetSelectableRow=ia,this.snippetSelectableCell=na,this.snippetVerticalAlignment=la,this.snippetTextAlignment=aa,this.snippetStriped=da,this.snippetCelled=ra,this.snippetBasic=ma,this.snippetCollapsingCell=oa,this.snippetColumnWidth=sa,this.snippetColumnCount=pa,this.snippetCollapsing=ua,this.snippetColored=ca,this.snippetInverted=va,this.snippetSortable=xa,this.snippetSortableTs=Sa,this.snippetFullWidth=ha,this.snippetPadded=fa,this.snippetCompact=Ea,this.snippetSize=ga,this.snippetAttached=ba,l.setTitle("Table | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(V))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-table"]],standalone:!1,decls:3,vars:2,consts:[["header","Table","subHeader","A table displays a collections of data grouped into rows","semanticUrl","https://semantic-ui.com/collections/table.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-message","","suiState","info"],["sui-label",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,d){a&1&&(i(0,"doc-page",0),u(1,Ep,261,31,"div",1)(2,gp,694,0,"div",1),t()),a&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,O,q,U,k,D,h,P,ya,Ca,Fa,Da,Ma,_a,wa,Ta,Ia,Aa,ka,Ga,Ba,Na,Wa,Ra,Pa,za,Ja,La,Ha,Va,qa,Oa,Ua,ja,Ya,Xa,$a,Ka],encapsulation:2})}}return n})();var Za=`<div sui-message suiSize="small">
  <div suiMessageHeader>
    Changes in Service
  </div>
  <p>We updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</div>
`;var ed=`<div sui-message>
  <div suiMessageHeader>
    New Site Features
  </div>
  <ul suiMessageList>
    <li>You can now have cover images on blog pages</li>
    <li>Drafts will now auto-save while writing</li>
  </ul>
</div>
`;var td=`<div sui-message suiIcon>
  <i suiIconType="inbox" sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Have you heard about our mailing list?
    </div>
    <p>Get the best news in your e-mail every day.</p>
  </div>
</div>
`;var id=`<div sui-message suiIcon>
  <i suiIconType="notched circle" suiLoading sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Just one second
    </div>
    <p>We're fetching that content for you.</p>
  </div>
</div>
`;var nd=`<div sui-message suiDismissible>
  <div suiMessageHeader>
    Welcome back!
  </div>
  <p>This is a special notification which you can dismiss if you're bored with it.</p>
</div>
`;var ld=`<div sui-message suiHidden>
  <p>You can't see me</p>
</div>
`;var ad=`<div sui-message suiVisible>
  <p>You can always see me</p>
</div>
`;var dd=`<div sui-message suiFloating>
  <p>Way to go!</p>
</div>
`;var rd=`<div sui-message suiCompact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</div>
`;var md=`<div sui-message suiAttached='attached'>
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
`;var od=`<div sui-message suiColour='warning' suiDismissible>
  <div suiMessageHeader>
    You must register before you can do that!
  </div>
  <p>Visit our registration page, then try again</p>
</div>
`;var sd=`<div sui-message suiColour='info' suiDismissible>
  <div suiMessageHeader>
    Was this what you wanted?
  </div>
  <p>It's good to see you again</p>
</div>
`;var pd=`<div sui-message suiColour='positive' suiDismissible>
  <div suiMessageHeader>
    You are eligible for a reward
  </div>
  <p>Go to your special offers page to see now</p>
</div>
`;var ud=`<div sui-message suiColour='negative' suiDismissible>
  <div suiMessageHeader>
    We're sorry we can't apply that discount
  </div>
  <p>That offer has expired</p>
</div>
`;var cd=`<div sui-message suiColour='red'>Red</div>
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
`;var vd=`<div sui-message suiSize='mini'>This is a mini message</div>
<div sui-message suiSize='tiny'>This is a tiny message</div>
<div sui-message suiSize='small'>This is a small message</div>
<div sui-message suiSize='large'>This is a large message</div>
<div sui-message suiSize='big'>This is a big message</div>
<div sui-message suiSize='huge'>This is a huge message</div>
<div sui-message suiSize='massive'>This is a massive message</div>
`;var G=class{constructor(){this.isDefinitionsActive=!0}},xd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-std-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-message","","suiSize","small"],["suiMessageHeader",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," Changes in Service "),t(),i(3,"p"),e(4,"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."),t()())},dependencies:[D,X],encapsulation:2})}}return n})(),Sd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-list-example"]],standalone:!1,features:[c],decls:8,vars:0,consts:[["sui-message",""],["suiMessageHeader",""],["suiMessageList",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," New Site Features "),t(),i(3,"ul",2)(4,"li"),e(5,"You can now have cover images on blog pages"),t(),i(6,"li"),e(7,"Drafts will now auto-save while writing"),t()()())},dependencies:[D,X,ye],encapsulation:2})}}return n})(),hd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-icon-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-message","","suiIcon",""],["suiIconType","inbox","sui-icon",""],["suiMessageContent",""],["sui-header",""]],template:function(a,d){a&1&&(i(0,"div",0),r(1,"i",1),i(2,"div",2)(3,"div",3),e(4," Have you heard about our mailing list? "),t(),i(5,"p"),e(6,"Get the best news in your e-mail every day."),t()()())},dependencies:[M,k,D,Fe],encapsulation:2})}}return n})(),fd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-icon2-example"]],standalone:!1,features:[c],decls:7,vars:0,consts:[["sui-message","","suiIcon",""],["suiIconType","notched circle","suiLoading","","sui-icon",""],["suiMessageContent",""],["sui-header",""]],template:function(a,d){a&1&&(i(0,"div",0),r(1,"i",1),i(2,"div",2)(3,"div",3),e(4," Just one second "),t(),i(5,"p"),e(6,"We're fetching that content for you."),t()()())},dependencies:[M,k,D,Fe],encapsulation:2})}}return n})(),Ed=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-dissmisable-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-message","","suiDismissible",""],["suiMessageHeader",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," Welcome back! "),t(),i(3,"p"),e(4,"This is a special notification which you can dismiss if you're bored with it."),t()())},dependencies:[D,X],encapsulation:2})}}return n})(),gd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-hidden-example"]],standalone:!1,features:[c],decls:3,vars:0,consts:[["sui-message","","suiHidden",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"p"),e(2,"You can't see me"),t()())},dependencies:[D],encapsulation:2})}}return n})(),bd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-visible-example"]],standalone:!1,features:[c],decls:3,vars:0,consts:[["sui-message","","suiVisible",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"p"),e(2,"You can always see me"),t()())},dependencies:[D],encapsulation:2})}}return n})(),yd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-floating-example"]],standalone:!1,features:[c],decls:3,vars:0,consts:[["sui-message","","suiFloating",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"p"),e(2,"Way to go!"),t()())},dependencies:[D],encapsulation:2})}}return n})(),Cd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-compact-example"]],standalone:!1,features:[c],decls:3,vars:0,consts:[["sui-message","","suiCompact",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"p"),e(2,"Get all the best inventions in your e-mail every day. Sign up now!"),t()())},dependencies:[D],encapsulation:2})}}return n})(),Fd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-attached-example"]],standalone:!1,features:[c],decls:36,vars:0,consts:[["sui-message","","suiAttached","attached"],["sui-header",""],["sui-form","",1,"attached","fluid","segment"],["suiFormFields","",1,"two"],["suiFormField",""],["placeholder","First Name","type","text"],["placeholder","Last Name","type","text"],["placeholder","Username","type","text"],["type","password"],["suiFormField","","suiInline",""],[1,"ui","checkbox"],["type","checkbox","id","terms"],["for","terms"],["sui-button","","suiColour","blue"],["sui-message","","suiAttached","bottom attached","suiColour","warning"],["suiIconType","help","sui-icon",""],["href","#"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," Welcome to our site! "),t(),i(3,"p"),e(4,"Fill out the form below to sign-up for a new account"),t()(),i(5,"form",2)(6,"div",3)(7,"div",4)(8,"label"),e(9,"First Name"),t(),r(10,"input",5),t(),i(11,"div",4)(12,"label"),e(13,"Last Name"),t(),r(14,"input",6),t()(),i(15,"div",4)(16,"label"),e(17,"Username"),t(),r(18,"input",7),t(),i(19,"div",4)(20,"label"),e(21,"Password"),t(),r(22,"input",8),t(),i(23,"div",9)(24,"div",10),r(25,"input",11),i(26,"label",12),e(27,"I agree to the terms and conditions"),t()()(),i(28,"div",13),e(29,"Submit"),t()(),i(30,"div",14),r(31,"i",15),e(32," Already signed up? "),i(33,"a",16),e(34,"Login here"),t(),e(35,` instead.
`),t())},dependencies:[me,de,re,E,f,_,M,k,D,A],encapsulation:2})}}return n})(),Dd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-warning-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-message","","suiColour","warning","suiDismissible",""],["suiMessageHeader",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," You must register before you can do that! "),t(),i(3,"p"),e(4,"Visit our registration page, then try again"),t()())},dependencies:[D,X],encapsulation:2})}}return n})(),Md=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-info-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-message","","suiColour","info","suiDismissible",""],["suiMessageHeader",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," Was this what you wanted? "),t(),i(3,"p"),e(4,"It's good to see you again"),t()())},dependencies:[D,X],encapsulation:2})}}return n})(),_d=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-success-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-message","","suiColour","positive","suiDismissible",""],["suiMessageHeader",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," You are eligible for a reward "),t(),i(3,"p"),e(4,"Go to your special offers page to see now"),t()())},dependencies:[D,X],encapsulation:2})}}return n})(),wd=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-error-example"]],standalone:!1,features:[c],decls:5,vars:0,consts:[["sui-message","","suiColour","negative","suiDismissible",""],["suiMessageHeader",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"div",1),e(2," We're sorry we can't apply that discount "),t(),i(3,"p"),e(4,"That offer has expired"),t()())},dependencies:[D,X],encapsulation:2})}}return n})(),Td=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-coloured-example"]],standalone:!1,features:[c],decls:24,vars:0,consts:[["sui-message","","suiColour","red"],["sui-message","","suiColour","orange"],["sui-message","","suiColour","yellow"],["sui-message","","suiColour","olive"],["sui-message","","suiColour","green"],["sui-message","","suiColour","teal"],["sui-message","","suiColour","blue"],["sui-message","","suiColour","violet"],["sui-message","","suiColour","purple"],["sui-message","","suiColour","pink"],["sui-message","","suiColour","brown"],["sui-message","","suiColour","black"]],template:function(a,d){a&1&&(i(0,"div",0),e(1,"Red"),t(),i(2,"div",1),e(3,"Orange"),t(),i(4,"div",2),e(5,"Yellow"),t(),i(6,"div",3),e(7,"Olive"),t(),i(8,"div",4),e(9,"Green"),t(),i(10,"div",5),e(11,"Teal"),t(),i(12,"div",6),e(13,"Blue"),t(),i(14,"div",7),e(15,"Violet"),t(),i(16,"div",8),e(17,"Purple"),t(),i(18,"div",9),e(19,"Pink"),t(),i(20,"div",10),e(21,"Brown"),t(),i(22,"div",11),e(23,"Black"),t())},dependencies:[D],encapsulation:2})}}return n})(),Id=(()=>{class n extends G{static{this.\u0275fac=(()=>{let l;return function(d){return(l||(l=v(n)))(d||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages-msg-sizes-example"]],standalone:!1,features:[c],decls:14,vars:0,consts:[["sui-message","","suiSize","mini"],["sui-message","","suiSize","tiny"],["sui-message","","suiSize","small"],["sui-message","","suiSize","large"],["sui-message","","suiSize","big"],["sui-message","","suiSize","huge"],["sui-message","","suiSize","massive"]],template:function(a,d){a&1&&(i(0,"div",0),e(1,"This is a mini message"),t(),i(2,"div",1),e(3,"This is a tiny message"),t(),i(4,"div",2),e(5,"This is a small message"),t(),i(6,"div",3),e(7,"This is a large message"),t(),i(8,"div",4),e(9,"This is a big message"),t(),i(10,"div",5),e(11,"This is a huge message"),t(),i(12,"div",6),e(13,"This is a massive message"),t())},dependencies:[D],encapsulation:2})}}return n})();function Pp(n,s){n&1&&r(0,"doc-messages-msg-std-example")}function zp(n,s){n&1&&r(0,"doc-messages-msg-list-example")}function Jp(n,s){n&1&&r(0,"doc-messages-msg-icon-example")}function Lp(n,s){n&1&&r(0,"doc-messages-msg-icon2-example")}function Hp(n,s){n&1&&r(0,"doc-messages-msg-dissmisable-example")}function Vp(n,s){n&1&&r(0,"doc-messages-msg-hidden-example")}function qp(n,s){n&1&&r(0,"doc-messages-msg-visible-example")}function Op(n,s){n&1&&r(0,"doc-messages-msg-floating-example")}function Up(n,s){n&1&&r(0,"doc-messages-msg-compact-example")}function jp(n,s){n&1&&r(0,"doc-messages-msg-attached-example")}function Yp(n,s){n&1&&r(0,"doc-messages-msg-warning-example")}function Xp(n,s){n&1&&r(0,"doc-messages-msg-info-example")}function $p(n,s){n&1&&r(0,"doc-messages-msg-success-example")}function Kp(n,s){n&1&&r(0,"doc-messages-msg-error-example")}function Qp(n,s){n&1&&r(0,"doc-messages-msg-coloured-example")}function Zp(n,s){n&1&&r(0,"doc-messages-msg-sizes-example")}function eu(n,s){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Message"),t(),i(6,"p"),e(7,"A basic message"),t(),u(8,Pp,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"List Message"),t(),i(12,"p"),e(13,"A message with a list"),t(),u(14,zp,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Icon Message"),t(),i(18,"p"),e(19,"A message can contain an icon"),t(),u(20,Jp,1,0,"ng-template",5),t(),i(21,"doc-code-sample",3),u(22,Lp,1,0,"ng-template",5),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Dissmissable Block"),t(),i(26,"p"),e(27,"A message that the user can choose to hide"),t(),u(28,Hp,1,0,"ng-template",5),t(),i(29,"h2",2),e(30,"States"),t(),i(31,"doc-code-sample",3)(32,"h3",4),e(33,"Hidden"),t(),i(34,"p"),e(35,"A message can be hidden"),t(),u(36,Vp,1,0,"ng-template",5),t(),i(37,"doc-code-sample",3)(38,"h3",4),e(39,"Visible"),t(),i(40,"p"),e(41,"A message can be set to visible to force itself to be shown"),t(),u(42,qp,1,0,"ng-template",5),t(),i(43,"h2",2),e(44,"Variations"),t(),r(45,"br"),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Floating"),t(),i(49,"p"),e(50,"A message can float above content that it is related to"),t(),u(51,Op,1,0,"ng-template",5),t(),i(52,"doc-code-sample",3)(53,"h3",4),e(54,"Compact"),t(),i(55,"p"),e(56,"A message can only take up the width of its content"),t(),u(57,Up,1,0,"ng-template",5),t(),i(58,"doc-code-sample",3)(59,"h3",4),e(60,"Attached"),t(),i(61,"p"),e(62,"A message can be formatted to attach itself to other content"),t(),u(63,jp,1,0,"ng-template",5),t(),i(64,"doc-code-sample",3)(65,"h3",4),e(66,"Warning"),t(),i(67,"p"),e(68,"A message may be formatted to display warning messages."),t(),u(69,Yp,1,0,"ng-template",5),t(),i(70,"doc-code-sample",3)(71,"h3",4),e(72,"Info"),t(),i(73,"p"),e(74,"A message may be formatted to display information"),t(),u(75,Xp,1,0,"ng-template",5),t(),i(76,"doc-code-sample",3)(77,"h3",4),e(78,"Positive/Success"),t(),i(79,"p"),e(80,"A message may be formatted to display a positive message"),t(),u(81,$p,1,0,"ng-template",5),t(),i(82,"doc-code-sample",3)(83,"h3",4),e(84,"Negative/Error"),t(),i(85,"p"),e(86,"A message may be formatted to display a negative message"),t(),u(87,Kp,1,0,"ng-template",5),t(),i(88,"doc-code-sample",3)(89,"h3",4),e(90,"Coloured"),t(),i(91,"p"),e(92,"A message can be formatted to be different colours"),t(),u(93,Qp,1,0,"ng-template",5),t(),i(94,"doc-code-sample",3)(95,"h3",4),e(96,"Size"),t(),i(97,"p"),e(98,"A message can have different sizes"),t(),u(99,Zp,1,0,"ng-template",5),t()()),n&2){let l=H();m(3),o("templateCode",l.snippetBasic),m(6),o("templateCode",l.snippetList),m(6),o("templateCode",l.snippetIcon1),m(6),o("templateCode",l.snippetIcon2),m(2),o("templateCode",l.snippetDismissable),m(8),o("templateCode",l.snippetHidden),m(6),o("templateCode",l.snippetVisible),m(9),o("templateCode",l.snippetFloating),m(6),o("templateCode",l.snippetCompact),m(6),o("templateCode",l.snippetAttached),m(6),o("templateCode",l.snippettWarning),m(6),o("templateCode",l.snippetInfo),m(6),o("templateCode",l.snippetSuccess),m(6),o("templateCode",l.snippetError),m(6),o("templateCode",l.snippetColoured),m(6),o("templateCode",l.snippetSizes)}}function tu(n,s){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-message"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiAttached"),t(),i(20,"td"),e(21," Attach a message to other content. Allowed values could be "),i(22,"span",7),e(23,"attached"),t(),e(24," | "),i(25,"span",7),e(26,"bottom attached"),t(),e(27," | "),i(28,"span",7),e(29,"null"),t()(),i(30,"td")(31,"div",8),e(32," string "),t()(),i(33,"td")(34,"div",9),e(35," null "),t()()(),i(36,"tr")(37,"td"),e(38,"suiColour"),t(),i(39,"td"),e(40,"Set the message colour. Allowed values could be "),i(41,"span",7),e(42,"'red'"),t(),e(43," | "),i(44,"span",7),e(45,"'orange'"),t(),e(46," | "),i(47,"span",7),e(48,"'yellow'"),t(),e(49," | "),i(50,"span",7),e(51,"'olive'"),t(),e(52," | "),i(53,"span",7),e(54,"'green'"),t(),e(55," | "),i(56,"span",7),e(57,"'teal'"),t(),e(58," | "),i(59,"span",7),e(60,"'blue'"),t(),e(61," | "),i(62,"span",7),e(63,"'violet'"),t(),e(64," | "),i(65,"span",7),e(66,"'purple'"),t(),e(67," | "),i(68,"span",7),e(69,"'pink'"),t(),e(70," | "),i(71,"span",7),e(72,"'brown'"),t(),e(73," | "),i(74,"span",7),e(75,"'grey'"),t(),e(76," | "),i(77,"span",7),e(78,"'black'"),t(),e(79," | "),i(80,"span",7),e(81,"null"),t()(),i(82,"td")(83,"div",8),e(84," string "),t()(),i(85,"td")(86,"div",9),e(87," null "),t()()(),i(88,"tr")(89,"td"),e(90,"suiState"),t(),i(91,"td"),e(92,"Set a message to either visible or hidden states."),t(),i(93,"td")(94,"div",8),e(95," string "),t()(),i(96,"td")(97,"div",9),e(98," null "),t()()(),i(99,"tr")(100,"td"),e(101,"suiSize"),t(),i(102,"td"),e(103,"Set the breadcrumb size. Allowed values could be "),i(104,"span",7),e(105,"mini"),t(),e(106," | "),i(107,"span",7),e(108,"tiny"),t(),e(109," | "),i(110,"span",7),e(111,"small"),t(),e(112," | "),i(113,"span",7),e(114,"medium"),t(),e(115," | "),i(116,"span",7),e(117,"big"),t(),e(118," | "),i(119,"span",7),e(120,"huge"),t(),e(121," | "),i(122,"span",7),e(123,"massive"),t(),e(124," | "),i(125,"span",7),e(126,"null"),t()(),i(127,"td")(128,"div",8),e(129," string "),t()(),i(130,"td")(131,"div",9),e(132," null "),t()()(),i(133,"tr")(134,"td"),e(135,"suiDismissable"),t(),i(136,"td"),e(137," Determine whether or not a message can be dismissed "),t(),i(138,"td")(139,"div",8),e(140," boolean "),t()(),i(141,"td")(142,"div",9),e(143," false "),t()()(),i(144,"tr")(145,"td"),e(146,"suiIcon"),t(),i(147,"td"),e(148," Determine whether or not a message can contain an icon "),t(),i(149,"td")(150,"div",8),e(151," boolean "),t()(),i(152,"td")(153,"div",9),e(154," false "),t()()(),i(155,"tr")(156,"td"),e(157,"suiHidden"),t(),i(158,"td"),e(159," Prevent a message from displaying. "),t(),i(160,"td")(161,"div",8),e(162," boolean "),t()(),i(163,"td")(164,"div",9),e(165," false "),t()()(),i(166,"tr")(167,"td"),e(168,"suiVisible"),t(),i(169,"td"),e(170," Present the message to the display "),t(),i(171,"td")(172,"div",8),e(173," boolean "),t()(),i(174,"td")(175,"div",9),e(176," false "),t()()(),i(177,"tr")(178,"td"),e(179,"suiFloating"),t(),i(180,"td"),e(181," Determine whether or not a message will float over the content it is related to "),t(),i(182,"td")(183,"div",8),e(184," boolean "),t()(),i(185,"td")(186,"div",9),e(187," false "),t()()(),i(188,"tr")(189,"td"),e(190,"suiCompact"),t(),i(191,"td"),e(192," Setup the message to take up just as much space as its content "),t(),i(193,"td")(194,"div",8),e(195," boolean "),t()(),i(196,"td")(197,"div",9),e(198," false "),t()()()()(),r(199,"br"),i(200,"h2",2),e(201,"suiMessageHeader"),t(),i(202,"h4",4),e(203,"Properties"),t(),i(204,"table",6)(205,"thead")(206,"tr")(207,"th"),e(208,"Property"),t(),i(209,"th"),e(210,"Description"),t(),i(211,"th"),e(212,"Type"),t(),i(213,"th"),e(214,"Default"),t()()(),r(215,"tbody"),i(216,"tfoot",10)(217,"tr")(218,"th",11)(219,"div",12),e(220,"No properties for this directive"),t()()()()(),r(221,"br"),i(222,"h2",2),e(223,"suiMessageContent"),t(),i(224,"h4",4),e(225,"Properties"),t(),i(226,"table",6)(227,"thead")(228,"tr")(229,"th"),e(230,"Property"),t(),i(231,"th"),e(232,"Description"),t(),i(233,"th"),e(234,"Type"),t(),i(235,"th"),e(236,"Default"),t()()(),r(237,"tbody"),i(238,"tfoot",10)(239,"tr")(240,"th",11)(241,"div",12),e(242,"No properties for this directive"),t()()()()(),r(243,"br"),i(244,"h2",2),e(245,"suiMessageList"),t(),i(246,"h4",4),e(247,"Properties"),t(),i(248,"table",6)(249,"thead")(250,"tr")(251,"th"),e(252,"Property"),t(),i(253,"th"),e(254,"Description"),t(),i(255,"th"),e(256,"Type"),t(),i(257,"th"),e(258,"Default"),t()()(),r(259,"tbody"),i(260,"tfoot",10)(261,"tr")(262,"th",11)(263,"div",12),e(264,"No properties for this directive"),t()()()()()())}var Ad=(()=>{class n{constructor(l){this.snippetBasic=Za,this.snippetList=ed,this.snippetIcon1=td,this.snippetIcon2=id,this.snippetDismissable=nd,this.snippetHidden=ld,this.snippetVisible=ad,this.snippetFloating=dd,this.snippetCompact=rd,this.snippetAttached=md,this.snippettWarning=od,this.snippetInfo=sd,this.snippetSuccess=pd,this.snippetError=ud,this.snippetColoured=cd,this.snippetSizes=vd,this.isDefinitionsActive=!0,l.setTitle("Message | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(V))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-messages"]],standalone:!1,decls:3,vars:2,consts:[["header","Message","subHeader","A message displays information that explains nearby content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,d){a&1&&(i(0,"doc-page",0),u(1,eu,100,16,"div",1)(2,tu,265,0,"div",1),t()),a&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,O,q,U,k,h,P,xd,Sd,hd,fd,Ed,gd,bd,yd,Cd,Fd,Dd,Md,_d,wd,Td,Id],styles:['div[_ngcontent-%COMP%]   [class*="right floated"][_ngcontent-%COMP%]{float:right;margin-right:.25em}']})}}return n})();var kd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Store</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var Gd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Store</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var Bd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Registration</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Nd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Wd=`<div sui-breadcrumb>
  <span suiBreadcrumbSection>Home</span>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search</div>
</div>
`;var Rd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search for: <a href="#">paper towels</a></div>
</div>
`;var Pd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Products</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Paper Towels</div>
</div>
`;var zd=`<div sui-breadcrumb suiSize='mini'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Jd=`<div sui-breadcrumb suiSize='tiny'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Ld=`<div sui-breadcrumb suiSize='small'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Hd=`<div sui-breadcrumb suiSize='large'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Vd=`<div sui-breadcrumb suiSize='big'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var qd=`<div sui-breadcrumb suiSize='huge'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Od=`<div sui-breadcrumb suiSize='massive'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var N=(()=>{class n extends ge{constructor(){let l=xe(Se);super(l),this.suiIcon=""}get classes(){return[this.getIcon(),"divider"].join(" ")}getIcon(){return this.suiIcon?`${this.suiIcon} icon`:this.suiIcon}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=he({type:n,selectors:[["","suiBreadcrumbDivider",""]],inputs:{suiIcon:"suiIcon"},exportAs:["suiBreadcrumbDivider"],features:[c]})}}return n})(),W=(()=>{class n extends ge{constructor(){let l=xe(Se);super(l),this.suiActive=!1}get classes(){return[this.getActive(),"section"].join(" ")}getActive(){return this.suiActive?"active":""}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=he({type:n,selectors:[["","suiBreadcrumbSection",""]],inputs:{suiActive:"suiActive"},exportAs:["suiBreadcrumbSection"],features:[c]})}}return _e([ke()],n.prototype,"suiActive",void 0),n})(),R=(()=>{class n extends ge{constructor(){let l=xe(Se);super(l),this.suiSize=null}get classes(){return["ui",this.suiSize,"breadcrumb"].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=he({type:n,selectors:[["","sui-breadcrumb",""]],inputs:{suiSize:"suiSize"},exportAs:["suiBreadcrumb"],features:[c]})}}return n})(),Ud=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[Ee]})}}return n})();var jd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-std-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),i(3,"div",2),e(4," /"),t(),i(5,"a",1),e(6,"Store"),t(),i(7,"div",2),e(8," /"),t(),i(9,"div",3),e(10,"T-Shirt"),t()())},dependencies:[N,W,R],encapsulation:2})}}return n})(),Yd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-std1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiIcon","right angle","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Store"),t(),r(6,"i",2),i(7,"div",3),e(8,"T-Shirt"),t()())},dependencies:[N,W,R],encapsulation:2})}}return n})(),Xd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-content-example"]],standalone:!1,decls:11,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),i(3,"div",2),e(4," /"),t(),i(5,"a",1),e(6,"Registration"),t(),i(7,"div",2),e(8," /"),t(),i(9,"div",3),e(10,"Personal Information"),t()())},dependencies:[N,W,R],encapsulation:2})}}return n})(),$d=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-content1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),Kd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-section-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"span",1),e(2,"Home"),t(),i(3,"div",2),e(4," /"),t(),i(5,"div",3),e(6,"Search"),t()())},dependencies:[N,W,R],encapsulation:2})}}return n})(),Qd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-link-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""],["href","#"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),i(3,"div",2),e(4," /"),t(),i(5,"div",3),e(6,"Search for: "),i(7,"a",4),e(8,"paper towels"),t()()())},dependencies:[N,W,R],encapsulation:2})}}return n})(),Zd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-active-example"]],standalone:!1,decls:7,vars:0,consts:[["sui-breadcrumb",""],["suiBreadcrumbSection",""],["suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Products"),t(),i(3,"div",2),e(4," /"),t(),i(5,"div",3),e(6,"Paper Towels"),t()())},dependencies:[N,W,R],encapsulation:2})}}return n})(),er=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","mini"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),tr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size1-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","tiny"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),ir=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size2-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","small"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),nr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size3-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","large"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),lr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size4-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","big"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),ar=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size5-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","huge"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})(),dr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb-breadcrumb-size6-example"]],standalone:!1,decls:9,vars:0,consts:[["sui-breadcrumb","","suiSize","massive"],["suiBreadcrumbSection",""],["suiIcon","right chevron","suiBreadcrumbDivider",""],["suiIconType","right arrow","sui-icon","","suiBreadcrumbDivider",""],["suiBreadcrumbSection","","suiActive",""]],template:function(a,d){a&1&&(i(0,"div",0)(1,"a",1),e(2,"Home"),t(),r(3,"i",2),i(4,"a",1),e(5,"Registration"),t(),r(6,"i",3),i(7,"div",4),e(8,"Personal Information"),t()())},dependencies:[M,N,W,R],encapsulation:2})}}return n})();function fu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-std-example")}function Eu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-std1-example")}function gu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-content-example")}function bu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-content1-example")}function yu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-section-example")}function Cu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-link-example")}function Fu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-active-example")}function Du(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size-example")}function Mu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size1-example")}function _u(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size2-example")}function wu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size3-example")}function Tu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size4-example")}function Iu(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size5-example")}function Au(n,s){n&1&&r(0,"doc-breadcrumb-breadcrumb-size6-example")}function ku(n,s){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Breadcrumb"),t(),i(6,"p"),e(7,"A standard breadcrumb"),t(),u(8,fu,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3),u(10,Eu,1,0,"ng-template",5),t(),r(11,"br"),i(12,"h2",2),e(13,"Content"),t(),i(14,"doc-code-sample",3)(15,"h3",4),e(16,"Divider"),t(),i(17,"p"),e(18,"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text"),t(),u(19,gu,1,0,"ng-template",5),t(),i(20,"doc-code-sample",3),u(21,bu,1,0,"ng-template",5),t(),i(22,"doc-code-sample",3)(23,"h3",4),e(24,"Section"),t(),i(25,"p"),e(26,"A breadcrumb can contain sections that can either be formatted as a link or text"),t(),u(27,yu,1,0,"ng-template",5),t(),i(28,"doc-code-sample",3)(29,"h3",4),e(30,"Link"),t(),i(31,"p"),e(32,"A section may be linkable or contain a link"),t(),u(33,Cu,1,0,"ng-template",5),t(),r(34,"br"),i(35,"h2",2),e(36,"States"),t(),i(37,"doc-code-sample",3)(38,"h3",4),e(39,"Active"),t(),i(40,"p"),e(41,"A section can be active"),t(),u(42,Fu,1,0,"ng-template",5),t(),r(43,"br"),i(44,"h2",2),e(45,"Variations"),t(),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Size"),t(),i(49,"p"),e(50,"A breadcrumb can vary in size"),t(),u(51,Du,1,0,"ng-template",5),t(),i(52,"doc-code-sample",3),u(53,Mu,1,0,"ng-template",5),t(),i(54,"doc-code-sample",3),u(55,_u,1,0,"ng-template",5),t(),i(56,"doc-code-sample",3),u(57,wu,1,0,"ng-template",5),t(),i(58,"doc-code-sample",3),u(59,Tu,1,0,"ng-template",5),t(),i(60,"doc-code-sample",3),u(61,Iu,1,0,"ng-template",5),t(),i(62,"doc-code-sample",3),u(63,Au,1,0,"ng-template",5),t()()),n&2){let l=H();m(3),o("templateCode",l.snippetStd),m(6),o("templateCode",l.snippetStd1),m(5),o("templateCode",l.snippetContent1),m(6),o("templateCode",l.snippetContent2),m(2),o("templateCode",l.snippetSection),m(6),o("templateCode",l.snippetLink),m(9),o("templateCode",l.snippetActive),m(9),o("templateCode",l.snippetSize),m(6),o("templateCode",l.snippetSize1),m(2),o("templateCode",l.snippetSize2),m(2),o("templateCode",l.snippetSize3),m(2),o("templateCode",l.snippetSize4),m(2),o("templateCode",l.snippetSize5),m(2),o("templateCode",l.snippetSize6)}}function Gu(n,s){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-breadcrumb"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiSize"),t(),i(20,"td"),e(21,"Set the breadcrumb size. Allowed values could be "),i(22,"span",7),e(23,"mini"),t(),e(24," | "),i(25,"span",7),e(26,"tiny"),t(),e(27," | "),i(28,"span",7),e(29,"small"),t(),e(30," | "),i(31,"span",7),e(32,"medium"),t(),e(33," | "),i(34,"span",7),e(35,"big"),t(),e(36," | "),i(37,"span",7),e(38,"huge"),t(),e(39," | "),i(40,"span",7),e(41,"massive"),t(),e(42," | "),i(43,"span",7),e(44,"null"),t()(),i(45,"td")(46,"div",8),e(47," string "),t()(),i(48,"td")(49,"div",9),e(50," null "),t()()()()(),r(51,"br"),i(52,"h2",2),e(53,"suiBreadcrumbDivider"),t(),i(54,"h4",4),e(55,"Properties"),t(),i(56,"table",6)(57,"thead")(58,"tr")(59,"th"),e(60,"Property"),t(),i(61,"th"),e(62,"Description"),t(),i(63,"th"),e(64,"Type"),t(),i(65,"th"),e(66,"Default"),t()()(),i(67,"tbody")(68,"tr")(69,"td"),e(70,"suiIcon"),t(),i(71,"td"),e(72," Determine the icon to be used as the divider "),t(),i(73,"td")(74,"div",8),e(75," string "),t()(),i(76,"td")(77,"div",9),e(78," '' "),t()()()()(),r(79,"br"),i(80,"h2",2),e(81,"suiBreadcrumbSection"),t(),i(82,"h4",4),e(83,"Properties"),t(),i(84,"table",6)(85,"thead")(86,"tr")(87,"th"),e(88,"Property"),t(),i(89,"th"),e(90,"Description"),t(),i(91,"th"),e(92,"Type"),t(),i(93,"th"),e(94,"Default"),t()()(),i(95,"tbody")(96,"tr")(97,"td"),e(98,"suiActive"),t(),i(99,"td"),e(100," Determine whether or not the breadcrumb section is active "),t(),i(101,"td")(102,"div",8),e(103," boolean "),t()(),i(104,"td")(105,"div",9),e(106," false "),t()()()()()())}var rr=(()=>{class n{constructor(l){this.snippetStd=kd,this.snippetStd1=Gd,this.snippetContent1=Bd,this.snippetContent2=Nd,this.snippetSection=Wd,this.snippetLink=Rd,this.snippetActive=Pd,this.snippetSize=zd,this.snippetSize1=Jd,this.snippetSize2=Ld,this.snippetSize3=Hd,this.snippetSize4=Vd,this.snippetSize5=qd,this.snippetSize6=Od,l.setTitle("Breadcrumb | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(V))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-breadcrumb"]],standalone:!1,decls:3,vars:2,consts:[["header","Breadcrumb","subHeader","A breadcrumb is used to show hierarchy between content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,d){a&1&&(i(0,"doc-page",0),u(1,ku,64,14,"div",1)(2,Gu,107,0,"div",1),t()),a&2&&(m(),o("docPageContent","definition"),m(),o("docPageContent","api"))},dependencies:[j,O,q,U,k,h,P,jd,Yd,Xd,$d,Kd,Qd,Zd,er,tr,ir,nr,lr,ar,dr],encapsulation:2})}}return n})();var Bu=[{path:"messages",component:Ad},{path:"breadcrumb",component:rr},{path:"grid",component:fn},{path:"form",component:Fi},{path:"menu",component:ql},{path:"table",component:Qa}],mr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[Ce.forChild(Bu),Ce]})}}return n})();var o2=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[Ee,Ve,Je,Ze,Ne,Pe,Oe,mr,Ud,qe,We,et,Ue,ze,Qe,Re,Be,je,Ke]})}}return n})();export{o2 as CollectionsModule};
