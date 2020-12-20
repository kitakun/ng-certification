import { Injectable } from '@angular/core';

const storageDataKey = 'storageData';

@Injectable()
export class StorageService {

    getData<T>(key: string): T | null {
        const dataFromStore = window.localStorage[this.createLocalKey(key)];
        if (dataFromStore) {
            return JSON.parse(dataFromStore) as T;
        }
        return null;
    }

    saveData<T>(key: string, data: T) {
        window.localStorage[this.createLocalKey(key)] = JSON.stringify(data);
    }

    destroyData(key: string) {
        window.localStorage.removeItem(this.createLocalKey(key));
    }

    private createLocalKey(inputKey: string): string {
        return `${storageDataKey}-${inputKey}`;
    }
}
