// src/app/rewards/page.tsx
"use client"

import { useRouter } from 'next/navigation'
import { Home, CreditCard, QrCode, MoreHorizontal, Calendar } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function RewardsPage() {
    const router = useRouter()

    return (
        <main className="p-6 max-w-md mx-auto bg-white min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-medium">My Rewards</h1>
            </div>

            {/* Banner Image */}
            <div className="mb-6">
                <Image src="/pine-trees.png" alt="Pine Trees" width={400} height={200} className="w-full rounded-xl" />
            </div>

            {/* Promotions Section */}
            <div className="mb-6">
                <h2 className="text-xl font-medium mb-4">Promotions & Events</h2>
                <Carousel>
                    <CarouselContent className="-ml-2">
                        <CarouselItem className="pl-2 basis-2/3">
                            <div>
                                <Image src="/maple-leaves.png" alt="Double points" width={200} height={150} className="w-full rounded-xl mb-2"/>
                                <p className="text-sm">Double points on all purchases</p>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-2 basis-2/3">
                            <div>
                                <Image src="/new-year.png" alt="New Year" width={200} height={150} className="w-full rounded-xl mb-2" />
                                <p className="text-sm">Celebrate New Year</p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Transaction Details */}
            <div>
                <h2 className="text-xl font-medium mb-4">Transaction Details</h2>
                <Select defaultValue="2023">
                <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
                </Select>
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
                <div className="flex justify-around py-3 max-w-md mx-auto">
                    <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/')}>
                        <Home className="w-5 h-5" />
                        <span className="text-xs">Home</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/accounts')}>
                        <Calendar className="w-5 h-5" />
                        <span className="text-xs">Accounts</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col items-center gap-1 text-black-500" onClick={() => router.push('/rewards')}>
                        <CreditCard className="w-5 h-5" />
                        <span className="text-xs">Rewards</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/jump-pay')}>
                        <QrCode className="w-5 h-5" />
                        <span className="text-xs">Jump Pay</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-500" onClick={() => router.push('/more')}>
                        <MoreHorizontal className="w-5 h-5" />
                        <span className="text-xs">More</span>
                    </Button>
                </div>
            </nav>
        </main>
    )
}