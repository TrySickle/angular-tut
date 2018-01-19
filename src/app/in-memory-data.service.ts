import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Janna' },
            { id: 12, name: 'Malzahar' },
            { id: 13, name: 'Draven' },
            { id: 14, name: 'Swain' },
            { id: 15, name: 'Ashe' },
            { id: 16, name: 'Ryze' },
            { id: 17, name: 'Mordekaiser' },
            { id: 18, name: 'Ziggs' },
            { id: 19, name: 'Xerath' },
            { id: 20, name: 'Viktor' },
            { id: 21, name: 'Malphite' }
        ];
        return {heroes};
    }
}