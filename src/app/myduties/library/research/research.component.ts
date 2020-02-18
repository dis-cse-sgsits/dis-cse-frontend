import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { previousIssueHistoryBook } from '../bookDataObj';
import { previousIssueHistoryThesis } from '../thesisDataObj';
import { error } from 'util';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  searchBy:number;
  showSearchedRecord:boolean=false;
  error: string=null;
  errorMsg:string=null;
  showError:boolean = false;
  
<<<<<<< HEAD
  selected:optionSearch = new optionSearch(1 ,'bookId');
  options = [
     new optionSearch(1, 'bookId' ),
     new optionSearch(2, 'thesisId' ),
     new optionSearch(3, 'username' ),
  ];
=======
 
>>>>>>> dd6f97357c054b47ae307ab4a656273031a51c0e
  searchTerm:any=null;
  booksRes:previousIssueHistoryBook[];
  thesisRes:previousIssueHistoryThesis[];
  usernameRes:previousIssueHistoryBook[];
  constructor(private service: LibraryService) { }

  ngOnInit() {
    this.searchBy=1;
<<<<<<< HEAD
    this.showError = false;
  }
 
=======
  }

>>>>>>> dd6f97357c054b47ae307ab4a656273031a51c0e
  onSelect(event:any) { 
    //console.log(optionId);
    // this.selected = null;
    // for (var i = 0; i < this.options.length; i++)
    // {
    //   if (this.options[i].id == optionId) {
    //     this.selected = this.options[i];     
    //     this.searchBy = this.options[i].id;
      
    //   }
    // }
    this.searchBy = event.target.value;
<<<<<<< HEAD
=======

>>>>>>> dd6f97357c054b47ae307ab4a656273031a51c0e
}
 
findBy(typedValue)
  {
  //  console.log(this.searchBy);
    this.searchTerm = typedValue;
   // console.log(this.searchTerm);
    if(this.searchBy==1)
    {
      this.service.getPreviousIssuesByBookId(this.searchTerm).subscribe((res:previousIssueHistoryBook[])=>{
        this.booksRes = res;
        this.showError = false;
        this.showSearchedRecord=true;
       // console.log(this.booksRes);
      },((error)=> {this.errorMsg = error;
        this.showError=true;
      this.showSearchedRecord= false;}));
    }
<<<<<<< HEAD
    if(this.searchBy==2)
=======
   if(this.searchBy==2)
>>>>>>> dd6f97357c054b47ae307ab4a656273031a51c0e
    {
      this.service.getPreviousIssuesByThesisId(this.searchTerm).subscribe((res:previousIssueHistoryThesis[])=>{
        this.thesisRes = res;
        this.showError = false;
        this.showSearchedRecord=true;
      },((error)=> {this.errorMsg = error;
        this.showError=true;
      this.showSearchedRecord= false;}));
    }
<<<<<<< HEAD
    if(this.searchBy==3)
=======
    if(this.searchBy==3) 
>>>>>>> dd6f97357c054b47ae307ab4a656273031a51c0e
    {
        this.service.getPreviousIssuesByUsername(<string>this.searchTerm).subscribe((res:previousIssueHistoryBook[])=>{
          this.usernameRes=res;
          this.showError = false;
          this.showSearchedRecord=true;
        },((error) => {this.errorMsg = error;
        //  console.log(this.errorMsg);
          this.showError=true;
        this.showSearchedRecord= false;}));
    }
  }


}

export class optionSearch {
  constructor(public id: number, public name: string) { }
}
