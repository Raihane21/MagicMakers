import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './commentaire.html';


Template.commentaire.events({
    "submit repondre" (event) {
        var newreponses = reponses;
        console.log("test")
        newreponses.push({ test: "truc"})
        commentaires.update(this._id, { $set: {contact: nouveau_contact }});
    }
});