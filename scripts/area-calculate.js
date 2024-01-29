function calculateTriangleArea(){
  const baseField = document.getElementById('base-field');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById('height-field');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;

  const areaShow = document.getElementById('triangle-area');
  areaShow.innerText = area;
}



// Rectangle
function calculateRectangleArea(){
  const weightField = document.getElementById('weight-field');
  const weightValueText = weightField.value;
  const weight = parseFloat(weightValueText);

  const lengthField = document.getElementById('length-field');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const area = weight * length;

  const areaShow = document.getElementById('rectangle-area');
  areaShow.innerText = area;
}




// Parallelogram
function calculateParallelogramArea(){
  const baseParallelogramField = document.getElementById('base-field-parallelogram');
  const baseParallelogramValueText = baseParallelogramField.value;
  const baseParallelogram = parseFloat(baseParallelogramValueText);

  const heightParallelogramField = document.getElementById('height-field-parallelogram');
  const heightParallelogramValueText = heightParallelogramField.value;
  const heightParallelogram = parseFloat(heightParallelogramValueText);

  const areaParallelogram = baseParallelogram * heightParallelogram;

  const areaShow = document.getElementById('parallelogram-area');
  areaShow.innerText = areaParallelogram;
}