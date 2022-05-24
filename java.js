// function calculate(){
//     calcul = Number( budget.value);
//     if (Number(budget.value)){
//         budgetResume.innerHTML = `${calcul } CFA`
//     refreshBalance()
//     } else {
//         alert("veuillez entrer une valeur")
//     }
// };
//  sommes.addEventListener('click',calculate)

//  function refreshBalance(){
//      balance.innerHTML = `${calcul + Number(expenseResume.textContent)}`
//  };



//  class addTitle {
//     constructor(nomDepense, prixDepense){
//         this.nomDepense = nomDepense,
//         this.prixDepense = prixDepense;
//         this.id= `depense${i}`;
//     }

//     effacer(){
//         ((document.getElementById(this.id)).parentElement).removeChild(document.getElementById(this.id))
//         globalExpense -= this.prixDepense;
//         refreshBalance()
//     }

//  editer(){
//         globalExpense -= this.prixDepense;
//         expense.value = this.nomDepense;
//         montant.value = this.prixDepense;
//         expenseResume.textContent = globalExpense;
//         ((document.getElementById(this.id)).parentElement).removeChild(document.getElementById(this.id))
//         console.log((document.getElementById(this.id)).parentElement)
//         refreshBalance();
//     }


// }



 

// //   function addExpense(){
// //       globalExpense += Number(montant.value);
// //       expenseResume.textContent = globalExpense;
// //       refreshBalance()
// //   };


// //   inventaire.removeChild(document.getElementById("depense2"))

//     depense.addEventListener('click',()=>{
   
//     let nouvelleDepense = new addTitle(expense.value, montant.value);
//     let depenseAffiche = document.createElement('div')
//     depenseAffiche.innerHTML =`<div id = ${nouvelleDepense.id} class="row">
//     <div class="col s4 center">${nouvelleDepense.nomDepense}</div>
//     <div class="col s4 center">${nouvelleDepense.prixDepense}</div>
//     <div class="col s4 center">
//         <button class="editer"><i  class="material-icons">edit</i></button>
//         <button class="effacer"><i  class="material-icons">delete</i></button>
//     </div>
// </div>`

//    inventaire.appendChild(depenseAffiche)
//    i++;
//    console.log(document.querySelectorAll(".effacer"))
// });


// document.querySelectorAll(".effacer").forEach((element)=>{
//     element.addEventListener("click",()=>{
//     console.log(this)
//     })
// } )



// document.querySelectorAll(".effacer").addEventListener('click',addTitle.effacer())


//  inventaire.removeChild(document.getElementById("depense2"))

//     depense.addEventListener('click',()=>{


// });




// function addExpense(){
//     globalExpense = Number(montant.value);
//     balance.textContent = `${calcul - globalExpense} fcfa` 
//     if (Number(montant.value)){
//         expenseResume.textContent = `${globalExpense} fcfa`   
//     } 
// }

// document.querySelectorAll(".effacer").forEach((element)=>{
//     element.addEventListener("click",()=>{
//     console.log(this)
//     })
// } )