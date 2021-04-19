describe("ExpectDemo",function(){

    it("ExpectTest",function(){

        //test1

        //  let x=100;
        // // expect(x).toBe(100);
        // // expect(x).not.toBe(100);

        // expect(x).toEqual(100);
        // expect(x).not.toEqual(150);

        //test2

      //  let x=[10,20,30];
       // expect(x).toBe([10,20,30]);//Failed
       // expect(x).toEqual([10,20,30]);//passed

 
       //test 3

    //    let x=[10,20,30,40];
    //    let y=x;
    //    expect(x).toBe(y);


       //test 4

    //    browser.get("https://angularjs.org/");
    //    expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");

    //    expect(browser.getTitle()).toContain("AngularJS");

       //test 5
        
    //    let arr=[10,20,30,40,50];
    //    expect(arr).toContain(50);
    //    expect(arr).toContain(100);//failded
    //    expect(arr).not.toContain(100);//passed

       //test 6

    //    let names=["prashant","mahesh","sushant"];
    //    expect(names).toContain("Sushant");//failed expect sushant.

        //Test 7

        // let value=100;
        // expect(value).toBeGreaterThan(50);
        // expect(value).toBeLessThan(200);

        //test 8

        let value=20;
       // expect(value).toBeNaN();//failed because 20 should be Not A Nummber (NAN)

       expect(value).toBeNull();




    })
})