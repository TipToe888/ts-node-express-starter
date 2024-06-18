import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const port = 8888;
const app = express()

app.use((err: any, req: any, res: any, next: any) => {
    // Put alerts here for when this server crashes!
    console.log('Oooooooooooooooooooooooooooooooooops - chris delia voice')
    res.status(500).send('Something in server broke!')
})




process.on('exit', function () {
    // your clean up code
    
});




app.listen(port, async () => {

    console.log('listening on port ' + port)




})































