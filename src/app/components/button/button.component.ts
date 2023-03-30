import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() location!: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  getLocation() {
    this.location = this.location.toLowerCase();
  }

  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit();
  }
}
