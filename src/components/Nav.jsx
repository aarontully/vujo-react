import { IconButton, ListItemText, Menu, MenuItem, MenuList, Tooltip, Typography } from "@mui/material";
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { createNotebook, createPage, updateNotebook } from '../utilities/firebaseService';
import moment from "moment";

const Nav = ({ notebooks, onNotebookSelection, selectedNotebook, fetchNotebooks, fetchPages }) => {
    const [contextMenu, setContextMenu] = useState(null);
    const [navWidth, setNavWidth] = useState('250px');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                :
                    null
        );
    };

    const handleClose = () => {
        setContextMenu(null);
        setAnchorEl(null);
    }

    const HandleNotebookMenu = (event) => {
        event.stopPropagation();
        event.preventDefault();

        setAnchorEl(event.currentTarget);
    }

    const handleNavButtonClick = () => {
        setNavWidth(navWidth === '250px' ? '50px' : '250px');
    };

    const handleAddNotebook = async (event) => {
        try {
            event.stopPropagation();
            const newNotebook = {
                title: "New Notebook",
            }
            await createNotebook(newNotebook);
            fetchNotebooks();
        } catch (error) {
            console.log(error);
        }
    };

    const HandleNewPage = async () => {
        try {
            console.log(selectedNotebook);
            const newDate = Date.now();
            const newPage = {
                title: "Untitled",
                createdAt: moment(newDate).format("Do MMM YY"),
                notebookId: selectedNotebook.id,
                content: "",
            }
            await createPage(newPage);
            handleClose();
            fetchPages();
        } catch (error) {
            console.log(error);
        }
    }

    const HandleNotebookRename = async () => {
        try {
            selectedNotebook.title = "updatedName";
            await updateNotebook(selectedNotebook);
            fetchNotebooks();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <nav className={`nav ${navWidth === '50px' ? 'nav-minimized' : ''}`}>
                <div className="navTop">
                    <div className="navTopTitle">
                        <Tooltip title="Vujos" placement="right">
                            <IconButton onClick={handleNavButtonClick}>
                                <MenuBookIcon className="lightIcon" />
                            </IconButton>
                        </Tooltip>
                        <Typography className="navTitle" variant="h5">Vujos</Typography>
                    </div>
                    <IconButton className="addIcon lightIcon" aria-label="add" onClick={handleAddNotebook}>
                        <AddIcon />
                    </IconButton>
                </div>
                <ul>
                    {notebooks.map((item) => (
                        <React.Fragment key={item.id}>
                            <MenuList>
                                <MenuItem onContextMenu={handleContextMenu} onClick={() => onNotebookSelection(item)} className={`nb ${item === selectedNotebook ? 'selectedNb' : ''}`}>
                                    <ListItemText>{item.title}</ListItemText>
                                    {selectedNotebook === item &&
                                        <>
                                            <IconButton onClick={HandleNotebookMenu}>
                                                <MoreHorizIcon className="addIcon lightIcon" />
                                            </IconButton>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={HandleNewPage}>New Page</MenuItem>
                                                <MenuItem onClick={HandleNotebookRename}>Rename</MenuItem>
                                            </Menu>
                                        </>
                                    }
                                </MenuItem>
                            </MenuList>
                        </React.Fragment>
                    ))}
                </ul>
                <div className="widthControllerContainer">
                    <IconButton className="widthController" onClick={handleNavButtonClick}>
                        {navWidth === '250px' ? <KeyboardDoubleArrowLeftIcon className="lightIcon" /> : <KeyboardDoubleArrowRightIcon className="lightIcon" />}
                    </IconButton>
                </div>
            </nav>
        </>
    );
}

export default Nav
