import { openWeatherApi } from "@/api";
import { APP, WEATHER_API } from "@/config";

import { useEffect, useCallback, useState } from "react";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup } from "@/components/ui/item";

import { MapPinnedIcon, SearchIcon } from "lucide-react";

import type { Geocoding } from "@/types";

export const SearchDialog = () => {

    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<Geocoding[]>([]);
    const [searchDialogOpen, setSearchDialogOpen] = useState<boolean>(false);

    const geocoding = useCallback(async (search: string) => {
        if (!search) return;

        const response = await openWeatherApi.get('/geo/1.0/direct', {
            params: {
                q: search,
                limit: WEATHER_API.DEFAULTS.SEARCH_RESULT_LIMIT
            }
        });

        return response.data as Geocoding[];
    }, []);

    useEffect(() => {
        if (!search) return;

        (async () => {
            const results = await geocoding(search);

            console.log(results);

            if (results) setResults(results);
        })()

    }, [search, geocoding]);

    return (
        <Dialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen}>
            <DialogTrigger asChild>

            </DialogTrigger>
        </Dialog>
    );
}
