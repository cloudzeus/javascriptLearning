// DOM selection
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

//We add all event handlers
a1.addEventListener("dblclick", checkO);
a2.addEventListener("dblclick", checkO);
a3.addEventListener("dblclick", checkO);
b1.addEventListener("dblclick", checkO);
b2.addEventListener("dblclick", checkO);
b3.addEventListener("dblclick", checkO);
c1.addEventListener("dblclick", checkO);
c2.addEventListener("dblclick", checkO);
c3.addEventListener("dblclick", checkO);

a1.addEventListener("click", check);
a2.addEventListener("click", check);
a3.addEventListener("click", check);
b1.addEventListener("click", check);
b2.addEventListener("click", check);
b3.addEventListener("click", check);
c1.addEventListener("click", check);
c2.addEventListener("click", check);
c3.addEventListener("click", check);

// Get all values from each element
let aValues = ['null','null','null'];
let bValues = ['null','null','null'];
let cValues = ['null','null','null'];
let totalLength = aValues.length + bValues.length + cValues.length;

//Single click function
function check(event){
    let whichDiv = event;
    console.log(whichDiv);   
    let myId = event.srcElement.id;
    const checkDiv = document.getElementById(myId);
//We set a timer to give time for the second click capture
    setTimeout(() => {
        checkDiv.innerHTML="X";
        checkDiv.classList.add("makeRed");
        checkDiv.classList.add("forbitclick");
      }, 10)
   
    console.log(myId);
    checkDiv.removeEventListener("click", check);
    let rowPosition = myId.slice(0,1);
    console.log(rowPosition);
    let cellPosition = myId.slice(1,2);
    console.log(cellPosition);
    if(rowPosition === 'a'){
        aValues[cellPosition-1]="X";
        console.log(aValues);
        for(var i=0; i<=aValues.length; i++){
            console.log(aValues[i]);
        }
    }
    if(rowPosition==='b'){
        bValues[cellPosition-1]="X";
        console.log(aValues);
    }
    if(rowPosition==="c"){
        cValues[cellPosition-1]="X";
        console.log(aValues);
    }
//We have set a time out for the results too to avoid issues with single and double clicks
    if(checkArrayValuesForNull){
        setTimeout(() => {
            checkResults();
          }, 2000);
       
    }

}

function checkO(e){
    let whichDiv = event;
    console.log(whichDiv);   
    let myId = event.srcElement.id;
    const checkDiv = document.getElementById(myId);
    checkDiv.innerHTML="O";
    checkDiv.classList.add("forbitclick");
    checkDiv.classList.remove("makeRed");
    checkDiv.removeEventListener("click", check);
    let rowPosition = myId.slice(0,1);
    console.log(rowPosition);
    let cellPosition = myId.slice(1,2);
    console.log(cellPosition);
    if(rowPosition === 'a'){
        aValues[cellPosition-1]="O";
    }
    if(rowPosition==='b'){
        bValues[cellPosition-1]="O";
    }
    if(rowPosition==="c"){
        cValues[cellPosition-1]="O";
    }
    if(checkArrayValuesForNull){
        setTimeout(() => {
            checkResults();
          }, 2000);
    }

    
}


let checkArrayValuesForNull = function(){
    if(!aValues.includes('null') && !bValues.includes('null') && !cValues.includes('null') ){
        return true;
    }
}
const checkResults = function(){
    
    let winningCombRowA = aValues[0]+aValues[1]+aValues[2];
    let winningCombRowB = bValues[0]+bValues[1]+bValues[2];
    let winningCombRowC = cValues[0]+cValues[1]+cValues[2];
    let winningCombCell1 = aValues[0]+bValues[0]+cValues[0];
    let winningCombCell2 = aValues[1]+bValues[1]+cValues[1];
    let winningCombCell3 = aValues[2]+bValues[2]+cValues[2];
    let winningComnCrossLeft = aValues[0]+bValues[1]+cValues[2];
    let winningCombCrossRight = aValues[2]+bValues[1]+cValues[0];

    if(winningCombRowA === 'OOO' || winningCombRowA === 'XXX' 
    || winningCombRowB === 'OOO' || winningCombRowB === 'XXX' 
    || winningCombRowC === 'OOO' || winningCombRowC === 'XXX' 
    || winningCombCell1 === 'OOO' || winningCombCell1 === 'XXX'
    || winningCombCell2 === 'OOO' || winningCombCell2 === 'XXX' 
    || winningCombCell3 === 'OOO' || winningCombCell3 === 'XXX'  
    || winningCombCrossRight === 'OOO' || winningCombCrossRight === 'XXX' 
    || winningComnCrossLeft === 'OOO' || winningComnCrossLeft === 'XXX'  ){

        
            alert('You WON!!!!');
            aValues = ['null','null','null'];
            bValues = ['null','null','null'];
            cValues = ['null','null','null'];
            a1.innerHTML='';
            a2.innerHTML='';
            a3.innerHTML='';
            b1.innerHTML='';
            b2.innerHTML='';
            b3.innerHTML='';
            c1.innerHTML='';
            c2.innerHTML='';
            c3.innerHTML='';
            a1.classList.remove('makeRed');
            a1.classList.remove('forbitclick');
            a2.classList.remove('makeRed');
            a2.classList.remove('forbitclick');
            a3.classList.remove('makeRed');
            a3.classList.remove('forbitclick');
            b1.classList.remove('makeRed');
            b1.classList.remove('forbitclick');
            b2.classList.remove('makeRed');
            b2.classList.remove('forbitclick');
            b3.classList.remove('makeRed');
            b3.classList.remove('forbitclick');
            c1.classList.remove('makeRed');
            c1.classList.remove('forbitclick');
            c2.classList.remove('makeRed');
            c2.classList.remove('forbitclick');
            c3.classList.remove('makeRed');
            c3.classList.remove('forbitclick');
        
       
    }else if (!aValues.includes('null') && !bValues.includes('null') && !cValues.includes('null') ){
        alert('Nobody Won');
        aValues = ['null','null','null'];
        bValues = ['null','null','null'];
        cValues = ['null','null','null'];
        a1.innerHTML='';
        a2.innerHTML='';
        a3.innerHTML='';
        b1.innerHTML='';
        b2.innerHTML='';
        b3.innerHTML='';
        c1.innerHTML='';
        c2.innerHTML='';
        c3.innerHTML='';
        a1.classList.remove('makeRed');
        a1.classList.remove('forbitclick');
        a2.classList.remove('makeRed');
        a2.classList.remove('forbitclick');
        a3.classList.remove('makeRed');
        a3.classList.remove('forbitclick');
        b1.classList.remove('makeRed');
        b1.classList.remove('forbitclick');
        b2.classList.remove('makeRed');
        b2.classList.remove('forbitclick');
        b3.classList.remove('makeRed');
        b3.classList.remove('forbitclick');
        c1.classList.remove('makeRed');
        c1.classList.remove('forbitclick');
        c2.classList.remove('makeRed');
        c2.classList.remove('forbitclick');
        c3.classList.remove('makeRed');
        c3.classList.remove('forbitclick');
    }

 
}