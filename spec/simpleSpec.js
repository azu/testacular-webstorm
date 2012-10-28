describe("A suite", function(){
    it("contains spec with an expectation", function(){
        var testValue = "testValue";
        expect(testValue).toBe(testValue);
    });
    it("dom test", function(){
        var divTag = document.createElement("div");
        var nodeName = divTag.nodeName;
        // why??
        // dump function

        dump("console.log" , nodeName);// like console.log

        expect(nodeName).toMatch(/div/i);
    });
});


