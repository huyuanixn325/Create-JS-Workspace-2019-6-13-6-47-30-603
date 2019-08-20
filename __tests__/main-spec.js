const {isValid,generateMultiplyArray,printMultiplyTable}=require('../main')


it('should numbers be valid',()=>{
    //given
    var firstNumber=2;
    var secondNumber=3;
    //when
    var result = isValid(firstNumber,secondNumber);
    //then
    expect(result).toBe(true);
})

it('should generated array with table items',()=>{
    //given
    var firstNumber=2;
    var secondNumber=3;
    //when
    var generatedArray = generateMultiplyArray(firstNumber,secondNumber);

    //then
    expect(generatedArray[0][0]).toBe("2*2=4");
     expect(generatedArray[1][0]).toBe('2*3=6');
     expect(generatedArray[1][1]).toBe('3*3=9');


})


it("should generated a table",()=>{
      //given
      const array = [];
    array[0] = [];
    array[0][0] = "2*2=4";
    array[1]=[];
    array[1][0]="2*3=6";
    array[1][1]="3*3=9";
      //when
      var result = printMultiplyTable(array);
      //then
      expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
})
// it ('should add two numbers', () => {
//     expect(add(2, 3)).toBe(5);
// });


// it('should print a table',()=>{
//     //given
//     const firstNumber = 1;
//     const secondNumber = 1;
//     //when
//     const result =createMultiplyTable(firstNumber,secondNumber);

//     //then
//     const target="1*1=1";
//     expect(result).toBe(target);
// })


// it('should print a table',()=>{
//     //given
//     const firstNumber = 2;
//     const secondNumber = 4;
//     //when
//     const result =createMultiplyTable(firstNumber,secondNumber);

//     //then
//     const target="2*2=4 2*3=6 3*3=9 2*4=8 3*4=12 4*4=16";
//     expect(result).toBe(target);
// })

// it('should print a table',()=>{
//     //given
//     const firstNumber = 4;
//     const secondNumber = 2;
//     //when
//     const result =createMultiplyTable(firstNumber,secondNumber);

//     //then
//     const target=null;
//     expect(result).toBe(target);
// })

// it("should print true or false",()=>{
//     //given
//     const firstNumber = 4;
//     const secondNumber = 2;
//     //when 
//     const  result = isValidNumber(firstNumber,secondNumber);
//     //then
//     expect(result).toBe(false);
// })

// it("should print array",()=>{
//     //given
//     const firstNumber=2;
//     const secondNumber=3;
//     //when
//     const result = Calculate(firstNumber,secondNumber);
//     //then
//     const array=new Array;
//     array[2][2]=4;
//     array[2][3]=6;
//     array[2][4]=8;
//     array[3][3]=9;
//     expect(result).toBe(array);
// })