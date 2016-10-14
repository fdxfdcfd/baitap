import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    constructor() { }
    mangluu = [{ 'id': -1, 'ten': "dsfasdf", 'email': "sfasdf", 'tieude': "asdfasdf", 'noidung': "sdfafdadf" }];
    errors = [];
    id = 0;
    chon: any;
    themmang(ten, email, tieude, noidung) {
        this.errors = [];
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(tieude);
        if (email == "") {
            this.errors.push('Bố quên điền í mèo kìa!!!');
        } else if (!re.test(email)) {
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
    }
    edit(item) {
        this.chon = item;

        console.log(this.chon);
    }
    delete(item) {
        var index = -1;
        for (var i = 0, len = this.mangluu.length; i < len; i++) {
            if (this.mangluu[i].id === item.id) {
                index = i;
                break;
            }
        }
        this.mangluu.splice(index, 1);
    }
    ngOnInit() {
    }
}
