const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/css", express.static(path.join(__dirname, "view/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const products = [
  {
    name: "Electronics: Dell 15 i7 11500",
    price: "999",
    description:
      "GIGABYTE AERO 15 OLED KD - 15.6 UHD 4k AMOLED IPS, Intel Core i7, NVIDIA GeForce RTX 3060 Laptop GPU 6GB GDDR6, 16GB RAM, 512 GB SSD, Win10 Pro, Creator Laptop (AERO 15 OLED KD-72US623SP)",
    id: 0,
    quantity: 1,
  },
  {
    name: "Electronics: HP 17 i7 11850",
    price: "1499",
    description:
      "HP 17z Laptop, 17.3 FHD Display, AMD Ryzen 5 5500U Hexa-Core Processor, Online Meeting Ready, HDMI, Wi-Fi, Webcam, Bluetooth, Windows 10 Home, Black (16GB RAM | 256GB PCIe SSD)",
    id: 1,
    quantity: 3,
  },
];
const cartProducts = [
  {
    name: "Logitech Gaming Mice",
    price: "99",
    description:
      "Logitech G703 Lightspeed Wireless Gaming Mouse W/Hero 25K Sensor, PowerPlay Compatible, Lightsync RGB, Lightweight 95G+10G Optional, 100-25, 600 DPI, Rubber Side Grips - Black",
    id: 10,
    quantity: 2,
  },
  {
    name: "Logitech Gaming Keyboard",
    price: "159",
    description:
      "Logitech G915 TKL Tenkeyless Lightspeed Wireless RGB Mechanical Gaming Keyboard, Low Profile Switch Options, LIGHTSYNC RGB, Advanced Wireless and Bluetooth Support - Clicky, Black",
    id: 11,
    quantity: 3,
  },
];
app.get("/", (req, res, next) => {
  res.render("product", { products: products });
});
app.get("/shoppingcart", (req, res, next) => {
  res.render("shoppingcart", {
    products: cartProducts,
  });
});
app.post("/addToCart", (req, res, next) => {
  cartProducts.push(
    products.find((item) => item.id.toString() === req.body.id)
  );
  res.redirect("/shoppingcart");
});
app.listen(3000);
