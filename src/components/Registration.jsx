import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CameraCapture from "./CameraCapture";

function Registration() {
  const [form, setForm] = useState({
    driver_name: "",
    aadhar: "",
    vehicle_no: "",
    vehicle_rc: "",
    entry_time: "",
    license_no: "",
    address: "",
    photo: "",
  });
  const [ownerPhotoBlob, setOwnerPhotoBlob] = useState(null);
  const [dataArray, setDataArray] = useState([]);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handlePhotoCapture = (imageBlob) => {
    setOwnerPhotoBlob(imageBlob);
    setForm((prevForm) => ({
      ...prevForm,
      photo: URL.createObjectURL(imageBlob),
    }));
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
    setOwnerPhotoBlob(null);
  };


  const uploadImageToImgBB = async (imageBlob) => {
    try {
      const formData = new FormData();
      formData.append("key", process.env.REACT_APP_API_KEY);
      formData.append("image", imageBlob);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.data.url; // Return the URL of the uploaded image
      } else {
        throw new Error("Failed to upload image to ImgBB");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const saveDetails = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadImageToImgBB(ownerPhotoBlob);

    if (!imageUrl) {
      console.error("Image upload failed. Cannot save details.");
      return;
    }

    const formattedEntryTime = form.entry_time.replace("T", " ");
    const updatedForm = {
      ...form,
      entry_time: formattedEntryTime,
      photo: imageUrl,
    };
    const updatedDataArray = [...dataArray, updatedForm];

    setDataArray(updatedDataArray);

    try {
      let res = await fetch("http://localhost:3000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedForm),
      });

      if (!res.ok) {
        throw new Error("Failed to save details");
      }
    } catch (error) {
      console.error("Error saving details:", error);
    }

    setForm({
      driver_name: "",
      aadhar: "",
      vehicle_no: "",
      vehicle_rc: "",
      entry_time: "",
      license_no: "",
      address: "",
      photo: "",
    });
    setOwnerPhotoBlob(null);
    setIsCameraActive(false);

    console.log(dataArray);
  };

  return (
    <div className="flex flex-col min-h-[100vh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
        <div className="container w-5/6 px-4 md:px-6 ">
          <div className="flex flex-col justify-center space-y-4 outline outline-offset-[40px] rounded">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none py-5">
                Vehicle Registration
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl pb-3">
                Register vehicle with GAIL's secure database.
              </p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={saveDetails}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="driver_name">Driver Name</Label>
                  <Input
                    id="driver_name"
                    type="text"
                    name="driver_name"
                    value={form.driver_name}
                    placeholder="Enter driver name"
                    onChange={(e) =>
                      setForm({ ...form, driver_name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aadhar">Aadhar No.</Label>
                  <Input
                    id="aadhar"
                    type="text"
                    name="aadhar"
                    value={form.aadhar}
                    placeholder="Enter Aadhar No."
                    onChange={(e) =>
                      setForm({ ...form, aadhar: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicle_no">Vehicle No.</Label>
                  <Input
                    id="vehicle_no"
                    type="text"
                    name="vehicle_no"
                    value={form.vehicle_no}
                    placeholder="Enter Vehicle no."
                    onChange={(e) =>
                      setForm({ ...form, vehicle_no: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicle_rc">Vehicle RC No.</Label>
                  <Input
                    id="vehicle_rc"
                    type="text"
                    name="vehicle_rc"
                    value={form.vehicle_rc}
                    placeholder="Enter Vehicle RC No."
                    onChange={(e) =>
                      setForm({ ...form, vehicle_rc: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="entry_time">Entry Time</Label>
                  <Input
                    id="entry_time"
                    type="datetime-local"
                    name="entry_time"
                    value={form.entry_time}
                    placeholder="Enter vehicle entry date and time"
                    onChange={(e) =>
                      setForm({ ...form, entry_time: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license_no">License No.</Label>
                  <Input
                    id="license_no"
                    type="text"
                    name="license_no"
                    value={form.license_no}
                    placeholder="Enter License No."
                    onChange={(e) =>
                      setForm({ ...form, license_no: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="owner-address">Owner Address</Label>
                <Textarea
                  id="owner-address"
                  placeholder="Enter owner's permanent address"
                  name="address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="owner-photo">Owner Live Photo</Label>
                {ownerPhotoBlob ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={form.photo}
                      alt="Owner"
                      name="photo"
                      className="w-24 h-24 rounded-full object-cover"
                      style={{ transform: "scaleX(-1)" }}
                    />
                    <Button
                      variant="ghost"
                      onClick={() => setOwnerPhotoBlob(null)}
                    >
                      Retake Photo
                    </Button>
                  </div>
                ) : (
                  <CameraCapture onCapture={handlePhotoCapture} />
                )}
              </div>

              <div className="flex justify-center py-">
                <Button type="submit" className="w-fit p-5">
                  Register Vehicle
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;

// Old code

// import React, { createContext, useEffect, useState } from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import DataContext from "./context/context";
// import CameraCapture from "./CameraCapture";
// function Registration() {
//   const [form, setForm] = useState({
//     driver_name: "",
//     aadhar: "",
//     vehicle_no: "",
//     vehicle_rc: "",
//     entry_time: "",
//     license_no: "",
//     address: "",
//     photo: "",
//   });
//   const [ownerPhoto, setOwnerPhoto] = useState(null);
//   const [dataArray, setDataArray] = useState([]);

//   const handlePhotoCapture = (imageBlob) => {
//     setOwnerPhoto(URL.createObjectURL(imageBlob));
//     // setOwnerPhoto(imageBlob);
//   };

//   const uploadImageToImgBB = async (imageBlob) => {
//     try {
//       const formData = new FormData();
//       formData.append("image", imageBlob);



//       if (response.ok) {
//         const data = await response.json();
//         return data.data.url; // Return the URL of the uploaded image
//       } else {
//         throw new Error("Failed to upload image to ImgBB");
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       return null;
//     }
//   };

//   const saveDetails = async (e) => {
//     e.preventDefault();

//     const imageUrl = await uploadImageToImgBB(form.photo);

//     const formattedEntryTime = form.entry_time.replace("T", " ");
//     const updatedForm = {...form,entry_time: formattedEntryTime,photo: imageUrl,};
//     const updatedDataArray = [...dataArray, updatedForm];

//     setDataArray(updatedDataArray);
//     // localStorage.setItem("details", JSON.stringify(updatedDataArray));
//     let res = await fetch("http://localhost:3000/registration", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedForm),
//     });
//     // console.log(res);

//     setForm({
//       driver_name: "",
//       aadhar: "",
//       vehicle_no: "",
//       vehicle_rc: "",
//       entry_time: "",
//       license_no: "",
//       address: "",
//       photo: "",
//     });
//     setOwnerPhoto(null);

//     console.log(dataArray);
//   };

//   // useEffect(() => {
//   //   let savedDetails = localStorage.getItem("details");
//   //   let dataArray;
//   //   if (savedDetails) {
//   //     setDataArray(JSON.parse(savedDetails));
//   //   }
//   // }, []);

//   return (
//     <>
//       {/* <DataContext.Provider value={dataArray}> */}
//         <div className="flex flex-col min-h-[100vh]">
//           <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
//             <div className="container w-5/6 px-4 md:px-6 ">
//               <div className="flex flex-col justify-center space-y-4 outline outline-offset-[40px] rounded">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none py-5">
//                     Vehicle Registration
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl pb-3">
//                     Register vehicle with GAIL's secure database.
//                   </p>
//                 </div>
//                 <form className="flex flex-col gap-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="driver_name">Driver Name</Label>
//                       <Input
//                         id="driver_name"
//                         type="text"
//                         name="driver_name"
//                         value={form.driver_name}
//                         placeholder="Enter driver name"
//                         onChange={(e) =>
//                           setForm({ ...form, driver_name: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="aadhar">Aadhar No.</Label>
//                       <Input
//                         id="aadhar"
//                         type="text"
//                         name="aadhar"
//                         value={form.aadhar}
//                         placeholder="Enter Aadhar No."
//                         onChange={(e) =>
//                           setForm({ ...form, aadhar: e.target.value })
//                         }
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="vehicle_no">Vehicle No.</Label>
//                       <Input
//                         id="vehicle_no"
//                         type="text"
//                         name="vehicle_no"
//                         value={form.vehicle_no}
//                         placeholder="Enter Vehicle no."
//                         onChange={(e) =>
//                           setForm({ ...form, vehicle_no: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="vehicle_rc">Vehicle RC No.</Label>
//                       <Input
//                         id="vehicle_rc"
//                         type="text"
//                         name="vehicle_rc"
//                         value={form.vehicle_rc}
//                         placeholder="Enter Vehicle RC No."
//                         onChange={(e) =>
//                           setForm({ ...form, vehicle_rc: e.target.value })
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="entry_time">Entry Time</Label>
//                       <Input
//                         id="entry_time"
//                         type="datetime-local"
//                         name="entry_time"
//                         value={form.entry_time}
//                         placeholder="Enter vehicle entry date and time"
//                         // defaultValue={new Date().toISOString().slice(0, 16)}
//                         onChange={(e) =>
//                           setForm({ ...form, entry_time: e.target.value })
//                         }
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="license_no">License No.</Label>
//                       <Input
//                         id="license_no"
//                         type="text"
//                         name="license_no"
//                         value={form.license_no}
//                         placeholder="Enter License No."
//                         onChange={(e) =>
//                           setForm({ ...form, license_no: e.target.value })
//                         }
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="owner-address">Owner Address</Label>
//                     <Textarea
//                       id="owner-address"
//                       placeholder="Enter owner's permanent address"
//                       name="address"
//                       value={form.address}
//                       onChange={(e) =>
//                         setForm({ ...form, address: e.target.value })
//                       }
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="owner-photo">Owner Live Photo</Label>
//                     {ownerPhoto ? (
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={ownerPhoto}
//                           alt="Owner"
//                           name="photo"
//                           className="w-20 h-20 rounded-full object-cover"
//                         />
//                         <Button
//                           variant="ghost"
//                           onClick={() => setOwnerPhoto(null)}
//                         >
//                           Retake Photo
//                         </Button>
//                       </div>
//                     ) : (
//                       <CameraCapture onCapture={handlePhotoCapture} />
//                     )}
//                   </div>

//                   <div className="flex justify-center py-">
//                     <Button
//                       type="submit"
//                       className="w-fit p-5"
//                       onClick={saveDetails}
//                     >
//                       Register Vehicle
//                     </Button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </section>
//         </div>
//       {/* </DataContext.Provider> */}
//     </>
//   );
// }

// export default Registration;
