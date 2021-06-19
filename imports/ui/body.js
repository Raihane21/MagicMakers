import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Commentaires } from '../bdd/Commentaires.js'
import './body.html';
import './Forum/forum.js';
import "./Accueil/accueil.js";
import "./Produits/produits.js";
import "./Produits/produitspage.js";
import "./Profil/profil.js";
import { produits } from '../bdd/produits.js';

//redirections vers les autre pages
Session.set('site', 'accueil');

Template.body.events({
    'click .aller-vers-profil'(event){
        Session.set('site', 'profil');
    },
    'click .aller-vers-accueil'(event){
        Session.set('site', 'accueil');
    },
    'click .aller-vers-produits'(event){
        Session.set('site', 'produitspage');
    },
    'click .aller-vers-forum'(event){
        Session.set('site', 'forum');
}});   

Template.body.helpers({

    //template dynamique
    currentPage: function(site){
        return Session.get('site');
}});


















