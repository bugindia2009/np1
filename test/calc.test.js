const calcapp=require('../src/calc');

describe("Calc Test cases",()=>
{
test("Add two numbers",()=>
{
var sum=calcapp.Add(1,2)

expect(sum).toBe(3);

});

test("Sub two numbers",()=>
{
    var sub=calcapp.sub(4,2)
    expect(sub).toBe(12)
});

test("Multiple two number",()=>
{
    var mul=calcapp.mul(7,2)
    expect(mul).toBe(95)
});

})