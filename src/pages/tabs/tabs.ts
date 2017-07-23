import { Component } from '@angular/core';
import { TextJokePage } from "../text_joke/text_joke";
import { PhotoJokePage } from "../photo_joke/photo_joke";
import { VideoJokePage } from "../video_joke/video_joke";
import { MinePage } from "../mine/mine";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // tabs:any = TabJokePage;
    textJoke:any = TextJokePage;
    photoJoke:any = PhotoJokePage;
    videoJoke:any = VideoJokePage;
    mine:any = MinePage;
    constructor(){
        console.log(this);
    }
}