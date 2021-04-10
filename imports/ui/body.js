import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Commentaires } from '../bdd/Commentaires.js'
import './body.html';
import './forum.js';
import "./accueil.js";
import "./produits.js";
import "./profil/profil.js";


//redirections vers les autre pages
Session.set('site', 'accueil');

Template.body.events({
    'click .aller-vers-profil'(event){
        Session.set('site', 'profil');
    }});

Template.body.events({
    'click .aller-vers-accueil'(event){
        Session.set('site', 'accueil');
    }});
Template.body.events({
    'click .aller-vers-accueil'(event){
        Session.set('site', 'accueil');
    }});
Template.body.events({
    'click .aller-vers-produits'(event){
        Session.set('site', 'produits');
    }});

Template.body.events({
    'click .aller-vers-forum'(event){
        Session.set('site', 'forum');
    }});   

Template.body.helpers({

    //template dynamique
    currentPage: function(site){
        return Session.get('site');
}});


















