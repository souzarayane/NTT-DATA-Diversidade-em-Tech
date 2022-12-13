import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://www.buobooks.com/wp-content/uploads/2020/11/Harry-Potter-e-o-Prisioneiro-de-Azkaban.jpg"
  contentTitle:string = "Harry Potter e o Prisioneiro de Azkaban"
  contentDescription:string = "Harry Potter e o Prisioneiro de Azkaban (no original em inglês Harry Potter and the Prisoner of Azkaban) é o terceiro livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling. Foi primeiramente publicado no Reino Unido pela editora londrina Bloomsbury em 1999."

  constructor() { }

  ngOnInit(): void {
  }

}
