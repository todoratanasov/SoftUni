using System;

namespace _9._Extract_Middle_1__2_or_3_Elements
{
    class Program
    {
        //Write a method to extract the middle 1, 2 or 3 elements from array of n integers and print them.
        //•	n = 1 -> 1 element
        //•	even n -> 2 elements
        //•	odd n -> 3 elements
        //Create a program that reads an array of integers(space separated values) and prints the middle elements in the format shown in the examples.

        static void Main(string[] args)
        {
            string[] value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int length = value.Length;
            int[] array = new int[length];

            for (int i = 0; i < length; i++)
            {
                array[i] = int.Parse(value[i]);
            }
            if (length == 1)
            {
                //if length = 0
                Console.WriteLine(array[0]);
            }
            else if (length % 2 == 0)
            {
                //length is even
                Console.WriteLine("{ " + $"{array[(length / 2)-1]}, {array[(length / 2)]}" + " }");
            }
            else if (length % 2 != 0)
            {
                //length is odd
                int a = length / 2;
                Console.WriteLine("{ " + $"{array[a - 1]}, {array[a]}, {array[a+1]}"+" }");
            }
        }
    }
}
