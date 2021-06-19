import "./produit.html"
import "./produit.css"
import { produits } from '../../bdd/produits.js';

Template.produit.events({
    'click .removeproduit'(event) {
        event.preventDefault();
        produits.remove(this.produit._id);
    },
});