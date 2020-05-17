const app = require('../app');
const assert = require('chai').assert;

//Results
loginSonuc = app.login();

describe('App.js fonsiyonlarinitest eder.', function(){
    it('login ekrani hosgeldiniz mesaji testi', function(){
        assert.equal(loginSonuc, "Merhaba Hosgeldiniz!", "[Fonksiyon Hosgeldiniz mesaji döndürür]");
    });

    it('login fonsksiyonu string döndürür', () => {
        assert.typeOf(loginSonuc, "String", "[login fonksiyonu string deger döndürür]");
    });
})