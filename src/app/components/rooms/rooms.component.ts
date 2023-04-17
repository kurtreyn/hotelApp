import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../../roomsInterface';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: ROOMS[] = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  private loadRooms() {
    this.service.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

}
