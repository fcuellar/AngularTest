import { Component, OnInit } from '@angular/core';
import { Klasse } from '../../model/klasse';
import { MyDataService } from '../../service/my-data.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyKategorieService } from '../../service/my-kategorie.service';
import { Kategorie } from '../../model/kategorie';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule],
})
export class FormComponent implements OnInit {
  klasse: Klasse;
  id: number;
  error: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mydate: MyDataService,
    private kategorieDataService: MyKategorieService
  ) {
    this.error = false;
    this.klasse = new Klasse(null, null, null);
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.klasse = this.mydate.findByID(this.id);
    }
  }

  ngOnInit() {}

  save() {
    if (!this.klasse.id || !this.klasse.fachname || !this.klasse.not) {
      this.error = true;
    } else {
      if (!this.id) {
        this.mydate.saveNote(this.klasse);
        this.klasse = new Klasse(null, null, null);
      
      }
      this.router.navigate([""]);
        //oder this.router.navigateByUrl("home");
      this.klasse = new Klasse(null, null, null);
    }
  }

   get kategories(): Kategorie[]{
     return this.kategorieDataService.kategories

   }
}
