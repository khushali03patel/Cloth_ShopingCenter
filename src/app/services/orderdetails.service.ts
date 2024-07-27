import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }
     
    details=[
    {
      id:1,
      typeofclothes:"sarees",
      clothesdetails:"Bandhani Saree,Patola Sarees,simple saree,lariya",
      price:3000,
      img: "https://ik.imagekit.io/wb2spwtue/kreeva/tr:h-430,w-315,q-80,cm-pad_resize/media/catalog/product/s/a/saree-2-01.jpg",
    },
    {
      id:2,
      typeofclothes:"kurtis",
      clothesdetails:"Long Straight Kurti,Floor Length Kurti,Denim Kurti",
      price:1000,
      img:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg",
    },
    {
      id:3,
      typeofclothes:"top",
      clothesdetails:"Crop Tops,t shirt,shirt,denim",
      price:500,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPFZ9uE6bK-MLPEnaCF2ovlIhYnNuTlqMN8EuoaxOOKpKzrIMKJHJUB_gyByQn8jcQJk&usqp=CAU",
    },
      {
        id:4,
        typeofclothes:"jeans",
        clothesdetails:"Straight Leg Jeans,Boot Cute, Boyfriend Jeans",
        price:500,
        img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3vb0MmGbcMYklVlFyyIIpdRmzEJTFGrU6qwgmu_gv3HFMrfifSkhF-9ybXCp25dfzFSr4RYrrEJYGQ3q_jHsEPGfkrLWzyg20UIJ1Qhhu&usqp=CAE",
      },
  ]
} 
