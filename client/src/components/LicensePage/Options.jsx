import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export function Options({option, setOption}) {

    return (
        <div className="">
            <Menu
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                }}
            >
                <MenuHandler>
                    <Button className="w-60">Status</Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem onClick={()=> setOption("pending")}>Pending</MenuItem>
                    <MenuItem onClick={()=> setOption("verified")}>Verified</MenuItem>
                    <MenuItem onClick={()=> setOption("rejected")}>Rejected</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}