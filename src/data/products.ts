export type PetType = "dog" | "cat" | "bird" | "fish" | "rabbit";
export type Category = "food" | "toys" | "grooming" | "health" | "accessories";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: Category;
  petType: PetType[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  highlights?: string[];
  ingredients?: string;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Chicken & Rice Dog Food",
    description:
      "Nutritious dry dog food made with real chicken and rice. Supports healthy digestion, strong muscles, and a shiny coat for adult dogs.",
    price: 1899,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop",
    category: "food",
    petType: ["dog"],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    isBestSeller: true,
    highlights: [
      "Real chicken protein",
      "Supports digestion",
      "Omega fatty acids for coat health",
    ],
    ingredients:
      "Chicken Meal, Brown Rice, Oats, Corn Gluten, Chicken Fat, Vitamins & Minerals",
    sizes: ["3 kg", "10 kg", "20 kg"],
  },
  {
    id: "2",
    name: "Interactive Puzzle Toy for Dogs",
    description:
      "A mentally stimulating puzzle toy that keeps dogs engaged and active. Perfect for training and reducing boredom.",
    price: 799,
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop",
    category: "toys",
    petType: ["dog"],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    isNew: true,
    highlights: ["3 difficulty levels", "Durable plastic", "Safe for pets"],
  },
  {
    id: "3",
    name: "Organic Salmon Cat Food",
    description:
      "High-protein salmon-based cat food that supports healthy skin, coat, and digestion for cats of all breeds.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
    category: "food",
    petType: ["cat"],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    isBestSeller: true,
    highlights: ["Rich in Omega-3", "Grain-free formula", "Premium salmon"],
    ingredients: "Salmon, Fish Meal, Sweet Potato, Peas, Sunflower Oil",
    sizes: ["1.5 kg", "3 kg", "7 kg"],
  },
  {
    id: "4",
    name: "Cat Feather Wand Toy Set",
    description:
      "Fun feather wand toy set designed to keep indoor cats active and entertained.",
    price: 399,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop",
    category: "toys",
    petType: ["cat"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    highlights: ["5 feather attachments", "Flexible wand", "Safe natural feathers"],
  },
  {
    id: "5",
    name: "Professional Grooming Kit",
    description:
      "Complete grooming kit with scissors, combs, nail clippers, and brushes for dogs and cats.",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop",
    category: "grooming",
    petType: ["dog", "cat"],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    isBestSeller: true,
    highlights: ["10 grooming tools", "Stainless steel", "Ergonomic grip"],
  },
  {
    id: "6",
    name: "Calming Hemp Treats",
    description:
      "Natural calming treats that help reduce anxiety in dogs during travel, thunderstorms, or stressful situations.",
    price: 599,
    image: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=400&h=400&fit=crop",
    category: "health",
    petType: ["dog"],
    rating: 4.4,
    reviews: 176,
    inStock: true,
    isNew: true,
    highlights: ["Natural herbs", "Vet recommended", "Helps reduce anxiety"],
  },
  {
    id: "7",
    name: "Luxury Pet Collar with ID Tag",
    description:
      "Stylish leather collar with customizable ID tag. Comfortable for everyday use.",
    price: 699,
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=400&h=400&fit=crop",
    category: "accessories",
    petType: ["dog", "cat"],
    rating: 4.8,
    reviews: 210,
    inStock: true,
    highlights: ["Premium leather", "Adjustable strap", "Custom ID tag"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Bird Seed Premium Mix",
    description:
      "Healthy seed mix for parrots, parakeets, and finches. Provides balanced nutrition.",
    price: 299,
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=400&h=400&fit=crop",
    category: "food",
    petType: ["bird"],
    rating: 4.6,
    reviews: 87,
    inStock: true,
    highlights: ["Natural seeds", "Vitamin enriched", "No artificial colors"],
  },
  {
    id: "9",
    name: "Aquarium Water Test Kit",
    description:
      "Accurate water testing kit for aquariums. Helps maintain a healthy aquatic environment.",
    price: 899,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
    category: "health",
    petType: ["fish"],
    rating: 4.7,
    reviews: 64,
    inStock: true,
    highlights: ["Tests pH & ammonia", "Easy to use", "For freshwater & saltwater"],
  },
  {
    id: "10",
    name: "Rabbit Hay Feeder & Water Bottle",
    description:
      "Convenient hay feeder with water bottle attachment for rabbits and guinea pigs.",
    price: 549,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop",
    category: "accessories",
    petType: ["rabbit"],
    rating: 4.5,
    reviews: 42,
    inStock: true,
    isNew: true,
    highlights: ["2-in-1 feeder", "Easy to mount", "Keeps hay clean"],
  },
  {
    id: "11",
    name: "Dental Care Chew Sticks",
    description:
      "Dental chew sticks that reduce plaque and tartar while freshening dog breath.",
    price: 349,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    category: "health",
    petType: ["dog"],
    rating: 4.3,
    reviews: 145,
    inStock: true,
    highlights: ["Reduces plaque", "Chicken flavor", "Improves oral health"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "12",
    name: "Cozy Pet Bed – Memory Foam",
    description:
      "Soft orthopedic memory foam bed that supports joints and provides maximum comfort for pets.",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop",
    category: "accessories",
    petType: ["dog", "cat"],
    rating: 4.9,
    reviews: 278,
    inStock: true,
    isBestSeller: true,
    highlights: ["Orthopedic memory foam", "Washable cover", "Non-slip bottom"],
    sizes: ["Small", "Medium", "Large", "XL"],
  },
];

export const categories: { id: Category; name: string; icon: string; description: string }[] = [
  { id: "food", name: "Food", icon: "🍖", description: "Premium nutrition" },
  { id: "toys", name: "Toys", icon: "🎾", description: "Fun & stimulation" },
  { id: "grooming", name: "Grooming", icon: "✂️", description: "Looking great" },
  { id: "health", name: "Health", icon: "💊", description: "Wellness care" },
  { id: "accessories", name: "Accessories", icon: "🎀", description: "Style & comfort" },
];

export const petTypes: { id: PetType; name: string; icon: string }[] = [
  { id: "dog", name: "Dogs", icon: "🐶" },
  { id: "cat", name: "Cats", icon: "🐱" },
  { id: "bird", name: "Birds", icon: "🐦" },
  { id: "fish", name: "Fish", icon: "🐠" },
  { id: "rabbit", name: "Rabbits", icon: "🐰" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    pet: "Max (Golden Retriever)",
    avatar: "🐕",
    text: "PawMart has been a lifesaver! The premium dog food keeps Max's coat shiny and he absolutely loves the taste. Fast delivery too!",
    rating: 5,
  },
  {
    id: 2,
    name: "James K.",
    pet: "Luna (Persian Cat)",
    avatar: "🐈",
    text: "I've tried many brands but the organic salmon cat food from PawMart is Luna's absolute favorite. Great quality at reasonable prices.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    pet: "Charlie (Beagle)",
    avatar: "🐕‍🦺",
    text: "The grooming kit is professional quality! I save so much money grooming Charlie at home now. Highly recommend PawMart!",
    rating: 4,
  },
];
