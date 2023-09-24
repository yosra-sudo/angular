import { Component } from '@angular/core';
import {Fournisseur} from '../core/fournisseur';
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  hide=false;
  
  fournisseurs: Fournisseur[] = [
    { idFournisseur: 105,code: 'A104B89',libelle: 'MyTeck'},
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}]
    toggleHide() {
      this.hide = !this.hide;
    }
}
