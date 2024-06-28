// searching for data in mongo db
use MDfruits
> show dbs
MDfruits  0.000GB
admin     0.000GB
config    0.000GB
local     0.000GB
munawar   0.000GB
> use munawar
switched to db munawar
> show collections
text
//for searching a data in database
> db.items.find({Price:500})
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
>




> use MDfruits
switched to db MDfruits
> db.items.find()
{ "_id" : ObjectId("62868c76e2fd902433a8eaee"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "sold" : 20 }
{ "_id" : ObjectId("62868f8eba797d993b3e279b"), "name" : "Almond", "Price" : 1000, "rating" : 4, "quatity" : 20, "sold" : 10 }
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
> ddb.items.find({Rating:5.0})
uncaught exception: ReferenceError: ddb is not defined :
@(shell):1:1
> db.items.find({Rading:5.0])
uncaught exception: SyntaxError: missing } after property list :
@(shell):1:25
> db.items.find({Rading:5.0})
> db.items.find({rading:4})
>



//this query is for rating less then  4.5 and price is grater then
>  db.items.find({Rating:{$lt:5.0},price:{$gt:500}}):
...  db.items.find({Rating:{$lt:5.0},price:{$gt:500}})
uncaught exception: SyntaxError: unexpected token: ':' :
@(shell):1:49