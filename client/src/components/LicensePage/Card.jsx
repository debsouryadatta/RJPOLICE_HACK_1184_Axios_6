import React, { useEffect } from 'react'
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
import axios from 'axios';

const Row = ({ camera, fetchAllCameras }) => {

    const verifyCamera = async (cameraId) => {
        console.log(cameraId);
        let response = await axios.post('http://localhost:5000/api/v1/verifyCamera', {
            cameraId: cameraId,
            verificationStatus: "verified",
        });
        console.log(response);
        fetchAllCameras();
    }
    const rejectCamera = async (cameraId) => {
        console.log(cameraId);
        let response = await axios.post('http://localhost:5000/api/v1/verifyCamera', {
            cameraId: cameraId,
            verificationStatus: "rejected",
        });
        console.log(response);
        fetchAllCameras();
    }
    
    return (
            <tr>
                <td className={"p-4 border-b border-blue-gray-50"}>
                    <div className="flex items-center gap-3">
                        <Avatar
                            src={'https://static-00.iconduck.com/assets.00/camera-circle-icon-512x512-io3lniyk.png'}
                            alt={camera.cameraModel}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                        >
                            {camera.cameraModel}
                        </Typography>
                    </div>
                </td>
                <td className={"p-4 border-b border-blue-gray-50"}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {camera.ipAddress}
                    </Typography>
                </td>
                <td className={"p-4 border-b border-blue-gray-50"}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {camera.pincode}
                    </Typography>
                </td>
                <td className={"p-4 border-b border-blue-gray-50"}>
                    <div className="w-max">
                        <Chip
                            size="sm"
                            variant="ghost"
                            value={camera.verificationStatus}
                            color={
                                camera.verificationStatus === "verified"
                                    ? "green"
                                    : camera.verificationStatus === "pending"
                                        ? "amber"
                                        : "red"
                            }
                        />
                    </div>
                </td>
                <td className={"p-4 border-b border-blue-gray-50"}>
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal capitalize"
                            >
                                {camera.name}
                            </Typography>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                            >
                                {camera.phoneNumber}
                            </Typography>
                        </div>
                    </div>
                </td>
                <td className={"p-4 border-b border-blue-gray-50"}>
                    <Tooltip content="Verify">
                        <IconButton variant="text" onClick={()=> verifyCamera(camera._id)}>
                            <Check className="h-4 w-4" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip content="Reject">
                        <IconButton variant="text" onClick={()=> rejectCamera(camera._id)}>
                            <X className="h-4 w-4" />
                        </IconButton>
                    </Tooltip>
                </td>
            </tr>

    )
}

export default Row