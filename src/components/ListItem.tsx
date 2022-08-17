import React from 'react'
import { list } from './Types'

export const ListItem = ({ item, description, imageSrc }: list) => {
	return (
		<li className={` md:w-3/4  mt-12 pl-12 md:px-0 `}>
			<div className='flex w-1/2   items-center '>
				<div className='w-1/6 bg-gray'>
					<img src={imageSrc} alt='' className='w-2/3' />
				</div>
				<p className=''>{item} </p>
			</div>
			<div className='flex w-4/5 text-sm items-center mt-2 '>
				<div className='w-1/5  h-2  block'> </div>
				<p className='text-base text-black font-thin'>{description}</p>
			</div>
		</li>
	)
}
