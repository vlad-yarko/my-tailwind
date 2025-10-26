export default function Gap() {
	return (
		<div>
			<div className='flex gap-2 mb-40'>
				<div className='border'>Box1</div>
				<div className='border'>Box2</div>
				<div className='border'>Box3</div>
			</div>
			<div className='flex flex-col gap-y-2 gap-x-1'>
				<div className='border'>Box1</div>
				<div className='border'>Box2</div>
				<div className='border'>Box3</div>
			</div>
		</div>
	)
}
