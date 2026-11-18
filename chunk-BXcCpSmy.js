import{_ as wi,b as xi$1,d as di$1,f as fi$1,g as ui$1,h as pi$1,i as Oi,m as hi$1,o as Ri,p as he,r as Ni,s as Te,t as Fn$1,u as ct$1,v as wt$1,y as xe}from"./chunk-EQIuFzLr.js";import{A as ze,D as wr,G as Ks,M as B,O as yi$1,P as z,T as vr,U as Is,X as ve,Y as Ws,_ as fi$2,h as bi$1,i as Dr,l as Oi$1,o as Kr,t as At$1,u as Ri$1,v as gi$1,w as vi$1,x as mi$1}from"./main-5L4GMCOS.js";import{a as K,c as bi$2,l as ci$1,o as U,r as Ii,t as Di,u as li$1}from"./chunk-fkCr07Hl.js";import{Bn as sl,Bt as dC,Ct as Yw,D as KD,En as ow,H as Pd,Kn as to,Ln as sV,Lt as bt$1,M as Kh,N as Kw,On as pC,Pn as rC,R as OI,Rn as sg,S as Ie,Sn as nw,Wn as tC,Xn as uo,Yn as uS,Yt as g,Zt as gg,_ as Gh,_r as zh,an as jh,b as HE,c as Cn$1,en as he$1,g as G$1,gr as zC,gt as XI,hr as yn,ht as XC,in as jd,lt as Vu,mn as mg,nn as iC,ot as VE,p as EC,rn as is,rt as Uh,s as Ce,st as Ve,un as ly,v as Gu,vt as Xs,wn as oC,xn as nt$1,yn as nC,yt as Y}from"./chunk-8go5I85o.js";var nt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <h4 sui-header
      suiDividing>Tell Us About Yourself</h4>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="rules-name">Name</label>
      <input id="rules-name"
             name="name"
             type="text"
             placeholder="Name">
    </div>
    <div suiFormField>
      <label for="rules-gender">Gender</label>
      <select id="rules-gender"
              name="gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  </div>
  <div suiFormField>
    <label for="rules-username">Username</label>
    <input id="rules-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="rules-password">Password</label>
    <input id="rules-password"
           name="password"
           type="password"
           placeholder="Password">
  </div>
  <div suiFormField>
    <label for="rules-skills">Skills</label>
    <select id="rules-skills"
            name="skills"
            multiple>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option value="javascript">Javascript</option>
      <option value="design">Graphic Design</option>
      <option value="plumbing">Plumbing</option>
      <option value="engineering">Mechanical Engineering</option>
      <option value="repair">Kitchen Repair</option>
    </select>
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="rules-terms"
             name="terms"
             type="checkbox">
      <label for="rules-terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var at=`state: 'success' | 'error' | null = null;
fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  skills: ['minCount[2]', 'empty'],
  terms: 'checked'
};
`;var lt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="longhand-name">Name</label>
    <input id="longhand-name"
           name="name"
           type="text"
           placeholder="Name">
  </div>
  <div suiFormField>
    <label for="longhand-username">Username</label>
    <input id="longhand-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="longhand-password">Password</label>
    <input id="longhand-password"
           name="password"
           type="password"
           placeholder="Password">
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="longhand-terms"
             name="terms"
             type="checkbox">
      <label for="longhand-terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var rt=`state: 'success' | 'error' | null = null;
fields = {
  name: {
    identifier: 'name',
    rules: [{ type: 'empty', prompt: 'Please enter your name' }]
  },
  username: {
    identifier: 'username',
    rules: [{ type: 'empty', prompt: 'Please enter a username' }]
  },
  password: {
    identifier: 'password',
    rules: [
      { type: 'empty', prompt: 'Please enter a password' },
      { type: 'minLength[6]', prompt: 'Your password must be at least {ruleValue} characters' }
    ]
  },
  terms: {
    identifier: 'terms',
    rules: [{ type: 'checked', prompt: 'You must agree to the terms and conditions' }]
  }
};
`;var ot=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="params-color">Color</label>
    <input id="params-color"
           name="color"
           type="text"
           placeholder="rgb(255, 255, 255)">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var st=`state: 'success' | 'error' | null = null;
fields = {
  color: {
    identifier: 'color',
    rules: [{
      type: 'regExp',
      value: /rgb\\((\\d{1,3}), (\\d{1,3}), (\\d{1,3})\\)/i,
      prompt: 'Please enter a colour like rgb(255, 255, 255)'
    }]
  }
};
`;var mt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="prompts-field1">Field 1</label>
    <input id="prompts-field1"
           name="field1"
           type="text"
           placeholder="Field 1">
  </div>
  <div suiFormField>
    <label for="prompts-field2">Field 2</label>
    <input id="prompts-field2"
           name="field2"
           type="text"
           placeholder="Field 2">
  </div>
  <div suiFormField>
    <label for="prompts-field3">Field 3</label>
    <input id="prompts-field3"
           name="field3"
           type="text"
           placeholder="Field 3">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var dt=`state: 'success' | 'error' | null = null;
fields = {
  field1: {
    rules: [{ type: 'empty' }]
  },
  field2: {
    rules: [{
      type: 'exactly[dog]',
      prompt: '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
    }]
  },
  field3: {
    rules: [{
      type: 'exactly[cat]',
      prompt: (value: unknown) => value === 'dog' ? 'I told you to put cat, not dog!' : 'That is not cat'
    }]
  }
};
`;var ut=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="match-special-name">Special Field</label>
    <input id="match-special-name"
           name="special-name"
           type="text"
           placeholder="Special Field">
  </div>
  <div suiFormField>
    <label for="match-server">Server Name</label>
    <input id="match-server"
           name="user[name]"
           data-validate="serverName"
           type="text"
           placeholder="Server Name">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var pt=`state: 'success' | 'error' | null = null;
fields = {
  // fields are matched by id, then name, then data-validate
  name: {
    identifier: 'special-name',
    rules: [{ type: 'empty' }]
  },
  serverName: 'empty'
};
`;var ct=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="inline-first-name">First Name</label>
      <input id="inline-first-name"
             name="first-name"
             type="text"
             placeholder="First Name">
    </div>
    <div suiFormField>
      <label for="inline-last-name">Last Name</label>
      <input id="inline-last-name"
             name="last-name"
             type="text"
             placeholder="Last Name">
    </div>
  </div>
  <div suiFormField>
    <label for="inline-username">Username</label>
    <input id="inline-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="inline-password">Password</label>
    <input id="inline-password"
           name="password"
           type="password"
           placeholder="Password">
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="inline-terms"
             name="terms"
             type="checkbox">
      <label for="inline-terms">I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var ft=`state: 'success' | 'error' | null = null;
fields = {
  'first-name': 'empty',
  'last-name': 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  terms: 'checked'
};
`;var ht=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <div class="ui checkbox">
      <input id="depends-isDoctor"
             name="isDoctor"
             type="checkbox">
      <label for="depends-isDoctor">Are you a doctor?</label>
    </div>
  </div>
  <div suiFormField>
    <label for="depends-yearsPracticed">How long have you been a medical professional</label>
    <input id="depends-yearsPracticed"
           name="yearsPracticed"
           type="text"
           placeholder="Years">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var vt=`state: 'success' | 'error' | null = null;
fields = {
  yearsPracticed: {
    identifier: 'yearsPracticed',
    depends: 'isDoctor',
    rules: [{ type: 'empty', prompt: 'Please enter the number of years you have been a doctor' }]
  }
};
`;var xt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <p>Your tickets are all ready to print. Where would you like to send a receipt?</p>
  <div suiFormField>
    <label for="optional-email">E-mail</label>
    <input id="optional-email"
           name="email"
           type="text"
           placeholder="joe@schmoe.com">
  </div>
  <div suiFormField>
    <label for="optional-cc-email">Additional E-mail</label>
    <input id="optional-cc-email"
           name="cc-email"
           type="text"
           placeholder="mom@schmoe.com">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var St=`state: 'success' | 'error' | null = null;
fields = {
  email: {
    identifier: 'email',
    rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }]
  },
  ccEmail: {
    identifier: 'cc-email',
    optional: true,
    rules: [{ type: 'email', prompt: 'Please enter a valid second e-mail' }]
  }
};
`;var yt=`<form sui-form
      suiFormValidation
      #validation="suiFormValidation"
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="prog-name">Name</label>
      <input id="prog-name"
             name="name"
             type="text"
             placeholder="Name">
    </div>
    <div suiFormField>
      <label for="prog-gender">Gender</label>
      <select id="prog-gender"
              name="gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  </div>
  <div suiFormField>
    <label for="prog-username">Username</label>
    <input id="prog-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="prog-colors">Favorite Colors</label>
    <select id="prog-colors"
            name="colors"
            multiple>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="grey">Grey</option>
    </select>
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="prog-terms"
             name="terms"
             type="checkbox">
      <label for="prog-terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <div sui-buttons
       suiSize="small">
    <button sui-button
            type="button"
            (click)="validation.validateForm()">
      Validate Form
    </button>
    <button sui-button
            type="button"
            (click)="output = validation.isValid('name') ? 'Name is valid' : 'Name is invalid'">
      Is Name Valid?
    </button>
    <button sui-button
            type="button"
            (click)="validation.setValues(sample)">
      Set Values
    </button>
    <button sui-button
            type="button"
            (click)="output = validation.getValues()">
      Get Values
    </button>
    <button sui-button
            type="button"
            (click)="validation.reset(); state = null">
      Reset
    </button>
    <button sui-button
            type="button"
            (click)="validation.clear(); state = null">
      Clear
    </button>
  </div>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
  @if (output) {
    <pre>{{ output | json }}</pre>
  }
</form>
`;var gt=`state: 'success' | 'error' | null = null;
output: unknown = null;
fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  terms: 'checked'
};
sample = {
  name: 'Jack',
  gender: 'male',
  username: 'jlukic',
  colors: ['red', 'grey'],
  terms: true
};
`;var Et=`<form sui-form
      suiFormValidation
      suiInline
      [formGroup]="profile"
      [suiFields]="fields"
      (suiOnSuccess)="submitted = profile.value">
  <div suiFormField>
    <label for="email">E-mail</label>
    <input id="email"
           formControlName="email"
           placeholder="joe@schmoe.com">
  </div>
  <div suiFormField>
    <label for="age">Age</label>
    <input id="age"
           formControlName="age"
           placeholder="18 to 120">
  </div>
  @if (profile.controls.email.errors?.['suiFormValidation']; as message) {
    <div sui-message
         suiState="warning">
      The e-mail control has the error: {{ message }}
    </div>
  }
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  @if (submitted) {
    <pre>{{ submitted | json }}</pre>
  }
</form>
`;var bt=`import { FormControl, FormGroup } from '@angular/forms';

submitted: unknown = null;
profile = new FormGroup({
  email: new FormControl(''),
  age: new FormControl('')
});
fields = {
  email: ['empty', 'email'],
  age: 'integer[18..120]'
};
`;var Ft=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="empty-empty">Empty</label>
    <input id="empty-empty"
           name="empty"
           type="text"
           placeholder="Empty">
  </div>
  <div suiFormField>
    <label for="empty-dropdown">Dropdown</label>
    <select id="empty-dropdown"
            name="dropdown">
      <option value="">Select</option>
      <option value="1">Choice 1</option>
      <option value="2">Choice 2</option>
    </select>
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="empty-checkbox"
             name="checkbox"
             type="checkbox">
      <label for="empty-checkbox">Checkbox</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Ct=`state: 'success' | 'error' | null = null;
fields = {
  empty: { rules: [{ type: 'empty', prompt: 'Please enter a value' }] },
  dropdown: { rules: [{ type: 'empty', prompt: 'Please select a dropdown value' }] },
  checkbox: { rules: [{ type: 'checked', prompt: 'Please check the checkbox' }] }
};
`;var _t=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="type-integer">Integer</label>
      <input id="type-integer"
             name="integer"
             type="text"
             placeholder="1 to 100">
    </div>
    <div suiFormField>
      <label for="type-email">E-mail</label>
      <input id="type-email"
             name="email"
             type="text"
             placeholder="E-mail">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="type-decimal">Decimal</label>
      <input id="type-decimal"
             name="decimal"
             type="text"
             placeholder="Decimal">
    </div>
    <div suiFormField>
      <label for="type-number">Number</label>
      <input id="type-number"
             name="number"
             type="text"
             placeholder="Number">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="type-url">URL</label>
      <input id="type-url"
             name="url"
             type="text"
             placeholder="URL">
    </div>
    <div suiFormField>
      <label for="type-regex">RegEx</label>
      <input id="type-regex"
             name="regex"
             type="text"
             placeholder="4-16 letter username">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var wt=`state: 'success' | 'error' | null = null;
fields = {
  integer: { rules: [{ type: 'integer[1..100]', prompt: 'Please enter an integer value' }] },
  decimal: { rules: [{ type: 'decimal', prompt: 'Please enter a valid decimal' }] },
  number: { rules: [{ type: 'number', prompt: 'Please enter a valid number' }] },
  email: { rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }] },
  url: { rules: [{ type: 'url', prompt: 'Please enter a url' }] },
  regex: { rules: [{ type: 'regExp[/^[a-z0-9_-]{4,16}$/]', prompt: 'Please enter a 4-16 letter username' }] }
};
`;var Ot=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="pay-card">Credit Card</label>
      <input id="pay-card"
             name="card"
             type="text"
             placeholder="4565340519181845">
    </div>
    <div suiFormField>
      <label for="pay-exact-card">Certain Type</label>
      <input id="pay-exact-card"
             name="exact-card"
             type="text"
             placeholder="Visa or American Express">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Vt=`state: 'success' | 'error' | null = null;
fields = {
  card: { rules: [{ type: 'creditCard', prompt: 'Please enter a valid credit card' }] },
  exactCard: {
    identifier: 'exact-card',
    rules: [{ type: 'creditCard[visa,amex]', prompt: 'Please enter a visa or amex card' }]
  }
};
`;var Tt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="m-match1">Match 1</label>
      <input id="m-match1"
             name="match1"
             type="text"
             placeholder="Match 1">
    </div>
    <div suiFormField>
      <label for="m-match2">Match 2</label>
      <input id="m-match2"
             name="match2"
             type="text"
             placeholder="Match 2">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="m-different1">Different 1</label>
      <input id="m-different1"
             name="different1"
             type="text"
             placeholder="Different 1">
    </div>
    <div suiFormField>
      <label for="m-different2">Different 2</label>
      <input id="m-different2"
             name="different2"
             type="text"
             placeholder="Different 2">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Pt=`state: 'success' | 'error' | null = null;
fields = {
  match: {
    identifier: 'match2',
    rules: [{ type: 'match[match1]', prompt: 'Please put the same value in both fields' }]
  },
  different: {
    identifier: 'different2',
    rules: [{ type: 'different[different1]', prompt: 'Please put different values for each field' }]
  }
};
`;var Dt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="len-minLength">minLength</label>
    <input id="len-minLength"
           name="minLength"
           type="text"
           placeholder="At least 10 characters">
  </div>
  <div suiFormField>
    <label for="len-exactLength">Exact Length</label>
    <input id="len-exactLength"
           name="exactLength"
           type="text"
           placeholder="Exactly 6 characters">
  </div>
  <div suiFormField>
    <label for="len-maxLength">maxLength</label>
    <input id="len-maxLength"
           name="maxLength"
           type="text"
           placeholder="At most 10 characters">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Rt=`state: 'success' | 'error' | null = null;
