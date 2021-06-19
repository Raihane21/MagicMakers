import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './commentaire.html';
import { Commentaires } from '../../bdd/Commentaires.js' 

Template.commentaire.events({
    'click .remove'() {
        Commentaires.remove(this._id);
    }
});