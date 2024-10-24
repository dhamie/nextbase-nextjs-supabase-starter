import { PrivateItemsList } from '@/app/(dynamic-pages)/(main-pages)/PrivateItemsList';
import { createSupabaseClient } from '@/supabase-clients/server';

export const dynamic = 'force-dynamic';

export default async function Test() {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from('private_items').select('*');

  if (error) {
    throw error;
  }
  return (
    <div className="max-w-2xl">
      <PrivateItemsList privateItems={data} />
    </div>
  );
}
