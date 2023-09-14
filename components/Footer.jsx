import React from 'react'
const Footer = () => {
  return (
    <section className='flex flex-wrap justify-start sm:justify-around gap-8 sm:gap-0 sm:items-center w-3/4 sm:w-3/4 h-full sm:h-3/4 mt-24 sm:mt-0 font-satoshi text-xs'>
        <div className='flex h-max sm:h-3/4 w-max flex-col'>
            <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>Shop and read more</p>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Airpods</li>
                <li>TV & Home</li>
                <li>Airtag</li>
                <li>Accessories</li>
                <li>Giftcards</li>
            </ul>
            <br />
            <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>Apple Wallet</p>
                <li>Apple Pay</li>
            </ul>
        </div>
        <div className='flex h-max sm:h-3/4 w-max flex-col'>
        <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>Account</p>
                <li>Handle your Apple-ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
            </ul>
            <br />
            <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>Entertainment</p>
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>App Store</li>
            </ul>
        </div>
        <div className='flex h-max sm:h-3/4 w-max flex-col'>
        <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>Apple Store</p>
                <li>Find a store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple summercamp</li>
                <li>Apple Store-app</li>
                <li>Apple Trade In</li>
                <li>Order status</li>
                <li>Shopping help</li>

            </ul>
        </div>
        <div className='flex h-max sm:h-3/4 w-max flex-col'>
        <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>For businesses</p>
                <li>Apple and businesses</li>
                <li>Shop for your business</li>
            </ul>
            <br />
            <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>For education</p>
                <li>Apple in education</li>
                <li>Shop for your studies</li>
            </ul>
            <br />
            <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>For healthcare</p>
                <li>Apple in healthcare</li>
                <li>Apple Watch & health+</li>
            </ul>
        </div>
        <div className='flex h-max sm:h-3/4 w-max flex-row sm:flex-col gap-3 sm:gap-0'>
        <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>Apple's values</p>
                <li>Environment</li>
                <li>Personal integrity</li>
                <li>Supplier responsibility</li>
            </ul>
            <br />
            <ul className='cursor-pointer footer-li-gray'>
                <p className='text-sm footer-ul-gray font-semibold'>About Apple</p>
                <li>Newsroom</li>
                <li>Apple management</li>
                <li>Careers</li>
                <li>Warranty</li>
                <li>Investments</li>
                <li>Ethics</li>
                <li>Events</li>
                <li>Opportunities in Europe</li>
                <li>Contact Apple</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer