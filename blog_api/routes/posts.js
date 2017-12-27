module.exports = {
	getPosts(store, req, res) {
		console.log('inside posts.js')
		res.status(200).send(store.post)
  },
  addPost(store, req, res) {
  	console.log('inside add post')
  	temp_post = req.body
  	temp_id = store.post.length
  	store.post.push(temp_post)
  	res.status(201).send(`"Added new record at index " + $temp_id`)
  },
  updatePost(store, req, res) {
  	console.log('Inside update Post')
  	store.post[req.params.id]=req.body
  	res.status(202).send("updated record " + req.params.id)

  },
  removePost(store, req, res) {
  	console.log("Inside remove post")
  	store.post.splice(req.params.id,1)
  	res.status(204).send("Deleted record at index "+ req.param.id)

  }
}