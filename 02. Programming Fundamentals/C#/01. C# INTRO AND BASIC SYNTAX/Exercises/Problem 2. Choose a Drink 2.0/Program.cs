using System;

namespace Problem_2._Choose_a_Drink_2._0
{
    class Program
    {
        static void Main(string[] args)
        //Your program needs to get smarter. Now you will receive on the second line the quantities of the drink and you have to 
        //print the calculated the price. You can see the prices of the drinks in the table below:
        {
            string profession = Console.ReadLine();
            int quantity = int.Parse(Console.ReadLine());

            
            double price = 0;
            

            switch (profession)
            {
                case "Athlete":
                    
                    price = 0.70;
                    break;
                case "Businessman":
                    
                    price = 1.00;
                    break;
                case "Businesswoman":
                    
                    price = 1.00;
                    break;
                case "SoftUni Student":
                   
                    price = 1.70;
                    break;
                default:
                    
                    price = 1.20;
                    break;

            }
            double totalPrice = price * quantity;
            Console.WriteLine($"The {profession} has to pay {totalPrice:f2}.");



        }
    }
}
