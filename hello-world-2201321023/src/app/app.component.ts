import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  currentSectionVisible:string = "";

  // section - is_visible
  dict: { [key: string]: boolean } = {
    'about_me': true,
    'hobbies': true,
    'creator': true,
    'channel': true,
    'offering': true
  };

  toggleSection(sectionName:string) {
    if(this.currentSectionVisible != ""){
      this.dict[this.currentSectionVisible] = !this.dict[this.currentSectionVisible] // hide previous
    }

    if(this.currentSectionVisible == sectionName){
      this.currentSectionVisible = ""
      return;
    }

    // show new section
    this.dict[sectionName] = !this.dict[sectionName]
    this.currentSectionVisible = sectionName
  }
}
