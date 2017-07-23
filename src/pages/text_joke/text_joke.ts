import { Component } from '@angular/core';
import { NavController,IonicPage,LoadingController } from 'ionic-angular';
import { JokeDetailPage } from '../joke_detail/joke_detail';
// import { Http } from '@angular/http';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
    selector: 'page-text_joke',
    templateUrl: 'text_joke.html'
})

export class TextJokePage {
    pet: string = "new";
    public hotJokes: any = [];
    public newJokes: any = [];
    public items: any = [];
    private mScrollBar: any;
    private mScrollPos: any;
    private mPages: any;//分页
    private mPageSize: number = 20;
    loadFinished:any = {"new": true, "hot": true};;

    constructor(public loadingCtrl: LoadingController, public api: ApiServiceProvider, public navCtrl: NavController) {
        api.getTextNewJokes(1, this.mPageSize).then((res)=>{
           this.newJokes = res["data"];
        });
    }

    ngAfterViewInit(){
        console.log("init --start");
        console.log("init --end");
        this.mScrollBar = document.querySelector("div.scroll-content");
        this.mScrollPos  = {"new":0, "hot":0};
        this.mScrollBar.addEventListener('scroll', this.onScroll.bind(this));
        this.mPages = {"new": 1, "hot": 1};
    }

    onScroll(event) {
        this.mScrollPos[this.pet] = this.mScrollBar.scrollTop;
    }

    segmentChanged(event) {
       this.mScrollBar.scrollTop = this.mScrollPos[event.value];
    }

    //刷新
   doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

    //加载更多
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
  }
}
