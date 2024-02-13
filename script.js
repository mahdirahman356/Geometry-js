
function  calculate(){
    let triangleInputBase = document.getElementById('triangle-inputBase');
    let triangBaseText = triangleInputBase.value;
    let base = parseFloat(triangBaseText)
    // console.log(base)
    let triangleInputHight = document.getElementById("triangle-inputHight")
    let triangHigttText = triangleInputHight.value;
    let hight = parseFloat(triangHigttText)
    // console.log(hight)

    let area = 0.5 * base * hight 
    // console.log(area)
    let valueOfTriangleTaxt = document.getElementById('value')
    let valueOfTriangl = valueOfTriangleTaxt.innerText = area
    console.log(valueOfTriangl)

}

