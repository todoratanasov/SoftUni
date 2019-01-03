using System;

namespace Problem_7._Cake_Ingredients
{
    class Program
    {
        static void Main(string[] args)
        {
            int counter = 0;
            

            for(int i=1; i<=20; i++)
            {
                
                string ingredient = Console.ReadLine();
                if (ingredient != "Bake!")
                {
                    Console.WriteLine($"Adding ingredient {ingredient}.");
                    counter = counter + 1;
                }
                else if (ingredient == "Bake!")
                {
                    i = 20;
                }
            }
            Console.WriteLine($"Preparing cake with {counter} ingredients.");
        }
    }
}
