using System;

namespace Problem_1._Choose_a_Drink
{
    class Program
    {
        static void Main(string[] args)
            //Write a program, which receives a profession (as a string) and chooses the perfect drink for the person. The possible
            //combinations are: 
            //•	“Water” – for “Athlete”
            //•	“Coffee” – for “Businessman” or “Businesswoman”
            //•	“Beer” – for “SoftUni Student”
            //•	“Tea” – for all other professions.

        {
            string proffesion = Console.ReadLine();

            switch (proffesion)
            {
                case "Athlete":
                    Console.WriteLine("Water");
                    break;
                case "Businessman":
                    Console.WriteLine("Coffee");
                    break;
                case "Businesswoman":
                    Console.WriteLine("Coffee");
                    break;
                case "SoftUni Student":
                    Console.WriteLine("Beer");
                    break;
                default:
                    Console.WriteLine("Tea");
                    break;

            }
        }
    }
}
