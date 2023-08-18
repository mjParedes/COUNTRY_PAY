require('dotenv').config();
const { db } = require('./database/config');
const app = require('./index');

// autenticar y sincronizar base de datos
db.authenticate()
    .then(() => console.log('database authenticate'))
    .catch((err) => console.log(err));

db.sync()
    .then(() => console.log('database synced'))
    .catch((err) => console.log(err));

//metodo listen//
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT} 😛`);
});
