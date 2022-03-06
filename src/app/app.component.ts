import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'silder';
  galary = [
    {
      title: 'portrait',
      path: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      downloads: '11445',
    },
    {
      title: 'portrait',
      path: 'https://images.pexels.com/photos/3116410/pexels-photo-3116410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      downloads: '11445',
    },
    {
      title: 'portrait',
      path: 'https://images.pexels.com/photos/10618949/pexels-photo-10618949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      downloads: '11500',
    },
    {
      title: 'portrait',
      path: 'https://images.pexels.com/photos/10077939/pexels-photo-10077939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      downloads: '11899',
    },
    {
      title: 'portrait',
      path: 'https://images.pexels.com/photos/10076293/pexels-photo-10076293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      downloads: '118989',
    },
  ];
  count: number = -1;
  len = this.galary.length;
  ngOnInit() {
    let imageRotator = () => {
      if (this.count < this.len - 1) {
        this.count = this.count + 1;
      } else {
        this.count = -1;
      }
    };
    setInterval(() => {
      imageRotator();
    }, 2000);
  }
}
