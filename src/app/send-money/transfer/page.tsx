// src/app/send-money/transfer/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const AdContent = () => {
    return (
        <div className="relative w-full h-48 bg-gray-100 rounded-xl overflow-hidden">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QK95Jn7zhLU?si=F1b5TypPKefhaljY?autoplay=1&mute=1&controls=0&playlist=QK95Jn7zhLU?si=F1b5TypPKefhaljY&loop=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
            />
        </div>
    )
}

export default function TransferPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [progress, setProgress] = useState(0)
    const [mounted, setMounted] = useState(false)

    // URL 파라미터에서 데이터 가져오기
    const amount = searchParams.get('amount')
    const recipientName = searchParams.get('recipientName')
    // const senderName = searchParams.get('senderName')

    useEffect(() => {
        setMounted(true)
        
        // 3초 후에 진행 시작
        const timer = setTimeout(() => {
        startTransfer()
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const startTransfer = () => {
        let currentProgress = 0
        const interval = setInterval(() => {
        currentProgress += 1
        setProgress(currentProgress)
        
        if (currentProgress >= 100) {
            clearInterval(interval)
            // 전송 완료 후 확인 페이지로 이동
            router.push(`/send-money/complete?amount=${amount}&recipientName=${recipientName}`)
        }
        }, 30) // 3초 동안 진행되도록 설정
    }

    if (!mounted) return null

    return (
        <main className="p-6 max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <Button 
            variant="ghost" 
            className="p-0"
            onClick={() => router.back()}
            >
            <X className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-medium">Transfer Details</h1>
            <div className="w-6" />
        </div>

        {/* Advertisement Space */}
        <div className="w-full h-48 bg-gray-100 rounded-xl mb-8">
            {/* 광고 영상이 들어갈 공간 */}
            <AdContent />
        </div>

        {/* Amount Display */}
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">¥{amount}</h2>
            <p className="text-gray-500">to {recipientName}&apos;s account</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-center text-gray-500">
            {progress < 100 ? "Transfer in progress..." : "Transfer complete!"}
            </p>
        </div>
        </main>
    )
}