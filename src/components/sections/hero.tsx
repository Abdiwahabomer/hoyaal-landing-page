import Image from 'next/image'
import {
  ArrowRightIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@/components/icons'
import { AppHomeScreen } from '@/components/mockups/app-home-screen'
import { AppListingScreen } from '@/components/mockups/app-listing-screen'
import { PhoneFrame } from '@/components/mockups/phone-frame'
import { Badge } from '@/components/ui/badge'
import { ButtonLink } from '@/components/ui/button-link'
import { Container } from '@/components/ui/container'
import { heroHighlights, siteConfig } from '@/content/site'

export function Hero() {
  return (
    // Pulled up under the sticky header so the header sits on the hero backdrop.
    <section
      id='top'
      className='relative -mt-18 overflow-hidden bg-gradient-to-b from-[#eef4fd] via-[#f4f8fe] to-white pt-18'
    >
      <div className='pointer-events-none absolute top-10 -right-40 size-[640px] rounded-full bg-brand-200/40 blur-3xl' />

      <Container className='relative grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20'>
        <div>
          <h1 className='mt-6 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl sm:whitespace-nowrap xl:text-[4rem]'>
            Find. <span className='text-brand-600'>Book</span>. Stay.
          </h1>

          <p className='mt-6 max-w-lg text-lg leading-relaxed text-muted'>
            The easiest way to book hotels, stays, and travel experiences all in
            one place. Discover great places, compare options, and make your
            next trip unforgettable.
          </p>

          <div className='mt-9 flex flex-wrap gap-4'>
            <ButtonLink href='#download'>
              Get Started
              <ArrowRightIcon className='size-4' />
            </ButtonLink>
            <ButtonLink href={siteConfig.demoUrl} variant='secondary'>
              <PlayCircleIcon className='size-5 text-ink' />
              Watch Demo
            </ButtonLink>
          </div>

          <ul className='mt-10 flex flex-wrap gap-x-7 gap-y-4'>
            {heroHighlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className='flex items-center gap-2.5 text-sm text-ink/80'
              >
                <span className='grid size-8 place-items-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-slate-100'>
                  <Icon className='size-4' />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className='relative mx-auto aspect-[1/0.92] w-full max-w-[560px]'>
      {/* Orbit ring behind the phones */}
      <div className='absolute top-1/2 left-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-200/80'>
        <span className='absolute top-[58%] -left-1 size-2 rounded-full bg-brand-500' />
        <span className='absolute top-[38%] -right-1 size-2 rounded-full bg-brand-500' />
      </div>

      <Image
        src='/images/app-icon.svg'
        alt=''
        width={256}
        height={256}
        className='absolute top-[6%] left-[2%] z-20 w-[17%] -rotate-6 drop-shadow-[0_18px_30px_rgba(27,124,242,0.4)]'
      />

      <PhoneFrame className='absolute top-[10%] right-[4%] w-[38%] rotate-[7deg]'>
        <AppListingScreen />
      </PhoneFrame>

      <PhoneFrame className='absolute top-0 left-[18%] z-10 w-[46%] -rotate-[3deg]'>
        <AppHomeScreen />
      </PhoneFrame>

      <div className='absolute right-0 bottom-[22%] z-20 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_18px_40px_-12px_rgba(23,65,140,0.3)] ring-1 ring-slate-100'>
        <span className='grid size-9 place-items-center rounded-full bg-brand-50 text-brand-600'>
          <UsersIcon className='size-4.5' />
        </span>
        <span className='leading-tight'>
          <span className='block text-[11px] text-slate-500'>Trusted by</span>
          <span className='block text-sm font-semibold text-ink'>
            10K+ travelers
          </span>
        </span>
      </div>
    </div>
  )
}
