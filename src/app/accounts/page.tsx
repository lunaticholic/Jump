/* trunk-ignore-all(prettier) */
// src/app/accounts/page.tsx
"use client"

import { useRouter } from 'next/navigation'
import { Search, Home, CreditCard, QrCode, MoreHorizontal, Calendar } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AccountsPage() {
    const router = useRouter()

    return (
        <main className="p-6 max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-medium">Accounts</h1>
            <Button className="p-2" variant="ghost">
                <Search className="w-5 h-5" />
            </Button>
        </div>

        {/* Add Account Section */}
        <div className="flex items-center gap-3 p-4 mb-6 bg-white rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Image src="/bank.png" alt="Bank Icon" width={24} height={24} className='bg-white rounded-lg'/>
            </div>
            <div className="flex-1">
                <h2 className="font-medium">Add a new account</h2>
                <p className="text-sm text-rose-500">Link your bank or card</p>
            </div>
            <Button className="text-2xl" variant="ghost">+</Button>
        </div>

        {/* Linked Accounts Section */}
        <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Linked accounts</h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between" onClick={() => router.push('/accounts/7bank')}>
                    <div className="flex items-center gap-3">
                        <Image src="/7bank-logo.png" alt="7 Bank" width={40} height={40} className="rounded-lg"/>
                        <div>
                            <p className="text-sm">7 Bank</p>
                            <p className="text-sm text-rose-500">Balance: ¥1,235,200</p>
                        </div>
                    </div>
                    <Button className="text-gray-400" variant="ghost">→</Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/paypay-logo.png" alt="PayPay Bank" width={40} height={40} className="rounded-lg"/>
                        <div>
                            <p className="text-sm">PayPay Bank</p>
                            <p className="text-sm text-rose-500">Balance: ¥40,200</p>
                        </div>
                    </div>
                    <Button className="text-gray-400" variant="ghost">→</Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/rakuten-logo.png" alt="Rakuten Bank" width={40} height={40} className="rounded-lg"/>
                        <div>
                            <p className="text-sm">Rakuten Bank</p>
                            <p className="text-sm text-rose-500">Balance: ¥3,200</p>
                        </div>
                    </div>
                    <Button className="text-gray-400" variant="ghost">→</Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/eon-logo.png" alt="Eon Bank" width={40} height={40} className="rounded-lg"/>
                        <div>
                            <p className="text-sm">Eon Bank</p>
                            <p className="text-sm text-rose-500">Balance: ¥1,200</p>
                        </div>
                    </div>
                    <Button className="text-gray-400" variant="ghost">→</Button>
                </div>
            </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
            <div className="flex justify-around py-3 max-w-md mx-auto">
            <Button className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/')} variant="ghost">
                <Home className="w-5 h-5" />
                <span className="text-xs">Home</span>
            </Button>
            <Button className="flex flex-col items-center gap-1" onClick={() => router.push('/accounts')} variant="ghost">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Accounts</span>
            </Button>
            <Button className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/rewards')} variant="ghost">
                <CreditCard className="w-5 h-5" />
                <span className="text-xs">Rewards</span>
            </Button>
            <Button className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/jump-pay')} variant="ghost">
                <QrCode className="w-5 h-5" />
                <span className="text-xs">Jump Pay</span>
            </Button>
            <Button className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/more')} variant="ghost">
                <MoreHorizontal className="w-5 h-5" />
                <span className="text-xs">More</span>
            </Button>
            </div>
        </nav>
        </main>
    )
}