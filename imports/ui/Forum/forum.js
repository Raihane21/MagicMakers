import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './forum.html';
import './forum.css';
import './poste-forum.js';
import './commentaire.js';
import './avis.js';
import { Commentaires } from '../../bdd/Commentaires.js' 

Session.set('page', 'rien');
Session.set('msg', '');
Template.forum.events({
    //bouton information
    'click .info'(event){
        Session.set('page', 'information');
    }
});

Template.forum.events({
    'click .retour'(event){
        Session.set('page', 'rien');
    },
    'click .open'(event){
        console.log(this._id);
        Session.set('msg', this);
    },
    'click .avis'(event){
         Session.set('page', 'avis');
    },
});

Template.forum.helpers({
    //template dynamique
    currentPage: function(page){
        return Session.get('page');
    },
    message: function(page){
        return Session.get('msg');
    },
    //récupères les annonces et les renvoies
    commentaires: function(){
        return Commentaires.find({},{});
    }
});

