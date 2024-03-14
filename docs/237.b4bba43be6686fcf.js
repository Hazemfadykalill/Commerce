"use strict";(self.webpackChunkflashCart=self.webpackChunkflashCart||[]).push([[237],{2237:(f,u,a)=>{a.r(u),a.d(u,{CartComponent:()=>x});var i=a(6814),m=a(1120),t=a(4769),_=a(6286);function d(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.TgZ(4,"h6",14),t._uU(5),t.qZA()()(),t.TgZ(6,"div",15)(7,"div",16)(8,"div",17)(9,"h1",4),t._uU(10),t.qZA(),t.TgZ(11,"div",18)(12,"span",19)(13,"strong",20),t._uU(14,"price :"),t.qZA(),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"span",19)(18,"strong",20),t._uU(19,"onePrice :"),t.qZA(),t._uU(20),t.ALo(21,"currency"),t.qZA()(),t.TgZ(22,"span",21)(23,"strong",22),t._uU(24,"createdAt :"),t.qZA(),t._uU(25),t.ALo(26,"date"),t.qZA(),t.TgZ(27,"button",23),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.delProductFromCart(c.product._id))}),t._uU(28,"remove"),t._UZ(29,"i",24),t.qZA()(),t.TgZ(30,"div",25)(31,"div",26)(32,"button",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.addCount(c.count+1,c.product._id))}),t._UZ(33,"i",28),t.qZA(),t.TgZ(34,"span"),t._uU(35),t.qZA(),t.TgZ(36,"button",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.minusCount(c.count-1,c.product._id))}),t._UZ(37,"i",29),t.qZA()()()()(),t.TgZ(38,"div",30),t._UZ(39,"hr"),t.qZA()()}if(2&o){const e=l.$implicit,r=t.oxw(2);t.xp6(3),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(2),t.Oqu(e.product.category.slug),t.xp6(5),t.hij("",e.product.title.split(" ").slice(0,2).join(" ")," "),t.xp6(5),t.hij(" ",t.xi3(16,8,e.price*e.count,"EYG "),""),t.xp6(5),t.hij(" ",t.xi3(21,11,e.price,"EYG "),""),t.xp6(5),t.Oqu(t.lcZ(26,14,r.allDataFromCart.data.createdAt)),t.xp6(10),t.Oqu(e.count)}}const p=function(o){return["/payment",o]};function C(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"section",2)(1,"header",3)(2,"h1",4),t._uU(3,"Cart shop"),t.qZA(),t.TgZ(4,"p",5),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"button",6),t._uU(8,"payment "),t._UZ(9,"img",7),t.qZA(),t.TgZ(10,"button",8),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.allRemove())}),t._uU(11,"ALL remove"),t.qZA()(),t.YNc(12,d,40,16,"div",9),t.qZA()}if(2&o){const e=t.oxw();t.xp6(5),t.hij("total: ",t.xi3(6,3,e.allDataFromCart.data.totalCartPrice,"EYG "),""),t.xp6(2),t.Q6J("routerLink",t.VKq(6,p,e.allDataFromCart.data._id)),t.xp6(5),t.Q6J("ngForOf",e.allDataFromCart.data.products)}}function g(o,l){1&o&&(t.TgZ(0,"div",31)(1,"h1",32),t._uU(2,"Your Cart Is Empty...."),t.qZA()())}let x=(()=>{class o{constructor(e){this._cartServices=e}ngOnInit(){this.allCart()}allCart(){this._cartServices.getAllProductFromCart().subscribe({next:e=>{this.allDataFromCart=e,this._cartServices.cartNumber.next(e.numOfCartItems),localStorage.setItem("cartNumber",e.numOfCartItems)},error:e=>{console.log("Error getting all cart from user")}})}delProductFromCart(e){this._cartServices.deleteProductFromCart(e).subscribe({next:r=>{this.allDataFromCart=r,this._cartServices.cartNumber.next(r.numOfCartItems),localStorage.setItem("cartNumber",r.numOfCartItems)},error:r=>{console.log("Error deleting product from cart")}})}minusCount(e,r){e>=1?this._cartServices.updateCountCart(e,r).subscribe({next:n=>{this.allDataFromCart=n},error:n=>{console.log("Error update count from cart")}}):this.delProductFromCart(r)}addCount(e,r){this._cartServices.updateCountCart(e,r).subscribe({next:n=>{this.allDataFromCart=n},error:n=>{console.log("Error update count from cart")}})}allRemove(){this._cartServices.clearCart().subscribe({next:e=>{"success"===e.message&&(this.allDataFromCart=null,this._cartServices.cartNumber.next(0),console.log(e))},error:e=>{console.log("Error when clearing cart")}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(_.N))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","main-section  my-3 p-3 w-75 mx-auto ",4,"ngIf","ngIfElse"],["template",""],[1,"main-section","my-3","p-3","w-75","mx-auto"],[1,"d-flex","justify-content-between","mb-2","align-items-center"],[1,"fw-bold"],[1,"m-0","p-0","text-uppercase"],[1,"text-capitalize","main-btn","d-block",3,"routerLink"],["src","./assets/images/visa-1.svg","alt","visa logo"],[1,"text-capitalize","allRemove","d-block","mt-4","px-4","py-2",3,"click"],["class","row align-items-center  mt-2",4,"ngFor","ngForOf"],[1,"row","align-items-center","mt-2"],[1,"col-md-3"],[1,"image","text-center","rounded-2","overflow-hidden"],["height","200",1,"w-100","rounded-2",3,"src","alt"],[1,"mt-1","fw-bold"],[1,"col-md-9"],[1,"content","d-flex","justify-content-between","align-items-center"],[1,"des"],[1,"d-flex","gap-2","flex-column"],[1,"text-uppercase","text-main"],[1,"text-black"],[1,"mt-2"],[1,"me-1"],[1,"btnRemove","d-block","mt-4","px-4","py-2","text-capitalize",3,"click"],[1,"fa-solid","ms-2","fa-trash-can"],[1,"price"],[1,"btns","d-flex","gap-2","align-items-center"],[1,"btn-cart",3,"click"],[1,"fa-solid","fa-plus"],[1,"fa-solid","fa-minus"],[1,"line","w-75","mx-auto"],[1,"d-flex","align-items-center","justify-content-center","w-100","h-100"],[1,"text-capitalize","fw-bold"]],template:function(r,n){if(1&r&&(t.YNc(0,C,13,8,"section",0),t.YNc(1,g,3,0,"ng-template",null,1,t.W1O)),2&r){const c=t.MAs(2);t.Q6J("ngIf",n.allDataFromCart)("ngIfElse",c)}},dependencies:[i.ez,i.sg,i.O5,i.H9,i.uU,m.rH],styles:[".btn-cart[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:10px;background-color:green;color:#fff;border:unset}.btnRemove[_ngcontent-%COMP%], .allRemove[_ngcontent-%COMP%]{border-radius:10px;background-color:green;color:#fff;border:unset}"]})}return o})()}}]);