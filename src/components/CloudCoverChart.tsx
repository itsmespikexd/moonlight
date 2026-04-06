import { useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

import type { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
    clouds: {
        label: 'Cloud cover',
        color: 'var(--clouds)',
    }
} satisfies ChartConfig

export const CloudCoverChart = () => {
    const { weather } = useWeather();

    const chartData = useMemo(() => {
        return weather?.hourly.map((item) => ({
            hour: item.dt,
            clouds: item.clouds,
        }));
    }, [weather]);

    if (!chartData) return <Skeleton className='h-[360px]' />

    return (
        <ChartContainer config={chartConfig} className='h-[360px] w-full'>
            <BarChart accessibilityLayer data={chartData} barSize={28} barCategoryGap={0}>
                <CartesianGrid strokeDasharray='4' />

                <XAxis
                    dataKey='hour'
                    tickLine={false}
                    axisLine={false}
                    tickCount={12}
                    tickMargin={16}
                    tickFormatter={(value) => 
                        new Date(value * 1000).toLocaleTimeString('en-US', {
                            hour: 'numeric', hour12: true
                        })
                    }
                />

                <YAxis
                    dataKey='clouds'
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />

                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                />

                <Bar dataKey='clouds' fill='var(--color-clouds)' stroke='var(--color-clouds)' radius={[100, 100, 0, 0]} />

                <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
        </ChartContainer>
    );
}