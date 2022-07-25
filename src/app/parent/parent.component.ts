import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  // @ts-ignore
  @Input() moviesFromParent: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
