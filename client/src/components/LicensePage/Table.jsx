import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { Trash2, Check, X } from 'lucide-react';
import axios from "axios";
import { useEffect, useState } from "react";
import Row from "./Card";

 
const TABLE_HEAD = ["Camera", "Ip Address", "Pin Code", "Status", "Owner", "Actions"];
 
const TABLE_ROWS = [
  {
    img: "https://static-00.iconduck.com/assets.00/camera-circle-icon-512x512-io3lniyk.png",
    name: "Nikon D3500",
    amount: "192.28.00.0",
    date: "799001",
    status: "Rejected",
    account: "Debsourya Datta",
    accountNumber: "",
    expiry: "",
  },
];
 
export function Table({option}) {
  const [cameras, setCameras] = useState([]);

  const fetchAllCameras = async () => {
    let response = await axios.get('http://localhost:5000/api/v1/fetchAllCameras');
    console.log(response.data.data);
    let data = response.data.data.filter((camera)=> camera.verificationStatus === option)
    setCameras(data);
  }
  useEffect(() => {
    fetchAllCameras();
  }, [option])
  

  return (
    <Card className="h-full w-[80%]">
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cameras?.map((camera)=> {
              return (
                <Row key={camera._id} camera={camera} fetchAllCameras={fetchAllCameras}/>
              )
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

