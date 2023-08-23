import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-container-middle',
  templateUrl: './container-middle.component.html',
  styleUrls: ['./container-middle.component.scss']
})
export class ContainerMiddleComponent implements OnInit{
 
  @Input()
  childPosition!: string;
  
  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: 'https://www.migroskurumsal.com/dist/images/thumbnail-srk-7134.jpg',
      thumbImage: 'https://www.migroskurumsal.com/dist/images/thumbnail-srk-7134.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://www.migroskurumsal.com/dist/images/b_86.jpg',
      thumbImage: 'https://www.migroskurumsal.com/dist/images/b_86.jpg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://yardimbasvurusu.com/wp-content/uploads/2023/05/Migros-Yardim-Karti.jpg',
      thumbImage: 'https://yardimbasvurusu.com/wp-content/uploads/2023/05/Migros-Yardim-Karti.jpg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://pazarlamasyon.com/wp-content/uploads/2020/10/migros1.jpg',
      thumbImage: 'https://pazarlamasyon.com/wp-content/uploads/2020/10/migros1.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://www.kartal24.com/dosyalar/2020/08/migros-indirimli-alisveris-812x609.jpg',
      thumbImage: 'https://www.kartal24.com/dosyalar/2020/08/migros-indirimli-alisveris-812x609.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://media.licdn.com/dms/image/C4E22AQFBdeO2UX-1eA/feedshare-shrink_800/0/1647410712081?e=1695254400&v=beta&t=xKHsMPE3O-JA3WBx11YAa-xFMdXXk_OWWFXdLh_IN-k',
      thumbImage: 'https://media.licdn.com/dms/image/C4E22AQFBdeO2UX-1eA/feedshare-shrink_800/0/1647410712081?e=1695254400&v=beta&t=xKHsMPE3O-JA3WBx11YAa-xFMdXXk_OWWFXdLh_IN-k',
      title: 'Image 6',
      alt: 'Image 6'
    }, {
      image: 'https://carousel.com.tr/wp-content/uploads/2022/05/MIGROS-scaled.jpg',
      thumbImage: 'https://carousel.com.tr/wp-content/uploads/2022/05/MIGROS-scaled.jpg ',
      title: 'Image 7',
      alt: 'Image 7'
    }];

}
