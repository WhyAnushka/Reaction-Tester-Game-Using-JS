        var start = new Date().getTime();
          
        //we use split function to split variable to array
        function randomColor(){
        var letter = "123456789ABCDEF".split('');
        var color ="#";
        for(var i =0;i<6;i++){
            color+=letter[Math.floor(Math.random()*16)];
        }
        return color;
        }
    function makeShape(){
        

        var top = Math.random() *350;
        var width = (Math.random() *250)+50;

        if(Math.random() > 0.5 ){
            document.getElementById("shape").style.borderRadius="50%";
        }
        else{
            document.getElementById("shape").style.borderRadius="0%";
        }

        document.getElementById("shape").style.backgroundColor=randomColor();
        document.getElementById("shape").style.top = top+"px";
        document.getElementById("shape").style.left = top+"px";
        document.getElementById("shape").style.height = width+"px";
        document.getElementById("shape").style.width = width+"px";
        document.getElementById("shape").style.display="block";
        start = new Date().getTime();

    }
    function appearAfterDelay(){
        setTimeout(makeShape , Math.random()*1000);
    }
    appearAfterDelay();
    document.getElementById("shape").onclick = function(){
        document.getElementById("shape").style.display="none";
        var end = new Date().getTime();
        var timeTaken  = (end-start)/1000;
        document.getElementById("timeTaken").innerHTML=timeTaken+"s";
        appearAfterDelay();
        
        
    }