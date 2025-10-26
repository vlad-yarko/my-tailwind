export default function Grid() {

    return (
			<div className='w-full h-full'>
				<div className='grid grid-flow-row grid-cols-[100px_200px_300px] grid-rows-[50px_100px]'>
					<div className='border bg-sky-500 p-6'>First column</div>
					<div className='border bg-sky-500 p-6'>Second column</div>
					<div className='border bg-sky-500 p-6'>Third column</div>
					<div className='border bg-sky-500 p-6'>Fourth column</div>
				</div>

				<div className='grid grid-flow-col grid-rows-[100px_200px_300px]'>
					<div className='border bg-sky-500 p-6'>First column</div>
					<div className='border bg-sky-500 p-6'>Second column</div>
					<div className='border bg-sky-500 p-6'>Third column</div>
					<div className='border bg-sky-500 p-6'>Fourth column</div>
				</div>
			</div>
		)
}


// ;<div className='w-full'>
// 	<div className='grid grid-flow-col gap-1 grid-cols-3'>
// 		<div className='border col-start-2 col-end-6 bg-sky-500 p-6'>
// 			First column
// 		</div>
// 		<div className='border col-start-1 bg-sky-500 p-6'>Second column</div>
// 		<div className='border col-end-7 bg-sky-500 p-6'>Third column</div>
// 		<div className='border bg-sky-500 p-6'>Fourth column</div>

// 		<div className='border bg-sky-500 p-6'>Fifth column</div>
// 		<div className='border bg-sky-500 p-6 col-span-3'>Sixth column</div>
// 	</div>
// </div>


{/* <div className='w-full h-full'>
				<div className='grid grid-flow-col-dense grid-rows-2 gap-1'>
					<div className='col-span-2 row-span-2 border bg-sky-500 p-6'>First column</div>
					<div className='border bg-sky-500 p-6'>Second column</div>
					<div className='border bg-sky-500 p-6'>Third column</div>
					<div className='border bg-sky-500 p-6'>Fourth column</div>

					<div className='border bg-sky-500 p-6'>Fifth column</div>
					<div className='border bg-sky-500 p-6'>Fifth column</div>
					<div className='border bg-sky-500 p-6'>Fifth column</div>
					<div className='row-start-2 row-end-4 border bg-sky-500 p-6'>Sixth column</div>
				</div>
			</div> */}
