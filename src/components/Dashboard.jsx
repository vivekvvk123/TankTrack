


import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// ChartContainer component to encapsulate the chart and its styling
const ChartContainer = ({ children }) => (
  <Card>
    <CardHeader>
      <CardTitle>Entry Statistics</CardTitle>
      <CardDescription>View statistics for tanker entries.</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${data.value}`}</p>
      </div>
    );
  }
  return null;
};

function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [entriesToday, setEntriesToday] = useState(0);
  const [entriesThisWeek, setEntriesThisWeek] = useState(0);
  const [entriesThisMonth, setEntriesThisMonth] = useState(0);
  const [chartData, setChartData] = useState([]);

  // Get the date 7 days ago
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  
  const fetchEntries = async () => {
    try {
      const response = await fetch("http://localhost:3000/registration");
      const data = await response.json();
      setEntries(data);
      
      setTotalEntries(data.length);

      setEntriesToday(
        data.filter(
          (entry) =>
            new Date(entry.entry_time).toDateString() ===
            new Date().toDateString()
          ).length
      );

      setEntriesThisWeek(
        data.filter((entry) => new Date(entry.entry_time) >= sevenDaysAgo)
          .length
      );

      setEntriesThisMonth(
        data.filter(
          (entry) =>
            new Date(entry.entry_time).getMonth() === new Date().getMonth()
        ).length
      );
    } catch (error) {
      console.error(error);
    }
  };

  const fetchChart = async () => {
    try {
     const response = await fetch("http://localhost:3000/registration");
     const data = await response.json();
     const monthlyEntries = data.reduce((acc, entry) => {
      const entryDate = new Date(entry.entry_time);
      const monthYear = `${entryDate.toLocaleString('default', { month: 'short' })} ${entryDate.getFullYear()}`;
      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear]++;
      return acc;
    }, {});

    const chartData = Object.keys(monthlyEntries)
    .map((monthYear) => ({
      month: monthYear,
      value: monthlyEntries[monthYear],
      date: new Date(`${monthYear}`)
    })).sort((a, b) => a.date - b.date);

    setChartData(chartData);
    console.log(chartData)
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  useEffect(() => {
    fetchEntries();
    fetchChart();
  }, []);

  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-16">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-1">
              <div className="flex flex-col justify-center space-y-4 w-full">
                <div className="py-2 space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Dashboard
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    View and manage Tanker entry, time, and other useful
                    data.
                  </p>
                </div>
                <div className="grid gap-4 grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tanker Entries</CardTitle>
                      <CardDescription>
                        View and manage Tanker entries.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-2xl font-bold">{totalEntries}</h3>
                          <p className="text-muted-foreground">Total Entries</p>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{entriesToday}</h3>
                          <p className="text-muted-foreground">Entries Today</p>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">
                            {entriesThisWeek}
                          </h3>
                          <p className="text-muted-foreground">
                            Entries This Week
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">
                            {entriesThisMonth}
                          </h3>
                          <p className="text-muted-foreground">
                            Entries This Month
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <ChartContainer>
                    <BarChart width={600} height={250} data={chartData}>
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                      />  
                      <CartesianGrid vertical={false} />
                      <Tooltip content={<CustomTooltip />} />

                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;


// import React, { useEffect, useState } from "react";
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
// // import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"
// // import { ChartConfig, ChartContainer } from "@/components/ui/chart"


// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";

// // Sample data for the bar chart (replace with actual data from your API)
// const data = [
//   { name: "Monday", value: 10 },
//   { name: "Tuesday", value: 15 },
//   { name: "Tuesday", value: 15 },

//   { name: "Friday", value: 18 },
//   { name: "Friday", value: 18 },
// ];

// // ChartContainer component to encapsulate the chart and its styling
// const ChartContainer = ({ children }) => (
//   <Card>
//     <CardHeader>
//       <CardTitle>Entry Statistics</CardTitle>
//       <CardDescription>View statistics for vehicle entries.</CardDescription>
//     </CardHeader>
//     <CardContent>{children}</CardContent>
//   </Card>
// );

// function Dashboard() {
//   const [entries, setEntries] = useState([]);
//   const [totalEntries, setTotalEntries] = useState(0);
//   const [entriesToday, setEntriesToday] = useState(0);
//   const [entriesThisWeek, setEntriesThisWeek] = useState(0);
//   const [entriesThisMonth, setEntriesThisMonth] = useState(0);
//   const [chartData, setChartData] = useState([]);

//   const chartConfig = {
//     desktop: {
//       label: "Desktop",
//       color: "#2563eb",
//     },
//   };

//   // Get the date 7 days ago
//   const currentDate = new Date();
//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(currentDate.getDate() - 7);

//   const fetchEntries = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/registration");
//       const data = await response.json();
//       setEntries(data);

//       setTotalEntries(data.length);

//       setEntriesToday(
//         data.filter(
//           (entry) =>
//             new Date(entry.entry_time).toDateString() ===
//             new Date().toDateString()
//         ).length
//       );

//       setEntriesThisWeek(
//         data.filter((entry) => new Date(entry.entry_time) >= sevenDaysAgo)
//           .length
//       );

//       setEntriesThisMonth(
//         data.filter(
//           (entry) =>
//             new Date(entry.entry_time).getMonth() === new Date().getMonth()
//         ).length
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchChart = async () => {
//     try{
//      const chartResponse = await fetch("http://localhost:3000/chartdata");
//      const chartData = await chartResponse.json();
//      setChartData(chartData);
//    } 
//    catch (error) {
//      console.error("Error fetching data:", error);

//    }

//   useEffect(() => {
//     fetchEntries();
//     fetchChart();
//   }, []);

//   return (
//     <>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-16">
//           <div className="container px-4 md:px-6 ">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-1">
//               <div className="flex flex-col justify-center space-y-4 w-full">
//                 <div className="py-2 space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Dashboard
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     View and manage your vehicle entry, time, and other useful
//                     data.
//                   </p>
//                 </div>
//                 <div className="grid gap-4 grid-cols-2">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Vehicle Entries</CardTitle>
//                       <CardDescription>
//                         View and manage your vehicle entries.
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <h3 className="text-2xl font-bold">{totalEntries}</h3>
//                           <p className="text-muted-foreground">Total Entries</p>
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold">{entriesToday}</h3>
//                           <p className="text-muted-foreground">Entries Today</p>
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold">
//                             {entriesThisWeek}
//                           </h3>
//                           <p className="text-muted-foreground">
//                             Entries This Week
//                           </p>
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold">
//                             {entriesThisMonth}
//                           </h3>
//                           <p className="text-muted-foreground">
//                             Entries This Month
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <ChartContainer>
//                     <BarChart width={600} height={250} data={chartData}>
//                       <XAxis
//                         dataKey="month"
//                         tickLine={false}
//                         tickMargin={10}
//                         axisLine={false}
//                         tickFormatter={(value) => value.slice(0, 3)}
//                       />
//                       <CartesianGrid vertical={false} />

//                       <Bar dataKey="value" fill="#8884d8" />
//                     </BarChart>
//                   </ChartContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// export default Dashboard;
