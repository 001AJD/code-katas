import express from 'express';
const app = express();


app.use(express.json());
app.use('/api',router);
app.listen(3000,()=>{
  console.log('server listening on port 3000');
});