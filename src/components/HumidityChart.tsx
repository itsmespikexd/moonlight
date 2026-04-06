import { useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

import type { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
    humidity: {
        label: 'Humidity',
        color: 'var(--humidity)',
    },
    dew_point: {
        label: 'Dew point',
        color: 'var(--dew-point)',
    }
} satisfies ChartConfig

export const HumidityChart = () => {
    const { weather } = useWeather();

    const chartData = useMemo(() => {
        return weather?.hourly.map((item) => ({
            hour: item.dt,
            humidity: item.humidity,
            dew_point: item.dew_point,
        }));
    }, [weather]);

    if (!chartData) return <Skeleton className='h-[360px]' />

    return (
        <ChartContainer config={chartConfig} className='h-[360px] w-full'>
            <AreaChart accessibilityLayer data={chartData}>
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
                    dataKey='humidity'
                    tickLine={false}
                    axisLine={false}
                    tickCount={5}
                    tickMargin={16}
                />

                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                />

                <defs>
                    <linearGradient id='fillHumidity' x1={0} y1={0} x2={0} y2={1}>
                        <stop offset='0%' stopColor='var(--color-humidity)' stopOpacity={1} />
                        <stop offset='100%' stopColor='var(--color-humidity)' stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area dataKey='humidity' type='natural' fill='url(#fillHumidity)' fillOpacity={0.5} stroke='var(--color-humidity)' strokeOpacity={0} />
                <Area dataKey='dew_point' type='natural' fillOpacity={0} stroke='var(--color-dew_point)' strokeOpacity={2} activeDot={false} />

                <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
        </ChartContainer>
    );
}