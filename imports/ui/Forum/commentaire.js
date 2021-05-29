import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './commentaire.html';
import { Commentaires } from '../../bdd/Commentaires.js' 


Template.commentaire.events({
    'submit .repondre'(event) {
        event.preventDefault();
        
        var newreponses = this.reponses;
        console.log(this.reponses)
        console.log("test")
        newreponses.push({ test: event.target.reponse.value})
        
        Commentaires.update(this._id, { $set: { reponses: newreponses }});
    },

    
    'click .remove'() {
        Commentaires.remove(this._id);
        }
});

