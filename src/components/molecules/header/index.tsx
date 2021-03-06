import React, { FunctionComponent } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import SearchBarAtom from "../../atoms/searchbar";
import useObject from "useobject";

const HeaderMol: FunctionComponent<{
  enterSearch: (v: string) => void;
  drawer: (close: () => void) => any;
  account: () => any;
}> = ({ drawer, enterSearch, account }) => {
  const { state, setState } = useObject({ open: false });
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setState({ open: true })}>
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit">
            keep
          </Typography>
          <SearchBarAtom onSubmit={enterSearch} />
          <div>{account()}</div>
        </Toolbar>
      </AppBar>
      <Drawer open={state.open} onClose={() => setState({ open: false })}>
        {drawer(() => setState({ open: false }))}
      </Drawer>
    </div>
  );
};

export default HeaderMol;
