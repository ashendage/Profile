import { Component, OnInit , AfterViewInit } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    particlesJS.load('particles-js', './../assets/particlesjs-config.json', function() { console.log('callback - particles.js config loaded'); });
  }
  title = 'MyProfile';

  ngOnInit() : void {
    
  }

}

