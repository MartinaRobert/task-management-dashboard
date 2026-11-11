import { Task } from './task.model';
import { Statistic } from './statistic.model';

export interface TasksResponse {
    tasks: Task[];
    meta: {
        totalCount: number;
        lastUpdated: string;
    };
}

export interface StatisticsResponse {
    statistics: Statistic[];
    lastUpdated: string;
}