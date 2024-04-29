import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {
  @Input() tituloTxt: string = '';
  @Input() iconClass: string = '';
  @Input() subtituloTxt: string = '';

  ngOnInit(): void {}

  constructor(private router: Router) {}

  listar(): void {
    this.router.navigate([`/${this.tituloTxt.toLocaleLowerCase()}/lista`]);
  }
}
