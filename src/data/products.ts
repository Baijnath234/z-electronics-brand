import Headphone from "../assets/images/image1.png";
import image3 from "../assets/images/image13.png";
import image4 from "../assets/images/image4.png";
import image7 from "../assets/images/image1.png";
import image8 from "../assets/images/image11.png";

export const products = [
  {
    id: 1,
    title: "White Tshirt Men",
    image: Headphone,
    images: [Headphone, image3, image7],
    price: "₹999",
    strikePrice: "₹1,499",
    discount: "33%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    category: "tshirt",
    description: "Premium cotton t-shirt for daily wear",
    quality: "100% Cotton | 180 GSM | Bio-washed",
    postDate: "10 Jan 2026",
    policy: {
      delivery: "Free delivery within 5–7 business days",
      return: "7-day replacement policy",
      warranty: "No warranty (apparel item)",
    },
  },
  {
    id: 2,
    title: "Blue Denim Jeans",
    image: image4,
    images: [image4, image8],
    price: "₹2,499",
    strikePrice: "₹4,999",
    discount: "50%",
    rating: 4.6,
    ratingCount: 98,
    colors: ["#1e272e"],
    category: "jeans",
    description: "Slim-fit stretchable denim jeans",
  },
];
