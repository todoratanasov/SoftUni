using System;
using System.Linq;

namespace _10._Pairs_by_Difference
{
    class Program
    {
        //Write a program that count the number of pairs in given array which difference is equal to given number.
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int arrayLength = array.Length;
            int dif = int.Parse(Console.ReadLine());
            int counter = 0;

            for (int i = 0; i < arrayLength; i++)
            {
                int num = array[i];
                if (i < arrayLength - 1)
                {                    
                    for (int j = i + 1; j < arrayLength; j++)
                    {
                        int numToCheck = array[j];
                        if (Math.Max(num, numToCheck)-Math.Min(num, numToCheck)==dif)
                        {
                            counter++;
                        }
                    }
                }
            }
            Console.WriteLine(counter);
        }
    }
}
