import Image from 'next/image'
import {
  ArrowRightIcon,
  PlayCircleIcon,
  UsersIcon,
} from '@/components/icons'
import { AppHomeScreen } from '@/components/mockups/app-home-screen'
import { AppListingScreen } from '@/components/mockups/app-listing-screen'
import { PhoneFrame } from '@/components/mockups/phone-frame'
import { ButtonLink } from '@/components/ui/button-link'
import { Container } from '@/components/ui/container'
import { heroHighlightIcons, siteConfig } from '@/content/site'
import type { Dictionary } from '@/i18n/dictionaries/en'

type HeroProps = { t: Dictionary['hero'] }

export function Hero({ t }: HeroProps) {
  const highlights = Object.entries(t.highlights) as [
    keyof typeof t.highlights,
    string,
  ][]

  return (
    // Pulled up under the sticky header so the header sits on the hero backdrop.
    <section
      id='top'
      className='relative -mt-18 overflow-hidden bg-gradient-to-b from-[#eef4fd] via-[#f4f8fe] to-white pt-18'
    >
      <div className='pointer-events-none absolute top-10 -right-40 size-[640px] animate-fade-in rounded-full bg-brand-200/40 blur-3xl [animation-duration:2s]' />

      {/* Entrance is pure CSS so it runs on first paint, before hydration. */}
      <Container className='relative grid items-center gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-20'>
        <div>
          <h1 className='mt-6 animate-fade-up text-5xl font-extrabold tracking-tight text-balance text-ink sm:text-6xl xl:text-[4rem]'>
            {t.title.find}. <span className='text-brand-600'>{t.title.book}</span>.{' '}
            {t.title.stay}.
          </h1>

          <p className='mt-6 max-w-lg animate-fade-up text-lg leading-relaxed text-muted [animation-delay:120ms]'>
            {t.description}
          </p>

          <div className='mt-9 flex animate-fade-up flex-wrap gap-4 [animation-delay:240ms]'>
            <ButtonLink href='#download'>
              {t.primaryCta}
              <ArrowRightIcon className='size-4 transition-transform group-hover:translate-x-1' />
            </ButtonLink>
            <ButtonLink href={siteConfig.demoUrl} variant='secondary'>
              <PlayCircleIcon className='size-5 text-ink transition-transform group-hover:scale-110' />
              {t.secondaryCta}
            </ButtonLink>
          </div>

          <ul className='mt-10 flex animate-fade-up flex-wrap gap-x-7 gap-y-4 [animation-delay:360ms]'>
            {highlights.map(([key, label]) => {
              const Icon = heroHighlightIcons[key]
              return (
                <li
                  key={key}
                  className='flex items-center gap-2.5 text-sm text-ink/80'
                >
                  <span className='grid size-8 place-items-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-slate-100'>
                    <Icon className='size-4' />
                  </span>
                  {label}
                </li>
              )
            })}
          </ul>
        </div>

        <HeroVisual trustedBy={t.trustedBy} travelers={t.travelers} />
      </Container>
    </section>
  )
}

function HeroVisual({
  trustedBy,
  travelers,
}: {
  trustedBy: string
  travelers: string
}) {
  return (
    <div className='relative mx-auto aspect-[1/0.92] w-full max-w-[560px] animate-fade-up [animation-delay:200ms] [animation-duration:1.2s]'>
      {/* Orbit ring behind the phones; the dots slowly circle it. */}
      <div className='absolute top-1/2 left-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-200/80'>
        <div className='absolute inset-0 animate-spin-slow'>
          <span className='absolute top-[58%] -left-1 size-2 rounded-full bg-brand-500 shadow-[0_0_0_4px_rgba(49,152,255,0.15)]' />
          <span className='absolute top-[38%] -right-1 size-2 rounded-full bg-brand-500 shadow-[0_0_0_4px_rgba(49,152,255,0.15)]' />
        </div>
      </div>

      <div className='absolute top-[6%] left-[2%] z-20 w-[17%] animate-float [animation-delay:-2s]'>
        <Image
          src='/images/app-icon.svg'
          alt=''
          width={256}
          height={256}
          className='w-full -rotate-6 drop-shadow-[0_18px_30px_rgba(27,124,242,0.4)]'
        />
      </div>

      <PhoneFrame className='absolute top-[10%] right-[4%] w-[38%] animate-float-slow rotate-[7deg] [animation-delay:-4s]'>
        <AppListingScreen />
      </PhoneFrame>

      <PhoneFrame className='absolute top-0 left-[18%] z-10 w-[46%] animate-float -rotate-[3deg]'>
        <AppHomeScreen />
      </PhoneFrame>

      <div className='absolute right-0 bottom-[22%] z-20 animate-float-slow [animation-delay:-1s]'>
        <div className='flex animate-fade-up items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_18px_40px_-12px_rgba(23,65,140,0.3)] ring-1 ring-slate-100 [animation-delay:700ms]'>
          <span className='grid size-9 place-items-center rounded-full bg-brand-50 text-brand-600'>
            <UsersIcon className='size-4.5' />
          </span>
          <span className='leading-tight'>
            <span className='block text-[11px] text-slate-500'>{trustedBy}</span>
            <span className='block text-sm font-semibold text-ink'>
              {travelers}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
