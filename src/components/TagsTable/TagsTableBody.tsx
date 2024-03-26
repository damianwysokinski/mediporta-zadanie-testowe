import { FC } from 'react';

import {
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';

import { Tag } from '@/types/types';

interface TagsTableBodyProps {
    tags: Tag[];
}

const TagsTableBody: FC<TagsTableBodyProps> = ({ tags }) => {
    return (
        <TableBody>
            {tags.map((tag) => (
                <TableRow key={tag.name}>
                    <TableCell>{tag.name}</TableCell>
                    <TableCell>{tag.count}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default TagsTableBody;