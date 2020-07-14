window.addEventListener('load', ()=>{
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;

    function startPosition(){
        painting = true;
    };
    function finishedPosition(){
        painting = false;
    };
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.fillStyle = black;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    };

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListenere("mousemove", draw);

});