import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });


    const uploadOnCloudinary = async (localpath) =>{
        try{
if(!localpath) return null
// upload file on cloudinary
const response = await cloudinary.uploader.upload(localpath,{
    resource_type:"auto"
})
console.log("File is Uploaded on Cloudinary", response.url)
return response;
        }
        catch(error){
            fs.unlinkSync(localpath)
            return null;
        }
    }



    const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);