INSERT INTO recipes (title, ingredients, cuisine, dietaryRestrictions, prepTime, cookTime, instructions, nutrition, rating, author)
VALUES
    ('Spaghetti Carbonara', ARRAY['spaghetti', 'eggs', 'parmesan cheese', 'pancetta', 'black pepper', 'salt'], 'Italian', ARRAY['gluten'], 10, 20, 'Cook spaghetti. In a bowl, mix eggs and cheese. Cook pancetta until crisp. Combine spaghetti with pancetta and egg mixture. Season with salt and pepper.', '{"calories": 400, "protein": 15, "fat": 20, "carbs": 50}', 4.5, 'Chef John'),
    ('Vegetarian Tacos', ARRAY['tortillas', 'black beans', 'corn', 'avocado', 'lime', 'cilantro', 'onion'], 'Mexican', ARRAY['vegetarian', 'gluten-free'], 15, 10, 'Warm tortillas. Combine black beans, corn, diced avocado, chopped onion, and cilantro. Squeeze lime over the mixture. Fill tortillas with mixture.', '{"calories": 300, "protein": 10, "fat": 10, "carbs": 40}', 4.8, 'Chef Maria'),
    ('Chicken Curry', ARRAY['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic', 'ginger', 'tomatoes', 'cilantro'], 'Indian', ARRAY['gluten-free'], 20, 40, 'Sauté onion, garlic, and ginger. Add chicken and curry powder, cook until chicken is browned. Add tomatoes and coconut milk, simmer until chicken is cooked. Garnish with cilantro.', '{"calories": 500, "protein": 30, "fat": 25, "carbs": 40}', 4.7, 'Chef Anjali'),
    ('Gluten-Free Brownies', ARRAY['cocoa powder', 'gluten-free flour', 'sugar', 'butter', 'eggs', 'vanilla extract', 'salt'], 'American', ARRAY['gluten-free'], 15, 25, 'Mix dry ingredients. Add melted butter, eggs, and vanilla. Pour into a baking pan. Bake at 350°F for 25 minutes.', '{"calories": 350, "protein": 5, "fat": 20, "carbs": 45}', 4.9, 'Chef Emma'),
    ('Paella', ARRAY['rice', 'chicken', 'shrimp', 'chorizo', 'peas', 'bell pepper', 'tomato', 'saffron', 'garlic', 'onion', 'olive oil', 'salt', 'pepper'], 'Spanish', ARRAY['none'], 30, 45, 'Sauté chicken, shrimp, and chorizo. Add garlic, onion, and bell pepper. Stir in rice and saffron. Add broth and simmer until rice is cooked. Mix in peas and tomatoes.', '{"calories": 500, "protein": 30, "fat": 20, "carbs": 50}', 4.8, 'Chef Carlos'),
    ('Beef Stroganoff', ARRAY['beef', 'mushrooms', 'onion', 'sour cream', 'beef broth', 'butter', 'flour', 'mustard', 'salt', 'pepper'], 'Russian', ARRAY['gluten'], 20, 30, 'Cook beef and set aside. Sauté mushrooms and onion in butter. Add flour and mustard. Stir in broth and simmer. Mix in sour cream and beef.', '{"calories": 600, "protein": 35, "fat": 40, "carbs": 20}', 4.7, 'Chef Dmitri'),
    ('Moussaka', ARRAY['eggplant', 'ground beef', 'tomato sauce', 'onion', 'garlic', 'cinnamon', 'nutmeg', 'bechamel sauce', 'parmesan cheese', 'olive oil', 'salt', 'pepper'], 'Greek', ARRAY['gluten'], 30, 60, 'Sauté beef with onion, garlic, and spices. Layer eggplant and beef mixture in a baking dish. Top with bechamel sauce and cheese. Bake until golden.', '{"calories": 500, "protein": 25, "fat": 30, "carbs": 30}', 4.8, 'Chef Eleni'),
    ('Chicken Fajitas', ARRAY['chicken breast', 'bell peppers', 'onion', 'tortillas', 'fajita seasoning', 'lime', 'olive oil', 'salt', 'pepper'], 'Mexican', ARRAY['none'], 15, 15, 'Cook chicken with seasoning. Sauté peppers and onion. Serve with tortillas and lime.', '{"calories": 350, "protein": 25, "fat": 10, "carbs": 40}', 4.6, 'Chef Miguel'),
    ('Butter Chicken', ARRAY['chicken breast', 'tomato sauce', 'cream', 'butter', 'onion', 'garlic', 'ginger', 'garam masala', 'cumin', 'coriander', 'turmeric', 'salt', 'pepper'], 'Indian', ARRAY['gluten-free'], 20, 30, 'Cook chicken with spices and set aside. Sauté onion, garlic, and ginger in butter. Add tomato sauce and cream. Stir in chicken and simmer.', '{"calories": 500, "protein": 25, "fat": 30, "carbs": 20}', 4.8, 'Chef Priya'),
    ('Quiche Lorraine', ARRAY['pie crust', 'bacon', 'eggs', 'cream', 'milk', 'gruyere cheese', 'onion', 'nutmeg', 'salt', 'pepper'], 'French', ARRAY['gluten'], 20, 35, 'Cook bacon and onion. Whisk eggs, cream, milk, and spices. Layer bacon, onion, and cheese in crust. Pour in egg mixture. Bake until set.', '{"calories": 400, "protein": 15, "fat": 30, "carbs": 20}', 4.7, 'Chef Marie'),
    ('Falafel', ARRAY['chickpeas', 'onion', 'garlic', 'parsley', 'cilantro', 'cumin', 'coriander', 'flour', 'baking powder', 'salt', 'pepper', 'olive oil'], 'Middle Eastern', ARRAY['vegan', 'gluten-free'], 15, 10, 'Blend chickpeas, onion, garlic, and herbs. Add spices, flour, and baking powder. Shape into balls and fry until golden.', '{"calories": 200, "protein": 10, "fat": 10, "carbs": 20}', 4.8, 'Chef Nadia'),
    ('Beef Bourguignon', ARRAY['beef', 'red wine', 'onion', 'carrot', 'mushrooms', 'bacon', 'garlic', 'beef broth', 'thyme', 'bay leaf', 'flour', 'butter', 'salt', 'pepper'], 'French', ARRAY['gluten'], 30, 150, 'Brown beef and set aside. Cook bacon, onion, carrot, and mushrooms. Add garlic and flour. Stir in wine, broth, and herbs. Add beef and simmer until tender.', '{"calories": 600, "protein": 30, "fat": 30, "carbs": 30}', 4.9, 'Chef Jean'),
    ('Pad Thai', ARRAY['rice noodles', 'shrimp', 'egg', 'bean sprouts', 'peanuts', 'green onion', 'lime', 'fish sauce', 'soy sauce', 'tamarind paste', 'sugar', 'garlic', 'oil'], 'Thai', ARRAY['gluten-free'], 15, 15, 'Cook noodles and set aside. Sauté shrimp and garlic. Add noodles, egg, sauces, and sugar. Mix in sprouts, peanuts, and green onion. Serve with lime.', '{"calories": 400, "protein": 20, "fat": 15, "carbs": 50}', 4.8, 'Chef Somchai'),
    ('Tuna Poke Bowl', ARRAY['tuna', 'rice', 'soy sauce', 'sesame oil', 'avocado', 'cucumber', 'green onion', 'sesame seeds', 'ginger', 'lime', 'salt'], 'Hawaiian', ARRAY['gluten-free'], 15, 0, 'Marinate tuna in soy sauce, sesame oil, and ginger. Serve over rice with avocado, cucumber, and green onion. Sprinkle with sesame seeds and lime juice.', '{"calories": 350, "protein": 25, "fat": 15, "carbs": 30}', 4.9, 'Chef Keoni'),
    ('Garlic Butter Shrimp', ARRAY['shrimp', 'butter', 'garlic', 'lemon juice', 'parsley', 'salt', 'pepper'], 'American', ARRAY['none'], 10, 10, 'Sauté shrimp in butter and garlic. Add lemon juice and parsley. Season with salt and pepper.', '{"calories": 250, "protein": 20, "fat": 15, "carbs": 10}', 4.6, 'Chef Laura'),
    ('Vegetable Stir-Fry', ARRAY['broccoli', 'carrot', 'bell pepper', 'snap peas', 'soy sauce', 'ginger', 'garlic', 'sesame oil', 'green onion'], 'Chinese', ARRAY['vegan', 'gluten-free'], 10, 10, 'Stir-fry vegetables in sesame oil with garlic and ginger. Add soy sauce and serve with green onion.', '{"calories": 200, "protein": 5, "fat": 10, "carbs": 30}', 4.7, 'Chef Wei'),
    ('Lentil Soup', ARRAY['lentils', 'carrot', 'celery', 'onion', 'garlic', 'tomato paste', 'vegetable broth', 'thyme', 'bay leaf', 'salt', 'pepper'], 'American', ARRAY['vegan', 'gluten-free'], 15, 30, 'Sauté onion, garlic, carrot, and celery. Add lentils, broth, and spices. Simmer until lentils are tender.', '{"calories": 300, "protein": 15, "fat": 5, "carbs": 50}', 4.6, 'Chef Sarah'),
    ('Pancakes', ARRAY['flour', 'milk', 'egg', 'sugar', 'baking powder', 'salt', 'butter'], 'American', ARRAY['gluten'], 10, 15, 'Mix dry ingredients. Whisk in milk, egg, and melted butter. Cook on a griddle until bubbles form. Flip and cook until golden brown.', '{"calories": 350, "protein": 8, "fat": 15, "carbs": 50}', 4.5, 'Chef Jessica'),
    ('Classic Caesar Salad', ARRAY['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing'], 'American', ARRAY['none'], 10, 0, 'Toss lettuce with Caesar dressing. Add croutons and parmesan cheese.', '{"calories": 300, "protein": 10, "fat": 20, "carbs": 15}', 4.6, 'Chef Michael'),
    ('Chili Con Carne', ARRAY['ground beef', 'kidney beans', 'tomatoes', 'onion', 'garlic', 'chili powder', 'cumin', 'salt', 'pepper'], 'Mexican', ARRAY['none'], 15, 30, 'Brown beef with onion and garlic. Add beans, tomatoes, and spices. Simmer until thickened.', '{"calories": 500, "protein": 30, "fat": 25, "carbs": 40}', 4.7, 'Chef Pedro'),
    ('Goulash', ARRAY['beef', 'onion', 'paprika', 'tomatoes', 'bell pepper', 'carrot', 'potato', 'garlic', 'beef broth', 'salt', 'pepper'], 'Hungarian', ARRAY['none'], 20, 60, 'Brown beef with onion and garlic. Add paprika, tomatoes, and vegetables. Simmer until tender.', '{"calories": 600, "protein": 35, "fat": 30, "carbs": 40}', 4.8, 'Chef Zoltan'),
    ('Baked Ziti', ARRAY['ziti pasta', 'marinara sauce', 'mozzarella cheese', 'ricotta cheese', 'parmesan cheese', 'ground beef', 'onion', 'garlic', 'olive oil'], 'Italian', ARRAY['gluten'], 20, 40, 'Cook pasta and set aside. Sauté beef with onion and garlic. Mix with marinara sauce. Layer pasta, sauce, and cheeses. Bake until bubbly.', '{"calories": 600, "protein": 25, "fat": 25, "carbs": 70}', 4.7, 'Chef Luigi'),
    ('Mango Salsa', ARRAY['mango', 'red onion', 'cilantro', 'lime', 'jalapeño', 'salt'], 'Mexican', ARRAY['none'], 10, 0, 'Combine diced mango, red onion, chopped cilantro, lime juice, and minced jalapeño. Season with salt.', '{"calories": 100, "protein": 1, "fat": 0, "carbs": 25}', 4.5, 'Chef Rosa'),
    ('Pesto Pasta', ARRAY['pasta', 'basil pesto', 'parmesan cheese', 'pine nuts', 'garlic', 'olive oil'], 'Italian', ARRAY['gluten'], 15, 15, 'Cook pasta. Toss with basil pesto, pine nuts, and parmesan cheese.', '{"calories": 400, "protein": 10, "fat": 25, "carbs": 40}', 4.6, 'Chef Antonio'),
    ('Tom Yum Soup', ARRAY['shrimp', 'mushrooms', 'tomatoes', 'lemongrass', 'kaffir lime leaves', 'fish sauce', 'lime juice', 'chili paste', 'cilantro'], 'Thai', ARRAY['gluten-free'], 15, 20, 'Simmer shrimp, mushrooms, and tomatoes with lemongrass and lime leaves. Add fish sauce, lime juice, and chili paste. Garnish with cilantro.', '{"calories": 200, "protein": 20, "fat": 5, "carbs": 15}', 4.7, 'Chef Anong'),
    ('Roast Chicken', ARRAY['chicken', 'olive oil', 'garlic', 'rosemary', 'lemon', 'salt', 'pepper'], 'American', ARRAY['none'], 20, 90, 'Rub chicken with olive oil, garlic, rosemary, lemon, salt, and pepper. Roast until golden and cooked through.', '{"calories": 400, "protein": 30, "fat": 25, "carbs": 0}', 4.8, 'Chef Paul'),
    ('Pumpkin Pie', ARRAY['pumpkin puree', 'pie crust', 'eggs', 'sugar', 'milk', 'cinnamon', 'nutmeg', 'ginger', 'salt'], 'American', ARRAY['gluten'], 20, 60, 'Mix pumpkin puree with eggs, sugar, milk, and spices. Pour into pie crust. Bake until set.', '{"calories": 350, "protein": 5, "fat": 20, "carbs": 50}', 4.7, 'Chef Olivia'),
    ('Apple Crisp', ARRAY['apples', 'brown sugar', 'oats', 'flour', 'butter', 'cinnamon', 'nutmeg'], 'American', ARRAY['gluten'], 20, 45, 'Mix apples with cinnamon and sugar. Combine oats, flour, and butter to make a topping. Bake until bubbly and golden.', '{"calories": 400, "protein": 3, "fat": 20, "carbs": 60}', 4.6, 'Chef Ava'),
    ('Crab Cakes', ARRAY['crab meat', 'bread crumbs', 'mayonnaise', 'egg', 'mustard', 'Old Bay seasoning', 'parsley', 'salt', 'pepper'], 'American', ARRAY['none'], 15, 15, 'Mix crab meat with breadcrumbs, mayonnaise, egg, and seasonings. Form into cakes and pan-fry until golden.', '{"calories": 300, "protein": 20, "fat": 15, "carbs": 20}', 4.7, 'Chef Beth'),
    ('Chicken Alfredo', ARRAY['chicken breast', 'fettuccine', 'butter', 'heavy cream', 'parmesan cheese', 'garlic', 'salt', 'pepper'], 'Italian', ARRAY['gluten'], 20, 20, 'Cook chicken and set aside. Make Alfredo sauce with butter, cream, garlic, and cheese. Toss with fettuccine and chicken.', '{"calories": 600, "protein": 30, "fat": 35, "carbs": 40}', 4.8, 'Chef Giovanni'),
    ('Sushi Rolls', ARRAY['sushi rice', 'nori', 'raw fish', 'cucumber', 'avocado', 'soy sauce', 'wasabi', 'pickled ginger'], 'Japanese', ARRAY['none'], 20, 10, 'Prepare sushi rice and let it cool. Lay nori on a bamboo mat, spread rice, add fish, cucumber, and avocado. Roll tightly and slice.', '{"calories": 300, "protein": 15, "fat": 10, "carbs": 35}', 4.7, 'Chef Akira'),
    ('Churros', ARRAY['flour', 'sugar', 'salt', 'butter', 'eggs', 'cinnamon', 'water', 'oil'], 'Spanish', ARRAY['gluten'], 20, 30, 'Mix dough with flour, butter, eggs, and sugar. Pipe into hot oil and fry until golden. Roll in cinnamon sugar.', '{"calories": 250, "protein": 4, "fat": 15, "carbs": 30}', 4.8, 'Chef Isabel'),
    ('French Onion Soup', ARRAY['onions', 'beef broth', 'white wine', 'gruyere cheese', 'baguette', 'butter', 'flour', 'salt', 'pepper'], 'French', ARRAY['gluten'], 30, 60, 'Caramelize onions in butter. Add flour and wine. Stir in broth and simmer. Top with baguette slices and cheese, broil until melted.', '{"calories": 400, "protein": 15, "fat": 20, "carbs": 40}', 4.7, 'Chef Jacques'),
    ('Cheeseburger', ARRAY['ground beef', 'burger buns', 'cheddar cheese', 'lettuce', 'tomato', 'onion', 'ketchup', 'mustard', 'salt', 'pepper'], 'American', ARRAY['gluten'], 15, 10, 'Grill beef patties and top with cheese. Assemble burgers with buns, lettuce, tomato, onion, and condiments.', '{"calories": 500, "protein": 25, "fat": 30, "carbs": 40}', 4.8, 'Chef Tom'),
    ('Chicken Parmesan', ARRAY['chicken breast', 'bread crumbs', 'parmesan cheese', 'mozzarella cheese', 'marinara sauce', 'egg', 'flour', 'salt', 'pepper'], 'Italian', ARRAY['gluten'], 20, 30, 'Bread and fry chicken. Top with marinara sauce and cheeses. Bake until melted.', '{"calories": 600, "protein": 30, "fat": 35, "carbs": 40}', 4.7, 'Chef Francesco'),
    ('Lasagna', ARRAY['lasagna noodles', 'ground beef', 'marinara sauce', 'ricotta cheese', 'mozzarella cheese', 'parmesan cheese', 'egg', 'onion', 'garlic', 'salt', 'pepper'], 'Italian', ARRAY['gluten'], 30, 60, 'Layer cooked noodles with beef sauce, ricotta, and mozzarella. Bake until bubbly.', '{"calories": 700, "protein": 35, "fat": 40, "carbs": 60}', 4.8, 'Chef Bella'),
    ('Stuffed Bell Peppers', ARRAY['bell peppers', 'ground beef', 'rice', 'tomato sauce', 'onion', 'garlic', 'cheese', 'salt', 'pepper'], 'American', ARRAY['none'], 20, 30, 'Stuff peppers with a mixture of beef, rice, and sauce. Top with cheese and bake until peppers are tender.', '{"calories": 400, "protein": 25, "fat": 20, "carbs": 30}', 4.6, 'Chef Lisa'),
    ('Shrimp Scampi', ARRAY['shrimp', 'butter', 'garlic', 'lemon', 'white wine', 'parsley', 'salt', 'pepper', 'pasta'], 'Italian', ARRAY['gluten'], 15, 15, 'Cook shrimp in butter and garlic. Add lemon juice and wine. Toss with pasta and garnish with parsley.', '{"calories": 400, "protein": 25, "fat": 20, "carbs": 30}', 4.7, 'Chef Tony'),
    ('Greek Salad', ARRAY['cucumber', 'tomato', 'red onion', 'feta cheese', 'olives', 'olive oil', 'oregano', 'salt', 'pepper'], 'Greek', ARRAY['none'], 10, 0, 'Combine cucumber, tomato, onion, and olives. Toss with feta, olive oil, oregano, salt, and pepper.', '{"calories": 200, "protein": 5, "fat": 15, "carbs": 15}', 4.6, 'Chef Eleni'),
    ('Ratatouille', ARRAY['eggplant', 'zucchini', 'bell pepper', 'tomato', 'onion', 'garlic', 'olive oil', 'herbs', 'salt', 'pepper'], 'French', ARRAY['vegan'], 20, 40, 'Sauté vegetables with garlic and herbs. Simmer until tender.', '{"calories": 150, "protein": 5, "fat": 10, "carbs": 20}', 4.7, 'Chef Claire'),
    ('Crispy Tofu Stir-Fry', ARRAY['tofu', 'broccoli', 'carrot', 'bell pepper', 'soy sauce', 'hoisin sauce', 'ginger', 'garlic', 'sesame oil'], 'Chinese', ARRAY['vegan', 'gluten-free'], 15, 15, 'Cook tofu until crispy. Stir-fry vegetables with ginger, garlic, and sauces. Combine with tofu.', '{"calories": 300, "protein": 20, "fat": 15, "carbs": 25}', 4.8, 'Chef Mei'),
    ('Baked Salmon', ARRAY['salmon', 'lemon', 'dill', 'garlic', 'olive oil', 'salt', 'pepper'], 'American', ARRAY['none'], 10, 20, 'Season salmon with lemon, dill, and garlic. Bake until cooked through.', '{"calories": 350, "protein": 25, "fat": 20, "carbs": 0}', 4.8, 'Chef Laura'),
    ('Banana Bread', ARRAY['bananas', 'flour', 'sugar', 'eggs', 'butter', 'baking powder', 'salt'], 'American', ARRAY['gluten'], 15, 60, 'Mix bananas with sugar and eggs. Add flour, baking powder, and salt. Pour into a pan and bake.', '{"calories": 400, "protein": 5, "fat": 15, "carbs": 70}', 4.7, 'Chef Emma'),
    ('Chickpea Salad', ARRAY['chickpeas', 'cucumber', 'tomato', 'red onion', 'feta cheese', 'olive oil', 'lemon juice', 'salt', 'pepper'], 'Mediterranean', ARRAY['vegan'], 10, 0, 'Combine chickpeas with vegetables and feta. Toss with olive oil and lemon juice.', '{"calories": 250, "protein": 10, "fat": 10, "carbs": 30}', 4.6, 'Chef Nadia'),
    ('Bulgur Wheat Salad', ARRAY['bulgur wheat', 'tomato', 'cucumber', 'red onion', 'parsley', 'lemon juice', 'olive oil', 'salt', 'pepper'], 'Mediterranean', ARRAY['vegan', 'gluten-free'], 15, 0, 'Mix cooked bulgur with vegetables and parsley. Toss with lemon juice and olive oil.', '{"calories": 200, "protein": 7, "fat": 10, "carbs": 25}', 4.5, 'Chef Rami'),
    ('Roasted Brussels Sprouts', ARRAY['brussels sprouts', 'olive oil', 'garlic', 'salt', 'pepper'], 'American', ARRAY['none'], 10, 20, 'Toss brussels sprouts with olive oil, garlic, salt, and pepper. Roast until crispy.', '{"calories": 150, "protein": 5, "fat": 10, "carbs": 15}', 4.7, 'Chef Carol'),
    ('Spicy Lentil Soup', ARRAY['lentils', 'tomatoes', 'carrot', 'onion', 'garlic', 'cumin', 'chili powder', 'vegetable broth', 'salt', 'pepper'], 'American', ARRAY['vegan', 'gluten-free'], 15, 30, 'Cook lentils with tomatoes, carrot, onion, garlic, and spices. Add broth and simmer.', '{"calories": 300, "protein": 15, "fat": 5, "carbs": 50}', 4.6, 'Chef Thomas'),
    ('Quinoa Salad', ARRAY['quinoa', 'cucumber', 'tomato', 'feta cheese', 'olive oil', 'lemon juice', 'salt', 'pepper'], 'Mediterranean', ARRAY['gluten-free'], 15, 0, 'Mix cooked quinoa with vegetables and feta. Toss with olive oil and lemon juice.', '{"calories": 250, "protein": 8, "fat": 10, "carbs": 30}', 4.7, 'Chef Elena'),
    ('Beet Salad', ARRAY['beets', 'goat cheese', 'walnuts', 'arugula', 'balsamic vinaigrette'], 'Mediterranean', ARRAY['none'], 15, 0, 'Combine roasted beets with goat cheese, walnuts, and arugula. Toss with balsamic vinaigrette.', '{"calories": 200, "protein": 7, "fat": 15, "carbs": 20}', 4.6, 'Chef Olivia'),
    ('Basil Tomato Soup', ARRAY['tomatoes', 'basil', 'onion', 'garlic', 'vegetable broth', 'olive oil', 'salt', 'pepper'], 'American', ARRAY['vegan'], 15, 30, 'Sauté onions and garlic. Add tomatoes and broth, simmer. Blend and add basil.', '{"calories": 150, "protein": 3, "fat": 5, "carbs": 25}', 4.8, 'Chef Laura'),
    ('Roasted Cauliflower', ARRAY['cauliflower', 'olive oil', 'garlic', 'cumin', 'coriander', 'salt', 'pepper'], 'Mediterranean', ARRAY['vegan'], 10, 30, 'Toss cauliflower with olive oil and spices. Roast until tender.', '{"calories": 100, "protein": 3, "fat": 8, "carbs": 12}', 4.7, 'Chef Laura'),
    ('Pasta Primavera', ARRAY['pasta', 'bell pepper', 'zucchini', 'tomato', 'garlic', 'olive oil', 'parmesan cheese'], 'Italian', ARRAY['gluten'], 20, 30, 'Cook pasta and toss with sautéed vegetables and parmesan cheese.', '{"calories": 400, "protein": 10, "fat": 20, "carbs": 50}', 4.6, 'Chef Giovanni'),
    ('Chicken Tacos', ARRAY['chicken', 'taco shells', 'lettuce', 'tomato', 'cheese', 'sour cream', 'salsa', 'salt', 'pepper'], 'Mexican', ARRAY['gluten'], 15, 15, 'Cook chicken and shred. Fill taco shells with chicken and toppings.', '{"calories": 300, "protein": 20, "fat": 15, "carbs": 25}', 4.6, 'Chef Pedro'),
    ('Fettuccine Alfredo', ARRAY['fettuccine', 'butter', 'heavy cream', 'parmesan cheese', 'garlic', 'salt', 'pepper'], 'Italian', ARRAY['gluten'], 20, 20, 'Cook fettuccine. Make Alfredo sauce with butter, cream, garlic, and cheese. Toss with pasta.', '{"calories": 600, "protein": 15, "fat": 35, "carbs": 40}', 4.7, 'Chef Giovanni');