import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  post;
  allposts = [];
  plainText;
  constructor() { }
  froalaOptions = {
    placeholderText: 'Type post here...',
    charCounterCount: false,
    toolbarBottom: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|',
      'quote', 'fontSize', 'insertLink', 'align', 'paragraphFormat', '|',
      'insertImage', 'insertVideo', 'embedly'
    ],
    // iconsTemplate: 'font_awesome_5',
    // fontAwesomeTemplate: '<i class="fa fa-[NAME] fr-deletable" aria-hidden="true">&nbsp;</i>',

    // getToolbarOptions() {
    //   return [
    //     'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color',
    //     'clearFormatting', 'paragraphFormat', 'paragraphStyle', 'quote',
    //     'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertImage', 'insertVideo', 'embedly',
    //     'selectAll', 'createLink', 'insertFile', 'insertTable', 'undo', 'redo', 'fullscreen', 'html', 'specialCharacters',
    //     'emoticons', 'insertHR', 'help', 'pn_snippet', 'getPDF'];
    // }
  };

  onPostSubmit() {
    console.log(this.post);
    this.plainText = this.post.replace(/<[^>]*>/g, '');
    console.log(this.plainText);
    this.allposts.push(this.plainText);
    console.log(this.allposts);
  }
}
