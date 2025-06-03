"use client"

import { AIChatInterface } from "@/components/examples/ai-chat"
import { CalendarInterface } from "@/components/examples/calendar"
import { MailInterface } from "@/components/examples/mail"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Examples = () => {
	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold">Examples</h2>

			<Tabs className="mt-4 w-full" defaultValue="ai-chat">
				<TabsList className="border-none px-0">
					<TabsTrigger className="max-w-40" value="ai-chat">
						AI Chat
					</TabsTrigger>
					<TabsTrigger className="max-w-40" value="mail">
						Mail
					</TabsTrigger>
					<TabsTrigger className="max-w-40" value="calendar">
						Calendar
					</TabsTrigger>
				</TabsList>
				<TabsContent value="ai-chat" className="border-none p-0">
					<AIChatInterface />
				</TabsContent>
				<TabsContent value="mail" className="border-none p-0">
					<MailInterface />
				</TabsContent>
				<TabsContent value="calendar" className="border-none p-0">
					<CalendarInterface />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Examples
