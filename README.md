# Parcial_carrito_Diego_Alias

CREAR MODELOS CON SEQUELIZE


sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Size --attributes name:string

sequelize model:generate --name Gender --attributes type:string

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name State --attributes descrition:string

sequelize model:generate --name Address --attributes street:string,number:integer


sequelize model:generate --name Product --attributes name:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,brands_id:integer,categories_id:integer,sizes_id:integer,genders_id:integer,images_id:integer

sequelize model:generate --name User --attributes firsName:string,lastName:string,email:string,password:string,addresses_id:integer

sequelize model:generate --name Image --attributes name:string,products_id:integer

sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,payments_id:integer,state_id:integer,user_id:integer,users_addresses_id:integer

sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,order_id:integer,product_id:integer

sequelize model:generate --name Shipping --attributes street:string,number:integer
