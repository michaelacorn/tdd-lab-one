let { ChangeHandler } = require("./src/changehandler");
describe ('Change Handler' , function () {

 test('amountDue is set based on an argument', function (){
    let cash = new ChangeHandler({
        amountDue: 100,
        cashTendered: 0
    });
    expect(cash.amountDue).toBe(100);
});
    test('cashTendered is set to zero',function(){
        expect(cashTendered).toEqual(0);        
    })
    test('Inserting a quarter adds 25',function(){
        expect(quarter).toEqual(25);        
    })
    test('Inserting a dime adds 10',function(){
        expect(dime).toEqual(10);         
    })
    test('Inserting a nickel adds 5',function(){
        expect(nickel).toEqual(5);       
    })
    test('Inserting a penny adds 1',function(){
        expect(quarter).toEqual(25);         
    })
    test('Calling function multiple times continues to add on to the amount',function(){
        expect(ChangeHandler).toEqual(true); 
        expect(ChangeHandler).toEqual(>=1);       
    })
    test('Returns true if cashTendered more than amountDue',function(){
        expect(cashTendered > amountDue).toEqual(true);        
    })
    test('Returns false if cashTendered less than amountDue',function(){
        expect(amountDue > cashTendered).toEqual(true);        
    })
    test('Returns true if cashTendered equal to amountDue',function(){
        expect(cashTendered === amountDue).toEqual(true);   
    })
    test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2',function(){
        expect(giveChange).toEqual(32);
        expect(quarter).toEqual(1);
        expect(dime).toEqual(0);
        expect(nickles).toEqual(1);
        expect(pennies).toEqual(2);          
    })
    test('10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0',function(){
        expect(giveChange).toEqual(10);
        expect(quarter).toEqual(0);
        expect(dime).toEqual(1);
        expect(nickles).toEqual(0);
        expect(pennies).toEqual(0);      
    })
    test('27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2',function(){
        expect(giveChange).toEqual(27);
        expect(quarter).toEqual(1);
        expect(dime).toEqual(0);
        expect(nickles).toEqual(0);
        expect(pennies).toEqual(2);       
    })
    test(' 68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3',function(){
        expect(giveChange).toEqual(68);
        expect(quarter).toEqual(2);
        expect(dime).toEqual(1);
        expect(nickles).toEqual(1);
        expect(pennies).toEqual(3);       
    })

})