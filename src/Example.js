import React, { useState } from "react";
import { usePopper } from "react-popper";
// import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const virtualReference = {
  getBoundingClientRect() {
    return {
      top: 100,
      left: 100,
      bottom: 101,
      right: 101,
      width: 1,
      height: 1,
    };
  },
};

const Example = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(virtualReference, popperElement, {
    modifiers: [
      // {
      //   name: "flip",
      //   enabled: false,
      // },
      // {
      //   name: "computeStyles",
      //   fn: (data) => {
      //     return {
      //       ...data,
      //       popper: {
      //         ...data.popper,
      //         backgroundColor: "cyan",
      //         position: "fixed",
      //         top: 10,
      //         right: 10,
      //         zIndex: 10,
      //       },
      //     };
      //   },
      // },
    ],
  });

  return (
    <Card variant="outlined">
      <CardContent>
        Click the button.
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Reference element
        </Button>
        {open ? (
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <Card variant="outlined">
              <CardContent>Popper element</CardContent>
            </Card>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Example;
