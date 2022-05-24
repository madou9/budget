let inventaire = document.getElementById('inventaire');
let depInventaire = document.getElementById('depInventaire')
let budget = document.getElementById("budget");
let sommes = document.getElementById("calculate");
let budgetResume = document.getElementById("budget-resume");
let expenseResume = document.getElementById("expense-resume");
let balance = document.getElementById("balance");
let expense = document.getElementById("expense");
let montant = document.getElementById("amount");
let depense = document.getElementById("add_expense");
let titreEl = document.getElementById("title-cell");
let valueEl = document.getElementById("value-cell");
let editEl = document.getElementById("edit-cell");
let expenseId = document.getElementById("expenseId");
let globalExpense = 0;
let calcul = 0;
let actu = 0;
let i = 0;
let affiche = []

class addTitle {
    constructor(nomDepense, prixDepense) {
        this.nomDepense = nomDepense,
         this.prixDepense = prixDepense;
        this.id = `depense${i}`;
    }

    effacer(element) {
        //Supprimer dans l'array
        let index = parseInt(element.getAttribute('data-el'));
        affiche.splice(index, 1);
        calculatrice();

    }

    editer(element) {
        let index = parseInt(element.getAttribute('data-el'));
        expenseId.value = index;
        expense.value = affiche[index].nom;
        montant.value = affiche[index].prix;
    }


}

let ui = new addTitle();



function calculate() {
    calcul = Number(budget.value);
    if (calcul) {
        calculatrice();
    }

};

function calculatrice() {
    let totalDepense = 0;
    let depenseHTML = '';
    let i = 0;
    for (aff of affiche) {
        totalDepense += parseInt(aff.prix);
        depenseHTML += `
            <div id = ${i} class="row">
                <div class="col s4 center">${aff.nom}</div>
                <div class="col s4 center">${aff.prix}</div>
                <div class="col s4 center">
                    <button class="editer" data-el='${i}'><i  class="material-icons">edit</i></button>
                    <button class="effacer" data-el='${i}'><i  class="material-icons">delete</i></button>
                </div>
            </div>
        `;
        i++;
    }

    diff = calcul - totalDepense;

    budgetResume.innerHTML = `${calcul} CFA`;
    expenseResume.innerHTML = `${totalDepense} CFA`;
    balance.innerHTML = `${diff} CFA`;
    depInventaire.innerHTML = depenseHTML;
    expense.value = montant.value = budget.value = expenseId.value = '';
}


function display() {
     
    if(expenseId.value != ''){
        affiche[expenseId.value].nom = expense.value;
        affiche[expenseId.value].prix = parseInt(montant.value);
    }else{
        affiche.push({ nom: expense.value, prix: parseInt(montant.value) }); 
    }
   calculatrice();

}



sommes.addEventListener('click', calculate);
depense.addEventListener('click', display);
inventaire.addEventListener('click', function (e) {
    if (e.target.parentElement.classList.contains('effacer')) {
        ui.effacer(e.target.parentElement);

    } else if (e.target.parentElement.classList.contains('editer')) {
        ui.editer(e.target.parentElement);
    }



})
