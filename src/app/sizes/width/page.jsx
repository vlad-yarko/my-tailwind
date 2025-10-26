export default function Width() {

    return (
			<div>
				<div className='w-3 h-3'>
					<h1>Hello</h1>
				</div>
				<div className='w-px h-px'>
					<h1>Yep</h1>
				</div>

				<div className='flex border-8 border-blue-500 space-x-1 mb-8'>
					<div className='bg-pink-700 w-3/6'>Box</div>
					<div className='bg-pink-700 w-1/6'>Box</div>
					<div className='bg-pink-700 w-2/6'>Box</div>
				</div>

				<div className='flex flex-col border-8 border-blue-500 space-y-1'>
					<div className='bg-pink-700 h-3/6'>Box</div>
					<div className='bg-pink-700 h-1/6'>Box</div>
					<div className='bg-pink-700 h-2/6'>Box</div>
				</div>
			</div>
		)
}
