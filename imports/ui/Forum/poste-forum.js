import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './poste-forum.html';
import './forum.css';
import { Commentaires } from '../../bdd/Commentaires.js' 

Template.body.events({
    //envoyer une nouvelle annonce en appuyant sur la touche entrée
    'submit .commentaire'(event) {
        event.preventDefault();

        //on récupère les informations nécessaires
        var target = event.target;
        console.log(target)
        var text = target.com.value;
        console.log(text)
        var reponses = [];
        //var reponse = {username};
        

        //on insert les informations dans la base de donnée
        Commentaires.insert({
            text,
            reponses,
            
        });
    },
});

Template.body.helpers({

    //récupères les annonces et les renvoies
    commentaires: function(){
        return Commentaires.find({},{});
    }
});