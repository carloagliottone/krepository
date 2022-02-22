import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user : string = "Nothing00";
  show : boolean = false;
  @ViewChild('about', {static: false}) aboutElement: ElementRef;

  today: Date;
  money: number;

  constructor() { 
    this.today = new Date();
    this.money = 57;
  }

  ngOnInit(): void {
  }

  showHidden(): void
  {
    this.show = !this.show
  }

  printElement(): void
  {
    console.log(this.aboutElement.nativeElement);
  }

  hello(field: HTMLSelectElement)
  {
    if (field.value == "1")
    {
      alert("Ciao");
    }
    else
    {
      console.log("Ciao");
    }
  }
}
