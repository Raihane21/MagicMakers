import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './produits.html';
import './produits.css' ;
import './produit.js'
import { produits } from '../../bdd/produits.js';

Template.produits.helpers({
    mesproduits: function() {
        return produits.find({},{});
    }
});