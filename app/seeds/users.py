from app.models import db, User, Product, Category, Review, InStoreItem, environment, SCHEMA
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
    iphone12 = InStoreItem(
        name='iPhone12', price=599.00, model='reg', category_id=3 , image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-black-2020_AV1?wid=1144&hei=1144&fmt=jpeg'
    )
    iphone13mini = InStoreItem(
        name='iPhone13', price=599.00, model='mini', category_id=3 , image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg'
    )
    iphone13 = InStoreItem(
        name='iPhone13', price=699.00, model='reg', category_id=3 , image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg'
    )
    iphone14 = InStoreItem(
        name='iPhone14', price=799.00, model='reg', category_id=3 , image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505126cv2d.jpg'
    )
    iphone14plus = InStoreItem(
        name='iPhone14', price=899.00, model='plus', category_id=3 , image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505126cv2d.jpg'
    )
    iphone14Pro = InStoreItem(
        name='iPhone14', price=899.00, model='Pro', category_id= 3, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg'
    )
    iphone14ProMax = InStoreItem(
        name='iPhone14', price=899.00, model='Pro max', category_id= 3, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=p-jpg'
    )
    iPadPro = InStoreItem(
        name='iPad Pro', price=799.00, model='11-inch Display', category_id= 2, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202212?wid=5120&hei=2880&fmt=p-jpg'
    )
    iPadPro12 = InStoreItem(
        name='iPad Pro', price=1099.00, model='12-inch Display', category_id= 2, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202212?wid=5120&hei=2880&fmt=p-jpg'
    )
    MacBookAir15 = InStoreItem(
        name='MacBook Air 15', price=1299.00, model='15-inch (M-2 Chip)', category_id= 1, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg'
    )
    MacBookAir13 = InStoreItem(
        name='MacBook Air 13', price=1099.00, model='13-inch (M-2 Chip)', category_id= 1, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg'
    )

    AppleWatchUltra = Product(
        name='Apple Watch Ultra', price=799.00, color='silver', storage=0, model='apple',
        image=''
    )

    AirPodsPro2 = Product(
        name='AirPods Pro (2nd generation)', price=249.00, color='white', storage=0, model='apple',
        image=''
    )

    Mac = Category(
        category_name='Mac'
    )
    iPad = Category(
        category_name='iPad'
    )
    iphone = Category(
        category_name='iPhone'
    )
    watch = Category(
        category_name='Watch'
    )
    Vision = Category(
        category_name='Vision'
    )
    AirPods = Category(
        category_name='AirPods'
    )
    Tv_Home = Category(
        category_name='TV & Home'
    )

    Entertainment = Category(
        category_name = 'Entertainment'
    )

    Accessories = Category(
        category_name = 'Accessories'
    )

    review1= Review(
        content='Phone was okay', rating=3.2, created_at=datetime(2023, 6, 14), user_id = 1, store_item_id = 1
    )

    review2= Review(
        content='Phone was great', rating=4.0, created_at=datetime(2023, 8, 8), user_id = 1, store_item_id = 3
    )

    review3= Review(
        content='this was awesome', rating=4.5, created_at=datetime(2023, 7, 10), user_id = 2, store_item_id = 7
    )

    review4= Review(
        content='was really nice', rating=4.2, created_at=datetime(2023, 8, 8), user_id = 2, store_item_id = 8
    )

    review5= Review(
        content='was really great', rating=4.0, created_at=datetime(2023, 8, 8), user_id = 3, store_item_id = 9
    )
    review6= Review(
        content='happy to have bought this', rating=4.3, created_at=datetime(2023, 8, 8), user_id = 3, store_item_id = 11
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add_all([iphone12, iphone13, iphone13mini, iphone14, iphone14plus, iphone14Pro, iphone14ProMax, iPadPro, iPadPro, iPadPro12, MacBookAir13, MacBookAir15])
    db.session.add_all([AppleWatchUltra, AirPodsPro2])
    db.session.add_all([Mac, iPad, iphone, watch, Vision, AirPods, Tv_Home, Entertainment, Accessories ])
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
        db.session.execute(f"TRUNCATE table {SCHEMA}.in_store_items RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        db.session.execute(text("DELETE FROM categories"))
        db.session.execute(text("DELETE FROM products"))
        db.session.execute(text("DELETE FROM in_store_items"))
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
