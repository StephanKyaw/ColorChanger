let isRGB = false;
let colorHistory = [];

// Start Change Color

function changeColor() {
   let color;

   if(isRGB) {

   let   r = Math.floor(Math.random() * 256);
         g = Math.floor(Math.random() * 256);
         b = Math.floor(Math.random() * 256);

      color = `rgb(${r}, ${g}, ${b})`;
   } else {
      color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
   }

   document.body.style.backgroundColor = color;
   document.getElementById('colorCode').textContent = color;
   document.getElementById('colorCode').style.color = color;

   addToHistory(color);
};

// End Change Color


// Start Toggle Colord

function toggleMode() {

   isRGB = !isRGB;   //true

   let button = document.querySelectorAll("button")[1];
   button.textContent = isRGB ? "Switch to HEX" : "Switch to RGB";

};

// End Toggle Color


// Start History function

function addToHistory(color) {
   if(colorHistory.length >= 5){
      colorHistory.pop();
   }
   colorHistory.unshift(color);
   

   let historyDiv = document.getElementById("history");
   historyDiv.innerHTML = "<strong>History:</strong>"

   colorHistory.forEach( x => {
      let span = document.createElement('span');
      span.textContent = x;
      span.className = "historyitems";
      span.style.backgroundColor = x;
      span.onclick = () => applyColor(x);

      historyDiv.appendChild(span);
   })
}; 

// End History function


// Start Apply Color

   function applyColor(color) {
      document.body.style.backgroundColor = color;
      document.getElementById("colorCode").textContent = color;
      document.getElementById("colorCode").style.color = color;
   }

// End Apply Color


// Start Copy function

   function copyColor() {
      let colorText = document.getElementById('colorCode').textContent;
      navigator.clipboard.writeText(colorText).then( () => {
         alert (`Copied: ${colorText}`);
      });
   }

// End Copy function