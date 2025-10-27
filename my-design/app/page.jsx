"use client"

import { useState } from "react"

import ArrowDown from "./arrowDown"


export default function Design() {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ selectValue, setSelectValue ] = useState("Option 1")

    const updateValue = (value) => {
      setSelectValue(value);
      setIsOpen(false);
    }

    return (
			<div>
				<h1 className=''>This is a title</h1>
				<h2 className=''>This is a subtitle</h2>
				<p className='text-base'>This is a paragraph</p>
				<a href={`/`}>This is an anchor</a>
				<div className='my-4'>
					<button className='btn btn-primary'>This is a primary button</button>
				</div>
				<div className='my-4'>
					<button className='btn btn-secondary'>
						This is a secondary button
					</button>
				</div>
				<div className='my-4'>
					<button disabled className='btn btn-primary'>
						This is a disabled button
					</button>
				</div>
				<div className=''>
					<input placeholder='E-mail' type='text' />
				</div>
				<div className=''>
					<input disabled type='text' />
				</div>
				<div>
					<input type='date' />
				</div>
				<div className='flex items-start my-4'>
					<input type='checkbox' id='checkbox' />
					<label htmlFor='checkbox'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
						molestias repudiandae nemo adipisci incidunt officiis eligendi optio
						ex beatae. Magni quis tempora quaerat? Rerum adipisci, fugiat odio
						facilis in quos?
					</label>
				</div>
				<div>
					<select>
						<option>Option 1</option>
						<option>Option 2</option>
					</select>
				</div>

				<div className='Select'>
					<div
						className='child flex items-center justify-between'
						onClick={() => setIsOpen(!isOpen)}
					>
						<span>{selectValue}</span>
						<div className={`transition ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
							<ArrowDown />
						</div>
					</div>
					{isOpen && (
						<div>
							<ul className='flex flex-col divide-y border-t'>
								<li className='child' onClick={() => updateValue('Option 1')}>
									Option 1
								</li>
								<li className='child' onClick={() => updateValue('Option 2')}>
									Option 2
								</li>
								<li className='child' onClick={() => updateValue('Option 3')}>
									Option 3
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		)
}
