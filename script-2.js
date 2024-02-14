// rectangleCalculate
function rectangleCalculate(){
      let firstValue = setupValueOne('pectangleInputWitdh') 
      let secondValue = setupValueTwo('pectangleInputLength')
      let areaOfRectangle = firstValue * secondValue
      innetTaxt('pectangleArea',areaOfRectangle)
}

function setupValueOne(valueOfNumbers){
    let setupFirstValue = document.getElementById(valueOfNumbers)
    let setupFirstTaxt = setupFirstValue.value;
    let valueOne = parseFloat(setupFirstTaxt)
    return valueOne;
}

function setupValueTwo(valueOfNumbersTwo){
    let setupSecondValue = document.getElementById(valueOfNumbersTwo)
    let setupSecondTaxt = setupSecondValue.value;
    let valueTwo = parseFloat(setupSecondTaxt)
    return valueTwo;
}
 
function innetTaxt(element,area){
    let innerTextIs = document.getElementById(element)
    let innetTaxtOfRectangle = innerTextIs.innerText = area;
    return innetTaxtOfRectangle

}

// parallelogramCalculate
function parallelogramCalculate(){
    let firstValueOfPara = setupValueOne('parallelogramInputBase') 
    let secondValueOfPara = setupValueTwo('parallelogramInputHight')
    let areaOfpara = firstValueOfPara * secondValueOfPara
    innetTaxt('parallelogramArea',areaOfpara)
    // console.log(areaOfpara)
}

// rhombusCalculate
function rhombusCalculate(){
    let firstValueOfRhombus = setupValueOne('rhombusInputH1')
    let secondValueOfRhombus = setupValueTwo('rhombusInputH2')
    let areaOfRom = 0.5 * firstValueOfRhombus * secondValueOfRhombus
    innetTaxt('rhombusArea',areaOfRom)
}
pentagonCalculate
function pentagonCalculate(){
    let firstValue = setupValueOne('pentagonInputP') 
    let secondValue = setupValueTwo('pentagonInputB')
    let areaOfRectangle = 0.5 * firstValue * secondValue
    innetTaxt('pentagonArea',areaOfRectangle)
}

// ellipseCalculate
function ellipseCalculate(){
    let firstValue = setupValueOne('ellipseInputA') 
    let secondValue = setupValueTwo('ellipseInputB')
    let areaOfRectangle = 3.1415 * firstValue * secondValue
    innetTaxt('ellipseArea',areaOfRectangle)
}


function bg(){
    let bgColor = document.getElementById('card-1');
    let bgColorIs = bgColor.classList.add('bg-gray-100')
    return bgColorIs
}
function noBg(){
    let bgColor = document.getElementById('card-1');
    bgColor.classList.remove('bg-gray-100')
}

// backgroundColor 2

function bg2(){
    let bgColor = document.getElementById('card-2');
    let bgColorIs = bgColor.classList.add('bg-gray-100')
    return bgColorIs
}
function noBg2(){
    let bgColor = document.getElementById('card-2');
    bgColor.classList.remove('bg-gray-100')
}

// backgroundColor 3
function bg3(){
    let bgColor = document.getElementById('card-3');
    let bgColorIs = bgColor.classList.add('bg-gray-100')
    return bgColorIs
}
function noBg3(){
    let bgColor = document.getElementById('card-3');
    bgColor.classList.remove('bg-gray-100')
}
// backgroundColor 4
function bg4(){
    let bgColor = document.getElementById('card-4');
    let bgColorIs = bgColor.classList.add('bg-gray-100')
    return bgColorIs
}
function noBg4(){
    let bgColor = document.getElementById('card-4');
    bgColor.classList.remove('bg-gray-100')
}
// backgroundColor 5
function bg5(){
    let bgColor = document.getElementById('card-5');
    let bgColorIs = bgColor.classList.add('bg-gray-100')
    return bgColorIs
}
function noBg5(){
    let bgColor = document.getElementById('card-5');
    bgColor.classList.remove('bg-gray-100')
}
// backgroundColor 6
function bg6(){
    let bgColor = document.getElementById('card-6');
    let bgColorIs = bgColor.classList.add('bg-gray-100')
    return bgColorIs
}
function noBg6(){
    let bgColor = document.getElementById('card-6');
    bgColor.classList.remove('bg-gray-100')
}