import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';
import * as PostActions from '../actions/post.actions';

interface AppState {
  post: Post;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Observable<Post>;
  text: string; /// form input val
  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
   }

  ngOnInit() {
  }
  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) );
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
