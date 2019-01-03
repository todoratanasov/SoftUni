using System;
using System.Collections.Generic;
using System.Linq;

namespace _5._Sort_Numbers
{
    class Program
    {
        //Read a list of decimal numbers and sort them in increasing order. Print the output as shown in the examples below.
        static void Main(string[] args)
        {
            List<double> value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToList();
            value.Sort();
            
           
            
                Console.Write($"{string.Join(" <= ", value)}");
            Console.WriteLine();
        }
    }
}
