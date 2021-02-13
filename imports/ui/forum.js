import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './forum.html';
import './forum.css';
import './poste-forum.js';

Session.set('page', 'rien');   

Template.forum.helpers({
    //template dynamique
    currentPage: function(page){
        return Session.get('page');
}});

Template.forum.events({
    //bouton information
    'click .info'(event){
        Session.set('page', 'information');
    },
    'click .retour'(event){
        Session.set('page', 'rien');
    }
});