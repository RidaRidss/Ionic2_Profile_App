import {Page, Alert, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  constructor(public nav: NavController) { }
homePrompt(){

 let prompt1 = Alert.create({
      title: 'Welcome Home',
      message: "Hello !"
    });
    this.nav.present(prompt1);
}
  userPrompt() {
let prompt = Alert.create({
  title: 'Welcome Message',
     message: "Hello From Ridss Mini Ionic App"});
     this.nav.present(prompt);
}