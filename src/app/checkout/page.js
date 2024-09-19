import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Checkout() {
    const session = await getServerSession()

    if (!session) {
        return redirect('/login')
    }

    return (
        <>
            <div className="relative isolate bg-slate-100 px-6 py-24 sm:py-32 lg:px-8">
                <div aria-hidden="true" className="absolute right-0 left-0 -top-3 -z-10 overflow-hidden px-36 blur-3xl">
                    <div className="mx-auto aspect-[1155/678] bg-gradient-to-tr from-[#cbd5e1] to-[#64748b] opacity-30 w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);'
                        }}>
                    </div>
                </div>
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-green-600">Pricing</h2>
                    <p className="mt-2.5 text-4xl tracking-tight text-black sm:text-6xl">The right price for you, whoever you are</p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo reprehenderit in aliquid fugiat dolorum voluptatibus.</p>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    <div className="bg-white sm:mx-8 lg:mx-0 rounded-t-3xl sm:rounded-r-none lg:rounded-bl-3xl lg:rounded-br-none rounded-3xl p-8 shadow-2xl ring-1 ring-gray-300 sm:p-10">
                        <h3 id="tier-hobby" className="text-green-600 text-base font-semibold leading-7">Hobby</h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-slate-600 text-5xl font-bold tracking-tight">$19</span>
                            <span className="text-slate-600 text-base">/month</span>
                        </p>
                        <p className="text-slate-600 mt-6 text-base leading-7">The perfect plan if you're just getting started with our product.</p>
                        <ul role="list" className="text-slate-600 mt-8 sm:mt-10 text-sm leading-6 space-y-2">
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                25 products
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                Up to 10,000 subscribers
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                Advanced analytics
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                24-hour support response time
                            </li>
                        </ul>
                        <a href="#" aria-describedby="tier-hobby"
                            className="text-green-600 ring-inset ring-1 ring-green-600 mt-8 block rounded-md p-3 text-center text-sm font-semibold sm:mt-10 hover:bg-green-200">Get started today</a>
                    </div>

                    <div className="relative bg-slate-900 rounded-3xl shadow-2xl p-8 ring-offset-1 ring-gray-900 sm:p-10">
                        <h3 id="tier-enterprise" className="text-green-600 text-base font-semibold leading-7">Enterprise</h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-slate-100 text-5xl font-bold tracking-tight">$49</span>
                            <span className="text-slate-200 text-base">/month</span>
                        </p>
                        <p className="text-slate-300 mt-6 text-base leading-7">Dedicated support and infrastructure for your company.</p>
                        <ul role="list" className="text-slate-300 mt-8 sm:mt-10 text-sm leading-6 space-y-2">
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd">
                                    </path>
                                </svg>
                                Unlimited products
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd">
                                    </path>
                                </svg>
                                Unlimited subscribers
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                Advanced analytics
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                Dedicated support representative
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                Marketing automations
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-green-600 h-6 w-5 flex-none">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                Custom integrations
                            </li>
                        </ul>
                        <a href="#" aria-describedby="tier-enterprise"
                            className="bg-green-600 text-white ring-inset ring-1 ring-green-600 mt-8 block rounded-md p-3 text-center text-sm font-semibold sm:mt-10 hover:bg-green-600/80">
                            Get started today</a>
                    </div>
                </div>
            </div >
        </>
    )
}