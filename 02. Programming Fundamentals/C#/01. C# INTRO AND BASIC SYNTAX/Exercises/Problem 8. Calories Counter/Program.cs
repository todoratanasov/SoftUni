using System;

namespace Problem_8._Calories_Counter
{
    class Program
    {
        static void Main(string[] args)
        {
            int counterOfIngredients = int.Parse(Console.ReadLine());
            int calories = 0;

            for (int i=1; i<=counterOfIngredients; i++)
            {
                string ingredient = Console.ReadLine();
                string toLower = ingredient.ToLower();
                
                
                //read the ingredients
                if (toLower== "cheese")
                {
                    calories = calories + 500;
                    //check for the •	Cheese – 500 calories                

                }
                else if (toLower== "tomato sauce")
                {
                    //•	Tomato sauce – 150 calories
                    calories = calories + 150;
                }else if (toLower=="salami")
                {
                    //•	Salami – 600 calories
                    calories = calories + 600;
                }else if (toLower=="pepper")
                {
                    //•	Pepper – 50 calories
                    calories = calories + 50;
                }
            }
            
            Console.WriteLine($"Total calories: {calories}");
        }
    }
}
