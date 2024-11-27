// src/app/accounts/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AccountDetailPage() {
    const router = useRouter()

    return (
        <main className="p-6 max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
            <Button 
            variant="ghost" 
            className="p-0"
            onClick={() => router.back()}
            >
            <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-medium">Account Details</h1>
        </div>

        {/* Bank Info */}
        <div className="mb-6">
            <h2 className="text-xl font-medium">7 Bank</h2>
            <p className="text-sm text-green-600">Account Number: 0352-468-45841-01</p>
        </div>

        {/* Balance Card */}
        <div className="bg-green-50 p-4 rounded-xl mb-6">
            <p className="text-sm mb-2">Balance</p>
            <p className="text-2xl font-bold">¥1,235,200</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
            <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white" onClick={() => router.push('/send-money')}>
            Send
            </Button>
            <Button variant="outline" className="flex-1">
            Receive
            </Button>
        </div>

        {/* Recent Transactions */}
        <div>
            <h2 className="text-xl font-medium mb-4">Recent Transactions</h2>
            
            <div className="space-y-4">
            <div className="text-sm text-gray-500">2024.11.26</div>
            
            <div className="flex justify-between items-start">
                <div>
                <p className="font-medium">Starbucks</p>
                <p className="text-sm text-gray-500">19:00</p>
                </div>
                <div className="text-right">
                <p>-¥800</p>
                <p className="text-sm text-gray-500">¥1,235,200</p>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                <p className="font-medium">The Sushi</p>
                <p className="text-sm text-gray-500">18:30</p>
                </div>
                <div className="text-right">
                <p>-¥3,500</p>
                <p className="text-sm text-gray-500">¥1,236,000</p>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                <p className="font-medium">お土産屋</p>
                <p className="text-sm text-gray-500">17:30</p>
                </div>
                <div className="text-right">
                <p>-¥18,430</p>
                <p className="text-sm text-gray-500">¥1,239,500</p>
                </div>
            </div>

            <div className="text-sm text-gray-500 mt-6">2024.11.25</div>

            <div className="flex justify-between items-start">
                <div>
                <p className="font-medium">Netflix</p>
                <p className="text-sm text-gray-500">14:00</p>
                </div>
                <div className="text-right">
                <p>-¥4,500</p>
                <p className="text-sm text-gray-500">¥1,251,930</p>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                <p className="font-medium">串カツ丼</p>
                <p className="text-sm text-gray-500">13:40</p>
                </div>
                <div className="text-right">
                <p>-¥3,240</p>
                <p className="text-sm text-gray-500">¥1,256,430</p>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                <p className="font-medium">Osaka Hotel AA</p>
                <p className="text-sm text-gray-500">12:40</p>
                </div>
                <div className="text-right">
                <p>-¥32,500</p>
                <p className="text-sm text-gray-500">¥1,259,670</p>
                </div>
            </div>
            </div>
        </div>
        </main>
    )
}