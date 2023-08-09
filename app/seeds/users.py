from app.models import db, User, Product, Category, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='lition', email='demo@aa.io', password='password')
    marnie = User(
        first_name='marnie', last_name='winters', email='marnie@aa.io', password='password')
    bobbie = User(
        first_name='bobbie', last_name='lee', email='bobbie@aa.io', password='password')
    iphone12_red128 = Product(
        name='iPhone12', price=649.00, color='red', storage=128, available= True, category_id= 1,
        image=''
    )
    iphone12_red256 = Product(
        name='iPhone12', price=749.00, color='red', storage=256, available= True, category_id= 1,
        image=''
    )
    iphone12_blue128 = Product(
        name='iPhone12', price=649.00, color='blue', storage=128, available= True, category_id= 1,
        image=''
    )
    iphone12_blue256 = Product(
        name='iPhone12', price=749.00, color='blue', storage=256, available= True, category_id= 1,
        image=''
    )
    iphone12_purple128 = Product(
        name='iPhone12', price=649.00, color='purple', storage=128, available= True, category_id= 1,
        image=''
    )
    iphone12_purple256 = Product(
        name='iPhone12', price=749.00, color='purple', storage=256, available= True, category_id= 1,
        image=''
    )
    iphone12_black128 = Product(
        name='iPhone12', price=649.00, color='black', storage=128, available= True, category_id= 1,
        image=''
    )
    iphone12_black256 = Product(
        name='iPhone12', price=749.00, color='black', storage=256, available= True, category_id= 1,
        image=''
    )

    iphone13_red256 = Product(
        name='iPhone13', price=799.00, color='red', storage=256, available= True, category_id= 2,
        image=''
    )
    iphone13_red512 = Product(
        name='iPhone13', price=999.00, color='red', storage=512, available= True, category_id= 2,
        image=''
    )
    iphone13_blue256 = Product(
        name='iPhone13', price=799.00, color='blue', storage=256, available= True, category_id= 2,
        image=''
    )
    iphone13_blue512 = Product(
        name='iPhone13', price=999.00, color='blue', storage=512, available= True, category_id= 2,
        image=''
    )
    iphone13_purple256 = Product(
        name='iPhone13', price=799.00, color='purple', storage=256, available= True, category_id= 2,
        image=''
    )
    iphone13_purple512 = Product(
        name='iPhone13', price=999.00, color='purple', storage=512, available= True, category_id= 2,
        image=''
    )
    iphone13_black256 = Product(
        name='iPhone13', price=799.00, color='black', storage=256, available= True, category_id= 2,
        image=''
    )
    iphone13_black512 = Product(
        name='iPhone13', price=999.00, color='black', storage=512, available= True, category_id= 2,
        image=''
    )

    iphone14_plus_red256 = Product(
        name='iPhone14 Plus', price=999.00, color='red', storage=256, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_red512 = Product(
        name='iPhone14 Plus', price=1199.00, color='red', storage=512, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_blue256 = Product(
        name='iPhone14 Plus', price=999.00, color='blue', storage=256, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_blue512 = Product(
        name='iPhone14 Plus', price=1199.00, color='blue', storage=512, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_purple256 = Product(
        name='iPhone14 Plus', price=999.00, color='purple', storage=256, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_purple512 = Product(
        name='iPhone14 Plus', price=1199.00, color='purple', storage=512, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_black256 = Product(
        name='iPhone14 Plus', price=999.00, color='black', storage=256, available= True, category_id= 3,
        image=''
    )
    iphone14_plus_black512 = Product(
        name='iPhone14 Plus', price=1199.00, color='black', storage=512, available= True, category_id= 3,
        image=''
    )

    iphone14_promax_gold256 = Product(
        name='iPhone14 Pro Max', price=1199.00, color='gold', storage=256, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_gold512 = Product(
        name='iPhone14 Pro Max', price=1399.00, color='gold', storage=512, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_silver256 = Product(
        name='iPhone14 Pro Max', price=1199.00, color='silver', storage=256, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_silver512 = Product(
        name='iPhone14 Pro Max', price=1399.00, color='silver', storage=512, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_purple256 = Product(
        name='iPhone14 Pro Max', price=1199.00, color='purple', storage=256, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_purple512 = Product(
        name='iPhone14 Pro Max', price=1399.00, color='purple', storage=512, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_black256 = Product(
        name='iPhone14 Pro Max', price=1199.00, color='black', storage=256, available= True, category_id= 4,
        image=''
    )
    iphone14_promax_black512 = Product(
        name='iPhone14 Pro Max', price=1399.00, color='black', storage=512, available= True, category_id= 4,
        image=''
    )


    MacBookAir_15 = Product(
        name='15-inch MacBook Air with M2 chip', price=1499.00, color='black', storage=512, available= True, category_id= 5,
        image=''
    )

    MacBookAir_13 = Product(
        name='13-inch MacBook Air with M2 chip', price=1399.00, color='black', storage=512, available= True, category_id= 5,
        image=''
    )

    iMac = Product(
        name='iMac 24"', price=1699.00, color='blue', storage=512, available= True, category_id= 6,
        image=''
    )

    MacBookPro = Product(
        name='MacBook Pro 16"', price=3499.00, color='gray', storage=1, available= True, category_id= 7,
        image=''
    )

    iPadPro = Product(
        name='12.9-inch iPad Pro', price=1199.00, color='silver', storage=512, available= True, category_id= 8,
        image=''
    )

    iPadAir = Product(
        name='10.9-inch iPad Air', price=749.00, color='blue', storage=256, available= True, category_id= 9,
        image=''
    )

    AppleWatchUltra = Product(
        name='Apple Watch Ultra', price=799.00, color='silver', storage=0, available= True, category_id= 10,
        image=''
    )

    AirPodsPro2 = Product(
        name='AirPods Pro (2nd generation)', price=249.00, color='white', storage=0, available= True, category_id= 11,
        image=''
    )

    iphone_12 = Category(
        category_name='iPhone 12'
    )
    iphone_13 = Category(
        category_name='iPhone 13'
    )
    iphone_14_Plus = Category(
        category_name='iPhone 14 Plus'
    )
    iphone_14_ProMax = Category(
        category_name='iPhone 14 Pro Max'
    )
    MacBookAir = Category(
        category_name='MacBook Air'
    )
    iMacs = Category(
        category_name='iMac'
    )
    MacBook_Pro = Category(
        category_name='MacBook Pro'
    )

    iPad_Pro = Category(
        category_name = 'iPad Pro'
    )

    iPad_Air = Category(
        category_name = 'iPad Air'
    )

    Apple_Watch_Ultra = Category(
        category_name = 'Apple Watch Ultra'
    )

    AirPodsPro_2 =Category(
        category_name = 'AirPods Pro 2'
    )

    review1= Review(
        content='Phone was okay', rating=3.2, created_at=datetime(2023, 6, 14), product_id = 1, user_id = 1
    )

    review2= Review(
        content='Phone was great', rating=4.0, created_at=datetime(2023, 8, 8), product_id = 25, user_id = 1
    )

    review3= Review(
        content='this was awesome', rating=4.5, created_at=datetime(2023, 7, 10), product_id = 30, user_id = 2
    )

    review4= Review(
        content='was really nice', rating=4.2, created_at=datetime(2023, 8, 8), product_id = 31, user_id = 2
    )

    review5= Review(
        content='was really great', rating=4.0, created_at=datetime(2023, 8, 8), product_id = 35, user_id = 3
    )
    review6= Review(
        content='happy to have bought this', rating=4.3, created_at=datetime(2023, 8, 8), product_id = 36, user_id = 3
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add_all([iphone12_red128,iphone12_red256, iphone12_blue128, iphone12_blue256, iphone12_purple128, iphone12_purple256, iphone12_black128, iphone12_black256,
                       iphone13_red256, iphone13_red512, iphone13_blue256, iphone13_blue512, iphone13_purple256, iphone13_purple512, iphone13_black256, iphone13_black512,
                       iphone14_plus_red256, iphone14_plus_red512, iphone14_plus_blue256, iphone14_plus_blue512, iphone14_plus_purple256, iphone14_plus_purple512, iphone14_plus_black256,
                       iphone14_plus_black512, iphone14_promax_gold256, iphone14_promax_gold512, iphone14_promax_silver256, iphone14_promax_silver512, iphone14_promax_purple256,
                       iphone14_promax_purple512, iphone14_promax_black256, iphone14_promax_black512])
    db.session.add_all([MacBookAir_15, MacBookAir_13, iMac, MacBookPro, iPadPro, iPadAir, AppleWatchUltra, AirPodsPro2])
    db.session.add_all([iphone_12, iphone_13, iphone_14_Plus, iphone_14_ProMax, MacBookAir, iMacs, MacBook_Pro, iPad_Pro, iPad_Air, Apple_Watch_Ultra, AirPodsPro_2])
    db.session.add_all([review1, review2, review3, review4, review5, review6])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        db.session.execute(text("DELETE FROM categories"))
        db.session.execute(text("DELETE FROM products"))
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
