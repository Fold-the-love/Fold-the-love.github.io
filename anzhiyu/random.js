var posts=["2023/08/08/Start/","2024/11/07/free_picture_bed/","2024/11/07/front_matter/","2024/11/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };