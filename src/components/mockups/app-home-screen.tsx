import Image from 'next/image'
import {
  BedIcon,
  BellIcon,
  CalendarIcon,
  CarIcon,
  HomeIcon,
  PlaneIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
  type Icon,
} from '@/components/icons'
import { cn } from '@/lib/cn'

const categories: { label: string; icon: Icon }[] = [
  { label: 'Hotels', icon: BedIcon },
  { label: 'Villas', icon: HomeIcon },
  { label: 'Flights', icon: PlaneIcon },
  { label: 'Cars', icon: CarIcon },
]

const destinations = [
  {
    name: 'Hargeisa',
    price: 'From $45',
    image: '/images/destination-hargeisa.jpg',
  },
  {
    name: 'Berbera',
    price: 'From $60',
    image: '/images/destination-berbera.jpg',
  },
]

const tabs: { label: string; icon: Icon }[] = [
  { label: 'Home', icon: HomeIcon },
  { label: 'Search', icon: SearchIcon },
  { label: 'Bookings', icon: CalendarIcon },
  { label: 'Profile', icon: UserIcon },
]

/** Home screen of the Hoyaal app, rendered inside a PhoneFrame. */
export function AppHomeScreen() {
  return (
    <div className='flex flex-1 flex-col text-ink'>
      <div className='flex-1 px-[6cqw]'>
        <div className='mt-[2cqw] flex items-center justify-between'>
          <Image
            src='/images/logo.svg'
            alt=''
            width={662}
            height={106}
            className='h-[5.5cqw] w-auto'
          />
          <BellIcon className='size-[5cqw] text-slate-500' />
        </div>

        <div className='mt-[4cqw] flex items-center gap-[2cqw] rounded-[3cqw] bg-slate-100 px-[3.5cqw] py-[2.8cqw] text-[3.4cqw] text-slate-400'>
          <SearchIcon className='size-[3.8cqw]' />
          Search hotels, destinations…
        </div>

        <div className='relative mt-[4cqw] h-[34cqw] overflow-hidden rounded-[4cqw]'>
          <Image
            src='/images/luxury-villa.jpg'
            alt=''
            fill
            sizes='300px'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-800/40 to-transparent' />
          <div className='absolute inset-y-0 left-0 flex flex-col justify-center p-[4cqw] text-white'>
            <p className='text-[4.6cqw] leading-tight font-bold'>
              Discover your
              <br />
              perfect stay
            </p>
            <p className='mt-[1cqw] text-[3cqw] text-white/80'>
              Best deals on hotels
            </p>
            <span className='mt-[2.5cqw] w-fit rounded-[1.6cqw] bg-white px-[2.6cqw] py-[1cqw] text-[2.8cqw] font-semibold text-brand-700'>
              Explore
            </span>
          </div>
        </div>

        <div className='mt-[4cqw] grid grid-cols-4 gap-[2.5cqw]'>
          {categories.map(({ label, icon: Icon }, i) => (
            <div
              key={label}
              className='flex flex-col items-center gap-[1.4cqw]'
            >
              <span
                className={cn(
                  'grid size-[12cqw] place-items-center rounded-[3cqw]',
                  i === 0
                    ? 'bg-brand-600 text-white'
                    : 'bg-brand-50 text-brand-600',
                )}
              >
                <Icon className='size-[5.4cqw]' />
              </span>
              <span className='text-[2.8cqw] text-slate-500'>{label}</span>
            </div>
          ))}
        </div>

        <div className='mt-[4.5cqw] flex items-baseline justify-between'>
          <p className='text-[4cqw] font-bold'>Popular Destinations</p>
          <p className='text-[2.8cqw] font-medium text-brand-600'>See all</p>
        </div>

        <div className='mt-[2.5cqw] grid grid-cols-2 gap-[3cqw]'>
          {destinations.map((d) => (
            <div key={d.name}>
              <div className='relative h-[24cqw] overflow-hidden rounded-[3cqw]'>
                <Image
                  src={d.image}
                  alt=''
                  fill
                  sizes='160px'
                  className='object-cover'
                />
              </div>
              <p className='mt-[1.5cqw] text-[3.4cqw] font-semibold'>
                {d.name}
              </p>
              <div className='flex items-center justify-between text-[2.6cqw] text-slate-400'>
                <span>{d.price}</span>
                <span className='flex text-amber-400'>
                  {Array.from({ length: 4 }, (_, i) => (
                    <StarIcon key={i} className='size-[2.6cqw]' />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-[4.5cqw] flex items-baseline justify-between'>
          <p className='text-[4cqw] font-bold'>Recommended for you</p>
          <p className='text-[2.8cqw] font-medium text-brand-600'>See all</p>
        </div>

        <div className='mt-[2.5cqw] flex items-center gap-[3cqw] rounded-[3.5cqw] p-[2cqw] ring-1 ring-slate-100'>
          <div className='relative size-[17cqw] shrink-0 overflow-hidden rounded-[2.5cqw]'>
            <Image
              src='/images/hotel-room.jpg'
              alt=''
              fill
              sizes='80px'
              className='object-cover'
            />
          </div>
          <div className='min-w-0 flex-1'>
            <p className='text-[3.4cqw] font-semibold'>City Hotel</p>
            <p className='text-[2.6cqw] text-slate-400'>Berbera</p>
            <p className='mt-[1cqw] text-[2.8cqw] text-slate-500'>
              <span className='font-bold text-ink'>$85</span> / night
            </p>
          </div>
        </div>
      </div>

      <nav className='mt-[3cqw] grid grid-cols-4 border-t border-slate-100 px-[3cqw] pt-[2.5cqw] pb-[6cqw]'>
        {tabs.map(({ label, icon: Icon }, i) => (
          <span
            key={label}
            className={cn(
              'flex flex-col items-center gap-[1cqw] text-[2.6cqw]',
              i === 0 ? 'font-semibold text-brand-600' : 'text-slate-400',
            )}
          >
            <Icon className='size-[5cqw]' />
            {label}
          </span>
        ))}
      </nav>
    </div>
  )
}
