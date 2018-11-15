import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Thread } from '../Thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  threads: Thread[];
  constructor(private thrService: ThreadService) { }

  ngOnInit() {
    this.getThreads();
  }

  getThreads(): void {
    this.thrService.getThreads()
      .subscribe(threads => this.threads = threads);
  }
}
