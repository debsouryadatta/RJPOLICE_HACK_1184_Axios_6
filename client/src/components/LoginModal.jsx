import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function Modal() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
        <div class="options">
                  <div class="police">
                    <img src="police.png" alt="" />
                    <h3>Police Department</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Harum repellendus quasi cupiditate. Necessitatibus,
                      voluptatem possimus.
                    </p>
                    <button class="login pol">Click Here</button>
                  </div>
                  <div class="civilian">
                    <img src="cctv.png" alt="" />
                    <h3>Register your Camera</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis eligendi illo autem porro doloribus dicta maxime
                      temporibus optio debitis vero? Ad.
                    </p>
                    <button class="login civil">Click Here</button>
                  </div>
                </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}