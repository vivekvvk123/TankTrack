import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

function Logs() {
  const [data, setData] = useState([]);

  const getDetails = async () => {
    try {
      const response = await fetch("http://localhost:3000/registration");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-16 min-h-[100vh]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Registration Dashboard
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Entry Time and Driver Details
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                View detailed information about your vehicle registrations,
                including entry time and driver details.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Registration Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Entry Time</TableHead>
                      <TableHead>Driver Name</TableHead>
                      <TableHead>Aadhar No.</TableHead>
                      <TableHead>Vehicle No.</TableHead>
                      <TableHead>License No.</TableHead>
                      <TableHead>Vehicle RC No.</TableHead>
                      <TableHead>Driver Photo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.entry_time}</TableCell>
                        <TableCell>{item.driver_name}</TableCell>
                        <TableCell>{item.aadhar}</TableCell>
                        <TableCell>{item.vehicle_no}</TableCell>
                        <TableCell>{item.license_no}</TableCell>
                        <TableCell>{item.vehicle_rc}</TableCell>
                        <TableCell>
                          <img
                            src={item.photo}
                            alt="Driver"
                            className="w-16 h-16 object-cover rounded-full transform scale-x-[-1]"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Logs;
