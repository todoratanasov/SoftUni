using System;
using System.Collections.Generic;
using System.Linq;

namespace _4._Largest_3_Numbers
{
    class Program
    {
       // Read a list of real numbers and print largest 3 of them.If less than 3 numbers exit, print all of them.
        static void Main(string[] args)
        {
            List<double> value = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(double.Parse).OrderByDescending(x => x).Take(3).ToList();

            
                foreach (var item in value)
                {
                    Console.Write($"{item} ");
                }
           
        }
    }
}
