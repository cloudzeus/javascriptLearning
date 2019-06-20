const men =[{name:'Socrates', mortal: true},{name:'Évripedes',mortal: true},{name: 'Achiles',mortal: false}];

//Check if there is a name we search inside this array of objects

let howManyMen = men.length; 

function tellMeIsHeInTheList(hisName) {
    let listObject={};
    let listStatus = false;
    let mortalStatus;
// first we chech if the given name is in out list    
    for (let i = 0; i < howManyMen; i++) {
        if (men[i].name === hisName) {
            listObject = men[i];
            listStatus = true;
        }
    }
// if the given name is in our list then we check his mortal status
    if(listStatus){
        mortalStatus= listObject.mortal;        
        if(mortalStatus){
            console.log("Yes he is mortal");
        }else{
            console.log("Yes he is importal");
        }
    }else{
        console.log("Sorry we haven't find this person inside our list please try again")
    }

};
// here we have 2 names with different mortal status
tellMeIsHeInTheList('Socrates');
tellMeIsHeInTheList('Achiles');
tellMeIsHeInTheList('Giannis');


//let's do the next bonus project regarding the cakes and if they have chocolate
const myCakes =
    [

        { name: "vanilla dream", hasChocolate: false, flavor: "Madadascar vanilla pandesia" },
        { name: "Strawbery full", hasChocolate: true, flavor: "the classic combination of strawberry with chocolate" }
    ]
// here we are about to use the filter method to get the object with the requested name
let isItInList;
function SearchCakes(cakeName) {
    let theSelectedCake = myCakes.filter(isIntheList => { return isIntheList.name === cakeName });
// Here we check if there is an object with the requested name
    if (theSelectedCake.length > 0) {
// Now we check if the selected cake has chocolate
        let SelectedItem = theSelectedCake[0]
        if (SelectedItem.hasChocolate) {
            console.log("the cake has chocolate and the flavor is " + SelectedItem.flavor);

        }
        else {
            console.log("the selected cake doesn't have chocolate and the flavor is " + SelectedItem.flavor);
        }
    } else {
        console.log("there is no cake with this name");
    }
}
//here we call the function
var myResults = SearchCakes('vanilla dream');

   
    
    
   