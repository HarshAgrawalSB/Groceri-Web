import React from 'react'

const DownloadBanner = () => {
  return (
    <div class="bg-fill-two overflow-hidden pt-1.5 md:pt-0">
      <div class="max-w-[1920px] mx-auto px-4 sm:px-5 md:px-6 lg:px-16 xl:px-28 2xl:px-32 3xl:px-40 md:flex justify-between items-center"><div class="shrink-0 mx-auto md:ltr:ml-0 md:rtl:mr-0 lg:flex lg:items-center pb-5 pt-1.5 md:pt-4 max-w-[350px] md:max-w-[340px] lg:max-w-[485px] xl:max-w-[540px] 2xl:max-w-[680px] 3xl:ltr:pl-10 3xl:rtl:pr-10"><div class="py-8 text-center xl:py-10 2xl:py-14 md:ltr:text-left md:rtl:text-right">
        <h2 class="text-[22px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] leading-9 lg:leading-[1.4em] xl:leading-[1.45em] text-brand-dark font-bold font-manrope -tracking-[0.2px] mb-3 lg:mb-4">
          Make your online shop easier with our mobile app
        </h2>
        <p class="text-15px xl:text-base 2xl:text-[17px] leading-7 xl:leading-9 text-brand-dark text-opacity-70 pb-5 lg:pb-7 ltr:pr-0 rtl:pl-0 xl:ltr:pr-8 xl:rtl:pl-8 2xl:ltr:pr-20 2xl:rtl:pl-20">BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food.
        </p>
        <div class="flex justify-center md:justify-start -mx-1 md:-mx-1.5 pt-0.5 px-7 sm:px-0">
          <a class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80 mx-1 md:mx-1.5" href="https://www.apple.com/app-store/">
            <img alt="App Store" fetchpriority="high" width="170" height="56" decoding="async" data-nimg="1" class="rounded-md w-36 lg:w-44" srcset="/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&amp;w=384&amp;q=75" />
          </a>
          <a class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80 mx-1 md:mx-1.5" href="https://play.google.com/store/games"><img alt="Play Store" fetchpriority="high" width="170" height="56" decoding="async" data-nimg="1" class="rounded-md w-36 lg:w-44" srcset="/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&amp;w=384&amp;q=75" />
          </a>
        </div>
      </div>
      </div>
        <div class="hidden md:flex items-end ltr:pl-4 rtl:pr-4 2xl:ltr:pl-0 2xl:rtl:pr-0 md:max-w-[480px] lg:max-w-[540px] xl:max-w-auto ltr:-mr-16 rtl:-ml-16 lg:ltr:-mr-8 lg:rtl:-ml-8 3xl:ltr:mr-24 3xl:rtl:ml-24">
          <img alt="App Thumbnail" fetchpriority="high" width="597" height="500" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&amp;w=1200&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&amp;w=1200&amp;q=75" /></div>
      </div>
    </div>
  )
}

export default DownloadBanner
