"use client";

import { useState, useEffect } from 'react';

import { Box } from "@mui/material";

import fetchData from "@/utils/fetchData";
import { Tag } from '@/types/types';

import TagsTable from "@/components/TagsTable/TagsTable";
import AppLoading from "@/components/AppLoading";
import AppAlert from "@/components/AppAlert";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [tags, setTags] = useState<Tag[]>([]);

    useEffect(() => {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        const fetchDataAsync = async () => {
            try {
                const result = await fetchData(`${baseUrl}/2.3/tags?site=stackoverflow`);
                setTags(result.items);
                setLoading(false);
            } catch (error: any) {
                console.log(error)
                setError(error.message);
                setLoading(false);
            }
        };

        fetchDataAsync();
    }, []);

    const handleAlertClose = () => setError('');

    return (
        <Box sx={{ height: '100vh' }} padding={2}>
            {loading ? (
                <AppLoading />
            )  : (
                <>
                    <TagsTable tags={tags} />
                    {error && <AppAlert message={error} onClose={handleAlertClose} />}
                </>
            )}
        </Box>
    );
}
