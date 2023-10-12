"use client";

import { ListItem, ListItemText, ListItemButton } from "@mui/material";
import useDialogListItem from "./useDialogListItem";

type ComponentType = React.ComponentType<{ value: any }> & {
  dialogName: string;
};

type DialogListItemProps = {
  primary: string;
  secondary: string | undefined;
  readOnly?: boolean;
  divider?: boolean;
  value: any;
  component: ComponentType;
};

const DialogListItem = ({
  primary,
  secondary,
  readOnly,
  divider,
  value,
  component: Component,
}: DialogListItemProps) => {
  const handleClick = useDialogListItem(Component.dialogName);

  return (
    <>
      {readOnly ? (
        <ListItem
          divider={divider}
          sx={{ height: (theme) => theme.spacing(9) }}
        >
          <ListItemText
            primary={primary}
            secondary={secondary}
            secondaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ) : (
        <ListItem
          disablePadding
          divider={divider}
          sx={{ height: (theme) => theme.spacing(9) }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText
              primary={primary}
              secondary={secondary}
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItemButton>
        </ListItem>
      )}
      <Component value={value} />
    </>
  );
};

export default DialogListItem;
