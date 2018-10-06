import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {Http} from '@angular/http';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() {
    window.location.href = 'http://localhost/explore_section/mapfitter.html';
  }

  ngOnInit() {
  }

}
