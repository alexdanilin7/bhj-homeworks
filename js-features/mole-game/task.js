const hole_ids = ["hole1", "hole2", "hole3", 
                  "hole4", "hole5", "hole6", 
                  "hole7", "hole8", "hole9" ]
const holes = hole_ids.map(id=>document.getElementById(id));

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let dead_num = 0;
let lost_num = 0;
holes.forEach(
    hole=>{
        hole.onclick=function (){
            if(hole.classList.contains('hole_has-mole')){
                dead_num ++;
            }else{
                lost_num ++;
            }
            
            if(dead_num+lost_num===10){
                if(dead_num > lost_num){

                    alert("Победа!");
                    dead_num = 0;
                    lost_num = 0;
                }else{
                    dead_num = 0;
                    lost_num = 0;
                    alert("Порожение!");
                }   
            }
            dead.textContent = dead_num;
            lost.textContent = lost_num;
        }
        
    }
)
