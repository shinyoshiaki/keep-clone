import React, { FunctionComponent } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import SearchBarAtom from "../../atoms/searchbar";

const HeaderMol: FunctionComponent<{ enterSearch: (v: string) => void }> = ({
  enterSearch
}) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit">
            keep
          </Typography>
          <SearchBarAtom onSubmit={enterSearch} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderMol;
