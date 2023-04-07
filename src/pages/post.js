
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import { lime,yellow } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
function Post() {

    const [post,setPost]=useState([]);
    useEffect(()=>{
      const onLoad = async()=>{
        try {
           const res= await axios.get("https://dummyjson.com/posts")
           setPost(res.data.posts);
    
        }
        catch (err) {
        console.error(err)
        }
      };
        onLoad();
    },[])


  const Post=  () =>{
   var abc= post.map((item)=>{
      return(
        <React.Fragment>
    <CardContent sx={{ bgcolor: "#f9fbe7",marginTop:5,borderRadius:2 }}>
      <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
        {item.id}
      </Typography>
      <Typography variant="h5" component="div" sx={{ mb:1,mt:1  }}>
      
          "{item.title}"
      </Typography>
      <Typography variant="body2">
        {item.body}
      </Typography>
      <div className='div_genre'>
      {item.tags.map((point)=>{
          return (
<Typography sx={{ mb: 1.5,borderRadius:2 }} variant="h6" bgcolor={lime[300]} p={1} m={2}>
        {point}
      </Typography>
          )
        })}
      </div>
      <Typography sx={{ m: 1.5,borderRadius:2 }} variant="h6" bgcolor={yellow[300]} p={2} m={2}>
        Reactions(😂😍👍😒): &nbsp; {item.reactions}
      </Typography>
    </CardContent>
  </React.Fragment>
      )
     })
return abc;
  }
  console.log(post)
    return (
        <div className='container'>
        <Post/>
        </div>
    )
}

export default Post
