// src/app/send-money/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

export default function SendMoneyPage() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])
  
    const handleNext = () => {
        if (!selectedRecipient) {
            alert('Please select a recipient')
            return
        }
        // 선택된 계좌 정보와 함께 amount 페이지로 이동
        router.push(`/send-money/amount?recipient=${selectedRecipient}&bank=7Bank&balance=1235200&recipientName=Takashi Takeda&recipientEmail=takashi.takeda@me.com`)
    }

    if (!mounted) {
      return null // 또는 로딩 상태를 표시할 수 있습니다
    }



    return (
        <main className="flex flex-col p-6 max-w-md mx-auto bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <Button variant="ghost" className="p-0" onClick={() => router.back()}>
                <X className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-medium">Send Money</h1>
                <div className="w-6" /> {/* 균형을 맞추기 위한 빈 공간 */}
            </div>

            {/* Select Recipient Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-medium mb-2">Select Recipient</h2>
                <p className="text-gray-600 text-sm mb-4">
                Choose a recipient from your recent list or input account details.
                </p>

                {/* Toggle Buttons */}
                <div className="flex gap-2 mb-4">
                <Button className="flex-1 bg-green-100 text-green-800 hover:bg-green-200">
                    Account
                </Button>
                <Button variant="ghost" className="flex-1 text-gray-600">
                    Contact
                </Button>
                </div>

                {/* Search Bar */}
                <div className="bg-rose-50 rounded-lg p-3 mb-6 flex items-center gap-2">
                    <Search className="w-5 h-5 text-rose-500" />
                    <Input type="text" placeholder="Search by account number, phone number" className="bg-transparent w-full outline-none text-sm"/>
                </div>

                {/* Recent Recipients */}
                <div>
                    <h3 className="text-lg font-medium mb-4">Recent Recipients</h3>
                        <div className="space-y-4">
                            {[
                            {
                                id: "7bank",
                                name: "My 7Bank Account",
                                account: "7Bank 0352-468-45841-01",
                                logo: "/7bank-logo.png",
                            },
                            {
                                id: "paypay",
                                name: "My PayPay Bank Account",
                                account: "PayPayBank 50451-45784-11154",
                                logo: "/paypay-logo.png",
                            },
                            {
                                id: "rakuten",
                                name: "My Rakuten Bank Account",
                                account: "RakutenBank 10745814558",
                                logo: "/rakuten-logo.png",
                            },
                            {
                                id: "eon",
                                name: "My Eon Bank Account",
                                account: "EonBank 310450-7845-45487415",
                                logo: "/eon-logo.png",
                            },
                            ].map((recipient) => (
                                <div key={recipient.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image src={recipient.logo} alt={recipient.name} width={40} height={40} className="rounded-lg"/>
                                        <div>
                                            <p className="font-medium">{recipient.name}</p>
                                            <p className="text-sm text-gray-500">{recipient.account}</p>
                                        </div>
                                    </div>
                                    <Checkbox 
                                    checked={selectedRecipient === recipient.id} 
                                    onCheckedChange={(checked: boolean) => {
                                        if (checked) {
                                        setSelectedRecipient(recipient.id);
                                        } else {
                                        setSelectedRecipient(null);
                                        }
                                    }}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Next Button */}
            <div className="mt-auto"> {/* mt-auto를 추가하여 버튼을 바닥으로 이동 */}
                <Button className="w-full bg-green-100 text-green-800 hover:bg-green-200" onClick={handleNext}>
                    Next
                </Button>
            </div>
        </main>
    );
}
