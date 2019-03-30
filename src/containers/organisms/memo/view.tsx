import React, { FC, useState } from "react";
import EditMol from "../../../components/molecules/edit";
import { Typography } from "@material-ui/core";

type Props = {
  onSubmit: (title: string, text: string, tag: string[]) => void;
  allTag: string[];
};

const MemoView: FC<Props> = ({ onSubmit, allTag }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <EditMol
          onEdited={e => {
            const { text, title, tag } = e;
            if (text.length > 0 || title.length > 0) {
              onSubmit(title, text, tag);
            }
            setOpen(false);
          }}
          initial={{ title: "", text: "", tag: [] }}
          allTag={allTag}
          onClose={() => setOpen(false)}
        />
      ) : (
        <div
          style={{
            display: "flex",
            borderRadius: 5,
            boxShadow: "0 0 4px gray"
          }}
          onClick={() => setOpen(true)}
        >
          <Typography style={{ padding: 10 }}>{"メモを入力..."}</Typography>
        </div>
      )}
    </div>
  );
};

export default MemoView;
