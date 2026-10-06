import Image from 'next/image'
import {
  CarIcon,
  CoffeeIcon,
  HeartIcon,
  MapPinIcon,
  StarIcon,
  WavesIcon,
  WifiIcon,
  type Icon,
} from '@/components/icons'

const amenities: { label: string; icon: Icon }[] = [
  { label: 'Wi-Fi', icon: WifiIcon },
  { label: 'Pool', icon: WavesIcon },
  { label: 'Parking', icon: CarIcon },
  { label: 'Breakfast', icon: CoffeeIcon },
]

/** Property detail screen of the Hoyaal app, rendered inside a PhoneFrame. */
export function AppListingScreen() {
  return (
    <div className='flex flex-1 flex-col px-[6cqw] pb-[7cqw] text-ink'>
      <div className='relative mt-[2cqw] h-[62cqw] overflow-hidden rounded-[5cqw]'>
        <Image
          src='/images/hotel-room.jpg'
          alt=''
          fill
          sizes='300px'
          className='object-cover'
        />
        <span className='absolute top-[3cqw] right-[3cqw] grid size-[8cqw] place-items-center rounded-full bg-white/90 text-rose-500'>
          <HeartIcon className='size-[4.4cqw]' />
        </span>
      </div>

      <p className='mt-[5cqw] text-[5.4cqw] leading-tight font-bold'>
        Royal Hotel Suite
      </p>
      <p className='mt-[1.5cqw] flex items-center gap-[1cqw] text-[3.2cqw] text-slate-500'>
        <MapPinIcon className='size-[3.4cqw]' />
        Hargeisa, Somaliland
      </p>
      <div className='mt-[2cqw] flex items-center gap-[1.5cqw] text-[3cqw] text-slate-500'>
        <span className='flex text-amber-400'>
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className='size-[3.4cqw]' />
          ))}
        </span>
        4.8 (120 reviews)
      </div>

      <div className='mt-[5cqw] grid grid-cols-4 gap-[2cqw]'>
        {amenities.map(({ label, icon: Icon }) => (
          <div key={label} className='flex flex-col items-center gap-[1.4cqw]'>
            <span className='grid size-[11cqw] place-items-center rounded-[3cqw] bg-brand-50 text-brand-600'>
              <Icon className='size-[5cqw]' />
            </span>
            <span className='text-[2.6cqw] text-slate-500'>{label}</span>
          </div>
        ))}
      </div>

      <p className='mt-[5cqw] text-[3.8cqw] font-bold'>About</p>
      <p className='mt-[1.5cqw] text-[3cqw] leading-relaxed text-slate-500'>
        A modern suite in the heart of the city with a king bed, city views, and
        everything you need for a comfortable stay.
      </p>

      <div className='mt-auto flex items-end justify-between pt-[5cqw]'>
        <p className='text-[3cqw] text-slate-500'>
          <span className='text-[6cqw] font-bold text-ink'>$85</span> / night
        </p>
      </div>
      <div className='mt-[3cqw] rounded-[3.5cqw] bg-brand-600 py-[3.6cqw] text-center text-[3.8cqw] font-semibold text-white'>
        Book Now
      </div>
    </div>
  )
}
