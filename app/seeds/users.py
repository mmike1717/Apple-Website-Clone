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

    alex = User(
        first_name='Alex', last_name='Rogers', email='rogers@aa.io', password='password')


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
        name='MacBook Air', price=1299.00, model='15-inch (M-2 Chip)', category_id= 1, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg'
    )
    MacBookAir13 = InStoreItem(
        name='MacBook Air', price=1099.00, model='13-inch (M-2 Chip)', category_id= 1, image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg'
    )

    iPadAir = InStoreItem(
        name='iPad', price=549.00, model='Air', category_id= 2, image='https://atstore.ba/wp-content/uploads/2020/10/iPad_Air_Wi-Fi_10.9_in_Space_Gray_PDP_Image_Position-1B_WWEN-scaled-1.jpg'
    )

    iPad10th = InStoreItem(
        name='iPad', price=449.00, model='(10th generation)', category_id= 2, image='https://static.esrgear.com/blog/wp-content/uploads/2022/08/new-design-10th.jpg'
    )

    iPadmini = InStoreItem(
        name='iPad', price=499.00, model='mini', category_id= 2, image='https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-mini_hero_09142021_big.jpg.large.jpg'
    )

    MacBookPro14 = InStoreItem(
        name='MacBook Pro', price=1899.00, model='14-inch', category_id= 1, image='https://photos5.appleinsider.com/gallery/0-87822-14-design-xl.jpg'
    )

    MacBookPro16 = InStoreItem(
        name='MacBook Pro', price=2399.00, model='16-inch', category_id= 1, image='https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.landing-big_2x.jpg'
    )

    WatchUltra = InStoreItem(
        name='Apple Watch', price=799.00, model='Ultra', category_id= 4, image='https://tech101.com.ph/wp-content/uploads/2023/02/APPLE-WATCH-ULTRA-3.jpg'
    )


    WatchSeries8 = InStoreItem(
        name='Apple Watch', price=399.00, model='Series 8', category_id= 4, image='https://www.iphonelife.com/sites/iphonelife.com/files/series8.jpg'
    )

    WatchSE = InStoreItem(
        name='Apple Watch', price=249.00, model='SE', category_id= 4, image='https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large.jpg'
    )

    WatchNike = InStoreItem(
        name='Apple Watch', price=249.00, model='Nike', category_id= 4, image='https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/09/Apple-Watch-Nike.jpg'
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
        content='Phone was okay. Should have gotten the 14 instead', rating=3.2, created_at=datetime(2023, 6, 14), user_id = 1, store_item_id = 1
    )

    review2= Review(
        content="Phone and the photos are they besttttt I’m mean really great photos", rating=4.0, created_at=datetime(2023, 8, 8), user_id = 1, store_item_id = 3
    )

    review3= Review(
        content='this was awesome. Im glad i bought the phone', rating=4.5, created_at=datetime(2023, 7, 10), user_id = 2, store_item_id = 7
    )

    review4= Review(
        content='was really nice. Needed an ipad and happy I got this one', rating=4.2, created_at=datetime(2023, 8, 8), user_id = 2, store_item_id = 8
    )

    review5= Review(
        content='was really great, needed a second computer', rating=4.0, created_at=datetime(2023, 8, 8), user_id = 3, store_item_id = 13
    )
    review6= Review(
        content='happy to have bought this, really needed a computer to be able to code.', rating=4.3, created_at=datetime(2023, 8, 8), user_id = 3, store_item_id = 11
    )

    review7= Review(
        content='should have bought a different ipad ', rating=3.0, created_at=datetime(2023, 8, 8), user_id = 4, store_item_id = 14
    )
    review8= Review(
        content='happy to have bought this, really needed a computer to be able to code.', rating=4.0, created_at=datetime(2023, 8, 8), user_id = 4, store_item_id = 15
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
