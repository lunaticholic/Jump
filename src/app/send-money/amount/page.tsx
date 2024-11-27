// src/app/send-money/amount/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SendAmountPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [mounted, setMounted] = useState(false)
    const [amount, setAmount] = useState('')
    const bank = searchParams.get('bank')
    const balance = searchParams.get('balance')
    const recipientName = searchParams.get('recipientName')
    const recipientEmail = searchParams.get('recipientEmail')
    
    const formatAmount = (amount: string): string => {
        if (!amount) return '0'
        // 콤마 제거 후 숫자만 남김
        const numberOnly = amount.replace(/,/g, '')
        // 천 단위마다 콤마 추가
        return numberOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    // amount 상태 업데이트 함수 수정
    const handleNumberClick = (num: string) => {
        setAmount(prev => {
            const currentAmount = prev.replace(/,/g, '') // 기존 콤마 제거
            if (currentAmount === '0' && num === '0') return '0'
            const newAmount = currentAmount === '0' ? num : currentAmount + num
            return formatAmount(newAmount)
        })
    }

    // 삭제 함수도 수정
    const handleDelete = () => {
        setAmount(prev => {
            const numberOnly = prev.replace(/,/g, '')
            const newAmount = numberOnly.slice(0, -1)
            return formatAmount(newAmount || '0')
        })
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <main className="p-6 max-w-md mx-auto bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <Button variant="ghost" className="p-0" onClick={() => router.back()}>
                    <X className="w-6 h-6" />
                </Button>
            </div>

            {/* Transfer Details */}
            <div className="space-y-6 mb-8">
                <div>
                    <h2 className="text-base font-medium mb-1">From</h2>
                    <p>{bank}</p>
                    <p className="text-rose-500">Balance - ¥{balance}</p>
                </div>

                <div>
                    <h2 className="text-base font-medium mb-1">To</h2>
                    <p>{recipientName}</p>
                    <p className="text-rose-500">{recipientEmail}</p>
                </div>

                <div>
                    <h2 className="text-base font-medium mb-1">Amount</h2>
                    <p className="text-4xl font-bold text-rose-500">¥ {amount || '0'}</p>
                </div>
            </div>

            {/* Number Pad */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <Button key={num} variant="ghost" onClick={() => handleNumberClick(num.toString())} className="py-4 text-xl hover:bg-transparent">
                        {num}
                    </Button>
                ))}
                <Button variant="ghost" onClick={() => handleNumberClick('00')} className="py-4 text-xl hover:bg-transparent">00</Button>
                <Button variant="ghost" onClick={() => handleNumberClick('0')} className="py-4 text-xl hover:bg-transparent">0</Button>
                <Button variant="ghost" onClick={handleDelete} className="py-4 text-xl hover:bg-transparent">←</Button>
            </div>

            {/* Next Button */}
            <Button className="w-full bg-[#B7D6B7] text-black hover:bg-[#A7C6A7]" onClick={() => router.push('/send-money/confirm')} disabled={!amount || amount === '0'}>
                Next
            </Button>
        </main>
    )
}