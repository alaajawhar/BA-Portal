import {Component, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BA Portal';

  commonExceptions: string[] = [
    '/pages-register',
    '/pages-login',
    '/pages-error404',
    '/use-case-diagram-canvas',
  ]

  appHeaderExceptions: string[] = [
    ...this.commonExceptions
  ]

  appSideBarExceptions: string[] = [
    ...this.commonExceptions
  ]

  appFooterExceptions: string[] = [
    ...this.commonExceptions
  ]

  constructor(private elementRef: ElementRef, public _router: Router) {
    console.log('route: ' + _router.url)
  }

  ngOnInit() {
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../assets/js/main.js";
    // this.elementRef.nativeElement.appendChild(s);
  }
}
