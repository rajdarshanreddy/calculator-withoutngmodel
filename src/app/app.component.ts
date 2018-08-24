import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-withoutngModel';

  public primarynumber:number;
  public secondarynumber:number;
  public selectedoperator:string;
  public cal:number;
  public result:string;
  
  showresult: boolean = false;


  calculate(vprimarynumber: number, vsecondarynumber: number, vselectedoperator:string){
    this.primarynumber = +vprimarynumber;
    this.secondarynumber = +vsecondarynumber;
    

    if(vselectedoperator == '+'){
      this.cal = this.primarynumber + this.secondarynumber;
      this.result = "= " + this.cal;
      this.showresult = !this.showresult;
    }
    if(vselectedoperator == '-'){
      this.cal = this.primarynumber - this.secondarynumber;
      this.result = "= " + this.cal;
    }
    if(vselectedoperator == '*'){
      this.cal = this.primarynumber * this.secondarynumber;
      this.result = "= " + this.cal;
    }
    if(vselectedoperator == '/'){
      this.cal = this.primarynumber / this.secondarynumber;
      this.result = "= " + this.cal;
    }
    
  }
}
