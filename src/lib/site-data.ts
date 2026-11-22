import garlicBun from "@/assets/garlic-bun.webp.asset.json";
import chiaParfait from "@/assets/chia-parfait.webp.asset.json";
import bagelSandwich from "@/assets/bagel-sandwich.webp.asset.json";
import cacaoBowl from "@/assets/cacao-bowl.webp.asset.json";

export const LINKS = {
  directions: "https://maps.google.com/?q=The+Yellow+Oven+Shivalik+Platinum+Bodakdev+Ahmedabad",
  mapEmbed:
    "https://maps.google.com/maps?q=B-101+Shivalik+Platinum+Judges+Bunglow+Road+Bodakdev+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  googleReviews: "https://maps.google.com/?q=The+Yellow+Oven+Shivalik+Platinum+Bodakdev+Ahmedabad",
};

export const SERVE_ITEMS = [
  { title: "Korean Cream Cheese Garlic Bun", price: 289, img: garlicBun.url, position: "center 65%" },
  { title: "Strawberry Chia Parfait", price: 349, img: chiaParfait.url, position: "center 63%" },
  { title: "Seeded Artisan Bagel Sandwich", price: 379, img: bagelSandwich.url, position: "center 48%" },
  { title: "Sunrise Cacao & Chia Bowl", price: 359, img: cacaoBowl.url, position: "center 53%" },
];

export const SIGNATURES = [
  {
    tag: "House Signature",
    title: "Cherry Blossom",
    price: 679,
    desc: "An enchanting composition of hazelnut praline and dark Callebaut chocolate coming together for delicate confectionery artistry.",
    notes: "Delicate hazelnut · Callebaut noir",
  },
  {
    tag: "Aromatic",
    title: "Jasminaar",
    price: 579,
    desc: "An elegant, quiet interplay of fragrant natural jasmine and rich Callebaut chocolate, crafted for deep contemplation.",
    notes: "Jasmine essence · Cocoa velour",
  },
  {
    tag: "Tableside Pour",
    title: "The Last Espresso",
    price: 479,
    desc: "Layers of delicate mascarpone and sponge awakened tableside with a steaming pour of warm espresso over a crisp chocolatey disc.",
    notes: "Fresh-pull espresso · Mascarpone",
  },
  {
    tag: "Barista Special",
    title: "Pistachio Cold Foam Latte",
    price: 289,
    desc: "Slow-steeped espresso layered under silky, roasted pistachio-infused cold foam. Sip slow and stay longer.",
    notes: "Roasted pistachio · Silky cold foam",
  },
];

