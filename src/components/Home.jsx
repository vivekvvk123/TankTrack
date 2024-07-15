// import React from 'react'
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[rgb(196,235,249)]">
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Digitize Your Gas Distribution Operations
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    GAIL (India) Limited (formerly known as Gas Authority of
                    India Ltd.) is an Indian state-owned energy corporation with
                    primary interests in the trade, transmission and production
                    distribution of natural gas. GAIL also has interests in the
                    exploration and production solar and wind power, telecom and
                    telemetry services (GAILTEL) and electricity generation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-black hover:text-white">
                    Explore Features
                  </button>
                </div>
              </div>
              <img
                src="/gail-home.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto scale-75 aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted bg-[rgb(179,232,251)] flex justify-center">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamlining Gas Distribution Operations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GAIL's comprehensive solution digitizes your gas distribution
                  network, providing Tanker tracking, digital log maintenance,
                  and operational insights to improve efficiency and visibility.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Tanker Tracking</h3>
                      <p className="text-muted-foreground">
                        Monitor the Tanker and status of gas distribution assets
                        with advanced tracking system.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Digital Log Maintenance
                      </h3>
                      <p className="text-muted-foreground">
                        Streamlining record-keeping with our digital log system,
                        eliminating the need for manual paperwork.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Operational Insights
                      </h3>
                      <p className="text-muted-foreground">
                        Gain valuable insights into your gas distribution
                        network with comprehensive data analytics and reporting
                        tools.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/factory.jpg"
                width="550"
                height="310"
                alt="Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-48">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Improved Efficiency</h3>
                    <p className="text-muted-foreground">
                      Streamlining gas distribution operations with real-time
                      asset tracking, digital log maintenance, and automated
                      reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Reduced Paperwork</h3>
                    <p className="text-muted-foreground">
                      Eliminate the need for manual paperwork and record-keeping
                      with our digital log system.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Improved Network Oversight
                    </h3>
                    <p className="text-muted-foreground">
                      Gain better visibility and control over gas distribution
                      network with our comprehensive management tools.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted py-1 text-xl font-bold">
                Why GAIL?
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                GAIL's reputation as a leading company in the energy sector.
                GAIL has a strong presence in the energy sector and is known for
                its innovative projects.It's comprehensive solution is
                designed to streamline gas distribution operations, providing the tools and insights to improve efficiency,
                reduce paperwork, and gain better oversight of your network.
              </p>
              <img
                src="/factory2.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
