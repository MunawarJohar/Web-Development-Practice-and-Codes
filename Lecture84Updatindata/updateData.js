//Crud
//crud stand for create read update delete
//items is table 
//before updatind the price of pear is 
{ "_id" : ObjectId("6288c029f42f84700815bc67"), "name" : "pear", "Price" : 700, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
//after update the price of pear
> db.items.updateOne({name:"pear"},{$set:{Price:100}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.items.find()
{ "_id" : ObjectId("62868f8eba797d993b3e279b"), "name" : "Almond", "Price" : 1000, "rating" : 4, "quatity" : 20, "sold" : 10 }
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
{ "_id" : ObjectId("6288c029f42f84700815bc67"), "name" : "pear", "Price" : 100, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
{ "_id" : ObjectId("6288c088f42f84700815bc68"), "name" : "Munawar Hssain", "Location" : "Maqpon xar", "city" : "skardu", "Phone" : 555791615 }
>

//update pear 
db.items.updateMany({name:"pear"},{$set  :{name:"jujube"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.items.find()
//after updating 
> db.items.find()
{ "_id" : ObjectId("62868f8eba797d993b3e279b"), "name" : "Almond", "Price" : 1000, "rating" : 4, "quatity" : 20, "sold" : 10 }
{ "_id" : ObjectId("62869081ba797d993b3e279c"), "name" : "Apricot", "Price" : 500, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
{ "_id" : ObjectId("6288c029f42f84700815bc67"), "name" : "jujube", "Price" : 100, "Rating" : 4.5, "quatity" : 29, "bestquality" : 5, "desition" : true }
{ "_id" : ObjectId("6288c088f42f84700815bc68"), "name" : "Munawar Hssain", "Location" : "Maqpon xar", "city" : "skardu", "Phone" : 555791615 }
>

