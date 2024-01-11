import React from "react";
import { Button, Input } from '@material-tailwind/react'


const SearchBox = () => {
    const [cameraId, setCameraId] = React.useState("");
    const onChange = ({ target }) => setCameraId(target.value);
  
    return (
      <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Camera ID"
        value={cameraId}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={cameraId ? "gray" : "blue-gray"}
        disabled={!cameraId}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
    )
  }

  export default SearchBox;