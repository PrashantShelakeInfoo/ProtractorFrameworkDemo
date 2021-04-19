describe("mySuite",function(){

    it("Add new User",function(){

        browser.get("https://www.trycatchclasses.com/code/demo/angular_crud/#");
        browser.sleep(3000);

        element(by.css('span[ng-click="addUser()"]')).click();//add new user

        //Input Box /Text Box
        element(by.model("UserFirstname")).sendKeys("Amar");
        element(by.model("UserLastname")).sendKeys("sing");
        element(by.model("UserType")).sendKeys("5");

        element(by.model("UserActive")).click();//check box

        element(by.css('[ng-click="AddUpdateUser()"]')).click();//save button

        browser.sleep(5000);

        let alertmsg=browser.switchTo().alert();//swith to alert

        expect(alertmsg.getText()).toEqual("Error in adding User record");//validation

        alertmsg.accept();//Ok
    })
})