export type MenuItem = { name: string; price: number; desc: string };
export const MENU: { id: string; label: string; blurb: string; items: MenuItem[] }[] = [
  {
    id: "desserts",
    label: "Plated Desserts",
    blurb: "Belgian Callebaut, plated to order.",
    items: [
      { name: "The Last Espresso", price: 479, desc: "Layers of mascarpone and sponge awakened tableside with a pour of warm espresso on a chocolatey disc." },
      { name: "Jasminaar", price: 579, desc: "An elegant interplay of fragrant Jasmine and rich Callebaut chocolate, crafted for quiet indulgence." },
      { name: "Cherry Blossom", price: 679, desc: "An enchanting composition of Hazelnut praline and dark Callebaut chocolate for delicate confectionery artistry." },
      { name: "Chocolate Bomboloni", price: 299, desc: "Warm artisanal Italian filled doughnuts bursting with velvety chocolate ganache." },
    ],
  },
  {
    id: "boards",
    label: "The Gathering Table",
    blurb: "Boards built for sharing, and staying.",
    items: [
      { name: "Cheese Fondue Board", price: 649, desc: "Crackers, onion rings, spicy potato wedges, focaccia toasted slices, grilled paneer, mushroom, beetroot nachos, and salsa dip." },
      { name: "Lebanese Mezze Board", price: 649, desc: "Pita bread, hummus, falafel, labneh, olives, lettuce, cucumbers, cherry tomatoes, bell peppers, kidney beans, lavash crackers, roasted baby potatoes." },
      { name: "All Day Breakfast Board", price: 649, desc: "Herbed Paneer, Labneh, sautéed veggies, sourdough/croissant, hash browns, tea cake/muffin, honey, chocolate sauce." },
      { name: "Chocolate Fondue Board", price: 649, desc: "A sweet platter of brownies, pancakes, doughnut puffs, butter cake, ginger cookies, toasted brioche cube, seasonal fruits, and wafers." },
    ],
  },
  {
    id: "pizzas",
    label: "Artisanal Pizzas",
    blurb: "Stone-baked on a slow sourdough crust.",
    items: [
      { name: "Margherita", price: 499, desc: "Fresh basil, rich plum tomato sauce & melted mozzarella on artisanal crust." },
      { name: "Tandoori Paneer Pizza", price: 589, desc: "Spiced paneer, charred bell peppers & mozzarella on a classic sourdough crust." },
      { name: "4 Cheese Pizza", price: 639, desc: "Four premium cheeses melted into golden, bubbling harmony." },
      { name: "Truffle Mushroom Pizza", price: 639, desc: "Roasted forest mushrooms, mozzarella & fragrant aromatic truffle oil." },
      { name: "TYO Special (4 Topping)", price: 699, desc: "The house signature made with our chef's hand-selected blend of assorted toppings." },
    ],
  },
  {
    id: "tartines",
    label: "Tartines & Layers",
    blurb: "Open-faced, layered, generous.",
    items: [
      { name: "Tiramisu Tartine", price: 299, desc: "Mascarpone, rich coffee-soaked notes & dusted dark cocoa on brioche." },
      { name: "Creamy Mushroom Tartine", price: 269, desc: "Garlic cream sautéed mushrooms, garden herbs & fresh shaved parmesan." },
      { name: "Bruschetta Tartine", price: 229, desc: "Vine-ripened tomato basil relish drizzled with aged balsamic glaze." },
      { name: "TYO Special Layer", price: 399, desc: "The house signature savory sandwich layered with our finest garden flavors." },
      { name: "Gochujang Paneer Sandwich", price: 379, desc: "Sweet-spicy Korean glazed paneer served with house-pickled crisp vegetables." },
      { name: "French Tartine", price: 239, desc: "Golden caramelised brioche crowned with fresh seasonal fruits & pure maple." },
    ],
  },
  {
    id: "coffee",
    label: "Coffee Bar",
    blurb: "Pulled fresh, from morning to midnight.",
    items: [
      { name: "Pistachio Cold Foam Latte", price: 289, desc: "Iced specialty espresso capped with silky whipped pistachio cold cream." },
      { name: "Salted Caramel Latte", price: 269, desc: "Espresso, textured milk, house sea salt caramel swirl (Served hot or iced)." },
      { name: "Biscoff Latte", price: 259, desc: "Infused with authentic Lotus Biscoff spiced cookie butter." },
      { name: "Flat White / Cappuccino", price: 229, desc: "Double shot of espresso with finely textured microfoam." },
      { name: "Single / Double Espresso", price: 99, desc: "Intense, balanced extraction with notes of toasted hazelnut and dark chocolate." },
      { name: "Classic Iced Coffee", price: 229, desc: "Smooth, bold chilled blend served over crystal clear ice." },
    ],
  },
  {
    id: "salads",
    label: "Salad Bowls",
    blurb: "Fresh, warm and properly filling.",
    items: [
      { name: "Protein Punch Bowl", price: 349, desc: "Herbed Paneer, hummus, cucumber, olives, pickled onion, lettuce, cherry tomatoes, and crunchy pita crisp." },
      { name: "TYO House Bowl", price: 349, desc: "Warm sautéed vegetables, paneer, crunchy peanuts, toasted seeds and fresh greens in olive oil dressing." },
      { name: "The Botanist's Bowl", price: 349, desc: "Seasoned garden vegetables sautéed and topped with creamy mashed potatoes, fresh herbs, and house spices." },
    ],
  },
];

export const REVIEWS = [
  { quote: "The cheesecake was one of the best we had till date with the smoothest texture. They use pure ingredients and no palm oil in the kitchen.", author: "Ronak Modi" },
  { quote: "The Cherry Blossom was absolutely delicious and beautifully presented. Definitely a must-try for dessert lovers in Ahmedabad!", author: "Priya Valvi" },
  { quote: "Great food, lovely ambience, and outstanding hospitality. A special thanks to the chef for personally ensuring that everything was perfect.", author: "Sarika Raghav" },
];

export const HOURS = [
  { day: 1, label: "Monday" },
  { day: 2, label: "Tuesday" },
  { day: 3, label: "Wednesday" },
  { day: 4, label: "Thursday" },
  { day: 5, label: "Friday" },
  { day: 6, label: "Saturday" },
  { day: 0, label: "Sunday" },
].map((d) => ({ ...d, time: "11:00 AM – 1:00 AM" }));
