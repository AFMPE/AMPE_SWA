import { OnInit, Component } from "@angular/core";
import * as $ from 'jquery';

@Component({
    selector: "main",
    templateUrl: "main.component.html"
})

export class MainComponent implements OnInit {
   
      ngOnInit() {
        $(document).ready(function() {
          
        });
     }
}