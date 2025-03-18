import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclients.service";

export const SERVICES_TOKEN = {
    HTTP: {
        CLIENT: new InjectionToken<IClientService>('SERICES_TOKEN.HTTP.CLIENT'),
        //SCHEDULE: new InjectionToken<IScheduleService>('SERICES_TOKEN.HTTP.SCHEDULE')
    }
}