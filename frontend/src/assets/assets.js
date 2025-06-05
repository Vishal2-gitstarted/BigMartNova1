import hero from "./hero.png";
import about from "./about.png";
import about1 from "./about1.png";
import about2 from "./about2.png";
import about3 from "./about3.png";
import about4 from "./about4.png";
import apple from "./apple.png";
import arrival_icon1 from "./arrival_icon1.png";
import arrival_icon2 from "./arrival_icon2.png";
import arrival_icon3 from "./arrival_icon3.png";
import bag from "./bag.png";
import cart from "./cart.png";
import call from "./call.png";
import message from "./message.png";
import category from "./category.png";
import computer from "./computer.png";
import f1 from "./f1.png";
import f2 from "./f2.png";
import f3 from "./f3.png";
import f4 from "./f4.png";
import free_delivery from "./free_delivery.png";
import game from "./game.png";
import head_phone from "./head_phone.png";
import login_image from "./login_image.png";
import minus from "./minus.png";
import plus from "./plus.png";
import music from "./music.png";
import new_arrival_right from "./new_arrival_right.png";
import new_arrival_left from "./new_arrival_left.png";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import phone from "./phone.png";
import r1 from "./r1.png";
import r2 from "./r2.png";
import r3 from "./r3.png";
import remove_icon from "./remove_icon.png";
import right_arrow from "./right_arrow.png";
import shirt from "./shirt.png";
import table from "./table.png";
import team1 from "./team1.png";
import team2 from "./team2.png";
import team3 from "./team3.png";
import user from "./user.png";
import watch from "./watch.png";
import wish from "./wish.png";
import search from "./search.png";

export const assets = {
  hero,
  search,
  category,
  new_arrival_left,
  new_arrival_right,
  call,
  cart,
  wish,
  free_delivery,
  right_arrow,
  login_image,
  user,
  plus,
  minus,
  remove_icon,
  message,
  apple,
  about,
};

export const aboutData = [
  { id: 1, image: about1, number: "10.5k", text: "solar active on our site" },
  {
    id: 2,
    image: about2,
    number: "45.5k",
    text: "customer active on our site",
  },
  {
    id: 3,
    image: about3,
    number: "25k",
    text: "annual gross sale on our site",
  },
  {
    id: 4,
    image: about4,
    number: "33k",
    text: "Monthly Product sale",
  },
];
export const latestProduct = [
  {
    id: 1,
    image: f1,
    name: "Wireless Gamepad",
    oldPrice: 59.99,
    newPrice: 39.99,
    rating: r2,
    number: 88,
    discount: -50,
    description:
      "Experience ultimate gaming control with our wireless gamepad. Enjoy seamless connectivity and precise movements for an immersive gaming experience. Compatible with multiple platforms for versatile use.",
  },
  {
    id: 2,
    image: f2,
    name: "Mechanical Keyboard",
    oldPrice: 89.99,
    newPrice: 69.99,
    rating: r1,
    number: 99,
    discount: -13,
    description:
      "Enhance your typing and gaming with this mechanical keyboard. Features RGB lighting and tactile switches for an amazing experience. Built for durability and speed.",
  },
  {
    id: 3,
    image: f3,
    name: "LED Monitor",
    oldPrice: 199.99,
    newPrice: 149.99,
    rating: r3,
    number: 105,
    discount: -23,
    description:
      "Get stunning visuals with this high-resolution LED monitor. Designed for crisp image quality and smooth refresh rates, perfect for work and play. Slim design fits any workspace.",
  },
  {
    id: 4,
    image: f4,
    name: "Ergonomic Gaming Chair",
    oldPrice: 249.99,
    newPrice: 199.99,
    rating: r1,
    number: 200,
    discount: -33,
    description:
      "Sit in comfort for long hours with this ergonomic gaming chair. Adjustable height, lumbar support, and premium cushioning make it perfect for gamers and professionals. Built to last with high-quality materials.",
  },
];

export const categories = [
  { id: 1, image: phone, name: "Phone" },
  { id: 2, image: computer, name: "Computer" },
  { id: 3, image: watch, name: "Watch" },
  { id: 4, image: game, name: "Game" },
  { id: 5, image: head_phone, name: "Headphone" },
];

