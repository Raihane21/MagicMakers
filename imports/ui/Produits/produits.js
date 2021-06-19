import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './produits.html';
import './produits.css' ;
import './produit.js'
import { produits } from '../../bdd/produits.js';

Template.produits.onCreated(function() {
    Session.set('mode', Template.currentData().mode)
})

Template.produits.helpers({
    mesproduits: function() {
        return produits.find({},{});
    },
    candelete: function() {
        if (Session.get('mode') === 1) {
            return false;
        } else {
            return true;
        }
    }
});