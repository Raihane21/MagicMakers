import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { produits } from '../../bdd/produits.js';
import "./ajoutproduit.html"

Template.ajoutproduit.events({
    //envoyer une nouvelle annonce en appuyant sur la touche entrée
    'submit #monformulaire'(event) {
        event.preventDefault();

        //on récupère les informations nécessaires
        var target = event.target;
        var titre = target.titre.value;
        var description = target.desc.value
        var date = new Date();
    
        //on insert les informations dans la base de donnée
        produits.insert({
            titre, description,
            createdAt: date,
           
        });
    },
});