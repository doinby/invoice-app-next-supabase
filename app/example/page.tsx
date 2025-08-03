import supabaseClient from '@/ultils/supabase-browser';

export default async function Invoices() {
	const supabase = supabaseClient;
	const { data: instruments } = await supabase
		.from('invoices_v02')
		.select(
			`*, customer:customers_v02 (*, customer_addresses_v02 (*)), invoice_items:invoice_line_items_v02 (*, products_v02 (*, product_prices_v02 (*)))`
		);
	// .eq('id', 457)
	// .single();
	return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
