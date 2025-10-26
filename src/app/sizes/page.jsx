export default function Size() {

    return (
			// <div className="h-screen">

			//     <div className="flex w-full min-w-full max-w-full h-full min-h-full max-h-full bg-yellow-500">
			//         <div>Box</div>
			//         <div>Box</div>
			//     </div>
			//     <div className="w-auto bg-red-500">B</div>

			// </div>
			// <div className='min-w-xl max-w-5xl min-h-16 max-h-80 h-80'>
			// 	<div className='w-80 h-80'>
			// 		<div className='bg-green-400'>
			// 			<h1>Hello</h1>
			// 		</div>
			// 	</div>
			// </div>

			// <div className='min-w-xl max-w-5xl min-h-16 max-h-80 overflow-auto bg-gray-200'>
			// 	<div className='w-80 bg-green-400'>
			// 		<h1>Hello</h1>
			// 		<p>Some long text here...</p>
			// 	</div>
			// </div>

			<div className='flex h-screen w-screen bg-amber-700 max-w-screen'>
				<div className='bg-blue-500'>Box</div>
				<div className='bg-blue-400'>Box</div>
				<div className='bg-blue-300 w-max'>Box</div>
			</div>
		)
}
