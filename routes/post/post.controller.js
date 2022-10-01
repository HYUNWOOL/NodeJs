const posts = [
  { id: 1, name: "글1" },
  { id: 2, name: "글2" },
  { id: 3, name: "글3" },
]

exports.createPost = (req, res) => {
  
  console.log(req);

  res.json({ ok: true})
}
  
exports.getPosts = (req, res) => {
  //유저 정보 반환
  console.log(posts);
  res.json({ ok: true, posts: posts })
}