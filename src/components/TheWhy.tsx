import React from 'react'

export const TheWhy = () => {
	return (
		<section className='w-screen h-40 bg-gray2 flex justify-center items-center'>
			<ul className='md:w-3/4 flex md:flex-row flex-col  justify-center md:justify-around'>
				<li className='w-1/3'>
					<div>
						<img src='/src/assets/badge.png' alt='badge of satisfaction ' className='w-1/12' />
					</div>
					<p className='text-base font-semi-bold'>99 Percent</p>
					<p className='text-sm font-thin'>Customer Satisfaction Rate</p>
				</li>
				<li className='w-1/3'>
					<div>
						<img src='/src/assets/badge-thumbs.png' alt='badge of satisfaction ' className='w-1/12' />
					</div>
					<p className='text-base font-semi-bold'>Real Food, Unreal Flavor</p>
					<p className='text-sm font-thin'>Chef-crafted, dietitian-approved meals.</p>
				</li>
				<li className='w-1/3'>
					<div>
						<img src='/src/assets/clock.png' alt='badge of satisfaction ' className='w-1/12' />
					</div>
					<p className='text-base font-semi-bold'>Convenient Meal Delivery</p>
					<p className='text-sm font-thin'>New Fresh &#38; Ready healthy meals delivered to your door.</p>
				</li>
			</ul>
		</section>
	)
}
