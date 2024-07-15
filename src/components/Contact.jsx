import React from 'react'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [grievance, setGrievance] = useState("")

  const handleGrievanceSubmit = (e) => {
    e.preventDefault()
    console.log("Grievance submitted:", grievance)
    setGrievance("")
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20">
          <div className="container px-4 md:px-6  ">
            <div className="">
              <div className="space-y-4 w-2/3 mx-auto">
                <div className="space-y-2 ">
                  <h1 className="py-10 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Contact Super Admin</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Send technical issues or bugs, we'll address them promptly.
                  </p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleGrievanceSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="grievance">Feedback</Label>
                    <Textarea
                      id="grievance"
                      value={grievance}
                      onChange={(e) => setGrievance(e.target.value)}
                      className="resize-none h-36 w-full rounded-md bg-background text-foreground border border-input px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter feedback"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Feedback
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

    </div>
  )
}



