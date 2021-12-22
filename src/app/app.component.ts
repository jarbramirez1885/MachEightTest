import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { NbaServiceService } from '../app/service/nba-service.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NbaPlayers } from '../app/models/nba-players.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appNBA';

  constructor(private nbaService: NbaServiceService, 
    private fb: FormBuilder){
  }

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  players: NbaPlayers[] = [];
  dataSource: any = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'h_in', 'h_meters'];
  form: FormGroup = new FormGroup({});
  message: string = "No matches found";

  ngOnInit(){
    this.createForm();
    this.nbaService.getPlayers().subscribe(result => {
      if(result.values._length == 0){
        return this.message;
      }
      else{
        this.players = result.values;
        this.dataSource = new MatTableDataSource<NbaPlayers>(this.players);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator = this.paginator;

        return this.dataSource;
      }
    });

  }

  createForm(){
    this.form = this.fb.group({
      heightIn : ['', Validators.pattern("^[0-9]*$")]
    })
  }
  
  filterData(event: Event) {

    const filt = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: NbaPlayers, filter: string) => data.h_in.indexOf(filt.trim().toLowerCase()) != -1;
    this.dataSource.filter = filt.trim();

    if(this.dataSource.filteredData.length == 0){
        return this.message;
    }
    else{
      return this.dataSource;
    }

  } 


}
