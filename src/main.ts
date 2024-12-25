import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//     providers: [TaskService]
// }).catch((err) => console.error(err));

export const TasksServiceToken = new InjectionToken<TaskService>('tasks-service-token')

bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TaskService}]
}).catch((err) => console.error(err));
