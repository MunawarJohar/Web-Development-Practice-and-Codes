//before delete the data
> use MDfruits
switched to db MDfruits
> show collection
uncaught exception: Error: don't know how to show [collection] :
shellHelper.show@src/mongo/shell/utils.js:1211:11
shellHelper@src/mongo/shell/utils.js:838:15
@(shellhelp2):1:1
> db.items.find()
{ "_id" : ObjectId("62868c76e2fd902433a8eaee"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "sold" : 20 }
{ "_id" : ObjectId("62868f8eba797d993b3e279b"), "name" : "Almond", "Price" : 1000, "rating" : 4, "quatity" : 20, "sold" : 10 }
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
> db.items.find({price:500})
> show collections
items


//after deleting the data Price:500
> db.items.deleteOne({Price:500})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.items.find()
{ "_id" : ObjectId("62868f8eba797d993b3e279b"), "name" : "Almond", "Price" : 1000, "rating" : 4, "quatity" : 20, "sold" : 10 }
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
>

//for searching data in database

> db.items.find({Price:500})
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
>