fields = {
  minLength: { rules: [{ type: 'minLength[10]', prompt: 'Please enter at least 10 characters' }] },
  exactLength: { rules: [{ type: 'exactLength[6]', prompt: 'Please enter exactly 6 characters' }] },
  maxLength: { rules: [{ type: 'maxLength[10]', prompt: 'Please enter at most 10 characters' }] }
};
`;var kt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-is">is</label>
      <input id="content-is"
             name="is"
             type="text"
             placeholder="is">
    </div>
    <div suiFormField>
      <label for="content-isExactly">isExactly</label>
      <input id="content-isExactly"
             name="isExactly"
             type="text"
             placeholder="isExactly">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-not">not</label>
      <input id="content-not"
             name="not"
             type="text"
             placeholder="not">
    </div>
    <div suiFormField>
      <label for="content-notExactly">notExactly</label>
      <input id="content-notExactly"
             name="notExactly"
             type="text"
             placeholder="notExactly">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-contains">contains</label>
      <input id="content-contains"
             name="contains"
             type="text"
             placeholder="contains">
    </div>
    <div suiFormField>
      <label for="content-containsExactly">containsExactly</label>
      <input id="content-containsExactly"
             name="containsExactly"
             type="text"
             placeholder="containsExactly">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-doesntContain">doesntContain</label>
      <input id="content-doesntContain"
             name="doesntContain"
             type="text"
             placeholder="doesntContain">
    </div>
    <div suiFormField>
      <label for="content-doesntContainExactly">doesntContainExactly</label>
      <input id="content-doesntContainExactly"
             name="doesntContainExactly"
             type="text"
             placeholder="doesntContainExactly">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var It=`state: 'success' | 'error' | null = null;
fields = {
  is: { rules: [{ type: 'is[dog]', prompt: 'Please enter exactly "dog"' }] },
  isExactly: { rules: [{ type: 'isExactly[dog]', prompt: 'Please enter exactly "dog"' }] },
  not: { rules: [{ type: 'not[dog]', prompt: 'Please enter a value, but not "dog"' }] },
  notExactly: { rules: [{ type: 'notExactly[dog]', prompt: 'Please enter a value, but not exactly "dog"' }] },
  contains: { rules: [{ type: 'contains[dog]', prompt: 'Please enter a value containing "dog"' }] },
  containsExactly: { rules: [{ type: 'containsExactly[dog]', prompt: 'Please enter a value containing exactly "dog"' }] },
  doesntContain: { rules: [{ type: 'doesntContain[dog]', prompt: 'Please enter a value not containing "dog"' }] },
  doesntContainExactly: { rules: [{ type: 'doesntContainExactly[dog]', prompt: 'Please enter a value not containing exactly "dog"' }] }
};
`;var Mt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="change"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="count-exactCount">Exact Count</label>
    <select id="count-exactCount"
            name="exactCount"
            multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div suiFormField>
    <label for="count-minCount">Minimum Count</label>
    <select id="count-minCount"
            name="minCount"
            multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div suiFormField>
    <label for="count-maxCount">Maximum Count</label>
    <select id="count-maxCount"
            name="maxCount"
            multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Nt=`state: 'success' | 'error' | null = null;
