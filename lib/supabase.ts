import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type UserRole = 'artisan' | 'buyer' | 'organizer';
export type EventType = 'fair' | 'workshop' | 'exhibition';
export type ApplicationStatus = 'pending' | 'approved' | 'rejected';

export interface Profile {
    id: string;
    email: string;
    role: UserRole;
    created_at: string;
    updated_at: string;
}

export interface ArtisanProfile {
    id: string;
    user_id: string;
    name: string;
    bio?: string;
    craft_journey?: string;
    experience_years?: number;
    awards?: string[];
    region?: string;
    specialization?: string;
    profile_image?: string;
    cover_image?: string;
    followers_count: number;
    posts_count: number;
    verification_status: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    created_at: string;
}

export interface Region {
    id: string;
    name: string;
    slug: string;
    description?: string;
    created_at: string;
}

export interface Product {
    id: string;
    artisan_id: string;
    title: string;
    description?: string;
    price?: number;
    category_id?: string;
    region_id?: string;
    materials?: string;
    process_description?: string;
    cultural_context?: string;
    images?: string[];
    stock_quantity: number;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
}

export interface Event {
    id: string;
    title: string;
    description?: string;
    event_type: EventType;
    location?: string;
    event_date?: string;
    time_slot?: string;
    application_deadline?: string;
    price: number;
    seats_total: number;
    seats_left: number;
    organizer_info?: string;
    requirements?: string;
    image?: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface EventApplication {
    id: string;
    event_id: string;
    artisan_id: string;
    status: ApplicationStatus;
    portfolio_images?: string[];
    experience_details?: string;
    submitted_at: string;
    reviewed_at?: string;
}

export interface Post {
    id: string;
    artisan_id: string;
    content?: string;
    media_urls?: string[];
    craft_tags?: string[];
    region_tags?: string[];
    linked_product_id?: string;
    linked_event_id?: string;
    likes_count: number;
    comments_count: number;
    created_at: string;
    updated_at: string;
}

export interface Follower {
    id: string;
    artisan_id: string;
    buyer_id: string;
    created_at: string;
}
