export default function Animation() {
	return (
		<div className='bg-pink-200 w-32 h-32 border-amber-500 border-8 animate-spin rounded-full grid grid-cols-2 p-4'>
			<div className='w-4 h-4 bg-red-500 animate-pulse'></div>
			<div className='w-4 h-4 bg-red-500 animate-spin'></div>
			<div className='w-4 h-4 bg-red-500 animate-ping'></div>
			<div className='w-4 h-4 bg-red-500 animate-bounce'></div>
		</div>
	)
}
