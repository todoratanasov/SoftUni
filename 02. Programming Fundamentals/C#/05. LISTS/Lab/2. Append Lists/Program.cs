using System;
using System.Collections.Generic;
using System.Linq;

namespace _2._Append_Lists
{
    class Program
    {
        //Write a program to append several lists of numbers.
        //	Lists are separated by ‘|’.
        //	Values are separated by spaces(‘ ’, one or several)
        //	Order the lists from the last to the first, and their values from left to right.
        static void Main(string[] args)
        {
            List<string> items = Console.ReadLine().Split('|').ToList();
            items.Reverse();
            var result = new List<string>();
            foreach (var item in items)
            {
                List<string> nums = item.Split(' ').ToList();
                foreach (var num in nums)
                {
                    if (num != "") result.Add(num);
                }
            }
            Console.WriteLine(string.Join(" ", result));
        }



    }
}
