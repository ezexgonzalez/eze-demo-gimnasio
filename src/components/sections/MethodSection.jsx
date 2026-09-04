import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ArrowRightIcon } from '../ui/icons'

function PersonIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="7" r="3.25" />
      <path
        d="M5.5 19c.5-3.65 2.7-5.75 6.5-5.75s6 2.1 6.5 5.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ClipboardIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5.5" y="4.5" width="13" height="16" rx="1.5" />
      <path d="M9 4.5V3h6v1.5M9 9h6M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  )
}

function BarsIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="12" width="3.5" height="8" rx="0.75" />
      <rect x="10.25" y="5" width="3.5" height="15" rx="0.75" />
      <rect x="16.5" y="9" width="3.5" height="11" rx="0.75" />
    </svg>
  )
}

function CheckIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m5 12.5 4.25 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const methodIcons = [PersonIcon, ClipboardIcon, BarsIcon, CheckIcon]

function EditorialAction({ label, mobile = false }) {
  if (mobile) {
    return (
      <div className="mt-8 flex items-center text-[0.6875rem] font-bold tracking-[0.09em] text-[var(--theme-accent)]">
        <span>{label}</span>
        <span aria-hidden="true" className="mx-4 h-px min-w-4 flex-1 bg-[var(--theme-accent)]" />
        <ArrowRightIcon className="size-4 shrink-0" />
      </div>
    )
  }

  return (
    <div className="mt-8 inline-flex w-fit max-w-full items-center gap-3 whitespace-nowrap text-xs font-bold tracking-[0.09em] text-[var(--theme-accent)]">
      <span>{label}</span>
      <ArrowRightIcon className="size-4 shrink-0" />
    </div>
  )
}

export function MethodSection() {
  const { method } = demoContent

  return (
    <section id="metodo" className="bg-[var(--theme-background)] py-3 lg:py-4">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:px-12">
        <div className="rounded-[var(--theme-radius)] border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-5 sm:px-6 sm:py-6 lg:min-h-[27rem] lg:px-10 lg:py-12">
          <div className="lg:hidden">
            <Eyebrow>{method.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--theme-text)]">
              {method.title.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-[19rem] text-[0.8125rem] leading-[1.55] text-[var(--theme-secondary)]">
              {method.description}
            </p>

            <div className="relative mt-7">
              <span
                aria-hidden="true"
                className="absolute bottom-6 left-[6.5px] top-6 w-px bg-[var(--theme-accent)]"
              />
              <ol className="relative space-y-5">
                {method.steps.map((step, index) => {
                  const StepIcon = methodIcons[index]

                  return (
                    <li
                      className="grid grid-cols-[14px_48px_minmax(0,1fr)] items-start gap-x-3"
                      key={step.number}
                    >
                      <span aria-hidden="true" className="flex h-12 items-center justify-center">
                        <span className="size-2 rounded-full bg-[var(--theme-accent)]" />
                      </span>
                      <span className="flex size-12 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)]">
                        <StepIcon className="size-6 text-[var(--theme-secondary)]" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-baseline gap-2">
                          <span className="text-xs font-bold text-[var(--theme-accent)]">
                            {step.number}
                          </span>
                          <span className="text-xs font-bold tracking-[0.09em] text-[var(--theme-accent)]">
                            {step.title}
                          </span>
                        </span>
                        <span className="mt-1.5 block text-[0.75rem] leading-[1.5] text-[var(--theme-secondary)]">
                          {step.description}
                        </span>
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>

            <EditorialAction label={method.action} mobile />
          </div>

          <div className="hidden lg:grid lg:min-h-[21rem] lg:grid-cols-[28%_67%] lg:items-center lg:gap-x-[5%]">
            <div className="flex min-w-0 flex-col items-start justify-center">
              <Eyebrow>{method.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2.25rem] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--theme-text)]">
                {method.title.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-[17rem] text-sm leading-6 text-[var(--theme-secondary)]">
                {method.description}
              </p>
              <EditorialAction label={method.action} />
            </div>

            <ol className="relative grid grid-cols-4">
              <span
                aria-hidden="true"
                className="absolute left-[12.5%] right-[12.5%] top-[3.75rem] h-px bg-[var(--theme-accent)]"
              />
              {[25, 50, 75].map((position) => (
                <span
                  aria-hidden="true"
                  className="absolute top-[3.75rem] z-10 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--theme-accent)]"
                  key={position}
                  style={{ left: `${position}%` }}
                />
              ))}

              {method.steps.map((step, index) => {
                const StepIcon = methodIcons[index]

                return (
                  <li
                    className="relative z-10 grid min-w-0 grid-rows-[1.25rem_3.5rem_1.125rem_auto] gap-y-3"
                    key={step.number}
                  >
                    <span className="text-center text-sm font-bold text-[var(--theme-accent)]">
                      {step.number}
                    </span>
                    <span className="relative z-20 mx-auto flex size-14 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)]">
                      <StepIcon className="size-6 text-[var(--theme-secondary)]" />
                    </span>
                    <h3 className="w-full max-w-[9.5rem] justify-self-center text-left text-xs font-bold tracking-[0.09em] text-[var(--theme-accent)]">
                      {step.title}
                    </h3>
                    <p className="w-full max-w-[9.5rem] justify-self-center text-left text-sm leading-6 text-[var(--theme-secondary)]">
                      {step.description}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
