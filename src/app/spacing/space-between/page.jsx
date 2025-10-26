export default function SpaceBetween() {
	return (
		<div>
			<div className='flex space-x-1 mb-40'>
				<div className='border'>Box1</div>
				<div className='border'>Box2</div>
				<div className='border'>Box3</div>
			</div>
			<div className='flex flex-col space-y-1'>
				<div className='border'>Box1</div>
				<div className='border'>Box2</div>
				<div className='border'>Box3</div>
			</div>
		</div>
	)
}
