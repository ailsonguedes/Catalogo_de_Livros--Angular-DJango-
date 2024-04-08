import { Component, OnInit } from '@angular/core';
import { LivroData } from 'src/app/models/livroData';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  livroNome:string = "";
  livroAutor:string = "";
  livroLancamento:number = 0;
  livroTipo:string = "";
  livroGenero:string = "";
  livroEditora:string = "";
  anoEdicao:number = 0;
  numEdicao:number = 0;

  constructor(private service: LivroService) {

  }

  ngOnInit(): void {
    this.getLivro('memórias do subsolo');
  }

  getLivro(searchName: string){
    this.service.getLivro(searchName).subscribe({
      next: (res) => {

        res.forEach(livro => {
          this.livroNome = livro.nome;
          this.livroAutor = livro.nomeDoAutor;
          this.livroLancamento = livro.lancamento;
          this.livroTipo = livro.tipo;
          this.livroGenero = livro.genero;
          this.livroEditora = livro.editora;
          this.anoEdicao = livro.anoEdicao;
          this.numEdicao = livro.numEdicao;
        });

        console.log(res)
      },
      error: (err) => console.log('not found')
    })
  }

}
