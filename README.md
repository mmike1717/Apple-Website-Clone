<h1>Pear</h1>

<p>Apple's website served as an inspiration, for the iconic design and user-friendly site. This ecommerce website lets users have that great online shopping experience.
From selecting the device, the color, and the storage on the device they would like. Efficiently adding the product to their cart or to their 'Save for Late' list. </p>

<p>Wish to visit the site and experience it for yourself. Perfect!!😁 </p>
<p>Here's the like https://pear-2ofk.onrender.com</p>

<h2>Index</h2>

[MVP Feature List](https://github.com/mmike1717/Apple-Website-Clone/wiki/MVP-Feature-List) |
[Database Scheme](https://github.com/mmike1717/Apple-Website-Clone/wiki/Apple-Clone-Schema) |
[User Stories](https://github.com/mmike1717/Apple-Website-Clone/wiki/User-Stories) |
[Wire Frames](https://github.com/mmike1717/Apple-Website-Clone/wiki/Example-WireFrame) |

<h2>Technologies/Frameworks Used :</h2>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)


<h2>HomePage</h2>

<img width="1065" alt="Screenshot 2023-08-27 at 4 43 53 PM" src="https://github.com/mmike1717/Apple-Website-Clone/assets/125857252/9dfef7ca-6035-4dcd-b83b-a36d38a64bef">

<h2>Product Page</h2>

<img width="1224" alt="Screenshot 2023-08-30 at 1 43 51 AM" src="https://github.com/mmike1717/Apple-Website-Clone/assets/125857252/b4d9c551-ebb3-4496-9cc3-c50e1346addc">

<h2>Cart Page</h2>

<img width="1043" alt="Screenshot 2023-08-30 at 7 14 30 PM" src="https://github.com/mmike1717/Apple-Website-Clone/assets/125857252/19596846-e362-4e71-aca3-fe537afd3134">


<h2>Getting Started</h2>

1. Clone this repository:

   `
   https://github.com/mmike1717/Apple-Website-Clone.git
   `
2. Install denpendencies into React-App:

   * `npm install`
   * `npm i react-datepicker`
   * `pip install -r requirements.txt`
   * `pip install psycopg2`
  
3. At the root of the file run the following
   * `npm install`

5. Create a **.env** file using the **.envexample** provided 

6. Set up your database with information from your .env and then run the following to create your database, migrate, and seed at the root of the entire folder: 
 
   * `npm run build`
   * `pipenv flask db upgrade`
   * `pipenv flask seed all`

7. Start the app for both backend in the react-app folder:
   * `pipenv run flask run`

9. At the root, start the frontend by using

   * `npm start`

10. Now you can use the Demo User or Create an account



<h2>Future Implementation </h2>

1. AWS for each user profile so they can add a profile picture
2. Make Order History Feature
3. Make splashpage for each product


<h2>Contact Me at:</h2>

www.linkedin.com/in/michael-oyola


<h2>Endpoints</h2>

1. GET 'api/category/get_all'
    - Getting all the categories that are in the store and the products that associated with them.
    - return Value:
            - {
            'id': Int,
            'category_name': STRING,
            'items_in_cat': OBJECT of each product in the categories
        }
      
2.POST '/api/orders/add_order/:productid/:userid'
      -Being able to add a product to your cart
      - return: {   'id': Int,
            'status': STRING,
            'created_at': DATE,
            'quantity': INT,
            'user_id': INT,
            'product_id': INT,
            'products': Single Object of the product
        }

3.GET  '/api/orders/in_cart/:userid'
      -Getting all the orders that belongs to the user signed in
      - Return: Array of Objects with each orders description

4. PUT  '/api/orders//edit/:order_id'
      - Being able to edit a orders quantity if they wish to buy more then 1 product
      - return: {   'id': Int,
            'status': STRING,
            'created_at': DATE,
            'quantity': INT,
            'user_id': INT,
            'product_id': INT,
            'products': Single Object of the product
        }

5. DELETE '/api/orders//delete/cart/:user_id'
      - For now once the user checksout, the whole cart will be deleted.
      - return: {'message':'deleted all cart'}
  
6. POST 'api/product/new'
      - creating a new product a customer might like. The way they want it. They pick the color, storage and in the future more things.
      - return: {
            'id': INT,
            'name': STRING,
            'price': INT,
            'color': STRING,
            'storage': INT,
            'model': STRING,
            'image': STRING
        }

  7. GET 'api/product/item/:itemid'
      - Getting that specific product the user created.
      - return: {
            'id': INT,
            'name': STRING,
            'price': INT,
            'color': STRING,
            'storage': INT,
            'model': STRING,
            'image': STRING
        }






