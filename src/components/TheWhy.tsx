import React from 'react'

export const TheWhy = () => {
	return (
		<section className='w-screen md:h-40 bg-gray2 flex justify-center items-center'>
			<ul className=' w-screen md:w-3/4 flex md:flex-row flex-col  justify-center items-center md:items-start md:justify-around py-4 md:py-0'>
				<li className='md:w-1/3 w-screen md:block flex  flex-col justify-center items-center'>
					<div className='w-1/12   flex  md:block flex-col justify-center items-center'>
						<img src='/src/assets/badge.png' alt='badge of satisfaction ' />
					</div>
					<p className='text-base font-semi-bold'>99 Percent</p>
					<p className='text-sm font-thin'>Customer Satisfaction Rate</p>
				</li>
				<li className='md:w-1/3 w-screen md:block flex  flex-col justify-center items-center'>
					<div className=' w-1/12  flex  md:block flex-col justify-center items-center'>
						<img src='/src/assets/badge-thumbs.png' alt='badge of quality ' />
					</div>
					<p className='text-base font-semi-bold'>Real Food, Unreal Flavor</p>
					<p className='text-sm font-thin'>Chef-crafted, dietitian-approved meals.</p>
				</li>
				<li className='md:w-1/3 w-screen md:block flex  flex-col justify-center items-center'>
					<div className=' w-1/12 flex  md:block flex-col justify-center items-center'>
						<img src='/src/assets/clock.png' alt='badge of satisfaction ' />
					</div>
					<p className='text-base font-semi-bold'>Convenient Meal Delivery</p>
					<p className='text-sm font-thin'>New Fresh &#38; Ready healthy meals delivered to your door.</p>
				</li>
			</ul>
		</section>
	)
}
