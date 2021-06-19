import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './produits.html';
import './produits.css' ;
import './produit.js'
import { produits } from '../../bdd/produits.js';

Template.produits.events({
    //envoyer une nouvelle annonce en appuyant sur la touche entrée
    'submit #monformulaire'(event) {
        event.preventDefault();

        //on récupère les informations nécessaires
        var target = event.target;
        var titre = target.titre.value;
        console.log(titre)
        var description = target.description.value
        console.log(description)
        var date = new Date();
    
        //on insert les informations dans la base de donnée
        produits.insert({
            titre, description,
            createdAt: date,
           
        });
    },
});