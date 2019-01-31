import React, { FunctionComponent } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";
import MeasureWrap from "react-fit";

const HeaderMol: FunctionComponent = () => {
  return (
    <div>
      <AppBar position="static">
        <MeasureWrap
          target={(a, b) => {
            console.log(a, b);
          }}
        />
        <Toolbar>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit">
            keep
          </Typography>
          <div
            style={{
              marginLeft: 20,
              borderRadius: 5,
              backgroundColor: "rgba(255,255,255,0.25)",
              marginRight: 10,
              width: "100%",
              display: "flex"
            }}
          >
            <div
              style={{
                padding: 10,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              style={{
                color: "inherit",
                width: "100%",
                padding: 5,
                paddingLeft: 10
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderMol;
