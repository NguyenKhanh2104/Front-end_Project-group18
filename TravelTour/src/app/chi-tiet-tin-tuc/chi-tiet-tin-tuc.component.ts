import { Component, OnInit } from '@angular/core';
import chitiettintuc from "../_lists/chitiettintuc.json";
@Component({
  selector: 'app-chi-tiet-tin-tuc',
  templateUrl: './chi-tiet-tin-tuc.component.html',
  styleUrls: ['./chi-tiet-tin-tuc.component.css']
})
export class ChiTietTinTucComponent implements OnInit {
  listchitiettintuc:{img:String,title:String}[]=chitiettintuc;
  constructor() {

  }
  ngOnInit(): void {
  }

}
