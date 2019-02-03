import React, { FunctionComponent } from "react";
import useObject from "useobject";
import { Star, MoreVert, Delete, More } from "@material-ui/icons";
import { IconButton, Modal } from "@material-ui/core";
import EditMol from "../edit";

export interface Card {
  id: string;
  title: string;
  text: string;
}

const CardMol: FunctionComponent<{
  card: Card;
  onRemove: (id: string) => void;
  onChange: (card: Card) => void;
}> = ({ card, onRemove, onChange }) => {
  const { state, setState } = useObject({ open: false, modal: false });
  const { title, text, id } = card;

  return (
    <div>
      <Modal
        open={state.modal}
        onClose={() => {
          console.log("close");
          setState({ modal: false });
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{ width: 600, maxWidth: "90vw", backgroundColor: "white" }}
          >
            <EditMol
              onClose={v => {
                const { title, text } = v;
                onChange({ title, text, id });
                setState({ modal: false });
              }}
              menus={() => {}}
              initial={{ title, text }}
            />
          </div>
        </div>
      </Modal>
      <div
        style={{
          borderRadius: 5,
          boxShadow: "0 0 1px gray",
          padding: 5,
          paddingLeft: 20,
          minHeight: 120 + 50
        }}
        onMouseEnter={() => setState({ open: true })}
        onMouseLeave={() => setState({ open: false })}
      >
        <div
          style={{
            display: "grid",
            gridTemplateRows: "7fr 3fr",
            gridTemplateColumns: "8fr 2fr"
          }}
        >
          <div
            style={{ gridRow: "1/2", gridColumn: "1/2" }}
            onClick={() => {
              setState({ modal: true });
            }}
          >
            <p style={{ fontWeight: "bold" }}>{title}</p>
            <p style={{ wordWrap: "break-word" }}>{text}</p>
          </div>
          <div
            style={{
              gridRow: "1/2",
              gridColumn: "2/3",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            {state.open && (
              <IconButton style={{ width: 50, height: 50 }}>
                <Star />
              </IconButton>
            )}
          </div>
          <div
            style={{
              gridRow: "2/3",
              gridColumn: "1/3",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "auto"
            }}
          >
            {state.open && (
              <div>
                <IconButton
                  style={{ width: 50, height: 50 }}
                  onClick={() => onRemove(card.id)}
                >
                  <Delete />
                </IconButton>
                <IconButton style={{ width: 50, height: 50 }}>
                  <More />
                </IconButton>
                <IconButton style={{ width: 50, height: 50 }}>
                  <MoreVert />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMol;
