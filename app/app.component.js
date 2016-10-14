"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.mangluu = [{ 'id': -1, 'ten': "dsfasdf", 'email': "sfasdf", 'tieude': "asdfasdf", 'noidung': "sdfafdadf" }];
        this.errors = [];
        this.id = 0;
    }
    AppComponent.prototype.themmang = function (ten, email, tieude, noidung) {
        this.errors = [];
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(tieude);
        if (email == "") {
            this.errors.push('Bố quên điền í mèo kìa!!!');
        }
        else if (!re.test(email)) {
            this.errors.push('Điền í mèo cho đúng vào bố à @@');
        }
        if (ten == "") {
            this.errors.push('Bố chưa điền tên rồi biết bố là ai?');
        }
        if (tieude == "") {
            this.errors.push('Haizzz điền tiêu đề !!!!!!!!!!!');
        }
        if (noidung == "") {
            this.errors.push('không có nội dung rồi gửi tin nhắn gì?');
        }
        if (this.errors.length == 0) {
            var item = { 'id': this.id++, 'ten': ten, 'email': email, 'tieude': tieude, 'noidung': noidung };
            this.mangluu.push(item);
        }
    };
    AppComponent.prototype.edit = function (item) {
        this.chon = item;
        console.log(this.chon);
    };
    AppComponent.prototype.delete = function (item) {
        var index = -1;
        for (var i = 0, len = this.mangluu.length; i < len; i++) {
            if (this.mangluu[i].id === item.id) {
                index = i;
                break;
            }
        }
        this.mangluu.splice(index, 1);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map