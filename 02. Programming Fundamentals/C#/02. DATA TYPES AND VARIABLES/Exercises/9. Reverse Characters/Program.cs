using System;

namespace _9._Reverse_Characters
{
    class Program
    {
        static void Main(string[] args)
        {
            //Write a program to ask the user for 3 letters and print them in reversed order.
            char first = Convert.ToChar(Console.ReadLine());
            char second = Convert.ToChar(Console.ReadLine());
            char third = Convert.ToChar(Console.ReadLine());

            Console.WriteLine($"{third}{second}{first}");
           
        }
    }
}
