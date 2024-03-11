import supabase from './supabase';

export async function getCabins() {
	let { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		console.log(error.message);
		throw new Error("cabins can't be loaded");
	}
	return data;
}

export async function deleteCabins(id) {
	const { error, data } = await supabase.from('cabins').delete().eq('id', id);
	if (error) {
		console.log(error.message);
		throw new Error("cabins can't be deleted");
	}

	return data;
}
export async function createUpdateCabin(cabin, id = null) {
	console.log('serviece', cabin, id);
	let baseQuery = supabase.from('cabins');
	if (!id) {
		baseQuery = baseQuery.insert([cabin]);
	}
	if (id) {
		baseQuery = baseQuery.update(cabin).eq('id', id);
	}

	const { data, error } = await baseQuery.select().single();

	if (error) {
		console.log('can not add new cabins');
		throw new Error(error.message);
	}

	return data;
}
