import React, { useState, memo, useMemo } from "react";
import { IconButton, Badge, Popover } from "@material-ui/core";
import { NotificationImportantOutlined } from "@material-ui/icons";
import { Noticfication } from "./Noticfication";
import { useNoticfications } from "../../../hooks";
import Axios from "axios";
import { nodeApiLink } from "../../../../config/Api/NodeServerLink";
import { useQueryClient } from "react-query";

export const NoticficationButton = () => {
  const queryClient = useQueryClient();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [noticfications] = useNoticfications();

  const activeNotic = useMemo(() => {
    return (
      noticfications &&
      noticfications.reduce((sum, notic) => {
        return notic.isRead ? sum : sum + 1;
      }, 0)
    );
  }, [noticfications]);

  const closeHandler = async () => {
    setAnchorEl(null);
    const notReadNotics =
      noticfications && noticfications.filter((notic) => notic.isRead === false);
    if (notReadNotics) {
      await Axios.put(`${nodeApiLink}/api/noticfications/read-noticfications`, {
        listNoticId: notReadNotics.map((notic) => notic._id),
      });
      queryClient.invalidateQueries(["noticfications"]);
    }
  };
  const openHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div>
      <IconButton aria-label="noticfication" onClick={openHandler}>
        <Badge
          badgeContent={activeNotic}
          color="secondary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <NotificationImportantOutlined />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={closeHandler}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {noticfications &&
          noticfications.map((notic) => {
            return <Noticfication key={notic.id} data={notic} />;
          })}
      </Popover>
    </div>
  );
};
export default memo(NoticficationButton);
