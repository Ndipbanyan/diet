import React from 'react'

export const Footer = () => {
	return (
		<footer>
			<div className=' w-screen h-auto  bg-footer bg-cover   bg-no-repeat flex items-center justify-center text-white'>
				<section className=' h-full  flex flex-col items-center py-10  text-center'>
					<p className=' text-4xl'>Join our waitlist</p>
					<p className='font-thin text-base mt-4'>
						Subscribe to be up to date with our latest <span className='block'>news and stories</span>
					</p>
					<form>
						<div className=''>
							<label htmlFor='waitlist'></label>
							<input
								type='email'
								name='waitlist'
								id='waitlist'
								className=' w-80 p-2 md:w-96 md:p-4 rounded mt-2 md:mt-0 '
								placeholder='Enter email address'
							/>
							<button type='submit' className='bg-[#e5e500] text-red ml-4   my-6 md:my-10 text-base  p-2 md:p-4 w-60 rounded'>
								JOIN WAITLIST
							</button>
						</div>
					</form>
					<p>Follow us on</p>
					<div className='flex items-center justify-center w-full mt-6'>
						<div className='flex items-center justify-center w-10 '>
							<a href='#'>
								<img src='/src/assets/twitter.png' alt='' />
							</a>
						</div>
						<div className='flex items-center justify-center w-10 ml-6'>
							<a href='#'>
								<img src='/src/assets/instagram.png' alt='' />
							</a>
						</div>
						<div className='flex items-center justify-center w-10 ml-6'>
							<a href='#'>
								<img src='/src/assets/medium.png' alt='' />
							</a>
						</div>
						<div className='flex items-center justify-center w-10 ml-6'>
							<a href='#'>
								<img src='/src/assets/inked.png' alt='' />
							</a>
						</div>
						<div className='flex items-center justify-center w-10 ml-6 '>
							<a href='#'>
								<img src='/src/assets/facebook.png' alt='' />
							</a>
						</div>
					</div>
				</section>
			</div>
			<section className='flex w-2/4 text-base font-thin justify-between   h-64 pl-32 mt-10 leading-loose'>
				<article className='w-3/4'>
					<h5 className='text-red font-normal'>Sign up for updates</h5>
					<p>
						Need more info and want a free chat session with a chef? We would be glad to schedule a one-on-one demo to tell
						you more on how we work.
					</p>
					<form>
						<label htmlFor='update'></label>{' '}
						<div className=''>
							<input type='email' placeholder='Email address' className='w-3/4 p-2 rounded mt-6 border' />
						</div>
						<button type='submit' className='text-white bg-red font thin w-3/4 py-2 rounded my-6'>
							Submit
						</button>
					</form>
				</article>
				<article>
					<h5 className='text-red font-normal'>Useful Links</h5>
					<div>
						<ul className=''>
							<li>
								<a href='/about'>. About Us</a>
							</li>
							<li>
								<a href='/faqs'>. FAQs</a>
							</li>
							<li>
								<a href='/contact'>. Contact Us</a>
							</li>
						</ul>
					</div>
				</article>
			</section>
		</footer>
	)
}
