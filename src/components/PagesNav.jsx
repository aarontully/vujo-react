import { ListItemText, MenuItem, MenuList, Typography } from "@mui/material"
import React from 'react';

const PagesNav = ({ selectedNotebook, selectedPage, onPageSelect, pages }) => {
    if (!selectedNotebook) {
        return <nav className="pagesnav"></nav>
    }

    return (
        <nav className="pagesnav">
            <MenuList>
                {pages.map((page) => (
                    <MenuItem key={page.id} onClick={() => onPageSelect(page)} className={`page ${page === selectedPage ? 'selected' : ''}`}>
                        <ListItemText className="page-title">{page.title}</ListItemText>
                        <div className="page-list-bottom">
                            {page.updatedAt !== undefined ? (
                                <Typography className="pageDate">{page.updatedAt}</Typography>
                            ) : (
                                <Typography className="pageDate">{page.createdAt}</Typography>
                            )}
                            <Typography >{selectedNotebook.title}</Typography>
                        </div>
                    </MenuItem>
                )
                )}
            </MenuList>
        </nav>
    )
}

export default PagesNav
