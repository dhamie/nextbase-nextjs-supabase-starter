CREATE TABLE IF NOT EXISTS
public.community_info (
id uuid NOT NULL DEFAULT uuid_generate_v4(),
name character varying NOT NULL,
foreign key (id) references community_tags (id),
description character varying NOT NULL,
created_at timestamp WITH time zone NOT NULL DEFAULT NOW()
);


ALTER TABLE public.community_info ENABLE ROW LEVEL SECURITY;

-- 2. Create Policy for SELECT
CREATE POLICY select_all_policy ON public.community_info FOR
SELECT USING (TRUE);

-- 3. Create Policy for INSERT
CREATE POLICY insert_auth_policy ON public.community_info FOR
INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- 4. Create Policy for UPDATE
CREATE POLICY update_auth_policy ON public.community_info FOR
UPDATE USING (auth.uid() = id);