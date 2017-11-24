import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
private items : any;
  constructor(private route: ActivatedRoute, private http : HttpClient) { }

  ngOnInit() {
    let cid = this.route.snapshot.paramMap.get('cid');
    let url = '/assets/stub/items/item'+cid+'.json'
    this.http.get(url).subscribe(data => {
      this.items = data;
    });
  }
  }

