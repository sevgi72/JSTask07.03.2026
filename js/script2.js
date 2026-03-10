let draggedId='';
let zones=document.querySelectorAll(".drop-zone");
let boxes=document.querySelectorAll(".box");
boxes.forEach(function(box) {
    box.ondragstart=function(){
        draggedId=box.id;
    }
});
zones.forEach(function(zone){
    zone.ondragover=function(e){
        e.preventDefault();
    }
    zone.ondrop=function(){
        let number=Number(draggedId.substring(3));
        if(number>=1 && number<=4 && "d1"===zone.id){
            zone.appendChild(document.getElementById(draggedId));
        }
        else if(number>=5 && number<=8 && "d2"===zone.id){
            zone.appendChild(document.getElementById(draggedId));
        }
        else if(number>=9 && number<=12 && "d3"===zone.id){
            zone.appendChild(document.getElementById(draggedId));
        }
        else{
            alert("wrong drop!!!")
        }

    }
})