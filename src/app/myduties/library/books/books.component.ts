import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from 'src/app/API_Service/library.service';
import { addBookData, addBookResponse, subjectCategory, allBooks, librarySettings, getBookByBookId, updateBookData, updateBookResponse, removeBookData } from '../bookDataObj';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @ViewChild('f') addBookForm:NgForm;
  @ViewChild('g') updateBookForm:NgForm;
  @ViewChild('h') removeBookForm:NgForm;
  @ViewChild('i') checkLimitForm:NgForm;

  removeButton:boolean=false;
  updateButton:boolean=false;
  showId:boolean=false;
  Book:addBookData;
  responseAdd:addBookResponse;
  data:string;  
  msg:string;
  books:allBooks[]=[];
  bookById:getBookByBookId[]=[];
  private subject:subjectCategory[]=[];
  private setting:librarySettings[]=[];
  updatedata:updateBookData;
  responseUpdate:updateBookResponse;
  removeData:removeBookData;
  removeRes:string;

  // selectedAttribute:attributeSearch = new attributeSearch(2,'author');
  // attributes=[
  //   new attributeSearch(1,'Title'),
  //   new attributeSearch(2,'Author'),
  //   new attributeSearch(3,'BookId')
  // ];

  constructor(private service:LibraryService) { }

  ngOnInit() {

    this.showId=false;
    this.updateButton=false;
    this.removeButton=false;
   this.service.getSubjectCatergoryAcronymList().subscribe((res:subjectCategory[])=>{
     this.subject = res;
   });

   this.service.getAllBooks().subscribe((bookData:allBooks[])=>{
     this.books = bookData;
     console.log(this.books);
    });


  }

  // onSubmit(form:NgForm){
  // console.log(form);
  // }

  onSubmit()
  {
    console.log(this.addBookForm);
    this.Book = new addBookData(this.addBookForm.value.addBookData.authorName,this.addBookForm.value.addBookData.edition,
      this.addBookForm.value.addBookData.isbnNo,this.addBookForm.value.addBookData.noOfPages,this.addBookForm.value.addBookData.price,
      this.addBookForm.value.addBookData.publisher,this.addBookForm.value.addBookData.purchasedOn,this.addBookForm.value.addBookData.remarks,
      this.addBookForm.value.addBookData.subjectCategory,this.addBookForm.value.addBookData.title,this.addBookForm.value.addBookData.publicationYear);
    // this.Book.authorName = this.addBookForm.value.addBookData.authorName;
    // this.Book.edition = this.addBookForm.value.addBookData.edition;
    // this.Book.isbn = this.addBookForm.value.addBookData.isbnNo;
    // this.Book.noOfPages = this.addBookForm.value.addBookData.noOfPages;
    // this.Book.price = this.addBookForm.value.addBookData.price;
    // this.Book.publisherAndPlace = this.addBookForm.value.addBookData.publisher;
    // this.Book.purchaseDate= this.addBookForm.value.addBookData.purchasedOn;
    // this.Book.remarks = this.addBookForm.value.addBookData.remarks;
    // this.Book.subjectCategory = this.addBookForm.value.addBookData.subjectCategory;
    // this.Book.title = this.addBookForm.value.addBookData.title;
    // this.Book. yearOfPublication = this.addBookForm.value.addBookData.publicationYear;
    console.log(this.service.addBookDetails(this.Book));
    this.service.addBookDetails(this.Book).subscribe((res:addBookResponse)=>{
      this.responseAdd = res;
     // console.log(this.responseAdd.bookId);
      this.data =  this.responseAdd.message+ ' '+ this.responseAdd.bookId;
      this.showId=true;
    });
    this.addBookForm.resetForm();
    
  }

  retrieveLibrarySettings()
  {
    this.service.getLibrarySettings().subscribe((libSettings:librarySettings[])=>{
      this.setting = libSettings;
     // console.log(this.setting);
    });
  }

  onBookAdded()
  {
    this.showId=true;    
  }

  onUpdateButtonClick()
  {
    this.updateButton=true;
  }


  getBookByBookId(bookId:string)
  {
    this.service.getBookByBookId(bookId).subscribe((bookByIdData:getBookByBookId[])=>{
        this.bookById=bookByIdData;
        console.log(this.bookById);
    });
  }

  update()
  {
    if(this.updateButton)
    {
      this.updatedata = new updateBookData(this.updateBookForm.value.updateBookData.authorName,
                                          this.updateBookForm.value.updateBookData.edition,
                                          this.updateBookForm.value.updateBookData.isbnNo,
                                          this.updateBookForm.value.updateBookData.noOfPages,
                                          this.updateBookForm.value.updateBookData.price,
                                          this.updateBookForm.value.updateBookData.publisher,
                                          this.updateBookForm.value.updateBookData.purchasedOn,
                                          this.updateBookForm.value.updateBookData.remarks,
                                          this.updateBookForm.value.updateBookData.subjectCategory,
                                          this.updateBookForm.value.updateBookData.title,
                                          this.updateBookForm.value.updateBookData.publicationYear);
        console.log(this.updatedata);
        this.service.updateBookByBookId(this.updateBookForm.value.updateBookData.bookId,this.updatedata).subscribe((res:updateBookResponse)=>{
          this.responseUpdate = res;
          this.msg = this.responseUpdate.message + this.responseUpdate.bookId;
          console.log(this.responseUpdate);
        });
        this.updateButton=false;
    }
  }

  remove(){
    console.log(this.removeBookForm.value.removeBookData.bookId);
    this.service.removeBookByBookId(this.removeBookForm.value.removeBookData.bookId).subscribe((res:string)=>{
      this.removeRes = res;
      console.log(res);
      this.removeButton=true;
    });
  }


  checkLimit()
  {
    console.log(this.checkLimitForm.value.checkLimitData.enrollmentno);
  }

  // onSelect(selectedAttributeId)
  // {
  //   this.selectedAttribute = null;
  //   for(var i=0;i<this.attributes.length;i++)
  //   {
  //     if(this.attributes[i].id == selectedAttributeId){
  //       this.selectedAttribute = this.attributes[i];
  //       console.log(this.selectedAttribute);
  //     }
  //   }
  // }

}


// export class attributeSearch{

// 	constructor(public id: number, public attrib:string) {
  
//   }
  
//}