fields = {
  minCount: { rules: [{ type: 'minCount[2]', prompt: 'Please select at least 2 values' }] },
  maxCount: { rules: [{ type: 'maxCount[2]', prompt: 'Please select a max of 2 values' }] },
  exactCount: { rules: [{ type: 'exactCount[2]', prompt: 'Please select 2 values' }] }
};
`;function dn(n,u){if(n&1&&(is(0,`pre`),zC(1),nw(2,`json`),Vu()),n&2){let a=pC();KD(),gg(ow(2,1,a.output))}}function un(n,u){n&1&&(is(0,`div`,6),zC(1),Vu()),n&2&&(KD(),Gu(` The e-mail control has the error: `,u,` `))}function pn(n,u){if(n&1&&(is(0,`pre`),zC(1),nw(2,`json`),Vu()),n&2){let a=pC();KD(),gg(ow(2,1,a.submitted))}}var Lt=(()=>{class n{constructor(){this.state=null,this.fields={name:`empty`,gender:`empty`,username:`empty`,password:[`minLength[6]`,`empty`],skills:[`minCount[2]`,`empty`],terms:`checked`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-specifying-rules-example`]],standalone:!1,decls:57,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`sui-header`,``,`suiDividing`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`rules-name`],[`id`,`rules-name`,`name`,`name`,`type`,`text`,`placeholder`,`Name`],[`for`,`rules-gender`],[`id`,`rules-gender`,`name`,`gender`],[`value`,``],[`value`,`male`],[`value`,`female`],[`for`,`rules-username`],[`id`,`rules-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`rules-password`],[`id`,`rules-password`,`name`,`password`,`type`,`password`,`placeholder`,`Password`],[`for`,`rules-skills`],[`id`,`rules-skills`,`name`,`skills`,`multiple`,``],[`value`,`css`],[`value`,`html`],[`value`,`javascript`],[`value`,`design`],[`value`,`plumbing`],[`value`,`engineering`],[`value`,`repair`],[1,`ui`,`checkbox`],[`id`,`rules-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`rules-terms`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`h4`,1),zC(2,`Tell Us About Yourself`),Vu(),is(3,`div`,2)(4,`div`,3)(5,`label`,4),zC(6,`Name`),Vu(),zh(7,`input`,5),Vu(),is(8,`div`,3)(9,`label`,6),zC(10,`Gender`),Vu(),is(11,`select`,7)(12,`option`,8),zC(13,`Gender`),Vu(),is(14,`option`,9),zC(15,`Male`),Vu(),is(16,`option`,10),zC(17,`Female`),Vu()()()(),is(18,`div`,3)(19,`label`,11),zC(20,`Username`),Vu(),zh(21,`input`,12),Vu(),is(22,`div`,3)(23,`label`,13),zC(24,`Password`),Vu(),zh(25,`input`,14),Vu(),is(26,`div`,3)(27,`label`,15),zC(28,`Skills`),Vu(),is(29,`select`,16)(30,`option`,17),zC(31,`CSS`),Vu(),is(32,`option`,18),zC(33,`HTML`),Vu(),is(34,`option`,19),zC(35,`Javascript`),Vu(),is(36,`option`,20),zC(37,`Graphic Design`),Vu(),is(38,`option`,21),zC(39,`Plumbing`),Vu(),is(40,`option`,22),zC(41,`Mechanical Engineering`),Vu(),is(42,`option`,23),zC(43,`Kitchen Repair`),Vu()()(),is(44,`div`,3)(45,`div`,24),zh(46,`input`,25),is(47,`label`,26),zC(48,`I agree to the terms and conditions`),Vu()()(),is(49,`button`,27),zC(50,` Submit `),Vu(),is(51,`div`,28)(52,`div`,29),zC(53,`Form Submitted`),Vu(),is(54,`p`),zC(55,`Every field passed validation.`),Vu()(),zh(56,`div`,30),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,fi$1,pi$1,di$1,xe,Ni,wi,Oi,Ri,Ii,Ws],encapsulation:2,changeDetection:1})}}return n})();var Bt=(()=>{class n{constructor(){this.state=null,this.fields={name:{identifier:`name`,rules:[{type:`empty`,prompt:`Please enter your name`}]},username:{identifier:`username`,rules:[{type:`empty`,prompt:`Please enter a username`}]},password:{identifier:`password`,rules:[{type:`empty`,prompt:`Please enter a password`},{type:`minLength[6]`,prompt:`Your password must be at least {ruleValue} characters`}]},terms:{identifier:`terms`,rules:[{type:`checked`,prompt:`You must agree to the terms and conditions`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-longhand-example`]],standalone:!1,decls:26,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`longhand-name`],[`id`,`longhand-name`,`name`,`name`,`type`,`text`,`placeholder`,`Name`],[`for`,`longhand-username`],[`id`,`longhand-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`longhand-password`],[`id`,`longhand-password`,`name`,`password`,`type`,`password`,`placeholder`,`Password`],[1,`ui`,`checkbox`],[`id`,`longhand-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`longhand-terms`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`Name`),Vu(),zh(4,`input`,3),Vu(),is(5,`div`,1)(6,`label`,4),zC(7,`Username`),Vu(),zh(8,`input`,5),Vu(),is(9,`div`,1)(10,`label`,6),zC(11,`Password`),Vu(),zh(12,`input`,7),Vu(),is(13,`div`,1)(14,`div`,8),zh(15,`input`,9),is(16,`label`,10),zC(17,`I agree to the terms and conditions`),Vu()()(),is(18,`button`,11),zC(19,` Submit `),Vu(),is(20,`div`,12)(21,`div`,13),zC(22,`Form Submitted`),Vu(),is(23,`p`),zC(24,`Every field passed validation.`),Vu()(),zh(25,`div`,14),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Gt=(()=>{class n{constructor(){this.state=null,this.fields={color:{identifier:`color`,rules:[{type:`regExp`,value:/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/i,prompt:`Please enter a colour like rgb(255, 255, 255)`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-parameters-example`]],standalone:!1,decls:13,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`params-color`],[`id`,`params-color`,`name`,`color`,`type`,`text`,`placeholder`,`rgb(255, 255, 255)`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`Color`),Vu(),zh(4,`input`,3),Vu(),is(5,`button`,4),zC(6,` Submit `),Vu(),is(7,`div`,5)(8,`div`,6),zC(9,`Form Submitted`),Vu(),is(10,`p`),zC(11,`Every field passed validation.`),Vu()(),zh(12,`div`,7),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var At=(()=>{class n{constructor(){this.state=null,this.fields={field1:{rules:[{type:`empty`}]},field2:{rules:[{type:`exactly[dog]`,prompt:`{name} is set to "{value}" that is totally wrong. It should be {ruleValue}`}]},field3:{rules:[{type:`exactly[cat]`,prompt:a=>a===`dog`?`I told you to put cat, not dog!`:`That is not cat`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-prompts-example`]],standalone:!1,decls:21,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`prompts-field1`],[`id`,`prompts-field1`,`name`,`field1`,`type`,`text`,`placeholder`,`Field 1`],[`for`,`prompts-field2`],[`id`,`prompts-field2`,`name`,`field2`,`type`,`text`,`placeholder`,`Field 2`],[`for`,`prompts-field3`],[`id`,`prompts-field3`,`name`,`field3`,`type`,`text`,`placeholder`,`Field 3`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`Field 1`),Vu(),zh(4,`input`,3),Vu(),is(5,`div`,1)(6,`label`,4),zC(7,`Field 2`),Vu(),zh(8,`input`,5),Vu(),is(9,`div`,1)(10,`label`,6),zC(11,`Field 3`),Vu(),zh(12,`input`,7),Vu(),is(13,`button`,8),zC(14,` Submit `),Vu(),is(15,`div`,9)(16,`div`,10),zC(17,`Form Submitted`),Vu(),is(18,`p`),zC(19,`Every field passed validation.`),Vu()(),zh(20,`div`,11),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Ut=(()=>{class n{constructor(){this.state=null,this.fields={name:{identifier:`special-name`,rules:[{type:`empty`}]},serverName:`empty`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-matching-fields-example`]],standalone:!1,decls:17,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`match-special-name`],[`id`,`match-special-name`,`name`,`special-name`,`type`,`text`,`placeholder`,`Special Field`],[`for`,`match-server`],[`id`,`match-server`,`name`,`user[name]`,`data-validate`,`serverName`,`type`,`text`,`placeholder`,`Server Name`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`Special Field`),Vu(),zh(4,`input`,3),Vu(),is(5,`div`,1)(6,`label`,4),zC(7,`Server Name`),Vu(),zh(8,`input`,5),Vu(),is(9,`button`,6),zC(10,` Submit `),Vu(),is(11,`div`,7)(12,`div`,8),zC(13,`Form Submitted`),Vu(),is(14,`p`),zC(15,`Every field passed validation.`),Vu()(),zh(16,`div`,9),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Wt=(()=>{class n{constructor(){this.state=null,this.fields={"first-name":`empty`,"last-name":`empty`,username:`empty`,password:[`minLength[6]`,`empty`],terms:`checked`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-inline-example`]],standalone:!1,decls:30,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`inline-first-name`],[`id`,`inline-first-name`,`name`,`first-name`,`type`,`text`,`placeholder`,`First Name`],[`for`,`inline-last-name`],[`id`,`inline-last-name`,`name`,`last-name`,`type`,`text`,`placeholder`,`Last Name`],[`for`,`inline-username`],[`id`,`inline-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`inline-password`],[`id`,`inline-password`,`name`,`password`,`type`,`password`,`placeholder`,`Password`],[1,`ui`,`checkbox`],[`id`,`inline-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`inline-terms`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`div`,2)(3,`label`,3),zC(4,`First Name`),Vu(),zh(5,`input`,4),Vu(),is(6,`div`,2)(7,`label`,5),zC(8,`Last Name`),Vu(),zh(9,`input`,6),Vu()(),is(10,`div`,2)(11,`label`,7),zC(12,`Username`),Vu(),zh(13,`input`,8),Vu(),is(14,`div`,2)(15,`label`,9),zC(16,`Password`),Vu(),zh(17,`input`,10),Vu(),is(18,`div`,2)(19,`div`,11),zh(20,`input`,12),is(21,`label`,13),zC(22,`I agree to the Terms and Conditions`),Vu()()(),is(23,`button`,14),zC(24,` Submit `),Vu(),is(25,`div`,15)(26,`div`,16),zC(27,`Form Submitted`),Vu(),is(28,`p`),zC(29,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Oi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var jt=(()=>{class n{constructor(){this.state=null,this.fields={yearsPracticed:{identifier:`yearsPracticed`,depends:`isDoctor`,rules:[{type:`empty`,prompt:`Please enter the number of years you have been a doctor`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-dependent-example`]],standalone:!1,decls:18,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[1,`ui`,`checkbox`],[`id`,`depends-isDoctor`,`name`,`isDoctor`,`type`,`checkbox`],[`for`,`depends-isDoctor`],[`for`,`depends-yearsPracticed`],[`id`,`depends-yearsPracticed`,`name`,`yearsPracticed`,`type`,`text`,`placeholder`,`Years`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`div`,2),zh(3,`input`,3),is(4,`label`,4),zC(5,`Are you a doctor?`),Vu()()(),is(6,`div`,1)(7,`label`,5),zC(8,`How long have you been a medical professional`),Vu(),zh(9,`input`,6),Vu(),is(10,`button`,7),zC(11,` Submit `),Vu(),is(12,`div`,8)(13,`div`,9),zC(14,`Form Submitted`),Vu(),is(15,`p`),zC(16,`Every field passed validation.`),Vu()(),zh(17,`div`,10),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var zt=(()=>{class n{constructor(){this.state=null,this.fields={email:{identifier:`email`,rules:[{type:`email`,prompt:`Please enter a valid e-mail`}]},ccEmail:{identifier:`cc-email`,optional:!0,rules:[{type:`email`,prompt:`Please enter a valid second e-mail`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-optional-example`]],standalone:!1,decls:19,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`optional-email`],[`id`,`optional-email`,`name`,`email`,`type`,`text`,`placeholder`,`joe@schmoe.com`],[`for`,`optional-cc-email`],[`id`,`optional-cc-email`,`name`,`cc-email`,`type`,`text`,`placeholder`,`mom@schmoe.com`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`p`),zC(2,`Your tickets are all ready to print. Where would you like to send a receipt?`),Vu(),is(3,`div`,1)(4,`label`,2),zC(5,`E-mail`),Vu(),zh(6,`input`,3),Vu(),is(7,`div`,1)(8,`label`,4),zC(9,`Additional E-mail`),Vu(),zh(10,`input`,5),Vu(),is(11,`button`,6),zC(12,` Submit `),Vu(),is(13,`div`,7)(14,`div`,8),zC(15,`Form Submitted`),Vu(),is(16,`p`),zC(17,`Every field passed validation.`),Vu()(),zh(18,`div`,9),Vu()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var qt=(()=>{class n{constructor(){this.state=null,this.output=null,this.fields={name:`empty`,gender:`empty`,username:`empty`,terms:`checked`},this.sample={name:`Jack`,gender:`male`,username:`jlukic`,colors:[`red`,`grey`],terms:!0}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-programmatic-example`]],standalone:!1,decls:58,vars:3,consts:[[`validation`,`suiFormValidation`],[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`prog-name`],[`id`,`prog-name`,`name`,`name`,`type`,`text`,`placeholder`,`Name`],[`for`,`prog-gender`],[`id`,`prog-gender`,`name`,`gender`],[`value`,``],[`value`,`male`],[`value`,`female`],[`for`,`prog-username`],[`id`,`prog-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`prog-colors`],[`id`,`prog-colors`,`name`,`colors`,`multiple`,``],[`value`,`red`],[`value`,`blue`],[`value`,`green`],[`value`,`grey`],[1,`ui`,`checkbox`],[`id`,`prog-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`prog-terms`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,`type`,`button`,3,`click`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){if(l&1){let s=dC();is(0,`form`,1,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(2,`div`,2)(3,`div`,3)(4,`label`,4),zC(5,`Name`),Vu(),zh(6,`input`,5),Vu(),is(7,`div`,3)(8,`label`,6),zC(9,`Gender`),Vu(),is(10,`select`,7)(11,`option`,8),zC(12,`Gender`),Vu(),is(13,`option`,9),zC(14,`Male`),Vu(),is(15,`option`,10),zC(16,`Female`),Vu()()()(),is(17,`div`,3)(18,`label`,11),zC(19,`Username`),Vu(),zh(20,`input`,12),Vu(),is(21,`div`,3)(22,`label`,13),zC(23,`Favorite Colors`),Vu(),is(24,`select`,14)(25,`option`,15),zC(26,`Red`),Vu(),is(27,`option`,16),zC(28,`Blue`),Vu(),is(29,`option`,17),zC(30,`Green`),Vu(),is(31,`option`,18),zC(32,`Grey`),Vu()()(),is(33,`div`,3)(34,`div`,19),zh(35,`input`,20),is(36,`label`,21),zC(37,`I agree to the terms and conditions`),Vu()()(),is(38,`div`,22)(39,`button`,23),Kh(`click`,function(){Pd(s);let F=EC(1);return jd(F.validateForm())}),zC(40,` Validate Form `),Vu(),is(41,`button`,23),Kh(`click`,function(){Pd(s);let F=EC(1);return jd(r.output=F.isValid(`name`)?`Name is valid`:`Name is invalid`)}),zC(42,` Is Name Valid? `),Vu(),is(43,`button`,23),Kh(`click`,function(){Pd(s);let F=EC(1);return jd(F.setValues(r.sample))}),zC(44,` Set Values `),Vu(),is(45,`button`,23),Kh(`click`,function(){Pd(s);let F=EC(1);return jd(r.output=F.getValues())}),zC(46,` Get Values `),Vu(),is(47,`button`,23),Kh(`click`,function(){return Pd(s),EC(1).reset(),jd(r.state=null)}),zC(48,` Reset `),Vu(),is(49,`button`,23),Kh(`click`,function(){return Pd(s),EC(1).clear(),jd(r.state=null)}),zC(50,` Clear `),Vu()(),is(51,`div`,24)(52,`div`,25),zC(53,`Form Submitted`),Vu(),is(54,`p`),zC(55,`Every field passed validation.`),Vu()(),zh(56,`div`,26),XI(57,dn,3,3,`pre`),Vu()}l&2&&(Gh(`suiState`,r.state)(`suiFields`,r.fields),KD(57),tC(r.output?57:-1))},dependencies:[hi$1,fi$1,pi$1,di$1,xe,Ni,wi,Oi,Ri,Ii,Di,Kw],encapsulation:2,changeDetection:1})}}return n})();var $t=(()=>{class n{constructor(){this.submitted=null,this.profile=new he({email:new wt$1(``),age:new wt$1(``)}),this.fields={email:[`empty`,`email`],age:`integer[18..120]`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-reactive-example`]],standalone:!1,decls:13,vars:4,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,3,`suiOnSuccess`,`formGroup`,`suiFields`],[`suiFormField`,``],[`for`,`email`],[`id`,`email`,`formControlName`,`email`,`placeholder`,`joe@schmoe.com`],[`for`,`age`],[`id`,`age`,`formControlName`,`age`,`placeholder`,`18 to 120`],[`sui-message`,``,`suiState`,`warning`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`]],template:function(l,r){if(l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.submitted=r.profile.value}),is(1,`div`,1)(2,`label`,2),zC(3,`E-mail`),Vu(),is(4,`input`,3),VE(),Vu()(),is(5,`div`,1)(6,`label`,4),zC(7,`Age`),Vu(),is(8,`input`,5),VE(),Vu()(),XI(9,un,2,1,`div`,6),is(10,`button`,7),zC(11,` Submit `),Vu(),XI(12,pn,3,3,`pre`),Vu()),l&2){let s;Gh(`formGroup`,r.profile)(`suiFields`,r.fields),KD(4),HE(),KD(4),HE(),KD(),tC((s=r.profile.controls.email.errors?.suiFormValidation)?9:-1,s),KD(3),tC(r.submitted?12:-1)}},dependencies:[hi$1,ct$1,ui$1,di$1,Te,Fn$1,Ni,wi,Ri,li$1,Ii,Kw],encapsulation:2,changeDetection:1})}}return n})();var Ht=(()=>{class n{constructor(){this.state=null,this.fields={empty:{rules:[{type:`empty`,prompt:`Please enter a value`}]},dropdown:{rules:[{type:`empty`,prompt:`Please select a dropdown value`}]},checkbox:{rules:[{type:`checked`,prompt:`Please check the checkbox`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-empty-example`]],standalone:!1,decls:27,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`empty-empty`],[`id`,`empty-empty`,`name`,`empty`,`type`,`text`,`placeholder`,`Empty`],[`for`,`empty-dropdown`],[`id`,`empty-dropdown`,`name`,`dropdown`],[`value`,``],[`value`,`1`],[`value`,`2`],[1,`ui`,`checkbox`],[`id`,`empty-checkbox`,`name`,`checkbox`,`type`,`checkbox`],[`for`,`empty-checkbox`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`Empty`),Vu(),zh(4,`input`,3),Vu(),is(5,`div`,1)(6,`label`,4),zC(7,`Dropdown`),Vu(),is(8,`select`,5)(9,`option`,6),zC(10,`Select`),Vu(),is(11,`option`,7),zC(12,`Choice 1`),Vu(),is(13,`option`,8),zC(14,`Choice 2`),Vu()()(),is(15,`div`,1)(16,`div`,9),zh(17,`input`,10),is(18,`label`,11),zC(19,`Checkbox`),Vu()()(),is(20,`button`,12),zC(21,` Submit `),Vu(),is(22,`div`,13)(23,`div`,14),zC(24,`Form Submitted`),Vu(),is(25,`p`),zC(26,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,fi$1,pi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Yt=(()=>{class n{constructor(){this.state=null,this.fields={integer:{rules:[{type:`integer[1..100]`,prompt:`Please enter an integer value`}]},decimal:{rules:[{type:`decimal`,prompt:`Please enter a valid decimal`}]},number:{rules:[{type:`number`,prompt:`Please enter a valid number`}]},email:{rules:[{type:`email`,prompt:`Please enter a valid e-mail`}]},url:{rules:[{type:`url`,prompt:`Please enter a url`}]},regex:{rules:[{type:`regExp[/^[a-z0-9_-]{4,16}$/]`,prompt:`Please enter a 4-16 letter username`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-content-type-example`]],standalone:!1,decls:35,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`type-integer`],[`id`,`type-integer`,`name`,`integer`,`type`,`text`,`placeholder`,`1 to 100`],[`for`,`type-email`],[`id`,`type-email`,`name`,`email`,`type`,`text`,`placeholder`,`E-mail`],[`for`,`type-decimal`],[`id`,`type-decimal`,`name`,`decimal`,`type`,`text`,`placeholder`,`Decimal`],[`for`,`type-number`],[`id`,`type-number`,`name`,`number`,`type`,`text`,`placeholder`,`Number`],[`for`,`type-url`],[`id`,`type-url`,`name`,`url`,`type`,`text`,`placeholder`,`URL`],[`for`,`type-regex`],[`id`,`type-regex`,`name`,`regex`,`type`,`text`,`placeholder`,`4-16 letter username`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`div`,2)(3,`label`,3),zC(4,`Integer`),Vu(),zh(5,`input`,4),Vu(),is(6,`div`,2)(7,`label`,5),zC(8,`E-mail`),Vu(),zh(9,`input`,6),Vu()(),is(10,`div`,1)(11,`div`,2)(12,`label`,7),zC(13,`Decimal`),Vu(),zh(14,`input`,8),Vu(),is(15,`div`,2)(16,`label`,9),zC(17,`Number`),Vu(),zh(18,`input`,10),Vu()(),is(19,`div`,1)(20,`div`,2)(21,`label`,11),zC(22,`URL`),Vu(),zh(23,`input`,12),Vu(),is(24,`div`,2)(25,`label`,13),zC(26,`RegEx`),Vu(),zh(27,`input`,14),Vu()(),is(28,`button`,15),zC(29,` Submit `),Vu(),is(30,`div`,16)(31,`div`,17),zC(32,`Form Submitted`),Vu(),is(33,`p`),zC(34,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Oi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Zt=(()=>{class n{constructor(){this.state=null,this.fields={card:{rules:[{type:`creditCard`,prompt:`Please enter a valid credit card`}]},exactCard:{identifier:`exact-card`,rules:[{type:`creditCard[visa,amex]`,prompt:`Please enter a visa or amex card`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-payment-example`]],standalone:!1,decls:17,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`pay-card`],[`id`,`pay-card`,`name`,`card`,`type`,`text`,`placeholder`,`4565340519181845`],[`for`,`pay-exact-card`],[`id`,`pay-exact-card`,`name`,`exact-card`,`type`,`text`,`placeholder`,`Visa or American Express`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`div`,2)(3,`label`,3),zC(4,`Credit Card`),Vu(),zh(5,`input`,4),Vu(),is(6,`div`,2)(7,`label`,5),zC(8,`Certain Type`),Vu(),zh(9,`input`,6),Vu()(),is(10,`button`,7),zC(11,` Submit `),Vu(),is(12,`div`,8)(13,`div`,9),zC(14,`Form Submitted`),Vu(),is(15,`p`),zC(16,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Oi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Kt=(()=>{class n{constructor(){this.state=null,this.fields={match:{identifier:`match2`,rules:[{type:`match[match1]`,prompt:`Please put the same value in both fields`}]},different:{identifier:`different2`,rules:[{type:`different[different1]`,prompt:`Please put different values for each field`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-matching-example`]],standalone:!1,decls:26,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`m-match1`],[`id`,`m-match1`,`name`,`match1`,`type`,`text`,`placeholder`,`Match 1`],[`for`,`m-match2`],[`id`,`m-match2`,`name`,`match2`,`type`,`text`,`placeholder`,`Match 2`],[`for`,`m-different1`],[`id`,`m-different1`,`name`,`different1`,`type`,`text`,`placeholder`,`Different 1`],[`for`,`m-different2`],[`id`,`m-different2`,`name`,`different2`,`type`,`text`,`placeholder`,`Different 2`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`div`,2)(3,`label`,3),zC(4,`Match 1`),Vu(),zh(5,`input`,4),Vu(),is(6,`div`,2)(7,`label`,5),zC(8,`Match 2`),Vu(),zh(9,`input`,6),Vu()(),is(10,`div`,1)(11,`div`,2)(12,`label`,7),zC(13,`Different 1`),Vu(),zh(14,`input`,8),Vu(),is(15,`div`,2)(16,`label`,9),zC(17,`Different 2`),Vu(),zh(18,`input`,10),Vu()(),is(19,`button`,11),zC(20,` Submit `),Vu(),is(21,`div`,12)(22,`div`,13),zC(23,`Form Submitted`),Vu(),is(24,`p`),zC(25,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Oi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Jt=(()=>{class n{constructor(){this.state=null,this.fields={minLength:{rules:[{type:`minLength[10]`,prompt:`Please enter at least 10 characters`}]},exactLength:{rules:[{type:`exactLength[6]`,prompt:`Please enter exactly 6 characters`}]},maxLength:{rules:[{type:`maxLength[10]`,prompt:`Please enter at most 10 characters`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-length-example`]],standalone:!1,decls:20,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`len-minLength`],[`id`,`len-minLength`,`name`,`minLength`,`type`,`text`,`placeholder`,`At least 10 characters`],[`for`,`len-exactLength`],[`id`,`len-exactLength`,`name`,`exactLength`,`type`,`text`,`placeholder`,`Exactly 6 characters`],[`for`,`len-maxLength`],[`id`,`len-maxLength`,`name`,`maxLength`,`type`,`text`,`placeholder`,`At most 10 characters`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`minLength`),Vu(),zh(4,`input`,3),Vu(),is(5,`div`,1)(6,`label`,4),zC(7,`Exact Length`),Vu(),zh(8,`input`,5),Vu(),is(9,`div`,1)(10,`label`,6),zC(11,`maxLength`),Vu(),zh(12,`input`,7),Vu(),is(13,`button`,8),zC(14,` Submit `),Vu(),is(15,`div`,9)(16,`div`,10),zC(17,`Form Submitted`),Vu(),is(18,`p`),zC(19,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Xt=(()=>{class n{constructor(){this.state=null,this.fields={is:{rules:[{type:`is[dog]`,prompt:`Please enter exactly "dog"`}]},isExactly:{rules:[{type:`isExactly[dog]`,prompt:`Please enter exactly "dog"`}]},not:{rules:[{type:`not[dog]`,prompt:`Please enter a value, but not "dog"`}]},notExactly:{rules:[{type:`notExactly[dog]`,prompt:`Please enter a value, but not exactly "dog"`}]},contains:{rules:[{type:`contains[dog]`,prompt:`Please enter a value containing "dog"`}]},containsExactly:{rules:[{type:`containsExactly[dog]`,prompt:`Please enter a value containing exactly "dog"`}]},doesntContain:{rules:[{type:`doesntContain[dog]`,prompt:`Please enter a value not containing "dog"`}]},doesntContainExactly:{rules:[{type:`doesntContainExactly[dog]`,prompt:`Please enter a value not containing exactly "dog"`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-specified-content-example`]],standalone:!1,decls:44,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`content-is`],[`id`,`content-is`,`name`,`is`,`type`,`text`,`placeholder`,`is`],[`for`,`content-isExactly`],[`id`,`content-isExactly`,`name`,`isExactly`,`type`,`text`,`placeholder`,`isExactly`],[`for`,`content-not`],[`id`,`content-not`,`name`,`not`,`type`,`text`,`placeholder`,`not`],[`for`,`content-notExactly`],[`id`,`content-notExactly`,`name`,`notExactly`,`type`,`text`,`placeholder`,`notExactly`],[`for`,`content-contains`],[`id`,`content-contains`,`name`,`contains`,`type`,`text`,`placeholder`,`contains`],[`for`,`content-containsExactly`],[`id`,`content-containsExactly`,`name`,`containsExactly`,`type`,`text`,`placeholder`,`containsExactly`],[`for`,`content-doesntContain`],[`id`,`content-doesntContain`,`name`,`doesntContain`,`type`,`text`,`placeholder`,`doesntContain`],[`for`,`content-doesntContainExactly`],[`id`,`content-doesntContainExactly`,`name`,`doesntContainExactly`,`type`,`text`,`placeholder`,`doesntContainExactly`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`div`,2)(3,`label`,3),zC(4,`is`),Vu(),zh(5,`input`,4),Vu(),is(6,`div`,2)(7,`label`,5),zC(8,`isExactly`),Vu(),zh(9,`input`,6),Vu()(),is(10,`div`,1)(11,`div`,2)(12,`label`,7),zC(13,`not`),Vu(),zh(14,`input`,8),Vu(),is(15,`div`,2)(16,`label`,9),zC(17,`notExactly`),Vu(),zh(18,`input`,10),Vu()(),is(19,`div`,1)(20,`div`,2)(21,`label`,11),zC(22,`contains`),Vu(),zh(23,`input`,12),Vu(),is(24,`div`,2)(25,`label`,13),zC(26,`containsExactly`),Vu(),zh(27,`input`,14),Vu()(),is(28,`div`,1)(29,`div`,2)(30,`label`,15),zC(31,`doesntContain`),Vu(),zh(32,`input`,16),Vu(),is(33,`div`,2)(34,`label`,17),zC(35,`doesntContainExactly`),Vu(),zh(36,`input`,18),Vu()(),is(37,`button`,19),zC(38,` Submit `),Vu(),is(39,`div`,20)(40,`div`,21),zC(41,`Form Submitted`),Vu(),is(42,`p`),zC(43,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,di$1,xe,Ni,wi,Oi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();var Qt=(()=>{class n{constructor(){this.state=null,this.fields={minCount:{rules:[{type:`minCount[2]`,prompt:`Please select at least 2 values`}]},maxCount:{rules:[{type:`maxCount[2]`,prompt:`Please select a max of 2 values`}]},exactCount:{rules:[{type:`exactCount[2]`,prompt:`Please select 2 values`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation-rule-selection-count-example`]],standalone:!1,decls:50,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`change`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`count-exactCount`],[`id`,`count-exactCount`,`name`,`exactCount`,`multiple`,``],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`value`,`4`],[`value`,`5`],[`for`,`count-minCount`],[`id`,`count-minCount`,`name`,`minCount`,`multiple`,``],[`for`,`count-maxCount`],[`id`,`count-maxCount`,`name`,`maxCount`,`multiple`,``],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(is(0,`form`,0),Kh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),is(1,`div`,1)(2,`label`,2),zC(3,`Exact Count`),Vu(),is(4,`select`,3)(5,`option`,4),zC(6,`1`),Vu(),is(7,`option`,5),zC(8,`2`),Vu(),is(9,`option`,6),zC(10,`3`),Vu(),is(11,`option`,7),zC(12,`4`),Vu(),is(13,`option`,8),zC(14,`5`),Vu()()(),is(15,`div`,1)(16,`label`,9),zC(17,`Minimum Count`),Vu(),is(18,`select`,10)(19,`option`,4),zC(20,`1`),Vu(),is(21,`option`,5),zC(22,`2`),Vu(),is(23,`option`,6),zC(24,`3`),Vu(),is(25,`option`,7),zC(26,`4`),Vu(),is(27,`option`,8),zC(28,`5`),Vu()()(),is(29,`div`,1)(30,`label`,11),zC(31,`Maximum Count`),Vu(),is(32,`select`,12)(33,`option`,4),zC(34,`1`),Vu(),is(35,`option`,5),zC(36,`2`),Vu(),is(37,`option`,6),zC(38,`3`),Vu(),is(39,`option`,7),zC(40,`4`),Vu(),is(41,`option`,8),zC(42,`5`),Vu()()(),is(43,`button`,13),zC(44,` Submit `),Vu(),is(45,`div`,14)(46,`div`,15),zC(47,`Form Submitted`),Vu(),is(48,`p`),zC(49,`Every field passed validation.`),Vu()()()),l&2&&Gh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[hi$1,fi$1,pi$1,di$1,xe,Ni,wi,Ri,Ii],encapsulation:2,changeDetection:1})}}return n})();function gn(n,u){n&1&&zh(0,`doc-form-validation-specifying-rules-example`)}function En(n,u){n&1&&zh(0,`doc-form-validation-longhand-example`)}function bn(n,u){n&1&&zh(0,`doc-form-validation-parameters-example`)}function Fn(n,u){n&1&&zh(0,`doc-form-validation-prompts-example`)}function Cn(n,u){n&1&&zh(0,`doc-form-validation-matching-fields-example`)}function _n(n,u){n&1&&zh(0,`doc-form-validation-inline-example`)}function wn(n,u){n&1&&zh(0,`doc-form-validation-dependent-example`)}function On(n,u){n&1&&zh(0,`doc-form-validation-optional-example`)}function Vn(n,u){n&1&&zh(0,`doc-form-validation-programmatic-example`)}function Tn(n,u){n&1&&zh(0,`doc-form-validation-reactive-example`)}function Pn(n,u){n&1&&zh(0,`doc-form-validation-rule-empty-example`)}function Dn(n,u){n&1&&zh(0,`doc-form-validation-rule-content-type-example`)}function Rn(n,u){n&1&&zh(0,`doc-form-validation-rule-payment-example`)}function kn(n,u){n&1&&zh(0,`doc-form-validation-rule-matching-example`)}function In(n,u){n&1&&zh(0,`doc-form-validation-rule-length-example`)}function Mn(n,u){n&1&&zh(0,`doc-form-validation-rule-specified-content-example`)}function Nn(n,u){n&1&&zh(0,`doc-form-validation-rule-selection-count-example`)}function Ln(n,u){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Usage`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Specifying Validation Rules`),Vu(),is(6,`p`),zC(7,`Pass validation rules for each field to `),is(8,`code`),zC(9,`suiFields`),Vu(),zC(10,`. Fields are matched by their `),is(11,`code`),zC(12,`id`),Vu(),zC(13,`, `),is(14,`code`),zC(15,`name`),Vu(),zC(16,` or `),is(17,`code`),zC(18,`data-validate`),Vu(),zC(19,` attribute, in that order`),Vu(),is(20,`div`,5),zC(21,` Rules can be written in shorthand, as a rule name or a list of rule names. `),Vu(),jh(22,gn,1,0,`ng-template`,6),Vu(),is(23,`doc-code-sample`,3)(24,`h3`,4),zC(25,`Longhand Rules`),Vu(),is(26,`p`),zC(27,`Rules can also be written in longhand, which lets you set the identifier and a custom prompt for each rule`),Vu(),jh(28,En,1,0,`ng-template`,6),Vu(),is(29,`doc-code-sample`,3)(30,`h3`,4),zC(31,`Passing Parameters to Rules`),Vu(),is(32,`p`),zC(33,`Rules usually take a parameter in brackets, like `),is(34,`code`),zC(35,`minLength[2]`),Vu(),zC(36,`. If brackets are awkward, pass the parameter as `),is(37,`code`),zC(38,`value`),Vu(),zC(39,` instead`),Vu(),jh(40,bn,1,0,`ng-template`,6),Vu(),is(41,`doc-code-sample`,3)(42,`h3`,4),zC(43,`Customizing Prompts`),Vu(),is(44,`p`),zC(45,`Set `),is(46,`code`),zC(47,`prompt`),Vu(),zC(48,` on a rule to replace the default message. Prompts can use the templates `),is(49,`code`),zC(50,`{name}`),Vu(),zC(51,`, `),is(52,`code`),zC(53,`{identifier}`),Vu(),zC(54,`, `),is(55,`code`),zC(56,`{value}`),Vu(),zC(57,` and `),is(58,`code`),zC(59,`{ruleValue}`),Vu(),zC(60,`, or be a function of the field value`),Vu(),jh(61,Fn,1,0,`ng-template`,6),Vu(),is(62,`doc-code-sample`,3)(63,`h3`,4),zC(64,`Matching Fields`),Vu(),is(65,`p`),zC(66,`Use `),is(67,`code`),zC(68,`identifier`),Vu(),zC(69,` when a field's key should not be used to find it, or match fields with a `),is(70,`code`),zC(71,`data-validate`),Vu(),zC(72,` attribute when the server needs a specific `),is(73,`code`),zC(74,`name`),Vu()(),jh(75,Cn,1,0,`ng-template`,6),Vu(),is(76,`doc-code-sample`,3)(77,`h3`,4),zC(78,`Validating on Blur and Other Events`),Vu(),is(79,`p`),zC(80,`Set `),is(81,`code`),zC(82,`suiInline`),Vu(),zC(83,` to show errors in a label next to each field, and `),is(84,`code`),zC(85,`suiOn`),Vu(),zC(86,` to validate on `),is(87,`code`),zC(88,`blur`),Vu(),zC(89,` or `),is(90,`code`),zC(91,`change`),Vu(),zC(92,` instead of submit`),Vu(),jh(93,_n,1,0,`ng-template`,6),Vu(),is(94,`doc-code-sample`,3)(95,`h3`,4),zC(96,`Dependent Fields`),Vu(),is(97,`p`),zC(98,`Add `),is(99,`code`),zC(100,`depends`),Vu(),zC(101,` with the identifier of another field to only validate a field when that other field has a value`),Vu(),jh(102,wn,1,0,`ng-template`,6),Vu(),is(103,`doc-code-sample`,3)(104,`h3`,4),zC(105,`Optional Fields`),Vu(),is(106,`p`),zC(107,`Add `),is(108,`code`),zC(109,`optional: true`),Vu(),zC(110,` to only validate a field when it is not empty`),Vu(),jh(111,On,1,0,`ng-template`,6),Vu(),is(112,`doc-code-sample`,3)(113,`h3`,4),zC(114,`Validating Programmatically`),Vu(),is(115,`p`),zC(116,`Export the directive with `),is(117,`code`),zC(118,`#ref="suiFormValidation"`),Vu(),zC(119,` to validate, read and write values, reset or clear the form`),Vu(),is(120,`div`,5)(121,`code`),zC(122,`reset()`),Vu(),zC(123,` restores the values the fields had when the form was first validated. `),Vu(),jh(124,Vn,1,0,`ng-template`,6),Vu(),is(125,`doc-code-sample`,3)(126,`h3`,4),zC(127,`Reactive Forms`),Vu(),is(128,`p`)(129,`code`),zC(130,`suiFormValidation`),Vu(),zC(131,` works with `),is(132,`code`),zC(133,`[formGroup]`),Vu(),zC(134,` and `),is(135,`code`),zC(136,`ngModel`),Vu(),zC(137,`. Rule failures are added to the matching control's errors under the `),is(138,`code`),zC(139,`suiFormValidation`),Vu(),zC(140,` key, next to any Angular validator errors`),Vu(),is(141,`div`,5),zC(142,` With reactive forms, the input's `),is(143,`code`),zC(144,`id`),Vu(),zC(145,` or `),is(146,`code`),zC(147,`name`),Vu(),zC(148,` must match the field identifier so errors can be shown next to it. `),Vu(),jh(149,Tn,1,0,`ng-template`,6),Vu(),zh(150,`br`),is(151,`h2`,2),zC(152,`Rules`),Vu(),is(153,`doc-code-sample`,3)(154,`h3`,4),zC(155,`Empty`),Vu(),is(156,`p`),zC(157,`Check that a field has a value, or that a checkbox is checked`),Vu(),jh(158,Pn,1,0,`ng-template`,6),Vu(),is(159,`doc-code-sample`,3)(160,`h3`,4),zC(161,`Content Type`),Vu(),is(162,`p`),zC(163,`Inputs can match common content types, or your own regular expression`),Vu(),jh(164,Dn,1,0,`ng-template`,6),Vu(),is(165,`doc-code-sample`,3)(166,`h3`,4),zC(167,`Payment`),Vu(),is(168,`p`),zC(169,`Inputs can validate credit card numbers, optionally limited to some card types`),Vu(),is(170,`div`,5),zC(171,` Supported types are `),is(172,`code`),zC(173,`visa`),Vu(),zC(174,`, `),is(175,`code`),zC(176,`amex`),Vu(),zC(177,`, `),is(178,`code`),zC(179,`mastercard`),Vu(),zC(180,`, `),is(181,`code`),zC(182,`discover`),Vu(),zC(183,`, `),is(184,`code`),zC(185,`unionpay`),Vu(),zC(186,`, `),is(187,`code`),zC(188,`jcb`),Vu(),zC(189,`, `),is(190,`code`),zC(191,`dinersClub`),Vu(),zC(192,`, `),is(193,`code`),zC(194,`maestro`),Vu(),zC(195,`, `),is(196,`code`),zC(197,`laser`),Vu(),zC(198,` and `),is(199,`code`),zC(200,`visaElectron`),Vu(),zC(201,`. `),Vu(),jh(202,Rn,1,0,`ng-template`,6),Vu(),is(203,`doc-code-sample`,3)(204,`h3`,4),zC(205,`Matching Fields`),Vu(),is(206,`p`),zC(207,`Fields can be required to match, or differ from, other fields`),Vu(),jh(208,kn,1,0,`ng-template`,6),Vu(),is(209,`doc-code-sample`,3)(210,`h3`,4),zC(211,`Length`),Vu(),is(212,`p`),zC(213,`Inputs can match against the length of their content`),Vu(),jh(214,In,1,0,`ng-template`,6),Vu(),is(215,`doc-code-sample`,3)(216,`h3`,4),zC(217,`Specified Content`),Vu(),is(218,`p`),zC(219,`Rules can specify content that should or should not appear in an input`),Vu(),jh(220,Mn,1,0,`ng-template`,6),Vu(),is(221,`doc-code-sample`,3)(222,`h3`,4),zC(223,`Selection Count`),Vu(),is(224,`p`),zC(225,`Multiple selects can specify how many options should be chosen`),Vu(),jh(226,Nn,1,0,`ng-template`,6),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetSpecifyingRules)(`componentCode`,a.snippetSpecifyingRulesTs),KD(20),Gh(`templateCode`,a.snippetLonghand)(`componentCode`,a.snippetLonghandTs),KD(6),Gh(`templateCode`,a.snippetParameters)(`componentCode`,a.snippetParametersTs),KD(12),Gh(`templateCode`,a.snippetPrompts)(`componentCode`,a.snippetPromptsTs),KD(21),Gh(`templateCode`,a.snippetMatchingFields)(`componentCode`,a.snippetMatchingFieldsTs),KD(14),Gh(`templateCode`,a.snippetInline)(`componentCode`,a.snippetInlineTs),KD(18),Gh(`templateCode`,a.snippetDependent)(`componentCode`,a.snippetDependentTs),KD(9),Gh(`templateCode`,a.snippetOptional)(`componentCode`,a.snippetOptionalTs),KD(9),Gh(`templateCode`,a.snippetProgrammatic)(`componentCode`,a.snippetProgrammaticTs),KD(13),Gh(`templateCode`,a.snippetReactive)(`componentCode`,a.snippetReactiveTs),KD(28),Gh(`templateCode`,a.snippetRuleEmpty)(`componentCode`,a.snippetRuleEmptyTs),KD(6),Gh(`templateCode`,a.snippetRuleContentType)(`componentCode`,a.snippetRuleContentTypeTs),KD(6),Gh(`templateCode`,a.snippetRulePayment)(`componentCode`,a.snippetRulePaymentTs),KD(38),Gh(`templateCode`,a.snippetRuleMatching)(`componentCode`,a.snippetRuleMatchingTs),KD(6),Gh(`templateCode`,a.snippetRuleLength)(`componentCode`,a.snippetRuleLengthTs),KD(6),Gh(`templateCode`,a.snippetRuleSpecifiedContent)(`componentCode`,a.snippetRuleSpecifiedContentTs),KD(6),Gh(`templateCode`,a.snippetRuleSelectionCount)(`componentCode`,a.snippetRuleSelectionCountTs)}}function Bn(n,u){n&1&&(is(0,`div`)(1,`div`,5)(2,`code`),zC(3,`suiFormValidation`),Vu(),zC(4,` is part of `),is(5,`code`),zC(6,`SuiFormModule`),Vu(),zC(7,` from `),is(8,`code`),zC(9,`ngx-semantic/collections/form`),Vu(),zC(10,`. Use it on a `),is(11,`code`),zC(12,`<form>`),Vu(),zC(13,` together with `),is(14,`code`),zC(15,`sui-form`),Vu(),zC(16,`. `),Vu(),is(17,`h2`,2),zC(18,`suiFormValidation`),Vu(),is(19,`h4`,4),zC(20,`Properties`),Vu(),is(21,`table`,7)(22,`thead`)(23,`tr`)(24,`th`),zC(25,`Property`),Vu(),is(26,`th`),zC(27,`Description`),Vu(),is(28,`th`),zC(29,`Type`),Vu(),is(30,`th`),zC(31,`Default`),Vu()()(),is(32,`tbody`)(33,`tr`)(34,`td`),zC(35,` suiFields `),Vu(),is(36,`td`),zC(37,` Validation rules keyed by field. Each value is a rule, a list of rules, or a longhand field definition `),Vu(),is(38,`td`)(39,`div`,8),zC(40,` SuiFormValidationFieldsInput `),Vu()(),is(41,`td`)(42,`div`,9),zC(43,` null `),Vu()()(),is(44,`tr`)(45,`td`),zC(46,` suiOn `),Vu(),is(47,`td`),zC(48,` When fields are validated `),Vu(),is(49,`td`)(50,`div`,8),zC(51,` 'submit' | 'blur' | 'change' `),Vu()(),is(52,`td`)(53,`div`,9),zC(54,` 'submit' `),Vu()()(),is(55,`tr`)(56,`td`),zC(57,` suiInline `),Vu(),is(58,`td`),zC(59,` Show each error in a label next to its field `),Vu(),is(60,`td`)(61,`div`,8),zC(62,` boolean `),Vu()(),is(63,`td`)(64,`div`,9),zC(65,` false `),Vu()()(),is(66,`tr`)(67,`td`),zC(68,` suiRevalidate `),Vu(),is(69,`td`),zC(70,` Revalidate fields with errors as their value changes `),Vu(),is(71,`td`)(72,`div`,8),zC(73,` boolean `),Vu()(),is(74,`td`)(75,`div`,9),zC(76,` true `),Vu()()(),is(77,`tr`)(78,`td`),zC(79,` suiDelay `),Vu(),is(80,`td`),zC(81,` Milliseconds to wait after typing before validating with `),is(82,`code`),zC(83,`change`),Vu(),zC(84,` or revalidation. `),is(85,`code`),zC(86,`true`),Vu(),zC(87,` uses 300ms `),Vu(),is(88,`td`)(89,`div`,8),zC(90,` number | boolean `),Vu()(),is(91,`td`)(92,`div`,9),zC(93,` true `),Vu()()(),is(94,`tr`)(95,`td`),zC(96,` suiKeyboardShortcuts `),Vu(),is(97,`td`),zC(98,` Blur the focused field when `),is(99,`code`),zC(100,`Escape`),Vu(),zC(101,` is pressed `),Vu(),is(102,`td`)(103,`div`,8),zC(104,` boolean `),Vu()(),is(105,`td`)(106,`div`,9),zC(107,` true `),Vu()()(),is(108,`tr`)(109,`td`),zC(110,` suiMarkControlsTouchedOnInvalid `),Vu(),is(111,`td`),zC(112,` With `),is(113,`code`),zC(114,`NgForm`),Vu(),zC(115,` or `),is(116,`code`),zC(117,`[formGroup]`),Vu(),zC(118,`, mark every control as touched after a failed submit `),Vu(),is(119,`td`)(120,`div`,8),zC(121,` boolean `),Vu()(),is(122,`td`)(123,`div`,9),zC(124,` true `),Vu()()()()(),is(125,`h4`,4),zC(126,`Events`),Vu(),is(127,`table`,7)(128,`thead`)(129,`tr`)(130,`th`),zC(131,`Event`),Vu(),is(132,`th`),zC(133,`Description`),Vu(),is(134,`th`),zC(135,`Type`),Vu()()(),is(136,`tbody`)(137,`tr`)(138,`td`),zC(139,` suiOnSuccess `),Vu(),is(140,`td`),zC(141,` Emitted when the form is submitted or validated and every field is valid `),Vu(),is(142,`td`)(143,`div`,8),zC(144,` EventEmitter&lt;Event&gt; `),Vu()()(),is(145,`tr`)(146,`td`),zC(147,` suiOnFailure `),Vu(),is(148,`td`),zC(149,` Emitted when validation fails, with the error messages and the identifiers of the invalid fields `),Vu(),is(150,`td`)(151,`div`,8),zC(152,` EventEmitter&lt;{errors: string[]; fields: string[]}&gt; `),Vu()()()()(),is(153,`h4`,4),zC(154,`Methods`),Vu(),is(155,`table`,7)(156,`thead`)(157,`tr`)(158,`th`),zC(159,`Method`),Vu(),is(160,`th`),zC(161,`Description`),Vu()()(),is(162,`tbody`)(163,`tr`)(164,`td`),zC(165,` validateForm() `),Vu(),is(166,`td`),zC(167,` Validates the whole form, shows errors and emits `),is(168,`code`),zC(169,`suiOnSuccess`),Vu(),zC(170,` or `),is(171,`code`),zC(172,`suiOnFailure`),Vu(),zC(173,`. Returns whether the form is valid `),Vu()(),is(174,`tr`)(175,`td`),zC(176,` validateField(identifier) `),Vu(),is(177,`td`),zC(178,` Validates one field and shows its error. Returns whether it is valid `),Vu()(),is(179,`tr`)(180,`td`),zC(181,` isValid(identifier?) `),Vu(),is(182,`td`),zC(183,` Returns whether the form, or one field, passes its rules without updating the UI `),Vu()(),is(184,`tr`)(185,`td`),zC(186,` getFieldElement(identifier) `),Vu(),is(187,`td`),zC(188,` Returns the element matching an id, name or `),is(189,`code`),zC(190,`data-validate`),Vu(),zC(191,` value `),Vu()(),is(192,`tr`)(193,`td`),zC(194,` getValue(identifier) `),Vu(),is(195,`td`),zC(196,` Returns the value of a field `),Vu()(),is(197,`tr`)(198,`td`),zC(199,` getValues(identifiers?) `),Vu(),is(200,`td`),zC(201,` Returns the values of the given fields, or of every validated field `),Vu()(),is(202,`tr`)(203,`td`),zC(204,` setValue(identifier, value) `),Vu(),is(205,`td`),zC(206,` Sets the value of a field `),Vu()(),is(207,`tr`)(208,`td`),zC(209,` setValues(values) `),Vu(),is(210,`td`),zC(211,` Sets several field values from an object `),Vu()(),is(212,`tr`)(213,`td`),zC(214,` reset() `),Vu(),is(215,`td`),zC(216,` Restores every field to the value it had when the form was first validated `),Vu()(),is(217,`tr`)(218,`td`),zC(219,` clear() `),Vu(),is(220,`td`),zC(221,` Clears every field in the form `),Vu()(),is(222,`tr`)(223,`td`),zC(224,` getAngularForm() `),Vu(),is(225,`td`),zC(226,` Returns the `),is(227,`code`),zC(228,`FormGroup`),Vu(),zC(229,` of a `),is(230,`code`),zC(231,`[formGroup]`),Vu(),zC(232,` or `),is(233,`code`),zC(234,`NgForm`),Vu(),zC(235,` on the form, if there is one `),Vu()()()(),is(236,`h4`,4),zC(237,`Field Definition`),Vu(),is(238,`table`,7)(239,`thead`)(240,`tr`)(241,`th`),zC(242,`Property`),Vu(),is(243,`th`),zC(244,`Description`),Vu(),is(245,`th`),zC(246,`Type`),Vu()()(),is(247,`tbody`)(248,`tr`)(249,`td`),zC(250,` identifier `),Vu(),is(251,`td`),zC(252,` The id, name or `),is(253,`code`),zC(254,`data-validate`),Vu(),zC(255,` value of the field. Defaults to the key in `),is(256,`code`),zC(257,`suiFields`),Vu()(),is(258,`td`)(259,`div`,8),zC(260,` string `),Vu()()(),is(261,`tr`)(262,`td`),zC(263,` rules `),Vu(),is(264,`td`),zC(265,` The rules to check, as rule names or `),is(266,`code`),zC(267,`{ type, prompt, value }`),Vu(),zC(268,` objects `),Vu(),is(269,`td`)(270,`div`,8),zC(271,` SuiFormValidationRuleSpec[] | string | string[] `),Vu()()(),is(272,`tr`)(273,`td`),zC(274,` optional `),Vu(),is(275,`td`),zC(276,` Only validate the field when it is not empty `),Vu(),is(277,`td`)(278,`div`,8),zC(279,` boolean `),Vu()()(),is(280,`tr`)(281,`td`),zC(282,` depends `),Vu(),is(283,`td`),zC(284,` Only validate the field when this other field has a value `),Vu(),is(285,`td`)(286,`div`,8),zC(287,` string `),Vu()()()()(),is(288,`h4`,4),zC(289,`Rules`),Vu(),is(290,`table`,7)(291,`thead`)(292,`tr`)(293,`th`),zC(294,`Rule`),Vu(),is(295,`th`),zC(296,`Description`),Vu()()(),is(297,`tbody`)(298,`tr`)(299,`td`),zC(300,` empty `),Vu(),is(301,`td`),zC(302,` A field is not empty `),Vu()(),is(303,`tr`)(304,`td`),zC(305,` checked `),Vu(),is(306,`td`),zC(307,` A checkbox field is checked `),Vu()(),is(308,`tr`)(309,`td`),zC(310,` email `),Vu(),is(311,`td`),zC(312,` A field is a valid e-mail address `),Vu()(),is(313,`tr`)(314,`td`),zC(315,` url `),Vu(),is(316,`td`),zC(317,` A field is a url `),Vu()(),is(318,`tr`)(319,`td`),zC(320,` integer `),Vu(),is(321,`td`),zC(322,` A field is an integer, or in a range: `),is(323,`code`),zC(324,`integer[1..10]`),Vu()()(),is(325,`tr`)(326,`td`),zC(327,` decimal `),Vu(),is(328,`td`),zC(329,` A field is a decimal number `),Vu()(),is(330,`tr`)(331,`td`),zC(332,` number `),Vu(),is(333,`td`),zC(334,` A field is any number, decimal or not `),Vu()(),is(335,`tr`)(336,`td`),zC(337,` regExp[expression] `),Vu(),is(338,`td`),zC(339,` A field matches a regular expression: `),is(340,`code`),zC(341,`regExp[/^[a-z0-9_-]{3,16}$/]`),Vu()()(),is(342,`tr`)(343,`td`),zC(344,` creditCard `),Vu(),is(345,`td`),zC(346,` A field is a valid credit card, optionally of some types: `),is(347,`code`),zC(348,`creditCard[visa,mastercard]`),Vu()()(),is(349,`tr`)(350,`td`),zC(351,` contains / containsExactly `),Vu(),is(352,`td`),zC(353,` A field contains text, case insensitive or sensitive: `),is(354,`code`),zC(355,`contains[foo]`),Vu()()(),is(356,`tr`)(357,`td`),zC(358,` doesntContain / doesntContainExactly `),Vu(),is(359,`td`),zC(360,` A field does not contain text: `),is(361,`code`),zC(362,`doesntContain[foo]`),Vu()()(),is(363,`tr`)(364,`td`),zC(365,` is / isExactly `),Vu(),is(366,`td`),zC(367,` A field is a value: `),is(368,`code`),zC(369,`is[foo]`),Vu()()(),is(370,`tr`)(371,`td`),zC(372,` not / notExactly `),Vu(),is(373,`td`),zC(374,` A field is not a value: `),is(375,`code`),zC(376,`not[foo]`),Vu()()(),is(377,`tr`)(378,`td`),zC(379,` minLength / exactLength / maxLength `),Vu(),is(380,`td`),zC(381,` A field's length: `),is(382,`code`),zC(383,`minLength[5]`),Vu()()(),is(384,`tr`)(385,`td`),zC(386,` match / different `),Vu(),is(387,`td`),zC(388,` A field matches, or differs from, another field: `),is(389,`code`),zC(390,`match[password]`),Vu()()(),is(391,`tr`)(392,`td`),zC(393,` minCount / exactCount / maxCount `),Vu(),is(394,`td`),zC(395,` A multiple select has a number of selections: `),is(396,`code`),zC(397,`minCount[2]`),Vu()()()()()())}var ti=(()=>{class n{constructor(a){this.snippetSpecifyingRules=nt,this.snippetSpecifyingRulesTs=at,this.snippetLonghand=lt,this.snippetLonghandTs=rt,this.snippetParameters=ot,this.snippetParametersTs=st,this.snippetPrompts=mt,this.snippetPromptsTs=dt,this.snippetMatchingFields=ut,this.snippetMatchingFieldsTs=pt,this.snippetInline=ct,this.snippetInlineTs=ft,this.snippetDependent=ht,this.snippetDependentTs=vt,this.snippetOptional=xt,this.snippetOptionalTs=St,this.snippetProgrammatic=yt,this.snippetProgrammaticTs=gt,this.snippetReactive=Et,this.snippetReactiveTs=bt,this.snippetRuleEmpty=Ft,this.snippetRuleEmptyTs=Ct,this.snippetRuleContentType=_t,this.snippetRuleContentTypeTs=wt,this.snippetRulePayment=Ot,this.snippetRulePaymentTs=Vt,this.snippetRuleMatching=Tt,this.snippetRuleMatchingTs=Pt,this.snippetRuleLength=Dt,this.snippetRuleLengthTs=Rt,this.snippetRuleSpecifiedContent=kt,this.snippetRuleSpecifiedContentTs=It,this.snippetRuleSelectionCount=Mt,this.snippetRuleSelectionCountTs=Nt,a.setTitle(`Form Validation | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-validation`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Form Validation`,`subHeader`,`A form validation behavior checks data against a set of criteria before passing it along to the server`,`semanticUrl`,`https://semantic-ui.com/behaviors/form.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,r){l&1&&(is(0,`doc-page`,0),jh(1,Ln,227,34,`div`,1)(2,Bn,398,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$1,li$1,U,Ws,fi$2,Lt,Bt,Gt,At,Ut,Wt,jt,zt,qt,$t,Ht,Yt,Zt,Kt,Jt,Xt,Qt],encapsulation:2,changeDetection:1})}}return n})();var ii=`<div sui-grid>
  <div suiGridColumn
       suiWidth="ten">
    <div class="visibility-scroller"
         #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <div sui-segment
           suiVisibility
           [suiContext]="scroller"
           [suiOnce]="false"
           (suiOnUpdate)="calculations = $event">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
      </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridColumn
       suiWidth="six">
    <table sui-table
           suiCelled
           suiCompact="very compact">
      <thead>
      <tr>
        <th>Calculation</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        @for (key of keys; track key) {
          <tr>
            <td>{{ key }}</td>
            <td>{{ calculations?.[key] }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
</div>
`;var ni=`import { SuiVisibilityCalculations } from 'ngx-semantic/modules/visibility';

calculations: SuiVisibilityCalculations | null = null;
keys: (keyof SuiVisibilityCalculations)[] = [
  'pixelsPassed', 'percentagePassed', 'fits', 'width', 'height', 'direction',
  'onScreen', 'offScreen', 'passing', 'topVisible', 'bottomVisible', 'topPassed', 'bottomPassed'
];
`;var ai=`<div sui-buttons
     suiSize="small">
  <button sui-button
          (click)="events = []; tracker.refresh()">
    Clear
  </button>
  <button sui-button
          suiToggle
          [suiActive]="once"
          (click)="once = !once">
    Once
  </button>
  <button sui-button
          suiToggle
          [suiActive]="continuous"
          (click)="continuous = !continuous">
    Continuous
  </button>
</div>
<div sui-grid>
  <div suiGridColumn
       suiWidth="ten">
    <div class="visibility-scroller"
         #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <div sui-segment
           suiVisibility
           #tracker="suiVisibility"
           [suiContext]="scroller"
           [suiOnce]="once"
           [suiContinuous]="continuous"
           (suiOnTopVisible)="log('Top visible')"
           (suiOnTopPassed)="log('Top passed')"
           (suiOnBottomVisible)="log('Bottom visible')"
           (suiOnBottomPassed)="log('Bottom passed')"
           (suiOnTopVisibleReverse)="log('Top not visible')"
           (suiOnBottomPassedReverse)="log('Bottom not passed')">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
      </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridColumn
       suiWidth="six">
    <div sui-segment>
      <h4 sui-header>Event Log</h4>
      @for (event of events; track $index) {
        <div>{{ event }}</div>
      } @empty {
        <em>Scroll the content to log events</em>
      }
    </div>
  </div>
</div>
`;var li=`once = true;
continuous = false;
events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 10);
}
`;var ri=`<div sui-grid>
  <div suiGridColumn
       suiWidth="ten">
    <div class="visibility-scroller"
         #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <div sui-segment
           suiVisibility
           [suiContext]="scroller"
           [suiPassed]="['25%', '50%', '75%', '100%']"
           (suiOnPassed)="log($event.amount + ' passed')">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
      </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridColumn
       suiWidth="six">
    <div sui-segment>
      <h4 sui-header>Event Log</h4>
      @for (event of events; track $index) {
        <div>{{ event }}</div>
      } @empty {
        <em>Scroll the content to log events</em>
      }
    </div>
  </div>
</div>
`;var oi=`events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 10);
}
`;var si=`<div class="visibility-scroller"
     #scroller>
  <div sui-segment
       suiVisibility
       [suiContext]="scroller"
       [suiOnce]="false"
       suiObserveChanges
       (suiOnBottomVisible)="loadMore()">
    @for (item of items; track $index) {
      <doc-wireframe [type]="item"></doc-wireframe>
    }
    @if (loading) {
      <div sui-message
           suiState="info">
        Adding more content...
      </div>
    }
    @if (loads >= maxLoads) {
      <div sui-message>
        That's everything.
      </div>
    }
  </div>
</div>
`;var mi=`items: string[] = ['paragraph', 'short-paragraph', 'paragraph', 'short-paragraph'];
loading = false;
loads = 0;
maxLoads = 5;

loadMore(): void {
  if (this.loading || this.loads >= this.maxLoads) {
    return;
  }
  this.loading = true;
  // simulate a request for more content
  setTimeout(() => {
    this.items = [...this.items, 'paragraph', 'short-paragraph', 'paragraph'];
    this.loads++;
    this.loading = false;
  }, 800);
}
`;var di=`<div class="visibility-scroller"
     #scroller>
  @for (person of people; track person) {
    <h4 sui-header>
      <img sui-image
           suiSize="tiny"
           suiRounded
           suiVisibility
           suiType="image"
           [suiContext]="scroller"
           src="assets/images/wireframes/image.png"
           [attr.data-src]="'assets/images/' + person + '.jpg'"
           (suiOnLoad)="loaded = loaded + 1">
      {{ person | titlecase }}
    </h4>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  }
</div>
<p>Images loaded: {{ loaded }} / {{ people.length }}</p>
`;var ui=`people = ['elliot', 'helen', 'jenny', 'joe', 'justen', 'laura', 'matt', 'stevie'];
loaded = 0;
`;var pi=`<div class="visibility-scroller"
     #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
  <div sui-segment
       suiVisibility
       [suiContext]="scroller"
       [suiOnce]="false"
       suiContinuous
       (suiOnPassing)="shade = $event.percentagePassed"
       (suiOnTopPassedReverse)="shade = 0"
       [style.background-color]="'rgba(0, 0, 0, ' + shade + ')'">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var ci=`<div sui-menu
     class="overlay"
     suiVisibility
     suiType="fixed"
     [suiOffset]="15"
     [suiZIndex]="10"
     (suiOnFixed)="fixed = true"
     (suiOnUnfixed)="fixed = false">
  <div suiMenuItem>Menu</div>
  <a suiMenuItem>Option 1</a>
  <a suiMenuItem>Option 2</a>
  <a suiMenuItem>Option 3</a>
</div>
<doc-wireframe type="paragraph"></doc-wireframe>
<doc-wireframe type="short-paragraph"></doc-wireframe>
<doc-wireframe type="paragraph"></doc-wireframe>
`;function Jn(n){let u=n.offset||0,a=n.element.top,l=n.element.bottom,r=n.element.height;n.includeMargin&&(a-=n.marginTop,l+=n.marginBottom,r+=n.marginTop+n.marginBottom);let s=n.screen.top+u,p=n.screen.top+n.screen.height+u,F=p>=a,ie=s>=a,ve=p>=l,A=s>=l,Oe=F&&!A,Ci=ie&&!A,Ve=Math.max(0,s-a),_i=r>0?Ve/r:0,wi=n.scrollTop<n.lastScrollTop?`up`:`down`;return{topVisible:F,topPassed:ie,bottomVisible:ve,bottomPassed:A,passing:Ci,onScreen:Oe,offScreen:!Oe,fits:r<n.screen.height,width:n.element.width,height:r,pixelsPassed:Ve,percentagePassed:_i,direction:wi}}function Xn(n){return n?Array.isArray(n)?n:Object.keys(n):[]}function Qn(n,u){let a=n.trim();return a.endsWith(`%`)?parseFloat(a)/100*u:parseFloat(a)}function fi(n,u,a,l,r){return n?r?!0:l?!a:!u:!1}function ea(n,u,a,l,r,s){return n||!(a||u)?!1:s?!0:r?!l:u}var ta=[`onScreen`,`offScreen`,`topVisible`,`topPassed`,`bottomVisible`,`bottomPassed`,`passing`];var ia={topVisible:`topVisibleReverse`,topPassed:`topPassedReverse`,bottomVisible:`bottomVisibleReverse`,bottomPassed:`bottomPassedReverse`,passing:`passingReverse`};var G=(()=>{class n{constructor(){this.document=g(Y),this.el=g(Ie),this.renderer=g(yn),this.zone=g(G$1),this.suiOnce=!0,this.suiContinuous=!1,this.suiContext=`window`,this.suiScrollContext=null,this.suiOffset=0,this.suiIncludeMargin=!1,this.suiInitialCheck=!0,this.suiObserveChanges=!1,this.suiThrottle=!1,this.suiType=!1,this.suiPassed=null,this.suiZIndex=1,this.suiOnOnScreen=new nt$1,this.suiOnOffScreen=new nt$1,this.suiOnTopVisible=new nt$1,this.suiOnTopPassed=new nt$1,this.suiOnBottomVisible=new nt$1,this.suiOnBottomPassed=new nt$1,this.suiOnPassing=new nt$1,this.suiOnTopVisibleReverse=new nt$1,this.suiOnTopPassedReverse=new nt$1,this.suiOnBottomVisibleReverse=new nt$1,this.suiOnBottomPassedReverse=new nt$1,this.suiOnPassingReverse=new nt$1,this.suiOnUpdate=new nt$1,this.suiOnPassed=new nt$1,this.suiOnRefresh=new nt$1,this.suiOnFixed=new nt$1,this.suiOnUnfixed=new nt$1,this.suiOnLoad=new nt$1,this.lastCalculations=null,this.destroy$=new he$1,this.occurred={},this.previous={},this.scrollEl=window,this.lastScrollTop=0,this.disabled=!1,this.mutationObserver=null,this.refreshTimer=null,this.throttleTimer=null,this.rafId=null,this.imageLoaded=!1,this.isFixed=!1,this.placeholder=null,this.emitters={onScreen:this.suiOnOnScreen,offScreen:this.suiOnOffScreen,topVisible:this.suiOnTopVisible,topPassed:this.suiOnTopPassed,bottomVisible:this.suiOnBottomVisible,bottomPassed:this.suiOnBottomPassed,passing:this.suiOnPassing,topVisibleReverse:this.suiOnTopVisibleReverse,topPassedReverse:this.suiOnTopPassedReverse,bottomVisibleReverse:this.suiOnBottomVisibleReverse,bottomPassedReverse:this.suiOnBottomPassedReverse,passingReverse:this.suiOnPassingReverse}}ngOnInit(){this.bindListeners()}ngAfterViewInit(){this.suiObserveChanges&&typeof MutationObserver<`u`&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0,attributes:!0})),this.suiInitialCheck&&queueMicrotask(()=>this.check())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.throttleTimer&&clearTimeout(this.throttleTimer),this.rafId!=null&&cancelAnimationFrame(this.rafId),this.removePlaceholder()}refresh(){Object.keys(this.occurred).forEach(a=>{delete this.occurred[a]}),Object.keys(this.previous).forEach(a=>{delete this.previous[a]}),this.suiOnRefresh.emit(),this.check()}disable(){this.disabled=!0}enable(){this.disabled=!1,this.check()}check(){if(this.disabled)return;this.scrollEl=this.resolveScrollElement();let a=this.readCalculations();this.lastCalculations=a,this.suiOnUpdate.emit(a),this.emitConditions(a),this.emitPassed(a),this.applyImageType(a),this.applyFixedType(a)}bindListeners(){let a=this.document.defaultView;this.scrollEl=this.resolveScrollElement(),this.zone.runOutsideAngular(()=>{let l=this.scrollEl===window?a:this.scrollEl;Xs(l,`scroll`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>this.scheduleCheck()),Xs(a,`resize`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>this.scheduleCheck())})}scheduleCheck(){if(!this.disabled){if(typeof this.suiThrottle==`number`&&this.suiThrottle>0){this.throttleTimer!=null&&clearTimeout(this.throttleTimer),this.throttleTimer=setTimeout(()=>{this.throttleTimer=null,this.zone.run(()=>this.check())},this.suiThrottle);return}this.rafId??=requestAnimationFrame(()=>{this.rafId=null,this.zone.run(()=>this.check())})}}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh()},100)}resolveScrollElement(){let a=this.suiScrollContext??this.suiContext;return!a||a===`window`?window:typeof a!=`string`?a:this.document.querySelector(a)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}readCalculations(){let a=this.el.nativeElement,l=a.getBoundingClientRect(),r=getComputedStyle(a),s=parseFloat(r.marginTop)||0,p=parseFloat(r.marginBottom)||0,F=this.readScrollTop(),ie=this.scrollEl===window?{top:0,height:window.innerHeight}:(()=>{let A=this.scrollEl.getBoundingClientRect();return{top:A.top,height:A.height}})(),ve=Jn({element:{top:l.top,bottom:l.bottom,width:l.width,height:l.height},screen:ie,offset:this.suiOffset,includeMargin:this.suiIncludeMargin,marginTop:s,marginBottom:p,lastScrollTop:this.lastScrollTop,scrollTop:F});return this.lastScrollTop=F,ve}emitConditions(a){for(let l of ta){let r=a[l],s=!!this.previous[l],p=ia[l];fi(r,s,!!this.occurred[l],this.suiOnce,this.suiContinuous)&&this.emitters[l].emit(a),p&&ea(r,s,!!this.occurred[l],!!this.occurred[p],this.suiOnce,this.suiContinuous)&&(this.emitters[p].emit(a),this.occurred[p]=!0),r?(this.occurred[l]=!0,!this.suiOnce&&p&&(this.occurred[p]=!1)):this.suiOnce||(this.occurred[l]=!1),this.previous[l]=r}}emitPassed(a){if(!(!a.topPassed&&!a.passing))for(let l of Xn(this.suiPassed)){let r=Qn(l,a.height);if(Number.isNaN(r)||a.pixelsPassed<r)continue;let s=`passed:${l}`;fi(!0,!!this.previous[s],!!this.occurred[s],this.suiOnce,this.suiContinuous)&&this.suiOnPassed.emit({amount:l,calculations:a}),this.occurred[s]=!0,this.previous[s]=!0}}applyImageType(a){if(this.suiType!==`image`||this.imageLoaded||!a.topVisible)return;let l=this.el.nativeElement,r=l.getAttribute(`data-src`);r&&(this.renderer.setAttribute(l,`src`,r),this.renderer.removeAttribute(l,`data-src`),this.imageLoaded=!0,this.suiOnLoad.emit(a))}applyFixedType(a){this.suiType===`fixed`&&(a.topPassed?this.fixElement(a):this.unfixElement(a))}fixElement(a){if(this.isFixed)return;let l=this.el.nativeElement,r=l.getBoundingClientRect(),s=l.parentNode;s&&(this.placeholder=this.renderer.createElement(`div`),this.renderer.setStyle(this.placeholder,`display`,`block`),this.renderer.setStyle(this.placeholder,`width`,`${r.width}px`),this.renderer.setStyle(this.placeholder,`height`,`${r.height}px`),this.renderer.insertBefore(s,this.placeholder,l)),this.renderer.addClass(l,`fixed`),this.renderer.setStyle(l,`position`,`fixed`),this.renderer.setStyle(l,`top`,`${this.suiOffset}px`),this.renderer.setStyle(l,`z-index`,String(this.suiZIndex)),this.isFixed=!0,this.suiOnFixed.emit(a)}unfixElement(a){if(!this.isFixed)return;let l=this.el.nativeElement;this.renderer.removeClass(l,`fixed`),this.renderer.removeStyle(l,`position`),this.renderer.removeStyle(l,`top`),this.renderer.removeStyle(l,`z-index`),this.removePlaceholder(),this.isFixed=!1,this.suiOnUnfixed.emit(a)}removePlaceholder(){if(!this.placeholder)return;let a=this.placeholder.parentNode;a&&this.renderer.removeChild(a,this.placeholder),this.placeholder=null}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiVisibility`,``]],inputs:{suiOnce:`suiOnce`,suiContinuous:`suiContinuous`,suiContext:`suiContext`,suiScrollContext:`suiScrollContext`,suiOffset:`suiOffset`,suiIncludeMargin:`suiIncludeMargin`,suiInitialCheck:`suiInitialCheck`,suiObserveChanges:`suiObserveChanges`,suiThrottle:`suiThrottle`,suiType:`suiType`,suiPassed:`suiPassed`,suiZIndex:`suiZIndex`},outputs:{suiOnOnScreen:`suiOnOnScreen`,suiOnOffScreen:`suiOnOffScreen`,suiOnTopVisible:`suiOnTopVisible`,suiOnTopPassed:`suiOnTopPassed`,suiOnBottomVisible:`suiOnBottomVisible`,suiOnBottomPassed:`suiOnBottomPassed`,suiOnPassing:`suiOnPassing`,suiOnTopVisibleReverse:`suiOnTopVisibleReverse`,suiOnTopPassedReverse:`suiOnTopPassedReverse`,suiOnBottomVisibleReverse:`suiOnBottomVisibleReverse`,suiOnBottomPassedReverse:`suiOnBottomPassedReverse`,suiOnPassingReverse:`suiOnPassingReverse`,suiOnUpdate:`suiOnUpdate`,suiOnPassed:`suiOnPassed`,suiOnRefresh:`suiOnRefresh`,suiOnFixed:`suiOnFixed`,suiOnUnfixed:`suiOnUnfixed`,suiOnLoad:`suiOnLoad`},exportAs:[`suiVisibility`]})}}return uS([ve()],n.prototype,`suiOnce`,void 0),uS([ve()],n.prototype,`suiContinuous`,void 0),uS([ve()],n.prototype,`suiIncludeMargin`,void 0),uS([ve()],n.prototype,`suiInitialCheck`,void 0),uS([ve()],n.prototype,`suiObserveChanges`,void 0),n})();var hi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl]})}}return n})();function aa(n,u){if(n&1&&(is(0,`tr`)(1,`td`),zC(2),Vu(),is(3,`td`),zC(4),Vu()()),n&2){let a=u.$implicit,l=pC();KD(2),gg(a),KD(2),gg(l.calculations?.[a])}}function la(n,u){if(n&1&&(is(0,`div`),zC(1),Vu()),n&2){let a=u.$implicit;KD(),gg(a)}}function ra(n,u){n&1&&(is(0,`em`),zC(1,`Scroll the content to log events`),Vu())}var oa=()=>[`25%`,`50%`,`75%`,`100%`];function sa(n,u){if(n&1&&(is(0,`div`),zC(1),Vu()),n&2){let a=u.$implicit;KD(),gg(a)}}function ma(n,u){n&1&&(is(0,`em`),zC(1,`Scroll the content to log events`),Vu())}function da(n,u){if(n&1&&zh(0,`doc-wireframe`,3),n&2){let a=u.$implicit;Gh(`type`,a)}}function ua(n,u){n&1&&(is(0,`div`,4),zC(1,` Adding more content... `),Vu())}function pa(n,u){n&1&&(is(0,`div`,5),zC(1,` That's everything. `),Vu())}function ca(n,u){if(n&1){let a=dC();is(0,`h4`,2)(1,`img`,3),Kh(`suiOnLoad`,function(){Pd(a);let r=pC();return jd(r.loaded=r.loaded+1)}),Vu(),zC(2),nw(3,`titlecase`),Vu(),zh(4,`doc-wireframe`,4)}if(n&2){let a=u.$implicit;pC();let l=EC(1);KD(),Gh(`suiContext`,l),Uh(`data-src`,`assets/images/`+a+`.jpg`),KD(),Gu(` `,ow(3,3,a),` `)}}var k=class{constructor(){this.calculations=null,this.keys=[`pixelsPassed`,`percentagePassed`,`fits`,`width`,`height`,`direction`,`onScreen`,`offScreen`,`passing`,`topVisible`,`bottomVisible`,`topPassed`,`bottomPassed`],this.once=!0,this.continuous=!1,this.events=[],this.items=[`paragraph`,`short-paragraph`,`paragraph`,`short-paragraph`],this.loading=!1,this.loads=0,this.maxLoads=5,this.people=[`elliot`,`helen`,`jenny`,`joe`,`justen`,`laura`,`matt`,`stevie`],this.loaded=0,this.shade=0,this.fixed=!1}log(u){this.events=[u,...this.events].slice(0,10)}loadMore(){this.loading||this.loads>=this.maxLoads||(this.loading=!0,setTimeout(()=>{this.items=[...this.items,`paragraph`,`short-paragraph`,`paragraph`],this.loads++,this.loading=!1},800))}};var vi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=to(n)))(r||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility-usage-example`]],standalone:!1,features:[uo],decls:27,vars:2,consts:[[`scroller`,``],[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`ten`],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,3,`suiOnUpdate`,`suiContext`,`suiOnce`],[`suiGridColumn`,``,`suiWidth`,`six`],[`sui-table`,``,`suiCelled`,``,`suiCompact`,`very compact`]],template:function(l,r){if(l&1&&(is(0,`div`,1)(1,`div`,2)(2,`div`,3,0),zh(4,`doc-wireframe`,4)(5,`doc-wireframe`,5),is(6,`div`,6),Kh(`suiOnUpdate`,function(p){return r.calculations=p}),zh(7,`doc-wireframe`,5)(8,`doc-wireframe`,4)(9,`doc-wireframe`,5)(10,`doc-wireframe`,5)(11,`doc-wireframe`,4)(12,`doc-wireframe`,5),Vu(),zh(13,`doc-wireframe`,5)(14,`doc-wireframe`,4)(15,`doc-wireframe`,5),Vu()(),is(16,`div`,7)(17,`table`,8)(18,`thead`)(19,`tr`)(20,`th`),zC(21,`Calculation`),Vu(),is(22,`th`),zC(23,`Value`),Vu()()(),is(24,`tbody`),oC(25,aa,5,2,`tr`,null,rC),Vu()()()()),l&2){let s=EC(3);KD(6),Gh(`suiContext`,s)(`suiOnce`,!1),KD(19),iC(r.keys)}},dependencies:[Dr,mi$1,vi$1,U,ze,G],encapsulation:2,changeDetection:1})}}return n})();var xi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=to(n)))(r||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility-frequency-example`]],standalone:!1,features:[uo],decls:30,vars:6,consts:[[`scroller`,``],[`tracker`,`suiVisibility`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-button`,``,`suiToggle`,``,3,`click`,`suiActive`],[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`ten`],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,3,`suiOnTopVisible`,`suiOnTopPassed`,`suiOnBottomVisible`,`suiOnBottomPassed`,`suiOnTopVisibleReverse`,`suiOnBottomPassedReverse`,`suiContext`,`suiOnce`,`suiContinuous`],[`suiGridColumn`,``,`suiWidth`,`six`],[`sui-segment`,``],[`sui-header`,``]],template:function(l,r){if(l&1){let s=dC();is(0,`div`,2)(1,`button`,3),Kh(`click`,function(){Pd(s);let F=EC(14);return r.events=[],jd(F.refresh())}),zC(2,` Clear `),Vu(),is(3,`button`,4),Kh(`click`,function(){return r.once=!r.once}),zC(4,` Once `),Vu(),is(5,`button`,4),Kh(`click`,function(){return r.continuous=!r.continuous}),zC(6,` Continuous `),Vu()(),is(7,`div`,5)(8,`div`,6)(9,`div`,7,0),zh(11,`doc-wireframe`,8)(12,`doc-wireframe`,9),is(13,`div`,10,1),Kh(`suiOnTopVisible`,function(){return r.log(`Top visible`)})(`suiOnTopPassed`,function(){return r.log(`Top passed`)})(`suiOnBottomVisible`,function(){return r.log(`Bottom visible`)})(`suiOnBottomPassed`,function(){return r.log(`Bottom passed`)})(`suiOnTopVisibleReverse`,function(){return r.log(`Top not visible`)})(`suiOnBottomPassedReverse`,function(){return r.log(`Bottom not passed`)}),zh(15,`doc-wireframe`,9)(16,`doc-wireframe`,8)(17,`doc-wireframe`,9)(18,`doc-wireframe`,9)(19,`doc-wireframe`,8),Vu(),zh(20,`doc-wireframe`,9)(21,`doc-wireframe`,8)(22,`doc-wireframe`,9),Vu()(),is(23,`div`,11)(24,`div`,12)(25,`h4`,13),zC(26,`Event Log`),Vu(),oC(27,la,2,1,`div`,null,nC,!1,ra,2,0,`em`),Vu()()()}if(l&2){let s=EC(10);KD(3),Gh(`suiActive`,r.once),KD(2),Gh(`suiActive`,r.continuous),KD(8),Gh(`suiContext`,s)(`suiOnce`,r.once)(`suiContinuous`,r.continuous),KD(14),iC(r.events)}},dependencies:[Dr,mi$1,vi$1,Ii,Di,Ws,ze,G],encapsulation:2,changeDetection:1})}}return n})();var Si=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=to(n)))(r||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility-passed-example`]],standalone:!1,features:[uo],decls:22,vars:4,consts:[[`scroller`,``],[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`ten`],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,3,`suiOnPassed`,`suiContext`,`suiPassed`],[`suiGridColumn`,``,`suiWidth`,`six`],[`sui-segment`,``],[`sui-header`,``]],template:function(l,r){if(l&1&&(is(0,`div`,1)(1,`div`,2)(2,`div`,3,0),zh(4,`doc-wireframe`,4)(5,`doc-wireframe`,5),is(6,`div`,6),Kh(`suiOnPassed`,function(p){return r.log(p.amount+` passed`)}),zh(7,`doc-wireframe`,5)(8,`doc-wireframe`,4)(9,`doc-wireframe`,5)(10,`doc-wireframe`,5)(11,`doc-wireframe`,4),Vu(),zh(12,`doc-wireframe`,5)(13,`doc-wireframe`,4)(14,`doc-wireframe`,5),Vu()(),is(15,`div`,7)(16,`div`,8)(17,`h4`,9),zC(18,`Event Log`),Vu(),oC(19,sa,2,1,`div`,null,nC,!1,ma,2,0,`em`),Vu()()()),l&2){let s=EC(3);KD(6),Gh(`suiContext`,s)(`suiPassed`,XC(3,oa)),KD(13),iC(r.events)}},dependencies:[Dr,mi$1,vi$1,Ws,ze,G],encapsulation:2,changeDetection:1})}}return n})();var yi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=to(n)))(r||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility-infinite-example`]],standalone:!1,features:[uo],decls:7,vars:4,consts:[[`scroller`,``],[1,`visibility-scroller`],[`sui-segment`,``,`suiVisibility`,``,`suiObserveChanges`,``,3,`suiOnBottomVisible`,`suiContext`,`suiOnce`],[3,`type`],[`sui-message`,``,`suiState`,`info`],[`sui-message`,``]],template:function(l,r){if(l&1&&(is(0,`div`,1,0)(2,`div`,2),Kh(`suiOnBottomVisible`,function(){return r.loadMore()}),oC(3,da,1,1,`doc-wireframe`,3,nC),XI(5,ua,2,0,`div`,4),XI(6,pa,2,0,`div`,5),Vu()()),l&2){let s=EC(1);KD(2),Gh(`suiContext`,s)(`suiOnce`,!1),KD(),iC(r.items),KD(2),tC(r.loading?5:-1),KD(),tC(r.loads>=r.maxLoads?6:-1)}},dependencies:[Dr,li$1,ze,G],encapsulation:2,changeDetection:1})}}return n})();var gi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=to(n)))(r||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility-lazy-images-example`]],standalone:!1,features:[uo],decls:6,vars:2,consts:[[`scroller`,``],[1,`visibility-scroller`],[`sui-header`,``],[`sui-image`,``,`suiSize`,`tiny`,`suiRounded`,``,`suiVisibility`,``,`suiType`,`image`,`src`,`assets/images/wireframes/image.png`,3,`suiOnLoad`,`suiContext`],[`type`,`short-paragraph`]],template:function(l,r){l&1&&(is(0,`div`,1,0),oC(2,ca,5,5,null,null,rC),Vu(),is(4,`p`),zC(5),Vu()),l&2&&(KD(2),iC(r.people),KD(3),mg(`Images loaded: `,r.loaded,` / `,r.people.length))},dependencies:[Dr,Ws,z,G,Yw],encapsulation:2,changeDetection:1})}}return n})();var Ei=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=to(n)))(r||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility-gradual-example`]],standalone:!1,features:[uo],decls:12,vars:4,consts:[[`scroller`,``],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,`suiContinuous`,``,3,`suiOnPassing`,`suiOnTopPassedReverse`,`suiContext`,`suiOnce`]],template:function(l,r){if(l&1&&(is(0,`div`,1,0),zh(2,`doc-wireframe`,2)(3,`doc-wireframe`,3),is(4,`div`,4),Kh(`suiOnPassing`,function(p){return r.shade=p.percentagePassed})(`suiOnTopPassedReverse`,function(){return r.shade=0}),zh(5,`doc-wireframe`,3)(6,`doc-wireframe`,2)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3),Vu(),zh(9,`doc-wireframe`,3)(10,`doc-wireframe`,2)(11,`doc-wireframe`,3),Vu()),l&2){let s=EC(1);KD(4),sg(`background-color`,`rgba(0, 0, 0, `+r.shade+`)`),Gh(`suiContext`,s)(`suiOnce`,!1)}},dependencies:[Dr,ze,G],encapsulation:2,changeDetection:1})}}return n})();function ha(n,u){n&1&&zh(0,`doc-visibility-usage-example`)}function va(n,u){n&1&&zh(0,`doc-visibility-frequency-example`)}function xa(n,u){n&1&&zh(0,`doc-visibility-passed-example`)}function Sa(n,u){n&1&&zh(0,`doc-visibility-infinite-example`)}function ya(n,u){n&1&&zh(0,`doc-visibility-lazy-images-example`)}function ga(n,u){n&1&&zh(0,`doc-visibility-gradual-example`)}function Ea(n,u){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Usage`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`How To Use`),Vu(),is(6,`p`),zC(7,`Add `),is(8,`code`),zC(9,`suiVisibility`),Vu(),zC(10,` to any element to receive events as it moves through the viewport. Every event receives the element calculations`),Vu(),is(11,`div`,5),zC(12,` These examples scroll inside a container passed to `),is(13,`code`),zC(14,`suiContext`),Vu(),zC(15,`. Leave it out to track scrolling of the whole page. `),Vu(),jh(16,ha,1,0,`ng-template`,6),Vu(),is(17,`doc-code-sample`,3)(18,`h3`,4),zC(19,`Changing Callback Frequency`),Vu(),is(20,`p`),zC(21,`By default each event only fires `),is(22,`b`),zC(23,`the first time`),Vu(),zC(24,` its condition is met. Set `),is(25,`code`),zC(26,`suiOnce`),Vu(),zC(27,` to `),is(28,`code`),zC(29,`false`),Vu(),zC(30,` to fire each time a condition `),is(31,`b`),zC(32,`becomes true`),Vu(),zC(33,`, or `),is(34,`code`),zC(35,`suiContinuous`),Vu(),zC(36,` to fire on `),is(37,`b`),zC(38,`every scroll`),Vu(),zC(39,` while it holds`),Vu(),is(40,`div`,5),zC(41,` Call `),is(42,`code`),zC(43,`refresh()`),Vu(),zC(44,` to reset which events have already fired. `),Vu(),jh(45,va,1,0,`ng-template`,6),Vu(),is(46,`doc-code-sample`,3)(47,`h3`,4),zC(48,`Passed Amounts`),Vu(),is(49,`p`)(50,`code`),zC(51,`suiPassed`),Vu(),zC(52,` takes a list of distances, as percentages or pixels, and `),is(53,`code`),zC(54,`suiOnPassed`),Vu(),zC(55,` fires as each one is scrolled past`),Vu(),jh(56,xa,1,0,`ng-template`,6),Vu(),zh(57,`br`),is(58,`h2`,2),zC(59,`Examples`),Vu(),is(60,`doc-code-sample`,3)(61,`h3`,4),zC(62,`Infinite Scroll`),Vu(),is(63,`p`),zC(64,`As an alternative to pagination you can use `),is(65,`code`),zC(66,`suiOnBottomVisible`),Vu(),zC(67,` to load content when the bottom of a container is reached`),Vu(),is(68,`div`,5)(69,`code`),zC(70,`suiObserveChanges`),Vu(),zC(71,` recalculates positions after new content is added. `),Vu(),jh(72,Sa,1,0,`ng-template`,6),Vu(),is(73,`doc-code-sample`,3)(74,`h3`,4),zC(75,`Lazy Loading Images`),Vu(),is(76,`p`),zC(77,`Setting `),is(78,`code`),zC(79,`suiType`),Vu(),zC(80,` to `),is(81,`code`),zC(82,`image`),Vu(),zC(83,` swaps an image's `),is(84,`code`),zC(85,`data-src`),Vu(),zC(86,` into its `),is(87,`code`),zC(88,`src`),Vu(),zC(89,` once its top is visible. Keep a placeholder in `),is(90,`code`),zC(91,`src`),Vu(),zC(92,` so the layout does not jump when the image loads`),Vu(),jh(93,ya,1,0,`ng-template`,6),Vu(),is(94,`doc-code-sample`,7)(95,`h3`,4),zC(96,`Gradual Changes`),Vu(),is(97,`p`),zC(98,`Each event receives the calculated values, so you can adjust an element as it is scrolled past`),Vu(),jh(99,ga,1,0,`ng-template`,6),Vu(),is(100,`doc-code-sample`,7)(101,`h3`,4),zC(102,`Fixing Content To Viewport`),Vu(),is(103,`p`),zC(104,`Setting `),is(105,`code`),zC(106,`suiType`),Vu(),zC(107,` to `),is(108,`code`),zC(109,`fixed`),Vu(),zC(110,` fixes an element to the viewport once its top is passed, adds the class `),is(111,`code`),zC(112,`fixed`),Vu(),zC(113,`, and inserts a placeholder so the page does not shift. It is unfixed when you scroll back`),Vu(),is(114,`div`,8),zC(115,` This example is not run here because this site is wrapped in a sidebar container, and a transformed ancestor stops `),is(116,`code`),zC(117,`position: fixed`),Vu(),zC(118,` from attaching to the viewport. Use `),is(119,`code`),zC(120,`suiZIndex`),Vu(),zC(121,` to keep fixed content above the rest of the page. `),Vu()()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetUsage)(`componentCode`,a.snippetUsageTs),KD(14),Gh(`templateCode`,a.snippetFrequency)(`componentCode`,a.snippetFrequencyTs),KD(29),Gh(`templateCode`,a.snippetPassed)(`componentCode`,a.snippetPassedTs),KD(14),Gh(`templateCode`,a.snippetInfinite)(`componentCode`,a.snippetInfiniteTs),KD(13),Gh(`templateCode`,a.snippetLazyImages)(`componentCode`,a.snippetLazyImagesTs),KD(21),Gh(`templateCode`,a.snippetGradual),KD(6),Gh(`templateCode`,a.snippetFixed)}}function ba(n,u){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`suiVisibility`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,9)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,` suiOnce `),Vu(),is(20,`td`),zC(21,` Fire each event only the first time its condition is met, until `),is(22,`code`),zC(23,`refresh()`),Vu(),zC(24,` is called `),Vu(),is(25,`td`)(26,`div`,10),zC(27,` boolean `),Vu()(),is(28,`td`)(29,`div`,11),zC(30,` true `),Vu()()(),is(31,`tr`)(32,`td`),zC(33,` suiContinuous `),Vu(),is(34,`td`),zC(35,` Fire events on every check while their condition holds `),Vu(),is(36,`td`)(37,`div`,10),zC(38,` boolean `),Vu()(),is(39,`td`)(40,`div`,11),zC(41,` false `),Vu()()(),is(42,`tr`)(43,`td`),zC(44,` suiType `),Vu(),is(45,`td`)(46,`code`),zC(47,`image`),Vu(),zC(48,` loads `),is(49,`code`),zC(50,`data-src`),Vu(),zC(51,` into `),is(52,`code`),zC(53,`src`),Vu(),zC(54,` when visible. `),is(55,`code`),zC(56,`fixed`),Vu(),zC(57,` fixes the element to the viewport once passed `),Vu(),is(58,`td`)(59,`div`,10),zC(60,` false | 'image' | 'fixed' `),Vu()(),is(61,`td`)(62,`div`,11),zC(63,` false `),Vu()()(),is(64,`tr`)(65,`td`),zC(66,` suiContext `),Vu(),is(67,`td`),zC(68,` The scroll context: `),is(69,`code`),zC(70,`'window'`),Vu(),zC(71,`, a CSS selector or an element `),Vu(),is(72,`td`)(73,`div`,10),zC(74,` 'window' | string | HTMLElement `),Vu()(),is(75,`td`)(76,`div`,11),zC(77,` 'window' `),Vu()()(),is(78,`tr`)(79,`td`),zC(80,` suiScrollContext `),Vu(),is(81,`td`),zC(82,` Alias of `),is(83,`code`),zC(84,`suiContext`),Vu(),zC(85,`; takes precedence when set `),Vu(),is(86,`td`)(87,`div`,10),zC(88,` 'window' | string | HTMLElement `),Vu()(),is(89,`td`)(90,`div`,11),zC(91,` null `),Vu()()(),is(92,`tr`)(93,`td`),zC(94,` suiOffset `),Vu(),is(95,`td`),zC(96,` Pixels to adjust the scroll position by, e.g. to account for a fixed menu. Also the top offset for `),is(97,`code`),zC(98,`fixed`),Vu()(),is(99,`td`)(100,`div`,10),zC(101,` number `),Vu()(),is(102,`td`)(103,`div`,11),zC(104,` 0 `),Vu()()(),is(105,`tr`)(106,`td`),zC(107,` suiIncludeMargin `),Vu(),is(108,`td`),zC(109,` Include the element's margins in its calculations `),Vu(),is(110,`td`)(111,`div`,10),zC(112,` boolean `),Vu()(),is(113,`td`)(114,`div`,11),zC(115,` false `),Vu()()(),is(116,`tr`)(117,`td`),zC(118,` suiInitialCheck `),Vu(),is(119,`td`),zC(120,` Check visibility conditions as soon as the element initializes `),Vu(),is(121,`td`)(122,`div`,10),zC(123,` boolean `),Vu()(),is(124,`td`)(125,`div`,11),zC(126,` true `),Vu()()(),is(127,`tr`)(128,`td`),zC(129,` suiObserveChanges `),Vu(),is(130,`td`),zC(131,` Refresh automatically when the element's content changes `),Vu(),is(132,`td`)(133,`div`,10),zC(134,` boolean `),Vu()(),is(135,`td`)(136,`div`,11),zC(137,` false `),Vu()()(),is(138,`tr`)(139,`td`),zC(140,` suiThrottle `),Vu(),is(141,`td`),zC(142,` Debounce scroll checks by this many milliseconds. `),is(143,`code`),zC(144,`false`),Vu(),zC(145,` uses `),is(146,`code`),zC(147,`requestAnimationFrame`),Vu()(),is(148,`td`)(149,`div`,10),zC(150,` number | false `),Vu()(),is(151,`td`)(152,`div`,11),zC(153,` false `),Vu()()(),is(154,`tr`)(155,`td`),zC(156,` suiPassed `),Vu(),is(157,`td`),zC(158,` Distances, as percentages or pixels, that fire `),is(159,`code`),zC(160,`suiOnPassed`),Vu(),zC(161,` when scrolled past, e.g. `),is(162,`code`),zC(163,`['50%', '200px']`),Vu()(),is(164,`td`)(165,`div`,10),zC(166,` string[] | Record&lt;string, unknown&gt; `),Vu()(),is(167,`td`)(168,`div`,11),zC(169,` null `),Vu()()(),is(170,`tr`)(171,`td`),zC(172,` suiZIndex `),Vu(),is(173,`td`),zC(174,` The z-index applied when using `),is(175,`code`),zC(176,`suiType="fixed"`),Vu()(),is(177,`td`)(178,`div`,10),zC(179,` number `),Vu()(),is(180,`td`)(181,`div`,11),zC(182,` 1 `),Vu()()()()(),is(183,`h4`,4),zC(184,`Events`),Vu(),is(185,`table`,9)(186,`thead`)(187,`tr`)(188,`th`),zC(189,`Event`),Vu(),is(190,`th`),zC(191,`Description`),Vu(),is(192,`th`),zC(193,`Type`),Vu()()(),is(194,`tbody`)(195,`tr`)(196,`td`),zC(197,` suiOnOnScreen `),Vu(),is(198,`td`),zC(199,` Any part of the element is in the scroll viewport `),Vu(),is(200,`td`)(201,`div`,10),zC(202,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(203,`tr`)(204,`td`),zC(205,` suiOnOffScreen `),Vu(),is(206,`td`),zC(207,` No part of the element is in the scroll viewport `),Vu(),is(208,`td`)(209,`div`,10),zC(210,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(211,`tr`)(212,`td`),zC(213,` suiOnTopVisible `),Vu(),is(214,`td`),zC(215,` The element's top edge has passed the bottom of the screen `),Vu(),is(216,`td`)(217,`div`,10),zC(218,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(219,`tr`)(220,`td`),zC(221,` suiOnTopPassed `),Vu(),is(222,`td`),zC(223,` The element's top edge has passed the top of the screen `),Vu(),is(224,`td`)(225,`div`,10),zC(226,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(227,`tr`)(228,`td`),zC(229,` suiOnBottomVisible `),Vu(),is(230,`td`),zC(231,` The element's bottom edge has passed the bottom of the screen `),Vu(),is(232,`td`)(233,`div`,10),zC(234,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(235,`tr`)(236,`td`),zC(237,` suiOnBottomPassed `),Vu(),is(238,`td`),zC(239,` The element's bottom edge has passed the top of the screen `),Vu(),is(240,`td`)(241,`div`,10),zC(242,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(243,`tr`)(244,`td`),zC(245,` suiOnPassing `),Vu(),is(246,`td`),zC(247,` The element's top has passed the top of the screen but its bottom has not `),Vu(),is(248,`td`)(249,`div`,10),zC(250,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(251,`tr`)(252,`td`),zC(253,` suiOnTopVisibleReverse `),Vu(),is(254,`td`),zC(255,` Scrolling back up, the element's top edge is no longer visible `),Vu(),is(256,`td`)(257,`div`,10),zC(258,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(259,`tr`)(260,`td`),zC(261,` suiOnTopPassedReverse `),Vu(),is(262,`td`),zC(263,` Scrolling back up, the element's top edge is no longer passed `),Vu(),is(264,`td`)(265,`div`,10),zC(266,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(267,`tr`)(268,`td`),zC(269,` suiOnBottomVisibleReverse `),Vu(),is(270,`td`),zC(271,` Scrolling back up, the element's bottom edge is no longer visible `),Vu(),is(272,`td`)(273,`div`,10),zC(274,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(275,`tr`)(276,`td`),zC(277,` suiOnBottomPassedReverse `),Vu(),is(278,`td`),zC(279,` Scrolling back up, the element's bottom edge is no longer passed `),Vu(),is(280,`td`)(281,`div`,10),zC(282,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(283,`tr`)(284,`td`),zC(285,` suiOnPassingReverse `),Vu(),is(286,`td`),zC(287,` Scrolling back up, the element is no longer being passed `),Vu(),is(288,`td`)(289,`div`,10),zC(290,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(291,`tr`)(292,`td`),zC(293,` suiOnPassed `),Vu(),is(294,`td`),zC(295,` A distance listed in `),is(296,`code`),zC(297,`suiPassed`),Vu(),zC(298,` has been scrolled past `),Vu(),is(299,`td`)(300,`div`,10),zC(301,` EventEmitter&lt;SuiVisibilityPassedEvent&gt; `),Vu()()(),is(302,`tr`)(303,`td`),zC(304,` suiOnUpdate `),Vu(),is(305,`td`),zC(306,` Emitted every time the calculations are updated `),Vu(),is(307,`td`)(308,`div`,10),zC(309,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(310,`tr`)(311,`td`),zC(312,` suiOnRefresh `),Vu(),is(313,`td`),zC(314,` Emitted when the directive is refreshed `),Vu(),is(315,`td`)(316,`div`,10),zC(317,` EventEmitter&lt;void&gt; `),Vu()()(),is(318,`tr`)(319,`td`),zC(320,` suiOnLoad `),Vu(),is(321,`td`),zC(322,` With `),is(323,`code`),zC(324,`suiType="image"`),Vu(),zC(325,`, emitted when the image source is swapped in `),Vu(),is(326,`td`)(327,`div`,10),zC(328,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(329,`tr`)(330,`td`),zC(331,` suiOnFixed `),Vu(),is(332,`td`),zC(333,` With `),is(334,`code`),zC(335,`suiType="fixed"`),Vu(),zC(336,`, emitted when the element becomes fixed `),Vu(),is(337,`td`)(338,`div`,10),zC(339,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()(),is(340,`tr`)(341,`td`),zC(342,` suiOnUnfixed `),Vu(),is(343,`td`),zC(344,` With `),is(345,`code`),zC(346,`suiType="fixed"`),Vu(),zC(347,`, emitted when the element returns to its position `),Vu(),is(348,`td`)(349,`div`,10),zC(350,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Vu()()()()(),is(351,`h4`,4),zC(352,`Methods`),Vu(),is(353,`table`,9)(354,`thead`)(355,`tr`)(356,`th`),zC(357,`Method`),Vu(),is(358,`th`),zC(359,`Description`),Vu()()(),is(360,`tbody`)(361,`tr`)(362,`td`),zC(363,` check() `),Vu(),is(364,`td`),zC(365,` Recalculates and fires any events whose conditions are met `),Vu()(),is(366,`tr`)(367,`td`),zC(368,` refresh() `),Vu(),is(369,`td`),zC(370,` Resets which events have fired, then checks again `),Vu()(),is(371,`tr`)(372,`td`),zC(373,` disable() `),Vu(),is(374,`td`),zC(375,` Stops events temporarily, e.g. while you adjust the scroll position `),Vu()(),is(376,`tr`)(377,`td`),zC(378,` enable() `),Vu(),is(379,`td`),zC(380,` Turns events back on and checks again `),Vu()()()(),is(381,`h4`,4),zC(382,`SuiVisibilityCalculations`),Vu(),is(383,`table`,9)(384,`thead`)(385,`tr`)(386,`th`),zC(387,`Field`),Vu(),is(388,`th`),zC(389,`Description`),Vu(),is(390,`th`),zC(391,`Type`),Vu()()(),is(392,`tbody`)(393,`tr`)(394,`td`),zC(395,` pixelsPassed `),Vu(),is(396,`td`),zC(397,` Pixels of the element scrolled past the top of the screen `),Vu(),is(398,`td`)(399,`div`,10),zC(400,` number `),Vu()()(),is(401,`tr`)(402,`td`),zC(403,` percentagePassed `),Vu(),is(404,`td`),zC(405,` Fraction of the element scrolled past, from 0 to 1 `),Vu(),is(406,`td`)(407,`div`,10),zC(408,` number `),Vu()()(),is(409,`tr`)(410,`td`),zC(411,` fits `),Vu(),is(412,`td`),zC(413,` Whether the element is shorter than the screen `),Vu(),is(414,`td`)(415,`div`,10),zC(416,` boolean `),Vu()()(),is(417,`tr`)(418,`td`),zC(419,` width / height `),Vu(),is(420,`td`),zC(421,` Size of the element `),Vu(),is(422,`td`)(423,`div`,10),zC(424,` number `),Vu()()(),is(425,`tr`)(426,`td`),zC(427,` direction `),Vu(),is(428,`td`),zC(429,` Scroll direction since the last check `),Vu(),is(430,`td`)(431,`div`,10),zC(432,` 'up' | 'down' `),Vu()()(),is(433,`tr`)(434,`td`),zC(435,` onScreen / offScreen `),Vu(),is(436,`td`),zC(437,` Whether any part of the element is in the viewport `),Vu(),is(438,`td`)(439,`div`,10),zC(440,` boolean `),Vu()()(),is(441,`tr`)(442,`td`),zC(443,` passing `),Vu(),is(444,`td`),zC(445,` Whether the element is being scrolled past `),Vu(),is(446,`td`)(447,`div`,10),zC(448,` boolean `),Vu()()(),is(449,`tr`)(450,`td`),zC(451,` topVisible / bottomVisible `),Vu(),is(452,`td`),zC(453,` Whether the top or bottom edge has passed the bottom of the screen `),Vu(),is(454,`td`)(455,`div`,10),zC(456,` boolean `),Vu()()(),is(457,`tr`)(458,`td`),zC(459,` topPassed / bottomPassed `),Vu(),is(460,`td`),zC(461,` Whether the top or bottom edge has passed the top of the screen `),Vu(),is(462,`td`)(463,`div`,10),zC(464,` boolean `),Vu()()()()()())}var bi=(()=>{class n{constructor(a){this.snippetUsage=ii,this.snippetUsageTs=ni,this.snippetFrequency=ai,this.snippetFrequencyTs=li,this.snippetPassed=ri,this.snippetPassedTs=oi,this.snippetInfinite=si,this.snippetInfiniteTs=mi,this.snippetLazyImages=di,this.snippetLazyImagesTs=ui,this.snippetGradual=pi,this.snippetFixed=ci,a.setTitle(`Visibility | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-visibility`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Visibility`,`subHeader`,`Visibility provides a set of callbacks for when a content appears in the viewport`,`semanticUrl`,`https://semantic-ui.com/behaviors/visibility.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[3,`templateCode`],[`sui-message`,``,`suiState`,`warning`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,r){l&1&&(is(0,`doc-page`,0),jh(1,Ea,122,12,`div`,1)(2,ba,465,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$1,li$1,U,Ws,fi$2,vi,xi,Si,yi,gi,Ei],styles:[`[_nghost-%COMP%]     .visibility-scroller{height:22rem;overflow-y:auto;padding-right:.5rem}`],changeDetection:1})}}return n})();var Fa=[{path:`form`,component:ti},{path:`visibility`,component:bi}];var Fi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[Is.forChild(Fa),Is]})}}return n})();var eo=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl,Kr,Fi,xi$1,yi$1,At$1,ci$1,K,bi$2,Ks,B,gi$1,bi$1,hi]})}}return n})();export{eo as BehaviorsModule};