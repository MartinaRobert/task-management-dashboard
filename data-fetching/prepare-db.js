const fs = require('fs');
const path = require('path');

const dataDirectory = __dirname;

const tasksData = JSON.parse(
    fs.readFileSync(path.join(dataDirectory, 'tasks.json'), 'utf8')
);

const statisticsData = JSON.parse(
    fs.readFileSync(path.join(dataDirectory, 'statistics.json'), 'utf8')
);

const database = {
    tasks: tasksData.tasks,
    statistics: statisticsData.statistics,
};

fs.writeFileSync(
    path.join(dataDirectory, 'db.json'),
    JSON.stringify(database, null, 2)
);

console.log('Database generated successfully!');