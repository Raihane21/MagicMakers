import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './avis.html';
import './forum.css';
import { Commentaires } from '../../bdd/Commentaires.js' 

Template.avis.events({
    'submit .repondre'(event) {
        event.preventDefault();
        
        var newreponses = Template.currentData().message.reponses;
        newreponses.push({ test: event.target.reponse.value})
        
        Commentaires.update(Template.currentData().message._id, { $set: { reponses: newreponses }});
    },
    'click .removerep'(event){
        var newreponses = Template.currentData().message.reponses;
        newreponses.splice(event.target.getAttribute('data-value'), 1);
        console.log(newreponses);

        Commentaires.update(Template.currentData().message._id, { $set: { reponses: newreponses }});
    },
});
