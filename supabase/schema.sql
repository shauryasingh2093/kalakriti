-- Kalakriti Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- USERS & PROFILES
-- =============================================

-- Create enum for user roles
CREATE TYPE user_role AS ENUM ('artisan', 'buyer', 'organizer');

-- Extend the auth.users with a profiles table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role user_role NOT NULL DEFAULT 'buyer',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- ARTISAN PROFILES
-- =============================================

CREATE TABLE public.artisan_profiles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
    name TEXT NOT NULL,
    bio TEXT,
    craft_journey TEXT,
    experience_years INTEGER,
    awards TEXT[],
    region TEXT,
    specialization TEXT,
    profile_image TEXT,
    cover_image TEXT,
    followers_count INTEGER DEFAULT 0,
    posts_count INTEGER DEFAULT 0,
    verification_status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- CATEGORIES & REGIONS
-- =============================================

CREATE TABLE public.categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.regions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- PRODUCTS
-- =============================================

CREATE TABLE public.products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    artisan_id UUID REFERENCES public.artisan_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    category_id UUID REFERENCES public.categories(id),
    region_id UUID REFERENCES public.regions(id),
    materials TEXT,
    process_description TEXT,
    cultural_context TEXT,
    images TEXT[], -- Array of image URLs
    stock_quantity INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- EVENTS
-- =============================================

CREATE TYPE event_type AS ENUM ('fair', 'workshop', 'exhibition');

CREATE TABLE public.events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    event_type event_type NOT NULL,
    location TEXT,
    event_date TIMESTAMP WITH TIME ZONE,
    time_slot TEXT, -- e.g. "10:00 AM - 4:00 PM"
    application_deadline TIMESTAMP WITH TIME ZONE,
    price DECIMAL(10, 2) DEFAULT 0,
    seats_total INTEGER DEFAULT 20,
    seats_left INTEGER DEFAULT 20,
    organizer_info TEXT,
    requirements TEXT,
    image TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- EVENT APPLICATIONS
-- =============================================

CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');

CREATE TABLE public.event_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    artisan_id UUID REFERENCES public.artisan_profiles(id) ON DELETE CASCADE,
    status application_status DEFAULT 'pending',
    portfolio_images TEXT[], -- Array of image URLs
    experience_details TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(event_id, artisan_id) -- One application per artisan per event
);

-- =============================================
-- COMMUNITY (V2 - Optional for MVP)
-- =============================================

CREATE TABLE public.posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    artisan_id UUID REFERENCES public.artisan_profiles(id) ON DELETE CASCADE,
    content TEXT,
    media_urls TEXT[], -- Array of image/video URLs
    craft_tags TEXT[],
    region_tags TEXT[],
    linked_product_id UUID REFERENCES public.products(id),
    linked_event_id UUID REFERENCES public.events(id),
    likes_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- FOLLOWERS
-- =============================================

CREATE TABLE public.followers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    artisan_id UUID REFERENCES public.artisan_profiles(id) ON DELETE CASCADE,
    buyer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(artisan_id, buyer_id)
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

CREATE INDEX idx_products_artisan ON public.products(artisan_id);
CREATE INDEX idx_products_category ON public.products(category_id);
CREATE INDEX idx_products_region ON public.products(region_id);
CREATE INDEX idx_products_featured ON public.products(is_featured);
CREATE INDEX idx_events_type ON public.events(event_type);
CREATE INDEX idx_events_active ON public.events(is_active);
CREATE INDEX idx_applications_status ON public.event_applications(status);
CREATE INDEX idx_posts_artisan ON public.posts(artisan_id);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artisan_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.followers ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all, update own
CREATE POLICY "Public profiles are viewable by everyone" 
    ON public.profiles FOR SELECT 
    USING (true);

CREATE POLICY "Users can update own profile" 
    ON public.profiles FOR UPDATE 
    USING (auth.uid() = id);

-- Artisan Profiles: Public read, artisan can update own
CREATE POLICY "Artisan profiles are viewable by everyone" 
    ON public.artisan_profiles FOR SELECT 
    USING (true);

CREATE POLICY "Artisans can update own profile" 
    ON public.artisan_profiles FOR UPDATE 
    USING (auth.uid() = user_id);

CREATE POLICY "Artisans can insert own profile" 
    ON public.artisan_profiles FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Products: Public read, artisan can manage own
CREATE POLICY "Products are viewable by everyone" 
    ON public.products FOR SELECT 
    USING (true);