export const BestProducts = [
  {
    id: 1,
    image: bag,
    name: "Stylish Backpack",
    oldPrice: 49.99,
    newPrice: 29.99,
    rating: r1,
    number: 88,
    discount: -50,
    description:
      "Carry your essentials in style with this durable and spacious backpack. Designed for comfort and functionality, perfect for daily use and travel.",
  },
  {
    id: 2,
    image: shirt,
    name: "Casual Shirt",
    oldPrice: 39.99,
    newPrice: 24.99,
    rating: r3,
    number: 88,
    discount: -33,
    description:
      "Stay comfortable and fashionable with this premium casual shirt. Made from high-quality fabric, perfect for any occasion.",
  },
  {
    id: 3,
    image: music,
    name: "Wireless Earbuds",
    oldPrice: 79.99,
    newPrice: 49.99,
    rating: r1,
    number: 88,
    discount: -20,
    description:
      "Enjoy crystal-clear sound with these wireless earbuds. Compact, stylish, and equipped with noise cancellation for an immersive audio experience.",
  },
  {
    id: 4,
    image: table,
    name: "Wooden Study Table",
    oldPrice: 159.99,
    newPrice: 119.99,
    rating: r2,
    number: 88,
    discount: -28,
    description:
      "Upgrade your workspace with this elegant wooden study table. Sturdy, spacious, and designed for maximum productivity.",
  },
];

export const products = [
  {
    id: 1,
    image: p1,
    name: "Dry Dog Food",
    oldPrice: 5.99,
    newPrice: 3.99,
    rating: r1,
    number: 88,
    discount: -50,
    description:
      "Freshly baked bread with a soft and fluffy texture. Perfect for sandwiches or a tasty snack.",
  },
  {
    id: 2,
    image: p2,
    name: "Camera",
    oldPrice: 29.99,
    newPrice: 24.99,
    rating: r2,
    number: 89,
    discount: -30,
    description:
      "Nutritious dry dog food with high protein and essential vitamins for a healthy pet.",
  },
  {
    id: 3,
    image: p3,
    name: "Laptop",
    oldPrice: 499.99,
    newPrice: 399.99,
    rating: r3,
    number: 106,
    discount: -20,
    description:
      "Capture stunning photos with this high-quality digital camera. Perfect for professionals and hobbyists alike.",
  },

  {
    id: 5,
    image: p5,
    name: "Suzuki Honda",
    oldPrice: 14.99,
    newPrice: 9.99,
    rating: r2,
    number: 200,
    discount: -20,
    description:
      "Gentle face wash that cleanses and hydrates your skin, leaving it fresh and glowing.",
  },
  {
    id: 6,
    image: p6,
    name: "Winter bau",
    oldPrice: 24999.99,
    newPrice: 22999.99,
    rating: r2,
    number: 70,
    discount: -36,
    description:
      "Stylish and fuel-efficient car with advanced safety features and a comfortable interior.",
  },
  {
    id: 7,
    image: p7,
    name: "Gamepad",
    oldPrice: 79.99,
    newPrice: 59.99,
    rating: r1,
    number: 88,
    discount: -50,
    description:
      "Comfortable and stylish shoes designed for daily wear and sports activities.",
  },
  {
    id: 8,
    image: p8,
    name: "jacket",
    oldPrice: 59.99,
    newPrice: 39.99,
    rating: r2,
    number: 167,
    discount: -25,
    description:
      "Wireless gamepad with precise controls and seamless connectivity for an immersive gaming experience.",
  },
];
export const newArrivalData = [
  {
    id: 1,
    image: arrival_icon1,
    text: "FREE AND FAST DELIVERY",
    description: "upgrade your workspace with this elegant wooden",
  },
  {
    id: 2,
    image: arrival_icon2,
    text: "CUSTOMER SERVICE",
    description: "upgrade your workspace with this elegant wooden",
  },
  {
    id: 3,
    image: arrival_icon3,
    text: "MONEY BACK GUARANTEE",
    description: "upgrade your workspace with this elegant wooden",
  },
];
export const team = [
  {
    id: 1,
    image: team1,
    name: "Tom Cruise",
    designation: "Founder & Chairman",
  },
  {
    id: 2,
    image: team2,
    name: "Emma Watson",
    designation: "Managing Director",
  },
  {
    id: 3,
    image: team3,
    name: "Will Smith",
    designation: "Product designer",
  },
];
