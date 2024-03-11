import { useForm } from 'react-hook-form';
import StyledLabel from '../../ui/StyledLabel';
import BrandButton from '../../ui/BrandButton';
import CabinFormRow from './CabinFormRow';
import useCreateCabin from './useCreateCabin';
import useEditCabin from './useEditCabin';
import StyledButton from '../../ui/StyledButton';
function CabinForm({ editableCabin = {}, onClose }) {
	const { isCreating, createCabinMutate } = useCreateCabin();
	const { id: editableCabinId, ...editCabinValues } = editableCabin;
	const { editCabin } = useEditCabin();
	const isEditForm = Boolean(editableCabinId);
	const {
		register,
		handleSubmit,
		getValues,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: isEditForm ? editCabinValues : {} });
	const onSubmit = (data) => {
		if (isEditForm) {
			editCabin(
				{ cabin: data, id: editableCabinId },
				{
					onSuccess: () => {
						reset();
						onClose();
					},
				}
			);
		} else {
			createCabinMutate(data, {
				onSuccess: () => {
					reset();
					onClose();
				},
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='p-8 bg-white border border-gray-100 rounded-md text-5'>
			<CabinFormRow>
				<StyledLabel>Cabin name</StyledLabel>
				<input
					{...register('name', { required: 'cabin must have name' })}
					type='text'
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				<div>{errors && errors?.name?.message}</div>
			</CabinFormRow>
			<CabinFormRow>
				<StyledLabel>Maximum capacity</StyledLabel>
				<input
					{...register('maxCapacity', {
						required: "can't be empty",
						min: {
							value: 1,
							message: "capacity can't be less than one",
						},
						max: {
							value: 15,
							message: 'currently cabins can not reach more than 15',
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Please enter only numeric values',
						},
					})}
					type='number'
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				<div>{errors && errors?.maxCapacity?.message}</div>
			</CabinFormRow>
			<CabinFormRow>
				<StyledLabel>Regular price</StyledLabel>
				<input
					{...register('regularPrice', {
						required: "can't be empty",
						min: {
							value: 0,
							message: "price can't be small than zero",
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Please enter only numeric values',
						},
					})}
					type='number'
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				<div>{errors && errors?.regularPrice?.message}</div>
			</CabinFormRow>
			<CabinFormRow>
				<StyledLabel>Discount</StyledLabel>
				<input
					{...register('discount', {
						required: "can't be empty",
						validate: (value) => {
							const numericDiscount = Number(value);
							const numericPrice = Number(getValues('regularPrice'));
							return (
								numericDiscount < numericPrice ||
								'Discount should be less than regular price'
							);
						},
						min: { value: 0, message: 'discount can not less than zero' },
						pattern: {
							value: /^[0-9]*$/,
							message: 'enter only numeric values',
						},
					})}
					type='number'
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				<div>{errors && errors?.discount?.message}</div>
			</CabinFormRow>
			<CabinFormRow>
				<StyledLabel>Description for website</StyledLabel>
				<textarea
					{...register('description', { required: "can't be empty" })}
					type='text'
					className='w-full h-40 px-5 py-3 border border-gray-300 rounded-md shadow-sm resize focus:outline-indigo-500'
				/>
				<div>{errors && errors?.description?.message}</div>
			</CabinFormRow>
			<div className='flex items-center space-x-4'>
				<BrandButton type='submit' sx={'my-4'}>
					{isCreating ? 'createing cabin' : 'Add Cabin'}
				</BrandButton>
				<StyledButton onClick={onClose} sx='bg-gray-200'>
					Cancel
				</StyledButton>
			</div>
		</form>
	);
}

export default CabinForm;
