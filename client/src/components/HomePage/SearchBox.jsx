import React from "react";
import { Button, Input } from '@material-tailwind/react'


const SearchBox = () => {
    const [location, setLocation] = React.useState("");
    const onChange = ({ target }) => setLocation(target.value);
  
    return (
      <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Location"
        value={location}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={location ? "gray" : "blue-gray"}
        disabled={!location}
        className="!absolute right-1 top-1 rounded"
      >
        Search City
      </Button>
    </div>
    )
  }

  export default SearchBox;