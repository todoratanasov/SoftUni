using System;
using System.Linq;

namespace _3._Sum__Min__Max__Average
{
    class Program
    {
        //Write a program to read n integers and print their sum, min, max, first, last and average values.
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            int[] value = new int[count];

            for (int i = 0; i < count; i++)
            {
                value[i] = int.Parse(Console.ReadLine());
            }

            int sum = value.Sum();
            int min = value.Min();
            int max = value.Max();
            double average = value.Average();

            Console.WriteLine($"Sum = {sum}");
            Console.WriteLine($"Min = {min}");
            Console.WriteLine($"Max = {max}");
            Console.WriteLine($"Average = {average}");
        }
    }
}
