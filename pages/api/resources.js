import data from './data.json'
const fs = require('fs')
const path = require('path')
const pathToFile = path.resolve('./pages/api/data.json')
const getResources = () => JSON.parse(fs.readFileSync(pathToFile))
export default function resource(req,res){
        
        if(req.method === "GET"){
              return  res.status(200).json(data)
        }
        if(req.method ==="POST"){
                const  {title, description, link, priority, timeToFinish} = req.body
                if(!title || !description || !link || !priority || !timeToFinish){
                     return   res.status(422).send("Data is missing")
                }
                const getResources = () => JSON.parse(fs.readFileSync(pathToFile))
            
                const resource ={
                        id : Date.now(),
                        title: title,
                        description : description,
                        link: link,
                        priority: priority,
                        timeToFinish : timeToFinish,
                        status: 'inactive'

                }
                const resources = getResources();
                resources.push(resource)
                  
                fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
                        if (error) {
                          return res.status(422).send("Cannot store data in the file!");
                        }
                    
                        return res.send("Data has been saved!");
                      })
                
               return  res.status(200).send("Data Received")
        
        }
       
}
