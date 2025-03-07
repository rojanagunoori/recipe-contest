const recipes = [
    {
        name: "Spaghetti Carbonara", chef: "Chef Mario", totalRatings: 500, avgRating: 4.8, uploadedOn: "2024-01-15", mealType: "Dinner", dishType: "Pasta", testKitchenApproved: true, contestWinner: false, featured: false, description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
        },
    {
      name: "Spaghetti Carbonara",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://cdn.pixabay.com/photo/2020/01/08/13/13/spaghetti-4750055_1280.jpg",
    },
    {
      name: "Chicken Biryani",
      chef: "Chef Aisha",
      totalRatings: 720,
      avgRating: 4.9,
      uploadedOn: "2024-02-01",
      mealType: "Lunch",
      dishType: "Curry",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "Aromatic basmati rice cooked with spices and marinated chicken.",
      imgUrl: "https://cdn.pixabay.com/photo/2021/09/25/18/54/dish-6655595_1280.jpg",
    },
    {
      name: "Blueberry Pancakes",
      chef: "Chef Linda",
      totalRatings: 350,
      avgRating: 4.7,
      uploadedOn: "2024-01-20",
      mealType: "Breakfast",
      dishType: "Dessert",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "Fluffy pancakes loaded with fresh blueberries and maple syrup.",
      imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/04/49/blueberries-1867398_1280.jpg",
    },
    {
      name: "Margherita Pizza",
      chef: "Chef Roberto",
      totalRatings: 600,
      avgRating: 4.9,
      uploadedOn: "2024-01-18",
      mealType: "Dinner",
      dishType: "Pizza",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
      imgUrl: "https://cdn.pixabay.com/photo/2017/06/27/08/41/pizza-2446700_1280.jpg",
    },
    {
      name: "Seafood Paella",
      chef: "Chef Carlos",
      totalRatings: 450,
      avgRating: 4.8,
      uploadedOn: "2024-01-10",
      mealType: "Lunch",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "Spanish rice dish loaded with shrimp, mussels, and saffron.",
      imgUrl: "https://cdn.pixabay.com/photo/2019/09/07/19/02/spanish-paella-4459519_1280.jpg",
    },
    {
      name: "Tandoori Chicken",
      chef: "Chef Raj",
      totalRatings: 550,
      avgRating: 4.9,
      uploadedOn: "2024-02-05",
      mealType: "Dinner",
      dishType: "Chicken",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Spicy roasted chicken marinated in yogurt and traditional Indian spices.",
      imgUrl: "https://cdn.pixabay.com/photo/2022/05/25/07/46/eri-pori-charcoal-7219974_1280.jpg",
    },
    {
      name: "Caesar Salad",
      chef: "Chef Anthony",
      totalRatings: 300,
      avgRating: 4.5,
      uploadedOn: "2024-02-10",
      mealType: "Lunch",
      dishType: "Salad",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "Crisp romaine lettuce, parmesan cheese, and creamy Caesar dressing.",
      imgUrl: "https://cdn.pixabay.com/photo/2012/12/20/10/12/lettuce-71333_1280.jpg",
    },
    {
      name: "Chocolate Brownie",
      chef: "Chef Emma",
      totalRatings: 620,
      avgRating: 4.9,
      uploadedOn: "2024-01-22",
      mealType: "Dessert",
      dishType: "Cake",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Rich and fudgy chocolate brownies with a crispy crust.",
      imgUrl: "https://cdn.pixabay.com/photo/2021/06/27/22/08/cake-6370162_1280.jpg",
    },
    {
      name: "Lemon Tart",
      chef: "Chef Sophie",
      totalRatings: 410,
      avgRating: 4.8,
      uploadedOn: "2024-02-18",
      mealType: "Dessert",
      dishType: "Tart",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "Tangy and sweet lemon tart with a buttery crust.",
      imgUrl: "https://cdn.pixabay.com/photo/2019/05/25/02/16/dessert-4227690_1280.jpg",
    },
    {
      name: "Grilled Salmon",
      chef: "Chef Henry",
      totalRatings: 480,
      avgRating: 4.8,
      uploadedOn: "2024-01-25",
      mealType: "Dinner",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "Perfectly grilled salmon with a lemon butter glaze.",
      imgUrl: "https://cdn.pixabay.com/photo/2022/01/11/10/05/salmon-6930255_1280.jpg",
    },
    {
      name: "Chicken Steak",
      chef: "Chef Liam",
      totalRatings: 520,
      avgRating: 4.9,
      uploadedOn: "2024-01-30",
      mealType: "Dinner",
      dishType: "Steak",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "Juicy and tender chicken steak with garlic butter sauce.",
      imgUrl: "https://cdn.pixabay.com/photo/2017/07/16/12/39/chicken-2509164_1280.jpg",
    },
    {
      name: "French Fries",
      chef: "Chef Tom",
      totalRatings: 410,
      avgRating: 4.5,
      uploadedOn: "2024-01-27",
      mealType: "Snack",
      dishType: "Side Dish",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "Crispy golden fries with a side of ketchup and mayo.",
      imgUrl: "https://cdn.pixabay.com/photo/2020/06/23/14/33/french-fries-5332766_1280.jpg",
    },
    {
      name: "Lasagna",
      chef: "Chef Pietro",
      totalRatings: 450,
      avgRating: 4.8,
      uploadedOn: "2024-02-12",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "Layered pasta with rich meat sauce and creamy béchamel.",
      imgUrl: "https://cdn.pixabay.com/photo/2021/02/06/11/51/food-5987888_1280.jpg",
    },
    {
      name: "Falafel Wrap",
      chef: "Chef Omar",
      totalRatings: 380,
      avgRating: 4.7,
      uploadedOn: "2024-02-15",
      mealType: "Lunch",
      dishType: "Wrap",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "Middle Eastern wrap stuffed with crispy falafel, fresh veggies, and tahini sauce.",
      imgUrl: "https://cdn.pixabay.com/photo/2020/05/22/01/44/falafel-5203363_1280.jpg",
    }
  ];
  
  export default recipes;
  