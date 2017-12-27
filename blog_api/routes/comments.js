module.exports = {
  getComments(store,id,req, res) {
  	res.status(200).send(store.post[id].comments)
    
  }, 
  addComment(store,id,req, res) {
  	new_comment = req.body
  	store.post[id].comments.push(new_comment)
  	console.log(new_comment)

  	res.status(200).send(store)

  },
  updateComment(store,pid,cid,req, res) {
  	store.post[pid].comments[cid]=req.body
  	res.status(202).send("Updated" + store)
    
  },
  removeComment(store,pid,cid,req, res) {
    store.post[pid].comments.splice(cid,1)  
    res.status(204).send("deleted")
}  
}