using System;
using System.Collections.Generic;
using System.Linq;

namespace _3._Sum_Adjacent_Equal_Numbers
{
    class Program
    {
        //Write a program to sum all adjacent equal numbers in a list of decimal numbers, starting from left to right.
        //	After two numbers are summed, the obtained result could be equal to some of its neighbors and should be summed as well(see the examples 
        //below).
        //	Always sum the leftmost two equal neighbors(if several couples of equal neighbors are available).

        static void Main(string[] args)
        {
            List<double> value = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToList();
            double valueLength = value.Count; //5

            double counter = valueLength;

            for (int i = 1; i < counter;) // до 5, но i=4
            {
                double firstNumber = value[i]; //1 ... 4
                double secondNumber = value[i - 1]; //0...3
                double sum = 0;
                if (firstNumber==secondNumber)
                {
                    sum = firstNumber + secondNumber;
                    value.RemoveAt(i);
                    value.RemoveAt(i - 1);
                    value.Insert(i-1, sum);
                    counter--;
                    i = 1;
                }
                else
                {
                    i++;
                }
            }
            foreach (var item in value)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
        }
    }
}
