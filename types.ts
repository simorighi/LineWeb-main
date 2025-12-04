export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Villa' | 'Penthouse' | 'Mansion' | 'Apartment';
  featured?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}