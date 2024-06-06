# ECommerce_API

**About:**
API for an ecommerce platform admin to manage product inventory.
1) Go to Terminal write npm install
2) "npm start "
   Models/Schemas:
-	Products [fields: id, name, quantity]
-	API to add products to the database
URL [POST]: localhost:3000/products/create
- API to list products
URL [GET] : localhost:3000/products
- API to delete products
URL [DELETE] : localhost:3000/products/:id
- API to update quantity of a product (can be incremented or decremented)
URL [POST] : localhost:3000/products/:id/update_quantity/?number=1

**Demo:**https://ecommerce-api-rbgi.onrender.com
