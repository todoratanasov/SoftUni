using System;
using System.Linq;

namespace _8._Most_Frequent_Number
{
    class Program
    {
        //Write a program that finds the most frequent number in a given sequence of numbers. 
        //•	Numbers will be in the range[0…65535].
        //•	In case of multiple numbers with the same maximal frequency, print the left most of them.

        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int arrayLength = array.Length;

            int position = 0;

            int counter = 0;
            int maxCounter = 0;

            for (int i = 0; i < arrayLength; i++)
            {
                int number = array[i];

                for (int j = 0; j < arrayLength; j++)
                {
                    int numberToCompare = array[j];

                    if (number==numberToCompare)
                    {
                        counter++;
                        if (counter>maxCounter)
                        {
                            maxCounter = counter;
                            position = j;
                        }
                    }
                    else
                    {
                        counter = 0;
                        
                    }
                }
            }
            Console.WriteLine(array[position]);
        }
    }
}
