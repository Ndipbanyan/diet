import React from 'react'

export const Footer = () => {
	return (
		<footer className=' w-screen h-auto  bg-footer bg-cover   bg-no-repeat flex items-center justify-center text-white'>
			<div className=' h-full  flex flex-col items-center py-10  text-center'>
				<p className=' text-4xl'>Join our waitlist</p>
				<p className='font-thin text-base mt-4'>
					Subscribe to be up to date with our latest <span className='block'>news and stories</span>
				</p>
				<form>
					<div className=''>
						<label htmlFor='email'></label>
						<input
							type='email'
							name='email'
							id='email'
							className=' w-80 p-2 md:w-96 md:p-4 rounded mt-2 md:mt-0 '
							placeholder='Enter email address'
						/>
						<button
							type='submit'
							className='bg-[#e5e500] text-[#B20000] ml-4   my-6 md:my-10 text-base  p-2 md:p-4 w-60 rounded'
						>
							JOIN WAITLIST
						</button>
					</div>
					<p>Follow us on</p>
					<div className='flex items-center justify-center w-full mt-6'>
						<div className='flex items-center justify-center w-10 '>
							<img src='/src/assets/twitter.png' alt='' />
						</div>
						<div className='flex items-center justify-center w-10 ml-6'>
							<img src='/src/assets/instagram.png' alt='' />
						</div>
						<div className='flex items-center justify-center w-10 ml-6'>
							<img src='/src/assets/medium.png' alt='' />
						</div>
						<div className='flex items-center justify-center w-10 ml-6'>
							<img src='/src/assets/inked.png' alt='' />
						</div>
						<div className='flex items-center justify-center w-10 ml-6 '>
							<img src='/src/assets/facebook.png' alt='' />
						</div>
					</div>
				</form>
			</div>
		</footer>
	)
}
