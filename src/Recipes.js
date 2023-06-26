const recipes = [
  {
    title: "Spicy Thai Basil Chicken Stir-Fry",
    imageSrc: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/07/Thai-basil-chicken-33.jpg",
    description: "This vibrant stir-fry combines tender chicken, colorful vegetables, Thai basil, and spicy chili sauce for a flavorful and aromatic Thai-inspired dish. Serve over jasmine rice.",
  },
  {
    title: "Creamy Garlic Parmesan Pasta",
    imageSrc: "https://midwestfoodieblog.com/wp-content/uploads/2019/03/FINAL-Parmesan-garlic-pasta-1-3.jpg",
    description: "Enjoy a comforting bowl of creamy garlic Parmesan pasta with al dente spaghetti coated in a rich sauce made with garlic, butter, cream, and Parmesan cheese. Top with parsley and extra Parmesan.",
  },
  {
    title: "Grilled Citrus Salmon with Mango Salsa",
    imageSrc: "https://thecookingjar.com/wp-content/uploads/2018/05/2013-08-12-14.58.362-e1398056489112.jpg",
    description: "Elevate your seafood experience with grilled citrus salmon marinated in a zesty glaze. Topped with tropical mango salsa, this dish offers a burst of citrus and fruity flavors. Serve with asparagus or quinoa.",
  },
  {
    title: "Classic Margherita Pizza",
    imageSrc:  "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg",
    description: "Indulge in the simplicity of a classic Margherita pizza with fresh basil leaves, mozzarella cheese, and tomato sauce on a thin and crispy crust.",
  },
  {
    title: "Lemon Herb Roasted Chicken",
    imageSrc: "https://www.cuisinart.com/globalassets/recipes/recipe_148_492918392.jpg",
    description: "Enjoy tender and juicy roasted chicken infused with the flavors of lemon, garlic, and a medley of herbs. Perfectly seasoned and roasted to golden perfection.",
  },
  {
    title: "Vegetable Stir-Fry with Tofu",
    imageSrc: "https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-Thumbnail.jpg",
    description: "Savor the goodness of a colorful vegetable stir-fry with tofu, packed with crunchy vegetables and tossed in a savory sauce. Serve over steamed rice or noodles.",
  },
  {
    title: "Mouthwatering BBQ Ribs",
    imageSrc: "https://www.allrecipes.com/thmb/gVocwHi0RMwyjfJ1g6q8VHacxJU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-4x3-208-0221b0213517493494a29c1c76a8d1cc.jpg",
    description: "Fall-off-the-bone tender and smoky BBQ ribs that are perfectly glazed with a tangy and sweet sauce. Serve with your favorite sides for a delicious barbecue feast.",
  },
  {
    title: "Gourmet Beef Burger",
    imageSrc: "https://i.ytimg.com/vi/g9Rpv78PkrE/maxresdefault.jpg",
    description: "Sink your teeth into a juicy and flavorful gourmet beef burger topped with melted cheese, fresh vegetables, and a special sauce. Perfect for your next cookout or weekend treat.",
  },
  {
    title: "Caprese Salad with Balsamic Glaze",
    imageSrc: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2F3b432b41ce04c96a08d77befa42b9881a587a436",
    description: "Enjoy a refreshing Caprese salad made with ripe tomatoes, fresh mozzarella cheese, and fragrant basil leaves. Drizzle with balsamic glaze for an extra burst of flavor.",
  },
  {
    title: "Chicken Alfredo Lasagna",
    imageSrc: "https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2021/12/15134625/Chicken-Alfredo-Lasagna-Vertical-3.jpg",
    description: "Indulge in layers of tender chicken, creamy Alfredo sauce, lasagna noodles, and melted cheese in this decadent and satisfying chicken Alfredo lasagna.",
  },
  {
    title: "Crispy Honey-Glazed Salmon",
    imageSrc: "https://www.unicornsinthekitchen.com/wp-content/uploads/2019/08/Orang-Glaze-Salmon-7-500x500.jpg",
    description: "Delight in the irresistible combination of crispy-skinned salmon glazed with a sweet and sticky honey sauce. Served with a side of steamed vegetables or roasted potatoes.",
  },
  {
    title: "Penne Arrabbiata",
    imageSrc: "https://www.skinnytaste.com/wp-content/uploads/2009/10/Mushroom-Risotto_1-4.jpg",
    description: "Tantalize your taste buds with a spicy and flavorful Penne Arrabbiata, featuring al dente pasta tossed in a fiery tomato sauce infused with garlic, chili flakes, and fresh herbs.",
  },
  {
    title: "Mushroom Risotto",
    imageSrc: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg",
    description: "Indulge in a creamy and rich mushroom risotto made with Arborio rice, sautéed mushrooms, Parmesan cheese, and a touch of white wine. A comforting and elegant dish.",
  },
  {
    title: "Baked Spinach and Artichoke Dip",
    imageSrc: "https://therecipecritic.com/wp-content/uploads/2019/12/spinach_artichoke_dip2.jpg",
    description: "Enjoy a creamy and cheesy baked spinach and artichoke dip that's perfect for parties or game nights. Serve with tortilla chips or toasted bread for a delicious appetizer.",
  },
  {
    title: "Cajun Shrimp Pasta",
    imageSrc: "https://selfproclaimedfoodie.com/wp-content/uploads/cajun-shrimp-pasta-4.jpg",
    description: "Savor the bold and spicy flavors of Cajun shrimp pasta, featuring succulent shrimp cooked in a creamy sauce with Cajun seasoning, bell peppers, and onions. Serve over linguine or fettuccine.",
  },
];

export default recipes