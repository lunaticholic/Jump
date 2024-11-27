"use client"

import { useRouter } from 'next/navigation'
import { Search, Home, Calendar, CreditCard, QrCode, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className='p-6 max-w-md mx-auto bg-white min-h-screen'>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif" />
        <Button className="p-2" variant="ghost">
          <Search className="w-5 h-5" />
        </Button>
      </div>

      {/* Balance */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center gap-3" onClick={() => router.push('/accounts/7bank')}>
            <Image src="/7bank-logo.png" alt="7 Bank" width={40} height={40} className="rounded-lg" />
            <div>
              <p className="font-medium">¥ 1,235,200</p>
              <p className="text-sm text-gray-500">7 Bank</p>
            </div>
          </div>
          <Button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm" onClick={() => router.push('/send-money')}>
            Transfer
          </Button>
        </div>

        {/* PayPay */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <Image src="/paypay-logo.png" alt="PayPay Bank" width={40} height={40} className="rounded-lg" />
            <div>
              <p className="font-medium">¥ 40,200</p>
              <p className="text-sm text-gray-500">PayPay Bank</p>
            </div>
          </div>
          <Button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm">
            Transfer
          </Button>
        </div>

        {/* Rakuten */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <Image src="/rakuten-logo.png" alt="Rakuten Bank" width={40} height={40} className="rounded-lg" />
            <div>
              <p className="font-medium">¥ 3,200</p>
              <p className="text-sm text-gray-500">Rakuten Bank</p>
            </div>
          </div>
          <Button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm">
            Transfer
          </Button>
        </div>

        {/* Eon */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <Image src="/eon-logo.png" alt="Eon Bank" width={40} height={40} className="rounded-lg" />
            <div>
              <p className="font-medium">¥ 1,200</p>
              <p className="text-sm text-gray-500">Eon Bank</p>
            </div>
          </div>
          <Button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm">
            Transfer
          </Button>
        </div>
      </div>

      {/* MoneyBeam, QR Payment, Exchange */}
      <div className="flex gap-4 mb-8">
        <Button className="flex-1 py-3 bg-green-100 text-green-800 rounded-xl text-sm">
          MoneyBeam
        </Button>
        <Button className="flex-1 py-3 bg-green-100 text-green-800 rounded-xl text-sm">
          QR Payment
        </Button>
        <Button className="flex-1 py-3 bg-green-100 text-green-800 rounded-xl text-sm">
          Exchange
        </Button>
      </div>

      <section>
        <h2 className="text-xl font-medium mb-4">Promotions</h2>
        <Carousel>
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-3/10">
              <div>
                <Image src="/sushi-promo.png" alt="Sushi House Promotion" width={200} height={150} className="rounded-xl mb-2" />
                <h3 className="font-medium">$3 off at Sushi House</h3>
                <p className="text-sm text-gray-500">Until July 1</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-4/8">
              <div>
                <Image src="/apple-watch-promo.png" alt="Apple Watch Promotion" width={200} height={150} className="rounded-xl mb-2" />
                <h3 className="font-medium">5% cash back on Apple Watch</h3>
                <p className="text-sm text-gray-500">Until June 30</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-6/10">
              <div>
                <Image src="/apple-airpods-promo.png" alt="Apple Airpods Promotion" width={200} height={150} className="rounded-xl mb-2" />
                <h3 className="font-medium">10% cash back on AirPods</h3>
                <p className="text-sm text-gray-500">Until June 30</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-3 max-w-md mx-auto">
          <Button className="flex flex-col items-center gap-1 text-black-500" variant="ghost" onClick={() => router.push('/')}>
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button className="flex flex-col items-center gap-1 text-gray-500" variant="ghost" onClick={() => router.push('/accounts')}>
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Accounts</span>
          </Button>
          <Button className="flex flex-col items-center gap-1 text-gray-500" variant="ghost" onClick={() => router.push('/rewards')}>
            <CreditCard className="w-5 h-5" />
            <span className="text-xs">Rewards</span>
          </Button>
          <Button className="flex flex-col items-center gap-1 text-gray-500" variant="ghost" onClick={() => router.push('/jump-pay')}>
            <QrCode className="w-5 h-5" />
            <span className="text-xs">Jump Pay</span>
          </Button>
          <Button className="flex flex-col items-center gap-1 text-gray-500" variant="ghost" onClick={() => router.push('/more')}>
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-xs">More</span>
          </Button>
        </div>
      </nav>
      
    </main>
  )
}