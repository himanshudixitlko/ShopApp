import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  results: any;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/stub/ItemCatagory.json').subscribe(data => {
      this.results = data;
    });
  }

}
