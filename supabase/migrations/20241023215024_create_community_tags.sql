CREATE TABLE IF NOT EXISTS
public.community_tags (
id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
tag character varying NOT NULL,
created_at timestamp WITH time zone NOT NULL DEFAULT NOW()
);


-- 1. Enable RLS
ALTER TABLE public.community_tags ENABLE ROW LEVEL SECURITY;

-- 2. Create Policy for SELECT
CREATE POLICY select_all_policy ON public.community_tags FOR
SELECT USING (TRUE);

-- 3. Create Policy for INSERT
CREATE POLICY insert_auth_policy ON public.community_tags FOR
INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- 4. Create Policy for UPDATE
CREATE POLICY update_auth_policy ON public.community_tags FOR
UPDATE USING (auth.uid() = id);
