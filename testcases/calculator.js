let homepage = require('../pages/homepage');

describe('Calculator Demo Suite',function(){

    it('adition test',function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('7');

        homepage.enterSecondNumber('2');

        homepage.clickGo();

        homepage.verifyResult('9');

        browser.sleep(3000);
    });


});