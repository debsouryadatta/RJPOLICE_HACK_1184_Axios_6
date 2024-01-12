import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function Camera({camera}) {
  // console.log(camera?.cameraModel);
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>{camera?.cameraModel}</AccordionHeader>
        <AccordionBody>
          <p><b>Camera Model : </b>{camera.cameraModel}</p>
          <p><b>Camera Id : </b>{camera._id}</p>
          <p><b>Camera Owner : </b>{camera.name}</p>
          <p><b>Owner Ph no. : </b>{camera.phoneNumber}</p>
        </AccordionBody>
      </Accordion>
    </div>
  );
}