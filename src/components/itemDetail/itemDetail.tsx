"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, FreeMode, EffectCube, EffectCreative, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';
import Slider from '../slider/slider';
import { Item } from '@/lib/types';





export default function ItemDetail({
    work,
}: { work: Item }) {

    return (
        <>
            {work &&
                <section className='p-3 md:p-6 grid gap-10 '>
                    {work.title &&
                        <h1 className='text-center text-2xl'>{work.title}</h1>
                    }

                    <div className='w-full grid grid-cols-1  md:grid-cols-2 gap-10 mx-auto'>

                        {
                            work.images &&
                            <div>
                                <Slider images={work.images} />
                            </div>
                        }
                        <div className='flex flex-col gap-5'>
                            {work.slogan &&
                                <p>{work.slogan}</p>
                            }
                            {
                                work.description
                                &&
                                <p className='max-w-[70ch]'>{work.description}</p>
                            }

                        </div>

                    </div>

                </section >}
        </>
    )
}
