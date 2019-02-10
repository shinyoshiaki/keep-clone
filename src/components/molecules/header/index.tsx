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
  history: { push: (url: string) => void };
}> = ({ drawer, enterSearch, history }) => {
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
          <Button
            color="inherit"
            onClick={() => {
              console.log({ history });
              history.push("login");
            }}
          >
            login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.open} onClose={() => setState({ open: false })}>
        {drawer(() => setState({ open: false }))}
      </Drawer>
    </div>
  );
};

export default HeaderMol;
