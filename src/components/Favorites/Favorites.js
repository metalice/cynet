import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Toolbar, List, Divider, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { addFavorites } from "utils/arrays";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
  toolBar: {
    justifyContent: "flex-end",
  },
}));

export const Favorites = ({ favoriteCities, setFavoriteCities }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    !isEmpty(favoriteCities) && setOpen(true);
  }, [favoriteCities]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    setFavoriteCities((favoriteCities) => addFavorites(favoriteCities, result));
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 16,
    margin: `0 0 16px 0`,
    ...draggableStyle,
  });

  return (
    <>
      <Toolbar className={classes.toolBar}>
        <IconButton color="inherit" onClick={handleDrawer} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer className={classes.drawer} anchor="right" open={open} onClose={handleDrawer}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            Favorite's List
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <List>
                  {favoriteCities.map((city, index) => {
                    return (
                      <Draggable key={city.name} draggableId={city.name} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                          >
                            <FavoriteItem key={city[0]} city={city} setFavoriteCities={setFavoriteCities} />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                </List>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Drawer>
    </>
  );
};

export default Favorites;
