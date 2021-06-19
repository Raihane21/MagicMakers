import { Template } from 'meteor/templating';

import "./accueil.html";
import "./accueil.css"; 
import "./template.js";
import "../Produits/produits.js"; 

Session.set('menu', '');

Template.accueil.events({
    'click .afficher-le-menu'(event){

        if (Session.get('menu')==='menu') {Session.set('menu','')}
        else {Session.set('menu', 'menu')} 

}});   

Template.accueil.helpers({

//template dynamique
menuonoff: function(menu){
    return Session.get('menu');
}});