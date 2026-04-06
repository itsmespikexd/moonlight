import { APP, WEATHER_API } from "@/config";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";



export const UnitDropdown = () => {
    const [unit, setUnit] = useState<string>(WEATHER_API.DEFAULTS.UNIT);
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='secondary' size='icon'>
                    °{unit === 'metric' ? 'C' : 'F'}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end' className="w-[200px]">
                <DropdownMenuLabel className='text-muted-foreground'>Weather Settings</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={unit} onValueChange={(value) => setUnit(value)}>
                    <DropdownMenuRadioItem value='metric'>Metric (°C)</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value='imperial'>Imperial(°F)</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}