import supabaseClient from '@/lib/supabase-browser';

export default async function Instruments() {
	const supabase = supabaseClient;
	const { data: instruments } = await supabase.from('instruments').select();
	return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
