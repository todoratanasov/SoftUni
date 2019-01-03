using System;

namespace _5._Rounding_Numbers_Away_from_Zero
{
    class Program
    {
        //Write a program to read an array of real numbers (space separated values), round them to the nearest integer in “away from 0” style and 
        //print the output as in the examples below.
        //Rounding in “away from zero” style means:
        //•	To round to the nearest integer, e.g. 2.9  3; -1.75  -2
        //•	In case the number is exactly in the middle of two integers(midpoint value), round it to the next integer which is away from the 0:

        static void Main(string[] args)
        {
            string value = Console.ReadLine();
            string[] items = value.Split(" ", StringSplitOptions.RemoveEmptyEntries);
            long elements = items.Length;

             double[] array = new double[elements];

            for (int i = 0; i < elements; i++)
            {
                array[i] = double.Parse(items[i]);
            }
            

            for (int i = 0; i < elements; i++)
            {
                long number = (long)array[i];
                double realNumber = Math.Round(array[i], 15);
                if (realNumber > 0)
                {
                    //when the number is positive

                    if (realNumber % number >= 0.5 && number != 0)
                    {
                        Console.WriteLine($"{realNumber} => {number + 1}");
                    }
                    else if (number == 0 && realNumber >= 0.5)
                    {
                        Console.WriteLine($"{realNumber} => {number + 1}");
                    }
                    else if (realNumber%number<0.5&&number==0)
                    {
                        Console.WriteLine($"{realNumber} => {number}");
                    }
                    else if (realNumber%number<0.5&&number!=0)
                    {
                        Console.WriteLine($"{realNumber} => {number}");
                    }
                }
                else
                {
                    //when the digit is negavite
                    if (number!=0&&realNumber%number>-0.5)
                    {
                        Console.WriteLine($"{realNumber} => {number}");
                    }
                    else if (number==0&&realNumber<=-0.5)
                    {
                        Console.WriteLine($"{realNumber} => {number-1}");
                    }
                    else if (number!=0&&realNumber%number<=-0.5)
                    {
                        Console.WriteLine($"{realNumber} => {number-1}");
                    }
                    else if (number==0&&realNumber>-0.5)
                    {
                        Console.WriteLine($"{realNumber} => {number}");
                    }
                }
            }
        }
    }
}
