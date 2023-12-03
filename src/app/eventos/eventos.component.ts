import { Component, Input, TemplateRef } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  // providers: [EventoService],
})
export class EventosComponent {
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  modalRef?: BsModalRef;
  widthImg: number = 150;
  marginImg: number = 2;
  showImg: boolean = true;

  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista
      ? this.filtrarEventos(this.filtroLista)
      : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();

    return this.eventos.filter(
      (evento) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.spinner.show();
    this.eventoService.getEventos().subscribe({
      next: (_eventos: Evento[]) => {
        (this.eventos = _eventos), (this.eventosFiltrados = this.eventos);
      },
      error: (error) => {
        this.spinner.hide();
        this.toastr.error('Falha ao tentar buscar os eventos!', 'Erro');
      },
      complete: () => this.spinner.hide(),
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(msgTitle: string, msgDescription: string): void {
    this.modalRef?.hide();
    this.toastr.success(msgDescription, msgTitle);
  }

  decline(): void {
    this.modalRef?.hide();
  }
}