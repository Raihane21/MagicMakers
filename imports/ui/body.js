import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './body.html';
import './forum.js';
import "./accueil.js";
import "./produits.js";
import "./profil.js";


//redirections vers les autre pages
Session.set('site', 'forum');

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

Template.body.helpers({

    //template dynamique
    currentPage: function(site){
        return Session.get('site');
}});


















