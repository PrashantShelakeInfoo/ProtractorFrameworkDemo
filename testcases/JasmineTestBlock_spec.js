describe("mySuite",function(){

    beforeAll(function(){

        console.log("lounching application...")
    })

    
    afterAll(function(){

        console.log("closing application...")
    })
    beforeEach(function(){

        console.log("This is login")

    })

    afterEach(function(){

        console.log("This is logout....")
    })

    it("myTest1",function()
    {

        console.log("this is myTest1...")

    })

    it("myTest2",function()
    {

        console.log("this is myTest2....")
        
    })
})