CREATE POLICY "Artisans can insert own products" 
    ON public.products FOR INSERT 
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Artisans can update own products" 
    ON public.products FOR UPDATE 
    USING (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Artisans can delete own products" 
    ON public.products FOR DELETE 
    USING (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

-- Events: Public read
CREATE POLICY "Events are viewable by everyone" 
    ON public.events FOR SELECT 
    USING (true);

-- Event Applications: Artisans can view/manage own
CREATE POLICY "Artisans can view own applications" 
    ON public.event_applications FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Artisans can insert own applications" 
    ON public.event_applications FOR INSERT 
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

-- Posts: Public read, artisan can manage own
CREATE POLICY "Posts are viewable by everyone" 
    ON public.posts FOR SELECT 
    USING (true);

CREATE POLICY "Artisans can insert own posts" 
    ON public.posts FOR INSERT 
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Artisans can update own posts" 
    ON public.posts FOR UPDATE 
    USING (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Artisans can delete own posts" 
    ON public.posts FOR DELETE 
    USING (
        EXISTS (
            SELECT 1 FROM public.artisan_profiles 
            WHERE id = artisan_id AND user_id = auth.uid()
        )
    );

-- Followers: Buyer can manage own, anyone can see counts (via table read)
CREATE POLICY "Followers are viewable by everyone" 
    ON public.followers FOR SELECT 
    USING (true);

CREATE POLICY "Buyers can follow artisans" 
    ON public.followers FOR INSERT 
    WITH CHECK (auth.uid() = buyer_id);

CREATE POLICY "Buyers can unfollow artisans" 
    ON public.followers FOR DELETE 
    USING (auth.uid() = buyer_id);

-- =============================================
-- FUNCTIONS & TRIGGERS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_artisan_profiles_updated_at BEFORE UPDATE ON public.artisan_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON public.posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, role)
    VALUES (NEW.id, NEW.email, COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'buyer'));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to increment/decrement counters
CREATE OR REPLACE FUNCTION update_artisan_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        IF (TG_TABLE_NAME = 'followers') THEN
            UPDATE public.artisan_profiles SET followers_count = followers_count + 1 WHERE id = NEW.artisan_id;
        ELSIF (TG_TABLE_NAME = 'posts') THEN
            UPDATE public.artisan_profiles SET posts_count = posts_count + 1 WHERE id = NEW.artisan_id;
        END IF;
    ELSIF (TG_OP = 'DELETE') THEN
        IF (TG_TABLE_NAME = 'followers') THEN
            UPDATE public.artisan_profiles SET followers_count = followers_count - 1 WHERE id = OLD.artisan_id;
        ELSIF (TG_TABLE_NAME = 'posts') THEN
            UPDATE public.artisan_profiles SET posts_count = posts_count - 1 WHERE id = OLD.artisan_id;
        END IF;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Triggers for counters
CREATE TRIGGER trigger_update_follower_count
AFTER INSERT OR DELETE ON public.followers
FOR EACH ROW EXECUTE FUNCTION update_artisan_stats();

CREATE TRIGGER trigger_update_post_count
AFTER INSERT OR DELETE ON public.posts
FOR EACH ROW EXECUTE FUNCTION update_artisan_stats();

-- =============================================
-- SEED DATA (Optional - for development)
-- =============================================

-- Insert sample categories
INSERT INTO public.categories (name, slug, description) VALUES
    ('Pottery', 'pottery', 'Traditional ceramic and pottery crafts'),
    ('Weaving', 'weaving', 'Handloom and textile weaving'),
    ('Metalwork', 'metalwork', 'Traditional metal crafting'),
    ('Woodwork', 'woodwork', 'Carved wooden crafts'),
    ('Embroidery', 'embroidery', 'Traditional embroidery and stitching'),
    ('Painting', 'painting', 'Traditional art and painting');

-- Insert sample regions
INSERT INTO public.regions (name, slug, description) VALUES
    ('Rajasthan', 'rajasthan', 'Western India'),
    ('Gujarat', 'gujarat', 'Western India'),
    ('West Bengal', 'west-bengal', 'Eastern India'),
    ('Tamil Nadu', 'tamil-nadu', 'Southern India'),
    ('Karnataka', 'karnataka', 'Southern India'),
    ('Uttar Pradesh', 'uttar-pradesh', 'Northern India');

-- =============================================
-- STORAGE BUCKETS (Manual Creation Required)
-- =============================================
-- Buckets to create: 'profiles', 'products', 'community'

-- Set up storage policies for 'profiles' bucket
-- CREATE POLICY "Profile images are public" ON storage.objects FOR SELECT USING (bucket_id = 'profiles');
-- CREATE POLICY "Users can upload own profile image" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'profiles' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Set up storage policies for 'products' bucket
-- CREATE POLICY "Product images are public" ON storage.objects FOR SELECT USING (bucket_id = 'products');
-- CREATE POLICY "Artisans can upload product images" ON storage.objects FOR INSERT WITH CHECK (
--     bucket_id = 'products' AND 
--     EXISTS (SELECT 1 FROM public.artisan_profiles WHERE user_id = auth.uid())
-- );

-- Set up storage policies for 'community' bucket
-- CREATE POLICY "Community media is public" ON storage.objects FOR SELECT USING (bucket_id = 'community');
-- CREATE POLICY "Artisans can upload community media" ON storage.objects FOR INSERT WITH CHECK (
--     bucket_id = 'community' AND 
--     EXISTS (SELECT 1 FROM public.artisan_profiles WHERE user_id = auth.uid())
-- );
