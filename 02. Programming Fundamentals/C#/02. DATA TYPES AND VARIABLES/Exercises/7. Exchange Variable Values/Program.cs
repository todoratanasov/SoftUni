using System;

namespace _7._Exchange_Variable_Values
{
    class Program
    {
        static void Main(string[] args)
        {
            //Declare two integer variables a and b and assign them with 5 and 10 and after that exchange their values by using 
            //some programming logic.Print the variable values before and after the exchange, as shown below:

            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            int a1 = b;
            int b1 = a;


            Console.WriteLine($"Before:{Environment.NewLine}a = {a}{Environment.NewLine}b = {b}{Environment.NewLine}" +
                $"After:{Environment.NewLine}a = {a1}{Environment.NewLine}b = {b1}");
        }
    }
}
