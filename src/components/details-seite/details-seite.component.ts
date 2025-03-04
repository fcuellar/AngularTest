import { Component, OnInit } from '@angular/core';
import { Klasse } from '../../model/klasse';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from '../../service/my-data.service';

@Component({
  selector: 'app-details-seite',
  templateUrl: './details-seite.component.html',
  styleUrls: ['./details-seite.component.css'],
  standalone: true,
})
export class DetailsSeiteComponent implements OnInit {
  klasse: Klasse;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mydate: MyDataService
  ) { 
    this.klasse = new Klasse(null, null, null,null);
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.klasse = this.mydate.findByID(this.id);
    }
  }

  ngOnInit() {
  }

}