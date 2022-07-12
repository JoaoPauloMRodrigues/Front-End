import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

    url: string = 'http://google.com';
    urlImagem: string = 'https://digital.ihg.com/is/image/ihg/ihg-trip-ideas-lp-home-featured-nyc-400x200';

    getValor(){
      return 'metodo'
    }

  constructor() { }

  ngOnInit(): void {
  }

}
