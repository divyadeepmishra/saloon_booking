
import { Calendar, Clock, Scissors, Star, User } from "lucide-react";

export const services = [
  {
    id: "s1",
    name: "Haircut & Styling",
    description: "Expert cut and styling tailored to your face shape and lifestyle.",
    price: 65,
    duration: 60,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s2",
    name: "Luxury Facial",
    description: "Deep cleansing and rejuvenating facial treatment.",
    price: 90,
    duration: 60,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s3",
    name: "Manicure & Pedicure",
    description: "Complete nail care package with premium polish.",
    price: 55,
    duration: 90,
    category: "Nails",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s4",
    name: "Full Body Massage",
    description: "Relaxing Swedish massage to relieve tension.",
    price: 120,
    duration: 60,
    category: "Massage",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s5",
    name: "Hair Coloring",
    description: "Full head color or highlights using premium organic dyes.",
    price: 150,
    duration: 120,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s6",
    name: "Beard Trim & Grooming",
    description: "Precision beard sculpting and hot towel treatment.",
    price: 35,
    duration: 30,
    category: "Men",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s7",
    name: "Bridal Makeup",
    description: "Complete bridal makeup package including trial session.",
    price: 250,
    duration: 180,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s8",
    name: "Keratin Treatment",
    description: "Smooth and straighten frizzy hair with long-lasting results.",
    price: 200,
    duration: 150,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1519699047748-40baea614fee?q=80&w=600&auto=format&fit=crop",
  },
];

export const staff = [
  {
    id: "st1",
    name: "Elena Rossi",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    specialties: ["Hair", "Coloring"],
  },
  {
    id: "st2",
    name: "David Chen",
    role: "Massage Therapist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    specialties: ["Massage", "Skincare"],
  },
  {
    id: "st3",
    name: "Sarah Johnson",
    role: "Nail Technician",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    specialties: ["Nails"],
  },
];

export const reviews = [
  {
    id: 1,
    user: "Alice M.",
    rating: 5,
    comment: "The best salon experience I've ever had. Truly premium service.",
  },
  {
    id: 2,
    user: "John D.",
    rating: 5,
    comment: "Excellent attention to detail. Will definitely come back.",
  },
  {
    id: 3,
    user: "Sophie L.",
    rating: 4,
    comment: "Loved the atmosphere and the staff was very professional.",
  },
];

export const stats = {
  revenue: 45231.89,
  revenueChange: 20.1,
  bookings: 1240,
  bookingsChange: 15.3,
  customers: 850,
  customersChange: 12.5,
};

export const categories = [
  { name: "Hair", icon: Scissors },
  { name: "Skincare", icon: Star },
  { name: "Nails", icon: Calendar },
  { name: "Massage", icon: User }, // Placeholder icon
  { name: "Men", icon: Clock }, // Placeholder icon
];
