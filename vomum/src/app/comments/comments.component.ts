import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyfireService} from '../shared/myfire.service';
import {NotificationService} from '../shared/notification.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  uid: {name: string, id: string};
  cmmnt1 = '';
  cmmnt = '';
  imgname: string;
  id: string;

  commentData: any = {};
  commentarr: any = [];

  constructor(private routes: ActivatedRoute, private myFire: MyfireService, private notifier: NotificationService) {
    this.uid = {name: this.routes.snapshot.params['name'],
    id: this.routes.snapshot.params['id']};
  }

  ngOnInit() {
    const img1 = this.uid.name;
    /*firebase.database().ref('comments').child(img1).once('value').
    then(snapshot => {
      this.commentData = snapshot.val();
      this.commentData.forEach(data => {
        console.log(data);
      });
    });
*/
  }

  onCommentSelection() {
    this.imgname = this.uid.name;
    this.id = this.uid.id;
    this.cmmnt1 = this.cmmnt;
    this.myFire.handleCommentUpload(this.imgname, this.id, this.cmmnt1);
    this.notifier.display('success', 'try');

  }

}
