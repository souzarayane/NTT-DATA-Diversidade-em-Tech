import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
   }

  ngOnInit(): void {
  }

}
