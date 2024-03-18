import { useForm } from 'react-hook-form';
import StyledLabel from '../../ui/StyledLabel';
import CabinFormRow from './CabinFormRow';
import useCreateCabin from './useCreateCabin';
import useEditCabin from './useEditCabin';
import StyledButton from '../../ui/StyledButton';
import FormInput from './FormInput';
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
			className='p-8 border rounded-md bg-background border-border text-5'>
			<CabinFormRow error={errors?.name}>
				<StyledLabel>Cabin name</StyledLabel>
				<FormInput
					name='name'
					type='text'
					register={register}
					validationRules={{ required: 'cabin must have name' }}
				/>
			</CabinFormRow>
			<CabinFormRow error={errors?.maxCapacity}>
				<StyledLabel>Maximum capacity</StyledLabel>
				<FormInput
					register={register}
					name='maxCapacity'
					validationRules={{
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
					}}
					type='number'
				/>
			</CabinFormRow>
			<CabinFormRow error={errors?.regularPrice}>
				<StyledLabel>Regular price</StyledLabel>
				<FormInput
					register={register}
					name='regularPrice'
					validationRules={{
						required: "can't be empty",
						min: {
							value: 0,
							message: "price can't be small than zero",
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Please enter only numeric values',
						},
					}}
					type='number'
				/>
			</CabinFormRow>
			<CabinFormRow error={errors?.discount}>
				<StyledLabel>Discount</StyledLabel>
				<FormInput
					register={register}
					name='discount'
					validationRules={{
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
					}}
					type='number'
				/>
			</CabinFormRow>
			<CabinFormRow>
				<StyledLabel>Descriptison for website</StyledLabel>
				<textarea
					{...register('description', { required: "can't be empty" })}
					type='text'
					className='w-full h-40 px-5 py-3 border border-gray-300 rounded-md shadow-sm resize bg-background text-text focus:outline-indigo-500'
				/>
				<span className='text-xs text-red-600'>
					{errors && errors?.description?.message}
				</span>
			</CabinFormRow>
			<div className='flex items-center space-x-4'>
				<StyledButton type='submit' color='indigo' className={'my-4'}>
					{isCreating ? 'createing cabin' : 'Add Cabin'}
				</StyledButton>
				<StyledButton color={'white'} onClick={onClose}>
					Cancel
				</StyledButton>
			</div>
		</form>
	);
}

export default CabinForm;
