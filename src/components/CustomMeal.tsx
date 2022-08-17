import React from 'react'
import { ListItem } from './ListItem'

export const CustomMeal = () => {
	return (
		<section className='w-screen  bg-cover   bg-no-repeat  bg-custom-meal '>
			<div className=' bg-gray/50  w-screen flex  flex-col md:flex-row md:justify-center '>
				<div className='flex flex-col md:flex-row md:w-4/5 md:h-3/4 justify-center md:justify-between md:my-10 md:py-14 '>
					<article className='w-screen md:w-2/5 leading-10flex flex-col justify-center md:block '>
						<p className='text-gray1 text-2xl md:text-base md:font-thin leading-10 text-center md:text-start'>
							MEAL PLAN FOR YOUR TASTE
						</p>
						<div className='w-screen contain md:hidden'>
							<img src='/src/assets/custom-meal.png' alt='three bowls of food' />
						</div>
						<p className=' text-2xl  text-center md:text-start md:text-5xl font-normal text-black'>
							Custom meal plans just for you
						</p>
						<ul className='flex flex-col   justify-center md:justify-start w-full md:w-fit'>
							<ListItem
								item='Paleo'
								description='Our Paleo meal plans focus on all-natural foods such as meats and veggies.'
								imageSrc='/src/assets/tick.png'
							/>
							<ListItem
								item='Low Carb'
								description='Low carb meal plans can help you control your weight and blood sugar.'
								imageSrc='/src/assets/tick.png'
							/>
						</ul>
					</article>
					<div className='w-1/2 hidden md:block'>
						<img src='/src/assets/custom-meal.png' alt='three bowls of food' />
					</div>
				</div>
			</div>
		</section>
	)
}
