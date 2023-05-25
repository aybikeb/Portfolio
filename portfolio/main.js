// Get the cursor element
var cursor = document.getElementById("cursor");

// Listen for mouse movement
document.addEventListener("mousemove", function(e) {
  // Update the position of the cursor
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

