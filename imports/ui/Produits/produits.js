import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './produits.html';
import './produits.css' ;
import './produit.js'
import { produits } from '../../bdd/produits.js';

Template.produits.events({
    //envoyer une nouvelle annonce en appuyant sur la touche entrée
    'submit .new-annonce'(event) {
        event.preventDefault();

        //on récupère les informations nécessaires
        var target = event.target;
        var text = target.text.value;
        var date = new Date();

        //on insert les informations dans la base de donnée
        produits.insert({
            text,
            createdAt: date,
           
        });
    },
});