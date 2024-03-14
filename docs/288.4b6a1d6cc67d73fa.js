"use strict";(self.webpackChunkflashCart=self.webpackChunkflashCart||[]).push([[288],{9288:(K,d,l)=>{l.r(d),l.d(d,{RegisterComponent:()=>L});var c=l(6814),i=l(95),h=l(6593),v=l(349),f=l(2425),Z=l(6401),e=l(4769),x=l(9410),T=l(1120);function w(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"Name is required"),e.qZA())}function A(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"Name is minLength 3 char "),e.qZA())}function I(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"Name is maxlength 20char"),e.qZA())}function E(t,s){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,w,2,0,"p",27),e.YNc(2,A,2,0,"p",27),e.YNc(3,I,2,0,"p",27),e.qZA()),2&t){const n=e.oxw();let o,r,a;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("name"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("name"))?null:r.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(a=n.registerForm.get("name"))?null:a.getError("maxlength"))}}function C(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"Email is required"),e.qZA())}function P(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"email is example@gmail/yahoo.com "),e.qZA())}function R(t,s){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,C,2,0,"p",27),e.YNc(2,P,2,0,"p",27),e.qZA()),2&t){const n=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("email"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("email"))?null:r.getError("email"))}}function U(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"password is required"),e.qZA())}function q(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"password must be at least 6 char and start at least one capital char and contain any numbers "),e.qZA())}function N(t,s){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,U,2,0,"p",27),e.YNc(2,q,2,0,"p",27),e.qZA()),2&t){const n=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("password"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("password"))?null:r.getError("pattern"))}}function F(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"rePassword is required"),e.qZA())}function M(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"rePassword value must be equal rePassword Value "),e.qZA())}function J(t,s){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,F,2,0,"p",27),e.YNc(2,M,2,0,"p",27),e.qZA()),2&t){const n=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("rePassword"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("rePassword"))?null:r.getError("mismatch"))}}function Y(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"phone is required"),e.qZA())}function O(t,s){1&t&&(e.TgZ(0,"p",28),e._uU(1,"phone value must be example 01(125) and eight 8 number"),e.qZA())}function Q(t,s){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,Y,2,0,"p",27),e.YNc(2,O,2,0,"p",27),e.qZA()),2&t){const n=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("phone"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("phone"))?null:r.getError("pattern"))}}function D(t,s){1&t&&e._UZ(0,"i",29)}(0,h.Cg)(Z.y,{providers:[(0,v.iQ)(),(0,f.nd)()]});let L=(()=>{class t{constructor(n,o,r){this._AuthService=n,this.toastr=o,this._Router=r,this.isLoading=!1,this.registerForm=new i.cw({name:new i.NI("",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]),email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),rePassword:new i.NI(""),phone:new i.NI("",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)])},{validators:[this.confirmRePassword]})}confirmRePassword(n){let o=n.get("password"),r=n.get("rePassword");o?.value!=r?.value?r?.setErrors({mismatch:!0}):""==r?.value&&r.setErrors({required:!0})}handleFormRegister(){this.isLoading=!0,this.registerForm.valid&&this._AuthService.registerUser(this.registerForm.value).subscribe({next:n=>{"success"==n.message&&(this.isLoading=!1,this.toastr.success("Welcome "+n.user.name+" To Login! Page "),this._Router.navigate(["/login"]))},error:n=>{this.isLoading=!1,this.toastr.error(n.error.message)}})}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(x.e),e.Y36(f._W),e.Y36(T.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:37,vars:8,consts:[[1,"formRegister","w-75","mx-auto","my-5","py-2","px-3","bg-main-light","rounded-2","shadow"],[1,"fw-bold","text-capitalize","text-center"],[3,"formGroup","ngSubmit"],[1,"name","form-items"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["name",""],["class","alert alert-danger w-50 mx-auto mt-2 rounded-3 text-center",4,"ngIf"],[1,"email","form-items"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["email",""],[1,"password","form-items"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["password",""],[1,"rePassword","form-items"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["rePassword",""],[1,"phone","form-items"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control"],["phone",""],[1,"main-btn","px-3","py-2","d-block","mx-auto","my-3",3,"disabled"],["class","fa-solid fa-circle-notch fa-spin text-white me-2",4,"ngIf"],[1,"alert","alert-danger","w-50","mx-auto","mt-2","rounded-3","text-center"],["class","text-capitalize",4,"ngIf"],[1,"text-capitalize"],[1,"fa-solid","fa-circle-notch","fa-spin","text-white","me-2"]],template:function(o,r){if(1&o&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Register now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return r.handleFormRegister()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Name :"),e.qZA(),e._UZ(7,"input",5,6),e.YNc(9,E,4,3,"div",7),e.qZA(),e.TgZ(10,"div",8)(11,"label",9),e._uU(12,"Email :"),e.qZA(),e._UZ(13,"input",10,11),e.YNc(15,R,3,2,"div",7),e.qZA(),e.TgZ(16,"div",12)(17,"label",13),e._uU(18,"Password :"),e.qZA(),e._UZ(19,"input",14,15),e.YNc(21,N,3,2,"div",7),e.qZA(),e.TgZ(22,"div",16)(23,"label",17),e._uU(24,"rePassword :"),e.qZA(),e._UZ(25,"input",18,19),e.YNc(27,J,3,2,"div",7),e.qZA(),e.TgZ(28,"div",20)(29,"label",21),e._uU(30,"phone :"),e.qZA(),e._UZ(31,"input",22,23),e.YNc(33,Q,3,2,"div",7),e.qZA(),e.TgZ(34,"button",24),e.YNc(35,D,1,0,"i",25),e._uU(36,"Register"),e.qZA()()()),2&o){const a=e.MAs(8),b=e.MAs(14),y=e.MAs(20),W=e.MAs(26),B=e.MAs(32);let m,_,p,g,u;e.xp6(3),e.Q6J("formGroup",r.registerForm),e.xp6(6),e.Q6J("ngIf",(null==(m=r.registerForm.get("name"))?null:m.errors)&&((null==(m=r.registerForm.get("name"))?null:m.touched)||a.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(_=r.registerForm.get("email"))?null:_.errors)&&((null==(_=r.registerForm.get("email"))?null:_.touched)||b.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(p=r.registerForm.get("password"))?null:p.errors)&&((null==(p=r.registerForm.get("password"))?null:p.touched)||y.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(g=r.registerForm.get("rePassword"))?null:g.errors)&&((null==(g=r.registerForm.get("rePassword"))?null:g.touched)||W.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(u=r.registerForm.get("phone"))?null:u.errors)&&((null==(u=r.registerForm.get("phone"))?null:u.touched)||B.value.length>0)),e.xp6(1),e.Q6J("disabled",r.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",r.isLoading)}},dependencies:[c.ez,c.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["input[_ngcontent-%COMP%]{display:flex;gap:3}"]})}return t})()}}]);