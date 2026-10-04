export const site = {
  name: "L-JIST Homestay",
  tagline: "The Meghalaya Escape",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || "916009762101",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 60097 62101",
  address: "GCVF+4R, Markasa, Meghalaya 793119, India",
  region: "Markasa, East Khasi Hills, Meghalaya",
  coords: { lat: "25.5433° N", lng: "91.4246° E" },
  rating: 4.8,
  reviewCount: 69,
  mapsUrl:
    "https://www.google.com/maps/place/GCVF%2B4R+L-JIST+Homestay,+Markasa,+Meghalaya+793119",
  mapEmbedUrl:
    "https://www.google.com/maps?q=L-JIST+Homestay,+Markasa,+Meghalaya+793119&z=15&output=embed",
};

export function whatsappUrl(text) {
  const message = encodeURIComponent(text);
  return `https://wa.me/${site.phoneE164}?text=${message}`;
}

export const defaultWhatsappText = `Hi, I'd like to enquire about staying at ${site.name}`;

export const navLinks = [
  { href: "#story", label: "Journal" },
  { href: "#stay", label: "The Stay" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#notes", label: "Notes" },
  { href: "#coords", label: "Location" },
];

export const stayFeatures = [
  { n: "01", text: "Double bed plus an extra single, sleeps up to three" },
  { n: "02", text: "Private living room, kitchenette and bathroom" },
  { n: "03", text: "Wood fireplace, lit most evenings on request" },
  { n: "04", text: "Home-cooked meals, family-style" },
  { n: "05", text: "Uninterrupted views across the valley" },
];

export const amenities = [
  {
    n: "01 / 06",
    title: "Evening bonfire",
    text: "A proper fire pit, lit for guests most evenings.",
  },
  {
    n: "02 / 06",
    title: "Home-cooked meals",
    text: "Family-style food, cooked fresh, not off a menu.",
  },
  {
    n: "03 / 06",
    title: "Private cottage",
    text: "Living room, kitchenette and bathroom, all your own.",
  },
  {
    n: "04 / 06",
    title: "Wood fireplace",
    text: "For the colder evenings, lit on request.",
  },
  {
    n: "05 / 06",
    title: "Mountain views",
    text: "Uninterrupted, in every direction, at every hour.",
  },
  {
    n: "06 / 06",
    title: "On-site parking",
    text: "Space to park right by the cottage.",
  },
];

export const galleryFeatured = {
  src: "/images/layers.jpg",
  alt: "Layered Meghalaya hills",
  cap: "00 — THE VIEW FROM MARKASA",
  fullCap: "Layers of the East Khasi Hills, seen from the property",
};

export const galleryItems = [
  { src: "/images/hero.jpg", alt: "Cottage at sunset", cap: "01 — GOLDEN HOUR", fullCap: "Sunset at the cottage, Markasa" },
  { src: "/images/pinkcottage.jpg", alt: "Cottage exterior", cap: "02 — THE COTTAGE", fullCap: "The cottage exterior, painted pink" },
  { src: "/images/bedroom.jpg", alt: "Cottage bedroom", cap: "03 — WHERE YOU SLEEP", fullCap: "Cosy cottage bedroom" },
  { src: "/images/breakfast.jpg", alt: "Home-cooked meal spread", cap: "04 — HOME-COOKED", fullCap: "A home-cooked meal, served on the porch" },
  { src: "/images/tea.jpg", alt: "Tea over the valley", cap: "05 — EVENING TEA", fullCap: "Evening tea over the valley" },
  { src: "/images/noodles.jpg", alt: "Food overlooking the hills", cap: "06 — HILLTOP LUNCH", fullCap: "Hot food, hilltop views" },
  { src: "/images/village.jpg", alt: "Markasa village terraces", cap: "07 — THE VILLAGE", fullCap: "Terraced fields in the village of Markasa" },
  { src: "/images/flowers.jpg", alt: "Wildflowers at the property", cap: "08 — WILDFLOWERS", fullCap: "Wildflowers on the property" },
  { src: "/images/signboard.jpg", alt: "L-JIST Homestay road sign", cap: "09 — FINDING US", fullCap: "Signposted from the main road" },
];

export const guestNotes = [
  {
    quote:
      "The hosts made us feel like friends, not paying guests. Hospitality like this is rare to find.",
    who: "GOOGLE REVIEW, 5★",
  },
  {
    quote:
      "The highlight of our whole trip. Welcomed like family, and the cottage was spotless and cozy.",
    who: "GOOGLE REVIEW, 5★",
  },
  {
    quote:
      "Our own living room, kitchen and fireplace — and a view that stayed with us long after we left.",
    who: "GOOGLE REVIEW, 5★",
  },
];
