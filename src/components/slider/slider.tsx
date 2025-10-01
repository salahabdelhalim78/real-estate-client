"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Slider({ images }: { images: string[] }) {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <>
            {images && images.length > 0 &&
                <div className=' h-full w-full'>

                    <Swiper
                        className=" w-full max-w-screen"
                        modules={[Pagination, Autoplay, Navigation, FreeMode, Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}
                        grabCursor
                        navigation
                        pagination

                        slidesPerView={1}
                        loop
                    >
                        {images.map((img, i) => (
                            <SwiperSlide
                                key={i}
                                className="relative aspect-[4/3]"
                            >
                                <Image
                                    sizes='(min-width: 768) 50vw, 100vw'
                                    fill src={img} alt={`Slide ${i}`} className=" !w-full !h-full object-contain" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        className=" w-full max-w-screen flex"
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide
                                key={i}
                                className="
    relative aspect-[4/3] cursor-pointer w-full
    opacity-70 hover:opacity-100 
    [&.swiper-slide-thumb-active]:opacity-100 
    [&.swiper-slide-thumb-active]:ring-2 
    [&.swiper-slide-thumb-active]:ring-blue-500
    max-w-[200px]
  "
                            >
                                <Image
                                    sizes='200px'
                                    fill src={img} alt={`Slide ${i}`} className=" !w-full !h-full object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>

            }
        </>

    )
}