import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent {
  public eventos: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('http://localhost:5098/api/evento').subscribe(
      response=>this.eventos=response,
      error => console.log(error),
    )

    // this.eventos = [
    //   {
    //     Tema: 'Angular',
    //     Local: 'Belo horizonte',
    //   },
    //   {
    //     Tema: 'Angular11',
    //     Local: 'Belém',
    //   },
    //   {
    //     Tema: 'Angular12',
    //     Local: 'RJ',
    //   },
    // ];
  }
}
