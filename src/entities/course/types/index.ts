export interface Course {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  characteristics: Characteristic[];
  image: string;
  link: string;
  credit: number;
  price: number;
  oldPrice: number;
  description: string;
  initialRating: number;
  advantages?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  html: string;
  blog: Blog;
  companyId: string;
  clicks: number;
  reviews: Review[];
  reviewCount: number;
  reviewAvg?: number;
  disAdvantages?: string;
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface Blog {
  text: string;
  _id: string;
}

export interface Review {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  site?: string;
}

export interface CourseReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface CourseReview extends CourseReviewForm {
  productId: string;
}

export interface CourseReviewResponse {
  message: string;
}
