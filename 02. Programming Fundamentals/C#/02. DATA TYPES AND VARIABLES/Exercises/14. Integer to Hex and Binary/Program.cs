using System;

namespace _14._Integer_to_Hex_and_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create a program to convert a decimal number to hexadecimal and binary number and print it.

            int value = int.Parse(Console.ReadLine());
            string binary = Convert.ToString(value, 2);
            string hex= Convert.ToString(value, 16);
            string hexAnswer = hex.ToUpper();

            Console.WriteLine(hexAnswer);
            Console.WriteLine(binary);
        }
    }
}
