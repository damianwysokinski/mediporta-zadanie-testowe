import { FC, MouseEvent } from 'react';

import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel
} from '@mui/material';

import { Tag, Order } from '@/types/types';

interface TagsTableHeadProps {
    onRequestSort: (event: MouseEvent<unknown>, property: keyof Tag) => void;
    order: Order;
    orderBy: string;
}

interface HeadCell {
    id: keyof Tag;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'count',
        label: 'Count',
    },
];

const TagsTableHead: FC<TagsTableHeadProps> = ({ order, orderBy, onRequestSort }) => {
    const createSortHandler = (property: keyof Tag) => (event: MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TagsTableHead;