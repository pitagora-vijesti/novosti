let triangle = document.getElementById("triangle");
let handleLeft = document.getElementById("handle-left");
let handleRight = document.getElementById("handle-right");
let handleBottom = document.getElementById("handle-bottom");
let container = document.getElementById("triangle-container");
let scale = 1;

handleLeft.addEventListener("mousedown", function(event) {
  let initialX = event.clientX;
  function move(event) {
    let newX = event.clientX;
    let deltaX = newX - initialX;
    scale += deltaX / 1000;
    container.style.borderLeftWidth = (50 * scale) + "px";
    initialX = newX;
  }
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", move);
  });
});

handleRight.addEventListener("mousedown", function(event) {
  let initialX = event.clientX;
  function move(event) {
    let newX = event.clientX;
    let deltaX = newX - initialX;
    scale += deltaX / 1000;
    container.style.borderRightWidth = (50 * scale) + "px";
    initialX = newX;
  }
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", move);
  });
});

handleBottom.addEventListener("mousedown", function(event) {
    let initialY = event.clientY;
    function move(event) {
      let newY = event.clientY;
      let deltaY = newY - initialY;
      scale += deltaY / 1000;
      container.style.borderBottomWidth = (100 * scale) + "px";
      initialY = newY;
    }
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", function() {
      document.removeEventListener("mousemove", move);
    });
});
  

