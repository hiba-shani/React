import shoe from '../images/shoe.jpg';
import shoe1 from '../images/shoe1.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';



import heel from '../images/heel.jpg';
import heel1 from '../images/heel1.jpg';
import heel2 from '../images/heel2.jpg';
import heel3 from '../images/heel3.jpg';



export const products = [
  {
    id: 'SMYWSCRUNCHIE-187',
    image: shoe,
    title: "Men's shoes DN 23x, New product",
    category: 'LIFESTYLE',
    price: 4690,
    oldPrice: 5999,
    rating: 4,
    offer: 25,
    description: "this is high quality dresses",
    gallary: [shoe1, shoe2, shoe3]
  },
  {
    id: 'SMYWSCRUNCHIE-188',
    image: heel,
    title: "Womens heel  DN 23x, New product",
    category: 'LIFESTYLE',
    price: 2999,
    oldPrice: 3490,
    rating: 5,
    offer: 20,
    description: "stylish women's heel designed for comfort and durability.",
    gallary: [heel1, heel2, heel3]
  }
]