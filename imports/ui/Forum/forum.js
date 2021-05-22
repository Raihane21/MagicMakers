import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './forum.html';
import './forum.css';
import './poste-forum.js';
import './commentaire.js';
import { Commentaires } from '../../bdd/Commentaires.js' 

Session.set('page', 'rien');    
Template.forum.events({
    //bouton information
    'click .info'(event){
        Session.set('page', 'information');
    }});

Template.forum.events({
    'click .retour'(event){
        Session.set('page', 'rien');
    }});
    


 Template.forum.helpers({

        //template dynamique
        currentPage: function(page){
            return Session.get('page');

},
    //récupères les annonces et les renvoies
    commentaires: function(){
        return Commentaires.find({},{});
    }
});

