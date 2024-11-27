// src/app/send-money/complete/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TransferCompletePage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [mounted, setMounted] = useState(false)

    const amount = searchParams.get('amount')
    const recipientName = searchParams.get('recipientName')

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleDone = () => {
        router.push('/accounts')
    }

    if (!mounted) return null

    return (
        <main className="p-6 max-w-md mx-auto bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <Button variant="ghost" className="p-0" onClick={() => router.back()}>
                    <X className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-medium">Transfer</h1>
                <div className="w-6" />
            </div>

            {/* Success Message */}
            <div className="flex flex-col items-center justify-center flex-1 min-h-[60vh]">
                <p className="text-xl mb-8">
                I sent ¥{amount} to {recipientName}.
                </p>
            </div>

            {/* Done Button */}
            <Button className="w-full bg-[#B7D6B7] text-black hover:bg-[#A7C6A7]" onClick={handleDone}>
                Done
            </Button>
        </main>
    )
}