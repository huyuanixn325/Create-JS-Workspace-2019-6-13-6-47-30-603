function add (left, right) {
    return left + right;
}


function createMultiplyTable (firstNumber,secondNumber){
    var result="";
    var valid=isValid(firstNumber,secondNumber);
    if(valid){
        return result;
    }
    var multiplyArray=generateMultiplyArray(firstNumber,secondNumber);
    result = printMultiplyTable(multiplyArray);
    return result;
}

function printMultiplyTable(generateMultiplyArray){
    var result = "";
    for (let columnIndex = 0; columnIndex < generateMultiplyArray.length; columnIndex++) {
        for (let rowIndex = 0; rowIndex < generateMultiplyArray[columnIndex].length; rowIndex++) {
            result=result+generateMultiplyArray[columnIndex][rowIndex]+" ";
        }
        result=result+"\n";
    }
    return result;
}

function generateMultiplyArray(firstNumber,secondNumber){
   var generatedArray = [];
   var times = secondNumber - firstNumber +1;
   for (let rowIndex = 0; rowIndex < times; rowIndex++) {
       var row=[];
       for (let columnIndex = 0; columnIndex < rowIndex+1; columnIndex++) {
           var result = (columnIndex+firstNumber)*(rowIndex+firstNumber);
           row.push((columnIndex+firstNumber)+"*"+(rowIndex+firstNumber)+"="+result);
       }
       generatedArray.push(row); 
   }
   
   return generatedArray;
}

function isValid(firstNumber,secondNumber){

    return firstNumber<secondNumber;
}

module.exports = {isValid,
    generateMultiplyArray
    ,printMultiplyTable
};

