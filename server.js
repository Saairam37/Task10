const { default: mongoose } = require('mongoose')
const app = require('./app')
const { MONGODB_URI, PORT } = require('./utils/config')

console.log('connecting to Database...');

mongoose.connect(MONGODB_URI).then(()=>{
    
        console.log('connected to Database');
        console.log('starting server...');

        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        })

    }).catch((error)=>{

        console.log('error connecting to Database', error.message);
        process.exit(1);

    })
