//this is the men object where the basic property is mortality which is true and inside there are members in an array

const men = {
    mortal:true,
    members:['Socrates','Parmenides'],
}
//Here we check if the first member is Socrates and if mortality is true 
if(men.members[0]==="Socrates"&& men.mortal){
    console.log("Socrates is mortal");
}
// the same here we have set a const with a list of cakes and we set the hasVanilla property to each of them as a boolean and we check
//if that condtions is true
const cakes ={
    vanillaCake:{
        hasVanilla:true,
        name:"This is a Vanilla Cake",
    },
    chocolateCake:{
        hasVanilla:false,
        name: "This is not a vanilla cake this is a chocolate cake",
    }
}

if(cakes.vanillaCake.hasVanilla){
    console.log(cakes.vanillaCake.name);
}